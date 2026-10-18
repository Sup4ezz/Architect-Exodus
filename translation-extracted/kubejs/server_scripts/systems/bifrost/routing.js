const $Bifrost$AsyncChunkLoader = Java.loadClass("dev.ftb.packcompanion.core.AsyncChunkLoader");

const $BifrostRouting$RTPConfig = {
  DEFAULT: {
    min: 10000,
    max: 25000,
  },
};
const $BifrostRouting$DimMinY = {
  "ftb:niflheim": 63,
};

function $BifrostRouting$GetDimMinY(level) {
  return $BifrostRouting$DimMinY[String(level.getDimension())];
}

/** Routes Player To Specified Realm
 * Target Dimension is hel, Hel is player/team private dimension
 * Teleport to player respawn location if it exists in dimension
 * if not, teleport to shared team spawn position.
 *
 * If player doesn't have a base, Default to Bifrost dimension
 *
 * Target Dimension is One of the 9 Realms,
 * Generate a Pseudo Random Location Based on Team UUID / Player Team UUID
 * $$RealmRTPConfig can be Configured per Dimension with {min, max} to Specify RTP Range from World Center
 * If no RTP Config is Found for the Dimension, then use $$RealmRTPConfig.DEFAULT for range
 *
 * If After $$RealmRTPMaxAttempts, Default to World Center
 *
 * @param {*} toLevel Target Level to teleport to (ResourceLocation) ex. "minecraft:overworld"
 * @param {*} player Player to get team for (ServerPlayer)
 * @returns
 */
function $BifrostRouting$RoutePlayerToRealm(toLevel, player) {
  let team = FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(player).orElse(null);
  if (team == null) {
    return;
  }

  let targetDimension = $$NineRealmLevels.find((val) => val == toLevel);

  let targetBlockPos;
  let playerYaw = player.getYaw();
  let playerPitch = player.getPitch();

  if (targetDimension == "ftb:hel") {
    let bimgr = FTBTeamBases$BaseInstanceManager.get(player.getServer());
    let liveBaseDetails = bimgr.getBaseForPlayer(player).orElse(null);
    if (liveBaseDetails == null) {
      ((targetBlockPos = new BlockPos(0, 67, 0)), (targetDimension = "ftb:bifrost"));
      playerYaw = 180;
      playerPitch = 0;
    } else if (player.getRespawnDimension() == liveBaseDetails.dimension()) {
      targetBlockPos = player.getRespawnPosition();
      targetDimension = liveBaseDetails.dimension().location();
    } else if (liveBaseDetails != null) {
      targetBlockPos = liveBaseDetails.spawnPos();
      targetDimension = liveBaseDetails.dimension().location();
    }
  } else if (targetDimension != null) {
    let targetLevel = player.getServer().getLevel(targetDimension);

    if (targetLevel != null) {
      if (targetDimension == "minecraft:the_end") {
        targetBlockPos = new BlockPos(100, 50, 0);
        for (let dx = -2; dx <= 2; dx++) {
          for (let dz = -2; dz <= 2; dz++) {
            try {
              targetLevel.getBlock(new BlockPos(100 + dx, 49, dz)).set("minecraft:obsidian");
              for (let dy = 0; dy <= 2; dy++) {
                targetLevel.getBlock(new BlockPos(100 + dx, 50 + dy, dz)).set("minecraft:air");
              }
            } catch (e) {
              console.error("[BifrostRouting] Failed to place block at (" + (100 + dx) + ", 49, " + dz + "): " + e);
            }
          }
        }
      } else if (targetDimension == "ftb:asgard") {
        targetBlockPos = new BlockPos(0, 61, -60);
        playerYaw = 0;
        playerPitch = -35;
      } else {
        let { min, max } = $BifrostRouting$RTPConfig[targetDimension] ?? $BifrostRouting$RTPConfig["DEFAULT"];
        let savedPos = $BifrostRouting$GetSavedEntryPoint(team, targetLevel);
        let entryBase = savedPos != null
          ? { x: savedPos.getX(), z: savedPos.getZ() }
          : $BifrostRouting$ComputeEntryBase(player, team, min, max, targetLevel);
        let entryYaw = playerYaw;
        let entryPitch = playerPitch;
        $Bifrost$AsyncChunkLoader.whenReady(targetLevel, entryBase.x >> 4, entryBase.z >> 4, 2, () => {
          let entryPos = savedPos != null
            ? savedPos
            : $BifrostRouting$ResolveEntryPoint(player, team, entryBase.x, entryBase.z, targetLevel);
          if (entryPos == null) {
            entryPos = targetLevel.getSharedSpawnPos();
          }
          entryPos = targetLevel.getWorldBorder().clampToBounds(entryPos.getX(), entryPos.getY(), entryPos.getZ());
          if (savedPos == null) {
            $BifrostRouting$CreateSafetyBox(targetLevel, entryPos);
          }
          $BifrostRouting$FinishRoute(player, team, toLevel, targetDimension, entryPos, entryYaw, entryPitch);
        });
        return;
      }
      let worldBorder = targetLevel.getWorldBorder();
      targetBlockPos = worldBorder.clampToBounds(targetBlockPos.getX(), targetBlockPos.getY(), targetBlockPos.getZ());
    }
  }

  if (targetBlockPos != null) {
    $BifrostRouting$FinishRoute(player, team, toLevel, targetDimension, targetBlockPos, playerYaw, playerPitch);
  }
}

function $BifrostRouting$FinishRoute(player, team, toLevel, targetDimension, targetBlockPos, playerYaw, playerPitch) {
    player.getServer().scheduleInTicks(1, () => {
      player.stopRiding();
      player.teleportTo(
        targetDimension,
        targetBlockPos.getX() + 0.5,
        targetBlockPos.getY() + 0.01,
        targetBlockPos.getZ() + 0.5,
        playerYaw,
        playerPitch
      );
      if (!player.isCreative() && !player.isSpectator()) {
        player.setGameMode("SURVIVAL");
      }

      if (toLevel != "ftb:hel" && toLevel != "ftb:bifrost" && toLevel != "minecraft:the_end" && toLevel != "ftb:asgard") {
        player.getServer().scheduleInTicks(1200, () => {
          player.getServer().runCommandSilent(`/ftb_arena place ${team} ${targetDimension}`);

          let arena_data = team.getExtraData()["ftbarenas"];
          let dim_data = arena_data != null ? arena_data[targetDimension] : null;
          if (dim_data != null && dim_data["pasting_until"] != null) {
            let remaining = dim_data["pasting_until"] - Utils.getSystemTime();
            if (remaining > 0) {
              let waitSec = Math.ceil(remaining / 1000);
              player.tell(Text.translate("ftb.arena.regen.in_progress", String(waitSec)).gold());
            }
          }
        });
      }
  });
}

/** Reads a team's stored entry point for a realm, without touching the world.
 *
 * @param {Internal.Team} team
 * @param {Internal.ServerLevel} level
 * @returns {Internal.BlockPos | null}
 */
function $BifrostRouting$GetSavedEntryPoint(team, level) {
  if (team == null) return null;
  let entry_data = team.getExtraData()["ftbentries"];
  if (entry_data == null) return null;

  let team_entry_point = entry_data[String(level.getDimension())];
  if (team_entry_point == null) return null;

  let x = team_entry_point["x"];
  let y = team_entry_point["y"];
  let z = team_entry_point["z"];
  let dimMinY = $BifrostRouting$GetDimMinY(level);
  if (x == null || y == null || z == null) return null;
  if (dimMinY != null && y < dimMinY) return null;

  return new BlockPos(x, y, z);
}

/** Picks the deterministic entry column for a team, without touching the world.
 *
 * @param {Internal.Player} player
 * @param {Internal.Team} team
 * @param {number} min
 * @param {number} max
 * @param {Internal.ServerLevel} level
 * @returns {{x: number, z: number}}
 */
function $BifrostRouting$ComputeEntryBase(player, team, min, max, level) {
  let teamOrPlayerUUID = team == null ? FTBTeamsKJS.getPlayerTeamId(player.getUuid()) : team.getId();
  let randomSource = Utils.newRandom(
    teamOrPlayerUUID.getLeastSignificantBits() ^ teamOrPlayerUUID.getMostSignificantBits()
  );

  let angle = randomSource.nextDouble() * JavaMath.PI * 2.0;
  let distance = min + randomSource.nextInt(max - min);
  let dimMinY = $BifrostRouting$GetDimMinY(level);
  let clampedBase = level.getWorldBorder().clampToBounds(
    Math.floor(Math.cos(angle) * distance),
    dimMinY != null ? dimMinY : player.blockPosition().getY(),
    Math.floor(Math.sin(angle) * distance)
  );

  return { x: clampedBase.getX(), z: clampedBase.getZ() };
}

/** Resolves the surface position for an entry column and stores it on the team.
 * Only call once the column's chunk is loaded.
 *
 * @param {Internal.Player} player
 * @param {Internal.Team} team
 * @param {number} baseX
 * @param {number} baseZ
 * @param {Internal.ServerLevel} level
 * @returns {Internal.BlockPos}
 */
function $BifrostRouting$ResolveEntryPoint(player, team, baseX, baseZ, level) {
  let dimMinY = $BifrostRouting$GetDimMinY(level);

  let buildHeight = Math.min(level.getMaxBuildHeight(), level.getMinBuildHeight() + level.getLogicalHeight()) - 1;
  let surfaceY = level.getHeight("MOTION_BLOCKING_NO_LEAVES", baseX, baseZ);
  if (surfaceY <= level.getMinBuildHeight()) {
    surfaceY = dimMinY != null ? dimMinY : player.blockPosition().getY();
  }
  if (dimMinY != null && surfaceY < dimMinY) {
    surfaceY = dimMinY;
  }
  if (surfaceY > buildHeight) {
    surfaceY = buildHeight;
  }

  let foundPos = new BlockPos(baseX, surfaceY, baseZ);

  if (team.getExtraData()["ftbentries"] == null) {
    team.getExtraData()["ftbentries"] = {}
  }
  let dim_key_save = String(level.getDimension())
  if (team.getExtraData()["ftbentries"][dim_key_save] == null) {
    team.getExtraData()["ftbentries"][dim_key_save] = {}
  }

  team.getExtraData()["ftbentries"][dim_key_save]["x"] = foundPos.getX();
  team.getExtraData()["ftbentries"][dim_key_save]["y"] = foundPos.getY();
  team.getExtraData()["ftbentries"][dim_key_save]["z"] = foundPos.getZ();

  team.markDirty();
  return foundPos;
}

function $BifrostRouting$CreateSafetyBox(level, blockpos) {
  level.getBlock(blockpos.below()).set("structure_block");
  level.getBlock(blockpos.below()).setEntityData({
    name: "ftb:safety_box",
    posX: -3,
    posY: 0,
    posZ: -3,
    sizeX: 7,
    sizeY: 7,
    sizeZ: 7,
    mode: "LOAD",
  });
  level.getBlock(blockpos).set("redstone_block");
}

const $Maledictus$Arena = {
  dimension: "ftb:bifrost",
  summonX: 100000.5,
  summonY: 150,
  summonZ: 100000.5,
  arrivalX: 100000.5,
  arrivalY: 146,
  arrivalZ: 99951.5,
  boxMinX: 99880,
  boxMinY: 112,
  boxMinZ: 99880,
  boxMaxX: 100120,
  boxMaxY: 212,
  boxMaxZ: 100120,
};

function $Maledictus$searchBox() {
  return new Minecraft$AABB(
    $Maledictus$Arena.boxMinX, $Maledictus$Arena.boxMinY, $Maledictus$Arena.boxMinZ,
    $Maledictus$Arena.boxMaxX, $Maledictus$Arena.boxMaxY, $Maledictus$Arena.boxMaxZ
  );
}

function $Maledictus$isAlive(level) {
  let hits = level.getEntitiesOfClass(Minecraft$Mob, $Maledictus$searchBox(), (e) => e.isAlive());
  for (let i = 0; i < hits.size(); i++) {
    if (String(hits.get(i).type).includes("maledictus")) return true;
  }
  return false;
}

function $Maledictus$inArena(player) {
  if (String(player.getLevel().getDimension()) != $Maledictus$Arena.dimension) return false;
  return (
    player.x >= $Maledictus$Arena.boxMinX && player.x <= $Maledictus$Arena.boxMaxX &&
    player.y >= $Maledictus$Arena.boxMinY && player.y <= $Maledictus$Arena.boxMaxY &&
    player.z >= $Maledictus$Arena.boxMinZ && player.z <= $Maledictus$Arena.boxMaxZ
  );
}

function $Maledictus$summon(server) {
  server.runCommandSilent(
    "execute in " + $Maledictus$Arena.dimension + " run summon cataclysm:maledictus "
      + $Maledictus$Arena.summonX + " " + $Maledictus$Arena.summonY + " " + $Maledictus$Arena.summonZ
  );
}

function $Maledictus$EnsureEncounter(player) {
  if (player == null || player.isFake()) return;
  if (player.stages.has("ftb:asgard_unlocked")) return;
  if (!$Maledictus$inArena(player)) return;
  if ($Maledictus$isAlive(player.getLevel())) return;
  console.warn("[Valkerie] " + player.username
    + " is in the Maledictus arena with no boss alive and no asgard_unlocked -> re-summoning");
  $Maledictus$summon(player.getServer());
}

PlayerEvents.loggedIn((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(60, () => {
    $Maledictus$EnsureEncounter(player);
  });
});

CommonAddedEvents.playerChangeDimension((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(60, () => {
    $Maledictus$EnsureEncounter(player);
  });
});

PlayerEvents.respawned((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(60, () => {
    $Maledictus$EnsureEncounter(player);
  });
});

function $BifrostRouting$ValkerieInterrupt(player) {
  let server = player.getServer()
  console.info("[Valkerie] Interrupt start for " + player.username);
  player.sendData("ftb:asgard_screen_shatter");
  FDLib$FDLibCalls.startCutsceneForPlayer(
    player,
    new FDLib$CutsceneData().addScreenEffect(
      0,
      FDLib$FDScreenEffects.SCREEN_COLOR.get(),
      new FDLib$ScreenColorData(0 / 255, 0 / 255, 0 / 255, 255 / 255),
      10,
      15,
      0
    )
  );
  player.addMotion(0, 0.8, 25);
  player.hasImpulse = true;
  player.hurtMarked = true;
  server.scheduleInTicks(25, () => {
    FDLib$FDLibCalls.startCutsceneForPlayer(player, MaledictusCutscene);
    player.teleportTo($Maledictus$Arena.dimension, 100000.5, 133, 99912.5, 0, 0);
    console.info("[Valkerie] " + player.username + " teleported to arena approach");
    let particles = new FDLib$ParticleEmitterData$Builder("alexscaves:deep_one_magic")
      .particlesPerTick(100)
      .processor(new FDLib$CircleSpawnProcessor(new Vec3d(0, 1, 0), 0.1, 0.7, 3.5))
      .lifetime(100)
      .position(new Vec3d($Maledictus$Arena.summonX, $Maledictus$Arena.summonY, $Maledictus$Arena.summonZ))
      .build();
    server.scheduleInTicks(75, () => {
      if (!$Maledictus$isAlive(player.getLevel())) {
        FDLib$FDLibCalls.addParticleEmitter(player, particles);
      }
    });

    server.scheduleInTicks(125, () => {
      if ($Maledictus$isAlive(player.getLevel())) {
        console.info("[Valkerie] Maledictus already alive in arena, skipping summon for " + player.username);
      } else {
        console.info("[Valkerie] Summoning Maledictus for " + player.username);
        $Maledictus$summon(server);
      }
      player.teleportTo(
        $Maledictus$Arena.dimension,
        $Maledictus$Arena.arrivalX, $Maledictus$Arena.arrivalY, $Maledictus$Arena.arrivalZ,
        0, 0
      );
      server.scheduleInTicks(40, () => {
        if (!$Maledictus$isAlive(player.getLevel())) {
          console.warn("[Valkerie] Maledictus missing after summon for " + player.username + " -> retrying");
          $Maledictus$summon(server);
        } else {
          console.info("[Valkerie] Encounter ready for " + player.username);
        }
      });
    });
  });
}

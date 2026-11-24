// Prefix-matches stripped_id against $$BossRealmMap keys so that recipe
// Returns { dimension, boss_key } or null if no match.
function $Summoning$resolveBossRealm(stripped_id) {
  var result = null;
  $$BossRealmMap.entrySet().forEach(function(entry) {
    var key = entry.getKey().toString();
    if (stripped_id === key || stripped_id.startsWith(key + "_")) {
      result = { dimension: entry.getValue().toString(), boss_key: key };
    }
  });
  return result;
}

// For creative players: sends a bypass notice and returns true (caller must return).
// For normal players: cancels the event and returns false (caller must return).
function $Summoning$bypassOrCancel(player, event, label) {
  if (player.isCreative()) {
    player.tell(Text.translate("ftb.summoning.arena.creative_bypass", label));
    return true;
  }
  event.cancel();
  return false;
}

// Bridges SummoningRituals.start (where the summoning team is fully validated)
// to EntityEvents.spawned (where the boss entity actually appears) without
// re-guessing team ownership from the boss's homePos, which doesn't reliably
// match the altar position and silently drops the association in multiplayer
// when multiple teams' arenas share a dimension.
let $Summoning$PendingSummons = [];
const $Summoning$PendingSummonTTLTicks = 1200;

SummoningRituals.start((event) => {
  const { level, recipe, player, pos } = event;
  let recipeId = recipe.id.toString();

  if (!recipeId.contains("ftb:summoning/boss")) return;
  // nidhoggr has custom handling — skip the arena handler.
  if (recipeId.contains("boss/nidhoggr")) return;

  console.info("[FTB Summoning] Ritual started: recipe=" + recipeId + " pos=" + pos);

  if (level == null) {
    console.error(`[FTB Summoning] Ritual attempt with null level at '${pos}'`);
    event.cancel();
    return;
  }

  if (level.isClientSide()) return;

  let dimension_location = $Arena$Utils.resolveDimension(level.getDimension());
  console.info("[FTB Summoning] Resolved dimension: " + dimension_location);

  if (player == null) {
    console.error(`[FTB Summoning] Ritual attempt with null player at '${pos}'`);
    event.cancel();
    return;
  }

  if (player.isFake()) {
    player.tell(Text.translate("ftb.summoning.arena.fake_player_denied"));
    if ($Summoning$bypassOrCancel(player, event, "Fake Player")) return;
    return;
  }

  let stripped_id = recipeId.replace("summoning/boss/", "");
  let boss_resolved = $Summoning$resolveBossRealm(stripped_id);

  if (boss_resolved == null) {
    console.error(`[FTB Summoning] No mapping for '${recipeId}' in $$BossRealmMap`);
    player.tell(Text.translate("ftb.summoning.arena.error.no_mapping", recipeId));
    if ($Summoning$bypassOrCancel(player, event, "No Mapping")) return;
    return;
  }

  let boss_dimension = boss_resolved.dimension;
  let boss_name = boss_resolved.boss_key.split(":")[1];
  console.info("[FTB Summoning] Boss dimension=" + boss_dimension + " player dimension=" + dimension_location);

  if (boss_dimension != dimension_location) {
    player.tell(Text.translate("ftb.summoning.arena.wrong_dimension", Utils.toTitleCase(boss_name), dimension_location));
    if ($Summoning$bypassOrCancel(player, event, "Wrong Dimension")) return;
    return;
  }

  let team = FTBTeamsKJS.getTeamForPlayer(player);

  if (team == null) {
    console.error(`[FTB Summoning] Ritual attempt with null team for '${player}'`);
    player.tell(Text.translate("ftb.summoning.arena.error.invalid_team"));
    if ($Summoning$bypassOrCancel(player, event, "Invalid Team")) return;
    return;
  }

  let arena_data = team.getExtraData()["ftbarenas"];

  if (arena_data == null) {
    console.error("[FTB Summoning] Arena data is null at runtime");
    player.tell(Text.translate("ftb.summoning.arena.error.invalid_team_state", team.getShortName()));
    if ($Summoning$bypassOrCancel(player, event, "Invalid Team State")) return;
    return;
  }

  let arena_definition = $Arena$RealmArenas[dimension_location];

  if (arena_definition == null) {
    console.warn(`[FTB Summoning] No arena definition for '${dimension_location}'`);
    player.tell(Text.translate("ftb.summoning.arena.error.invalid_boss", Utils.toTitleCase(dimension_location.getPath())));
    if ($Summoning$bypassOrCancel(player, event, "Invalid Boss")) return;
    return;
  }

  let dim_data = arena_data[dimension_location];
  console.info("[FTB Summoning] dim_data=" + JSON.stringify(dim_data));

  if (dim_data == null) {
    player.tell(Text.translate("ftb.summoning.arena.not_unlocked"));
    if ($Summoning$bypassOrCancel(player, event, "Not Unlocked")) return;
    return;
  }

  let altar_offset = arena_definition.altar_offset;
  let expected_x = dim_data.x + altar_offset.x;
  let expected_y = dim_data.y + altar_offset.y;
  let expected_z = dim_data.z + altar_offset.z;
  console.info("[FTB Summoning] altar_offset=" + JSON.stringify(altar_offset)
    + " arena_pos=(" + dim_data.x + "," + dim_data.y + "," + dim_data.z + ")"
    + " expected_altar=(" + expected_x + "," + expected_y + "," + expected_z + ")"
    + " actual_pos=(" + pos.x + "," + pos.y + "," + pos.z + ")");

  if (
    expected_x != pos.x ||
    expected_y != pos.y ||
    expected_z != pos.z
  ) {
    console.warn("[FTB Summoning] Position mismatch -- cancelling");
    player.tell(Text.translate("ftb.summoning.arena.invalid_location"));
    if ($Summoning$bypassOrCancel(player, event, "Invalid Location")) return;
    return;
  }

  if (dim_data["state"] == "ACTIVE") {
    let boss_uuids = dim_data["boss_uuids"];
    if (boss_uuids != null && !boss_uuids.isEmpty()) {
      player.tell(Text.translate("ftb.summoning.arena.already_active"));
      if ($Summoning$bypassOrCancel(player, event, "Already Active")) return;
      return;
    }
  }

  $Summoning$PendingSummons.push({
    dimension: dimension_location.toString(),
    x: pos.x,
    y: pos.y,
    z: pos.z,
    teamId: team.getTeamId().toString(),
    expireTick: Utils.getServer().getTickCount() + $Summoning$PendingSummonTTLTicks,
  });
});

EntityEvents.spawned((event) => {
  let entity = event.getEntity();
  let isArenaBoss = entity
    .getEntityType()
    .getTags()
    .anyMatch((tag) => tag.location() == "ftb:arena_boss");
  if (!isArenaBoss) return;
  let level = event.getLevel();
  if (level == null) return;
  if (level.isClientSide()) return;

  let resolved_dimension = $Arena$Utils.resolveDimension(level.getDimension());
  let dimStr = resolved_dimension.toString();

  let now = Utils.getServer().getTickCount();
  let ex = entity.getX();
  let ey = entity.getY();
  let ez = entity.getZ();

  let pending = null;
  let bestDistSq = -1;
  let remaining = [];
  for (let i = 0; i < $Summoning$PendingSummons.length; i++) {
    let p = $Summoning$PendingSummons[i];
    if (p.expireTick < now) continue;
    if (p.dimension == dimStr) {
      let dx = p.x - ex;
      let dy = p.y - ey;
      let dz = p.z - ez;
      let distSq = dx * dx + dy * dy + dz * dz;
      if (pending == null || distSq < bestDistSq) {
        if (pending != null) remaining.push(pending);
        pending = p;
        bestDistSq = distSq;
        continue;
      }
    }
    remaining.push(p);
  }
  $Summoning$PendingSummons = remaining;

  if (pending == null) return;

  let team = FTBTeamsKJS.getManager().getTeamById(UUID.fromString(pending.teamId));
  if (team == null) return;

  let arena_data = $Arena$Utils.getOrCreateArenaData(team);
  let dim_data = arena_data[resolved_dimension];
  if (dim_data == null) return;

  dim_data["state"] = "ACTIVE";
  dim_data["active_since"] = Utils.getSystemTime();
  if (dim_data["boss_uuids"] == null) dim_data["boss_uuids"] = Utils.newList();
  dim_data["boss_uuids"].add(Minecraft$StringTag.valueOf(entity.getStringUuid()));
  team.markDirty();

  let bossData = entity.getPersistentData();
  bossData["teamId"] = team.getTeamId().toString();
  bossData["arenaDim"] = resolved_dimension;
});

EntityEvents.death((event) => {
  let entity = event.getEntity();
  let isArenaBoss = entity
    .getEntityType()
    .getTags()
    .anyMatch((tag) => tag.location() == "ftb:arena_boss");
  if (!isArenaBoss) return;
  let level = event.getLevel();
  if (level == null) return;
  if (level.isClientSide()) return;

  let resolved = $Arena$Utils.resolveTeamFromBoss(entity);
  if (resolved == null) return;

  let boss_uuids = resolved.dim_data["boss_uuids"];
  if (boss_uuids == null) return;

  boss_uuids.removeIf(function (uuid) {
    return uuid.toString().replace(/"/g, "") == entity.getStringUuid();
  });

  if (boss_uuids.isEmpty()) {
    resolved.dim_data["state"] = "FINISHED";
    resolved.dim_data["last_visited"] = Utils.getSystemTime();
    delete resolved.dim_data["active_since"];

    if (resolved.dim_data["x"] != null) {
      $Arena$Utils.releaseArenaChunks(
        level,
        new BlockPos(resolved.dim_data["x"], resolved.dim_data["y"], resolved.dim_data["z"])
      );
    }
  }
  resolved.team.markDirty();
});

NativeEvents.onEvent("dev.ftb.mods.ftbragnarok.event.RagnarokBossEvent$BossFightReset", function (event) {
  let boss = event.getBoss();

  let resolved = $Arena$Utils.resolveTeamFromBoss(boss);
  if (resolved == null) return;

  if (resolved.dim_data["state"] != "ACTIVE") return;

  let boss_uuids = resolved.dim_data["boss_uuids"];
  if (boss_uuids != null) {
    boss_uuids.removeIf(function (uuid) {
      return uuid.toString().replace(/"/g, "") == boss.getStringUuid();
    });
  }

  if (boss_uuids == null || boss_uuids.isEmpty()) {
    resolved.dim_data["state"] = "FINISHED";
    resolved.dim_data["last_visited"] = Utils.getSystemTime();
    delete resolved.dim_data["active_since"];

    $Arena$Utils.releaseArenaChunks(event.getLevel(), event.getArenaPos());

    $Arena$Console.info(
      "All bosses reset for " + resolved.team.getShortName() + " in " + resolved.arenaDim + " -- marking FINISHED for regen"
    );
  } else {
    $Arena$Console.info(
      "Boss reset for " +
        resolved.team.getShortName() +
        " in " +
        resolved.arenaDim +
        " -- " +
        boss_uuids.size() +
        " boss(es) still tracked"
    );
  }
  resolved.team.markDirty();
});

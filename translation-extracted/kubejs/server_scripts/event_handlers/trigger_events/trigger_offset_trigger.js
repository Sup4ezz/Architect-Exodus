let nidhoggDragonTriggers = {
  "ftb:nidhogg_rage_trigger": [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon"
  ]
};
let nidhoggDragonCooldown = 80;
let nidhoggDragonAgeTicks = 1200000;
let nidhoggDragonMaxHealth = 512;
let nidhoggDragonScanRadius = 32;
let nidhoggBossCooldown = 6000;

let NidhoggBoss = Java.loadClass("dev.ftb.mods.ftbragnarok.entity.NidhoggBoss");

function $NidhoggUtils$countNidhoggNear(level, x, y, z, radius) {
  radius = radius !== undefined ? radius : 64;
  let box = new Minecraft$AABB(x - radius, y - radius, z - radius, x + radius, y + radius, z + radius);
  return level.getEntitiesOfClass(NidhoggBoss, box).size();
}

function $NidhoggUtils$rageDragonInArea(level, x, y, z, radius) {
  let box = new Minecraft$AABB(x - radius, y - radius, z - radius, x + radius, y + radius, z + radius);
  let hits = level.getEntitiesOfClass(Minecraft$Mob, box, function (e) {
    if (!e.isAlive()) return false;
    let tags = e.getTags();
    return tags != null && tags.contains("ftb_nidhogg_rage");
  });
  return hits.size() > 0;
}

function $NidhoggUtils$pickDragon(options, lastKey, pData) {
  let last = pData.contains(lastKey) ? pData.getString(lastKey) : "";
  let pool = options.filter(function(g) { return g !== last; });
  if (pool.length === 0) pool = options;
  let chosen = pool[Math.floor(Math.random() * pool.length)];
  pData.putString(lastKey, chosen);
  return chosen;
}

function $NidhoggUtils$rescaleDragonAttributes(dragon) {
  try {
    if (typeof dragon.setConfigurableAttributes === "function") {
      dragon.setConfigurableAttributes();
    }
    let cls = dragon.getClass();
    let m = null;
    while (cls != null && m == null) {
      try {
        m = cls.getDeclaredMethod("updateAttributes");
      } catch (e) {
        cls = cls.getSuperclass();
      }
    }
    if (m != null) {
      m.setAccessible(true);
      m.invoke(dragon);
    }
    let healthAttr = dragon.getAttribute("minecraft:generic.max_health");
    if (healthAttr != null) {
      healthAttr.setBaseValue(nidhoggDragonMaxHealth);
    }
    if (typeof dragon.setHealth === "function") {
      dragon.setHealth(nidhoggDragonMaxHealth);
    }
  } catch (e) {
    console.warn("[NidhoggDragon] rescaleDragonAttributes failed: " + e);
  }
}

function $NidhoggUtils$spawnRageDragon(player, dragonType, x, y, z) {
  let level = player.getLevel();
  let dragon = level.createEntity(dragonType);
  if (dragon == null) return null;
  dragon.setPos(x + 0.5, y, z + 0.5);
  dragon.mergeNbt({
    AgeTicks: nidhoggDragonAgeTicks,
    AgingDisabled: 1,
    Hunger: 50,
    Tame: 0,
    HasHomePosition: 0,
    Sleeping: 0,
    PersistenceRequired: 1,
    Variant: Math.floor(Math.random() * 4)
  });
  dragon.spawn();
  $NidhoggUtils$rescaleDragonAttributes(dragon);
  dragon.addTag("ftb_nidhogg_rage");
  dragon.addTag("ftb_rage_owner_" + player.getStringUuid());
  if (typeof dragon.setTarget === "function") dragon.setTarget(player);
  if (typeof dragon.setLastHurtByMob === "function") dragon.setLastHurtByMob(player);
  return dragon;
}

NativeEvents.onEvent("dev.ftb.packcompanion.features.triggerblock.TriggerBlockEvent", (event) => {
  let player = event.getPlayer();
  if (player.getLevel().isClientSide()) return;

  let stages = player.getStages();
  let id = event.getIdentifier();
  let pos = event.getPos();
  let dim = String(player.getLevel().getDimension());
  let name = player.getName().getString();

  if (dim == "ftb:nidhogg" && nidhoggDragonTriggers[id]) {
    let dragonOptions = nidhoggDragonTriggers[id];
    let gx = pos.getX();
    let gy = pos.getY() + 4;
    let gz = pos.getZ();
    let server = player.getServer();
    let now = server.getTickCount();

    let posKey = pos.getX() + "_" + pos.getY() + "_" + pos.getZ();
    let sData = server.persistentData;
    let pendingKey = "ftb_rage_pending_" + posKey;
    let cdKey = "ftb_rage_cd_" + posKey;

    if (sData[pendingKey]) return;
    if ($NidhoggUtils$rageDragonInArea(player.getLevel(), gx, gy, gz, nidhoggDragonScanRadius)) return;

    let lastComplete = sData[cdKey] || 0;
    if ((now - lastComplete) < nidhoggDragonCooldown) return;

  
    let pData = player.persistentData;
    let lastTypeKey = "nidhogg_dragon_last";
    let dragonType = $NidhoggUtils$pickDragon(dragonOptions, lastTypeKey, pData);
    console.info("[NidhoggDragon] " + name + " -> telegraphing '" + dragonType + "' at " + gx + "," + gy + "," + gz);

    sData[pendingKey] = true;

    if (FDLib$ParticleEmitterData$Builder != null && FDLib$CircleSpawnProcessor != null) {
      let particles = new FDLib$ParticleEmitterData$Builder("minecraft:flame")
        .particlesPerTick(100)
        .processor(new FDLib$CircleSpawnProcessor(new Vec3d(0, 1, 0), 0.1, 0.7, 3.5))
        .lifetime(40)
        .position(new Vec3d(gx + 0.5, gy, gz + 0.5))
        .build();
      FDLib$FDLibCalls.addParticleEmitter(player, particles);
    }

    server.runCommandSilent(
      "execute in ftb:nidhogg run playsound minecraft:item.firecharge.use master @a " + gx + " " + gy + " " + gz + " 3 0.5"
    );

    server.scheduleInTicks(40, function (callback) {
      sData[pendingKey] = false;
      sData[cdKey] = server.getTickCount();
      let dragon = $NidhoggUtils$spawnRageDragon(player, dragonType, gx, gy, gz);
      if (dragon != null) {
        server.runCommandSilent(
          "execute in ftb:nidhogg run particle minecraft:explosion " + (gx + 0.5) + " " + gy + " " + (gz + 0.5) + " 1 1 1 0 8"
        );
        server.runCommandSilent(
          "execute in ftb:nidhogg run playsound minecraft:entity.ender_dragon.growl master @a " + gx + " " + gy + " " + gz + " 4 0.7"
        );
        console.info("[NidhoggDragon] Spawned " + dragonType + " uuid=" + dragon.getStringUuid() + " hostile -> " + name);
      } else {
        console.warn("[NidhoggDragon] Failed to spawn " + dragonType + " for " + name);
      }
    });
    return;
  }

  if (dim == "ftb:nidhogg" && id == "ftb:nidhogg_boss_trigger") {
    if (stages.has("ftb:nidhogg_boss_killed")) {
      return;
    }

    let bx = pos.getX();
    let by = pos.getY();
    let bz = pos.getZ() + 47;

    if ($NidhoggUtils$countNidhoggNear(player.getLevel(), bx, by, bz) > 0) {
      return;
    }

    console.info("[NidhoggBoss] " + name + " -> summoning ftbragnarok:nidhogg at " + bx + "," + by + "," + bz);
    player.getServer().runCommandSilent(
      "execute in ftb:nidhogg run summon ftbragnarok:nidhogg " + bx + " " + by + " " + bz
    );
    return;
  }

  if (id == "ftb:bifrost_hel_trigger") {
    console.info("[TriggerOffset] MATCH hel (no stage gate) -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("ftb:hel", player);
  } else if (stages.has("ftb:jotunheim_unlocked") && id == "ftb:bifrost_jotunheim_trigger") {
    console.info("[TriggerOffset] MATCH jotunheim -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("ftb:jotunheim", player);
  } else if (stages.has("ftb:niflheim_unlocked") && id == "ftb:bifrost_niflheim_trigger") {
    console.info("[TriggerOffset] MATCH niflheim -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("ftb:niflheim", player);
  } else if (stages.has("ftb:muspelheim_unlocked") && id == "ftb:bifrost_muspelheim_trigger") {
    console.info("[TriggerOffset] MATCH muspelheim -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("ftb:muspelheim", player);
  } else if (stages.has("ftb:midgard_unlocked") && id == "ftb:bifrost_midgard_trigger") {
    console.info("[TriggerOffset] MATCH midgard -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("minecraft:overworld", player);
  } else if (stages.has("ftb:ginnungagap_unlocked") && id == "ftb:bifrost_ginnungagap_trigger") {
    console.info("[TriggerOffset] MATCH ginnungagap -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("minecraft:the_end", player);
  } else if (stages.has("ftb:nidavellir_unlocked") && id == "ftb:bifrost_nidavellir_trigger") {
    console.info("[TriggerOffset] MATCH nidavellir (no route impl)");
  } else if (stages.has("ftb:alfheim_unlocked") && id == "ftb:bifrost_alfheim_trigger") {
    console.info("[TriggerOffset] MATCH alfheim -> routing " + name);
    $BifrostRouting$RoutePlayerToRealm("mythicbotany:alfheim", player);
  } else if (id == "ftb:bifrost_asgard_trigger") {
    if (stages.has("boss_twins_killed") && !stages.has("ftb:asgard_unlocked")) {
      console.info("[TriggerOffset] MATCH asgard -> valkerie interrupt for " + name);
      $BifrostRouting$ValkerieInterrupt(player);
      return;
    }
    if (stages.has("ftb:asgard_unlocked")) {
      console.info("[TriggerOffset] MATCH asgard -> routing " + name);
      $BifrostRouting$RoutePlayerToRealm("ftb:asgard", player);
      return;
    }
    console.warn("[TriggerOffset] asgard trigger but no stage (boss_twins_killed=" + stages.has("ftb:boss_twins_killed") + ", asgard_unlocked=" + stages.has("ftb:asgard_unlocked") + ") -> skipping " + name);
  } else {
    let knownIds = [
      "ftb:bifrost_hel_trigger",
      "ftb:bifrost_jotunheim_trigger",
      "ftb:bifrost_niflheim_trigger",
      "ftb:bifrost_muspelheim_trigger",
      "ftb:bifrost_midgard_trigger",
      "ftb:bifrost_ginnungagap_trigger",
      "ftb:bifrost_nidavellir_trigger",
      "ftb:bifrost_alfheim_trigger",
      "ftb:bifrost_asgard_trigger",
      "ftb:nidhogg_rage_trigger",
      "ftb:nidhogg_boss_trigger",
      "ftb:bifrost_bridge",
    ];
    if (knownIds.indexOf(id) === -1) {
      console.warn("[TriggerOffset] UNKNOWN identifier='" + id + "' for " + name + " — not handled by this script");
    } else {
      let required = {
        "ftb:bifrost_jotunheim_trigger": ["ftb:jotunheim_unlocked"],
        "ftb:bifrost_niflheim_trigger": ["ftb:niflheim_unlocked"],
        "ftb:bifrost_muspelheim_trigger": ["ftb:muspelheim_unlocked"],
        "ftb:bifrost_midgard_trigger": ["ftb:midgard_unlocked"],
        "ftb:bifrost_ginnungagap_trigger": ["ftb:ginnungagap_unlocked"],
        "ftb:bifrost_nidavellir_trigger": ["ftb:nidavellir_unlocked"],
        "ftb:bifrost_alfheim_trigger": ["ftb:alfheim_unlocked"],
      };
      let missing = required[id].filter(function (s) {
        return !stages.has(s);
      });
      console.warn(
        "[TriggerOffset] SKIP " + name + " on '" + id + "' — missing stage(s): " + missing.join(", ")
      );
    }
  }
});

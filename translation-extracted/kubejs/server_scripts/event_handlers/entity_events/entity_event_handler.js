// Cancels fall damage on players entirely
EntityEvents.hurt("minecraft:player", (event) => {
  const { entity, source } = event;
  if (source.toString() === "DamageSource (fall)") event.cancel();
});

EntityEvents.hurt("ftblh:little_helper", (event) => {
  event.cancel();
});

EntityEvents.hurt((event) => {
  const { entity, source, server } = event;
  let actual = source.getActual();
  if (!actual) return;
  if (source.getActual().getType() != "ftblh:little_helper") return;
  if (entity.isPlayer()) event.cancel();

  let owner = source.getActual().getOwner().get();
  server.scheduleInTicks(1, () => {
    entity.setLastHurtByPlayer(owner);
    entity.setLastHurtByMob(owner);
  });
});

// Track scythe kills in arena biomes so we can suppress their spirit spawns
var scytheArenaKills = Utils.newList();

EntityEvents.death((event) => {
  try {
    let damage_source = event.getSource();

    let player = damage_source.getPlayer();

    if (player == null) return;

    if (player.isFake()) return;

    let weapon = damage_source.getWeapon().orElse(null);

    if (weapon == null) return;

    if (!weapon.id.includes("scythe")) return;

    let level = event.getLevel();

    if (level == null) return;

    if (level.isClientSide()) return;

    let dimension = level.getDimension();

    let dimension_location = dimension;

    if (FTBTeamBases$DimensionUtils.isPrivateTeamDimension(dimension)) {
      dimension_location = new ResourceLocation("ftb:hel");
    }

    let entity = event.getEntity();

    let position = entity.position().add(0, entity.getEyeHeight() / 2, 0);
    position = new Vec3d(position.x(), JavaMath.round(position.y()), position.z());

    let blockPos = new BlockPos(Math.floor(position.x()), Math.floor(position.y()), Math.floor(position.z()));
    if (!$Arena$isArena(level, blockPos)) return;

    scytheArenaKills.push(position);

    event.getServer().scheduleInTicks(20, () => {
      scytheArenaKills.removeIf((pos) => pos == position);
    });
  } catch (e) {
    // Silently ignore errors to avoid disrupting the death pipeline
  }
});

EntityEvents.spawned("malum:natural_spirit", (event) => {
  let spirit = event.getEntity();

  if (spirit.getSpiritType().identifier == "unrefined") {
    return;
  }

  let level = event.getLevel();

  if (level == null) return;

  if (level.isClientSide()) return;

  let dimension = level.getDimension();

  let dimension_location = dimension;

  if (FTBTeamBases$DimensionUtils.isPrivateTeamDimension(dimension)) {
    dimension_location = new ResourceLocation("ftb:hel");
  }

  let position = spirit.position();
  position = new Vec3d(position.x(), JavaMath.round(position.y()), position.z());

  let blockPos = new BlockPos(Math.floor(position.x()), Math.floor(position.y()), Math.floor(position.z()));
  if (!$Arena$isArena(level, blockPos)) return;

  if (!scytheArenaKills.contains(position)) return;

  // Only cancel spirits from scythe kills in arenas (75% chance)

  if (JavaMath.random() * 100 < 75) {
    event.cancel();
  }
});

EntityEvents.drops((event) => {
  let newDrops = [];
  let drops = event.getDrops();
  drops.forEach((item) => {
    let isAffixed = item.getItem().getTagElement("affix_data");
    if (isAffixed != null) {
      newDrops.push(item);
    }
  });

  newDrops.forEach((item) => {
    drops.remove(item);
    let salvaged = Apotheosis$SalvagingMenu.salvageItem(event.getLevel(), item.getItem());

    salvaged.forEach((newItems) => {
      event.addDrop(newItems);
    });
  });
});

ServerEvents.entityLootTables((event) => {
  event.modifyEntity("minecraft:enderman", (loot) => {
    // console.log(loot.toJson())
    loot.clearPools();
    loot.addPool((pool) => {
      pool.addEntry({
        name: "minecraft:ender_pearl",
        type: "minecraft:item",
        functions: [
          {
            add: false,
            count: 1,
            function: "minecraft:set_count",
          },
          {
            count: {
              type: "minecraft:uniform",
              max: 1.0,
              min: 0.0,
            },
            function: "minecraft:looting_enchant",
          },
        ],
      });
    });
  });
});

// Dread Beast: cancel melee attacks beyond 3.5 blocks (caps effective reach despite large hitbox)
EntityEvents.hurt(function (event) {
  var source = event.getSource();
  if (source == null || source.getActual() == null) return;
  if (source.getActual().getType().toString() !== "iceandfire:dread_beast") return;
  var attacker = source.getActual();
  var target = event.entity;
  var dx = attacker.getX() - target.getX();
  var dy = attacker.getY() - target.getY();
  var dz = attacker.getZ() - target.getZ();
  var dist = JavaMath.sqrt(dx * dx + dy * dy + dz * dz);
  if (dist > 3.5) {
    event.cancel();
  }
});

// Jotunheim Frost Strays — buffed stats to feel like frost giant skeletons
EntityEvents.spawned("minecraft:stray", (event) => {
  var entity = event.getEntity();
  var dimId = String(entity.level.getDimension());
  if (dimId.indexOf("jotunheim") === -1) return;

  var health = entity.getAttribute("minecraft:generic.max_health");
  health.setBaseValue(40); // 20 hearts (vanilla is 20hp / 10 hearts)
  entity.setHealth(40);

  var damage = entity.getAttribute("minecraft:generic.attack_damage");
  if (damage) damage.setBaseValue(6); // vanilla is 3-5 depending on difficulty

  var knockback = entity.getAttribute("minecraft:generic.knockback_resistance");
  if (knockback) knockback.setBaseValue(0.4);

  var armor = entity.getAttribute("minecraft:generic.armor");
  if (armor) armor.setBaseValue(6);
});

EntityEvents.spawned("ars_nouveau:homing_spell_proj", (event) => {
  let entity = event.getEntity();
  let ignored = entity.getIgnored();
  ignored.add(FTBUtilsKJS.createPredicate((e) => e.getType() == "ftblh:little_helper"));
  entity.setIgnored(ignored);
});

EntityEvents.death("ftbragnarok:nidhogg", (event) => {
  let level = event.getLevel();
  if (level == null || level.isClientSide()) return;
  if (String(level.getDimension()) !== "ftb:nidhogg") return;

  let source = event.getSource();
  if (source == null) return;
  let killer = source.getPlayer();
  if (killer == null || killer.isFake()) return;

  killer.stages.add("ftb:nidhogg_boss_killed");
  console.info("[NidhoggBoss] defeated by " + killer.getName().getString() + " -> granted ftb:nidhogg_boss_killed");
});

EntityEvents.spawned("ftbragnarok:nidhogg", function (event) {
  let level = event.entity.getLevel();
  if (level != null && String(level.getDimension()) === "ftb:asgard") {
    event.cancel();
  }
});

// Dragon death particle burst (fire, ice, lightning)
function $DragonDeath$particleBurst(event) {
  const level = event.getLevel();
  if (level == null || level.isClientSide()) return;

  const entity = event.getEntity();
  if (entity == null) return;

  const server = event.getServer();
  if (server == null) return;

  const x = Math.floor(entity.getX());
  const y = Math.floor(entity.getY()) + 1;
  const z = Math.floor(entity.getZ());
  const dimId = String(level.getDimension());

  server.runCommandSilent(
    "execute in " + dimId + " run particle minecraft:flame " + x + " " + y + " " + z + " 2 2 2 0.15 200"
  );
  server.runCommandSilent(
    "execute in " + dimId + " run particle minecraft:lava " + x + " " + y + " " + z + " 2 2 2 0 80"
  );
  server.runCommandSilent(
    "execute in " + dimId + " run particle minecraft:smoke " + x + " " + (y + 1) + " " + z + " 2 3 2 0.05 100"
  );
  server.runCommandSilent(
    "execute in " + dimId + " run particle minecraft:large_smoke " + x + " " + (y + 2) + " " + z + " 1.5 2 1.5 0.02 40"
  );

  server.scheduleInTicks(10, function (callback) {
    server.runCommandSilent(
      "execute in " + dimId + " run particle minecraft:flame " + x + " " + (y + 2) + " " + z + " 1 3 1 0.08 80"
    );
    server.runCommandSilent(
      "execute in " +
        dimId +
        " run particle minecraft:soul_fire_flame " +
        x +
        " " +
        (y + 3) +
        " " +
        z +
        " 1.5 2 1.5 0.05 50"
    );
  });

  server.scheduleInTicks(25, function (callback) {
    server.runCommandSilent(
      "execute in " +
        dimId +
        " run particle minecraft:campfire_cosy_smoke " +
        x +
        " " +
        (y + 1) +
        " " +
        z +
        " 1 1 1 0.01 15"
    );
    server.runCommandSilent(
      "execute in " + dimId + " run particle minecraft:ash " + x + " " + (y + 2) + " " + z + " 3 3 3 0.01 60"
    );
  });
}

// Nidhogg dimension — delayed kill cleanup for dragons
function $DragonDeath$nidhoggCleanup(event) {
  let cleanupLevel = event.getLevel();
  if (cleanupLevel == null || cleanupLevel.isClientSide()) return;
  if (String(cleanupLevel.getDimension()) !== "ftb:nidhogg") return;

  let cleanupEntity = event.getEntity();
  if (cleanupEntity == null) return;
  let cleanupUuid = cleanupEntity.getStringUuid();

  let cleanupServer = event.getServer();
  if (cleanupServer == null) return;

  cleanupServer.scheduleInTicks(60, function (callback) {
    cleanupServer.runCommandSilent("execute in ftb:nidhogg run kill " + cleanupUuid);
  });
}

["iceandfire:fire_dragon", "iceandfire:ice_dragon", "iceandfire:lightning_dragon"].forEach(function(dragonType) {
  EntityEvents.death(dragonType, $DragonDeath$particleBurst);
  EntityEvents.death(dragonType, $DragonDeath$nidhoggCleanup);
});

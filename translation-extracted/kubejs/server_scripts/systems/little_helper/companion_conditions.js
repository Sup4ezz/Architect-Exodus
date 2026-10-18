LHEngine.registerCondition("chance", {
  test: (player, conditions, context, event) => {
    return JavaMath.random() * 100 < conditions.chance;
  },
});

LHEngine.registerCondition("requiredDamageType", {
  test: (player, conditions, context, event) => {
    if (event == null || event.source == null) return false;
    return event.source.toString().includes(conditions.requiredDamageType);
  },
});

LHEngine.registerCondition("currentHp", {
  test: (player, conditions, context, event) => {
    if (player == null || player.isFake()) return false;
    let hpPercent = player.getHealth() / player.getMaxHealth();
    return hpPercent <= conditions.currentHp / 100;
  },
});

LHEngine.registerCondition("requiredNearbyMobType", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;

    let distance = conditions.requiredNearbyMobDistance || 16;
    let aabb = player.getBoundingBox().inflate(distance);
    let entities = player.level.getEntitiesOfClass(Minecraft$Mob, aabb, (e) => e.isAlive());

    if (entities.isEmpty()) return false;

    context.requiredMobs = [];

    if (conditions.requiredNearbyMobType === "*") {
      entities.forEach((entity) => context.requiredMobs.push(entity));
    } else {
      entities.forEach((entity) => {
        let entityType = String(entity.type);
        if (entityType.includes(conditions.requiredNearbyMobType)) {
          context.requiredMobs.push(entity);
        }
      });
    }

    return context.requiredMobs.length > 0;
  },
});

LHEngine.registerCondition("requiredBiomes", {
  test: (player, conditions, context, event) => {
    if (player == null || player.isFake()) return false;
    let biome = player.level.getBiome(player.block.pos).toString();
    return conditions.requiredBiomes.indexOf(biome) !== -1;
  },
});

LHEngine.registerCondition("hasStages", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;
    return conditions.hasStages.every((stage) => player.stages.has(stage));
  },
});

LHEngine.registerCondition("hasAnyStage", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;
    return conditions.hasStages.some((stage) => player.stages.has(stage));
  },
});

LHEngine.registerCondition("gainedStage", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;
    return conditions.gainedStage == context.newStage;
  },
})
LHEngine.registerCondition("lostStage", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;
    return conditions.lostStage == context.removedStage;
  },
})

LHEngine.registerCondition("skill", {
  test: (player, conditions, context, event) => {
    if (player == null || player.isFake()) return false;
    let attribute = player.getAttribute(conditions.skill);
    if (attribute == null || attribute.getValue() <= 0) return false;
    context.skillRank = attribute.getValue();
    return true;
  },
});

LHEngine.registerCondition("item", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;

    if (player.inventory.count(conditions.item) > 0) {
      let slot = player.inventory.find(conditions.item);
      context.itemStack = player.inventory.getItem(slot);
      return true;
    }
    return false;
  },
});

LHEngine.registerCondition("is_sneaking", {
  test: (player, conditions, context, event) => {
    return player.isCrouching() === conditions.is_sneaking;
  },
});

LHEngine.registerCondition("requiredDimension", {
  test: (player, conditions, context, event) => {
    if (!player) return false;
    return player.level.dimension.toString().split(":")[1].includes(conditions.requiredDimension);
  },
});

LHEngine.registerCondition("once", {
  test: (player, conditions, context, event) => {
    if (!player || player.isFake()) return false;
    if (conditions.once == false) return true; // If "once" is explicitly set to false, ignore the condition
    player.persistentData["lh_once_conditions"] = player.persistentData["lh_once_conditions"] || {};
    if (player.persistentData["lh_once_conditions"][context.id]) {
      return false;
    } else {
      player.persistentData["lh_once_conditions"][context.id] = true;
      return true;
    }
  },
});
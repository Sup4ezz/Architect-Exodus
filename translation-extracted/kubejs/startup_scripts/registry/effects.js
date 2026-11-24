const $EmptyCurativeItems = Utils.newList();

StartupEvents.registry("mob_effect", (event) => {
  // Incase it gets broken somehow
  function IsEntityInMaze(entity) {
    let dimension = entity.getLevel().getDimension();
    let is_in_maze = entity.getLevel().getBiome(entity.blockPosition()).key().location() == "ftb:hel/maze";
    let is_in_hel = FTBTeamBases$DimensionUtils.isPrivateTeamDimension(dimension) || "ftb:hel" == dimension;
    if (!is_in_hel) return false;
    return is_in_maze;
  }

  event.create("ftb:maze_debuff").effectTick((entity, amp) => {
    if (!entity.isPlayer()) {
      entity.removeEffect("ftb:maze_debuff");
      return;
    }

    if (entity.isFake()) {
      entity.removeEffect("ftb:maze_debuff");
      return;
    }

    if (!IsEntityInMaze(entity)) {
      entity.removeEffect("ftb:maze_debuff");
      return;
    }

    let effect = entity.getEffect("ftb:maze_debuff");
    let durationTicks = effect.getDuration();

    if (effect.endsWithin(1)) {
      if (entity.getLevel().isClientSide()) {
        entity.sendSystemMessage(Text.translate("ftb.maze.debuff.warning.0"));
      }

      effect.setCurativeItems($EmptyCurativeItems);
    }

    if (effect.endsWithin(200)) {
      effect.setDuration(durationTicks + 2);
      return;
    } else if (effect.endsWithin(201)) {
      if (entity.getLevel().isClientSide()) {
        entity.sendSystemMessage(Text.translate("ftb.maze.debuff.warning.1"));
      }
      effect.amplifier = 0;

      let weaknessEffect = new Minecraft$MobEffectInstance("minecraft:weakness", 205, 0);
      let hungerEffect = new Minecraft$MobEffectInstance("minecraft:hunger", 205, 0);

      weaknessEffect.setCurativeItems($EmptyCurativeItems);
      hungerEffect.setCurativeItems($EmptyCurativeItems);

      entity.forceAddEffect(weaknessEffect, null);
      entity.forceAddEffect(hungerEffect, null);
    }

    if (effect.endsWithin(400)) {
      effect.setDuration(durationTicks + 2);
      return;
    } else if (effect.endsWithin(401)) {
      if (entity.getLevel().isClientSide()) {
        entity.sendSystemMessage(Text.translate("ftb.maze.debuff.warning.2"));
      }
      effect.amplifier = 1;

      let witherEffect = new Minecraft$MobEffectInstance("attributeslib:bleeding", 205, 1);
      let blindnessEffect = new Minecraft$MobEffectInstance("minecraft:blindness", 205, 0);
      let weaknessEffect = new Minecraft$MobEffectInstance("minecraft:weakness", 205, 1);
      let hungerEffect = new Minecraft$MobEffectInstance("minecraft:hunger", 205, 0);

      weaknessEffect.setCurativeItems($EmptyCurativeItems);
      hungerEffect.setCurativeItems($EmptyCurativeItems);
      witherEffect.setCurativeItems($EmptyCurativeItems);
      blindnessEffect.setCurativeItems($EmptyCurativeItems);

      entity.forceAddEffect(weaknessEffect, null);
      entity.forceAddEffect(hungerEffect, null);
      entity.forceAddEffect(witherEffect, null);
      entity.forceAddEffect(blindnessEffect, null);
    }

    if (effect.endsWithin(600)) {
      effect.setDuration(durationTicks + 2);
      return;
    } else if (effect.endsWithin(601)) {
      if (entity.getLevel().isClientSide()) {
        entity.sendSystemMessage(Text.translate("ftb.maze.debuff.warning.3"));
      }
      effect.amplifier = 2;

      let witherEffect = new Minecraft$MobEffectInstance("attributeslib:bleeding", 205, 2);
      let blindnessEffect = new Minecraft$MobEffectInstance("minecraft:blindness", 205, 1);
      let slownessEffect = new Minecraft$MobEffectInstance("minecraft:slowness", 205, 0);
      let weaknessEffect = new Minecraft$MobEffectInstance("minecraft:weakness", 205, 2);
      let hungerEffect = new Minecraft$MobEffectInstance("minecraft:hunger", 205, 1);

      weaknessEffect.setCurativeItems($EmptyCurativeItems);
      hungerEffect.setCurativeItems($EmptyCurativeItems);
      witherEffect.setCurativeItems($EmptyCurativeItems);
      blindnessEffect.setCurativeItems($EmptyCurativeItems);
      slownessEffect.setCurativeItems($EmptyCurativeItems);

      entity.forceAddEffect(weaknessEffect, null);
      entity.forceAddEffect(hungerEffect, null);
      entity.forceAddEffect(witherEffect, null);
      entity.forceAddEffect(blindnessEffect, null);
      entity.forceAddEffect(slownessEffect, null);
    }

    if (effect.endsWithin(800)) {
      effect.setDuration(durationTicks + 2);
      return;
    } else if (effect.endsWithin(801)) {
      if (entity.getLevel().isClientSide()) {
        entity.sendSystemMessage(Text.translate("ftb.maze.debuff.warning.4"));
      }
      effect.amplifier = 3;

      let witherEffect = new Minecraft$MobEffectInstance("attributeslib:bleeding", 405, 4);
      let darknessEffect = new Minecraft$MobEffectInstance("minecraft:darkness", 405, 2);
      let slownessEffect = new Minecraft$MobEffectInstance("minecraft:slowness", 405, 2);
      let weaknessEffect = new Minecraft$MobEffectInstance("minecraft:weakness", 405, 3);
      let hungerEffect = new Minecraft$MobEffectInstance("minecraft:hunger", 405, 2);

      weaknessEffect.setCurativeItems($EmptyCurativeItems);
      hungerEffect.setCurativeItems($EmptyCurativeItems);
      witherEffect.setCurativeItems($EmptyCurativeItems);
      darknessEffect.setCurativeItems($EmptyCurativeItems);
      slownessEffect.setCurativeItems($EmptyCurativeItems);

      entity.forceAddEffect(weaknessEffect, null);
      entity.forceAddEffect(hungerEffect, null);
      entity.forceAddEffect(witherEffect, null);
      entity.forceAddEffect(darknessEffect, null);
      entity.forceAddEffect(slownessEffect, null);
    }

    if (effect.endsWithin(1200)) {
      effect.setDuration(durationTicks + 2);
      return;
    } else if (effect.endsWithin(1201)) {
      if (entity.getLevel().isClientSide()) {
        entity.sendSystemMessage(Text.translate("ftb.maze.debuff.warning.5"));
      }
      effect.amplifier = 4;

      let witherEffect = new Minecraft$MobEffectInstance("attributeslib:bleeding", 1205, 5);
      let darknessEffect = new Minecraft$MobEffectInstance("minecraft:darkness", 1205, 5);
      let slownessEffect = new Minecraft$MobEffectInstance("minecraft:slowness", 1205, 5);
      let weaknessEffect = new Minecraft$MobEffectInstance("minecraft:weakness", 1205, 5);
      let hungerEffect = new Minecraft$MobEffectInstance("minecraft:hunger", 1205, 5);

      weaknessEffect.setCurativeItems($EmptyCurativeItems);
      hungerEffect.setCurativeItems($EmptyCurativeItems);
      witherEffect.setCurativeItems($EmptyCurativeItems);
      darknessEffect.setCurativeItems($EmptyCurativeItems);
      slownessEffect.setCurativeItems($EmptyCurativeItems);

      entity.forceAddEffect(weaknessEffect, null);
      entity.forceAddEffect(hungerEffect, null);
      entity.forceAddEffect(witherEffect, null);
      entity.forceAddEffect(darknessEffect, null);
      entity.forceAddEffect(slownessEffect, null);
    }

    if (effect.endsWithin(2400)) {
      effect.setDuration(durationTicks + 2);
    } else if (effect.endsWithin(2401)) {
      // if (entity.getLevel().isClientSide()) {
      //   entity.sendSystemMessage(Text.of("test warning repeat"))
      // }
      let witherEffect = new Minecraft$MobEffectInstance("attributeslib:bleeding", 1205, 5);
      let darknessEffect = new Minecraft$MobEffectInstance("minecraft:darkness", 1205, 5);
      let slownessEffect = new Minecraft$MobEffectInstance("minecraft:slowness", 1205, 5);
      let weaknessEffect = new Minecraft$MobEffectInstance("minecraft:weakness", 1205, 5);
      let hungerEffect = new Minecraft$MobEffectInstance("minecraft:hunger", 1205, 5);

      weaknessEffect.setCurativeItems($EmptyCurativeItems);
      hungerEffect.setCurativeItems($EmptyCurativeItems);
      witherEffect.setCurativeItems($EmptyCurativeItems);
      darknessEffect.setCurativeItems($EmptyCurativeItems);
      slownessEffect.setCurativeItems($EmptyCurativeItems);

      entity.forceAddEffect(weaknessEffect, null);
      entity.forceAddEffect(hungerEffect, null);
      entity.forceAddEffect(witherEffect, null);
      entity.forceAddEffect(darknessEffect, null);
      entity.forceAddEffect(slownessEffect, null);
      effect.setDuration(1205);
    }
  });

  event
    .create("ftb:no_flight")
    .modifyAttribute(
      "attributeslib:creative_flight",
      $Maze$NoFlightIdentifier,
      $Maze$NoFlightModifier.getAmount(),
      $Maze$NoFlightModifier.getOperation()
    );

  event.create("ftb:maze_no_flight").effectTick((entity, amplifier) => {
    if (!entity.isPlayer()) {
      entity.removeEffect("ftb:maze_no_flight");
      return;
    }
    if (entity.isFake()) {
      entity.removeEffect("ftb:maze_no_flight");
      return;
    }

    let is_in_maze = IsEntityInMaze(entity);
    let is_in_survival = !entity.isCreative() && !entity.isSpectator();
    let has_flight = entity.getAttributeTotalValue("attributeslib:creative_flight") > 0;
    let has_no_flight_effect = entity.hasEffect("ftb:no_flight");

    if (!is_in_maze) {
      entity.removeEffect("ftb:no_flight");
      entity.removeEffect("ftb:maze_no_flight");
      if (is_in_survival) {
        entity.setGameMode("survival");
      }
      return;
    }

    if (!is_in_survival) {
      if (!has_flight) {
        entity.removeEffect("ftb:no_flight");
      }
      return;
    }

    if (is_in_maze && has_flight) {
      if (!has_no_flight_effect) {
        entity.setGameMode("adventure");
        if (!entity.getStages().has("hel_maze_unlock")) {
          entity.forceAddEffect(new Minecraft$MobEffectInstance("ftb:maze_debuff", 1, 0), null);
        }
        let noFlightEffect = new Minecraft$MobEffectInstance("ftb:no_flight", -1, 0, false, false, true);
        entity.forceAddEffect(noFlightEffect, null);
      }
      return;
    }
  });
});

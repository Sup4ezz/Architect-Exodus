var LHTipsStage = "lh_tips";
var LHLoreStage = "lh_lore";

function toggleStage(ctx, stage, enableKey, disableKey) {
  var player = ctx.getSource().getPlayerOrException();
  if (player.stages.has(stage)) {
    player.stages.remove(stage);
    player.tell(Text.translate(disableKey));
  } else {
    player.stages.add(stage);
    player.tell(Text.translate(enableKey));
  }
  return 1;
}

const forceBehavior = (ctx, player, behaviorId) => {
  let behavior = LHEngine.behaviors.find((b) => b.id === behaviorId);
  if (!behavior) {
    player.tell(Text.of(`Behavior with id '${behaviorId}' not found.`));
    return 0;
  }
  behavior.actions.forEach((action) => {
    let handler = LHEngine.actions[action.type];
    if (handler != null) {
      handler.execute(player, action, {}, {});
    }
  });
  return 1;
};

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions } = event;
  const EventSettingsArgs = {
    timer: Arguments.INTEGER,
    timerDelay: Arguments.INTEGER,
    debug: Arguments.BOOLEAN,
    maxAttempts: Arguments.INTEGER,
    timeCooldown: Arguments.INTEGER,
    includeCreative: Arguments.BOOLEAN,
    includeSpectator: Arguments.BOOLEAN,
  };

  event.register(
    Commands.literal("little_helper")
      .then(
        Commands.literal("toggle")
          .then(
            Commands.literal("tips").executes(function (ctx) {
              return toggleStage(
                ctx,
                LHTipsStage,
                "ftb.little_helper.commands.toggle.tips_enable",
                "ftb.little_helper.commands.toggle.tips_disable"
              );
            })
          )
          .then(
            Commands.literal("lore").executes(function (ctx) {
              return toggleStage(
                ctx,
                LHLoreStage,
                "ftb.little_helper.commands.toggle.lore_enable",
                "ftb.little_helper.commands.toggle.lore_disable"
              );
            })
          )
      )
      .then(
        Commands.literal("behavior")
          .then(
            Commands.argument("behavior_id", Arguments.STRING.create(event))
              .suggests(getSuggestions(LHEngine.getBehaviorIds()))
              .executes(function (ctx) {
                let player = ctx.getSource().getPlayerOrException();
                let behaviorId = Arguments.STRING.getResult(ctx, "behavior_id");
                let behavior = LHEngine.behaviors.find((b) => b.id === behaviorId);
                if (!behavior) {
                  player.tell(Text.of(`\u00a7cBehavior '${behaviorId}' not found.`));
                  return 0;
                }
                let displayName = behavior.displayName || behaviorId;
                let isNowDisabled = LHEngine.toggleBehavior(player, behaviorId);
                if (isNowDisabled) {
                  player.tell(Text.of(`\u00a7cDisabled: ${displayName}`));
                } else {
                  player.tell(Text.of(`\u00a7aEnabled: ${displayName}`));
                }
                return 1;
              })
          )
      )
      .then(
        Commands.literal("force")
          .requires((src) => src.hasPermission(3))
          .then(
            Commands.argument("behavior", Arguments.STRING.create(event))
              .suggests(getSuggestions(LHEngine.getBehaviorIds()))
              .executes(function (ctx) {
                return forceBehavior(
                  ctx,
                  ctx.getSource().getPlayerOrException(),
                  Arguments.STRING.getResult(ctx, "behavior")
                );
              })
          )
      )
      .then(
        Commands.literal("hint").executes(function (ctx) {
          return Maze$$F_TellHint(ctx);
        })
      )
  );

  event.register(
    Commands.literal("lh").then(
      Commands.literal("hint").executes(function (ctx) {
        return Maze$$F_TellHint(ctx);
      })
    )
  );
});

ServerEvents.commandRegistry((event) => {
  let Commands = event.getCommands();
  let Arguments = event.getArguments();
  let Suggestions = event.getBuiltinSuggestions();

  let LittleHelperCatch = (ctx) => {
    let catch_height = Arguments.FLOAT.getResult(ctx, "catch_height");
    let dismount_height = Arguments.FLOAT.getResult(ctx, "dismount_height");
    let hover_height = Arguments.FLOAT.getResult(ctx, "hover_height");

    let player = Arguments.PLAYER.getResult(ctx, "player");
    let ftblh = FTBLittleHelper.getHelperEntity(player);
    if (ftblh.isEmpty()) {
      FTBLittleHelper.show(player);
      ftblh = FTBLittleHelper.getHelperEntity(player);
    }
    if (ftblh == null || !ftblh.isPresent()) {
      ctx.getSource().sendFailure(Text.of("Little Helper not available yet — try again in a moment."));
      return 0;
    }
    ftblh = ftblh.get();
    if (player.getVehicle() != ftblh) {
      ftblh.setIdlePositioner((owner) => {
        if (owner.getY() < dismount_height && ftblh.position().distanceTo(owner.position()) < 4) {
          let pos = owner.position().toVector3f();
          let x = pos.x;
          let y = hover_height;
          let z = pos.z;

          if (owner.getVehicle() != ftblh) {
            owner.startRiding(ftblh, true);
          }
          return new Vec3d(x, y, z);
        } else if (owner.getY() < catch_height) {
          ftblh.setPos(owner.position().add(owner.getDeltaMovement()));
          return ftblh.IDLE_POSITIONER_RIGHT.apply(owner);
        } else {
          let pos = owner.position().toVector3f();
          let x = pos.x;
          let y = hover_height;
          let z = pos.z;

          return new Vec3d(x, y, z);
        }
      });
      player.startRiding(ftblh, true);
    }
    return 1;
  };

  let LittleHelperCatchMoveTo = (ctx) => {
    let target_position = Arguments.VEC3.getResult(ctx, "target_location");
    let catch_height = Arguments.FLOAT.getResult(ctx, "catch_height");
    let dismount_height = Arguments.FLOAT.getResult(ctx, "dismount_height");

    let player = Arguments.PLAYER.getResult(ctx, "player");
    let ftblh = FTBLittleHelper.getHelperEntity(player);
    if (ftblh.isEmpty()) {
      FTBLittleHelper.show(player);
      ftblh = FTBLittleHelper.getHelperEntity(player);
    }
    if (ftblh == null || !ftblh.isPresent()) {
      ctx.getSource().sendFailure(Text.of("Little Helper not available yet — try again in a moment."));
      return 0;
    }
    ftblh = ftblh.get();
    if (player.getVehicle() != ftblh) {
      ftblh.setIdlePositioner((owner) => {
        if (owner.getY() < dismount_height && ftblh.position().distanceTo(owner.position()) < 4) {
          let x = target_position.x();
          let y = target_position.y();
          let z = target_position.z();

          if (owner.getVehicle() != ftblh) {
            owner.startRiding(ftblh, true);
          }
          return new Vec3d(x, y, z);
        } else if (owner.getY() < catch_height) {
          ftblh.setPos(owner.position().add(owner.getDeltaMovement()));
          return ftblh.IDLE_POSITIONER_RIGHT.apply(owner);
        } else {
          let x = target_position.x();
          let y = target_position.y();
          let z = target_position.z();

          return new Vec3d(x, y, z);
        }
      });
      player.startRiding(ftblh, true);
    }
    return 1;
  };

  let root = Commands.literal("ftb_raido");
  root = root
    .requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
    .then(
      Commands.argument("player", Arguments.PLAYER.create(event)).then(
        Commands.argument("catch_height", Arguments.FLOAT.create(event)).then(
          Commands.argument("dismount_height", Arguments.FLOAT.create(event))
            .then(
              Commands.argument("hover_height", Arguments.FLOAT.create(event)).executes((ctx) => LittleHelperCatch(ctx))
            )
            .then(
              Commands.argument("target_location", Arguments.VEC3.create(event)).executes((ctx) =>
                LittleHelperCatchMoveTo(ctx)
              )
            )
        )
      )
    );
  event.register(root);
});

const getSuggestions = (array) => {
  return (ctx, builder) => {
    const eventSuggestions = array || [];
    const suggestions = [];
    eventSuggestions.forEach((suggestion) => {
      suggestions.push(JSON.stringify(suggestion));
    });

    if (suggestions.length != 0) {
      suggestions.forEach((suggestion) => {
        builder.suggest(suggestion);
      });
    }
    return builder.buildFuture();
  };
};

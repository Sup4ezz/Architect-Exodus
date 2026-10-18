const $Stages$PlayerStageProvider = Java.loadClass("com.alessandro.astages.capability.PlayerStageProvider");

function $Stages$AStagesList(player) {
  let out = [];
  let cap = player.getCapability($Stages$PlayerStageProvider.PLAYER_STAGE);
  if (cap == null) return out;
  let playerStage = cap.orElse(null);
  if (playerStage == null) return out;
  let stages = playerStage.getStages();
  for (let i = 0; i < stages.size(); i++) out.push(String(stages.get(i)));
  return out;
}

ServerEvents.commandRegistry((event) => {
  const Commands = event.getCommands();
  const Arguments = event.getArguments();

  const KNOWN_PROGRESSION = [
    "ftb:bifrost_unlocked",
    "ftb:jotunheim_unlocked",
    "ftb:niflheim_unlocked",
    "ftb:muspelheim_unlocked",
    "ftb:midgard_unlocked",
    "ftb:alfheim_unlocked",
    "ftb:ginnungagap_unlocked",
    "ftb:nidavellir_unlocked",
    "ftb:asgard_unlocked",
    "ftb:nidhogg_boss_killed",
    "boss_hel_killed",
    "boss_ymir_killed",
    "boss_jormungandr_killed",
    "boss_surtr_killed",
    "boss_twins_killed",
    "boss_nidhoggr_killed",
    "bifrost_stage",
  ];

  const ASTAGES_STAGES = [
    "pack_start_stage",
    "hel_maze_completed",
    "boss_hel_killed",
    "bifrost_stage",
    "jotunheim_stage",
    "niflheim_stage",
    "muspelheim_stage",
    "midgard_stage",
    "asgard_stage",
    "draconic_stage",
    "heralds_killed",
  ];

  function applyStage(target, stage, adding) {
    const name = target.getName().getString();
    const server = target.getServer();
    const stores = [];
    if (adding) {
      if (target.stages.add(stage)) stores.push("GameStages");
    } else if (target.stages.remove(stage)) {
      stores.push("GameStages");
    }
    if (ASTAGES_STAGES.indexOf(stage) !== -1 && server != null) {
      if (adding) server.runCommandSilent("astages add " + name + " " + stage + " true true");
      else server.runCommandSilent("astages remove " + name + " " + stage);
      stores.push("AStages");
    }
    if (global.StageMirror) {
      if (adding) global.StageMirror.snapshot(target);
      else global.StageMirror.removeStage(target, stage);
    }
    return stores;
  }

  function isProgression(tag) {
    if (KNOWN_PROGRESSION.indexOf(tag) !== -1) return true;
    if (tag.indexOf("ftb:") === 0 && tag.indexOf("_unlocked") !== -1) return true;
    if (tag.indexOf("boss_") === 0 && tag.indexOf("_killed") !== -1) return true;
    if (tag.indexOf("_stage") !== -1) return true;
    return false;
  }

  function printStore(source, label, list) {
    source.sendSystemMessage(Text.of(label + " (" + list.length + "):").aqua());
    if (list.length === 0) {
      source.sendSystemMessage(Text.of("  (none)").gray());
      return;
    }
    list.forEach((s) => {
      if (isProgression(s)) source.sendSystemMessage(Text.of("  + " + s).green());
      else source.sendSystemMessage(Text.of("  . " + s).gray());
    });
  }

  function gameStageList(target) {
    const out = [];
    target.stages.getAll().forEach((s) => out.push(String(s)));
    out.sort();
    return out;
  }

  function listStages(source, target) {
    const name = target.getName().getString();
    const astages = $Stages$AStagesList(target);
    const gamestages = gameStageList(target);
    const tags = [];
    target.getTags().forEach((t) => tags.push(String(t)));
    astages.sort();
    tags.sort();

    source.sendSystemMessage(
      Text.of("=== " + name + "'s stages (" + (astages.length + gamestages.length + tags.length) + ") ===").gold().bold()
    );
    printStore(source, "AStages - items/recipes/loot", astages);
    printStore(source, "GameStages - travel/progression", gamestages);
    printStore(source, "Entity tags", tags);
    return astages.length + gamestages.length + tags.length;
  }

  const root = Commands.literal("mystages")
    .executes((ctx) => listStages(ctx.getSource(), ctx.getSource().getPlayerOrException()))
    .then(
      Commands.literal("list")
        .executes((ctx) => listStages(ctx.getSource(), ctx.getSource().getPlayerOrException()))
        .then(
          Commands.argument("target", Arguments.PLAYER.create(event)).executes((ctx) => {
            const target = Arguments.PLAYER.getResult(ctx, "target");
            return listStages(ctx.getSource(), target);
          })
        )
    )
    .then(
      Commands.literal("add")
        .requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
        .then(
          Commands.argument("target", Arguments.PLAYER.create(event)).then(
            Commands.argument("stage", Arguments.STRING.create(event))
              .suggests((ctx, builder) => {
                const seen = [];
                KNOWN_PROGRESSION.concat(ASTAGES_STAGES).forEach((s) => {
                  if (seen.indexOf(s) === -1) {
                    seen.push(s);
                    builder.suggest(s);
                  }
                });
                return builder.buildFuture();
              })
              .executes((ctx) => {
                const target = Arguments.PLAYER.getResult(ctx, "target");
                const stage = Arguments.STRING.getResult(ctx, "stage");
                const stores = applyStage(target, stage, true);
                if (stores.length === 0) {
                  ctx.getSource().sendSystemMessage(
                    Text.of("= " + target.getName().getString() + " already has '" + stage + "'").gray()
                  );
                  return 0;
                }
                ctx.getSource().sendSystemMessage(
                  Text.of(
                    "+ Added '" + stage + "' to " + target.getName().getString() + " [" + stores.join(", ") + "]"
                  ).green()
                );
                return 1;
              })
          )
        )
    )
    .then(
      Commands.literal("remove")
        .requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
        .then(
          Commands.argument("target", Arguments.PLAYER.create(event)).then(
            Commands.argument("stage", Arguments.STRING.create(event))
              .suggests((ctx, builder) => {
                const target = Arguments.PLAYER.getResult(ctx, "target");
                const seen = [];
                if (target != null) {
                  gameStageList(target)
                    .concat($Stages$AStagesList(target))
                    .forEach((s) => {
                      if (seen.indexOf(s) === -1) {
                        seen.push(s);
                        builder.suggest(s);
                      }
                    });
                }
                return builder.buildFuture();
              })
              .executes((ctx) => {
                const target = Arguments.PLAYER.getResult(ctx, "target");
                const stage = Arguments.STRING.getResult(ctx, "stage");
                const stores = applyStage(target, stage, false);
                if (stores.length === 0) {
                  ctx.getSource().sendSystemMessage(
                    Text.of("= " + target.getName().getString() + " does not have '" + stage + "'").gray()
                  );
                  return 0;
                }
                ctx.getSource().sendSystemMessage(
                  Text.of(
                    "- Removed '" + stage + "' from " + target.getName().getString() + " [" + stores.join(", ") + "]"
                  ).red()
                );
                return 1;
              })
          )
        )
    );

  event.register(root);
});

// priority: 9

/**
 * /ftb_scroll command registration
 * Usage:
 *   /ftb_scroll <scroll_id> <player>  - start scroll on target player
 *   /ftb_scroll <scroll_id>           - start scroll on self
 *   /ftb_scroll stop <player>         - force stop scroll on target
 *   /ftb_scroll stop                  - force stop scroll on self
 *   /ftb_scroll list                  - list available scroll IDs
 */
ServerEvents.commandRegistry(function (event) {
  let Commands = event.commands;
  let Arguments = event.arguments;

  event.register(
    Commands.literal("ftb_scroll")
      .requires(function (src) {
        return src.hasPermission(2);
      })
      // /ftb_scroll list
      .then(
        Commands.literal("list").executes(function (ctx) {
          let source = ctx.getSource();
          let ids = [];
          for (let i = 0; i < ScrollDefinitions.length; i++) {
            ids.push(ScrollDefinitions[i].id);
          }
          source.sendSuccess(Text.of(["Available scrolls: " + ids.join(", ")]).green(), false);
          return 1;
        })
      )
      // /ftb_scroll stop [player]
      .then(
        Commands.literal("stop")
          .executes(function (ctx) {
            let source = ctx.getSource();
            let player = source.getPlayerOrException();
            ScrollEngine.stop(player);
            source.sendSuccess(Text.of(["Stopped scroll for " + player.username]).green(), false);
            return 1;
          })
          .then(
            Commands.argument("target", Arguments.PLAYER.create(event)).executes(function (ctx) {
              let source = ctx.getSource();
              let target = Arguments.PLAYER.getResult(ctx, "target");
              ScrollEngine.stop(target);
              source.sendSuccess(Text.of(["Stopped scroll for " + target.username]).green(), false);
              return 1;
            })
          )
      )
      // /ftb_scroll <scroll_id> [player]
      .then(
        Commands.argument("scroll_id", Arguments.STRING.create(event))
          .executes(function (ctx) {
            let source = ctx.getSource();
            let player = source.getPlayerOrException();
            let scrollId = Arguments.STRING.getResult(ctx, "scroll_id");
            return startScrollCommand(source, player, scrollId);
          })
          .then(
            Commands.argument("target", Arguments.PLAYER.create(event)).executes(function (ctx) {
              let source = ctx.getSource();
              let target = Arguments.PLAYER.getResult(ctx, "target");
              let scrollId = Arguments.STRING.getResult(ctx, "scroll_id");
              return startScrollCommand(source, target, scrollId);
            })
          )
      )
  );
});

function startScrollCommand(source, player, scrollId) {
  let def = getScrollDefinition(scrollId);
  if (!def) {
    source.sendSuccess(Text.of(["Unknown scroll ID: " + scrollId]).red(), false);
    return 0;
  }

  if (player.persistentData.contains("activeScrollId")) {
    source.sendSuccess(Text.of([player.username + " already has an active scroll"]).red(), false);
    return 0;
  }

  let started = ScrollEngine.start(player, scrollId);
  if (started) {
    source.sendSuccess(Text.of(['Started scroll "' + scrollId + '" for ' + player.username]).green(), false);
    return 1;
  } else {
    source.sendSuccess(Text.of(['Failed to start scroll "' + scrollId + '"']).red(), false);
    return 0;
  }
}


ServerEvents.commandRegistry(function(event) {
  let Commands = event.getCommands();
  let Arguments = event.getArguments();

  let swallow_self = Commands.literal("swallow").executes(function(ctx) {
    let player = ctx.getSource().getPlayerOrException();
    let team = FTBTeamsKJS.getTeamForPlayer(player);
    if (team == null) {
      ctx.getSource().sendSystemMessage("You are not on a team.");
      return 0;
    }
    $AsgardRestoration$NidhoggSwallow([player], team);
    return 1;
  });

  let swallow_target = Commands.literal("swallow").then(
    Commands.argument("player", Arguments.PLAYER.create(event)).executes(function(ctx) {
      let target = Arguments.PLAYER.getResult(ctx, "player");
      let team = FTBTeamsKJS.getTeamForPlayer(target);
      if (team == null) {
        ctx.getSource().sendSystemMessage(target.username + " is not on a team.");
        return 0;
      }
      $AsgardRestoration$NidhoggSwallow([target], team);
      return 1;
    })
  );

  let root = Commands.literal("ftb_asgard");
  root = root.requires(function(ctx) { return ctx.hasPermission(Commands.LEVEL_GAMEMASTERS); });
  root = root.then(swallow_self).then(swallow_target);

  event.register(root);
});

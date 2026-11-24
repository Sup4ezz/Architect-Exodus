ServerEvents.commandRegistry((event) => {
  const Commands = event.commands;
  const Arguments = event.arguments;
  const Suggestions = event.builtinSuggestions;
  /**
   * @type {$LiteralArgumentBuilder_<$CommandSourceStack_>}
   */
  let root = Commands.literal("bifrost").requires((ctx)=> ctx.hasPermission(Commands.LEVEL_GAMEMASTERS));
  root = root.executes((ctx) => {
    let player = ctx.getSource().getPlayerOrException();

    player.teleportTo("ftb:bifrost", 0.5, 66.5, 0.5, 180, 0 )

    let player_has_seen = player.getPersistentData()["has_seen_bifrost"];
    if (player_has_seen == null || player_has_seen == false) {
      player.getPersistentData()["has_seen_bifrost"] = true;
      FDLib$FDLibCalls.startCutsceneForPlayer(player, CutsceneBifrost);
    }
    return 1;
  });

  // for (let realm in realms) {
  //   root = root.then(Commands.literal(realm).executes((ctx) => {
  //     let player = ctx.getSource().getPlayerOrException();
  //   }))
    
  // }
  // Object.entries(cutsceneMap).forEach(([name, func]) => {
  //   cutscene = cutscene.then(
  //     Commands.literal(name)
  //       .executes((ctx) => {
  //         let player = ctx.getSource().getPlayerOrException();
  //         func['function'](player);
  //         return 1;
  //       })
  //   );
  //   });

  // player.teleportTo("ftb:bifrost", 0.5, 64.5, 0.5, 180, 0 )
  // FDLib$FDLibCalls.startCutsceneForPlayer(player, CutsceneBifrost);
  // cutscene = cutscene.then(Commands.literal("bifrost").executes((ctx)=>{
  // 	let player = ctx.getSource().getPlayerOrException()
  // 	if (player.isLocalPlayer()) return
  // 	player.teleportTo("ftb:bifrost", 0.5, 64.5, 0.5, 180, 0 )
  // 	FDLib$FDLibCalls.startCutsceneForPlayer(player, CutsceneBifrost);
  //   return 1
  // }))
  event.register(root);
});

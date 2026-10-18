// Custom command: /ftb_xaero add_waypoint <player> <name> <initials> <x> <y> <z> <color>
//
// Sends waypoint data to the target player's client, which adds it silently
// to the player's current Xaero minimap waypoint set (no GUI prompt).
//
// Intended for use as an FTB Quests "command" reward:
//   ftb_xaero add_waypoint {player} "Bifrost_Hub" "BH" 0 80 0 5
//
// LIMITATION: the waypoint is added to the player's CURRENT dimension waypoint set.
// For quest rewards targeting a specific dimension, ensure the player is in that
// dimension when the reward is claimed, or trigger the command on dimension entry.
//
// Color index: 0=black 1=dark_blue 2=dark_green 3=dark_aqua 4=dark_red 5=dark_purple
//              6=gold 7=gray 8=dark_gray 9=blue 10=green 11=aqua 12=red 13=light_purple
//              14=yellow 15=white

ServerEvents.commandRegistry((event) => {
  const Commands = event.getCommands();
  const Arguments = event.getArguments();

  const AddWaypointCmd = Commands.literal("add_waypoint").then(
    Commands.argument("player", Arguments.PLAYER.create(event)).then(
      Commands.argument("name", Arguments.STRING.create(event)).then(
        Commands.argument("initials", Arguments.STRING.create(event)).then(
          Commands.argument("x", Arguments.INTEGER.create(event)).then(
            Commands.argument("y", Arguments.INTEGER.create(event)).then(
              Commands.argument("z", Arguments.INTEGER.create(event)).then(
                Commands.argument("color", Arguments.INTEGER.create(event)).executes((ctx) => {
                  const player = Arguments.PLAYER.getResult(ctx, "player");
                  const name = Arguments.STRING.getResult(ctx, "name");
                  const initials = Arguments.STRING.getResult(ctx, "initials");
                  const x = Arguments.INTEGER.getResult(ctx, "x");
                  const y = Arguments.INTEGER.getResult(ctx, "y");
                  const z = Arguments.INTEGER.getResult(ctx, "z");
                  const color = Arguments.INTEGER.getResult(ctx, "color");

                  player.sendData("ftb:xaero_add_waypoint", {
                    name: name,
                    initials: initials,
                    x: x,
                    y: y,
                    z: z,
                    color: color,
                  });

                  ctx.getSource().sendSystemMessage(
                    Text.translate("ftb.xaero.waypoint_sent", name, player.getName().getString())
                  );
                  return 1;
                })
              )
            )
          )
        )
      )
    )
  );

  const root = Commands.literal("ftb_xaero")
    .requires((src) => src.hasPermission(Commands.LEVEL_GAMEMASTERS))
    .then(AddWaypointCmd);
  event.register(root);
});

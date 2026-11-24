ServerEvents.commandRegistry((event) => {
  const Commands = event.commands;
  const Arguments = event.arguments;

  const root = Commands.literal("open_guideme")
    .then(
      Commands.argument("guide", Arguments.RESOURCE_LOCATION.create(event))
        .then(
          Commands.literal("open")
            .then(
              Commands.argument("page", Arguments.RESOURCE_LOCATION.create(event))
                .executes((ctx) => {
                  const guide = Arguments.RESOURCE_LOCATION.getResult(ctx, "guide").toString();
                  const page = Arguments.RESOURCE_LOCATION.getResult(ctx, "page").toString();
                  const player = ctx.source.getPlayerOrException();
                  player.sendData("ftb:open_guideme", { guide: guide, page: page });
                  return 1;
                })
            )
        )
    );

  event.register(root);
});

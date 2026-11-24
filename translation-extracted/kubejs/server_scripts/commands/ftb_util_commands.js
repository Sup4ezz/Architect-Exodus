ServerEvents.commandRegistry((event) => {
  const Commands = event.getCommands()
  const Arguments = event.getArguments()

  const FillCommand = Commands.literal("fill").then(
    Commands.argument("from", Arguments.BLOCK_POS.create(event)).then(
      Commands.argument("to", Arguments.BLOCK_POS.create(event)).then(
        Commands.argument("block", Arguments.BLOCK_STATE.create(event))
          .executes((ctx) => {
            let from = Arguments.BLOCK_POS.getResult(ctx, "from");
            let to = Arguments.BLOCK_POS.getResult(ctx, "to");
            let block = Arguments.BLOCK_STATE.getResult(ctx, "block");

            let level = ctx.getSource().getLevel();
            let blocksModified = [];

            BlockPos.betweenClosed(from, to).forEach((pos) => {
              let blockEntity = level.getBlockEntity(pos);
              Minecraft$Clearable.tryClear(blockEntity);
              if (block.place(level, pos, 2)) {
                blocksModified.push(pos.immutable());
              }
            });

            blocksModified.forEach((pos) => {
              level.blockUpdated(pos, level.getBlockState(pos).getBlock());
            });

            ctx.getSource().sendSystemMessage(Text.translate("commands.fill.success", blocksModified.length));
            return blocksModified.length;
          })
          .then(
            Commands.argument("level", Arguments.DIMENSION.create(event)).executes((ctx) => {
              let from = Arguments.BLOCK_POS.getResult(ctx, "from");
              let to = Arguments.BLOCK_POS.getResult(ctx, "to");
              let block = Arguments.BLOCK_STATE.getResult(ctx, "block");
              let level = Arguments.DIMENSION.getResult(ctx, "level");

              // Force-load affected chunks before modifying blocks.
              // Prevents chunk corruption when operating on dimensions
              // with no players (e.g. maze auto-reset).
              let minCX = Math.min(from.getX(), to.getX()) >> 4;
              let minCZ = Math.min(from.getZ(), to.getZ()) >> 4;
              let maxCX = Math.max(from.getX(), to.getX()) >> 4;
              let maxCZ = Math.max(from.getZ(), to.getZ()) >> 4;

              for (let cx = minCX; cx <= maxCX; cx++) {
                for (let cz = minCZ; cz <= maxCZ; cz++) {
                  level.setChunkForced(cx, cz, true);
                }
              }

              let blocksModified = [];

              BlockPos.betweenClosed(from, to).forEach((pos) => {
                let blockEntity = level.getBlockEntity(pos);
                Minecraft$Clearable.tryClear(blockEntity);
                if (block.place(level, pos, 2)) {
                  blocksModified.push(pos.immutable());
                }
              });

              blocksModified.forEach((pos) => {
                level.blockUpdated(pos, level.getBlockState(pos).getBlock());
              });

              for (let cx = minCX; cx <= maxCX; cx++) {
                for (let cz = minCZ; cz <= maxCZ; cz++) {
                  level.setChunkForced(cx, cz, false);
                }
              }

              ctx.getSource().sendSystemMessage(Text.translate("commands.fill.success", blocksModified.length));
              return blocksModified.length;
            })
          )
      )
    )
  );
  
  const root = Commands.literal("ftb_utils").requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
    .then(FillCommand)
  event.register(root)
})
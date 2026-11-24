if (global.isClient) {
  onForgeEvent("net.minecraftforge.event.entity.EntityJoinWorldEvent", event => {
    const entity = event.getEntity();
    const world = event.getWorld();

    if (!world.isClientSide()) return;
    if (!entity || entity.getType().toString() !== "entity.minecraft.player") return;

    const dimPath = world.dimension().location().getPath();

    if (dimPath.startsWith("team")) {
      SDRP.setState("sdrp.team.in", "sdrp.team", "teamdim");
      console.log(`[SDRP] Player ${entity.getName().getString()} entered team dimension`);
    } else {
      SDRP.setState(`sdrp.${dimPath}.in`, `sdrp.${dimPath}`, dimPath);
      console.log(`[SDRP] Player ${entity.getName().getString()} entered ${dimPath}`);
    }
  });
}

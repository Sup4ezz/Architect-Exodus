NativeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", (event) => {
  let player = event.getEntity();
  let item = event.getItem();

  if (!player.isPlayer() || player.isFake()) return;
  if (player.level.isClientSide()) return;
  if (!item.is("mythicbotany:kvasir_mead")) return;
  player.stages.add("drank_botany_mead");
});

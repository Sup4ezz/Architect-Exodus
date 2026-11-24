NativeEvents.onEvent("net.minecraftforge.event.entity.player.AttackEntityEvent", (event) => {
  let target = event.getTarget();
  let player = event.getEntity();
  if (target == null || target.getType() != "iceandfire:dragon_skull") return;
  if (player == null || !player.isPlayer() || player.isFake()) return;
  if (player.getStages().has("bifrost_stage")) return;
  event.setCanceled(true);
});

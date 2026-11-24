const $$LH_RESPAWN_MSG_DURATION = 100;
const $$LH_RESPAWN_TEXT_ID = "lh_respawn_text";

const consumeOneFoodFromInventory = (player) => {
  const inv = player.getInventory();
  const size = inv.getContainerSize();
  for (let i = 0; i < size; i++) {
    const stack = inv.getItem(i);
    if (stack == null || stack.isEmpty()) continue;
    if (stack.getCount() <= 1) continue;
    if (!stack.getItem().isEdible()) continue;
    const nameComponent = stack.getHoverName();
    stack.shrink(1);
    return nameComponent;
  }
  return null;
};

PlayerEvents.respawned((event) => {
  const player = event.player;
  if (!player || player.isFake()) return;
  const server = player.getServer();
  const playerUuid = player.getUuid();

  server.scheduleInTicks(80, (callback) => {
    const p = server.getPlayer(playerUuid);
    if (p == null || !p.isAlive()) return;

    if (!LHEngine.isDisabled(p, $$LH_RESPAWN_TEXT_ID)) {
      FTBLittleHelper.message(p, Text.translate("ftblh.respawn.welcome_back"), $$LH_RESPAWN_MSG_DURATION);
    }

    const eatenNameComponent = consumeOneFoodFromInventory(p);

    server.scheduleInTicks(60, (cb2) => {
      const p2 = server.getPlayer(playerUuid);
      if (p2 == null || !p2.isAlive()) return;
      if (LHEngine.isDisabled(p2, $$LH_RESPAWN_TEXT_ID)) return;

      let followUp;
      if (eatenNameComponent != null) {
        followUp = Text.translate("ftblh.respawn.food_eaten", eatenNameComponent);
      } else {
        followUp = Text.translate("ftblh.respawn.no_food");
      }
      FTBLittleHelper.message(p2, followUp, $$LH_RESPAWN_MSG_DURATION);
    });
  });
});

// priority: 50

const $$DragonGuard$Types = ["iceandfire:fire_dragon", "iceandfire:ice_dragon", "iceandfire:lightning_dragon"];
const $$DragonGuard$PrivateDimPrefix = "ftbteambases:private_for_";

$$DragonGuard$Types.forEach(function (dragonType) {
  EntityEvents.spawned(dragonType, function (event) {
    let level = event.getLevel();
    if (level == null || level.isClientSide()) return;
    let dimStr = String(level.getDimension());
    if (dimStr.indexOf($$DragonGuard$PrivateDimPrefix) !== 0) return;
    event.cancel();
    let pos = event.getEntity().position();
    console.warn(
      "[DragonGuard] Blocked " + dragonType + " spawn in private team dim " +
      dimStr + " at " +
      JavaMath.round(pos.x()) + "," + JavaMath.round(pos.y()) + "," + JavaMath.round(pos.z())
    );
  });
});

let $$DragonGuard$TickCounter = 0;
const $$DragonGuard$PruneInterval = 6000;

ServerEvents.tick(function (event) {
  $$DragonGuard$TickCounter++;
  if ($$DragonGuard$TickCounter % $$DragonGuard$PruneInterval != 0) return;

  let server = event.server;
  if (server == null) return;
  let levels = server.getAllLevels();
  if (levels == null) return;

  levels.forEach(function (level) {
    if (level == null || level.isClientSide()) return;
    let dimStr = String(level.getDimension());
    if (dimStr.indexOf($$DragonGuard$PrivateDimPrefix) !== 0) return;

    $$DragonGuard$Types.forEach(function (dragonType) {
      let killed = 0;
      level.getEntities().filter(function (e) {
        return e != null && e.getType() == dragonType;
      }).forEach(function (dragon) {
        dragon.kill();
        killed++;
      });
      if (killed > 0) {
        console.warn(
          "[DragonGuard] Pruned " + killed + " " + dragonType +
          " from private team dim " + dimStr
        );
      }
    });
  });
});

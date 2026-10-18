const $HelSpawn$LightLayer = Java.loadClass("net.minecraft.world.level.LightLayer");
const $HelSpawn$ConditionMobs = ["cataclysm:draugr", "iceandfire:dread_thrall", "iceandfire:dread_beast"];
const $HelSpawn$LightRadius = 2;

$HelSpawn$ConditionMobs.forEach((mobId) => {
  EntityEvents.checkSpawn(mobId, (event) => {
    let entity = event.getEntity();
    let level = event.getLevel();
    let pos = entity.blockPosition();

    for (let dx = -$HelSpawn$LightRadius; dx <= $HelSpawn$LightRadius; dx++) {
      for (let dy = -$HelSpawn$LightRadius; dy <= $HelSpawn$LightRadius; dy++) {
        for (let dz = -$HelSpawn$LightRadius; dz <= $HelSpawn$LightRadius; dz++) {
          if (level.getBrightness($HelSpawn$LightLayer.BLOCK, pos.offset(dx, dy, dz)) > 0) {
            event.cancel();
            return;
          }
        }
      }
    }

    let below = pos.below();
    let belowState = level.getBlockState(below);
    if (belowState.isAir() || !belowState.getFluidState().isEmpty() || !belowState.isFaceSturdy(level, below, Direction.UP)) {
      event.cancel();
    }
  });
});

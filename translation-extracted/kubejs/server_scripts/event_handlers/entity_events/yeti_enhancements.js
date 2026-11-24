// Yeti boss enhancements:
// 1. 60% projectile damage resistance to prevent bow cheese
// 2. Periodic block destruction around the Yeti to prevent pillar cheese

const $DamageTypeTags = Java.loadClass("net.minecraft.tags.DamageTypeTags");

EntityEvents.hurt("block_factorys_bosses:yeti", (event) => {
  let source = event.getSource();
  if (source == null) return;
  if (source.is($DamageTypeTags.IS_PROJECTILE)) {
    event.setAmount(event.getAmount() * 0.4);
  }
});

let $MonsterClass = Java.loadClass("net.minecraft.world.entity.monster.Monster");
let yetiSmashTick = 0;

ServerEvents.tick((event) => {
  yetiSmashTick++;
  if (yetiSmashTick < 200) return;
  yetiSmashTick = 0;

  let server = event.getServer();
  server.getPlayerList().getPlayers().forEach((player) => {
    let level = player.level;
    let searchRadius = 64;
    let bb = new Minecraft$AABB(
      player.getX() - searchRadius, player.getY() - 32, player.getZ() - searchRadius,
      player.getX() + searchRadius, player.getY() + 32, player.getZ() + searchRadius
    );
    let yetis = level.getEntitiesOfClass(
      $MonsterClass,
      bb,
      (e) => e.getType().toString() === "block_factorys_bosses:yeti" && e.isAlive()
    );

    yetis.forEach((yeti) => {
      let cx = Math.floor(yeti.getX());
      let cy = Math.floor(yeti.getY());
      let cz = Math.floor(yeti.getZ());
      let radius = 4;
      let height = 6;

      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          for (let dy = 1; dy <= height; dy++) {
            if (dx * dx + dz * dz > radius * radius) continue;
            let pos = new BlockPos(cx + dx, cy + dy, cz + dz);
            let state = level.getBlockState(pos);
            if (state.isAir()) continue;
            let hardness = state.getDestroySpeed(level, pos);
            if (hardness < 0) continue;
            if (hardness > 50) continue;
            level.destroyBlock(pos, false);
          }
        }
      }
    });
  });
});

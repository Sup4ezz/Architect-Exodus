//const HICCUP_UUID = "b93314f1-ccba-49e3-9db6-d484c4241328";
const HICCUP_INTERVAL = 1340; // 67 seconds in ticks
const HICCUP_UUID = "d2839efc-727a-4263-97ce-3c73cdee5013";

ServerEvents.tick((event) => {
  if (event.server.tickCount % HICCUP_INTERVAL !== 0) return;

  let player = event.server.getPlayer(HICCUP_UUID);
  if (!player) return;
  if (player.foodData.foodLevel >= 20) return;

  let x = player.x + (Math.random() * 6 - 3);
  let y = player.y;
  let z = player.z + (Math.random() * 6 - 3);

  player.teleportTo(player.level.dimension, x, y, z, player.yRot, player.xRot);
  player.level.playSound(null, player.x, player.y, player.z, "minecraft:item.chorus_fruit.teleport", "master", 1.0, 1.0);
});

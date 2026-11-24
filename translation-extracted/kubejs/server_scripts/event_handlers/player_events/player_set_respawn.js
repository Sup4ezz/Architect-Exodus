const lobby_respawn_location = [0, 171, 0];
const bifrost_spawn_location = [0, 67, 0];
const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey");
const Registries = Java.loadClass("net.minecraft.core.registries.Registries");

EntityEvents.death("minecraft:player", (event) => {
  let player = event.entity;
  let x, y, z, dim, rot;

  if (player.stages.has("ftb:bifrost_unlocked")) {
    [x, y, z] = bifrost_spawn_location;
    dim = ResourceKey.create(Registries.DIMENSION, new Minecraft$ResourceLocation("ftb", "bifrost"));
    rot = 180;
  } else {
    [x, y, z] = lobby_respawn_location;
    dim = ResourceKey.create(Registries.DIMENSION, new Minecraft$ResourceLocation("ftbteambases", "lobby"));
    rot = 180;
  }
   player.setRespawnPosition(dim, new Minecraft$BlockPos(x, y, z), rot, true, false);
});

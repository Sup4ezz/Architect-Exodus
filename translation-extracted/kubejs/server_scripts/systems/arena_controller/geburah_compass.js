const geburah_arena_coords = { X: 2183, Y: 140, Z: 2156 };

ServerEvents.recipes((event) => {
  event
    .shaped("minecraft:compass", ["BIB", "IHI", "BIB"], {
      B: "cataclysm:black_steel_ingot",
      I: "minecraft:iron_ingot",
      H: "gag:energized_hearthstone",
    })
    .keepIngredient("gag:energized_hearthstone")
    .modifyResult((inventory, itemstack) => {
      let item = inventory.find("minecraft:compass");
      if (!item) return itemstack;

      let player = inventory.player;
      if (!player) return itemstack;

      let playerDim = player.level.dimension.toString();
      if (!playerDim.startsWith("ftbteambases")) {
        player.tell(Text.translate("ftb.maze_compass.wrong_dim"));
        return itemstack;
      }

      let nbt = {
        LodestoneTracked: 0,
        LodestoneDimension: playerDim,
        LodestonePos: geburah_arena_coords,
        display: {
          Name: '{"translate":"ftb.item.geburah_tracker","color":"dark_red","italic":false}',
        },
      };

      return itemstack.withNBT(nbt);
    })
    .id("ftb:geburah_compass");
});

const hel_maze_coords = { X: -291, Y: 4, Z: -1175 };

ServerEvents.recipes((event) => {
  event
    .shaped("minecraft:compass", ["SIS", "IHI", "SIS"], {
      S: "ars_nouveau:source_gem",
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
        player.tell(Text.translate("ftb.maze_compass.wrong_dim"))
        return itemstack;
      } 

      let nbt = {
        LodestoneTracked: 0,
        LodestoneDimension: playerDim,
        LodestonePos: hel_maze_coords,
        display: {
          Name: '{"translate":"ftb.item.maze_tracker","color":"gold","italic":false}',
        },
      };

      return itemstack.withNBT(nbt);
    })
    .id("ftb:hel_maze_compass");
});

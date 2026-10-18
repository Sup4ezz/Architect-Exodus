ServerEvents.recipes((event) => {
  event
    .shaped("quark:dirty_glass", ["DD ", "DD "], {
      D: "quark:dirty_shard",
    })
    .id("ftb:dirty_glass");

  event.shapeless("quark:sandstone_bricks", "chisel:sandstone_scribbles/scribbles_0").id("ftb:quark/sandstone_bricks");

  event.shapeless("quark:red_sandstone_bricks", "chisel:sandstonered_scribbles/scribbles_0").id("ftb:quark/red_sandstone_bricks");
  
  event.custom({
    type: "lychee:item_inside",
    item_in: [
      {
        tag: "forge:stone"
      }
    ],
    block_in: {
      blocks: ["minecraft:powder_snow"],
    },
    post: [
      {
        type: "drop_item",
        item: "quark:permafrost",
      },
      {
          "type": "place",
          "block": "*"
      }
    ],
  }).id("ftb:lychee/item_inside/quark/permafrost");
  
});

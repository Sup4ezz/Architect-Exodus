ServerEvents.recipes((event) => {
  //Fixing EnderIO's Clear Glass Recipes
  let clear_glass_conflicting_recipes = [
    "enderio:recolor_clear_glass_white",
    "enderio:recolor_clear_glass_light_gray",
    "enderio:recolor_clear_glass_gray",
    "enderio:recolor_clear_glass_black",
    "enderio:recolor_clear_glass_lime",
    "enderio:recolor_clear_glass_yellow",
    "enderio:recolor_clear_glass_orange",
    "enderio:recolor_clear_glass_brown",
    "enderio:recolor_clear_glass_red",
    "enderio:recolor_clear_glass_pink",
    "enderio:recolor_clear_glass_magenta",
    "enderio:recolor_clear_glass_purple",
    "enderio:recolor_clear_glass_blue",
    "enderio:recolor_clear_glass_light_blue",
    "enderio:recolor_clear_glass_cyan",
    "enderio:recolor_clear_glass_green",
  ];

  clear_glass_conflicting_recipes.forEach((recipe) => {
    event.replaceInput({ id: recipe }, "#enderio:clear_glass", "#enderio:default_clear_glass");
  });

  //Fixing EnderIO's Fused Quartz Recipes
  let fused_quartz_conflicting_recipes = [
    "enderio:recolor_fused_quartz_white",
    "enderio:recolor_fused_quartz_light_gray",
    "enderio:recolor_fused_quartz_gray",
    "enderio:recolor_fused_quartz_black",
    "enderio:recolor_fused_quartz_lime",
    "enderio:recolor_fused_quartz_yellow",
    "enderio:recolor_fused_quartz_orange",
    "enderio:recolor_fused_quartz_brown",
    "enderio:recolor_fused_quartz_red",
    "enderio:recolor_fused_quartz_pink",
    "enderio:recolor_fused_quartz_magenta",
    "enderio:recolor_fused_quartz_purple",
    "enderio:recolor_fused_quartz_blue",
    "enderio:recolor_fused_quartz_light_blue",
    "enderio:recolor_fused_quartz_cyan",
    "enderio:recolor_fused_quartz_green",
  ];

  fused_quartz_conflicting_recipes.forEach((recipe) => {
    event.replaceInput({ id: recipe }, "#enderio:fused_quartz", "#enderio:default_fused_quartz");
  });

  // Grains of Infinity fire crafting for non-overworld dimensions
  var grainsExtraDimensions = ["ftb:jotunheim", "ftb:muspelheim", "ftb:niflheim", "ftb:asgard"];
  grainsExtraDimensions.forEach(function (dim) {
    var dimName = dim.split(":")[1];
    event.custom({
      type: "enderio:fire_crafting",
      base_blocks: [{ block: "minecraft:bedrock" }],
      dimensions: [dim],
      loot_table: "enderio:fire_crafting/infinity",
      max_item_drops: 1
    }).id("ftb:enderio/fire_crafting/infinity_" + dimName);
  });

  //Making Dew of the Void
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:abyssal_pearl",
        }
      ],
      block_in: {
        tag: "forge:ender",
      },
      post: [
        {
          type: "place",
          block: "enderio:dew_of_the_void",
        },
      ],
    })
  .id("ftb:lychee/item_inside/enderio/dew_of_the_void");

});

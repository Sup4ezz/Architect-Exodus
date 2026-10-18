ServerEvents.recipes((event) => {
  var colors = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink",
  ];

  for (let color of colors) {
    event
      .shaped(`8x chisel:glassdyed_${color}/bubble`, ["GGG", "GGG", "GGD"], {
        G: `minecraft:${color}_stained_glass`,
        D: `#forge:dyes/${color}`,
      })
      .id(`ftb:chisel_modern/${color}_bubble_glass`);
  }

  event
    .shaped("16x chisel:voidstonerunic/black", ["OEO", "OOO", "OEO"], {
      O: "#forge:obsidian",
      E: "minecraft:ender_eye",
    })
    .id("ftb:chisel_modern/voidstonerunic");

  event
    .shaped("4x chisel:marblepillar/pillar", [" BS", " SB", "   "], {
      S: "minecraft:polished_diorite",
      B: "minecraft:bone_meal",
    })
    .id("ftb:chisel_modern/marble_pillar");

  event
    .shaped("4x chisel:sandstone_scribbles/scribbles_0", [" SS", " SS", "   "], {
      S: "minecraft:cut_sandstone",
    })
    .id("ftb:chisel_modern/sandstone_scribbles");

  event
    .shaped("4x chisel:sandstonered_scribbles/scribbles_0", [" SS", " SS", "   "], {
      S: "minecraft:cut_red_sandstone",
    })
    .id("ftb:chisel_modern/red_sandstone_scribbles");

  event
    .shaped("8x chisel:cubits/15", ["QQQ", "QCQ", "QQQ"], {
      Q: "minecraft:quartz",
      C: "#ftb:tiny_coals",
    })
    .id("ftb:chisel_modern/cubits_15");
});

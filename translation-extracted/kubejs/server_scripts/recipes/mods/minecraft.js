ServerEvents.recipes((event) => {
  // Example Hard-coded Compass recipe
  // const dimension = "minecraft:overworld";
  // const x = 13;
  // const y = 4;
  // const z = 13;

  // event.custom({
  //   type: "minecraft:crafting_shaped",
  //   pattern: ["SSS", "SSS", "SSS"],
  //   key: {
  //     S: {
  //       item: "minecraft:stone",
  //     },
  //   },
  //   result: {
  //     item: "minecraft:compass",
  //     count: 1,
  //     nbt: `{LodestoneDimension:"${dimension}",LodestonePos:{X:${x},Y:${y},Z:${z}},LodestoneTracked:1b}`,
  //   },
  // });

  event.replaceInput({ id: "minecraft:slime_block" }, "#bookshelf:slime_balls", "#ftb:non_tinkers_slime_balls");

  event.replaceInput({ id: "minecraft:daylight_detector" }, "minecraft:glass", "#forge:glass/colorless");

  event.replaceInput({ id: "minecraft:lever" }, "minecraft:cobblestone", "#forge:cobblestone");

  event.replaceInput({ id: "tconstruct:common/glass/vanilla/beacon" }, "minecraft:obsidian", "#forge:obsidian");

  event
    .shaped("minecraft:saddle", ["LLL", "L L", " S "], {
      L: "minecraft:leather",
      S: "minecraft:string",
    })
    .id("ftb:minecraft/saddle");

  event
    .shapeless("minecraft:writable_book", ["minecraft:book", "#forge:dyes/black", "minecraft:feather"])
    .id("ftb:minecraft/book_and_quill");

  event
    .shapeless("9x ftbmaterials:diamond_nugget", ["#forge:gems/diamond"])
    .id("ftb:minecraft/diamond_to_nuggets");

  event
    .shaped("minecraft:diamond", ["NNN", "NNN", "NNN"], {
      N: "ftbmaterials:diamond_nugget",
    })
    .id("ftb:minecraft/nuggets_to_diamond");

  event
    .shaped("minecraft:glistering_melon_slice", ["GGG", "GMG", "GGG"], {
      G: "#ftb:any_gold_nugget",
      M: "minecraft:melon_slice",
    })
    .id("ftb:minecraft/glistering_melon_slice");

  event
    .shaped("minecraft:golden_carrot", ["GGG", "GMG", "GGG"], {
      G: "#ftb:any_gold_nugget",
      M: "minecraft:carrot",
    })
    .id("ftb:minecraft/golden_carrot");

  event
    .shaped("minecraft:golden_apple", ["GGG", "GAG", "GGG"], {
      G: "#forge:ingots/gold",
      A: "#ftb:apples",
    })
    .id("ftb:minecraft/golden_apple");

  // Brewing Stand (alternate with Rose Quartz + Fire Essence)
  event
    .shaped("minecraft:brewing_stand", [" F ", " R ", "SSS"], {
      F: "mysticalagriculture:fire_essence",
      R: "create:rose_quartz",
      S: "#forge:stone",
    })
    .id("ftb:minecraft/brewing_stand_alt");

  event
    .shaped("minecraft:ladder", ["S S", "SSS", "S S"], {
      S: "minecraft:stick",
    })
    .id("ftb:minecraft/ladder");

  event
    .shaped("minecraft:stonecutter", ["   ", " I ", "SSS"], {
      I: "#forge:ingots/iron",
      S: "#forge:stone",
    })
    .id("ftb:minecraft/stonecutter");

  event
    .shaped("minecraft:lever", ["   ", " S ", "C  "], {
      S: "minecraft:stick",
      C: "#forge:stone",
    })
    .id("ftb:minecraft/lever");

  event
    .shaped("minecraft:grindstone", ["   ", "SLS", "P P"], {
      S: "minecraft:stick",
      L: "minecraft:blackstone_slab",
      P: "#minecraft:planks",
    })
    .id("ftb:minecraft/grindstone");

  event
    .shaped("minecraft:blast_furnace", ["III", "IFI", "SSS"], {
      I: "#forge:ingots/iron",
      F: "quark:blackstone_furnace",
      S: "minecraft:polished_blackstone",
    })
    .id("ftb:minecraft/blast_furnace");

  event
    .shaped("8x minecraft:arrow", ["G", "S", "F"], {
      G: "minecraft:flint",
      S: "minecraft:stick",
      F: "minecraft:feather",
    })
    .id("ftb:minecraft/arrow");

  event
    .shaped("4x minecraft:arrow", ["G", "S", "F"], {
      G: "minecraft:flint",
      S: "minecraft:stick",
      F: "farmersdelight:straw",
    })
    .id("ftb:minecraft/arrow_alt");

  event.shapeless(`4x minecraft:amethyst_shard`, "minecraft:amethyst_block").id(`ftb:amethyst_block_to_shards`);

  event
    .shaped("minecraft:cobweb", ["SSS", "SBS", "SSS"], {
      S: "minecraft:string",
      B: "#forge:slimeballs",
    })
    .id("ftb:minecraft/cobweb");

  //Reviving Corals
  const corals = [
    { dead: "minecraft:dead_tube_coral_block", alive: "minecraft:tube_coral_block" },
    { dead: "minecraft:dead_brain_coral_block", alive: "minecraft:brain_coral_block" },
    { dead: "minecraft:dead_bubble_coral_block", alive: "minecraft:bubble_coral_block" },
    { dead: "minecraft:dead_fire_coral_block", alive: "minecraft:fire_coral_block" },
    { dead: "minecraft:dead_horn_coral_block", alive: "minecraft:horn_coral_block" },
  ];

  corals.forEach((block) => {
    event
      .shaped(`4x ${block.alive}`, [" D ", "DWD", " D "], {
        D: block.dead,
        W: "mysticalagriculture:water_agglomeratio",
      })
      .id(`ftb:minecraft/reviving/${block.alive.split(":")[1].split("_block")[0]}`);
  });

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "mysticalagriculture:air_essence",
        },
        {
          item: "quark:blue_blossom_leaves",
        },
        {
          item: "mysticalagriculture:water_essence",
        },
      ],
      block_in: {
        blocks: ["integrateddynamics:block_menril_resin"],
      },
      post: [
        {
          type: "place",
          block: "minecraft:powder_snow",
        },
      ],
    })
    .id("ftb:lychee/item_inside/minecraft/powder_snow");

  event
    .shaped("24x minecraft:cobblestone", ["SSS", "S S", "SSS"], {
      S: "mysticalagriculture:stone_essence",
    })
    .id("ftb:mysticalagriculture/cobblestone");

  event
    .shaped("minecraft:pointed_dripstone", ["SSS", " W ", " S "], {
      S: "mysticalagriculture:stone_essence",
      W: "mysticalagriculture:water_essence",
    })
    .id("ftb:mysticalagriculture/pointed_dripstone");

  event
    .shaped("minecraft:dripstone_block", [" S ", "SWS", " S "], {
      S: "mysticalagriculture:stone_essence",
      W: "mysticalagriculture:water_essence",
    })
    .id("ftb:mysticalagriculture/dripstone_block");

  event
    .shaped("minecraft:tuff", [" S ", "SFS", " S "], {
      S: "mysticalagriculture:stone_essence",
      F: "mysticalagriculture:fire_essence",
    })
    .id("ftb:mysticalagriculture/tuff");

  event.shapeless("8x minecraft:arrow", "3x mysticalagriculture:skeleton_essence").id("ftb:mysticalagriculture/arrow");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [{ item: "minecraft:glowstone" }],
      block_in: {
        blocks: ["ftb:pyrotheum"],
      },
      post: [
        {
          type: "drop_item",
          item: "minecraft:blaze_powder",
        },
      ],
    })
    .id("ftb:lychee/item_inside/minecraft/blaze_powder");

  //Wind Charges from Fire Charges
  event
    .custom({
      type: "bloodmagic:array",
      baseinput: {
        item: "minecraft:fire_charge",
      },
      addedinput: {
        item: "mysticalagriculture:air_essence",
      },
      output: {
        item: "justtrialspawners:wind_charge",
      },
      texture: "bloodmagic:textures/models/alchemyarrays/basearray.png",
    })
    .id("ftb:bloodmagic/array/wind_charge");

  event.shaped("24x minecraft:clay_ball", ["WD", "DW"], {
    D: "mysticalagriculture:dirt_essence",
    W: "mysticalagriculture:water_essence",
  }).id("ftb:mysticalagriculture/clay_ball")

});

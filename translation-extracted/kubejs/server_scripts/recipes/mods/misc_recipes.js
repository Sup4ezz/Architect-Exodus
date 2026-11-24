ServerEvents.recipes((event) => {
  event
    .shaped("cb_microblock:stone_rod", ["S", "S"], {
      S: "minecraft:blackstone",
    })
    .id("ftb:cb_microblock/stone_rod");

  const stonecutting = event.stonecutting;
  var transmute = function (arrayOfBlocks) {
    var cpt = 0;
    while (cpt < arrayOfBlocks.length) {
      var otherBlocks = arrayOfBlocks.slice(0, cpt).concat(arrayOfBlocks.slice(cpt + 1));
      stonecutting(arrayOfBlocks[cpt], otherBlocks);
      cpt++;
    }
  };

  //Sugar Cane
  transmute(["quark:sugar_cane_block", "thermal:sugar_cane_block"]);
  //Potato Blocks
  transmute(["quark:potato_crate", "thermal:potato_block"]);
  transmute(["quark:potato_crate", "farmersdelight:potato_crate"]);
  transmute(["thermal:potato_block", "farmersdelight:potato_crate"]);
  //Beetroot Blocks
  transmute(["quark:beetroot_crate", "thermal:beetroot_block"]);
  transmute(["quark:beetroot_crate", "farmersdelight:beetroot_crate"]);
  transmute(["thermal:beetroot_block", "farmersdelight:beetroot_crate"]);
  //Carrots Blocks
  transmute(["quark:carrot_crate", "thermal:carrot_block"]);
  transmute(["quark:carrot_crate", "farmersdelight:carrot_crate"]);
  transmute(["thermal:carrot_block", "farmersdelight:carrot_crate"]);
  //Apple Blocks
  transmute(["quark:apple_crate", "thermal:apple_block"]);
  //Timber Frames
  transmute(["supplementaries:timber_frame", "supplementaries:timber_brace"]);
  transmute(["supplementaries:timber_frame", "supplementaries:timber_cross_brace"]);
  transmute(["supplementaries:timber_brace", "supplementaries:timber_cross_brace"]);
  //Gunpowder Blocks
  transmute(["quark:gunpowder_sack", "thermal:gunpowder_block"]);
  //Gold Bars
  transmute(["quark:gold_bars", "tconstruct:gold_bars"]);
  //Stone Tiles
  transmute(["cataclysm:stone_tiles", "supplementaries:stone_tile"]);

  //Glass Varients
  transmute(["tconstruct:yellow_clear_stained_glass", "chisel:glassdyed_yellow/bubble"]);
  transmute(["tconstruct:brown_clear_stained_glass", "chisel:glassdyed_brown/bubble"]);
  transmute(["tconstruct:orange_clear_stained_glass", "chisel:glassdyed_orange/bubble"]);
  transmute(["tconstruct:light_blue_clear_stained_glass", "chisel:glassdyed_light_blue/bubble"]);
  transmute(["tconstruct:blue_clear_stained_glass", "chisel:glassdyed_blue/bubble"]);
  transmute(["tconstruct:lime_clear_stained_glass", "chisel:glassdyed_lime/bubble"]);
  transmute(["tconstruct:purple_clear_stained_glass", "chisel:glassdyed_purple/bubble"]);
  transmute(["tconstruct:pink_clear_stained_glass", "chisel:glassdyed_pink/bubble"]);
  transmute(["tconstruct:magenta_clear_stained_glass", "chisel:glassdyed_magenta/bubble"]);
  transmute(["tconstruct:black_clear_stained_glass", "chisel:glassdyed_black/bubble"]);
  transmute(["tconstruct:light_gray_clear_stained_glass", "chisel:glassdyed_light_gray/bubble"]);
  transmute(["tconstruct:gray_clear_stained_glass", "chisel:glassdyed_gray/bubble"]);
  transmute(["tconstruct:white_clear_stained_glass", "chisel:glassdyed_white/bubble"]);
  transmute(["tconstruct:cyan_clear_stained_glass", "chisel:glassdyed_cyan/bubble"]);
  transmute(["tconstruct:red_clear_stained_glass", "chisel:glassdyed_red/bubble"]);
  transmute(["tconstruct:green_clear_stained_glass", "chisel:glassdyed_green/bubble"]);

  //Adding a Recipe to Cryotheum
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          tag: "forge:ices/blue",
        },
        {
          item: "minecraft:glow_lichen",
        },
        {
          item: "iceandfire:frost_lily",
        },
      ],
      block_in: {
        blocks: ["integrateddynamics:block_menril_resin"],
      },
      post: [
        {
          type: "place",
          block: "ftb:cryotheum",
        },
      ],
    })
    .id("ftb:lychee/item_inside/ftb/cryotheum");

  //Adding a Recipe to Pyrotheum
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          tag: "forge:magma",
        },
        {
          item: "ftb:blackstone_dust",
        },
        {
          item: "ftb:deepslate_dust",
        },
      ],
      block_in: {
        blocks: ["minecraft:lava"],
      },
      post: [
        {
          type: "place",
          block: "ftb:pyrotheum",
        },
      ],
    })
    .id("ftb:lychee/item_inside/ftb/pyrotheum");

  //Making Abyssal Pearl
  event
    .custom({
      type: "lychee:block_crushing",
      landing_block: "enderio:dark_steel_block",
      item_in: [
        {
          item: "bloodmagic:reagentvoid",
        },
        {
          item: "actuallyadditions:empowered_void_crystal",
        },
        {
          item: "ae2:sky_dust",
        },
      ],
      post: [
        {
          type: "drop_item",
          item: "ftb:abyssal_pearl",
        },
      ],
    })
    .id("ftb:lychee/block_crushing/abyssal_pearl");

  //Arcane Rosin
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "enchanted:breath_of_the_goddess",
        },
        {
          item: "bloodmagic:reagentgrowth",
        },
        {
          item: "malum:earthen_spirit",
        },
      ],
      block_in: {
        blocks: ["integrateddynamics:block_menril_resin"],
      },
      post: [
        {
          type: "place",
          block: "ftb:arcane_resin",
        },
      ],
    })
    .id("ftb:lychee/item_inside/arcane_resin");

  //Arcane Rosin
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "enchanted:hint_of_rebirth",
        },
      ],
      block_in: {
        blocks: ["ftb:arcane_resin"],
      },
      post: [
        {
          type: "drop_item",
          count: 4,
          item: "ftb:arcane_rosin",
        },
      ],
    })
    .id("ftb:lychee/item_inside/arcane_rosin");

  //Dragonsteel Aspectus
  event
    .custom({
      type: "embers:stamping",
      fluid: {
        amount: 90,
        tag: "forge:dragonsteel",
      },
      input: {
        item: "embers:ember_shard",
      },
      output: {
        item: "ftb:dragonsteel_aspectus",
      },
      stamp: {
        item: "embers:ingot_stamp",
      },
    })
    .id("ftb:embers/stamping/dragonsteel_aspectus");

  //Gaia Aspectus
  event
    .custom({
      type: "embers:stamping",
      fluid: {
        amount: 10,
        tag: "forge:molten_gaia_essence",
      },
      input: {
        item: "embers:ember_shard",
      },
      output: {
        item: "ftb:gaia_aspectus",
      },
      stamp: {
        item: "embers:ingot_stamp",
      },
    })
    .id("ftb:embers/stamping/gaia_aspectus");

  //Prismatic Xychorium
  event
    .custom({
      type: "xycraft_machines:extractor",
      catalyst: {
        predicate_type: "xycraft_core:block_rule",
        block: "xycraft_world:xychorium_storage_dark",
      },
      adjacent: [
        {
          predicate_type: "xycraft_core:block_rule",
          block: "xycraft_world:xychorium_storage_blue",
        },
        {
          predicate_type: "xycraft_core:block_rule",
          block: "xycraft_world:xychorium_storage_red",
        },
        {
          predicate_type: "xycraft_core:block_rule",
          block: "xycraft_world:xychorium_storage_green",
        },
        {
          predicate_type: "xycraft_core:block_rule",
          block: "xycraft_world:xychorium_storage_light",
        },
      ],
      item_result: {
        Count: 1,
        id: "ftb:prismatic_xychorium",
      },
      target: {
        block: "thermal:machine_frame",
        predicate_type: "xycraft_core:block_rule",
      },
      ticks: 2400,
      valid_directions: ["down", "up", "north", "south", "west", "east"],
    })
    .id("ftb:xycraft_machines/extractor/prismatic_xychorium");

  //Empowered Netherite
  event
    .custom({
      type: "actuallyadditions:empowering",
      base: {
        item: "minecraft:netherite_ingot",
      },
      color: 3355443,
      energy: 5000,
      modifiers: [
        {
          item: "ftb:glod_crystal",
        },
        {
          tag: "xycraft:building/kivi",
        },
        {
          item: "mysticalagriculture:soulstone",
        },
        {
          item: "minecraft:quartz_block",
        },
      ],
      result: {
        item: "ftb:empowered_netherite",
      },
      time: 50,
    })
    .id("ftb:actuallyadditions/empowering/netherite");

  //Applying Twisted Rune to Tools so they have Unbreaking
  //Define the tag you want to iterate through
  const bloodmagicTools = [
    "bloodmagic:soulsword",
    "bloodmagic:soulaxe",
    "bloodmagic:soulpickaxe",
    "bloodmagic:soulshovel",
    "bloodmagic:soulscythe"
  ];
  const tools = Ingredient.of("#minecraft:tools").itemIds.filter((id) => !id.startsWith("tconstruct:")).concat(bloodmagicTools);
  const armors = Ingredient.of("#forge:armors").itemIds.filter((id) => !id.startsWith("tconstruct:"));
  const chalks = Ingredient.of("#ftb:chalks").itemIds;
  const scythes = [
    "malum:soul_stained_steel_scythe",
    "malum:crude_scythe"
  ]

  tools.forEach((itemId) => {
    //Unbreaking II with Twisted Runestone
    event
      .shapeless(Item.of(itemId, { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] }), [
        "ftb:twisted_runestone",
        itemId,
      ])
      .replaceIngredient("ftb:twisted_runestone", "ftb:inactive_twisted_runestone")
      .modifyResult((inventory, itemstack) => {
        let tool = inventory.find(itemId);
        if (!tool) return itemstack;
        let nbt = tool.nbt
          ? tool.nbt.merge({ Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] })
          : { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] };
        return tool.withNBT(nbt);
      })
      .id(`ftb:shapeless/twisted_unbreaking/${itemId.split(":")[0]}/${itemId.split(":")[1]}`);
  });

  armors.forEach((itemId) => {
    //Unbreaking II with Twisted Runestone
    event
      .shapeless(Item.of(itemId, { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] }), [
        "ftb:twisted_runestone",
        itemId,
      ])
      .replaceIngredient("ftb:twisted_runestone", "ftb:inactive_twisted_runestone")
      .modifyResult((inventory, itemstack) => {
        let armor = inventory.find(itemId);
        if (!armor) return itemstack;
        let nbt = armor.nbt
          ? armor.nbt.merge({ Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] })
          : { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] };
        return armor.withNBT(nbt);
      })
      .id(`ftb:shapeless/twisted_unbreaking/${itemId.split(":")[0]}/${itemId.split(":")[1]}`);
  });

  chalks.forEach((itemId) => {
    //Unbreaking II with Twisted Runestone
    event
      .shapeless(Item.of(itemId, { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] }), [
        "ftb:twisted_runestone",
        itemId,
      ])
      .replaceIngredient("ftb:twisted_runestone", "ftb:inactive_twisted_runestone")
      .modifyResult((inventory, itemstack) => {
        let chalk = inventory.find(itemId);
        if (!chalk) return itemstack;
        let nbt = chalk.nbt
          ? chalk.nbt.merge({ Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] })
          : { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] };
        return chalk.withNBT(nbt);
      })
      .id(`ftb:shapeless/twisted_unbreaking/${itemId.split(":")[0]}/${itemId.split(":")[1]}`);
  });

  scythes.forEach((itemId) => {
    //Unbreaking II with Twisted Runestone
    event
      .shapeless(Item.of(itemId, { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] }), [
        "ftb:twisted_runestone",
        itemId,
      ])
      .replaceIngredient("ftb:twisted_runestone", "ftb:inactive_twisted_runestone")
      .modifyResult((inventory, itemstack) => {
        let chalk = inventory.find(itemId);
        if (!chalk) return itemstack;
        let nbt = chalk.nbt
          ? chalk.nbt.merge({ Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] })
          : { Enchantments: [{ id: "minecraft:unbreaking", lvl: 2 }] };
        return chalk.withNBT(nbt);
      })
      .id(`ftb:shapeless/twisted_unbreaking/${itemId.split(":")[0]}/${itemId.split(":")[1]}`);
  });

  //Adding a Recipe to Crimson Pyrotheum
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "wizards_reborn:ground_crimson_fungus",
        },
        {
          item: "wizards_reborn:ground_crimson_fungus",
        },
        {
          item: "wizards_reborn:ground_crimson_fungus",
        },
        {
          item: "wizards_reborn:ground_crimson_fungus",
        },
        {
          tag: "forge:slimeball/ichor",
        },
        {
          item: "ftb:hellish_flesh",
        },
      ],
      block_in: {
        blocks: ["ftb:pyrotheum"],
      },
      post: [
        {
          type: "place",
          block: "ftb:crimson_pyrotheum",
        },
      ],
    })
    .id("ftb:lychee/item_inside/ftb/crimson_pyrotheum");

  //Adding a Recipe to Mechanical Heart
  event
    .custom({
      type: "lychee:block_crushing",
      landing_block: "enderio:dark_steel_block",
      item_in: [
        {
          item: "embers:ancient_motive_core",
        },
      ],
      post: [
        {
          type: "random",
          rolls: {
            min: 1,
            max: 1,
          },
          entries: [
            {
              weight: 1,
              type: "drop_item",
              count: 2,
              item: "embers:archaic_brick",
            },
            {
              type: "drop_item",
              item: "ftb:mechanical_heart",
            },
          ],
        },
      ],
    })
    .id("ftb:lychee/block_crushing/ftb/mechanical_heart");

  //Adding a Recipe to Warped Cryotheum
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "wizards_reborn:ground_warped_fungus",
        },
        {
          item: "wizards_reborn:ground_warped_fungus",
        },
        {
          item: "wizards_reborn:ground_warped_fungus",
        },
        {
          item: "wizards_reborn:ground_warped_fungus",
        },
        {
          tag: "forge:slimeball/sky",
        },
        {
          item: "ftb:mechanical_heart",
        },
      ],
      block_in: {
        blocks: ["ftb:cryotheum"],
      },
      post: [
        {
          type: "place",
          block: "ftb:warped_cryotheum",
        },
      ],
    })
    .id("ftb:lychee/item_inside/ftb/warped_cryotheum");

  //Obtaining Nether Sap
  event
    .custom({
      type: "thermal:tree_extractor",
      trunk: {
        Name: "minecraft:crimson_stem",
        Properties: {
          axis: "y",
        },
      },
      leaves: {
        Name: "minecraft:nether_wart_block",
        Properties: {
          persistent: "false",
        },
      },
      sapling: "minecraft:crimson_fungus",
      min_height: 4,
      max_height: 32,
      min_leaves: 4,
      max_leaves: 64,
      result: {
        fluid: "ftb:nether_sap",
        amount: 30,
      },
    })
    .id("ftb:thermal/tree_extractor/nether_sap/crimson");

  event
    .custom({
      type: "thermal:tree_extractor",
      trunk: {
        Name: "minecraft:warped_stem",
        Properties: {
          axis: "y",
        },
      },
      leaves: {
        Name: "minecraft:warped_wart_block",
        Properties: {
          persistent: "false",
        },
      },
      sapling: "minecraft:warped_fungus",
      min_height: 4,
      max_height: 32,
      min_leaves: 4,
      max_leaves: 64,
      result: {
        fluid: "ftb:nether_sap",
        amount: 30,
      },
    })
    .id("ftb:thermal/tree_extractor/nether_sap/warped");

  //Basalt Bowl
  event
    .shaped("1x ftb:basalt_bowl", ["B B", "BBB"], {
      B: "minecraft:smooth_basalt",
    })
    .id("ftb:shaped/basalt_bowl");

  //Nether Fungal Salts
  event
    .custom({
      type: "farmersdelight:cooking",
      cookingtime: 200,
      experience: 1.0,
      container: {
        item: "ftb:basalt_bowl",
      },
      ingredients: [
        { tag: "forge:ground/nether_mushrooms" },
        { tag: "forge:ground/nether_mushrooms" },
        { tag: "forge:ground/nether_mushrooms" },
        { item: "alexscaves:moth_dust" },
        { item: "wizards_reborn:nether_salt" },
      ],
      recipe_book_tab: "misc",
      result: {
        count: 1,
        item: "ftb:nether_fungal_salts",
      },
    })
    .id("ftb:farmers_delight/cooking/nether_fungal_salts");

  //Melting Ghast Bladder
  event
    .custom({
      type: "thermal:press",
      energy: 6000,
      ingredients: [
        {
          item: "ftb:ghast_bladder",
        },
      ],
      result: [
        {
          amount: 500,
          fluid: "ftb:ghastlycerin",
        },
        {
          count: 1,
          item: "minecraft:gunpowder",
        },
      ],
    })
    .id("ftb:thermal/press/ghastlycerin");

  event
    .custom({
      type: "integrateddynamics:squeezer",
      item: "ftb:ghast_bladder",
      result: {
        fluid: {
          fluid: "ftb:ghastlycerin",
          amount: 250,
        },
        items: [
          {
            item: "minecraft:gunpowder",
          },
        ],
      },
    })
    .id("ftb:integrateddynamics/squeezer/ghastlycerin");

  event
    .custom({
      type: "integrateddynamics:mechanical_squeezer",
      item: "ftb:ghast_bladder",
      result: {
        fluid: {
          fluid: "ftb:ghastlycerin",
          amount: 500,
        },
        items: [
          {
            item: "minecraft:gunpowder",
          },
        ],
      },
      duration: 100,
    })
    .id("ftb:integrateddynamics/mechanical_squeezer/ghastlycerin");

  //Abyssal Water
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "malum:null_slate",
        },
        {
          item: "ftb:abyssal_pearl",
        },
        {
          item: "ftb:mechanical_heart",
        },
      ],
      block_in: {
        blocks: ["ftb:ghastlycerin"],
      },
      post: [
        {
          type: "place",
          block: "ftb:abyssal_dew",
        },
      ],
    })
    .id("ftb:lychee/item_inside/ftb/abyssal_dew");

  //Basic Recipes to make Rotten Flesh Blocks
  event
    .shaped("ftb:rotten_flesh_block", ["FFF", "FFF", "FFF"], {
      F: "minecraft:rotten_flesh",
    })
    .id("ftb:shaped/compress/rotten_flesh");

  event.shapeless("9x minecraft:rotten_flesh", "ftb:rotten_flesh_block").id("ftb:shapeless/decompress/rotten_flesh");

  //Undeworld Solution
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "botania:sunny_quartz",
        },
        {
          item: "minecraft:shroomlight",
        },
        {
          item: "ftb:nether_fungal_salts",
        },
      ],
      block_in: {
        blocks: ["ftb:nether_sap"],
      },
      post: [
        {
          type: "place",
          block: "ftb:underworld_solution",
        },
        {
          type: "drop_item",
          item: "ftb:basalt_bowl",
        },
      ],
    })
    .id("ftb:lychee/item_inside/underworld_solution");

  //Unstable Solution
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "occultism:chalk_purple",
        },
        {
          item: "block_factorys_bosses:dragon_bone",
        },
        {
          item: "ftb:nether_fungal_salts",
        },
      ],
      block_in: {
        blocks: ["ftb:ghastlycerin"],
      },
      post: [
        {
          type: "place",
          block: "ftb:unstable_solution",
        },
        {
          type: "drop_item",
          item: "ftb:basalt_bowl",
        },
      ],
    })
    .id("ftb:lychee/item_inside/unstable_solution");

  event.replaceInput({ id: "naturesaura:bottle_two_the_rebottling" }, "#minecraft:planks", "naturesaura:gold_leaf");

  //Mystical Flowers into End Flower via Weeping Well
  event
    .custom({
      type: "malum:favor_of_the_void",
      input: { tag: "botania:mystical_flowers" },
      output: { item: "naturesaura:end_flower" },
    })
    .id("ftb:malum/favor_of_the_void/end_flower");
});

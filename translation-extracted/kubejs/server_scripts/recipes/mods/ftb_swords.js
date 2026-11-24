ServerEvents.recipes((event) => {
  // #region Functions

  // function addTier4SwordRecipe(event, materials, output) {
  //   //The First Item received in the Materials List will be used as the Catalyst.

  //   let outputName = output.includes(":") ? output.split(":")[1] : output

  //   // Normalize inputs
  //   let inputs = materials.map(mat => {
  //     if (mat.startsWith("#")) {
  //       return { tag: mat.substring(1) }
  //     } else {
  //       return { item: mat }
  //     }
  //   })

  //   event.custom({
  //     type: "embers:alchemy",
  //     aspects: [
  //       { tag: "embers:aspectus/uraninite" }
  //     ],
  //     tablet: inputs[0],
  //     inputs: inputs.slice(1),
  //     output: {
  //       count: 1,
  //       item: output
  //     }
  //   }).id(`ftb:embers/alchemy/swords/${outputName}`);

  //   event.custom({
  //     type: "thermal_extra:component_assembly",
  //     energy: 5000,
  //     ingredients: inputs,
  //     result: [
  //       {
  //         chance: 1.0,
  //         item: output
  //       }
  //     ]
  //   }).id(`ftb:thermal_extra/component_assembly/swords/${outputName}`);

  // };

  //#endregion

  // #region Shards
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "malum:blazing_quartz",
        },
        {
          item: "ftb:blackstone_dust",
        },
        {
          item: "thermal_extra:amethyst_dust",
        },
        {
          item: "minecraft:clay_ball",
        },
      ],
      output: {
        count: 6,
        item: "ftb:null_shard",
      },
      syphon: 600,
      ticks: 300,
      upgradeLevel: 1,
    })
    .id("ftb:bloodmagic/alchemytable/shard/null");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 10000,
      consumptionRate: 100,
      drainRate: 100,
      input: { item: "ftb:null_shard" },
      output: { item: "ftb:vampiric_shard" },
      upgradeLevel: 1,
    })
    .id("ftb:bloodmagic/altar/shard/vampiric");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_shard",
        },
      ],
      block_in: {
        blocks: ["minecraft:lava"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:fire_shard",
        },
      ],
    })
    .id("ftb:lychee/item_inside/shard/fire");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_shard",
        },
      ],
      block_in: {
        blocks: ["minecraft:powder_snow"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:ice_shard",
        },
      ],
    })
    .id("ftb:lychee/item_inside/shard/ice");

  event
    .custom({
      type: "lychee:lightning_channeling",
      item_in: [{ item: "ftb:null_shard" }],
      post: [
        {
          type: "drop_item",
          item: "ftb:nature_shard",
        },
      ],
    })
    .id("ftb:lychee/lightning_channeling/shard/nature");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_shard",
        },
      ],
      block_in: {
        blocks: ["tcintegrations:molten_source_gem_fluid"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:arcane_shard",
        },
      ],
    })
    .id("ftb:lychee/item_inside/shard/arcane");

  event
    .custom({
      type: "bloodmagic:array",
      addedinput: {
        item: "bloodmagic:reagentvoid",
      },
      baseinput: {
        item: "ftb:null_shard",
      },
      output: {
        item: "ftb:celestial_shard",
      },
      texture: "bloodmagic:textures/models/alchemyarrays/voidsigil.png",
    })
    .id("ftb:bloodmagic/array/shard/void");

  // #endregion

  // #region Gems
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "occultism:iesnium_dust",
        },
        {
          item: "enchanted:attuned_stone",
        },
        {
          item: "enchanted:gypsum",
        },
        {
          tag: "forge:ingots/arcane_gold",
        },
      ],
      output: {
        count: 6,
        item: "ftb:null_gem",
      },
      syphon: 600,
      ticks: 300,
      upgradeLevel: 2,
    })
    .id("ftb:bloodmagic/alchemytable/gem/null/nilfheim");

  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "actuallyadditions:empowered_diamatine_crystal",
        },
        {
          tag: "forge:dusts/cobalt",
        },
        {
          item: "powah:charged_snowball",
        },
        {
          item: "ftb:glod_crystal",
        },
      ],
      output: {
        count: 6,
        item: "ftb:null_gem",
      },
      syphon: 600,
      ticks: 300,
      upgradeLevel: 2,
    })
    .id("ftb:bloodmagic/alchemytable/gem/null/jotunheim");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_gem",
        },
      ],
      block_in: {
        blocks: ["ftb:pyrotheum"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:fire_gem",
        },
      ],
    })
    .id("ftb:lychee/item_inside/gem/fire");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_gem",
        },
      ],
      block_in: {
        blocks: ["ftb:cryotheum"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:ice_gem",
        },
      ],
    })
    .id("ftb:lychee/item_inside/gem/ice");

  event
    .custom({
      type: "naturesaura:tree_ritual",
      ingredients: [
        {
          item: "ftb:null_gem",
        },
        {
          item: "irons_spellbooks:lightning_bottle",
        },
        {
          item: "mysticalagriculture:nature_essence",
        },
        {
          item: "mysticalagriculture:nature_essence",
        },
      ],
      sapling: {
        item: "quark:yellow_blossom_sapling",
      },
      output: {
        item: "ftb:nature_gem",
      },
      time: 500,
    })
    .id("ftb:naturesaura/tree_ritual/gem/nature/nilfheim");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "ftb:null_gem" },
        { item: "irons_spellbooks:lightning_bottle" },
        { item: "mysticalagriculture:nature_essence" },
        { item: "mysticalagriculture:nature_essence" },
        { item: "botania:sunny_quartz" },
        { item: "botania:sunny_quartz" },
      ],
      energy: 120000,
      result: {
        item: "ftb:nature_gem",
      },
    })
    .id("ftb:powah/energizing/gem/nature/jotunheim");

  event
    .custom({
      type: "enchanted:witch_cauldron",
      cookingColor: [49, 21, 74],
      finalColor: [73, 13, 130],
      ingredients: [
        {
          item: "ftb:null_gem",
        },
        {
          item: "enchanted:attuned_stone",
        },
        {
          item: "bloodmagic:reagentbinding",
        },
        {
          item: "irons_spellbooks:icy_fang",
        },
      ],
      power: 200,
      result: {
        item: "ftb:arcane_gem",
      },
    })
    .id("ftb:enchanted/witch_cauldron/gem/arcane/nilfheim");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_gem",
        },
        {
          item: "enderio:dark_steel_ingot",
        },
        {
          item: "ftb:wrought_iron_ingot",
        },
        {
          item: "iceandfire:dragon_ice",
        },
      ],
      block_in: {
        blocks: ["actuallyadditions:empowered_oil"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:arcane_gem",
        },
      ],
    })
    .id("ftb:lychee/item_inside/gem/arcane/jotunheim");

  event
    .custom({
      type: "malum:favor_of_the_void",
      input: {
        item: "ftb:null_gem",
      },
      output: {
        item: "ftb:celestial_gem",
      },
    })
    .id("ftb:malum/favor_of_the_void/gem/celestial/nilfheim");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_gem",
        },
      ],
      block_in: {
        blocks: ["enderio:dew_of_the_void"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:celestial_gem",
        },
      ],
    })
    .id("ftb:lychee/item_inside/gem/celestial/jotunheim");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 20000,
      consumptionRate: 200,
      drainRate: 200,
      input: { item: "ftb:null_gem" },
      output: { item: "ftb:vampiric_gem" },
      upgradeLevel: 2,
    })
    .id("ftb:bloodmagic/altar/gem/vampiric");

  // #endregion

  // #region Crystals

  //Null Crystal
  event
    .custom({
      type: "embers:alchemy",
      aspects: [
        {
          tag: "embers:aspectus/dragonsteel",
        },
      ],
      tablet: {
        item: "rftoolsbase:infused_diamond",
      },
      inputs: [
        {
          item: "ftb:empowered_netherite",
        },
        {
          item: "ftb:prismatic_xychorium",
        },
        {
          tag: "forge:ingots/enderium",
        },
        {
          tag: "forge:nether_stars",
        },
      ],
      output: {
        count: 6,
        item: "ftb:null_crystal",
      },
    })
    .id("ftb:embers/alchemy/crystal/null");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_crystal",
        },
      ],
      block_in: {
        blocks: ["ftb:crimson_pyrotheum"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:fire_crystal",
        },
      ],
    })
    .id("ftb:lychee/item_inside/crystal/fire");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_crystal",
        },
      ],
      block_in: {
        blocks: ["ftb:warped_cryotheum"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:ice_crystal",
        },
      ],
    })
    .id("ftb:lychee/item_inside/crystal/ice");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_crystal",
        },
      ],
      block_in: {
        blocks: ["ftb:underworld_solution"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:nature_crystal",
        },
      ],
    })
    .id("ftb:lychee/item_inside/crystal/nature");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_crystal",
        },
      ],
      block_in: {
        blocks: ["ftb:unstable_solution"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:arcane_crystal",
        },
      ],
    })
    .id("ftb:lychee/item_inside/crystal/arcane");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_crystal",
        },
      ],
      block_in: {
        blocks: ["ftb:abyssal_dew"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:celestial_crystal",
        },
      ],
    })
    .id("ftb:lychee/item_inside/crystal/celestial");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "ftb:null_crystal",
        },
        {
          item: "ftb:fiery_remains",
        },
        {
          item: "ftb:hellish_flesh",
        },
      ],
      block_in: {
        blocks: ["bloodmagic:life_essence_block"],
      },
      post: [
        {
          type: "drop_item",
          item: "ftb:vampiric_crystal",
        },
      ],
    })
    .id("ftb:lychee/item_inside/crystal/vampiric");

  // #endregion

  // #region Clusters

  //Vampiric
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "ftb:vampiric_shard",
        },
        {
          item: "ftb:vampiric_shard",
        },
        {
          item: "ftb:vampiric_shard",
        },
        {
          item: "ftb:vampiric_shard",
        },
        {
          item: "ftb:vampiric_gem",
        },
        {
          item: "ftb:vampiric_gem",
        },
      ],
      output: {
        count: 1,
        item: "ftb:vampiric_cluster",
      },
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 4,
    })
    .id("ftb:bloodmagic/alchemytable/cluster/vampiric");

  //Arcane
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "ftb:arcane_shard",
        },
        {
          item: "ftb:arcane_shard",
        },
        {
          item: "ftb:arcane_shard",
        },
        {
          item: "ftb:arcane_shard",
        },
        {
          item: "ftb:arcane_gem",
        },
        {
          item: "ftb:arcane_gem",
        },
      ],
      output: {
        count: 1,
        item: "ftb:arcane_cluster",
      },
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 4,
    })
    .id("ftb:bloodmagic/alchemytable/cluster/arcane");

  //Celestial
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "ftb:celestial_shard",
        },
        {
          item: "ftb:celestial_shard",
        },
        {
          item: "ftb:celestial_shard",
        },
        {
          item: "ftb:celestial_shard",
        },
        {
          item: "ftb:celestial_gem",
        },
        {
          item: "ftb:celestial_gem",
        },
      ],
      output: {
        count: 1,
        item: "ftb:celestial_cluster",
      },
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 4,
    })
    .id("ftb:bloodmagic/alchemytable/cluster/celestial");

  //Nature
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "ftb:nature_shard",
        },
        {
          item: "ftb:nature_shard",
        },
        {
          item: "ftb:nature_shard",
        },
        {
          item: "ftb:nature_shard",
        },
        {
          item: "ftb:nature_gem",
        },
        {
          item: "ftb:nature_gem",
        },
      ],
      output: {
        count: 1,
        item: "ftb:nature_cluster",
      },
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 4,
    })
    .id("ftb:bloodmagic/alchemytable/cluster/nature");

  //Fire
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "ftb:fire_shard",
        },
        {
          item: "ftb:fire_shard",
        },
        {
          item: "ftb:fire_shard",
        },
        {
          item: "ftb:fire_shard",
        },
        {
          item: "ftb:fire_gem",
        },
        {
          item: "ftb:fire_gem",
        },
      ],
      output: {
        count: 1,
        item: "ftb:fire_cluster",
      },
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 4,
    })
    .id("ftb:bloodmagic/alchemytable/cluster/fire");

  //Ice
  event
    .custom({
      type: "bloodmagic:alchemytable",
      input: [
        {
          item: "ftb:ice_shard",
        },
        {
          item: "ftb:ice_shard",
        },
        {
          item: "ftb:ice_shard",
        },
        {
          item: "ftb:ice_shard",
        },
        {
          item: "ftb:ice_gem",
        },
        {
          item: "ftb:ice_gem",
        },
      ],
      output: {
        count: 1,
        item: "ftb:ice_cluster",
      },
      syphon: 1000,
      ticks: 200,
      upgradeLevel: 4,
    })
    .id("ftb:bloodmagic/alchemytable/cluster/ice");

  // #endregion
  // #region C-Tier Swords
  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:toxic_longsword",
    spirits: [["earthen", 4]],
    extraItems: [
      ["occultism:demons_dream_essence", 4],
      ["ftb:vampiric_shard", 4],
      ["dungeonsdelight:poisonous_potato_crate", 1],
      ["malum:cursed_sap", 1],
    ],
  });

  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:emberblade",
    spirits: [["infernal", 4]],
    extraItems: [
      ["#tconstruct:scorched_blocks", 8],
      ["ftb:fire_shard", 4],
      ["minecraft:fire_coral_block", 8],
    ],
  });

  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_axe",
    output: "simplyswords:frostfall",
    spirits: [["aqueous", 4]],
    extraItems: [
      ["quark:permafrost", 8],
      ["ftb:ice_shard", 4],
      ["thermal:frost_melon", 4],
    ],
  });

  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_axe",
    output: "simplyswords:thunderbrand",
    spirits: [["aerial", 4]],
    extraItems: [
      ["mysticalagriculture:air_essence", 8],
      ["ftb:nature_shard", 4],
      ["#forge:storage_blocks/copper", 4],
      ["irons_spellbooks:lightning_bottle", 4],
    ],
  });

  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_axe",
    output: "simplyswords:arcanethyst",
    spirits: [["arcane", 4]],
    extraItems: [
      ["ftb:arcane_shard", 4],
      ["malum:hex_ash", 8],
      ["animus:arcane_rune", 4],
    ],
  });

  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:shadowsting",
    spirits: [["eldritch", 4]],
    extraItems: [
      ["ftb:celestial_shard", 4],
      ["#forge:end_stones", 64],
      ["#forge:ender_pearls", 4],
      ["alexscaves:dark_tatters", 4],
    ],
  });

  bloodMagicSoulforge(event, {
    input: [
      "malum:soul_stained_steel_sword",
      "malum:wicked_spirit",
      "ftb:vampiric_shard",
      "occultism:otherworld_essence",
    ],
    output: "simplyswords:tainted_relic",
    drain: [64, 10],
    id: "ftb:bloodmagic/soulforge/swords/tainted_relic",
  });

  // #endregion

  // #region B-Tier Swords

  //Emberlash
  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:emberlash",
    spirits: [
      ["infernal", 8],
      ["aerial", 2],
    ],
    extraItems: [
      ["ftb:fire_gem", 4],
      ["ftb:vampiric_shard", 1],
      ["#ftb:emberlash_materials", 4],
      ["#tconstruct:scorched_blocks", 16],
    ],
  });

  //Caelestis
  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:caelestis",
    spirits: [
      ["eldritch", 8],
      ["wicked", 2],
    ],
    extraItems: [
      ["ftb:celestial_gem", 4],
      ["ftb:fire_shard", 1],
      ["#ftb:caelestis_materials", 4],
      ["reliquary:void_tear", 1],
    ],
  });

  //Icewhisper
  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_axe",
    output: "simplyswords:icewhisper",
    spirits: [
      ["aqueous", 8],
      ["arcane", 2],
    ],
    extraItems: [
      ["ftb:ice_gem", 4],
      ["ftb:vampiric_shard", 1],
      ["#forge:ices/blue", 8],
      ["#ftb:icewhisper_materials", 1],
    ],
  });

  //Stormbringer
  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:stormbringer",
    spirits: [
      ["aerial", 8],
      ["wicked", 2],
    ],
    extraItems: [
      ["ftb:nature_gem", 4],
      ["#forge:shields", 1],
      ["botania:sunny_quartz", 8],
      ["#ftb:stormbringer_materials", 1],
    ],
  });

  //Soulstealer
  malumSpiritInfusion(event, {
    input: "malum:soul_stained_steel_sword",
    output: "simplyswords:soulstealer",
    spirits: [
      ["arcane", 8],
      ["wicked", 2],
    ],
    extraItems: [
      ["ftb:arcane_gem", 4],
      ["ftb:celestial_shard", 1],
      ["ftb:vampiric_shard", 1],
      ["#ftb:soulstealer_materials", 4],
    ],
  });

  //Twisted Blade
  bloodMagicSoulforge(event, {
    input: [
      "malum:soul_stained_steel_sword",
      "ftb:vampiric_gem",
      "malum:rune_of_culling",
      "#ftb:twisted_blade_materials",
    ],
    output: "simplyswords:twisted_blade",
    drain: [256, 256],
    id: "ftb:bloodmagic/soulforge/swords/twisted_blade",
  });

  //Watching Glaive
  bloodMagicSoulforge(event, {
    input: ["malum:soul_stained_steel_scythe", "ftb:vampiric_gem", "ars_nouveau:scryers_oculus", "#forge:rosin"],
    output: "simplyswords:watching_warglaive",
    drain: [256, 256],
    id: "ftb:bloodmagic/soulforge/swords/watching_warglaive",
  });

  // #endregion

  // #region A-Tier Swords

  //Molten Edge
  malumSpiritInfusion(event, {
    input: "embers:dawnstone_axe",
    output: "simplyswords:molten_edge",
    spirits: [
      ["infernal", 16],
      ["eldritch", 8],
      ["wicked", 4],
    ],
    extraItems: [
      ["ftb:fire_crystal", 8],
      ["ftb:vampiric_gem", 4],
      ["tconstruct:cinderslime_block", 4],
      ["malum:blazing_quartz", 64],
    ],
  });

  //The Watcher
  malumSpiritInfusion(event, {
    input: "embers:dawnstone_sword",
    output: "simplyswords:watcher_claymore",
    spirits: [
      ["eldritch", 16],
      ["earthen", 8],
      ["wicked", 4],
    ],
    extraItems: [
      ["ftb:celestial_crystal", 8],
      ["ftb:vampiric_gem", 4],
      ["malum:malignant_lead", 4],
      ["#minecraft:soul_fire_base_blocks", 64],
    ],
  });

  //Livyatan
  malumSpiritInfusion(event, {
    input: "embers:dawnstone_axe",
    output: "simplyswords:livyatan",
    spirits: [
      ["aqueous", 16],
      ["earthen", 8],
    ],
    extraItems: [
      ["ftb:ice_crystal", 8],
      ["ftb:arcane_gem", 4],
      ["thermal:ice_charge", 18],
      ["iceandfire:ice_dragon_blood", 4],
    ],
  });

  //Enigma
  malumSpiritInfusion(event, {
    input: "embers:dawnstone_sword",
    output: "simplyswords:enigma",
    spirits: [
      ["aerial", 16],
      ["earthen", 8],
    ],
    extraItems: [
      ["ftb:nature_crystal", 4],
      ["ftb:arcane_crystal", 4],
      ["justtrialspawners:wind_charge", 18],
      ["bloodmagic:reagentair", 4],
    ],
  });

  //Magiscythe
  malumSpiritInfusion(event, {
    input: "embers:dawnstone_hoe",
    output: "simplyswords:magiscythe",
    spirits: [
      ["aerial", 8],
      ["earthen", 16],
    ],
    extraItems: [
      ["ftb:nature_crystal", 4],
      ["ftb:arcane_crystal", 4],
      ["thermal:lightning_charge", 18],
      ["animus:reagentstorm", 4],
    ],
  });

  //The Harbinger
  malumSpiritInfusion(event, {
    input: "simplyswords:tainted_relic",
    output: "simplyswords:harbinger",
    spirits: [
      ["eldritch", 16],
      ["wicked", 8],
    ],
    extraItems: [
      ["minecraft:ender_eye", 2],
      ["ftb:celestial_crystal", 8],
      ["ftb:vampiric_gem", 4],
    ],
  });

  // #endregion

  // #region S-Tier Swords

  //Brimstone Claymore
  botaniaInfusionRecipe(event, {
    ingredients: ["botania:manasteel_sword", "ftb:fire_crystal", "ftb:fire_cluster"],
    output: "simplyswords:brimstone_claymore",
    manapool: 3,
    type: "infuser",
  });

  //Soulrender
  botaniaInfusionRecipe(event, {
    ingredients: ["botania:manasteel_hoe", "ftb:vampiric_crystal", "ftb:vampiric_cluster"],
    output: "simplyswords:soulrender",
    manapool: 3,
    type: "infuser",
  });

  //Star's Edge
  botaniaInfusionRecipe(event, {
    ingredients: ["botania:manasteel_sword", "ftb:celestial_crystal", "ftb:celestial_cluster"],
    output: "simplyswords:stars_edge",
    manapool: 3,
    type: "infuser",
  });

  //Whisperwind
  botaniaInfusionRecipe(event, {
    ingredients: ["botania:manasteel_sword", "ftb:nature_crystal", "ftb:nature_cluster"],
    output: "simplyswords:whisperwind",
    manapool: 3,
    type: "infuser",
  });

  // #endregion
});

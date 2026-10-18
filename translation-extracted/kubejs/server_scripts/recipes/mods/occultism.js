const summoningRituals = [
  //  Foliot Crusher
  {
    ritualType: "occultism:summon_spirit_with_job",
    activationItem: "occultism:book_of_binding_bound_foliot",
    pentacleName: "helheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    spiritJobType: "occultism:crush_tier1",
    entityToSummon: "occultism:foliot",
    ritualDummy: "occultism:ritual_dummy/summon_foliot_crusher",
    ingredientResult: "occultism:jei_dummy/none",
    ingredientList: [
      { item: "#geore:geore_shards/iron" },
      { item: "#geore:geore_shards/copper" },
      { item: "ftb:blackstone_dust" },
      { item: "thermal_extra:amethyst_dust" },
    ],
  },

  // Djinni Crusher
  {
    ritualType: "occultism:summon_spirit_with_job",
    activationItem: "occultism:book_of_binding_bound_djinni",
    pentacleName: "niflheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    spiritJobType: "occultism:crush_tier2",
    entityToSummon: "occultism:djinni",
    ritualDummy: "occultism:ritual_dummy/summon_djinni_crusher",
    ingredientResult: "occultism:jei_dummy/none",
    ingredientList: [
      { item: "#forge:raw_materials/iron" },
      { item: "#forge:raw_materials/nickel" },
      { item: "#forge:raw_materials/copper" },
      { item: "#forge:raw_materials/silver" },
    ],
  },

  // Afrit Crusher
  {
    ritualType: "occultism:summon_spirit_with_job",
    activationItem: "occultism:book_of_binding_bound_afrit",
    pentacleName: "muspelheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    spiritJobType: "occultism:crush_tier3",
    entityToSummon: "occultism:afrit",
    ritualDummy: "occultism:ritual_dummy/summon_afrit_crusher",
    ingredientResult: "occultism:jei_dummy/none",
    ingredientList: [
      { item: "#forge:gems/diamond" },
      { item: "#forge:dusts/iesnium" },
      { item: "#forge:dusts/iesnium" },
      { item: "#forge:gems/emerald" },
    ],
  },

  //  Marid Crusher
  {
    ritualType: "occultism:summon_spirit_with_job",
    activationItem: "occultism:book_of_binding_bound_marid",
    pentacleName: "alfheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    spiritJobType: "occultism:crush_tier4",
    entityToSummon: "occultism:marid",
    ritualDummy: "occultism:ritual_dummy/summon_marid_crusher",
    ingredientResult: "occultism:jei_dummy/none",
    ingredientList: [
      { item: "minecraft:ghast_tear" },
      { item: "#forge:storage_blocks/diamond" },
      { item: "#forge:storage_blocks/emerald" },
      { item: "#forge:storage_blocks/iesnium" },
    ],
  },

  // Dimensional Mineshaft
  {
    ritualType: "occultism:craft",
    activationItem: "occultism:book_of_binding_bound_djinni",
    pentacleName: "niflheim summon",
    ritualDuration: 240,
    ritualDummy: "occultism:ritual_dummy/craft_dimensional_mineshaft",
    ingredientResult: "occultism:dimensional_mineshaft",
    ingredientList: [
      { item: "malum:cthonic_gold" },
      { item: "minecraft:obsidian" },
      { item: "occultism:otherstone" },
      { item: "occultism:otherstone" },
      { item: "occultism:otherstone" },
      { item: "occultism:otherstone" },
      { item: "occultism:spirit_attuned_crystal" },
    ],
  },

  // Foliot Miner
  {
    ritualType: "occultism:craft_miner_spirit",
    activationItem: "occultism:book_of_binding_bound_foliot",
    pentacleName: "helheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    ingredientList: [
      { item: "malum:cthonic_gold" },
      { item: "minecraft:gravel" },
      { item: "malum:soul_stained_steel_pickaxe" },
      { item: "#geore:geore_shards/iron" },
    ],
    ritualDummy: "occultism:ritual_dummy/craft_miner_foliot_unspecialized",
    ingredientResult: "occultism:miner_foliot_unspecialized",
  },

  // Afrit Miner
  {
    ritualType: "occultism:craft_miner_spirit",
    activationItem: "occultism:book_of_binding_bound_afrit",
    pentacleName: "niflheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    ingredientList: [
      { item: "occultism:iesnium_pickaxe" },
      { item: "occultism:miner_foliot_unspecialized" },
      { item: "minecraft:lapis_block" },
      { item: "occultism:spirit_attuned_crystal" },
      { item: "minecraft:raw_gold" },
      { item: "occultism:afrit_essence" },
    ],
    ritualDummy: "occultism:ritual_dummy/craft_miner_afrit_deeps",
    ingredientResult: "occultism:miner_afrit_deeps",
  },

  // Marid/Master Miner
  {
    ritualType: "occultism:craft_miner_spirit",
    activationItem: "occultism:book_of_binding_bound_marid",
    pentacleName: "muspelheim summon",
    ritualDuration: 60,
    spiritMaxAge: -1,
    ingredientList: [
      { item: "occultism:miner_afrit_deeps" },
      { item: "minecraft:dragon_breath" },
      { item: "minecraft:totem_of_undying" },
      { item: "occultism:iesnium_pickaxe" },
      { item: "occultism:spirit_attuned_crystal" },
      { item: "minecraft:raw_gold" },
      { item: "minecraft:nether_star" },
      { item: "minecraft:netherite_pickaxe" },
    ],
    ritualDummy: "occultism:ritual_dummy/craft_miner_marid_master",
    ingredientResult: "occultism:miner_marid_master",
  },

  // Afrit Summoning Ritual
  {
    ritualType: "occultism:craft",
    activationItem: "occultism:book_of_binding_bound_afrit",
    pentacleName: "niflheim",
    ritualDuration: 60,
    entityToSacrifice: {
      tag: "forge:cows",
      displayname: "ritual.occultism.sacrifice.cows",
    },
    ritualDummy: "occultism:ritual_dummy/summon_wild_afrit",
    ingredientList: [
      { item: "#forge:magma" },
      { item: "#forge:gems/quartz" },
      { item: "minecraft:flint_and_steel" },
      { item: "minecraft:gunpowder" },
    ],
    ingredientResult: { item: "occultism:afrit_essence" },
  },
];

const craftingRituals = [
  // Infused Pickaxe
  {
      ritualType: "occultism:craft",
      activationItem: "occultism:book_of_binding_bound_djinni",
      pentacleName: "niflheim",
      ritualDuration: 120,
      ritualDummy: "occultism:ritual_dummy/craft_infused_pickaxe",
      ingredientList: [
        { tag: "forge:rods/wooden" },
        { tag: "forge:rods/wooden" },
        { item: "occultism:spirit_attuned_pickaxe_head" },
        { tag: "forge:ingots/silver" },
        { tag: "forge:ingots/silver" },
      ],
      ingredientResult: "occultism:infused_pickaxe",
  },
  // Satchel
  {
      ritualType: "occultism:craft",
      activationItem: "occultism:book_of_binding_bound_foliot",
      pentacleName: "helheim",
      ritualDuration: 120,
      ritualDummy: "occultism:ritual_dummy/craft_satchel",
      ingredientList: [
        { tag: "forge:chests/wooden" },
        { tag: "forge:leather" },
        { tag: "forge:leather" },
        { tag: "forge:string" },
        { tag: "forge:ingots/soul_stained_steel" },
      ],
      ingredientResult: "occultism:satchel",
  },
  // Storage Accessor
  {
      ritualType: "occultism:craft",
      activationItem: "occultism:book_of_binding_bound_djinni",
      pentacleName: "niflheim",
      ritualDuration: 120,
      ritualDummy: "occultism:ritual_dummy/craft_storage_remote",
      ingredientList: [
        { item: "occultism:storage_remote_inert" },
        { item: "minecraft:ender_pearl" },
        { item: "minecraft:ender_pearl" },
        { tag: "forge:gems/quartz" },
      ],
      ingredientResult: "occultism:storage_remote",
  },

  // Wormhole
  {
      ritualType: "occultism:craft",
      activationItem: "occultism:book_of_binding_bound_afrit",
      pentacleName: "muspelheim",
      ritualDuration: 120,
      ritualDummy: "occultism:ritual_dummy/craft_stable_wormhole",
      ingredientList: [
        { item: "occultism:wormhole_frame" },
        { tag: "forge:ender_pearls" },
        { tag: "forge:ender_pearls" },
        { tag: "forge:gems/quartz" },
      ],
      ingredientResult: "occultism:stable_wormhole",
  },

  // Storage Stabilizer Tier 1
  {
      ritualType: "occultism:craft",
      activationItem: "occultism:book_of_binding_bound_foliot",
      pentacleName: "helheim",
      ritualDuration: 120,
      ritualDummy: "occultism:ritual_dummy/craft_stabilizer_tier1",
      ingredientList: [
        { item: "occultism:otherstone_pedestal" },
        { tag: "forge:storage_blocks/copper" },
        { item: "malum:cthonic_gold" },
        { item: "occultism:spirit_attuned_gem" },
      ],
      ingredientResult: "occultism:storage_stabilizer_tier1",
  },
  // Storage Stabilizer Tier 2
  {
    ritualType: "occultism:craft",
    activationItem: "occultism:book_of_binding_bound_djinni",
    pentacleName: "niflheim",
    ritualDuration: 120,
    ritualDummy: "occultism:ritual_dummy/craft_stabilizer_tier2",
    ingredientList: [
      { item: "occultism:storage_stabilizer_tier1" },
      { item: "occultism:spirit_attuned_gem" },
      { item: "occultism:spirit_attuned_gem" },
      { tag: "forge:storage_blocks/silver" },
      { item: "minecraft:ghast_tear" },
    ],
    ingredientResult: "occultism:storage_stabilizer_tier2",
  },
  
  // Storage Stabilizer Tier 3
  {
    ritualType: "occultism:craft",
    activationItem: "occultism:book_of_binding_bound_afrit",
    pentacleName: "muspelheim",
    ritualDuration: 120,
    ritualDummy: "occultism:ritual_dummy/craft_stabilizer_tier3",
    ingredientList: [
      { item: "occultism:storage_stabilizer_tier2" },
      { item: "occultism:spirit_attuned_gem" },
      { item: "occultism:spirit_attuned_gem" },
      { tag: "forge:storage_blocks/silver" },
      { item: "minecraft:ghast_tear" },
    ],
    ingredientResult: "occultism:storage_stabilizer_tier3",
  },
  
  // Storage Stabilizer Tier 4
  {
    ritualType: "occultism:craft",
    activationItem: "occultism:book_of_binding_bound_marid",
    pentacleName: "alfheim",
    ritualDuration: 120,
    ritualDummy: "occultism:ritual_dummy/craft_stabilizer_tier4",
    ingredientList: [
      { item: "occultism:storage_stabilizer_tier3" },
      { item: "occultism:spirit_attuned_crystal" },
      { item: "occultism:spirit_attuned_crystal" },
      { tag: "forge:storage_blocks/iesnium" },
      { tag: "ftb:dragon_head" },
    ],
    ingredientResult: "occultism:storage_stabilizer_tier4",
  },

  // Spirit of Calling
  {
    ritualType: "occultism:craft",
    activationItem: "minecraft:gold_ingot",
    pentacleName: "niflheim",
    ritualDuration: 120,
    ritualDummy: "occultism:ritual_dummy/custom_ritual",
    ingredientList: [
      { item: "naturesaura:infused_iron" },
      { item: "naturesaura:tainted_gold" },
    ],
    ingredientResult: "naturesaura:calling_spirit",
  }
];

const minerOreDefinition = [
  // Foliot Miner
  {
    ingredient: "occultism:miners/basic_resources",
    oreList: [
      { result: "minecraft:blackstone", weight: 1000 },
      { result: "minecraft:end_stone", weight: 1000 },
      { result: "minecraft:dead_fire_coral_block", weight: 1000 },
      { result: "minecraft:dead_horn_coral_block", weight: 1000 },
      { result: "minecraft:bone_block", weight: 1000 },
      { result: "minecraft:dead_brain_coral_block", weight: 1000 },
      { result: "minecraft:basalt", weight: 1000 },
    ],
  },
  {
    ingredient: "occultism:miners/ores",
    oreList: [
      { result: "geore:iron_shard", weight: 750 },
      { result: "geore:copper_shard", weight: 584 },
      { result: "geore:redstone_shard", weight: 515 },
      { result: "malum:soulstone_ore", weight: 200 },
      { result: "geore:coal_shard", weight: 584 },
      { result: "minecraft:amethyst_block", weight: 200 },
      { result: "malum:cthonic_gold_ore", weight: 311 },
    ],
  },
  
  // Afrit Miner (Djinni Miner is removed)
  {
    ingredient: "occultism:miners/deeps",
    oreList: [
      { result: "ftbmaterials:silver_deepslate_ore", weight: 381 },
      { result: "ftbmaterials:lead_stone_ore", weight: 500 },
      { result: "ftbmaterials:tin_deepslate_ore", weight: 602 },
      { result: "ftbmaterials:nickel_stone_ore", weight: 500 }, // -----
      { result: "ftbmaterials:apatite_stone_ore", weight: 200 },
      { result: "ftbmaterials:cinnabar_stone_ore", weight: 190 },
      { result: "ftbmaterials:niter_deepslate_ore", weight: 244 },
      { result: "ftbmaterials:sulfur_stone_ore", weight: 222 },
      { result: "ftbmaterials:aluminum_deepslate_ore", weight: 422 },
      { result: "minecraft:gold_ore", weight: 311 },
      { result: "occultism:iesnium_ore", weight: 100 },
      { result: "minecraft:emerald_ore", weight: 156 },
      { result: "minecraft:diamond_ore", weight: 218 },
      { result: "geore:lapis_shard", weight: 343 },
      { result: "minecraft:soul_sand", weight: 100 },
    ],
  },
  
  // Master Miner
  {
    ingredient: "occultism:miners/master",
    oreList: [
      { result: "minecraft:ancient_debris", weight: 100 },
      { result: "ftbmaterials:dimensional_shard_stone_ore", weight: 127 },
      { result: "minecraft:nether_quartz_ore", weight: 222 }, //    -----
      { result: "ftbmaterials:zinc_stone_ore", weight: 186 },
      { result: "xycraft_world:kivi", weight: 500 },
      { result: "geore:black_quartz_shard", weight: 343 },
      { result: "xycraft_world:xychorium_ore_stone_blue", weight: 200 }, // ---
      { result: "xycraft_world:xychorium_ore_stone_green", weight: 200 }, // ---
      { result: "xycraft_world:xychorium_ore_stone_red", weight: 200 }, // ---
      { result: "xycraft_world:xychorium_ore_stone_dark", weight: 200 }, // ---
      { result: "xycraft_world:xychorium_ore_stone_light", weight: 200 }, // ---
      { result: "malum:cthonic_gold_ore", weight: 311 },
      { result: "ftbmaterials:sapphire_stone_ore", weight: 200 },
      { result: "mysticalagriculture:prosperity_ore", weight: 155 },
    ],
  },
];

ServerEvents.recipes((event) => {
  // Remove all occultism:miner recipes at once
  event.remove({ type: "occultism:miner" });

  minerOreDefinition.forEach((minerTier) => {
    console.log(minerTier.oreList);
    let recipeId;

    let tagWithoutMod = minerTier.ingredient.includes(":") ? minerTier.ingredient.split(":")[1] : minerTier.ingredient;
    console.log(minerTier.ingredient);
    console.log(tagWithoutMod);

    minerTier.oreList.forEach((entry) => {
      let itemId = entry.result.includes(":") ? entry.result.split(":")[1] : entry.result;
      recipeId = "ftb:" + tagWithoutMod + "/" + itemId;

      occultismMinerRecipe(event, minerTier.ingredient, entry.result, entry.weight, recipeId);
    });
  });

  // Register Summoning Rituals
  summoningRituals.forEach((ritual) => {
    occultismRitualRecipe(event, ritual);
  });
  console.debug("Summoning Rituals End");
  
  // Register Crafting Rituals
  craftingRituals.forEach((ritual) => {
    occultismRitualRecipe(event, ritual);
  });
  console.debug("Crafting Rituals End");

  console.debug("Finalized Occultism Recipes");

  event
    .shaped("occultism:golden_sacrificial_bowl", [" G ", "GBG", " G "], {
      G: "malum:cthonic_gold_fragment",
      B: "occultism:sacrificial_bowl",
    })
    .id("ftb:occultism/golden_sacrificial_bowl");

  event
    .shaped("occultism:golden_sacrificial_bowl", [" G ", "GBG", " G "], {
      G: "#forge:nuggets/gold",
      B: "occultism:sacrificial_bowl",
    })
    .id("ftb:occultism/golden_sacrificial_bowl_nuggets");

  event
    .shapeless("occultism:chalk_purple_impure", [
      "occultism:chalk_gold_impure",
      "2x ftbmaterials:obsidian_dust",
      "draconicevolution:draconium_dust",
    ])
    .id("ftb:occultism/chalk_purple_impure");

  event
    .shapeless("occultism:chalk_red_impure", [
      "occultism:chalk_purple_impure",
      "botania:pixie_dust",
      "occultism:afrit_essence",
    ])
    .id("ftb:occultism/chalk_red_impure");

  event
    .custom({
      type: "occultism:spirit_fire",
      ingredient: {
        tag: "ftb:progression_stone",
      },
      result: {
        item: "occultism:otherstone",
      },
    })
    .id("ftb:occultism/spirit_fire/blackstone_to_otherstone");

  event
    .custom({
      type: "occultism:spirit_fire",
      ingredient: {
        tag: "malum:runewood_logs",
      },
      result: {
        item: "occultism:otherworld_log",
      },
    })
    .id("ftb:occultism/spirit_fire/runewood_to_otherwood");

  event
    .custom({
      type: "occultism:crushing",
      crushing_time: 200,
      ignore_crushing_multiplier: false,
      ingredient: {
        tag: "forge:end_stones",
      },
      result: {
        item: "occultism:crushed_end_stone",
        count: 1,
      },
    })
    .id("occultism:crushing/end_stone_dust");

  event
    .custom({
      type: "occultism:crushing",
      crushing_time: 200,
      ignore_crushing_multiplier: false,
      ingredient: {
        tag: "forge:gems/quartz",
      },
      result: {
        item: "ftbmaterials:quartz_dust",
        count: 1,
      },
    })
    .id("occultism:crushing/quartz_dust_from_gem");

  event
    .custom({
      type: "occultism:crushing",
      crushing_time: 200,
      ignore_crushing_multiplier: false,
      ingredient: {
        tag: "forge:ores/quartz",
      },
      result: {
        item: "ftbmaterials:quartz_dust",
        count: 4,
      },
    })
    .id("occultism:crushing/quartz_dust");

  malumSpiritInfusion(event, {
    input: ["minecraft:quartz", 4],
    output: "occultism:spirit_attuned_crystal",
    spirits: [
      ["earthen", 4],
      ["aqueous", 4],
      ["aerial", 4],
      ["infernal", 4],
      ["eldritch", 2],
    ],
  });

  bloodMagicSoulforge(event, {
    input: [
      "occultism:otherstone_pedestal",
      "malum:cthonic_gold",
      "occultism:spirit_attuned_crystal",
      "occultism:book_of_binding_foliot",
    ],
    output: "occultism:storage_controller",
    drain: [64.0, 128.0],
  });

  bloodMagicSoulforge(event, {
    input: ["minecraft:wheat_seeds"],
    output: "occultism:datura_seeds",
    drain: [16.0, 16.0],
  });

});

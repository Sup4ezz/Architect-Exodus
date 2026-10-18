ServerEvents.recipes((event) => {
  malumSpiritInfusion(event, {
    input: "thermal_extra:amethyst_dust",
    output: ["mysticalagriculture:water_essence", 8],
    spirits: ["aqueous"],
  });

  malumSpiritInfusion(event, {
    input: "thermal_extra:amethyst_dust",
    output: ["mysticalagriculture:fire_essence", 8],
    spirits: ["infernal"],
  });

  malumSpiritInfusion(event, {
    input: "thermal_extra:amethyst_dust",
    output: ["mysticalagriculture:air_essence", 8],
    spirits: ["aerial"],
  });

  malumSpiritInfusion(event, {
    input: "thermal_extra:amethyst_dust",
    output: ["mysticalagriculture:earth_essence", 8],
    spirits: ["earthen"],
  });

  malumSpiritInfusion(event, {
    input: "thermal_extra:amethyst_dust",
    output: ["mysticalagriculture:stone_essence", 8],
    spirits: ["wicked"],
  });

  event
    .shaped("8x mysticalagriculture:dirt_essence", ["SSS", "SES", "SSS"], {
      S: "minecraft:sand",
      E: "mysticalagriculture:earth_essence",
    })
    .id("ftb:mysticalagriculture/dirt_essence");

  // Re-added as proper 2x2 vanilla shaped recipes - the base MA recipes pad
  // their pattern out to 3x3, which breaks crafting in the 2x2 inventory grid
  event
    .shaped("16x minecraft:gravel", ["EF", "FE"], {
      E: "mysticalagriculture:dirt_essence",
      F: "mysticalagriculture:stone_essence",
    })
    .id("ftb:mysticalagriculture/essence/minecraft/gravel");

  event
    .shaped("16x minecraft:sand", ["EE", "FF"], {
      E: "mysticalagriculture:fire_essence",
      F: "mysticalagriculture:dirt_essence",
    })
    .id("ftb:mysticalagriculture/essence/minecraft/sand");

  event
    .shaped("16x minecraft:red_sand", ["FF", "EE"], {
      E: "mysticalagriculture:fire_essence",
      F: "mysticalagriculture:dirt_essence",
    })
    .id("ftb:mysticalagriculture/essence/minecraft/red_sand");

  malumSpiritInfusion(event, {
    input: "minecraft:wheat_seeds",
    output: ["mysticalagriculture:dye_seeds", 1],
    spirits: [
      ["aerial", 4],
      ["aqueous", 4],
      ["infernal", 4],
      ["earthen", 4],
    ],
    extraItems: [
      { item: "minecraft:white_dye", count: 2 },
      { item: "minecraft:black_dye", count: 2 },
    ]
  });

  const essenceRingRecipes = [
    { essence: "aluminum", path: "common/aluminum_ingot", output: "8x ftbmaterials:aluminum_ingot" },
    { essence: "brass", path: "common/brass_ingot", output: "4x ftbmaterials:brass_ingot" },
    { essence: "bronze", path: "common/bronze_ingot", output: "4x ftbmaterials:bronze_ingot" },
    { essence: "constantan", path: "common/constantan_ingot", output: "4x ftbmaterials:constantan_ingot" },
    { essence: "electrum", path: "common/electrum_ingot", output: "4x ftbmaterials:electrum_ingot" },
    { essence: "invar", path: "common/invar_ingot", output: "4x ftbmaterials:invar_ingot" },
    { essence: "lead", path: "common/lead_ingot", output: "4x ftbmaterials:lead_ingot" },
    { essence: "nickel", path: "common/nickel_ingot", output: "4x ftbmaterials:nickel_ingot" },
    { essence: "silver", path: "common/silver_ingot", output: "4x ftbmaterials:silver_ingot" },
    { essence: "steel", path: "common/steel_ingot", output: "3x ftbmaterials:steel_ingot" },
    { essence: "tin", path: "common/tin_ingot", output: "4x ftbmaterials:tin_ingot" },
    { essence: "zinc", path: "common/zinc_ingot", output: "4x ftbmaterials:zinc_ingot" },
    { essence: "apatite", path: "gems/apatite", output: "16x ftbmaterials:apatite" },
    { essence: "ruby", path: "gems/ruby", output: "6x ftbmaterials:ruby" },
    { essence: "sapphire", path: "gems/sapphire", output: "6x ftbmaterials:sapphire" },
    { essence: "enderium", path: "thermal/enderium_ingot", output: "2x thermal:enderium_ingot" },
    { essence: "lumium", path: "thermal/lumium_ingot", output: "4x ftbmaterials:lumium_ingot" },
    { essence: "signalum", path: "thermal/signalum_ingot", output: "4x thermal:signalum_ingot" },
  ];

  essenceRingRecipes.forEach(function (entry) {
    event
      .shaped(entry.output, ["EEE", "E E", "EEE"], { E: "mysticalagriculture:" + entry.essence + "_essence" })
      .id("ftb:mysticalagriculture/essence/" + entry.path);
  });

  const essenceRowRecipes = [
    { essence: "silicon", path: "common/silicon", output: "8x ae2:silicon" },
    { essence: "sulfur", path: "common/sulfur", output: "8x ftbmaterials:sulfur_dust" },
  ];

  essenceRowRecipes.forEach(function (entry) {
    event
      .shaped(entry.output, ["EEE"], { E: "mysticalagriculture:" + entry.essence + "_essence" })
      .id("ftb:mysticalagriculture/essence/" + entry.path);
  });

  // Awakened Supremium Block via DE Fusion Crafting (replaces the Awakening Altar recipe)
  event.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "mysticalagriculture:supremium_essence" },
    ingredients: [
      { item: "thermal_extra:ancient_dust" },
      { item: "thermal_extra:ancient_dust" },
      { item: "mysticalagriculture:air_essence" },
      { item: "mysticalagriculture:fire_essence" },
      { item: "mysticalagriculture:water_essence" },
      { item: "mysticalagriculture:earth_essence" }
    ],
    result: { item: "mysticalagriculture:awakened_supremium_block" },
    tier: "WYVERN",
    total_energy: 50000000
  }).id("ftb:draconicevolution/fusion/awakened_supremium_block");
});

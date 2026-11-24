let alloying_recipes = [
  // Electrum
  {
    recipe_id: "electrum",
    inputs: [
      { tag: "forge:ingots/gold", count: 1 },
      { tag: "forge:ingots/silver", count: 1 },
    ],
    output: "ftbmaterials:electrum_ingot",
    output_count: 2,
    energy: 8000,
    experience: 0.2,
    heated: "heated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Lumium
  {
    recipe_id: "lumium",
    inputs: [
      { tag: "forge:ingots/silver", count: 1 },
      { tag: "forge:ingots/tin", count: 3 },
      { tag: "forge:dusts/glowstone", count: 2 },
    ],
    output: "ftbmaterials:lumium_ingot",
    output_count: 4,
    energy: 12000,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Signalum
  {
    recipe_id: "signalum",
    inputs: [
      { tag: "forge:ingots/copper", count: 3 },
      { tag: "forge:ingots/silver", count: 1 },
      { tag: "forge:dusts/redstone", count: 4 },
    ],
    output: "thermal:signalum_ingot",
    output_count: 4,
    energy: 16000,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Enderium
  {
    recipe_id: "enderium",
    inputs: [
      { tag: "forge:dusts/diamond", count: 1 },
      { tag: "embers:aspectus/lead", count: 3 },
      { tag: "forge:ender_pearls", count: 2 },
    ],
    output: "thermal:enderium_ingot",
    output_count: 2,
    energy: 16000,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Copper Alloy
  {
    recipe_id: "copper_alloy",
    inputs: [
      { tag: "forge:ingots/copper", count: 1 },
      { tag: "forge:silicon", count: 1 },
    ],
    output: "enderio:copper_alloy_ingot",
    output_count: 1,
    energy: 3200,
    experience: 0.2,
    heated: "heated",
    eio: false,
    create: true,
    thermal: true,
  },
  // Energetic Alloy
  {
    recipe_id: "energetic_alloy",
    inputs: [
      { tag: "forge:dusts/redstone", count: 1 },
      { tag: "forge:ingots/gold", count: 1 },
      { tag: "forge:dusts/glowstone", count: 1 },
    ],
    output: "enderio:energetic_alloy_ingot",
    output_count: 1,
    energy: 4800,
    experience: 0.4,
    heated: "heated",
    eio: false,
    create: true,
    thermal: true,
  },
  // Vibrant Alloy
  {
    recipe_id: "vibrant_alloy",
    inputs: [
      { tag: "forge:ingots/energetic_alloy", count: 1 },
      { tag: "forge:ender_pearls", count: 1 },
    ],
    output: "enderio:vibrant_alloy_ingot",
    output_count: 1,
    energy: 4800,
    experience: 0.4,
    heated: "heated",
    eio: false,
    create: true,
    thermal: true,
  },
  // Redstone Alloy
  {
    recipe_id: "redstone_alloy",
    inputs: [
      { tag: "forge:dusts/redstone", count: 1 },
      { tag: "forge:silicon", count: 1 },
    ],
    output: "enderio:redstone_alloy_ingot",
    output_count: 1,
    energy: 3200,
    experience: 0.4,
    heated: "heated",
    eio: false,
    create: true,
    thermal: true,
  },
  // Conductive Alloy
  {
    recipe_id: "conductive_alloy",
    inputs: [
      { tag: "forge:ingots/copper_alloy", count: 1 },
      { tag: "forge:ingots/iron", count: 1 },
      { tag: "forge:dusts/redstone", count: 1 },
    ],
    output: "enderio:conductive_alloy_ingot",
    output_count: 1,
    energy: 4800,
    experience: 0.4,
    heated: "heated",
    eio: false,
    create: true,
    thermal: true,
  },
  // Pulsating Alloy
  {
    recipe_id: "pulsating_alloy",
    inputs: [
      { tag: "forge:ingots/iron", count: 1 },
      { tag: "forge:ender_pearls", count: 1 },
    ],
    output: "enderio:pulsating_alloy_ingot",
    output_count: 1,
    energy: 4800,
    experience: 0.4,
    heated: "heated",
    eio: false,
    create: true,
    thermal: true,
  },
  // Andesite Alloy
  {
    recipe_id: "andesite_alloy",
    inputs: [
      { tag: "chipped:andesite", count: 1 },
      { tag: "forge:nuggets/iron", count: 1 },
    ],
    output: "create:andesite_alloy",
    output_count: 1,
    energy: 2400,
    experience: 0.4,
    heated: "false",
    eio: true,
    create: true,
    thermal: true,
  },
  {
    recipe_id: "andesite_alloy_from_zinc",
    inputs: [
      { tag: "chipped:andesite", count: 1 },
      { tag: "forge:nuggets/zinc", count: 1 },
    ],
    output: "create:andesite_alloy",
    output_count: 1,
    energy: 2400,
    experience: 0.4,
    heated: "false",
    eio: true,
    create: true,
    thermal: true,
  },
  // Amethyst Bronze
  {
    recipe_id: "amethyst_bronze",
    inputs: [
      { tag: "forge:ingots/copper", count: 1 },
      { tag: "forge:gems/amethyst", count: 1 },
    ],
    output: "tconstruct:amethyst_bronze_ingot",
    output_count: 1,
    energy: 2400,
    experience: 0.2,
    heated: "false",
    eio: true,
    create: false,
    thermal: true,
  },
  // Brass
  {
    recipe_id: "brass",
    inputs: [
      { tag: "forge:ingots/copper", count: 1 },
      { tag: "forge:ingots/zinc", count: 1 },
    ],
    output: "ftbmaterials:brass_ingot",
    output_count: 2,
    energy: 2400,
    experience: 0.2,
    heated: "false",
    eio: true,
    create: false,
    thermal: true,
  },
  // Hepatizon
  {
    recipe_id: "hepatizon",
    inputs: [
      { tag: "chipped:obsidian", count: 1 },
      { tag: "forge:ingots/cobalt", count: 1 },
      { tag: "forge:ingots/copper", count: 2 },
    ],
    output: "tconstruct:hepatizon_ingot",
    output_count: 2,
    energy: 4800,
    experience: 0.4,
    heated: "false",
    eio: true,
    create: false,
    thermal: true,
  },
  // Rose Gold
  {
    recipe_id: "rose_gold",
    inputs: [
      { tag: "forge:ingots/copper", count: 3 },
      { tag: "forge:ingots/gold", count: 1 },
    ],
    output: "tconstruct:rose_gold_ingot",
    output_count: 4,
    energy: 3200,
    experience: 0.2,
    heated: "false",
    eio: true,
    create: false,
    thermal: true,
  },
  // Soul Infused
  {
    recipe_id: "soul_infused",
    inputs: [
      { tag: "forge:ingots/iron", count: 1 },
      { tag: "forge:dusts/soul_sand", count: 2 },
      { tag: "forge:ingots/copper", count: 1 },
    ],
    output: "thermal_extra:soul_infused_ingot",
    output_count: 1,
    energy: 4000,
    experience: 0.2,
    heated: "heated",
    eio: true,
    create: true,
    thermal: false,
  },
  // Shellite
  {
    recipe_id: "shellite",
    inputs: [
      { tag: "forge:ingots/lead", count: 1 },
      { item: "minecraft:shulker_shell", count: 1 },
      { tag: "forge:ingots/nickel", count: 1 },
    ],
    output: "thermal_extra:shellite_ingot",
    output_count: 1,
    energy: 4000,
    experience: 0.2,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: false,
  },
  // Twinite
  {
    recipe_id: "twinite",
    inputs: [
      { tag: "forge:rods/blaze", count: 1 },
      { tag: "forge:ingots/tin", count: 2 },
      { tag: "chipped:obsidian", count: 1 },
    ],
    output: "thermal_extra:twinite_ingot",
    output_count: 1,
    energy: 4000,
    experience: 0.2,
    heated: "heated",
    eio: true,
    create: true,
    thermal: false,
  },
  // Dragonsteel
  {
    recipe_id: "dragonsteel",
    inputs: [
      { tag: "forge:ingots/netherite_scrap", count: 1 },
      { item: "thermal_extra:ancient_dust", count: 1 },
      { tag: "forge:ingots/nickel", count: 1 },
    ],
    output: "thermal_extra:dragonsteel_ingot",
    output_count: 1,
    energy: 4000,
    experience: 0.2,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: false,
  },
  // Abyssal
  {
    recipe_id: "abyssal",
    inputs: [
      { tag: "forge:ingots/netherite_scrap", count: 1 },
      { tag: "forge:dusts/diamond", count: 2 },
      { item: "minecraft:echo_shard", count: 1 },
    ],
    output: "thermal_extra:abyssal_ingot",
    output_count: 1,
    energy: 4000,
    experience: 0.2,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: false,
  },
  // Scarlet Neodymium
  {
    recipe_id: "scarlet_neodymium",
    inputs: [
      { tag: "forge:ingots/iron", count: 3 },
      { tag: "forge:gems/raw_scarlet_neodymium", count: 3 },
    ],
    output: "alexscaves:scarlet_neodymium_ingot",
    output_count: 1,
    energy: 8000,
    experience: 0.4,
    heated: "heated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Azure Neodymium
  {
    recipe_id: "azure_neodymium",
    inputs: [
      { tag: "forge:ingots/iron", count: 3 },
      { tag: "forge:gems/raw_azure_neodymium", count: 3 },
    ],
    output: "alexscaves:azure_neodymium_ingot",
    output_count: 1,
    energy: 8000,
    experience: 0.4,
    heated: "heated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Dark Steel
  {
    recipe_id: "dark_steel",
    inputs: [
      { tag: "forge:ingots/iron", count: 1 },
      { tag: "forge:dusts/coal", count: 1 },
      { tag: "chipped:obsidian", count: 1 },
    ],
    output: "enderio:dark_steel_ingot",
    output_count: 1,
    energy: 6400,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Soularium
  {
    recipe_id: "soularium",
    inputs: [
      { tag: "minecraft:soul_fire_base_blocks", count: 1 },
      { tag: "forge:ingots/gold", count: 1 },
    ],
    output: "enderio:soularium_ingot",
    output_count: 1,
    energy: 5600,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
  // End Steel
  {
    recipe_id: "end_steel",
    inputs: [
      { tag: "chipped:end_stone", count: 1 },
      { tag: "forge:ingots/dark_steel", count: 1 },
      { tag: "chipped:obsidian", count: 1 },
    ],
    output: "enderio:end_steel_ingot",
    output_count: 1,
    energy: 6400,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Bronze
  {
    recipe_id: "bronze",
    inputs: [
      { tag: "forge:ingots/tin", count: 1 },
      { tag: "forge:ingots/copper", count: 3 },
    ],
    output: "ftbmaterials:bronze_ingot",
    output_count: 4,
    energy: 6400,
    experience: 0.2,
    heated: "heated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Constantan
  {
    recipe_id: "constantan",
    inputs: [
      { tag: "forge:ingots/nickel", count: 1 },
      { tag: "forge:ingots/copper", count: 1 },
    ],
    output: "ftbmaterials:constantan_ingot",
    output_count: 2,
    energy: 3200,
    experience: 0.2,
    heated: "heated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Invar
  {
    recipe_id: "invar",
    inputs: [
      { tag: "forge:ingots/iron", count: 2 },
      { tag: "forge:ingots/nickel", count: 1 },
    ],
    output: "ftbmaterials:invar_ingot",
    output_count: 3,
    energy: 4800,
    experience: 0.2,
    heated: "heated",
    eio: true,
    create: true,
    thermal: true,
  },
  // Queen's Slime
  {
    recipe_id: "queens_slime",
    inputs: [
      { tag: "forge:ingots/cobalt", count: 1 },
      { tag: "forge:ingots/gold", count: 1 },
      { tag: "forge:slimeballs/magma", count: 1 },
    ],
    output: "tconstruct:queens_slime_ingot",
    output_count: 2,
    energy: 12000,
    experience: 0.4,
    heated: "superheated",
    eio: true,
    create: false,
    thermal: true,
  },
  // Manyullyn
  {
    recipe_id: "manyullyn",
    inputs: [
      { tag: "forge:ingots/cobalt", count: 3 },
      { tag: "forge:ingots/netherite_scrap", count: 1 },
    ],
    output: "tconstruct:manyullyn_ingot",
    output_count: 4,
    energy: 18000,
    experience: 0.6,
    heated: "superheated",
    eio: true,
    create: false,
    thermal: true,
  },
  // Netherite
  {
    recipe_id: "netherite",
    inputs: [
      { tag: "forge:ingots/gold", count: 4 },
      { tag: "forge:ingots/netherite_scrap", count: 4 },
    ],
    output: "minecraft:netherite_ingot",
    output_count: 1,
    energy: 800,
    experience: 0.2,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: false,
  },
  // Gaia Spirit
  {
    recipe_id: "gaia_ingot",
    inputs: [
      { tag: "forge:ingots/terrasteel", count: 1 },
      { item: "mythicbotany:alfsteel_ingot", count: 1 },
      { item: "botania:life_essence", count: 2 },
    ],
    output: "botania:gaia_ingot",
    output_count: 1,
    energy: 16000,
    experience: 0.8,
    heated: "superheated",
    eio: true,
    create: true,
    thermal: true,
  },
];

ServerEvents.recipes((event) => {
  alloying_recipes.forEach((recipe) => {
    const { recipe_id, inputs, output, output_count, energy, experience, heated } = recipe;

    if (recipe.thermal) {
      thermalSmelterRecipe(event, inputs, output, output_count, energy, recipe_id);
    }

    if (recipe.create) {
      createMixingRecipe(event, inputs, [{ item: output, count: output_count }], heated, recipe_id);
    }

    if (recipe.eio) {
      enderioAlloySmeltingRecipe(event, inputs, output, output_count, energy, experience, recipe_id);
    }
  });
});

ServerEvents.recipes((event) => {
  botaniaInfusionRecipe(event, {
    ingredients: ["botania:life_essence", "botania:terrasteel_ingot", "mythicbotany:alfsteel_ingot"],
    output: "botania:gaia_ingot",
    manapool: 2,
    type: "infuser",
    fromColor: 0xedfdfd,
    toColor: 0xff0000,
  });

  event.shapeless("9x ftb:gaia_nugget", ["botania:gaia_ingot"]).id("ftb:botania/gaia_ingot_to_nuggets");
  event.shapeless("botania:gaia_ingot", ["9x ftb:gaia_nugget"]).id("ftb:botania/gaia_nuggets_to_ingot");

  event
    .custom({
      type: "enderio:alloy_smelting",
      energy: 2000,
      experience: 0.3,
      inputs: [
        { count: 2, ingredient: { item: "quark:yellow_blossom_hedge" } },
        { count: 1, ingredient: { tag: "forge:gems/quartz" } },
      ],
      result: { count: 1, item: "botania:quartz_sunny" },
    })
    .id("ftb:enderio/alloy_smelting/botania/sunny_quartz");

  event.replaceInput({ id: "mythicbotany:mana_infuser" }, "mythicbotany:asgard_rune", "mythicbotany:midgard_rune");

  event.custom({
    type: "mythicbotany:rune_ritual",
    center: { item: "ftb:fragment_asgard" },
    group: "rune_rituals",
    inputs: [
      { item: "botania:rune_air" },
      { item: "botania:rune_air" },
      { item: "botania:rune_autumn" },
      { item: "botania:rune_autumn" },
      { item: "botania:rune_pride" },
      { item: "botania:rune_pride" },
    ],
    mana: 1000000,
    outputs: [{ item: "mythicbotany:asgard_rune" }, { item: "ftb:fragment_asgard" }],
    runes: [
      { consume: false, rune: { item: "ftb:fragment_helheim" }, x: 0, z: -2 },
      { consume: false, rune: { item: "ftb:fragment_jotunheim" }, x: 2, z: -1 },
      { consume: false, rune: { item: "ftb:fragment_niflheim" }, x: 2, z: 1 },
      { consume: false, rune: { item: "ftb:fragment_muspelheim" }, x: 0, z: 2 },
      { consume: false, rune: { item: "ftb:fragment_midgard" }, x: -2, z: 1 },
      { consume: false, rune: { item: "ftb:fragment_alfheim" }, x: -2, z: -1 },
    ],
    ticks: 400,
  });

  //#region Botania Rune Fusion Recipes
  const manaDust = { tag: "botania:mana_dusts" };
  const manaSteel = { tag: "botania:manasteel_ingots" };
  const manaDiamond = { tag: "botania:mana_diamond_gems" };

  const botaniaRuneFusionRecipes = [
    // Mana
    {
      id: "mana",
      ingredients: [manaSteel, manaSteel, manaSteel, manaSteel, manaSteel, { item: "botania:mana_pearl" }],
      result: { item: "botania:rune_mana" },
    },
    // #region Elementals
    {
      id: "air",
      ingredients: [
        manaDust,
        manaSteel,
        { tag: "minecraft:wool_carpets" },
        { item: "minecraft:feather" },
        { item: "minecraft:string" },
      ],
      result: { item: "botania:rune_air", count: 2 },
    },
    {
      id: "water",
      ingredients: [
        manaDust,
        manaSteel,
        { item: "minecraft:bone_meal" },
        { item: "minecraft:sugar_cane" },
        { item: "minecraft:fishing_rod" },
      ],
      result: { item: "botania:rune_water", count: 2 },
    },
    {
      id: "earth_brown",
      ingredients: [
        manaDust,
        manaSteel,
        { item: "minecraft:stone" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:brown_mushroom" },
      ],
      result: { item: "botania:rune_earth", count: 2 },
    },
    {
      id: "earth_red",
      ingredients: [
        manaDust,
        manaSteel,
        { item: "minecraft:stone" },
        { item: "minecraft:coal_block" },
        { item: "minecraft:red_mushroom" },
      ],
      result: { item: "botania:rune_earth", count: 2 },
    },
    {
      id: "fire",
      ingredients: [
        manaDust,
        manaSteel,
        { item: "minecraft:nether_brick" },
        { item: "minecraft:gunpowder" },
        { item: "minecraft:nether_wart" },
      ],
      result: { item: "botania:rune_fire", count: 2 },
    },
    // #endregion
    // #region Seasonals
    {
      id: "spring",
      ingredients: [
        { item: "botania:rune_water", consume: false },
        { item: "botania:rune_fire", consume: false },
        { tag: "minecraft:saplings" },
        { tag: "minecraft:saplings" },
        { tag: "minecraft:saplings" },
        { item: "minecraft:wheat" },
      ],
      result: { item: "botania:rune_spring" },
    },
    {
      id: "summer",
      ingredients: [
        { item: "botania:rune_earth", consume: false },
        { item: "botania:rune_air", consume: false },
        { tag: "minecraft:sand" },
        { tag: "minecraft:sand" },
        { item: "minecraft:slime_ball" },
        { item: "minecraft:melon_slice" },
      ],
      result: { item: "botania:rune_summer" },
    },
    {
      id: "autumn",
      ingredients: [
        { item: "botania:rune_fire", consume: false },
        { item: "botania:rune_air", consume: false },
        { tag: "minecraft:leaves" },
        { tag: "minecraft:leaves" },
        { tag: "minecraft:leaves" },
        { item: "minecraft:spider_eye" },
      ],
      result: { item: "botania:rune_autumn" },
    },
    {
      id: "winter",
      ingredients: [
        { item: "botania:rune_water", consume: false },
        { item: "botania:rune_earth", consume: false },
        { item: "minecraft:snow_block" },
        { item: "minecraft:snow_block" },
        { tag: "minecraft:wool" },
        { item: "minecraft:cake" },
      ],
      result: { item: "botania:rune_winter" },
    },
    // #endregion
    // #region Sins
    {
      id: "lust",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_summer", consume: false },
        { item: "botania:rune_air", consume: false },
      ],
      result: { item: "botania:rune_lust" },
    },
    {
      id: "gluttony",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_winter", consume: false },
        { item: "botania:rune_fire", consume: false },
      ],
      result: { item: "botania:rune_gluttony" },
    },
    {
      id: "greed",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_spring", consume: false },
        { item: "botania:rune_water", consume: false },
      ],
      result: { item: "botania:rune_greed" },
    },
    {
      id: "sloth",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_autumn", consume: false },
        { item: "botania:rune_air", consume: false },
      ],
      result: { item: "botania:rune_sloth" },
    },
    {
      id: "wrath",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_winter", consume: false },
        { item: "botania:rune_earth", consume: false },
      ],
      result: { item: "botania:rune_wrath" },
    },
    {
      id: "envy",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_winter", consume: false },
        { item: "botania:rune_water", consume: false },
      ],
      result: { item: "botania:rune_envy" },
    },
    {
      id: "pride",
      ingredients: [
        manaDiamond,
        manaDiamond,
        { item: "botania:rune_summer", consume: false },
        { item: "botania:rune_fire", consume: false },
      ],
      result: { item: "botania:rune_pride" },
    },
    // #endregion
    // #region Realms
    {
      id: "helheim",
      ingredients: [
        { tag: "forge:ingots/gold" },
        { item: "botania:rune_fire", consume: false },
        { item: "botania:rune_autumn", consume: false },
        { item: "botania:rune_envy", consume: false },
        { tag: "forge:heads" },
      ],
      result: { item: "mythicbotany:helheim_rune" },
    },
    {
      id: "jotunheim",
      ingredients: [
        { tag: "forge:ingots/brick" },
        { item: "botania:rune_earth", consume: false },
        { item: "botania:rune_autumn", consume: false },
        { item: "botania:rune_gluttony", consume: false },
        { item: "minecraft:blackstone" },
      ],
      result: { item: "mythicbotany:joetunheim_rune" },
    },
    {
      id: "midgard",
      ingredients: [
        manaSteel,
        { item: "botania:rune_earth", consume: false },
        { item: "botania:rune_spring", consume: false },
        { item: "botania:rune_greed", consume: false },
        { item: "minecraft:grass_block" },
      ],
      result: { item: "mythicbotany:midgard_rune" },
    },
    {
      id: "niflheim",
      ingredients: [
        { tag: "forge:ingots/iron" },
        { item: "botania:rune_water", consume: false },
        { item: "botania:rune_winter", consume: false },
        { item: "botania:rune_wrath", consume: false },
        { item: "minecraft:blue_ice" },
      ],
      result: { item: "mythicbotany:niflheim_rune" },
    },
    {
      id: "muspelheim",
      ingredients: [
        { tag: "forge:ingots/nether_brick" },
        { item: "botania:rune_fire", consume: false },
        { item: "botania:rune_summer", consume: false },
        { item: "botania:rune_wrath", consume: false },
        { item: "minecraft:magma_block" },
      ],
      result: { item: "mythicbotany:muspelheim_rune" },
    },
    {
      id: "nidavellir",
      ingredients: [
        { tag: "forge:ingots/copper" },
        { item: "botania:rune_earth", consume: false },
        { item: "botania:rune_winter", consume: false },
        { item: "botania:rune_sloth", consume: false },
        { item: "minecraft:iron_block" },
      ],
      result: { item: "mythicbotany:nidavellir_rune" },
    },
    {
      id: "alfheim",
      ingredients: [
        { tag: "botania:elementium_ingots" },
        { item: "botania:rune_air", consume: false },
        { item: "botania:rune_summer", consume: false },
        { item: "botania:rune_lust", consume: false },
        { tag: "minecraft:leaves" },
      ],
      result: { item: "mythicbotany:alfheim_rune" },
    },
    {
      id: "vanaheim",
      ingredients: [
        { tag: "botania:terrasteel_ingots" },
        { item: "botania:rune_earth", consume: false },
        { item: "botania:rune_spring", consume: false },
        { item: "botania:rune_pride", consume: false },
        { item: "botania:alfheim_portal" },
      ],
      result: { item: "mythicbotany:vanaheim_rune" },
    },
    // #endregion
  ];

  botaniaRuneFusionRecipes.forEach((recipe) => {
    event
      .custom({
        type: "draconicevolution:fusion_crafting",
        catalyst: { item: "botania:livingrock" },
        ingredients: recipe.ingredients,
        result: recipe.result,
        tier: "WYVERN",
        total_energy: 1000000,
      })
      .id(`ftb:botania/draconic_fusion/rune_${recipe.id}`);
  });
  //#endregion

  event
    .custom({
      type: "botania:runic_altar",
      ingredients: [
        { item: "botania:rune_greed" },
        { item: "botania:rune_mana" },
        { item: "projectexpansion:magenta_matter" },
        { tag: "ftb:dragons_blood" },
        { tag: "ftb:dragons_blood" },
        { tag: "ftb:dragons_blood" },
      ],
      mana: 500000,
      output: { item: "ftb:primordial_dragons_blood" },
    })
    .id("ftb:botania/runic_altar/primordial_dragons_blood");

  event
    .custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: { item: "actuallyadditions:empowered_diamatine_crystal" },
      ingredients: [
        { tag: "ftb:any_dragonsteel" },
        { item: "projectexpansion:magenta_matter" },
        { tag: "ftb:dragons_blood" },
        { tag: "ftb:dragons_blood" },
        { tag: "ftb:dragons_blood" },
      ],
      result: { item: "ftb:primordial_dragons_blood" },
      tier: "WYVERN",
      total_energy: 2000000,
    })
    .id("ftb:draconic_fusion/primordial_dragons_blood");
});

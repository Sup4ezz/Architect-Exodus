const $$aspectedSpirits = [
  "sacred",
  "wicked",
  "arcane",
  "eldritch",
  "aerial",
  "aqueous",
  "earthen",
  "infernal",
];

ServerEvents.recipes((event) => {
  $$aspectedSpirits.forEach(function (aspect) {
    event
      .custom({
        type: "minecraft:smelting",
        ingredient: {
          item: "malum:" + aspect + "_spirit",
        },
        result: {
          item: "ftb:unrefined_spirit",
        },
        experience: 0.1,
        cookingtime: 160,
      })
      .id("ftb:smelting/unrefined_spirit_" + aspect);
  });

  malumSpiritInfusion(event, {
    input: "ftbragnarok:dead_heart",
    output: "ftbpc:action_pad",
    spirits: [
      ["infernal", 2],
      ["earthen", 2],
      ["aqueous", 2],
      ["aerial", 2],
      ["wicked", 2],
      ["arcane", 2],
      ["sacred", 2],
    ],
  });

  event.shapeless("explorerscompass:explorerscompass", ["minecraft:compass", "3x tconstruct:amethyst_bronze_ingot"]);

  event
    .custom({
      type: "thermal_extra:component_assembly",
      ingredients: [
        { item: "ftbmaterials:lumium_ingot", count: 1 },
        { item: "powah:steel_energized", count: 1 },
        { item: "thermal_extra:shellite_ingot", count: 1 },
        { item: "malum:hallowed_gold_ingot", count: 1 },
        { item: "enderio:vibrant_alloy_ingot", count: 1 },
        { fluid: "thermal_extra:lubricant", amount: 1000 },
      ],
      result: { item: "ftb:orichalcum_ingot" },
      energy: 16000,
    })
    .id("ftb:component_assembler/orichalcum_ingot");

  event
    .custom({
      type: "embers:mixing",
      inputs: [
        { amount: 90, fluid: "embers:molten_dawnstone" },
        { amount: 360, fluid: "tconstruct:molten_enderium" },
        { amount: 900, fluid: "thermal:redstone" },
      ],
      output: {
        amount: 90,
        tag: "forge:molten_muspelloy",
      },
    })
    .id("ftb:embers/mixing/muspelloy");

  event
    .custom({
      type: "embers:stamping",
      fluid: { amount: 90, fluid: "ftb:molten_muspelloy" },
      output: { item: "ftb:muspelloy_ingot" },
      stamp: { item: "embers:ingot_stamp" },
    })
    .id("ftb:embers/stamping/muspelloy_ingot");

  event
    .custom({
      type: "embers:alchemy",
      aspects: [{ tag: "embers:aspectus/gaia" }],
      tablet: {
        item: "mythicbotany:gjallar_horn_empty",
      },
      inputs: [
        { item: "mythicbotany:helheim_rune" },
        { item: "mythicbotany:niflheim_rune" },
        { item: "mythicbotany:joetunheim_rune" },
        { item: "mythicbotany:muspelheim_rune" },
        { item: "mythicbotany:midgard_rune" },
      ],
      output: {
        count: 1,
        item: "gateways:gate_pearl",
        nbt: "{gateway:'gateways:prelude_to_ragnarok'}",
      },
    })
    .id("ftb:embers/alchemy/gateway/prelude_to_ragnarok");

  botaniaInfusionRecipe(event, {
    ingredients: [
      "ftb:null_crystal",
      "ftb:ice_crystal",
      "ftb:fire_crystal",
      "ftb:nature_crystal",
      "ftb:arcane_crystal",
      "ftb:celestial_crystal",
      "ftb:vampiric_crystal",
    ],
    output: "ftb:reconsecrated_aesir_stone",
    manapool: 1,
    type: "infuser",
    fromColor: 0xFFFF00,
    toColor: 0x4B0082,
  });

  const draconicEmberTypes = [
    { type: "ice", ingredient: "iceandfire:ice_dragon_blood" },
    { type: "lightning", ingredient: "iceandfire:lightning_dragon_blood" },
    { type: "fire", ingredient: "iceandfire:fire_dragon_blood" },
  ];
  draconicEmberTypes.forEach((type) => {
    event
      .custom({
        type: "iceandfire:dragonforge",
        dragon_type: type.type,
        cook_time: 1000,
      input: {
        tag: "forge:ingots/dragonsteel",
      },
      blood: {
        item: type.ingredient,
      },
      result: {
        item: "ftb:draconic_ember",
      },
    })
    .id(`ftb:dragonforge/${type.type}/draconic_ember`);
  });

  event
    .custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: { item: "mythicbotany:asgard_rune" },
      ingredients: [
        { item: "bhc:soul_heart_crystal" },
        { item: "ftb:draconic_ember" },
        { item: "draconicevolution:awakened_core" },
        { item: "bloodmagic:etherealslate" },
        { item: "naturesaura:end_flower" },
        { item: "ars_elemental:mark_of_mastery" },
        { item: "occultism:storage_stabilizer_tier4" },
        { item: "ftb:orichalcum_ingot" },
        { item: "ftb:muspelloy_ingot" },
        { item: "botania:gaia_ingot" },
        { item: "apotheosis:mythic_material" },
        { item: "ftb:purified_spirit" },
      ],
      result: { item: "ftb:aesirium" },
      tier: "DRACONIC",
      total_energy: 1000000000,
    })
    .id("ftb:draconicevolution/fusion/aesirium");

  event
    .custom({
      type: "create:deploying",
      ingredients: [
        {
          item: "xycraft_machines:incomplete_processor",
        },
        {
          item: "ftb:printed_dwarven_processor",
        },
      ],
      results: [
        {
          item: "ftb:dwarven_processor",
        },
      ],
    }).id(`ftb:deploying/dwarven_processor`);
});

ServerEvents.recipes((event) => {
  event
    .shaped("embers:tinker_hammer", ["III", "ISI", " S "], {
      I: "#forge:ingots/iron",
      S: "minecraft:stick",
    })
    .id("ftb:embers/tinker_hammer");

  event
    .shaped("embers:mechanical_core", ["IBI", "LCL", "ILI"], {
      I: "#forge:ingots/iron",
      B: "embers:caminite_bricks",
      L: "#forge:ingots/lead",
      C: "minecraft:cauldron",
    })
    .id("ftb:embers/mechanical_core");

  event
    .custom({
      type: "embers:stamping",
      input: Ingredient.of(`#forge:silicon`),
      stamp: Ingredient.none,
      output: Item.of(`ae2:printed_silicon`),
    })
    .id(`ftb:embers/stamping/ae2/printed_silicon`);

  event
    .custom({
      type: "embers:stamping",
      input: Ingredient.of(`#forge:silicon`),
      fluid: {
        amount: 100,
        tag: "forge:redstone",
      },
      stamp: Ingredient.none,
      output: Item.of(`xycraft_machines:incomplete_processor`),
    })
    .id(`ftb:embers/stamping/ae2/incomplete_processor_v1`);

  event
    .custom({
      type: "embers:stamping",
      input: Ingredient.of(`ae2:printed_silicon`),
      fluid: {
        amount: 50,
        tag: "forge:redstone",
      },
      stamp: Ingredient.none,
      output: Item.of(`xycraft_machines:incomplete_processor`),
    })
    .id(`ftb:embers/stamping/ae2/incomplete_processor_v2`);

  let ae2_processors = [
    {
      input: "#forge:ingots/gold",
      fluid: Fluid.of("tconstruct:molten_gold", 90).toJson(),
      type: "logic_processor",
    },
    {
      input: "#forge:gems/diamond",
      fluid: Fluid.of("tconstruct:molten_diamond", 100).toJson(),
      type: "engineering_processor",
    },
    {
      input: "#forge:gems/certus_quartz",
      fluid: Fluid.of("tconstruct:molten_quartz", 100).toJson(),
      type: "calculation_processor",
    },
    {
      input: "#forge:ingots/sky_steel",
      fluid: Fluid.of("ftb:molten_sky_steel", 90).toJson(),
      type: "accumulation_processor",
      namespace: "megacells",
    },
    { 
      input: "#forge:ingots/dawnstone",
      fluid: Fluid.of("embers:molten_dawnstone", 90).toJson(),
      type: "dwarven_processor",
      namespace: "ftb"
    },
  ];
  ae2_processors.forEach((processor) => {
    const modName = processor.namespace || "ae2";
    event
      .custom({
        type: "embers:stamping",
        input: Ingredient.of(processor.input),
        stamp: Ingredient.none,
        output: Item.of(`${modName}:printed_${processor.type}`),
      })
      .id(`ftb:embers/stamping/${modName}/printed_${processor.type}`);

    event
      .custom({
        type: "embers:stamping",
        fluid: processor.fluid,
        input: Ingredient.of(`xycraft_machines:incomplete_processor`),
        stamp: Ingredient.none,
        output: Item.of(`${modName}:${processor.type}`),
      })
      .id(`ftb:embers/stamping/${modName}/${processor.type}`);
  });

  //Dragonsteel with Embers ===

  //Fire
  event
    .custom({
      type: "embers:mixing",
      inputs: [
        {
          amount: 1,
          tag: "forge:dragonblood/fire",
        },
        {
          amount: 1,
          fluid: "thermal_extra:dragonsteel",
        },
      ],
      output: {
        amount: 2,
        tag: "forge:molten_dragonsteel_fire",
      },
    })
    .id("ftb:embers/mixing/dragonblood/fire");

  event
    .custom({
      type: "embers:stamping",
      fluid: {
        amount: 90,
        tag: "forge:molten_dragonsteel_fire",
      },
      output: {
        tag: "forge:ingots/dragonsteel_fire",
      },
      stamp: {
        item: "embers:ingot_stamp",
      },
    })
    .id("ftb:embers/stamping/dragonblood/fire");

  //Ice
  event
    .custom({
      type: "embers:mixing",
      inputs: [
        {
          amount: 1,
          tag: "forge:dragonblood/ice",
        },
        {
          amount: 1,
          fluid: "thermal_extra:dragonsteel",
        },
      ],
      output: {
        amount: 2,
        tag: "forge:molten_dragonsteel_ice",
      },
    })
    .id("ftb:embers/mixing/dragonblood/ice");

  event
    .custom({
      type: "embers:stamping",
      fluid: {
        amount: 90,
        tag: "forge:molten_dragonsteel_ice",
      },
      output: {
        tag: "forge:ingots/dragonsteel_ice",
      },
      stamp: {
        item: "embers:ingot_stamp",
      },
    })
    .id("ftb:embers/stamping/dragonblood/ice");

  //Lightning
  event
    .custom({
      type: "embers:mixing",
      inputs: [
        {
          amount: 1,
          tag: "forge:dragonblood/lightning",
        },
        {
          amount: 1,
          fluid: "thermal_extra:dragonsteel",
        },
      ],
      output: {
        amount: 2,
        tag: "forge:molten_dragonsteel_lightning",
      },
    })
    .id("ftb:embers/mixing/dragonblood/lightning");

  event
    .custom({
      type: "embers:stamping",
      fluid: {
        amount: 90,
        tag: "forge:molten_dragonsteel_lightning",
      },
      output: {
        tag: "forge:ingots/dragonsteel_lightning",
      },
      stamp: {
        item: "embers:ingot_stamp",
      },
    })
    .id("ftb:embers/stamping/dragonblood/lightning");

  ["copper", "gold", "iron", "lead", "nickel", "silver", "tin"].forEach(function (metal) {
    event
      .custom({
        type: "embers:melting",
        input: {
          tag: "geore:geore_shards/" + metal,
        },
        output: {
          amount: 90,
          tag: "forge:molten_" + metal,
        },
      })
      .id("ftb:embers/melting/geore_" + metal + "_shard");
  });
});

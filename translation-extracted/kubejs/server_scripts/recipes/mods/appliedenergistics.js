ServerEvents.recipes((event) => {
  // #region Processors
  event
    .custom({
      type: "thermal:press",
      ingredients: [Ingredient.of(`#forge:silicon`)],
      result: [Item.of(`ae2:printed_silicon`)],
      energy: 6400,
    })
    .id(`ftb:thermal_extras/component_assembler/ae2/printed_silicon`);

  event
    .custom({
      type: "enderio:slicing",
      energy: 20000,
      inputs: [
        Ingredient.none,
        { tag: "forge:silicon" },
        Ingredient.none,
        { tag: "forge:silicon" },
        Ingredient.none,
        { tag: "forge:silicon" },
      ],
      output: Item.of(`ae2:printed_silicon`, 3),
    })
    .id(`ftb:enderio/slicing/ae2/printed_silicon`);

  let ae2_processors = [
    { input: "forge:ingots/gold", type: "logic_processor" },
    { input: "forge:gems/diamond", type: "engineering_processor" },
    { input: "forge:gems/certus_quartz", type: "calculation_processor" },
    { input: "forge:ingots/sky_steel", type: "accumulation_processor", namespace: "megacells" },
    { input: "forge:ingots/dawnstone", type: "dwarven_processor", namespace: "ftb" },
  ];

  ae2_processors.forEach((processor) => {
    const modName = processor.namespace || "ae2";
    event
      .custom({
        type: "thermal_extra:component_assembly",
        ingredients: [Ingredient.of(`#${processor.input}`)],
        result: [Item.of(`${modName}:printed_${processor.type}`)],
        energy: 6400,
      })
      .id(`ftb:thermal_extras/component_assembler/${modName}/printed_${processor.type}`);

    event
      .custom({
        type: "thermal_extra:component_assembly",
        ingredients: [
          Ingredient.of(`${modName}:printed_${processor.type}`),
          Ingredient.of(`ae2:printed_silicon`),
          {
            fluid_tag: "forge:redstone",
            amount: 50,
          },
        ],
        result: [Item.of(`${modName}:${processor.type}`)],
        energy: 6400,
      })
      .id(`ftb:thermal_extras/component_assembler/${modName}/${processor.type}`);

    event
      .custom({
        type: "enderio:slicing",
        energy: 20000,
        inputs: [
          Ingredient.none,
          { tag: processor.input },
          Ingredient.none,
          { tag: processor.input },
          Ingredient.none,
          { tag: processor.input },
        ],
        output: Item.of(`${modName}:printed_${processor.type}`, 3),
      })
      .id(`ftb:enderio/slicing/${modName}/printed_${processor.type}`);

    event
      .custom({
        type: "enderio:slicing",
        energy: 20000,
        inputs: [
          Ingredient.of(`xycraft_machines:incomplete_processor`),
          Ingredient.of(`${modName}:printed_${processor.type}`),
          Ingredient.of(`xycraft_machines:incomplete_processor`),
          Ingredient.of(`${modName}:printed_${processor.type}`),
          Ingredient.of(`xycraft_machines:incomplete_processor`),
          Ingredient.of(`${modName}:printed_${processor.type}`),
        ],
        output: Item.of(`${modName}:${processor.type}`, 3),
      })
      .id(`ftb:enderio/slicing/${modName}/${processor.type}`);
  });

  event.custom({
    type: "expatternprovider:circuit_cutter",
    fluid_input: {
      amount: 100,
      ingredient: {
        fluid: "minecraft:water",
      },
    },
    item_input: {
      amount: 1,
      ingredient: {
        tag: "forge:storage_blocks/dawnstone",
      },
    },
    output: {
      count: 9,
      item: "ftb:printed_dwarven_processor",
    },
  });
  // #endregion

  // #region Others
  thermalPulverizerRecipe(
    event,
    "ae2:all_certus_quartz",
    [["ae2:certus_quartz_dust", 1]],
    "ftb:ae2/pulverizer/certus_quartz"
  );

  enderIOBasicSagMillingRecipe(
    event,
    "ae2:all_certus_quartz",
    [
      ["ae2:certus_quartz_dust", 1],
      ["ae2:certus_quartz_dust", 1, 0.33],
    ],
    "ftb:enderio/sag_mill/ores/certus_quartz",
    true
  );

  thermalPulverizerRecipe(event, "forge:gems/fluix", [["ae2:fluix_dust", 1]], "ftb:ae2/pulverizer/fluix");

  enderIOBasicSagMillingRecipe(
    event,
    "forge:gems/fluix",
    [
      ["ae2:fluix_dust", 1],
      ["ae2:fluix_dust", 1, 0.25],
    ],
    "ftb:enderio/sag_mill/ores/fluix",
    true
  );

  thermalPulverizerRecipe(event, "ae2:sky_stone_blocks", [["ae2:sky_dust", 1]], "ftb:ae2/pulverizer/sky_stone");

  enderIOBasicSagMillingRecipe(
    event,
    "ae2:sky_stone_blocks",
    [
      ["ae2:sky_dust", 1],
      ["ae2:sky_dust", 1, 0.25],
    ],
    "ftb:enderio/sag_mill/ores/sky_stone",
    true
  );

  event
    .custom({
      type: "powah:energizing",
      ingredients: [{ item: "minecraft:book" }],
      energy: 1000,
      result: {
        item: "ae2:guide",
      },
    })
    .id("ftb:ae2/guide");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [{ item: "minecraft:compass" }],
      energy: 5000,
      result: {
        item: "ae2:meteorite_compass",
      },
    })
    .id("ftb:ae2/meteorite_compass");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        {
          item: "ae2:certus_quartz_crystal",
        },
      ],
      energy: 10000,
      result: {
        item: "ae2:charged_certus_quartz_crystal",
      },
    })
    .id("ftb:ae2/charged_certus_quartz_crystal");

  event
    .custom({
      type: "lychee:lightning_channeling",
      item_in: [
        {
          item: "ae2:certus_quartz_crystal",
        },
      ],
      post: [
        {
          type: "drop_item",
          item: "ae2:charged_certus_quartz_crystal",
        },
      ],
    })
    .id("ftb:lychee/lightning_channeling/ae2/energize_certus_quartz_crystal");

  event.shapeless("3x ae2:sky_dust", "3x mysticalagriculture:sky_stone_essence").id("ftb:ae2/sky_stone_dust");

  event.shapeless("ae2:ender_dust", ["minecraft:ender_pearl", "thermal:earth_charge"]).id("ftb:ae2/ender_dust");

  event
    .shaped("ae2things:disk_housing", ["GRG", "R R", "SAS"], {
      G: "ae2:quartz_glass",
      R: "minecraft:redstone",
      S: "thermal:signalum_ingot",
      A: "#forge:gems/amethyst",
    })
    .id("ftb:ae2_things/disk_housing");

  event
    .shaped("ae2things:disk_drive_1k", ["GRG", "RCR", "SAS"], {
      G: "ae2:quartz_glass",
      R: "minecraft:redstone",
      C: "ae2:cell_component_1k",
      S: "thermal:signalum_ingot",
      A: "#forge:gems/amethyst",
    })
    .id("ftb:ae2_things/disk_drive_1k");

  event
    .shaped("ae2things:disk_drive_4k", ["GRG", "RCR", "SAS"], {
      G: "ae2:quartz_glass",
      R: "minecraft:redstone",
      C: "ae2:cell_component_4k",
      S: "thermal:signalum_ingot",
      A: "#forge:gems/amethyst",
    })
    .id("ftb:ae2_things/disk_drive_4k");

  event
    .shaped("ae2things:disk_drive_16k", ["GRG", "RCR", "SAS"], {
      G: "ae2:quartz_glass",
      R: "minecraft:redstone",
      C: "ae2:cell_component_16k",
      S: "thermal:signalum_ingot",
      A: "#forge:gems/amethyst",
    })
    .id("ftb:ae2_things/disk_drive_16k");

  event
    .shaped("ae2things:disk_drive_64k", ["GRG", "RCR", "SAS"], {
      G: "ae2:quartz_glass",
      R: "minecraft:redstone",
      C: "ae2:cell_component_64k",
      S: "thermal:signalum_ingot",
      A: "#forge:gems/amethyst",
    })
    .id("ftb:ae2_things/disk_drive_64k");

  event
    .shaped("ae2things:disk_drive_256k", ["GRG", "RCR", "SAS"], {
      G: "ae2:quartz_glass",
      R: "minecraft:redstone",
      C: "ae2:cell_component_256k",
      S: "thermal:signalum_ingot",
      A: "#forge:gems/amethyst",
    })
    .id("ftb:ae2_things/disk_drive_256k");

  //#endregion
});

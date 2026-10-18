ServerEvents.recipes((event) => {
  event
    .shaped("powah:thermoelectric_plate", ["BRB", "RCR", "BRB"], {
      B: "#ftb:thermal_material",
      R: "minecraft:redstone",
      C: "powah:capacitor_basic_tiny",
    })
    .id("ftb:powah/thermoelectric_plate");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "minecraft:iron_ingot" },
        { item: "malum:cthonic_gold_fragment" }
      ],
      energy: 10000,
      result: {
        item: "powah:steel_energized",
        count: 2,
      },
    }).id("ftb:energizing/steel_energized_alt");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "minecraft:iron_block" },
        { item: "minecraft:gold_block" }
      ],
      energy: 90000,
      result: {
        item: "powah:energized_steel_block",
        count: 2,
      },
    }).id("ftb:energizing/energized_steel_block");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "actuallyadditions:empowered_diamatine_crystal" }
      ],
      energy: 250000,
      result: {
        item: "powah:crystal_niotic",
      },
    }).id("ftb:energizing/crystal_niotic");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "actuallyadditions:empowered_diamatine_crystal_block" }
      ],
      energy: 2000000,
      result: {
        item: "powah:niotic_crystal_block",
      },
    }).id("ftb:energizing/niotic_crystal_block");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "actuallyadditions:empowered_emeradic_crystal" }
      ],
      energy: 750000,
      result: {
        item: "powah:crystal_spirited",
      },
    }).id("ftb:energizing/crystal_spirited");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "actuallyadditions:empowered_emeradic_crystal_block" }
      ],
      energy: 6000000,
      result: {
        item: "powah:spirited_crystal_block",
      },
    }).id("ftb:energizing/spirited_crystal_block");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        { item: "botania:blaze_block" }
      ],
      energy: 720000,
      result: {
        item: "powah:blazing_crystal_block",
      },
    }).id("ftb:energizing/blazing_crystal_block");
});

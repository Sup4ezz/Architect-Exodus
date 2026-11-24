ServerEvents.recipes((event) => {
  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "malum:arcane_spirit",
      },
      output: "ars_nouveau:source_gem",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/source_gem");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "minecraft:sweet_berries",
      },
      output: "ars_nouveau:bombegranate_pod",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/bombegranate_pod");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "minecraft:melon_slice",
      },
      output: "ars_nouveau:frostaya_pod",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/frostaya_pod");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "minecraft:glow_berries",
      },
      output: "ars_nouveau:mendosteen_pod",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/mendosteen_pod");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "minecraft:apple",
      },
      output: "ars_nouveau:bastion_pod",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/bastion_pod");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "minecraft:golden_carrot",
      },
      output: "ars_elemental:flashpine_pod",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/flashpine_pod");

  malumSpiritInfusion(event, {
    input: "minecraft:lectern",
    output: "ars_nouveau:storage_lectern",
    spirits: [
      ["earthen", 4],
      ["eldritch", 2],
      ["sacred"],
    ],
    extraItems: [["ars_nouveau:source_gem", 2]],
  });

  event
    .shaped("ars_nouveau:imbuement_chamber", ["PGP", "P P", "PGP"], {
      P: "malum:runewood_planks",
      G: "#ftb:any_gold_nugget",
    })
    .id("ftb:ars_nouveau/imbuement_chamber");

  event
    .shaped("ars_nouveau:scribes_table", ["SSS", "G G", "L L"], {
      S: "ars_nouveau:archwood_slab",
      G: "#ftb:any_gold_nugget",
      L: "#forge:logs/archwood",
    })
    .id("ftb:ars_nouveau/scribes_table");

  malumSpiritInfusion(event, {
    input: "minecraft:book",
    output: "ars_nouveau:bookwyrm_charm",
    spirits: [
      ["aerial", 4],
      ["sacred", 2],
    ],
    extraItems: [
      ["ars_nouveau:source_gem", 3],
      ["malum:runic_sapball", 3],
    ],
  });

  malumSpiritInfusion(event, {
    input: "minecraft:stick",
    output: "ars_nouveau:dominion_wand",
    spirits: [
      ["earthen", 2],
      ["sacred"],
    ],
    extraItems: ["malum:cthonic_gold", ["ars_nouveau:source_gem", 2]],
  });

  event
    .custom({
      type: "ars_nouveau:crush",
      input: {
        tag: "forge:storage_blocks/amethyst",
      },
      output: [
        {
          chance: 1.0,
          count: 4,
          item: "thermal_extra:amethyst_dust",
        },
        {
          chance: 0.5,
          count: 1,
          item: "thermal_extra:amethyst_dust",
        },
        {
          chance: 0.25,
          count: 1,
          item: "thermal_extra:amethyst_dust",
        },
      ],
      skip_block_place: false,
    })
    .id("ftb:crushing/amethyst_block_to_dust");

  event
    .custom({
      type: "ars_nouveau:crush",
      input: {
        item: "minecraft:blackstone",
      },
      output: [
        {
          chance: 1.0,
          count: 1,
          item: "ftb:blackstone_dust",
        },
        {
          chance: 0.25,
          count: 1,
          item: "ftb:blackstone_dust",
        },
      ],
      skip_block_place: true,
    })
    .id("ftb:crushing/blackstone_to_dust");

  event
    .custom({
      type: "ars_nouveau:crush",
      input: {
        item: "minecraft:stone",
      },
      output: [
        {
          chance: 1.0,
          count: 1,
          item: "minecraft:gravel",
        },
      ],
      skip_block_place: false,
    })
    .id("ftb:crushing/stone_to_gravel");

  event
    .custom({
      type: "ars_nouveau:crush",
      input: {
        item: "minecraft:deepslate",
      },
      output: [
        {
          chance: 1.0,
          count: 1,
          item: "ftb:deepslate_dust",
        },
        {
          chance: 0.25,
          count: 1,
          item: "ftb:deepslate_dust",
        },
      ],
      skip_block_place: true,
    })
    .id("ftb:crushing/deepslate_to_dust");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        tag: "forge:storage_blocks/source_gem",
      },
      output: "ars_nouveau:earth_essence",
      pedestalItems: [
        {
          item: {
            tag: "forge:storage_blocks/iron",
          },
        },
        {
          item: {
            tag: "forge:seeds",
          },
        },
        {
          item: {
            item: "farmersdelight:rich_soil",
          },
        },
      ],
      source: 500,
    })
    .id("ftb:imbuement/earth_essence");

  malumSpiritInfusion(event, {
    input: "minecraft:writable_book",
    output: "ars_nouveau:glyph_crush",
    spirits: [
      ["earthen", 4],
    ],
    extraItems: ["ars_nouveau:earth_essence", "minecraft:piston", "minecraft:grindstone"],
    useNbtFromInput: false,
  });

  event
    .shaped("ars_nouveau:arcane_pedestal", ["SGS", "FSF", "FSF"], {
      S: "ars_nouveau:sourcestone",
      G: "ars_nouveau:source_gem",
      F: "#ftb:any_gold_nugget",
    })
    .id("ftb:ars_nouveau/arcane_pedestal");

  malumSpiritInfusion(event, {
    input: "minecraft:oak_sapling",
    output: "ars_nouveau:green_archwood_sapling",
    spirits: [["earthen"]],
    extraItems: ["mysticalagriculture:nature_essence"],
  });

  malumSpiritInfusion(event, {
    input: "minecraft:oak_sapling",
    output: "ars_nouveau:red_archwood_sapling",
    spirits: [["infernal"]],
    extraItems: ["mysticalagriculture:fire_essence"],
  });

  malumSpiritInfusion(event, {
    input: "minecraft:oak_sapling",
    output: "ars_elemental:yellow_archwood_sapling",
    spirits: [["aerial"]],
    extraItems: ["mysticalagriculture:air_essence"],
  });

  malumSpiritInfusion(event, {
    input: "minecraft:oak_sapling",
    output: "ars_nouveau:blue_archwood_sapling",
    spirits: [["aqueous"]],
    extraItems: ["mysticalagriculture:water_essence"],
  });

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        tag: "ars_nouveau:magic_saplings",
      },
      output: "ars_nouveau:purple_archwood_sapling",
      pedestalItems: [],
      source: 500,
    })
    .id("ftb:imbuement/purple_archwood_sapling");

  event
    .custom({
      type: "bloodmagic:array",
      baseinput: {
        item: "minecraft:sweet_berries",
      },
      addedinput: {
        item: "ars_nouveau:source_gem",
      },
      output: {
        item: "ars_nouveau:sourceberry_bush",
      },
      texture: "bloodmagic:textures/models/alchemyarrays/growthsigil.png",
    })
    .id("ftb:ars_nouveau/sourceberry_bush");

  event
    .shaped("ars_nouveau:dowsing_rod", ["   ", " G ", "P P"], {
      G: "#ftb:any_gold_ingot",
      P: "#forge:planks/archwood",
    })
    .id("ftb:ars_nouveau/dowsing_rod_alt");

  event
    .shaped("georenouveau:gold_geore_dowsing_rod", [" G ", "GDG", " G "], {
      G: "#ftb:any_gold",
      D: "ars_nouveau:dowsing_rod",
    })
    .id("ftb:ars_nouveau/gold_dowsing_rod_alt");

  event
    .shapeless("ars_nouveau:apprentice_spell_book", [
      "ars_nouveau:novice_spell_book",
      "#forge:obsidian",
      "3x minecraft:diamond",
      "2x minecraft:quartz_block",
      "2x minecraft:gold_ingot",
    ])
    .modifyResult((inventory, itemstack) => {
      let novice = inventory.find("ars_nouveau:novice_spell_book");
      if (!novice || !novice.nbt) return itemstack;
      return itemstack.withNBT(novice.nbt);
    })
    .id("ftb:ars_nouveau/apprentice_spell_book_upgrade");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "minecraft:gold_ingot",
      },
      output: "ftbmaterials:silver_ingot",
      pedestalItems: [
        { item: { item: "ars_nouveau:manipulation_essence" } },
        { item: { item: "occultism:datura" } },
        { item: { item: "occultism:spirit_attuned_gem" } },
      ],
      source: 2000,
    })
    .id("ftb:ars_nouveau/imbuement_silver_transmute");

  event
    .shaped("6x ars_nouveau:sourcestone_slab", ["###"], {
      "#": "ars_nouveau:sourcestone",
    })
    .id("ftb:ars_nouveau/sourcestone_slab");

  event
    .shaped("4x ars_nouveau:sourcestone_stairs", ["#  ", "## ", "###"], {
      "#": "ars_nouveau:sourcestone",
    })
    .id("ftb:ars_nouveau/sourcestone_stairs");

  event
    .stonecutting("2x ars_nouveau:sourcestone_slab", "ars_nouveau:sourcestone")
    .id("ftb:ars_nouveau/sourcestone_slab_stonecutting");

  event
    .stonecutting("ars_nouveau:sourcestone_stairs", "ars_nouveau:sourcestone")
    .id("ftb:ars_nouveau/sourcestone_stairs_stonecutting");
});

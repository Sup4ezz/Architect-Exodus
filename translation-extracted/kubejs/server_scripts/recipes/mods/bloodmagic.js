ServerEvents.recipes((event) => {
  event
    .shaped("bloodmagic:altar", ["S S", "SFS", "NNN"], {
      S: "minecraft:polished_blackstone",
      F: "minecraft:cauldron",
      N: "malum:soul_stained_steel_nugget",
    })
    .id("ftb:blood_magic/altar");

  event
    .shaped("bloodmagic:sacrificialdagger", ["GGN", " NG", "I G"], {
      G: "#forge:glass",
      N: "#ftb:any_gold_nugget",
      I: "#forge:ingots/iron",
    })
    .id("ftb:blood_magic/dagger");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 1000,
      consumptionRate: 5,
      drainRate: 5,
      input: {
        tag: "ftb:progression_stone",
      },
      output: {
        item: "bloodmagic:blankslate",
      },
      upgradeLevel: 0,
    })
    .id("ftb:blood_magic/altar/slate");

  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: ["SES", "SFS", "SSS"],
    key: {
      S: { tag: "ftb:progression_stone" },
      F: { type: "bloodmagic:bloodorb", orb_tier: 1 },
      E: { item: "bloodmagic:blankslate" }
    },
    result: { item: "bloodmagic:blankrune" }
  }).id("ftb:blood_magic/blankrune");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 2000,
      consumptionRate: 5,
      drainRate: 1,
      input: {
        item: "malum:blazing_quartz",
      },
      output: {
        item: "bloodmagic:weakbloodorb",
      },
      upgradeLevel: 0,
    })
    .id("ftb:blood_magic/altar/weak_blood_orb");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 1000,
      consumptionRate: 5,
      drainRate: 5,
      input: {
        item: "minecraft:bone_block",
      },
      output: {
        item: "malum:block_of_grim_talc",
      },
      upgradeLevel: 0,
    })
    .id("ftb:blood_magic/altar/block_of_grim_talc");

  event
    .shaped("bloodmagic:alchemytable", ["BBB", "PIP", "DSD"], {
      B: "#ftb:progression_stone",
      P: "#minecraft:planks",
      I: "minecraft:iron_ingot",
      D: "ftb:blackstone_dust",
      S: "bloodmagic:blankslate",
    })
    .id("ftb:blood_magic/alchemytable");

  bloodMagicSoulforge(event, {
    input: ["malum:arcane_spirit", "minecraft:black_dye", "iceandfire:dread_shard", "malum:runic_sapball"],
    output: "irons_spellbooks:common_ink",
    drain: [1.0, 1.0],
  });

  bloodMagicSoulforge(event, {
    input: [
      "bloodmagic:soulgempetty",
      "malum:soul_stained_steel_ingot",
      "#forge:storage_blocks/redstone",
      "#forge:storage_blocks/amethyst_bronze",
    ],
    output: "bloodmagic:soulgemlesser",
    drain: [20.0, 60.0],
  });

  event
    .custom({
      type: "bloodmagic:arc",
      input: {
        item: "bloodmagic:weakbloodorb",
        count: 1,
      },
      tool: {
        tag: "bloodmagic:arc/cuttingfluid",
      },
      addedoutput: [],
      output: {
        item: "malum:blazing_quartz",
      },
    })
    .id("ftb:blood_magic/arc/weakbloodorb");

  // ARC Reversion - Weak Blood Orb returns Blazing Quartz
  event
    .custom({
      type: "bloodmagic:arc",
      input: {
        item: "bloodmagic:weakbloodorb",
        count: 1,
      },
      tool: {
        tag: "bloodmagic:arc/reverter",
      },
      consumeingredient: true,
      mainoutputchance: 0.0,
      addedoutput: [],
      output: {
        item: "malum:blazing_quartz",
      },
    })
    .id("ftb:blood_magic/arc/reversion/weak_blood_orb");

  bloodMagicSoulforge(event, {
    input: ["malum:blazing_quartz", "#forge:dusts/redstone", "#forge:glass", "#forge:ingots/copper"],
    output: "bloodmagic:soulgempetty",
    drain: [1.0, 1.0],
  });

  event
    .shaped("bloodmagic:incensealtar", ["s s", "shs", "coc"], {
      s: "#forge:stone",
      h: "#minecraft:coals",
      c: "#forge:cobblestone",
      o: "bloodmagic:weakbloodorb",
    })
    .id("ftb:blood_magic/incense_altar");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 25000,
      consumptionRate: 20,
      drainRate: 20,
      input: {
        item: "occultism:iesnium_ingot",
      },
      output: {
        item: "bloodmagic:magicianbloodorb",
      },
      upgradeLevel: 2,
    })
    .id("ftb:bloodmagic/altar/magicianbloodorb");

  event
    .custom({
      type: "bloodmagic:arc",
      consumeingredient: true,
      input: {
        item: "bloodmagic:magicianbloodorb",
      },
      inputsize: 1,
      mainoutputchance: 0.0,
      output: {
        item: "occultism:iesnium_ingot",
      },
      tool: {
        tag: "bloodmagic:arc/reverter",
      },
    })
    .id("ftb:bloodmagic/arc/reversion/magician_blood_orb");

  event
    .custom({
      type: "bloodmagic:array",
      baseinput: {
        tag: "forge:dyes/black",
      },
      addedinput: {
        item: "minecraft:bone_meal",
      },
      output: {
        item: "minecraft:ink_sac",
      },
      texture: "bloodmagic:textures/models/alchemyarrays/basearray.png",
    })
    .id("ftb:bloodmagic/array/ink_sac");

  let mutandisArrays = [
    { base: "minecraft:vine",            output: "enchanted:spanish_moss",      texture: "growthsigil" },
    { base: "minecraft:oak_sapling",     output: "enchanted:alder_sapling",     texture: "growthsigil" },
    { base: "minecraft:dandelion",       output: "enchanted:glint_weed",        texture: "lightsigil" },
    { base: "minecraft:acacia_sapling",  output: "enchanted:hawthorn_sapling",  texture: "growthsigil" },
    { base: "quark:moss_paste",          output: "enchanted:ember_moss",        texture: "lavasigil" },
    { base: "minecraft:jungle_sapling",  output: "enchanted:rowan_sapling",     texture: "growthsigil" },
  ];

  mutandisArrays.forEach((r) => {
    let outputPath = r.output.split(":")[1];
    event
      .custom({
        type: "bloodmagic:array",
        baseinput: { item: r.base },
        addedinput: { item: "enchanted:mutandis" },
        output: { item: r.output },
        texture: "bloodmagic:textures/models/alchemyarrays/" + r.texture + ".png",
      })
      .id("ftb:bloodmagic/array/" + outputPath);
  });
  
  event.custom({
    type: "bloodmagic:alchemytable",
    input: [
      { tag: "forge:dusts/glowstone" },
      { tag: "forge:dusts/redstone" },
      { tag: "forge:gunpowder" },
      { item: "malum:cthonic_gold_fragment" }
    ],
    output: { item: "bloodmagic:reagentbinding" },
    syphon: 1000,
    ticks: 200,
    upgradeLevel: 3
  }).id("ftb:alchemytable/reagent_binding");

  event.custom({
    type: "bloodmagic:altar",
    altarSyphon: 2000,
    consumptionRate: 20,
    drainRate: 10,
    input: { tag: "forge:ingots/netherite" },
    output: { item: "bloodmagic:duskscribetool", nbt: "{Damage:0}" },
    upgradeLevel: 3
  }).id("ftb:altar/dusk_tool");
});

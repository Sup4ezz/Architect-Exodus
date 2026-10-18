ServerEvents.recipes((event) => {
  //Fixing Malum's Rock Bricks Walls
  event.replaceInput(
    { id: "malum:runic_tainted_rock_bricks_wall" },
    "malum:tainted_rock_bricks",
    "malum:runic_tainted_rock_bricks"
  );
  event.replaceInput(
    { id: "malum:runic_tainted_rock_tiles_wall" },
    "malum:tainted_rock_tiles",
    "malum:runic_tainted_rock_tiles"
  );
  event.replaceInput(
    { id: "malum:runic_small_tainted_rock_bricks_wall" },
    "malum:small_tainted_rock_bricks",
    "malum:runic_small_tainted_rock_bricks"
  );

  //Fixing Malum's Twisted Rock Bricks Walls
  event.replaceInput(
    { id: "malum:runic_twisted_rock_bricks_wall" },
    "malum:twisted_rock_bricks",
    "malum:runic_twisted_rock_bricks"
  );
  event.replaceInput(
    { id: "malum:runic_twisted_rock_tiles_wall" },
    "malum:twisted_rock_tiles",
    "malum:runic_twisted_rock_tiles"
  );
  event.replaceInput(
    { id: "malum:runic_small_twisted_rock_bricks_wall" },
    "malum:small_twisted_rock_bricks",
    "malum:runic_small_twisted_rock_bricks"
  );

  event.replaceInput({ id: "malum:spirit_altar" }, "#forge:ingots/gold", "malum:runic_sap");

  //Fixing Runewood Trapdoor Recipe
  event.replaceInput(
    { id: "malum:solid_runewood_trapdoor" },
    "#malum:runewood_planks",
    "#ftb:non_boarded_runewood_planks"
  );
  //Fixing Soulwood Trapdoor Recipe
  event.replaceInput(
    { id: "malum:solid_soulwood_trapdoor" },
    "#malum:soulwood_planks",
    "#ftb:non_boarded_soulwood_planks"
  );

  malumSpiritInfusion(event, {
    input: "minecraft:ender_pearl",
    output: { item: "gateways:gate_pearl", nbt: "{gateway:'gateways:elemental_heart'}" },
    spirits: [
      ["infernal", 2],
      ["earthen", 2],
      ["aqueous", 2],
      ["aerial", 2],
    ],
    extraItems: [["minecraft:quartz", 2]],
  });

  malumSpiritInfusion(event, {
    input: "minecraft:ender_pearl",
    output: "farmingforblockheads:market",
    spirits: [["earthen", 2]],
    extraItems: ["minecraft:iron_trapdoor", ["#minecraft:logs", 2], ["mysticalagriculture:dirt_essence", 2]],
  });

  malumSpiritInfusion(event, {
    input: "ftbmaterials:charcoal_dust",
    output: "malum:hex_ash",
    spirits: ["arcane"],
    extraItems: ["thermal_extra:amethyst_dust"],
  });
  malumSpiritInfusion(event, {
    input: "supplementaries:ash",
    output: "malum:hex_ash",
    spirits: ["arcane"],
    extraItems: ["thermal_extra:amethyst_dust"],
    id: "ftb:spirit_infusion/hex_ash_from_supp_ash",
  });

  malumSpiritInfusion(event, {
    input: "ftbmaterials:charcoal_block",
    output: "malum:block_of_hex_ash",
    spirits: [["arcane", 8]],
    extraItems: [["thermal_extra:amethyst_dust", 8]],
    id: "ftb:spirit_infusion/block_of_hex_ash",
  });
  malumSpiritInfusion(event, {
    input: ["supplementaries:ash", 8],
    output: "malum:block_of_hex_ash",
    spirits: [["arcane", 8]],
    extraItems: [["thermal_extra:amethyst_dust", 8]],
    id: "ftb:spirit_infusion/block_of_hex_ash_from_supp_ash",
  });

  malumSpiritInfusion(event, {
    input: "scraps:junk",
    output: ["minecraft:string", 4],
    spirits: ["aerial"],
  });

  malumSpiritInfusion(event, {
    input: "malum:alchemical_impetus",
    output: ["malum:cthonic_gold", 2],
    spirits: [
      ["arcane", 2],
      ["eldritch", 2],
    ],
    useNbtFromInput: false,
  });

  malumSpiritInfusion(event, {
    input: ["malum:alchemical_calx", 4],
    output: "malum:alchemical_impetus",
    spirits: [
      ["earthen", 4],
      ["arcane", 2],
    ],
    extraItems: ["malum:hex_ash", ["malum:processed_soulstone", 3]],
  });

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 1000,
      consumptionRate: 10,
      drainRate: 10,
      input: {
        item: "ftb:unrefined_spirit",
      },
      output: {
        item: "malum:sacred_spirit",
      },
      upgradeLevel: 0,
    })
    .id("ftb:blood_magic/altar/malum_sacred_spirit");

  event
    .shaped("minecraft:skeleton_skull", ["BBB", "BGB", "BBB"], {
      B: "#forge:bones",
      G: "malum:block_of_grim_talc",
    })
    .id("ftb:malum/skeleton_skull");

  malumSpiritInfusion(event, {
    input: "#ftb:progression_furnace",
    output: "malum:spirit_crucible",
    spirits: [
      ["infernal", 12],
      ["earthen", 4],
    ],
    extraItems: [
      ["malum:hex_ash", 2],
      ["malum:tainted_rock", 8],
      ["malum:twisted_rock", 8],
    ],
  });

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/multi_use/plate",
      },
      cast_consumed: false,
      conditions: [
        {
          type: "forge:mod_loaded",
          modid: "malum",
        },
      ],
      cooling_time: 65,
      fluid: {
        amount: 45,
        tag: "forge:molten_soul_stained_steel",
      },
      result: {
        item: "malum:soul_stained_steel_plating",
      },
    })
    .id("ftb:tconstruct/casting_table/soul_stained_steel/gold_cast");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        tag: "tconstruct:casts/single_use/plate",
      },
      cast_consumed: true,
      conditions: [
        {
          type: "forge:mod_loaded",
          modid: "malum",
        },
      ],
      cooling_time: 65,
      fluid: {
        amount: 45,
        tag: "forge:molten_soul_stained_steel",
      },
      result: {
        item: "malum:soul_stained_steel_plating",
      },
    })
    .id("ftb:tconstruct/casting_table/soul_stained_steel/sand_cast");

  // Soulstained Steel Armors
  const armors = ["helmet", "chestplate", "leggings", "boots"];
  armors.forEach((armor) => {
    malumSpiritInfusion(event, {
      input: `minecraft:iron_${armor}`,
      output: `malum:soul_stained_steel_${armor}`,
      spirits: [
        ["earthen", 16],
        ["wicked", 8],
        ["arcane", 2],
      ],
      extraItems: [["malum:soul_stained_steel_plating", 4], ["malum:processed_soulstone", 4], ["malum:twisted_rock"]],
    });
  });

  malumSpiritInfusion(event, {
    input: "minecraft:iron_block",
    output: "malum:block_of_soul_stained_steel",
    spirits: [
      ["wicked", 27],
      ["earthen", 9],
      ["arcane", 9],
    ],
    extraItems: [["malum:processed_soulstone", 36]],
  });

  event
    .shaped("malum:spirit_pouch", [" S ", "FGF", " F "], {
      S: "minecraft:string",
      F: "malum:spirit_fabric",
      G: "tconstruct:soul_glass",
    })
    .id("ftb:malum/spirit_pouch");

  malumSpiritInfusion(event, {
    input: ["minecraft:clay", 2],
    output: "malum:block_of_alchemical_calx",
    spirits: [
      ["earthen", 4],
      ["aqueous", 4],
      ["arcane"],
    ],
  });

  event.shapeless("malum:runic_sapball", "malum:runic_sap").id("ftb:malum/runic_sapball");

  malumSpiritInfusion(event, {
    input: "minecraft:gold_block",
    output: "malum:block_of_hallowed_gold",
    spirits: [
      ["sacred", 18],
      ["arcane", 9],
    ],
    extraItems: [["minecraft:quartz_block", 9]],
  });

  malumSpiritInfusion(event, {
    input: "malum:stellar_mechanism",
    output: "ftb:purified_spirit",
    spirits: [
      ["infernal", 32],
      ["earthen", 32],
      ["aqueous", 32],
      ["aerial", 32],
      ["arcane", 32],
      ["eldritch", 32],
      ["wicked", 32],
      ["sacred", 32],
    ],
    extraItems: ["malum:malignant_pewter_ingot", "malum:iridescent_ether", "malum:cursed_sapball", "malum:warp_flux"],
    id: "ftb:spirit_infusion/purified_spirit",
  });

  event.shapeless("malum:block_of_living_flesh", "9x malum:living_flesh").id("ftb:malum/block_of_living_flesh");
  event.shapeless("9x malum:living_flesh", "malum:block_of_living_flesh").id("ftb:malum/living_flesh_from_block");

  event.replaceInput({ id: "malum:gilded_belt" }, "malum:hallowed_gold_ingot", "#ftb:any_gold_ingot");

  event.replaceInput({ id: "malum:gilded_ring" }, "malum:hallowed_gold_ingot", "#ftb:any_gold_ingot");

  //Making Inactive Twisted Runestones.
  event
    .custom({
      type: "lychee:block_crushing",
      landing_block: "minecraft:obsidian",
      item_in: [
        {
          item: "malum:twisted_rock",
        },
        {
          item: "malum:infernal_spirit",
        },
        {
          item: "malum:eldritch_spirit",
        },
        {
          item: "malum:soul_stained_steel_plating",
        },
      ],
      post: [
        {
          type: "drop_item",
          item: "ftb:inactive_twisted_runestone",
        },
      ],
    })
    .id("ftb:lychee/block_crushing/inactive_twisted_runestone");

  //Activating Twisted Runestones
  event
    .custom({
      type: "occultism:spirit_fire",
      ingredient: {
        item: "ftb:inactive_twisted_runestone",
      },
      result: {
        item: "ftb:twisted_runestone",
      },
    })
    .id("ftb:occultism/spirit_fire/twisted_runestone");

  //Shadow Steel from Dimensional Ingot via void-tossing
  event
    .custom({
      type: "malum:favor_of_the_void",
      input: {
        item: "enderio:dark_steel_ingot",
      },
      output: {
        item: "create:shadow_steel",
      },
    })
    .id("ftb:malum/favor_of_the_void/create/shadow_steel");
});

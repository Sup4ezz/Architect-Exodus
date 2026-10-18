ServerEvents.recipes((event) => {
  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [{ tag: "forge:storage_blocks/amethyst" }],
      result: [
        {
          count: 4,
          item: "thermal_extra:amethyst_dust",
        },
      ],
      tool: { tag: "forge:tools/hammers" },
    })
    .id("ftb:amethyst/amethyst_dust_from_block");

  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [{ tag: "forge:gems/amethyst" }],
      result: [
        {
          count: 1,
          item: "thermal_extra:amethyst_dust",
        },
      ],
      tool: { tag: "forge:tools/hammers" },
    })
    .id("ftb:amethyst/amethyst_dust_from_gem");

  enderioAlloySmeltingRecipe(
    event,
    [
      { tag: "forge:glass", count: 4 },
      { tag: "forge:ingots/iron", count: 4 },
      { tag: "forge:gears/tin", count: 1 },
    ],
    "thermal:machine_frame",
    1,
    16000,
    0.85,
    "machine_frame"
  );

  thermalSmelterRecipe(
    event,
    [
      { tag: "forge:glass", count: 4 },
      { tag: "forge:ingots/iron", count: 4 },
      { tag: "forge:gears/tin", count: 1 },
    ],
    "thermal:machine_frame",
    1,
    16000,
    "machine_frame"
  );

  event
    .shaped("thermal:device_xp_condenser", ["SCS", "GIG", "SRS"], {
      S: { tag: "forge:ingots/silver" },
      C: { tag: "forge:gears/copper" },
      G: { tag: "forge:glass" },
      I: { item: "thermal:xp_crystal" },
      R: { item: "thermal:redstone_servo" },
    })
    .id("ftb:thermal/device_xp_condenser");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cast: { item: "thermal:obsidian_glass" },
      cast_consumed: true,
      cooling_time: 200,
      fluid: { amount: 90, tag: "forge:molten_dark_steel" },
      result: "thermal:machine_frame",
    })
    .id("ftb:tconstruct/casting_basin/machine_frame");

  event
    .shapeless("thermal:obsidian_glass", [
      "#forge:obsidian",
      "#forge:gems/quartz",
      "#forge:sand",
      "mysticalagriculture:fire_essence",
    ])
    .id("ftb:thermal/obsidian_glass");

  event.replaceInput({ id: "thermal:enderium_dust_2" }, "#forge:dusts/lead", "#embers:aspectus/lead");

  event.replaceInput({ id: "thermal:press_gear_die" }, "#forge:gears/diamond", "#forge:gems/diamond");

  event
    .custom({
      type: "thermal:press",
      energy: 3000,
      ingredients: [{ tag: "forge:ingots/signalum" }],
      result: [{ item: "thermal:signalum_plate" }],
    })
    .id("ftb:thermal/press/signalum_plate");

  event
    .custom({
      type: "thermal:crucible",
      energy: 20000,
      ingredient: { tag: "forge:ender_pearls" },
      result: [{ amount: 250, fluid: "tconstruct:molten_ender" }],
    })
    .id("ftb:thermal/crucible/molten_ender_from_pearl");

  event
    .custom({
      type: "thermal:chiller",
      energy: 20000,
      ingredients: [
        { fluid: "tconstruct:molten_ender", amount: 250 },
        { item: "thermal:chiller_ball_cast" },
      ],
      result: [{ item: "minecraft:ender_pearl", count: 1 }],
    })
    .id("ftb:thermal/chiller/molten_ender_to_pearl");

  event
    .shaped("thermal_extra:component_assembly", [" P ", "GMG", "SRS"], {
      P: { item: "thermal_extra:paraffin_wax" },
      G: { tag: "thermal:glass/hardened" },
      M: { item: "thermal:machine_frame" },
      S: { tag: "forge:gears/twinite" },
      R: { item: "thermal:rf_coil" },
    })
    .id("ftb:thermal_extra/component_assembly");

  //Adding Recipe Parity between Rosin and Arcane Rosin.
  event
    .custom({
      type: "thermal:refinery",
      ingredient: {
        fluid: "ftb:arcane_resin",
        amount: 200,
      },
      result: [
        {
          fluid: "thermal:tree_oil",
          amount: 100,
        },
        {
          item: "ftb:arcane_rosin",
          chance: 0.5,
        },
      ],
      energy: 4000,
      experience: 0.2,
    })
    .id("ftb:thermal/refinery/arcane_resin");

  event
    .custom({
      type: "thermal:chiller",
      energy: 30000,
      ingredients: [
        {
          amount: 1000,
          fluid: "ftb:arcane_resin",
        },
      ],
      result: [
        {
          item: "thermal_extra:sticky_ball",
        },
      ],
    })
    .id("ftb:thermal/chiller/arcane_sticky_ball");

  event
    .custom({
      type: "thermal_extra:advanced_refinery",
      energy: 6000,
      experience: 0.3,
      ingredients: [
        {
          amount: 200,
          fluid: "ftb:arcane_resin",
        },
      ],
      result: [
        {
          chance: 0.5,
          item: "ftb:arcane_rosin",
        },
        {
          amount: 150,
          fluid: "thermal:tree_oil",
        },
      ],
    })
    .id("ftb:thermal_extra/advanced_refinery/arcane_resin");

  event
    .custom({
      type: "enderio:sag_milling",
      energy: 2400,
      input: {
        tag: "minecraft:soul_fire_base_blocks",
      },
      outputs: [
        {
          chance: 1.0,
          item: {
            count: 1,
            item: "thermal_extra:soul_sand_dust",
          },
          optional: false,
        },
      ],
    })
    .id("ftb:enderio/sag_milling/soul_sand_dust");

  event
    .custom({
      type: "occultism:crushing",
      crushing_time: 160,
      ignore_crushing_multiplier: false,
      ingredient: {
        tag: "minecraft:soul_fire_base_blocks",
      },
      result: {
        item: "thermal_extra:soul_sand_dust",
        count: 1,
      },
    })
    .id("ftb:occultism/crushing/soul_sand_dust");

  event
    .custom({
      type: "ars_nouveau:crush",
      input: {
        tag: "minecraft:soul_fire_base_blocks",
      },
      output: [
        {
          chance: 1.0,
          count: 1,
          item: "thermal_extra:soul_sand_dust",
        },
      ],
      skip_block_place: true,
    })
    .id("ftb:ars_nouveau/crushing/soul_sand_to_dust");

  enderIOBasicSagMillingRecipe(
    event,
    "forge:ingots/soul_infused",
    [["thermal_extra:soul_infused_dust", 1]],
    "ftb:enderio/sag_mill/thermal_extra/soul_infused_dust",
    false
  );

  event
    .custom({
      type: "enderio:tank",
      fluid: {
        amount: 10,
        fluid: "thermal:crude_oil",
      },
      input: {
        item: "thermal:oil_sand",
      },
      is_emptying: true,
      output: {
        item: "minecraft:sand",
      },
    })
    .id("ftb:enderio/tank/emptying/thermal_oil_sand");

  event
    .custom({
      type: "enderio:tank",
      fluid: {
        amount: 25,
        fluid: "thermal:crude_oil",
      },
      input: {
        item: "thermal:oil_red_sand",
      },
      is_emptying: true,
      output: {
        item: "minecraft:red_sand",
      },
    })
    .id("ftb:enderio/tank/emptying/thermal_oil_red_sand");

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        { item: "minecraft:redstone_block" },
        { item: "minecraft:redstone_block" },
        { item: "minecraft:redstone_block" },
        { item: "minecraft:redstone_block" },
      ],
      block_in: {
        blocks: ["thermal:crude_oil_fluid"],
      },
      post: [
        {
          type: "place",
          block: "thermal_extra:flux_infused_oil",
        },
      ],
    })
    .id("ftb:lychee/item_inside/thermal_extra/flux_infused_oil");

  event
    .custom({
      type: "xycraft_machines:extractor",
      adjacent: [],
      catalyst: {
        fluid_type: "thermal_extra:flux_infused_oil",
        predicate_type: "xycraft_core:fluid_type_rule",
      },
      fluid_result: {
        Amount: 10,
        FluidName: "thermal_extra:lubricant",
      },
      target: {
        block: "actuallyadditions:empowered_restonia_crystal_block",
        predicate_type: "xycraft_core:block_rule",
      },
      ticks: 60,
      valid_directions: ["up"],
    })
    .id("ftb:xycraft/extractor/lubricant_from_flux_infused_oil");

    //Ice Charges with Cryotheum.
    event.custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "minecraft:fire_charge",
        },
        {
          item: "minecraft:fire_charge",
        },
        {
          item: "minecraft:fire_charge",
        }
      ],
      block_in: {
        blocks: ["ftb:cryotheum"],
      },
      post: [
        {
          type: "place",
          block: "*",
        },
        {
          type: "drop_item",
          count: 3,
          item: "thermal:ice_charge",
        }
      ],
    }).id("ftb:lychee/item_inside/thermal/ice_charge");
   
    //Lightning Charge with Powah.
    event.custom({
      type: "powah:energizing",
      ingredients: [
        { item: "minecraft:fire_charge" },
        { item: "minecraft:fire_charge" },
        { item: "minecraft:fire_charge" }
      ],
      energy: 500000,
      result: {
        item: "thermal:lightning_charge", count: 3
      }
    }).id("ftb:powah/energizing/thermal/lightning_charge");

    event.custom({
      type: "thermal:crystallizer",
      energy: 10000,
      ingredients: [
        { item: "draconicevolution:draconium_dust" },
        { amount: 1000, fluid: "thermal:glowstone" }
      ],
      result: [
        { item: "thermal_extra:ancient_dust" }
      ]
    }).id("ftb:thermal/crystallizer/ancient_dust");

    event.custom({
      type: "thermal_extra:component_assembly",
      ingredients: [
        { tag: "ftb:any_dragonsteel" },
        { item: "naturesaura:sky_ingot" },
        { item: "mysticalagriculture:imperium_essence" },
        { amount: 1000, fluid: "thermal:glowstone" }
      ],
      result: [
        { item: "create:refined_radiance", count: 4 }
      ],
      energy: 32000
    }).id("ftb:thermal_extras/component_assembler/refined_radiance");
});

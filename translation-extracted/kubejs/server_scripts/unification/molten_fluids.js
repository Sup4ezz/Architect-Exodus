const metals = [
  {
    fluid: "ftb:molten_black_steel",
    ingot: "cataclysm:black_steel_ingot",
    nugget: "cataclysm:black_steel_nugget",
    block: "cataclysm:black_steel_block",
    meltingTemp: 700,
    material: "ftb:blacksteel",
  },
  {
    fluid: "ftb:molten_dark_steel",
    ingot: "enderio:dark_steel_ingot",
    nugget: "enderio:dark_steel_nugget",
    block: "enderio:dark_steel_block",
    meltingTemp: 1000,
  },
  {
    fluid: "ftb:molten_sky_steel",
    ingot: "megacells:sky_steel_ingot",
    block: "megacells:sky_steel_block",
    meltingTemp: 1400,
  },
  {
    fluid: "ftb:molten_wrought_iron",
    ingot: "ftb:wrought_iron_ingot",
    nugget: "ftb:wrought_iron_nugget",
    block: "ftb:wrought_iron_block",
    meltingTemp: 1000,
    extras: [
      { item: "mowziesmobs:wrought_axe", amount: 360 },
      { item: "mowziesmobs:wrought_helmet", amount: 450 },
    ],
  },
  {
    fluid: "ftb:molten_iesnium",
    ingot: "occultism:iesnium_ingot",
    nugget: "occultism:iesnium_nugget",
    block: "occultism:iesnium_block",
    ore: "occultism:iesnium_ore",
    meltingTemp: 1400,
    material: "ftb:iesnium",
  },
  {
    fluid: "thermal_extra:dragonsteel",
    ingot: "thermal_extra:dragonsteel_ingot",
    nugget: "thermal_extra:dragonsteel_nugget",
    block: "thermal_extra:dragonsteel_block",
    meltingTemp: 1000,
    extras: [
      { item: "thermal_extra:dragonsteel_dust", amount: 90 },
    ],
  },
  {
    fluid: "ftb:molten_gaia_essence",
    ingot: "botania:gaia_ingot",
    nugget: "ftb:gaia_nugget",
    meltingTemp: 1600,
  },
  {
    fluid: "forge:molten_enderium",
    meltingTemp: 1350,
    material: "ftb:enderium",
  },
];

ServerEvents.recipes((event) => {
  metals.forEach((metal) => {
    const name      = metal.fluid.split(":")[1].replace("molten_", "");
    const fluidTag  = "forge:" + metal.fluid.split(":")[1];
    const amount    = { ingot: 90, nugget: 10, block: 810, ore: 120 };
    const cooling   = { ingot: 65, nugget: 22, block: 194 };

    // Integration is handled by type of item
    if (metal.ingot) {
      // Embers Melting - ingot
      event
        .custom({
          type: "embers:melting",
          input: { item: metal.ingot },
          output: { amount: amount.ingot, fluid: metal.fluid },
        })
        .id(`ftb:embers/melting/${name}_ingot`);

      // Embers Stamping - ingot
      event
        .custom({
          type: "embers:stamping",
          fluid: { amount: amount.ingot, fluid: metal.fluid },
          output: { item: metal.ingot },
          stamp: { item: "embers:ingot_stamp" },
        })
        .id(`ftb:embers/stamping/${name}_ingot`);

      // TCon Melting - ingot
      event
        .custom({
          type: "tconstruct:melting",
          ingredient: [{ item: metal.ingot }],
          result: { amount: amount.ingot, fluid: metal.fluid },
          temperature: metal.meltingTemp,
          time: cooling.ingot,
        })
        .id(`ftb:tconstruct/melting/${name}_ingot`);

      // TCon Casting - ingot (gold reusable)
      event
        .custom({
          type: "tconstruct:casting_table",
          cast: { tag: "tconstruct:casts/multi_use/ingot" },
          cooling_time: cooling.ingot,
          fluid: { amount: amount.ingot, tag: fluidTag },
          result: metal.ingot,
        })
        .id(`ftb:tconstruct/casting_table/${name}_ingot`);
    }

    if (metal.block) {
      // Embers Melting - block
      event
        .custom({
          type: "embers:melting",
          input: { item: metal.block },
          output: { amount: amount.block, fluid: metal.fluid },
        })
        .id(`ftb:embers/melting/${name}_block`);

      // TCon Melting - block
      event
        .custom({
          type: "tconstruct:melting",
          ingredient: [{ item: metal.block }],
          result: { amount: amount.block, fluid: metal.fluid },
          temperature: metal.meltingTemp,
          time: cooling.block,
        })
        .id(`ftb:tconstruct/melting/${name}_block`);

      // TCon Casting — block
      event
        .custom({
          type: "tconstruct:casting_basin",
          cooling_time: cooling.block,
          fluid: { amount: amount.block, tag: fluidTag },
          result: metal.block,
        })
        .id(`ftb:tconstruct/casting_basin/${name}_block`);
    }

    if (metal.nugget) {
      // Embers Melting - nugget
      event
        .custom({
          type: "embers:melting",
          input: { item: metal.nugget },
          output: { amount: amount.nugget, fluid: metal.fluid },
        })
        .id(`ftb:embers/melting/${name}_nugget`);

      // Embers Stamping - nugget
      event
        .custom({
          type: "embers:stamping",
          fluid: { amount: amount.nugget, fluid: metal.fluid },
          output: { item: metal.nugget },
          stamp: { item: "embers:nugget_stamp" },
        })
        .id(`ftb:embers/stamping/${name}_nugget`);

      // TCon Melting - nugget
      event
        .custom({
          type: "tconstruct:melting",
          ingredient: [{ item: metal.nugget }],
          result: { amount: amount.nugget, fluid: metal.fluid },
          temperature: metal.meltingTemp,
          time: cooling.nugget,
        })
        .id(`ftb:tconstruct/melting/${name}_nugget`);

      // TCon Casting - nugget (gold reusable)
      event
        .custom({
          type: "tconstruct:casting_table",
          cast: { tag: "tconstruct:casts/multi_use/nugget" },
          cooling_time: cooling.nugget,
          fluid: { amount: amount.nugget, tag: fluidTag },
          result: metal.nugget,
        })
        .id(`ftb:tconstruct/casting_table/${name}_nugget_gold_cast`);
    }

    if (metal.ore) {
      // Embers Melting - ore
      event
        .custom({
          type: "embers:melting",
          input: { item: metal.ore },
          output: { amount: amount.ore ?? amount.ingot, fluid: metal.fluid },
        })
        .id(`ftb:embers/melting/${name}_ore`);
      
        // TCon Melting - ore
      event
        .custom({
          type: "tconstruct:melting",
          ingredient: [{ item: metal.ore }],
          result: { amount: amount.ore, fluid: metal.fluid },
          temperature: metal.meltingTemp,
          time: cooling.ingot,
        })
        .id(`ftb:tconstruct/melting/${name}_ore_to_fluid`);
    }

    if (metal.extras) {
      metal.extras.forEach((extra) => {
        // Embers Melting - extra
        event
          .custom({
            type: "embers:melting",
            input: { item: extra.item },
            output: { amount: extra.amount, fluid: metal.fluid },
          })
          .id(`ftb:embers/melting/${extra.item.split(":")[1]}`);
        // TCon Melting - extra
        event
          .custom({
            type: "tconstruct:melting",
            ingredient: [{ item: extra.item }],
            result: { amount: extra.amount, fluid: metal.fluid },
            temperature: metal.meltingTemp,
            time: cooling.ingot,
          })
          .id(`ftb:tconstruct/melting/${extra.item.split(":")[1]}`);
      });
    }

    if (metal.material) {
      event
        .custom({
          type: "tconstruct:material_fluid",
          fluid: { amount: amount.ingot, tag: fluidTag },
          output: metal.material,
          temperature: metal.meltingTemp,
        })
        .id(`ftb:tconstruct/material_fluid/${metal.material.replace(":", "_")}`);

      event
        .custom({
          type: "tconstruct:material_melting",
          input: metal.material,
          result: { amount: amount.ingot, tag: fluidTag },
          temperature: metal.meltingTemp,
        })
        .id(`ftb:tconstruct/material_melting/${metal.material.replace(":", "_")}`);
    }
  });
});

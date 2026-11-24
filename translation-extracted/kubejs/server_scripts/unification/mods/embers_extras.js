ServerEvents.recipes((event) => {
  const melts = [
    { input: { tag: "forge:gems/diamond" },       output: { amount: 100, fluid: "tconstruct:molten_diamond" },  id: "diamond" },
    { input: { tag: "forge:gems/emerald" },       output: { amount: 100, fluid: "tconstruct:molten_emerald" },  id: "emerald" },
    { input: { tag: "forge:gems/amethyst" },      output: { amount: 100, fluid: "tconstruct:molten_amethyst" }, id: "amethyst" },
    { input: { tag: "forge:gems/quartz" },        output: { amount: 100, fluid: "tconstruct:molten_quartz" },   id: "quartz" },
    { input: { tag: "forge:ender_pearls" },       output: { amount: 250, tag:   "forge:ender" },                id: "ender_pearl" },
    { input: { item: "minecraft:ender_eye" },     output: { amount: 250, tag:   "forge:ender" },                id: "ender_eye" },
    { input: { tag: "forge:obsidian" },           output: { amount: 1000, fluid:"tconstruct:molten_obsidian" }, id: "obsidian" },
    { input: { tag: "forge:dusts/glowstone" },    output: { amount: 250, tag:   "forge:glowstone" },            id: "glowstone_dust" },
    { input: { item: "minecraft:glowstone" },     output: { amount: 1000, tag:  "forge:glowstone" },            id: "glowstone_block" },
    { input: { tag: "forge:slimeball/ichor" },    output: { amount: 200, fluid: "tconstruct:ichor" },           id: "ichor_ball" },

    { input: { tag: "forge:dusts/redstone" },     output: { amount: 100, tag:   "forge:redstone" },             id: "redstone_dust" },
    { input: { tag: "forge:storage_blocks/redstone" }, output: { amount: 900, tag: "forge:redstone" },          id: "redstone_block" },

    { input: { tag: "forge:ingots/lumium" },      output: { amount:  90, tag:   "forge:molten_lumium" },        id: "lumium_ingot" },
    { input: { tag: "forge:nuggets/lumium" },     output: { amount:  10, tag:   "forge:molten_lumium" },        id: "lumium_nugget" },
    { input: { tag: "forge:storage_blocks/lumium" }, output: { amount: 810, tag:"forge:molten_lumium" },        id: "lumium_block" },

    { input: { tag: "forge:ingots/signalum" },    output: { amount:  90, tag:   "forge:molten_signalum" },      id: "signalum_ingot" },
    { input: { tag: "forge:nuggets/signalum" },   output: { amount:  10, tag:   "forge:molten_signalum" },      id: "signalum_nugget" },
    { input: { tag: "forge:storage_blocks/signalum" }, output: { amount: 810, tag:"forge:molten_signalum" },    id: "signalum_block" },

    { input: { tag: "forge:ingots/enderium" },    output: { amount:  90, tag:   "forge:molten_enderium" },      id: "enderium_ingot" },
    { input: { tag: "forge:nuggets/enderium" },   output: { amount:  10, tag:   "forge:molten_enderium" },      id: "enderium_nugget" },
    { input: { tag: "forge:storage_blocks/enderium" }, output: { amount: 810, tag:"forge:molten_enderium" },    id: "enderium_block" },
  ];

  melts.forEach((m) => {
    event
      .custom({
        type: "embers:melting",
        input: m.input,
        output: m.output,
      })
      .id("ftb:embers/melting/" + m.id);
  });
});

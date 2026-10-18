ServerEvents.recipes((event) => {
  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [{ item: "malum:cthonic_gold" }],
      result: { amount: 80, fluid: "ftb:molten_cthonic_gold" },
      temperature: 700,
      time: 54,
    })
    .id("ftb:tconstruct/melting/molten_cthonic_gold");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [{ item: "malum:cthonic_gold_fragment" }],
      result: { amount: 10, fluid: "ftb:molten_cthonic_gold" },
      temperature: 700,
      time: 7,
    })
    .id("ftb:tconstruct/melting/molten_cthonic_gold_fragment");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [{ item: "malum:block_of_cthonic_gold" }],
      result: { amount: 720, fluid: "ftb:molten_cthonic_gold" },
      temperature: 700,
      time: 486,
    })
    .id("ftb:malum/melting/molten_cthonic_gold_block");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [{ item: "malum:cthonic_gold_ore" }],
      result: { amount: 60, fluid: "ftb:molten_cthonic_gold" },
      temperature: 700,
      time: 486,
    })
    .id("ftb:malum/melting/molten_cthonic_gold_ore");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 5,
      cast: { tag: "tconstruct:casts/multi_use/nugget" },
      fluid: { amount: 10, fluid: "ftb:molten_cthonic_gold" },
      result: { item: "malum:cthonic_gold_fragment" },
    })
    .id("ftb:malum/casting_table/cthonic_gold_fragment");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 30,
      cast: { tag: "tconstruct:casts/multi_use/gem" },
      fluid: { amount: 80, fluid: "ftb:molten_cthonic_gold" },
      result: { item: "malum:cthonic_gold" },
    })
    .id("ftb:malum/casting_table/cthonic_gold");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cooling_time: 200,
      fluid: { amount: 720, fluid: "ftb:molten_cthonic_gold" },
      result: { item: "malum:block_of_cthonic_gold" },
    })
    .id("ftb:malum/casting_basin/block_of_cthonic_gold");

  event
    .custom({
      type: "embers:melting",
      input: { item: "malum:cthonic_gold" },
      output: { amount: 80, fluid: "ftb:molten_cthonic_gold" },
    })
    .id("ftb:embers/melting/cthonic_gold");

  event
    .custom({
      type: "embers:melting",
      input: { item: "malum:cthonic_gold_fragment" },
      output: { amount: 10, fluid: "ftb:molten_cthonic_gold" },
    })
    .id("ftb:embers/melting/cthonic_gold_fragment");

  event
    .custom({
      type: "embers:melting",
      input: { item: "malum:block_of_cthonic_gold" },
      output: { amount: 720, fluid: "ftb:molten_cthonic_gold" },
    })
    .id("ftb:embers/melting/cthonic_gold_block");

  event
    .custom({
      type: "embers:melting",
      input: { item: "malum:cthonic_gold_ore" },
      output: { amount: 60, fluid: "ftb:molten_cthonic_gold" },
    })
    .id("ftb:embers/melting/cthonic_gold_ore");
});

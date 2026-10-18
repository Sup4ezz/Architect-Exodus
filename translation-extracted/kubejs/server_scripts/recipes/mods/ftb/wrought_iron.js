ServerEvents.recipes((event) => {
  event
    .shaped("ftb:wrought_iron_ingot", ["NNN", "NNN", "NNN"], {
      N: "ftb:wrought_iron_nugget",
    })
    .id("ftb:wrought_iron_ingot_from_nuggets");

  event.shapeless("9x ftb:wrought_iron_nugget", ["ftb:wrought_iron_ingot"]).id("ftb:wrought_iron_nuggets_from_ingot");

  event
    .shaped("ftb:wrought_iron_block", ["III", "III", "III"], {
      I: "ftb:wrought_iron_ingot",
    })
    .id("ftb:wrought_iron_block_from_ingots");

  event.shapeless("9x ftb:wrought_iron_ingot", ["ftb:wrought_iron_block"]).id("ftb:wrought_iron_ingots_from_block");

  event
    .custom({
      type: "functionalstorage:custom_compacting",
      higher_input: {
        count: 1,
        item: "ftb:wrought_iron_block",
      },
      lower_input: {
        count: 9,
        item: "ftb:wrought_iron_ingot",
      },
    })
    .id(`ftb:functional_storage/wrought_iron_compacting_block`);

  event
    .custom({
      type: "functionalstorage:custom_compacting",
      higher_input: {
        count: 1,
        item: "ftb:wrought_iron_ingot",
      },
      lower_input: {
        count: 9,
        item: "ftb:wrought_iron_nugget",
      },
    })
    .id(`ftb:functional_storage/wrought_iron_compacting_ingot`);
});

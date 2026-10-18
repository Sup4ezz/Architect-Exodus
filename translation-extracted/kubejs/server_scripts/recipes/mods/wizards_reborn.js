ServerEvents.recipes((event) => {
  event
    .custom({
      type: "wizards_reborn:arcanum_dust_transmutation",
      from: {
        tag: "forge:storage_blocks/gold",
      },
      to: {
        item: "wizards_reborn:arcane_gold_block",
      },
      display: {
        item: "wizards_reborn:arcane_gold_block",
      },
    }).id("ftb:arcane_dust_transmutation/arcane_gold_block");
});

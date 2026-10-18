ServerEvents.recipes((event) => {
  event
    .shaped("irons_spellbooks:alchemist_cauldron", ["I I", "ICI", "AAA"], {
      I: "#forge:ingots/iron",
      A: "#forge:dusts/amethyst",
      C: "minecraft:cauldron",
    })
    .id("ftb:irons_spellbooks/alchemist_cauldron");

  event
    .shaped("irons_spellbooks:firefly_jar", [" A ", "GLG", " G "], {
      A: "irons_spellbooks:arcane_essence",
      G: "#forge:glass",
      L: "minecraft:lantern"
    }).id("ftb:irons_spellbooks/firefly_jar_fix")

  event
    .shaped("irons_spellbooks:holy_rune", ["DDD", "DRD", "DDD"], {
      D: "irons_spellbooks:blank_rune",
      R: "irons_spellbooks:divine_pearl",
    }).id("ftb:irons_spellbooks/holy_rune")

  event
    .custom({
      type: "irons_spellbooks:alchemist_cauldron_brew",
      base_fluid: {
        Amount: 250,
        Tag: {
          "irons_spellbooks:bottle_type": "REGULAR",
          Potion: "minecraft:water",
        },
        FluidName: "irons_spellbooks:potion",
      },
      input: {
        item: "iceandfire:dread_shard",
      },
      results: [
        {
          Amount: 250,
          Tag: {
            "irons_spellbooks:bottle_type": "REGULAR",
            Potion: "minecraft:awkward",
          },
          FluidName: "irons_spellbooks:potion",
        },
      ],
    })
    .id("ftb:irons_spellbooks/cauldron_brew/awkward_potion");

  event.shaped("irons_spellbooks:scroll_forge", ["BBB", " O ", "OOO"], {
    B: "minecraft:polished_blackstone",
    O: "#forge:obsidian",
  }).id("ftb:irons_spellbooks/scroll_forge");

  event
    .custom({
      type: "ars_nouveau:imbuement",
      count: 1,
      input: {
        item: "bloodmagic:infusedslate",
      },
      output: "irons_spellbooks:blank_rune",
      pedestalItems: [],
      source: 5000,
    })
    .id("ftb:irons_spellbooks/blank_rune");

  event
    .shaped(Item.of("gateways:gate_pearl", { gateway: "gateways:dead_king" }), ["AEA", "EBE", "AEA"], {
      E: "minecraft:ender_pearl",
      B: "irons_spellbooks:bone_key",
      A: "irons_spellbooks:arcane_essence",
    })
    .id("ftb:irons_spellbooks/dead_king_gateway");
});

ServerEvents.recipes((event) => {
  event
    .shaped("apotheosis:simple_reforging_table", [" N ", "GBG", "SSS"], {
      N: "#forge:ingots/iron",
      G: "apotheosis:gem_dust",
      B: "minecraft:book",
      S: "minecraft:polished_blackstone",
    })
    .id("ftb:apotheosis/simple_reforging_table");

  event
    .shaped("3x apotheosis:sigil_of_socketing", ["GDG", "SSS", "GAG"], {
      D: "embers:ember_shard",
      G: "apotheosis:gem_dust",
      S: "apotheosis:gem_fused_slate",
      A: "minecraft:amethyst_shard",
    })
    .id("ftb:apotheosis/sigil_of_socketing");

  event
    .shaped("apotheosis:reforging_table", [" G ", "ERE", "NNN"], {
      G: "#forge:ingots/gold",
      E: "apotheosis:epic_material",
      R: "apotheosis:simple_reforging_table",
      N: "minecraft:nether_bricks",
    })
    .id("ftb:apotheosis/reforging_table");

  event
    .custom({
      type: "apotheosis:fletching",
      conditions: [
        {
          type: "apotheosis:module",
          module: "village",
        },
      ],
      ingredients: [
        {
          item: "minecraft:flint",
        },
        {
          item: "minecraft:stick",
        },
        {
          item: "minecraft:feather",
        },
      ],
      result: {
        item: "minecraft:arrow",
        count: 12,
      },
    })
    .id("ftb:apotheosis/fletching/arrow");

  event
    .custom({
      type: "apotheosis:fletching",
      conditions: [
        {
          type: "apotheosis:module",
          module: "village",
        },
      ],
      ingredients: [
        {
          item: "minecraft:flint",
        },
        {
          item: "minecraft:stick",
        },
        {
          item: "farmersdelight:straw",
        },
      ],
      result: {
        item: "minecraft:arrow",
        count: 6,
      },
    })
    .id("ftb:apotheosis/fletching/arrow_alt");

  event.replaceInput({ id: /^apotheosis:.*_tome$/ }, "minecraft:blaze_rod", "ftb:abyssal_pearl");

  event.replaceInput({ id: /^apotheosis:.*_tome$/ }, "minecraft:blaze_powder", "ftb:abyssal_pearl");

  event.replaceInput({ id: "apotheosis:filtering_shelf"}, "apotheosis:infused_seashelf", "apotheosis:infused_hellshelf")

  event.replaceInput({ id: "apotheosis:rectifier"}, "apotheosis:infused_seashelf", "apotheosis:infused_hellshelf")

  event.shapeless("2x ftb:gem_smithing_template", ["2x apotheosis:gem_dust", "ftb:gem_smithing_template"]).id("ftb:apotheosis/gem_smithing_template_duplication");

  event.shaped("ftb:gem_smithing_template", [" G ", "GSG", " G "], {
    G: "apotheosis:gem_dust",
    S: "apotheosis:gem_fused_slate"
  }).id("ftb:apotheosis/gem_smithing_template");

  const apothGemTypes = [
    { rarity: "apotheosis:common", type: "apotheosis:core/lunar",      item: "minecraft:packed_ice"},
    { rarity: "apotheosis:common", type: "apotheosis:core/samurai",    item: "thermal_extra:dragonsteel_nugget"},
    { rarity: "apotheosis:common", type: "apotheosis:core/slipstream", item: "reliquary:angelic_feather"},
    { rarity: "apotheosis:common", type: "apotheosis:core/solar",      item: "minecraft:magma_block"},
    { rarity: "apotheosis:common", type: "apotheosis:core/splendor",   item: "minecraft:rabbit_foot"},
    { rarity: "apotheosis:common", type: "apotheosis:core/tyrannical", item: "embers:dawnstone_ingot"},
    { rarity: "apotheosis:common", type: "apotheosis:core/warlord",    item: "minecraft:echo_shard"},
    { rarity: "apotheosis:common", type: "apotheosis:core/lightning",  item: "irons_spellbooks:lightning_rune"},
    { rarity: "apotheosis:common", type: "apotheosis:core/guardian",   item: "ftbmaterials:netherite_nugget"},
    { rarity: "apotheosis:common", type: "apotheosis:core/combatant",  item: "iceandfire:sea_serpent_arrow"},
    { rarity: "apotheosis:common", type: "apotheosis:core/breach",     item: "mysticalagriculture:prudentium_ingot"},
    { rarity: "apotheosis:common", type: "apotheosis:core/brawlers",   item: "minecraft:golden_apple"},
    { rarity: "apotheosis:common", type: "apotheosis:core/ballast",    item: "tconstruct:queens_slime_nugget"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:ender",     item: "minecraft:ender_pearl"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:fire",      item: "minecraft:blaze_rod"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:holy",      item: "irons_spellbooks:divine_pearl"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:ice",       item: "irons_spellbooks:frozen_bone"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:evocation",    item: "minecraft:emerald"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:intelligent",  item: "irons_spellbooks:arcane_essence"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:lightning",    item: "irons_spellbooks:lightning_bottle"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:nature",       item: "naturesaura:gold_fiber"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:spell_resist", item: "irons_spellbooks:mithril_scrap"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:summoning",    item: "iceandfire:dread_shard"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:cooldown",     item: "minecraft:phantom_membrane"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:cast_time",    item: "irons_spellbooks:magic_cloth"},
    { rarity: "apotheosis:common", type: "irons_spellbooks:blood",        item: "irons_spellbooks:blood_vial"},
    { rarity: "apotheosis:rare",   type: "apotheosis:overworld/earth",    item: "minecraft:enchanting_table"},
    { rarity: "apotheosis:rare",   type: "apotheosis:overworld/royalty",  item: "ftb:empowered_netherite"},
    { rarity: "apotheosis:epic",   type: "apotheosis:the_end/endersurge", item: "apotheosis:library"},
    { rarity: "apotheosis:epic",   type: "apotheosis:the_end/mageslayer", item: "minecraft:ender_pearl"},
    { rarity: "apotheosis:rare",   type: "apotheosis:the_nether/inferno", item: "tconstruct:ichor_slime_crystal"},
    { rarity: "apotheosis:rare",   type: "apotheosis:the_nether/blood_lord", item: "minecraft:enchanted_golden_apple"},
  ]

  const gemRarityMaterial = {
    "apotheosis:common": "minecraft:quartz",
    "apotheosis:rare":   "minecraft:diamond",
    "apotheosis:epic":   "draconicevolution:draconium_ingot",
  };

  apothGemTypes.forEach(function(entry) {
    if (!entry.item) {
      console.warn("[apotheosis] Skipping gem entry with no item: type=" + entry.type + " rarity=" + entry.rarity);
      return;
    }
    const addition = gemRarityMaterial[entry.rarity];
    if (!addition) {
      console.error("[apotheosis] No material mapped for rarity '" + entry.rarity + "' (type=" + entry.type + ")");
      return;
    }
    const recipeId = "ftb:apotheosis/gem_smithing/" + entry.type.replace(/:/g, "/");
    console.log("[apotheosis] Registering gem smithing: " + recipeId + " | base=" + entry.item + " addition=" + addition);
    event.custom({
      type: "ftbexoduscompanion:smithing_transform_nbt",
      template: { item: "ftb:gem_smithing_template" },
      base:     { item: entry.item },
      addition: { item: addition },
      result: {
        item: "apotheosis:gem",
        nbt: `{affix_data:{rarity:"${entry.rarity}"},gem:"${entry.type}"}`,
      },
    }).id(recipeId);
  });
});

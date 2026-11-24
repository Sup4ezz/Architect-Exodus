// priority: 100
const addItems = [
  // Gating Items
  { itemID: "lignite_coal" },
  { itemID: "argentum_ingot" },
  { itemID: "primordial_ice_crystal" },
  { itemID: "orichalcum_ingot" },
  { itemID: "firestone" },
  { itemID: "muspelloy_ingot" },
  { itemID: "aesirium", glow: true },
  // Wrought Iron
  { itemID: "wrought_iron_ingot" },
  { itemID: "wrought_iron_nugget" },
  // Gaia
  { itemID: "gaia_nugget", glow: true, rarity: "rare" },
  { itemID: "gaia_aspectus", glow: true },
  // { itemID: "purified_spirit", glow: true, rarity: "epic" },
  // Other items
  { itemID: "multiblock_printer" },
  { itemID: "blackstone_dust" },
  { itemID: "deepslate_dust" },
  { itemID: "codex_glyph_1", glow: true, fireResistant: true },
  { itemID: "codex_glyph_2", glow: true, fireResistant: true },
  { itemID: "codex_glyph_3", glow: true, fireResistant: true },
  { itemID: "sealed_scroll_common" },
  { itemID: "sealed_scroll_uncommon" },
  { itemID: "sealed_scroll_rare" },
  { itemID: "sealed_scroll_epic", glow: true },
  { itemID: "sealed_scroll_legendary", glow: true },
  { itemID: "glod_crystal", glow: true, rarity: "epic" },
  { itemID: "abyssal_pearl", glow: true, rarity: "epic" },
  { itemID: "arcane_rosin", burnTime: 800 },
  { itemID: "dragonsteel_aspectus", glow: true },
  { itemID: "prismatic_xychorium", glow: true },
  { itemID: "empowered_netherite", glow: true, rarity: "epic" },
  { itemID: "inactive_twisted_runestone", rarity: "epic" },
  { itemID: "twisted_runestone", rarity: "epic" },
  { itemID: "hellish_flesh", hunguer: 4, saturation: 0.8, meat: true, effect: "minecraft:hunger" },
  { itemID: "mechanical_heart", rarity: "epic" },
  { itemID: "distilled_power", glow: true, rarity: "rare" },
  { itemID: "primordial_dragons_blood", glow: true, rarity: "epic" },
  { itemID: "nether_fungal_salts" },
  { itemID: "basalt_bowl" },
  { itemID: "ghast_bladder" },
  { itemID: "fiery_remains" },
  { itemID: "gem_smithing_template" },
  { itemID: "dwarven_processor" },
  { itemID: "printed_dwarven_processor" },

  { itemID: "fire_shard", glow: true, fireResistant: true },
  { itemID: "ice_shard", glow: true, fireResistant: true },
  { itemID: "nature_shard", glow: true, fireResistant: true },
  { itemID: "arcane_shard", glow: true, fireResistant: true },
  { itemID: "celestial_shard", glow: true, fireResistant: true },
  { itemID: "vampiric_shard", glow: true, fireResistant: true },
  { itemID: "null_shard", glow: true, fireResistant: true },

  { itemID: "fire_gem", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "ice_gem", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "nature_gem", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "arcane_gem", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "celestial_gem", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "vampiric_gem", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "null_gem", glow: true, fireResistant: true, rarity: "uncommon" },

  { itemID: "fire_crystal", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "ice_crystal", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "nature_crystal", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "arcane_crystal", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "celestial_crystal", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "vampiric_crystal", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "null_crystal", glow: true, fireResistant: true, rarity: "rare" },

  { itemID: "fire_cluster", glow: true, fireResistant: true, rarity: "epic" },
  { itemID: "ice_cluster", glow: true, fireResistant: true, rarity: "epic" },
  { itemID: "nature_cluster", glow: true, fireResistant: true, rarity: "epic" },
  { itemID: "arcane_cluster", glow: true, fireResistant: true, rarity: "epic" },
  { itemID: "celestial_cluster", glow: true, fireResistant: true, rarity: "epic" },
  { itemID: "vampiric_cluster", glow: true, fireResistant: true, rarity: "epic" },

  // Asgard Restoration
  { itemID: "draconic_ember", glow: true, fireResistant: true, rarity: "epic" },
  { itemID: "reconsecrated_aesir_stone", glow: true, fireResistant: true, rarity: "uncommon" },
  { itemID: "fragment_helheim", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "fragment_jotunheim", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "fragment_niflheim", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "fragment_muspelheim", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "fragment_midgard", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "fragment_alfheim", glow: true, fireResistant: true, rarity: "rare" },
  { itemID: "fragment_asgard", glow: true, fireResistant: true, rarity: "rare" }
];

StartupEvents.registry("item", (event) => {
  // #region Unrefined Spirit Definition
  let UNREFINED = Malum$SpiritTypeRegistry.register(
    Malum$MalumSpiritType.create(
      "unrefined",
      new Malum$SpiritVisualMotif(
        Java$Color.WHITE,
        Java$Color.GRAY,
        1.0,
        Lodestone$Easing.LINEAR
      ),
      () => unrefinedShardItem
    )
      .setItemColor((motif) => motif.getPrimaryColor())
      .build()
  )

  let unrefinedShardItem = new Malum$SpiritShardItem(
    new Minecraft$Item$Properties(),
    UNREFINED
  );

  let PURIFIED = Malum$SpiritTypeRegistry.register(
    Malum$MalumSpiritType.create(
      "purified",
      new Malum$SpiritVisualMotif(
        Java$Color.WHITE,
        Java$Color.GRAY,
        1.0,
        Lodestone$Easing.LINEAR
      ),
      () => purifiedShardItem
    )
      .setItemColor((motif) => motif.getPrimaryColor())
      .build()
  )

  let purifiedShardItem = new Malum$SpiritShardItem(
    new Minecraft$Item$Properties(),
    PURIFIED
  );
  // #endregion

  event.createCustom("ftb:unrefined_spirit", () => unrefinedShardItem);
  event.createCustom("ftb:purified_spirit", () => purifiedShardItem);

  addItems.forEach((item) => {
    let newItem = event.create(`ftb:${item.itemID}`);

    if (item.rarity !== undefined) newItem = newItem.rarity(item.rarity);
    if (item.fireResistant !== undefined) newItem = newItem.fireResistant(item.fireResistant);
    if (item.maxStackSize !== undefined) newItem = newItem.maxStackSize(item.maxStackSize);
    if (item.glow !== undefined) newItem = newItem.glow(item.glow);
    if (item.food !== undefined) newItem = newItem.food(item.food);
    if (item.burnTime !== undefined) newItem = newItem.burnTime(item.burnTime);
    
    if (item.hunguer !== undefined) {
        newItem.food(food => {
            food.hunger(item.hunguer);
            
            if (item.saturation !== undefined) {
                food.saturation(item.saturation);
            }
            
            if (item.meat === true) {
                food.meat();
            }
            
            if (item.effect !== undefined) {
                //(Effect, Time, Amp, Chance)
                //Currently All Effects behave like Rotten Flesh's Effect.
                food.effect(item.effect, 600, 0, 0.8);
            }
        });
    }

  });

  event.create("ftb:allay_speaker");
  event
    .create("ftb:skill_catalyst")
    .displayName("§6Skill Catalyst")
    .tooltip(Text.translate("ftb.little_helper.skill_catalyst.tooltip").gray())
    .tooltip(Text.translate("ftb.little_helper.skill_catalyst.tooltip2").gray())
    .maxStackSize(1);
});

// Sealed Scroll — right-click to receive a random Iron's Spells scroll of the matching rarity

const $SpellRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry");
const $SpellRarity = Java.loadClass("io.redspace.ironsspellbooks.api.spells.SpellRarity");
const $ISpellContainer = Java.loadClass("io.redspace.ironsspellbooks.api.spells.ISpellContainer");
const $ArrayList = Java.loadClass("java.util.ArrayList");

const SEALED_SCROLL_TIERS = {
  "ftb:sealed_scroll_common": $SpellRarity.COMMON,
  "ftb:sealed_scroll_uncommon": $SpellRarity.UNCOMMON,
  "ftb:sealed_scroll_rare": $SpellRarity.RARE,
  "ftb:sealed_scroll_epic": $SpellRarity.EPIC,
  "ftb:sealed_scroll_legendary": $SpellRarity.LEGENDARY
};

ItemEvents.rightClicked(function (event) {
  if (event.level.isClientSide()) return;
  if (String(event.hand || "") !== "MAIN_HAND") return;

  let itm = event.item;
  if (!itm) return;
  let id = String(itm.id || "");
  let rarity = SEALED_SCROLL_TIERS[id];
  if (!rarity) return;

  let player = event.player;

  // Get all enabled spells that support this rarity
  // Wrap in ArrayList to avoid Rhino ImmutableCollections access error
  let allSpells = new $ArrayList($SpellRegistry.getEnabledSpells());
  let pool = [];
  for (let i = 0; i < allSpells.size(); i++) {
    let spell = allSpells.get(i);
    if (spell.getMinRarity() <= rarity.getValue() && spell.getMaxRarity() >= rarity.getValue()) {
      pool.push(spell);
    }
  }

  if (!player.isCreative()) itm.count--;

  if (pool.length === 0) {
    player.giveExperiencePoints(55);
    player.tell(Text.translate("ftb.sealed_scroll.empty").red());
    return;
  }

  // Pick a random spell from the pool
  let picked = pool[Math.floor(Math.random() * pool.length)];

  // Get the spell level for this rarity
  let spellLevel = picked.getMinLevelForRarity(rarity);

  // Create a scroll item with this spell
  let scroll = Item.of("irons_spellbooks:scroll");
  $ISpellContainer.createScrollContainer(picked, spellLevel, scroll);

  player.give(scroll);
  player.tell(Text.translate("ftb.sealed_scroll.unlock", [scroll.displayName]).green());
});

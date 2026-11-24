// Codex Glyph — right-click to unlock a random Ars Nouveau glyph
// Backported from Stoneblock 4, adapted for KubeJS 6 / 1.20.1

const $CapabilityRegistry = Java.loadClass("com.hollingsworth.arsnouveau.setup.registry.CapabilityRegistry");
const $Glyph = Java.loadClass("com.hollingsworth.arsnouveau.common.items.Glyph");
const $ArsConfig = Java.loadClass("com.hollingsworth.arsnouveau.setup.config.Config");

const CODEX_IDS = {
  "ftb:codex_glyph_1": true,
  "ftb:codex_glyph_2": true,
  "ftb:codex_glyph_3": true
};

function pickWeighted(entries) {
  let total = 0;
  for (let i = 0; i < entries.length; i++) {
    let w = entries[i].weight || 0;
    if (w > 0) total += w;
  }
  if (total <= 0) return null;
  let r = Math.random() * total;
  for (let j = 0; j < entries.length; j++) {
    let wj = entries[j].weight || 0;
    if (wj <= 0) continue;
    if (r < wj) return entries[j].entry;
    r -= wj;
  }
  return entries[entries.length - 1].entry;
}

ItemEvents.rightClicked(function (event) {
  if (event.level.isClientSide()) return;
  if (String(event.hand || "") !== "MAIN_HAND") return;

  let itm = event.item;
  if (!itm) return;
  let id = String(itm.id || "");
  if (!CODEX_IDS[id]) return;

  let player = event.player;
  let playerCapOpt = $CapabilityRegistry.getPlayerDataCap(player);
  if (!playerCapOpt.isPresent()) return;
  let playerCap = playerCapOpt.orElse(null);

  let pool = getArsGlyphLootTable(id);

  pool = pool.filter(function (g) {
    try {
      let it = Item.of(g.entry);
      if (!it || it.isEmpty()) {
        console.warn("[codex] Unknown glyph item id: " + g.entry);
        return false;
      }
      let rawItem = it.item;
      if (!(rawItem instanceof $Glyph)) {
        console.warn("[codex] Not a Glyph instance: " + g.entry);
        return false;
      }
      let part = rawItem.spellPart;
      if (!part) {
        console.warn("[codex] No spellPart on glyph item: " + g.entry);
        return false;
      }
      return !playerCap.knowsGlyph(part) && !$ArsConfig.isStarterEnabled(part);
    } catch (e) {
      console.warn("[codex] Error inspecting glyph " + g.entry + ": " + e);
      return false;
    }
  });

  if (!player.isCreative()) itm.count--;

  if (pool.length === 0) {
    player.giveExperiencePoints(55);
    player.tell(Text.translate("ftb.codex.glyph.nomore").red());
    return;
  }

  let pickedId = pickWeighted(pool);
  if (!pickedId) {
    console.warn("[codex] Weighted pick returned null; pool size: " + pool.length);
    return;
  }

  let pickedItem = Item.of(pickedId);
  if (!pickedItem || pickedItem.isEmpty() || !(pickedItem.item instanceof $Glyph)) {
    console.warn("[codex] Picked invalid glyph id: " + pickedId);
    return;
  }

  playerCap.unlockGlyph(pickedItem.item.spellPart);
  $CapabilityRegistry.EventHandler.syncPlayerCap(player);
  player.tell(Text.translate("ftb.codex.glyph.unlock", [pickedItem.displayName]).green());
});

function getArsGlyphLootTable(itemId) {
  switch (itemId) {
    case "ftb:codex_glyph_1": return codex_tier_1;
    case "ftb:codex_glyph_2": return codex_tier_2;
    case "ftb:codex_glyph_3": return codex_tier_3;
    default: return codex_tier_1;
  }
}

// ---------------------------
// Tier 1: Basic / utility glyphs
// ---------------------------
const codex_tier_1 = [
  // Core forms
  { weight: 12, entry: "ars_nouveau:glyph_projectile" },
  { weight: 12, entry: "ars_nouveau:glyph_self" },
  { weight: 12, entry: "ars_nouveau:glyph_touch" },

  // Core effects
  { weight: 12, entry: "ars_nouveau:glyph_amplify" },
  { weight: 12, entry: "ars_nouveau:glyph_harm" },
  { weight: 12, entry: "ars_nouveau:glyph_harvest" },
  { weight: 12, entry: "ars_nouveau:glyph_place_block" },
  { weight: 12, entry: "ars_nouveau:glyph_pickup" },
  { weight: 12, entry: "ars_nouveau:glyph_cut" },
  { weight: 12, entry: "ars_nouveau:glyph_craft" },
  { weight: 12, entry: "ars_nouveau:glyph_light" },

  // Movement / handy
  { weight: 10, entry: "ars_nouveau:glyph_rotate" },
  { weight: 10, entry: "ars_nouveau:glyph_leap" },
  { weight: 10, entry: "ars_nouveau:glyph_launch" },
  { weight: 10, entry: "ars_nouveau:glyph_bounce" },
  { weight: 10, entry: "ars_nouveau:glyph_gust" },
  { weight: 10, entry: "ars_nouveau:glyph_toss" },
  { weight: 10, entry: "ars_nouveau:glyph_conjure_water" },
  { weight: 10, entry: "ars_nouveau:glyph_interact" },

  // Control / early power
  { weight: 8, entry: "ars_nouveau:glyph_phantom_block" },
  { weight: 8, entry: "ars_nouveau:glyph_snare" },
  { weight: 8, entry: "ars_nouveau:glyph_pull" },
  { weight: 8, entry: "ars_nouveau:glyph_delay" },
  { weight: 8, entry: "ars_nouveau:glyph_randomize" },
  { weight: 8, entry: "ars_nouveau:glyph_ignite" },
  { weight: 8, entry: "ars_nouveau:glyph_sensitive" },
  { weight: 8, entry: "ars_nouveau:glyph_redstone_signal" },

  // Elemental / situational
  { weight: 6, entry: "ars_nouveau:glyph_freeze" },
  { weight: 6, entry: "ars_nouveau:glyph_evaporate" },
  { weight: 6, entry: "ars_nouveau:glyph_fell" },
  { weight: 6, entry: "ars_nouveau:glyph_rune" },
  { weight: 6, entry: "ars_nouveau:glyph_underfoot" },
  { weight: 6, entry: "ars_nouveau:glyph_reset" },
  { weight: 6, entry: "ars_nouveau:glyph_wololo" },

  // Uncommon / specialty
  { weight: 4, entry: "ars_nouveau:glyph_dispel" },
  { weight: 4, entry: "ars_nouveau:glyph_summon_steed" },
  { weight: 4, entry: "ars_nouveau:glyph_summon_wolves" },

  // Ars Elemental filters / forms
  { weight: 3, entry: "ars_elemental:glyph_aerial_filter" },
  { weight: 3, entry: "ars_elemental:glyph_aquatic_filter" },
  { weight: 3, entry: "ars_elemental:glyph_fiery_filter" },
  { weight: 3, entry: "ars_elemental:glyph_insect_filter" },
  { weight: 3, entry: "ars_elemental:glyph_not_aerial_filter" },
  { weight: 3, entry: "ars_elemental:glyph_not_aquatic_filter" },
  { weight: 3, entry: "ars_elemental:glyph_not_insect_filter" },
  { weight: 3, entry: "ars_elemental:glyph_not_fiery_filter" },
  { weight: 3, entry: "ars_elemental:glyph_not_summon_filter" },
  { weight: 3, entry: "ars_elemental:glyph_not_undead_filter" },
  { weight: 3, entry: "ars_elemental:glyph_summon_filter" },
  { weight: 3, entry: "ars_elemental:glyph_undead_filter" },
  { weight: 3, entry: "ars_elemental:glyph_conjure_terrain" },
  { weight: 3, entry: "ars_elemental:glyph_spark" }
];

// ---------------------------
// Tier 2: Intermediate glyphs
// ---------------------------
const codex_tier_2 = [
  // Common modifiers / QoL
  { weight: 12, entry: "ars_nouveau:glyph_aoe" },
  { weight: 12, entry: "ars_nouveau:glyph_pierce" },
  { weight: 12, entry: "ars_nouveau:glyph_extend_time" },
  { weight: 12, entry: "ars_nouveau:glyph_duration_down" },
  { weight: 12, entry: "ars_nouveau:glyph_dampen" },
  { weight: 12, entry: "ars_nouveau:glyph_accelerate" },
  { weight: 12, entry: "ars_nouveau:glyph_decelerate" },

  // Frequent utility
  { weight: 10, entry: "ars_nouveau:glyph_smelt" },
  { weight: 10, entry: "ars_nouveau:glyph_crush" },
  { weight: 10, entry: "ars_nouveau:glyph_extract" },
  { weight: 10, entry: "ars_nouveau:glyph_grow" },
  { weight: 10, entry: "ars_nouveau:glyph_slowfall" },

  // Solid combat/utility
  { weight: 8, entry: "ars_nouveau:glyph_wind_shear" },
  { weight: 8, entry: "ars_nouveau:glyph_flare" },
  { weight: 8, entry: "ars_nouveau:glyph_exchange" },
  { weight: 8, entry: "ars_nouveau:glyph_fortune" },
  { weight: 8, entry: "ars_nouveau:glyph_gravity" },
  { weight: 8, entry: "ars_nouveau:glyph_animate_block" },

  // Uncommon / situational
  { weight: 6, entry: "ars_nouveau:glyph_cold_snap" },
  { weight: 6, entry: "ars_nouveau:glyph_infuse" },
  { weight: 6, entry: "ars_nouveau:glyph_name" },
  { weight: 6, entry: "ars_nouveau:glyph_sense_magic" },
  { weight: 6, entry: "ars_nouveau:glyph_ender_inventory" },
  { weight: 6, entry: "ars_nouveau:glyph_firework" },

  // Rare / powerful
  { weight: 4, entry: "ars_nouveau:glyph_heal" },
  { weight: 4, entry: "ars_nouveau:glyph_invisibility" },
  { weight: 4, entry: "ars_nouveau:glyph_explosion" },

  // Ars Elemental
  { weight: 3, entry: "ars_elemental:glyph_arc_projectile" },
  { weight: 3, entry: "ars_elemental:glyph_bubble_shield" },
  { weight: 3, entry: "ars_elemental:glyph_charm" },
  { weight: 3, entry: "ars_elemental:glyph_discharge" },
  { weight: 3, entry: "ars_elemental:glyph_envenom" },
  { weight: 3, entry: "ars_elemental:glyph_phantom_grasp" },
  { weight: 3, entry: "ars_elemental:glyph_poison_spores" },
  { weight: 3, entry: "ars_elemental:glyph_spike" },
  { weight: 3, entry: "ars_elemental:glyph_watery_grave" },
  { weight: 3, entry: "ars_elemental:glyph_propagator_arc" },

  // Starbuncle Mania
  { weight: 3, entry: "starbunclemania:glyph_pickup_fluid" },
  { weight: 3, entry: "starbunclemania:glyph_place_fluid" }
];

// ---------------------------
// Tier 3: Advanced / powerful glyphs
// ---------------------------
const codex_tier_3 = [
  // Core advanced mobility/defense
  { weight: 12, entry: "ars_nouveau:glyph_blink" },
  { weight: 12, entry: "ars_nouveau:glyph_wall" },

  // Frequent high-impact combat
  { weight: 10, entry: "ars_nouveau:glyph_glide" },
  { weight: 10, entry: "ars_nouveau:glyph_fangs" },
  { weight: 10, entry: "ars_nouveau:glyph_lightning" },
  { weight: 10, entry: "ars_nouveau:burst" },

  // Control / shaping / meta
  { weight: 8, entry: "ars_nouveau:glyph_linger" },
  { weight: 8, entry: "ars_nouveau:glyph_orbit" },
  { weight: 8, entry: "ars_nouveau:glyph_split" },

  // Uncommon utility/control
  { weight: 6, entry: "ars_nouveau:glyph_hex" },
  { weight: 6, entry: "ars_nouveau:glyph_summon_decoy" },

  // Rare summons
  { weight: 3, entry: "ars_nouveau:glyph_summon_vex" },
  { weight: 3, entry: "ars_nouveau:glyph_summon_undead" },

  // Very rare / strong
  { weight: 2, entry: "ars_nouveau:glyph_wither" },
  { weight: 2, entry: "ars_nouveau:glyph_intangible" },

  // Ars Elemental
  { weight: 3, entry: "ars_elemental:glyph_homing_projectile" },
  { weight: 3, entry: "ars_elemental:glyph_life_link" },
  { weight: 3, entry: "ars_elemental:glyph_propagator_homing" }
];

// The Cataclysm locator "eyes" each target a structure with a biome tag.
// When the player uses one in a dimension whose biomes don't match, the
// locate call scans the full radius with zero candidate biomes — no
// feedback, and the server can hang long enough to trip the watchdog.
//
// Intercept the right-click and fail fast. Whitelist is derived from the
// PACK-OVERRIDDEN biome tags under
//   datapacks/ftb/data/cataclysm/tags/worldgen/biome/has_structure/*.json
// Keep this in sync if those tags change.
//
//   abyss_eye      → sunken_city     → Niflheim water + Jotunheim water
//   desert_eye     → cursed_pyramid  → #ftb:is_midgard (= Overworld)
//   flame_eye      → burning_arena   → #ftb:is_musp   (Nether + Muspelheim)
//   monstrous_eye  → soul_black_smith→ #ftb:is_musp   (Nether + Muspelheim)
//   storm_eye      → acropolis       → #ftb:is_niflheim
//   cursed_eye     → frosted_prison  → (empty tag: structure disabled)
//   mech_eye       → ancient_factory → (empty tag: structure disabled)
//   void_eye       → ruined_citadel  → (empty tag: structure disabled)
const $CataclysmEyeDims = {
  "cataclysm:abyss_eye":     ["ftb:jotunheim"],
  "cataclysm:desert_eye":    ["minecraft:overworld"],
  "cataclysm:flame_eye":     ["minecraft:the_nether", "ftb:muspelheim"],
  "cataclysm:monstrous_eye": ["minecraft:the_nether", "ftb:muspelheim"],
  "cataclysm:storm_eye":     ["ftb:niflheim"],
  "cataclysm:cursed_eye":    [],
  "cataclysm:mech_eye":      [],
  "cataclysm:void_eye":      [],
};

ItemEvents.rightClicked((event) => {
  const { player, item } = event;
  if (player == null || item == null) return;

  let allowed = $CataclysmEyeDims[String(item.id)];
  if (allowed == null) return;

  let dim = String(player.getLevel().getDimension());
  if (allowed.indexOf(dim) !== -1) return;

  event.cancel();
  player.tell(Text.translate("ftb.cataclysm_eye.wrong_dim").red());
});

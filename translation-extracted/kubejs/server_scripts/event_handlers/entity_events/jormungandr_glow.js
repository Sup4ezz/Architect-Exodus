NativeEvents.onEvent("dev.ftb.mods.ftbragnarok.event.RagnarokBossEvent$JormungandrSpawned", (event) => {
  let serpent = event.getJormungandr();
  if (serpent == null) return;
  serpent.potionEffects.add("minecraft:glowing", 1000000, 0, false, false);
});

NativeEvents.onEvent("dev.ftb.mods.ftbragnarok.event.RagnarokBossEvent$JormungandrSubmerged", (event) => {
  let serpent = event.getJormungandr ? event.getJormungandr() : null;
  if (serpent == null) return;
  serpent.potionEffects.add("minecraft:glowing", 1000000, 0, false, false);
});

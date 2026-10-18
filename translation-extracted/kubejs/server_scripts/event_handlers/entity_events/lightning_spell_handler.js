EntityEvents.spawned("ars_nouveau:an_lightning", (event) => {
  const { entity, level } = event;
  
  level.spawnEntity("minecraft:lightning_bolt", entity.x, entity.y, entity.z);
});

NativeEvents.onEvent("io.redspace.ironsspellbooks.api.events.SpellOnCastEvent", (event) => {
  const player = event.getEntity();
  const level = player.level;
  const schoolType = event.getSchoolType().getId();
  if (schoolType.toString() !== "irons_spellbooks:lightning") return;

  const rayTrace = player.pick(25, 0, false);
  const hitLocation = rayTrace.location;
  
  const lightning = new Minecraft$LightningBolt(Minecraft$EntityType.LIGHTNING_BOLT, level);
  lightning.setPos(hitLocation.x(), hitLocation.y(), hitLocation.z());
  level.addFreshEntity(lightning);
});
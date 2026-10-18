// Niflheim guardians - only attack players, ignore all other entities
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingChangeTargetEvent", function(event) {
  try {
    var mob = event.entity;
    if (!mob) return;
    var mobType = mob.type.toString();
    if (mobType == "minecraft:guardian") {
      var newTarget = event.newTarget;
      if (newTarget && !newTarget.isPlayer()) {
        event.newTarget = null;
      }
    }
  } catch (e) {
    console.log("guardian_targeting LivingChangeTargetEvent error: " + e);
  }
});

// Also prevent guardians from damaging non-players (beam may already be firing)
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", function(event) {
  try {
    var victim = event.entity;
    if (!victim || victim.isPlayer()) return;
    var attacker = event.source.actual;
    if (!attacker) return;
    var attackerType = attacker.type.toString();
    if (attackerType == "minecraft:guardian") {
      event.setCanceled(true);
    }
  } catch (e) {
    console.log("guardian_targeting LivingHurtEvent error: " + e);
  }
});

const $CataclysmDenyBossBreaking = [
  "cataclysm:maledictus",
  "cataclysm:the_leviathan", 
  "cataclysm:ignis",
]

ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityMobGriefingEvent", (event) => {
  /**
   * @type {Internal.Entity}
   */
  let entity = event.getEntity();
  if ($CataclysmDenyBossBreaking.some(e => entity.getType() == e)) {
    event.setResult("DENY");
  }
});
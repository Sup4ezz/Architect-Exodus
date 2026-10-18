var aeAlliedMobs = [
  "cataclysm:draugr",
  "iceandfire:dread_thrall",
  "iceandfire:dread_beast",
  "quark:wraith",
  "minecraft:enderman",
  "alexscaves:gloomoth"];

var aeAlliedSet = {};
for (var i = 0; i < aeAlliedMobs.length; i++) {
  aeAlliedSet[aeAlliedMobs[i]] = true;
}

EntityJSEvents.modifyEntity(function(event) {
  for (var i = 0; i < aeAlliedMobs.length; i++) {
    var mobId = aeAlliedMobs[i];
    event.modify(mobId, function(builder) {
      builder.isAlliedTo(function(context) {
        var targetType = context.target.type.toString();
        return aeAlliedSet[targetType] === true;
      });
    });
  }
});

// Prevent allied mobs from ever targeting each other (covers HurtByTargetGoal retaliation)
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingChangeTargetEvent", function(event) {
  try {
    var mob = event.entity;
    if (!mob || mob.isPlayer()) return;
    var newTarget = event.newTarget;
    if (!newTarget || newTarget.isPlayer()) return;
    var attackerType = mob.type.toString();
    var targetType = newTarget.type.toString();
    if (aeAlliedSet[attackerType] === true && aeAlliedSet[targetType] === true) {
      event.newTarget = null;
    }
  } catch (e) {
    console.log("ae_allied_mobs LivingChangeTargetEvent error: " + e);
  }
});

// Prevent allied mobs from damaging each other
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", function(event) {
  try {
    var victim = event.entity;
    if (!victim || victim.isPlayer()) return;
    var attacker = event.source.actual;
    if (!attacker || attacker.isPlayer()) return;
    var victimType = victim.type.toString();
    var attackerType = attacker.type.toString();
    if (aeAlliedSet[victimType] === true && aeAlliedSet[attackerType] === true) {
      event.setCanceled(true);
    }
  } catch (e) {
    console.log("ae_allied_mobs LivingHurtEvent error: " + e);
  }
});

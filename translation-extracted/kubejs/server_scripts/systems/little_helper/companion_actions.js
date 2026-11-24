//priority: 1

LHEngine.registerAction("buff", {
  execute: (player, action, context, event) => {
    if (action.effect == null) return false;
    let duration = LHEngine.resolveValue(action.duration, context);
    let amplifier = LHEngine.resolveValue(action.amplifier, context) || 0;
    player.potionEffects.add(action.effect, duration * 20, amplifier, false, true);
  },
});

LHEngine.registerAction("random_buff_self", {
  execute: (player, action, context, event) => {
    let randomNum = JavaMath.floor(JavaMath.random() * BUFFS_PLAYER.length);
    let randomDebuff = BUFFS_PLAYER[randomNum];
    action.effect = randomDebuff;
    LHEngine.actions["buff"].execute(player, action, context, event);
  },
});

LHEngine.registerAction("dialogue_random", {
  execute: (player, action, context, event) => {
    let randomNum = JavaMath.floor(JavaMath.random() * action.langKeys.length);
    if (!action.repeat) {
      let pd = player.getPersistentData();
      let dialogueData = pd["dialogue"] || {};
      if (dialogueData[context.id]) return;
      dialogueData[context.id] = true;
      pd["dialogue"] = dialogueData;
    }
    Dialogue.begin(player, {
      npc: "allay_speaker",
      titleKey: "entity.ftblh.little_helper",
      textKeys: [action.langKeys[randomNum]],
      duration: action.duration
    });
    if (action.sound) {
      player.sendData("play_scroll_sound", {sound_id: action.sound});
    }
  },
});

const FRIENDLY_MOB_TYPES = [
  "ftblh:little_helper",
  "fdbosses:judgement_bird",
];

// True if `target` should NEVER be hit by the little helper's AoE actions or
// spells (passive animals, Occultism spirits/familiars, team pets).
function $LH$isExemptTarget(casterPlayer, target) {
  if (target == null) return true;
  if (target.isPlayer && target.isPlayer()) return true;

  let typeStr = String(target.getType());
  if (FRIENDLY_MOB_TYPES.indexOf(typeStr) !== -1) return true;
  if (typeStr.indexOf("occultism:") === 0) return true;

  try {
    let category = target.getType().getCategory();
    if (category != null && String(category) === "CREATURE") return true;
  } catch (e) {}

  if (target.getOwner) {
    let owner = target.getOwner();
    if (owner != null && owner.getUuid) {
      let ownerUuid = owner.getUuid();
      if (ownerUuid != null && casterPlayer != null) {
        if (ownerUuid.equals(casterPlayer.getUuid())) return true;
        try {
          let team = FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(casterPlayer).orElse(null);
          if (team != null) {
            let members = team.getMembers();
            if (members != null && members.contains(ownerUuid)) return true;
          }
        } catch (e) {}
      }
    }
  }

  return false;
}

// Short-lived UUID → expiry-ms map. When the little helper fires a `spell`
// action we register the caster here so the LivingAttackEvent hook can cancel
// incoming damage against exempt targets without interfering with manual
// player casts.
LHEngine.spellCasterExpiries = Utils.newMap();
LHEngine.markSpellCaster = function (entityUuidStr, playerUuidStr, ttlMs) {
  LHEngine.spellCasterExpiries.put(entityUuidStr, {
    expiresAt: Utils.getSystemTime() + ttlMs,
    playerUuid: playerUuidStr
  });
};
LHEngine.getActiveSpellCasterOwner = function (entityUuidStr) {
  let entry = LHEngine.spellCasterExpiries.get(entityUuidStr);
  if (entry == null) return null;
  if (Utils.getSystemTime() > entry.expiresAt) {
    LHEngine.spellCasterExpiries.remove(entityUuidStr);
    return null;
  }
  return entry.playerUuid;
};

LHEngine.registerAction("random_debuff_nearby", {
  execute: (player, action, context, event) => {
    let aabb = player.getBoundingBox().inflate(action.range);
    let entities = player.level.getEntitiesOfClass(Minecraft$Mob, aabb, (e) => {
      if (!e.isAlive()) return false;
      if ($LH$isExemptTarget(player, e)) return false;
      return true;
    });
    if (entities.isEmpty()) return false;
    let randomNum = JavaMath.floor(JavaMath.random() * DEBUFFS_MOBS.length);
    let randomDebuff = DEBUFFS_MOBS[randomNum];
    let duration = LHEngine.resolveValue(action.amount, context);
    let amplifier = LHEngine.resolveValue(action.amplifier, context) || 0;
    entities.forEach((entity) => {
      player.server.runCommandSilent(
        `effect give ${entity.getUuid()} ${randomDebuff} ${Math.ceil(duration / 20)} ${amplifier} true`
      );
    });
  },
});

LHEngine.registerAction("command", {
  execute: (player, action, context, event) => {
    let command = action.command;
    if (command == null) return;
    let silent = action.silent !== undefined ? action.silent : true;
    let ticks = action.ticks || 0;
    FTBLittleHelper.queueCommand(player, command, silent, ticks);
  },
});

LHEngine.registerAction("knockback", {
  execute: (player, action, context, event) => {
    let range = action.range || 8;
    let strength = LHEngine.resolveValue(action.strength, context) || 1;
    let verticalStrength = LHEngine.resolveValue(action.verticalStrength, context) || 0.5;

    let aabb = player.getBoundingBox().inflate(range);
    let entities = player.level.getEntitiesOfClass(Minecraft$Mob, aabb, (e) => {
      if (!e.isAlive()) return false;
      if ($LH$isExemptTarget(player, e)) return false;
      return true;
    });

    entities.forEach((entity) => {
      let dx = entity.getX() - player.getX();
      let dz = entity.getZ() - player.getZ();
      let len = Math.sqrt(dx * dx + dz * dz);
      if (len > 0) {
        dx = dx / len;
        dz = dz / len;
      } else {
        // Edge case: If the entity is standing on the exact pixel as the player, 
        // give them a random nudge so they don't just jump straight up.
        dx = Math.random() > 0.5 ? 0.1 : -0.1;
        dz = Math.random() > 0.5 ? 0.1 : -0.1;
      }
      entity.setDeltaMovement(new Vec3d(dx * strength, verticalStrength, dz * strength));
      entity.hurtMarked = true;
    });
  },
});

LHEngine.registerAction("cancel_death", {
  execute: (player, action, context, event) => {
    player.setHealth(player.getMaxHealth());

    let x = player.x;
    let y = player.y;
    let z = player.z;
    let level = player.getLevel();
    if (level != null && !level.isClientSide()) {
      level.sendParticles(Minecraft$ParticleTypes.FLASH, x, y + 1, z, 1, 0, 0, 0, 0);
      level.sendParticles(Minecraft$ParticleTypes.SOUL_FIRE_FLAME, x, y + 1, z, 200, 2.0, 2.0, 2.0, 0.3);
      level.sendParticles(Minecraft$ParticleTypes.SOUL, x, y + 1, z, 60, 0.5, 1.0, 0.5, 0.15);
      level.playSound(null, x, y, z, "minecraft:item.totem.use", "players", 1.0, 1.0);
    }
  }
});

LHEngine.registerAction("spell", {
  execute: (player, action, context, event) => {
    let spell = action.spell;
    if (spell == null) return;

    // TTL covers the 1-tick cast + any short projectile travel for instant AoE
    // spells (gust, frostwave). Long-travel spells would need a larger value.
    let markTtl = 1000;
    let playerUuidStr = player.getUuid().toString();

    if (action.self_cast) {
      LHEngine.markSpellCaster(playerUuidStr, playerUuidStr, markTtl);
      return castSpell(player, player, spell, LHEngine.resolveValue(action.level, context));
    } else {
      let lh = FTBLittleHelper.getHelperEntity(player);
      if (lh == null || !lh.isPresent()) return;
      lh = lh.get();
      LittleHelperLookAt(player, lh, action.target == "player");
      LHEngine.markSpellCaster(lh.getUuid().toString(), playerUuidStr, markTtl);
      LHEngine.markSpellCaster(playerUuidStr, playerUuidStr, markTtl);
      return castSpell(player, lh, spell, LHEngine.resolveValue(action.level, context));
    }
  },
});

LHEngine.registerAction("spirit_release", {
  execute: (player, action, context, event) => {
    let itemStack = context.itemStack;
    if (!itemStack || itemStack.id != "malum:spirit_pouch") return;

    let inventory = Malum$SpiritPouchItem.getInventory(itemStack);
    let spiritStacks = getSpiritStacks(inventory);
    if (spiritStacks.length === 0) return;

    let totalSpirits = 0;
    spiritStacks.forEach(s => totalSpirits += s.count);
    
    let entitiesAmount = JavaMath.min(JavaMath.floor(JavaMath.random() * 5) + 1, totalSpirits);
    let level = player.level;

    for (let i = 0; i < entitiesAmount; i++) {
      let available = spiritStacks.filter(s => s.count > 0);
      if (available.length === 0) break;

      let selected = available[JavaMath.floor(JavaMath.random() * available.length)];
      
      let spiritEntity = new Malum$SpiritItemEntity(
        level,
        player.getUuid(),
        Item.of("ftb:unrefined_spirit"),
        player.getX(),
        player.getY() + 3,
        player.getZ(),
        Math.random() * 2 - 1,
        Math.random() * 0.5,
        Math.random() * 2 - 1
      );

      level.addFreshEntity(spiritEntity);
      
      // Use slot-based removal for Malum Spirit Pouch inventory (SimpleContainer)
      inventory.removeItem(selected.slot, 1);
      selected.count--;
    }
  }
});

LHEngine.registerAction("spirit_attack", {
  execute: (player, action, context, event) => {
    // Credits to Leonariz for the original idea at https://discord.com/channels/303440391124942858/1314332696264048771/1314332696264048771
    const { entity, source, level, server } = event;
    if (!source?.actual || !source?.actual.isPlayer() || !entity.isLiving()) return
    if (source.toString().includes("indirectMagic")) return; // Prevent recursion

    let itemStack = context.itemStack;
    if (!itemStack || itemStack.id != "malum:spirit_pouch") return;

    let inventory = Malum$SpiritPouchItem.getInventory(itemStack);
    let spiritStacks = getSpiritStacks(inventory);
    if (spiritStacks.length === 0) return;

    let randomSpirit = spiritStacks[JavaMath.floor(Math.random() * spiritStacks.length)];
    inventory.removeItem(randomSpirit.slot, 1);

    Malum$SpiritHarvestHandler.spawnItemAsSpirit(Item.of(randomSpirit.stack.id), player, entity)

    entity.persistentData.spiritSourcePlayer = player.uuid.toString()
    let spellPowerAttr = player.getAttribute("irons_spellbooks:spell_power");
    let damage = (spellPowerAttr != null ? spellPowerAttr.getValue() : 0) + 3
    
    let spiritAttackAttempts = 0
    let spiritAttackMaxAttempts = 100
    server.scheduleInTicks(2, callback => {
        if (!entity.isAlive()) {
            callback.repeating = false
            return
        }
        spiritAttackAttempts++
        if (spiritAttackAttempts > spiritAttackMaxAttempts) {
            callback.repeating = false
            return
        }
        let spirits = level.getEntities().filter(e =>
            e.type == 'malum:natural_spirit' &&
            e.distanceToEntity(entity) < 1.5
        )

        if (spirits.length > 0) {
            spirits.forEach(s => s.discard())

            entity.attack(player.damageSources().indirectMagic(player, player), damage)
            entity.invulnerableTime = 0
            callback.repeating = false
            return;
        }
        callback.repeating = true
    })
  }
})

const getSpiritStacks = (inventory) => {
  let size = inventory.getContainerSize();
  let spiritStacks = [];

  for (let i = 0; i < size; i++) {
    let stack = inventory.getItem(i);
    if (stack && !stack.isEmpty() && stack.id != "ftb:unrefined_spirit") {
      spiritStacks.push({
        slot: i,
        stack: stack,
        count: stack.getCount()
      });
    }
  }
  return spiritStacks;
}

const DEBUFFS_MOBS = ["minecraft:slowness", "minecraft:wither", "minecraft:poison"];

const BUFFS_PLAYER = ["minecraft:regeneration", "minecraft:strength"];

const LittleHelperLookAt = (player, littleHelper, lookAtPlayer) => {
  let target = lookAtPlayer ? player : (findLastAttackedByPlayer(player) ?? player.getLastAttacker());
  if (target == null) return;

  let pos = target.getBlock().offset(0, 1, 0);
  littleHelper.lookAt("EYES", pos);
  return littleHelper;
};

const findLastAttackedByPlayer = (player) => {
  let entities = player.level.getEntitiesOfClass(
    Minecraft$Mob,
    player.getBoundingBox().inflate(20),
    (e) => e.getLastHurtByMob() != null && e.getLastHurtByMob().getUuid().equals(player.getUuid())
  );
  if (entities.isEmpty()) return null;
  return entities.getFirst();
};

const castSpell = (player, caster, spellId, level) => {
  try {
    let actualRegistry = IronsSpellbooks$SpellRegistry.REGISTRY.get();
    let spellObj = actualRegistry.getValue(spellId);
    if (spellObj == null) {
      spellObj = IronsSpellbooks$SpellRegistry.none();
    }
    let magicData = IronsSpellbooks$MagicData.getPlayerMagicData(player);
    spellObj.onCast(player.getLevel(), level, caster, IronsSpellbooks$CastSource.COMMAND, magicData);
    return true;
  } catch (e) {
    console.error("[FTB LH] Spell cast failed: " + e);
    return false;
  }
};


LHEngine.registerAction("spawn_particles", {
  execute: (player, action, context) => {
    let particleType = action.particle || "minecraft:end_rod"; 
    
    const {resolveValue} = LHEngine;
    let count = resolveValue(action.count, context) || 15;
    let speed = resolveValue(action.speed, context) || 0.1;
    let dx = resolveValue(action.dx, context) || 0.5;
    let dy = resolveValue(action.dy, context) || 0.5;
    let dz = resolveValue(action.dz, context) || 0.5;

    let yPos = player.getY() + 1.0; 

    player.level.spawnParticles(
      particleType,
      false, 
      player.getX(), 
      yPos, 
      player.getZ(), 
      dx, dy, dz, 
      count, 
      speed
    );
  }
});
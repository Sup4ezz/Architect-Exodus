//   $FTBLH$CompanionEngine.evaluate(player, "dimension_enter", {
//     requiredPreviousDimension: fromDim,
//     requiredTargetDimension: toDim,
//   });

//   //Hel is FTB Bases so we need to check this here
//   if (String(toDim).indexOf("private_for") !== -1) {
//     player.getServer().scheduleInTicks(20, (callback) => {
//       FTBLittleHelper.show(player);
//       //    FTBLittleHelper.message(player, Text.translatable("ftb.little_helper.welcome"), 100);
//       player.getPersistentData()["lh_hel_active"] = true;
//     });
//   }
// });

// ── Event Handlers ────────────────────────────────────────────────────────

PlayerEvents.respawned((event) => {
  let player = event.player;
  if (!player || player.isFake()) return;

  player.getServer().scheduleInTicks(20, (callback) => {
    FTBLittleHelper.show(player);
    FTBLittleHelper.isActive(player);

    LHEngine.processTrigger(player, "player_respawn", event);

    let saved = player.getPersistentData()["ftblh_saved_attributes"];
    if (saved != null) {
      LHEngine.getSkillAttributeIds().forEach((attrId) => {
        let value = saved[attrId];
        if (value != null && value > 0) {
          player.setAttributeBaseValue(attrId, value);
        }
      });
      player.getPersistentData().remove("ftblh_saved_attributes");
    }
  });
});

NativeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", (event) => {
  let entity = event.getEntity();
  if (!entity.isPlayer()) return;
  let player = entity;

  let toDim = event.getDimension();
  if (toDim == null) return;
  let fromDim = player.getLevel().dimension;
  if (fromDim == null) return;

  //Hel is FTB Bases so we need to check this here
  if (String(toDim).indexOf("private_for") !== -1) {
    player.getServer().scheduleInTicks(20, (callback) => {
      FTBLittleHelper.show(player);
      //    FTBLittleHelper.message(player, Text.translatable("ftb.little_helper.welcome"), 100);
      player.getPersistentData()["lh_hel_active"] = true;
      LHEngine.processTrigger(player, "dimension_changed", event);
    });
  } else {
    LHEngine.processTrigger(player, "dimension_changed", event);
  }
});

EntityEvents.hurt((event) => {
  if (event.getLevel().isClientSide()) return;
  let player = event.getSource().actual;
  if (player == null || !player.isPlayer()) return;
  if (player.isFake()) return;
  if (player.getUuid().equals(event.entity.getUuid())) return;
  LHEngine.processTrigger(player, "player_attack", event);
});

// Use LivingDamageEvent (post-reduction, after cancels) so hurt-triggered
// behaviors (shockwave, frost_hex, serpents_gift, ...) only fire when the
// player actually takes damage — not on canceled or fully-absorbed hits.
NativeEvents.onEvent("net.minecraftforge.event.entity.living.LivingDamageEvent", (event) => {
  let player = event.getEntity();
  if (player == null || !player.isPlayer() || player.isFake()) return;

  let source = event.getSource();
  if (source == null) return;
  let actual = source.getActual();
  if (actual && actual.isPlayer()) return;

  if (event.getAmount() <= 0) return;

  LHEngine.processTrigger(player, "player_hurt", event);
});

EntityEvents.death((event) => {
  let level = event.getLevel();
  if (level == null || level.isClientSide()) return;

  let source = event.source;
  let player = source.getActual();
  if (!player || !player.isPlayer() || player.isFake()) return;
  LHEngine.processTrigger(player, "player_kill", event);
});

EntityEvents.death("minecraft:player", (event) => {
  let player = event.entity;
  if (!player || player.isFake()) return;

  // Try death defiance first - if it triggers, cancel the death event
  if (LHEngine.processTrigger(player, "player_death", event)) {
    event.cancel();
    return;
  }

  // Death defiance didn't fire - save skill attributes so they survive respawn
  let saved = {};
  LHEngine.getSkillAttributeIds().forEach((attrId) => {
    let attr = player.getAttribute(attrId);
    if (attr != null && attr.getBaseValue() > 0) {
      saved[attrId] = attr.getBaseValue();
    }
  });
  player.getPersistentData()["ftblh_saved_attributes"] = saved;
});

PlayerEvents.tick((event) => {
  const { player, server } = event;
  let tick = server.getTickCount();
  if (tick % 20 != 0) return;
  if (player.isFake() || !player.isAlive()) return;
  LHEngine.processTrigger(player, "low_health", event);
  LHEngine.processTrigger(player, "mob_nearby", event);

  const dayCycleDims = ["minecraft:overworld", "ftb:asgard", "ftb:jotunheim", "mythicbotany:alfheim"];
  if (dayCycleDims.includes(player.level.getDimension().toString())) {
    let daytime = player.level.getDayTime() % 24000;
    // Range checks span 20 ticks to match the sampling interval — exact equality would almost always miss
    if (daytime >= 13000 && daytime < 13040) {
      LHEngine.processTrigger(player, "new_night", event);
    }
    if (daytime >= 23200 && daytime < 23240) {
      LHEngine.processTrigger(player, "new_day", event);
    }
  };

  // Idle dialogue — checks every 30s. Fires "idle" after threshold_ticks of inactivity, then repeats every interval_ticks.
  if (tick % 600 == 0) {
    let lastAction = player.getLastActionTime();
    let playerPos = `${Math.floor(player.x)},${Math.floor(player.y)},${Math.floor(player.z)}`;
    let playerData = player.getPersistentData();

    if (playerData["lh_last_action_tick"] == null || lastAction !== playerData["lh_last_action_tick"] || playerPos !== playerData["lh_last_playerPos"]) {
      playerData["lh_last_action_tick"] = lastAction;
      playerData["lh_last_playerPos"] = playerPos;
      playerData["lh_idle_start_tick"] = tick;
      //player.tell(`Player active — resetting idle timer.`);
    } else {
      let idleStart = playerData["lh_idle_start_tick"];
      if (idleStart == null) {
        playerData["lh_idle_start_tick"] = tick;
      } else {
        let elapsed = tick - idleStart;
        //player.tell(`Player idle for ${elapsed} ticks.`);
        if (elapsed >= CONFIG.idle.threshold_ticks) {
          LHEngine.processTrigger(player, "idle", event);
          playerData["lh_idle_start_tick"] = tick - CONFIG.idle.threshold_ticks + CONFIG.idle.interval_ticks;
        }
      }
    }
  }

  // Ambient dialogue every ~60 seconds
  if (tick % 1200 == 0) {
    LHEngine.processTrigger(player, "periodic", event);
  }

  // Auto-hide LH during fdbosses boss fights (Geburah, Chesed, Malkuth).
  // LH gets caught in boss mechanics (chains, AoEs, "sin" trackers for
  // judgement_bird). Checked every 40 ticks. Flag stored on persistent data
  // so we don't fight the user's manual /lh hide/show toggles.
  if (tick % 40 == 0) {
    let aabb = player.getBoundingBox().inflate(64);
    let nearbyBoss = player.level.getEntitiesOfClass(Minecraft$Mob, aabb, (e) => {
      if (!e.isAlive()) return false;
      let type = String(e.getType());
      return type === "fdbosses:geburah" || type === "fdbosses:chesed" || type === "fdbosses:malkuth";
    });
    let pd = player.getPersistentData();
    let hasBoss = !nearbyBoss.isEmpty();
    let wasAutoHidden = pd["lh_auto_hidden_for_arena"] === 1;
    if (hasBoss && !wasAutoHidden) {
      FTBLittleHelper.getHelperEntity(player).ifPresent((lh) => lh.setStaysShown(false));
      pd["lh_auto_hidden_for_arena"] = 1;
    } else if (!hasBoss && wasAutoHidden) {
      FTBLittleHelper.show(player);
      pd["lh_auto_hidden_for_arena"] = 0;
    }
  }
});

PlayerEvents.tick((event) => {
  const { player, server } = event;
  if (server.getTickCount() % 20 != 0) return;
  if (player == null || player.isFake() || !player.isAlive()) return;
  let stages = [];
  player.stages.getAll().forEach((stage) => stages.push(stage.toString()));
  server.scheduleInTicks(20, (callback) => {
    let newstages = [];
    player.stages.getAll().forEach((stage) => newstages.push(stage.toString()));
    if (stages.length < newstages.length) {
      LHEngine.processTrigger(player, "stage_added", event, {
        newStage: newstages.find((stage) => !stages.includes(stage)),
      });
    }
    if (stages.length > newstages.length) {
      LHEngine.processTrigger(player, "stage_removed", event, {
        removedStage: stages.find((stage) => !newstages.includes(stage)),
      });
    }
  });
});

BlockEvents.placed((event) => {
  let player = event.player;
  if (player == null || player.isFake()) return;
  //console.log("Block Placed");
  LHEngine.processTrigger(player, "block_placed", event);
});

BlockEvents.broken((event) => {
  let player = event.player;
  if (player == null || player.isFake()) return;
  //console.log("Block Broken");
  LHEngine.processTrigger(player, "block_broken", event);
});

const LH$PrevTickEdibleUse = {};

PlayerEvents.tick((event) => {
  const player = event.player;
  if (player == null || player.isFake() || !player.isAlive()) return;

  const uuid = player.getStringUuid();
  const prev = LH$PrevTickEdibleUse[uuid] === true;
  const useItem = player.getUseItem();
  const isUsingEdible = useItem != null && !useItem.isEmpty() &&
                        useItem.getItem().isEdible() && player.isUsingItem();

  if (prev && !isUsingEdible) {
    LHEngine.processTrigger(player, "food_consumed", event);
  }

  LH$PrevTickEdibleUse[uuid] = isUsingEdible;
});

PlayerEvents.loggedOut((event) => {
  if (event.player != null) {
    delete LH$PrevTickEdibleUse[event.player.getStringUuid()];
  }
});

// ── FTB Exodus Boss Events ──────────────────────────────────────────────────
// Each listener adds a stage to nearby players so the existing boss tip
// definitions in definitions.js fire via the "stage_added" trigger.

const bossEventBase = "dev.ftb.mods.ftbragnarok.event.RagnarokBossEvent$";

const addBossStageToNearbyPlayers = (event, boss, stage) => {
  let level = event.getLevel();
  if (level == null || level.isClientSide()) return;
  if (boss == null) return;
  let aabb = boss.getBoundingBox().inflate(100);
  let players = level.getEntitiesOfClass(Minecraft$Player, aabb, (p) => !p.isSpectator());
  players.forEach((player) => {
    player.stages.add(stage);
  });
};

// Hel
NativeEvents.onEvent(bossEventBase + "HelSpawned", (event) => {
  let hel = event.getHel();
  if (hel == null) return;
  hel.getLevel().getServer().scheduleInTicks(240, (callback) => {
    addBossStageToNearbyPlayers(event, hel, "boss_hel_active");
  });
});
NativeEvents.onEvent(bossEventBase + "HelCloneSpawned", (event) => {
  addBossStageToNearbyPlayers(event, event.getHel(), "boss_hel_mirrors");
});

// Ymir
NativeEvents.onEvent(bossEventBase + "YmirSpawned", (event) => {
  let ymir = event.getYmir();
  if (ymir == null) return;
  ymir.getLevel().getServer().scheduleInTicks(240, (callback) => { // Pending VO timing
    addBossStageToNearbyPlayers(event, ymir, "boss_ymir_active");
  });
});
NativeEvents.onEvent(bossEventBase + "YmirStomp", (event) => {
  addBossStageToNearbyPlayers(event, event.getYmir(), "boss_ymir_stomp");
});

// Jormungandr
NativeEvents.onEvent(bossEventBase + "JormungandrSpawned", (event) => {
  let jormungandr = event.getJormungandr();
  if (jormungandr == null) return;
  jormungandr.getLevel().getServer().scheduleInTicks(300, (callback) => {
    addBossStageToNearbyPlayers(event, jormungandr, "boss_jormungandr_active");
  });
});
NativeEvents.onEvent(bossEventBase + "JormungandrSubmerged", (event) => {
  addBossStageToNearbyPlayers(event, event.getJormungandr(), "boss_jormungandr_submerge");
});

// Surtr
NativeEvents.onEvent(bossEventBase + "SurtrSpawned", (event) => {
  let surtr = event.getSurtr();
  if (surtr == null) return;
  surtr.getLevel().getServer().scheduleInTicks(240, (callback) => {
    addBossStageToNearbyPlayers(event, event.getSurtr(), "boss_surtr_active");
  });
});
NativeEvents.onEvent(bossEventBase + "SurtrInfernoArmor", (event) => {
  addBossStageToNearbyPlayers(event, event.getSurtr(), "boss_surtr_armor");
});

// Skoll & Hati
NativeEvents.onEvent(bossEventBase + "SkollHatiSpawned", (event) => {
  let skoll = event.getSkoll();
  if (skoll == null) return;
  skoll.getLevel().getServer().scheduleInTicks(120, (callback) => { // Pending VO timing
    addBossStageToNearbyPlayers(event, skoll, "boss_skoll_hati_active");
  });
});
NativeEvents.onEvent(bossEventBase + "SkollHatiLeap", (event) => {
  addBossStageToNearbyPlayers(event, event.getBoss(), "boss_skoll_hati_pin");
});

// Nidhogg
NativeEvents.onEvent(bossEventBase + "NidhoggSpawned", (event) => {
  let nidhogg = event.getNidhogg();
  if (nidhogg == null) return;
  nidhogg.getLevel().getServer().scheduleInTicks(300, (callback) => {
    addBossStageToNearbyPlayers(event, nidhogg, "boss_nidhogg_active");
  });
});
NativeEvents.onEvent(bossEventBase + "NidhoggFireBreath", (event) => {
  addBossStageToNearbyPlayers(event, event.getNidhogg(), "boss_nidhogg_fireresist");
});

// Cancel IS-spell damage from little-helper casts against exempt targets
// (passive animals, Occultism spirits, team pets). Narrow scope: only when
// the attacker UUID is currently marked by the spell action (see
// companion_actions.js), so manual player spell casts are unaffected.
NativeEvents.onEvent("net.minecraftforge.event.entity.living.LivingAttackEvent", (event) => {
  let source = event.getSource();
  if (source == null) return;
  let attacker = source.getActual();
  if (attacker == null) return;

  let getUuid = attacker.getUuid;
  if (getUuid == null) return;
  let attackerUuid = attacker.getUuid();
  if (attackerUuid == null) return;

  let casterUuidStr = LHEngine.getActiveSpellCasterOwner(attackerUuid.toString());
  if (casterUuidStr == null) return;

  let target = event.getEntity();
  if (target == null) return;
  if (target.getLevel().isClientSide()) return;

  let casterPlayer = target.getLevel().getServer().getPlayerList().getPlayer(Java$UUID.fromString(casterUuidStr));
  if (casterPlayer == null) return;

  if ($LH$isExemptTarget(casterPlayer, target)) {
    event.setCanceled(true);
  }
});

// ── Dialogue Configuration ─────────────────────────────────────────────────
// Centralised tuning values for each dialogue section.
// Change a value here and every definition in that section updates.

const CONFIG = {

  // One-time lore lines & dimension arrival reactions
  lore: {
    duration: 200,
    cooldown:  0,
    priority: 100
  },

  // Boss mechanic tip lines (triggered by stage gain)
  boss_tips: {
    duration: 200,
    cooldown: 300,
    priority: 90
  },

  // Periodic dimension-specific ambient lines (Hel, Jotunheim, etc.)
  dim_ambient: {
    chance:   5,
    duration: 150,
    cooldown: 24000,
    priority: 100
  },

  // Conditional ambient lines (building, eating, mining, general periodic)
  ambient: {
    chance:   1,
    duration: 150,
    cooldown: 36000,
    priority: 100
  },

  // Day / night transition lines (fired on new_day / new_night events)
  day_night: {
    chance:   1,
    duration: 160,
    cooldown: 10,
    priority: 100
  },

  // Idle dialogue — firing frequency is controlled by the handler;
  // threshold_ticks / interval_ticks must match the consts in little_helper_handler.js
  idle: {
    threshold_ticks: 6000,   // 5 min  — inactivity before idle dialogue becomes active
    interval_ticks:  12000,  // 10 min — minimum gap between idle dialogue fires
    duration: 160,
    priority:  0
  }

};

const definitions = [

  // ── Skills ──────────────────────────────────────────────────────────────
  {
    "id": "lh_spirit_shield",
    "displayName": "Spirit Shield",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_spirit_shield", "requiredDamageType": "arrow", "chance": 100 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:shield", "level": 1, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.spirit_shield.1", "ftb.little_helper.skill.spirit_shield.2"], "duration": 80 }
    ],
    "cooldown": 20,
    "priority": 100
  },
  {
    "id": "lh_soul_heal",
    "displayName": "Soul Heal",
    "trigger": "low_health",
    "conditions": { "skill": "ftb:lh_soul_heal", "currentHp": 30, "chance": 80 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:heal", "level": { "perRank": 3 }, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.soul_heal.1", "ftb.little_helper.skill.soul_heal.2", "ftb.little_helper.skill.soul_heal.3"], "duration": 60 }
    ],
    "cooldown": 400,
    "priority": 20
  },
  {
    "id": "lh_spectral_phase",
    "displayName": "Oakskin",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_spectral_phase", "chance": 25 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:oakskin", "level": { "perRank": 2 }, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.oakskin.1", "ftb.little_helper.skill.oakskin.2"], "duration": 40 }
    ],
    "cooldown": 900,
    "priority": 14
  },
  {
    "id": "lh_spirit_release_hurt",
    "displayName": "Spirit Release (Hurt)",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_spirit_release", "item": "malum:spirit_pouch", "chance": 25 },
    "actions": [
      { "type": "spirit_release" },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.spirit_release.1", "ftb.little_helper.skill.spirit_release.2"], "duration": 60 }
    ],
    "cooldown": 300,
    "priority": 6
  },
  {
    "id": "lh_spirit_release_attack",
    "displayName": "Spirit Release (Attack)",
    "trigger": "player_attack",
    "conditions": { "skill": "ftb:lh_spirit_attack", "item": "malum:spirit_pouch", "chance": 25 },
    "actions": [
      { "type": "spirit_attack" },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.spirit_release.1", "ftb.little_helper.skill.spirit_release.2"], "duration": 60 }
    ],
    "cooldown": 0,
    "priority": 6
  },
  {
    "id": "lh_frost_aura",
    "displayName": "Frost Aura",
    "trigger": "mob_nearby",
    "conditions": { "skill": "ftb:lh_frost_aura", "requiredNearbyMobType": "*", "requiredNearbyMobDistance": 8, "chance": 25 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:frostwave", "level": { "perRank": 1 }, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.frost_aura.1", "ftb.little_helper.skill.frost_aura.2"], "duration": 60 }
    ],
    "cooldown": 1200,
    "priority": 8
  },
  {
    "id": "lh_frost_hex",
    "displayName": "Frost Hex",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_frost_hex", "chance": 30 },
    "actions": [
      { "type": "random_debuff_nearby", "range": 8, "duration": { "perRank": 60 }, "amplifier": 1 },
      { "type": "dialogue_random",  "repeat": false, "langKeys": ["ftb.little_helper.skill.frost_hex.1", "ftb.little_helper.skill.frost_hex.2"], "duration": 60 }
    ],
    "cooldown": 400,
    "priority": 11
  },
  {
    "id": "lh_shockwave",
    "displayName": "Shockwave",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_shockwave", "requiredNearbyMobType": "*", "requiredNearbyMobDistance": 4, "chance": 100 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:gust", "level": { "perRank": 1 } },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.shockwave.1", "ftb.little_helper.skill.shockwave.2"], "duration": 60 }
    ],
    "cooldown": 1200,
    "priority": 12
  },
  {
    "id": "lh_serpents_gift",
    "displayName": "Serpent's Gift",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_serpents_gift", "chance": 25 },
    "actions": [
      { "type": "random_buff_self", "duration": { "perRank": 100 }, "amplifier": 0 },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.serpents_gift.1", "ftb.little_helper.skill.serpents_gift.2"], "duration": 60 }
    ],
    "cooldown": 400,
    "priority": 10
  },
  {
    "id": "lh_tidal_pull",
    "displayName": "Tidal Pull",
    "trigger": "player_attack",
    "conditions": { "skill": "ftb:lh_tidal_pull", "chance": 20 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:black_hole", "level": { "perRank": 1 }, self_cast: true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.tidal_pull.1", "ftb.little_helper.skill.tidal_pull.2"], "duration": 60 }
    ],
    "cooldown": 400,
    "priority": 9
  },
  {
    "id": "lh_inferno_armor",
    "displayName": "Inferno Armor",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_inferno_armor", "chance": 30 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:fortify", "level": { "perRank": 2 }, "self_cast": true },
      { "type": "buff", "effect": "minecraft:fire_resistance", "duration": { "perRank": 100 }, "amplifier": 0 },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.inferno_armor.1", "ftb.little_helper.skill.inferno_armor.2"], "duration": 60 }
    ],
    "cooldown": 300,
    "priority": 13
  },
  {
    "id": "lh_heat_surge",
    "displayName": "Heat Surge",
    "trigger": "low_health",
    "conditions": { "skill": "ftb:lh_heat_surge", "currentHp": 25, "chance": 50 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:heat_surge", "level": { "perRank": 2 }, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.heat_surge.1", "ftb.little_helper.skill.heat_surge.2"], "duration": 60 }
    ],
    "cooldown": 300,
    "priority": 18
  },
  {
    "id": "lh_fire_ward",
    "displayName": "Fire Ward",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_fire_ward", "requiredDamageType": "onFire" },
    "actions": [
      { "type": "buff", "effect": "minecraft:fire_resistance", "duration": { "perRank": 100 }, "amplifier": 0 },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.fire_ward.1", "ftb.little_helper.skill.fire_ward.2"], "duration": 60 }
    ],
    "cooldown": 400,
    "priority": 14
  },
  {
    "id": "lh_shadow_step",
    "displayName": "Shadow Step",
    "trigger": "player_hurt",
    "conditions": { "skill": "ftb:lh_shadow_step", "chance": 25 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:blood_step", "level": { "perRank": 2 }, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.shadow_step.1", "ftb.little_helper.skill.shadow_step.2"], "duration": 40 }
    ],
    "cooldown": 500,
    "priority": 10
  },
  {
    "id": "lh_eclipse_strike",
    "displayName": "Eclipse Strike",
    "trigger": "player_attack",
    "conditions": { "skill": "ftb:lh_eclipse_strike", "chance": 20 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:echoing_strikes", "level": { "perRank": 2 }, "self_cast": true },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.eclipse_strike.1", "ftb.little_helper.skill.eclipse_strike.2"], "duration": 60 }
    ],
    "cooldown": 600,
    "priority": 10
  },
  {
    "id": "lh_blood_needles",
    "displayName": "Blood Needles",
    "trigger": "player_attack",
    "conditions": { "skill": "ftb:lh_blood_needles", "chance": 25 },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:blood_needles", "level": { "perRank": 2 } },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.blood_needles.1", "ftb.little_helper.skill.blood_needles.2"], "duration": 40 }
    ],
    "cooldown": 300,
    "priority": 8
  },
  {
    "id": "lh_soul_devour",
    "displayName": "Soul Devour",
    "trigger": "player_kill",
    "conditions": { "skill": "ftb:lh_soul_devour" },
    "actions": [
      { "type": "spell", "spell": "irons_spellbooks:blessing_of_life", "level": { "perRank": 3 }, "target": "player" },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.soul_devour.1", "ftb.little_helper.skill.soul_devour.2"], "duration": 40 }
    ],
    "cooldown": 100,
    "priority": 5
  },
  {
    "id": "lh_death_defiance",
    "displayName": "Death Defiance",
    "trigger": "player_death",
    "conditions": { "skill": "ftb:lh_death_defiance", "chance": 100 },
    "actions": [
      { "type": "cancel_death" },
      { "type": "knockback", "strength": 5, "verticalStrength": 0.8, "range": 16 },
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.skill.death_defiance.1", "ftb.little_helper.skill.death_defiance.2"], "duration": 60 }
    ],
    "cooldown": 1200,
    "priority": 100
  },
  {
    "id": "lh_dim_safety_net",
    "displayName": "Dimensional Safety Net",
    "trigger": "dimension_changed",
    "conditions": { "requiredDimension": "private_for", "chance": 100 },
    "actions": [
      { "type": "buff", "effect": "minecraft:resistance", "duration": 4, "amplifier": 4 },
      { "type": "knockback", "strength": 20, "verticalStrength": 0.8, "range": 16 },
    ],
    "cooldown": 1,
    "priority": 100
  },

  // ── Respawn Safety Nets ──────────────────────────────────────────────────
  {
    "id": "lh_respawn_text",
    "displayName": "Respawn Text",
    "trigger": "player_respawn",
    "conditions": { "chance": 100, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "buff", "effect": "minecraft:resistance", "duration": 4, "amplifier": 4 },
      { "type": "knockback", "strength": 20, "verticalStrength": 2.0, "range": 16 },
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.player_death.1",
        "ftb.little_helper.player_death.2",
        "ftb.little_helper.player_death.3",
        "ftb.little_helper.player_death.4",
        "ftb.little_helper.player_death.5",
        "ftb.little_helper.player_death.6",
        "ftb.little_helper.player_death.7",
        "ftb.little_helper.player_death.8",
        "ftb.little_helper.player_death.9",
        "ftb.little_helper.player_death.10"
      ], "duration": 120 }
    ],
    "cooldown": 1,
    "priority": 101
  },
  {
    "id": "lh_respawn_safety_net",
    "displayName": "Respawn Safety Net",
    "trigger": "player_respawn",
    "conditions": { "chance": 100 },
    "actions": [
      { "type": "buff", "effect": "minecraft:resistance", "duration": 4, "amplifier": 4 },
      { "type": "knockback", "strength": 20, "verticalStrength": 2.0, "range": 16 },
    ],
    "cooldown": 1,
    "priority": 100
  },

  // ── Dialogue: First Meeting ──────────────────────────────────────────────
  {
    "id": "lh_first_meeting",
    "displayName": "First Meeting",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "met_lh" },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.first_meeting"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.first_meeting" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": 100
  },

  // ── Dialogue: Dimension Arrival Reactions (one-time) ────────────────────
  {
    "id": "lh_react_helheim",
    "displayName": "React: Helheim",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "lh_react_helheim", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.react_helheim"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.react_helheim" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_react_jotunheim",
    "displayName": "React: Jotunheim",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "lh_react_jotunheim", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.react_jotunheim"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.react_jotunheim" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_react_niflheim",
    "displayName": "React: Niflheim",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "lh_react_niflheim", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.react_niflheim"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.react_niflheim" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_react_muspelheim",
    "displayName": "React: Muspelheim",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "lh_react_muspelheim", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.react_muspelheim"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.react_muspelheim" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_react_midgard",
    "displayName": "React: Midgard",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "lh_react_midgard", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.react_midgard"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.react_midgard" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_react_asgard",
    "displayName": "React: Asgard",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "lh_react_asgard", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.react_asgard"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.react_asgard" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },

  // ── Dialogue: Dimension-Specific Ambient (periodic) ──────────────────────
  {
    "id": "lh_ambient_hel",
    "displayName": "Ambient: Hel",
    "trigger": "periodic",
    "conditions": { "requiredDimension": "private_for", "chance": CONFIG.dim_ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.hel_bones",
        "ftb.little_helper.ambient.hel_shadows",
        "ftb.little_helper.ambient.hel_cold",
        "ftb.little_helper.ambient.hel_spirits",
        "ftb.little_helper.ambient.hel_quiet"
      ], "duration": CONFIG.dim_ambient.duration }
    ],
    "cooldown": CONFIG.dim_ambient.cooldown,
    "priority": CONFIG.dim_ambient.priority
  },
  {
    "id": "lh_ambient_jotunheim",
    "displayName": "Ambient: Jotunheim",
    "trigger": "periodic",
    "conditions": { "requiredDimension": "jotunheim", "chance": CONFIG.dim_ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.jotunheim_cold",
        "ftb.little_helper.ambient.jotunheim_giants",
        "ftb.little_helper.ambient.jotunheim_mist",
        "ftb.little_helper.ambient.jotunheim_sounds",
        "ftb.little_helper.ambient.jotunheim_size"
      ], "duration": CONFIG.dim_ambient.duration }
    ],
    "cooldown": CONFIG.dim_ambient.cooldown,
    "priority": CONFIG.dim_ambient.priority
  },
  {
    "id": "lh_ambient_niflheim",
    "displayName": "Ambient: Niflheim",
    "trigger": "periodic",
    "conditions": { "requiredDimension": "niflheim", "chance": CONFIG.dim_ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.niflheim_quiet",
        "ftb.little_helper.ambient.niflheim_shapes",
        "ftb.little_helper.ambient.niflheim_smell",
        "ftb.little_helper.ambient.niflheim_dark",
        "ftb.little_helper.ambient.niflheim_lost"
      ], "duration": CONFIG.dim_ambient.duration }
    ],
    "cooldown": CONFIG.dim_ambient.cooldown,
    "priority": CONFIG.dim_ambient.priority
  },
  {
    "id": "lh_ambient_muspelheim",
    "displayName": "Ambient: Muspelheim",
    "trigger": "periodic",
    "conditions": { "requiredDimension": "muspelheim", "chance": CONFIG.dim_ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.muspelheim_lava",
        "ftb.little_helper.ambient.muspelheim_sky",
        "ftb.little_helper.ambient.muspelheim_ash",
        "ftb.little_helper.ambient.muspelheim_creatures",
        "ftb.little_helper.ambient.muspelheim_heat"
      ], "duration": CONFIG.dim_ambient.duration }
    ],
    "cooldown": CONFIG.dim_ambient.cooldown,
    "priority": CONFIG.dim_ambient.priority
  },
  {
    "id": "lh_ambient_midgard",
    "displayName": "Ambient: Midgard",
    "trigger": "periodic",
    "conditions": { "requiredDimension": "overworld", "chance": CONFIG.dim_ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.midgard_flowers",
        "ftb.little_helper.ambient.midgard_birds",
        "ftb.little_helper.ambient.midgard_wind",
        "ftb.little_helper.ambient.midgard_green",
        "ftb.little_helper.ambient.midgard_animals"
      ], "duration": CONFIG.dim_ambient.duration }
    ],
    "cooldown": CONFIG.dim_ambient.cooldown,
    "priority": CONFIG.dim_ambient.priority
  },
  {
    "id": "lh_ambient_asgard",
    "displayName": "Ambient: Asgard",
    "trigger": "periodic",
    "conditions": { "requiredDimension": "asgard", "chance": CONFIG.dim_ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.asgard_ruins",
        "ftb.little_helper.ambient.asgard_gold",
        "ftb.little_helper.ambient.asgard_islands",
        "ftb.little_helper.ambient.asgard_valkyries",
        "ftb.little_helper.ambient.asgard_sky"
      ], "duration": CONFIG.dim_ambient.duration }
    ],
    "cooldown": CONFIG.dim_ambient.cooldown,
    "priority": CONFIG.dim_ambient.priority
  },

  // ── Dialogue: Idle (time-based, fired by handler) ────────────────────────
  {
    "id": "lh_idle",
    "displayName": "Idle",
    "trigger": "idle",
    "conditions": { "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.idle_1",
        "ftb.little_helper.ambient.idle_2",
        "ftb.little_helper.ambient.idle_3"
      ], "duration": CONFIG.idle.duration }
    ],
    "cooldown": 0,
    "priority": CONFIG.idle.priority
  },

  // ── Dialogue: General Ambient (periodic, no dimension filter) ────────────
  {
    "id": "lh_ambient_general",
    "displayName": "Ambient: General",
    "trigger": "periodic",
    "conditions": { "chance": 3, "hasStages": ["lh_tips"] },  // chance: 3% intentionally lower than CONFIG.ambient
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.shiny",
        "ftb.little_helper.ambient.look",
        "ftb.little_helper.ambient.noise",
        "ftb.little_helper.ambient.sky",
        "ftb.little_helper.ambient.sneeze"
      ], "duration": CONFIG.ambient.duration }
    ],
    "cooldown": CONFIG.ambient.cooldown,
    "priority": 1
  },

  // ── Dialogue: Conditional Ambients ──────────────────────────────────────
  {
    "id": "lh_ambient_building",
    "displayName": "Ambient: Building",
    "trigger": "block_placed",
    "conditions": { "chance": CONFIG.ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.building_1",
        "ftb.little_helper.ambient.building_2",
        "ftb.little_helper.ambient.building_3"
      ], "duration": CONFIG.ambient.duration }
    ],
    "cooldown": CONFIG.ambient.cooldown,
    "priority": CONFIG.ambient.priority
  },
  {
    "id": "lh_ambient_eating",
    "displayName": "Ambient: Eating",
    "trigger": "food_consumed",
    "conditions": { "chance": CONFIG.ambient.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.food_1",
        "ftb.little_helper.ambient.food_2",
        "ftb.little_helper.ambient.food_3"
      ], "duration": CONFIG.ambient.duration }
    ],
    "cooldown": CONFIG.ambient.cooldown,
    "priority": CONFIG.ambient.priority
  },
  {
    "id": "lh_ambient_mining",
    "displayName": "Ambient: Mining",
    "trigger": "block_broken",
    "conditions": { "chance": 8, "hasStages": ["lh_tips"] },  // chance: 8 intentionally lower than CONFIG.ambient
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.mining_1",
        "ftb.little_helper.ambient.mining_2",
        "ftb.little_helper.ambient.mining_3"
      ], "duration": CONFIG.ambient.duration }
    ],
    "cooldown": CONFIG.ambient.cooldown,
    "priority": CONFIG.ambient.priority
  },
  {
    "id": "lh_ambient_day",
    "displayName": "Ambient: New Day",
    "trigger": "new_day",
    "conditions": { "chance": CONFIG.day_night.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.day_1",
        "ftb.little_helper.ambient.day_2",
        "ftb.little_helper.ambient.day_3"
      ], "duration": CONFIG.day_night.duration }
    ],
    "cooldown": CONFIG.day_night.cooldown,
    "priority": CONFIG.day_night.priority
  },
  {
    "id": "lh_ambient_night",
    "displayName": "Ambient: New Night",
    "trigger": "new_night",
    "conditions": { "chance": CONFIG.day_night.chance, "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": true, "langKeys": [
        "ftb.little_helper.ambient.night_1",
        "ftb.little_helper.ambient.night_2",
        "ftb.little_helper.ambient.night_3"
      ], "duration": CONFIG.day_night.duration }
    ],
    "cooldown": CONFIG.day_night.cooldown,
    "priority": CONFIG.day_night.priority
  },

  // ── Dialogue: Boss Tips (one-time, on stage) ─────────────────────────────
  {
    "id": "lh_tip_hel_intro",
    "displayName": "Tip: Hel Intro",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_hel_active", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.hel_intro"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.hel_intro" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_tip_hel_mirrors",
    "displayName": "Tip: Hel Mirrors",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_hel_mirrors", "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.hel_mirrors"], "duration": CONFIG.boss_tips.duration, "sound": "ftb:narration.hel_mirrors" }
    ],
    "cooldown": CONFIG.boss_tips.cooldown,
    "priority": CONFIG.boss_tips.priority
  },
  {
    "id": "lh_tip_ymir_intro",
    "displayName": "Tip: Ymir Intro",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_ymir_active", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.ymir_intro"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.ymir_intro" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_tip_ymir_stomp",
    "displayName": "Tip: Ymir Stomp",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_ymir_stomp", "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.ymir_stomp"], "duration": CONFIG.boss_tips.duration, "sound": "ftb:narration.ymir_stomp" }
    ],
    "cooldown": CONFIG.boss_tips.cooldown,
    "priority": CONFIG.boss_tips.priority
  },
  {
    "id": "lh_tip_jormungandr_intro",
    "displayName": "Tip: Jormungandr Intro",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_jormungandr_active", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.jormungandr_intro"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.jormungandr_intro" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_tip_jormungandr_submerge",
    "displayName": "Tip: Jormungandr Submerge",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_jormungandr_submerge", "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.jormungandr_submerge"], "duration": CONFIG.boss_tips.duration, "sound": "ftb:narration.jormungandr_submerge" }
    ],
    "cooldown": CONFIG.boss_tips.cooldown,
    "priority": CONFIG.boss_tips.priority
  },
  {
    "id": "lh_tip_surtur_intro",
    "displayName": "Tip: Surtr Intro",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_surtr_active", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.surtur_intro"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.surtur_intro" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_tip_surtur_armor",
    "displayName": "Tip: Surtr Armor",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_surtr_armor", "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.surtur_armor"], "duration": CONFIG.boss_tips.duration, "sound": "ftb:narration.surtur_armor" }
    ],
    "cooldown": CONFIG.boss_tips.cooldown,
    "priority": CONFIG.boss_tips.priority
  },
  {
    "id": "lh_tip_wolves_intro",
    "displayName": "Tip: Skoll & Hati Intro",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_skoll_hati_active", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.wolves_intro"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.wolves_intro" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_tip_wolves_pin",
    "displayName": "Tip: Skoll & Hati Pin",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_skoll_hati_pin", "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.wolves_pin"], "duration": CONFIG.boss_tips.duration, "sound": "ftb:narration.wolves_pin" }
    ],
    "cooldown": CONFIG.boss_tips.cooldown,
    "priority": CONFIG.boss_tips.priority
  },
  {
    "id": "lh_tip_nidhogg_intro",
    "displayName": "Tip: Nidhoggr Intro",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_nidhogg_active", "hasStages": ["lh_lore"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.nidhogg_intro"], "duration": CONFIG.lore.duration, "sound": "ftb:narration.nidhogg_intro" }
    ],
    "cooldown": CONFIG.lore.cooldown,
    "priority": CONFIG.lore.priority
  },
  {
    "id": "lh_tip_nidhogg_fireresist",
    "displayName": "Tip: Nidhoggr Fire Resist",
    "trigger": "stage_added",
    "conditions": { "gainedStage": "boss_nidhogg_fireresist", "hasStages": ["lh_tips"] },
    "actions": [
      { "type": "dialogue_random", "repeat": false, "langKeys": ["ftb.little_helper.voice_over.lore.nidhogg_fireresist"], "duration": CONFIG.boss_tips.duration, "sound": "ftb:narration.nidhogg_fireresist" }
    ],
    "cooldown": CONFIG.boss_tips.cooldown,
    "priority": CONFIG.boss_tips.priority
  }
]

LHEngine.registerBehaviors(definitions);
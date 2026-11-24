// priority: 999

const STAGES = {
  JOTUNHEIM:       { stage: "jotunheim_stage",     langKey: "ftb.tooltip.gated.item.dimension.jotunheim" },
  JOTUNHEIM_MOD:   { stage: "jotunheim_stage",     langKey: "ftb.tooltip.gated.mod.dimension.jotunheim" },
  NIFLHEIM:        { stage: "niflheim_stage",      langKey: "ftb.tooltip.gated.item.dimension.niflheim" },
  NIFLHEIM_MOD:    { stage: "niflheim_stage",      langKey: "ftb.tooltip.gated.mod.dimension.niflheim" },
  MUSPELHEIM:      { stage: "muspelheim_stage",    langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
  MUSPELHEIM_MOD:  { stage: "muspelheim_stage",    langKey: "ftb.tooltip.gated.mod.dimension.muspelheim" },
  MIDGARD:         { stage: "midgard_stage",       langKey: "ftb.tooltip.gated.item.dimension.midgard" },
  MIDGARD_MOD:     { stage: "midgard_stage",       langKey: "ftb.tooltip.gated.mod.dimension.midgard" },
  BIFROST:         { stage: "bifrost_stage",       langKey: "ftb.tooltip.gated.item.dimension.bifrost" },
  BIFROST_MOD:     { stage: "bifrost_stage",       langKey: "ftb.tooltip.gated.mod.dimension.bifrost" },
  HEL_MAZE:        { stage: "hel_maze_completed",  langKey: "ftb.tooltip.gated.item.hel_maze" },
  BOSS_HEL_KILLED: { stage: "boss_hel_killed",     langKey: "ftb.tooltip.gated.item.bifrost_key" },
  DISABLED:        { stage: "disabled",            langKey: "ftb.tooltip.disabled" },
};

const DEV_BYPASS = false; // Set to true to bypass all staging restrictions

const BASE_DEFAULTS = {
  restrictItem: true,
  canAttack: false,
  canEquip: false,
  canLeftClick: false,
  canRightClick: false,
  canBlockInteract: false,
  canMine: true,
  canPickUp: false,
  hideJEI: false,
  devBypass: DEV_BYPASS,
  includeRecipes: [],
  ignoreRecipes: [],
  ignoreItems: [],
};

/** Merges BASE_DEFAULTS + stage constant + optional overrides into a defaults object. */
function defaults(stageConst, overrides) {
  return Object.assign({}, BASE_DEFAULTS, stageConst, overrides);
}

/** Creates a staged mod entry from a stage constant + optional extra fields. */
function mod(id, stageConst, extra) {
  return Object.assign({ mod: id, stage: stageConst.stage, langKey: stageConst.langKey }, extra);
}

global.stagedMods = [
  mod("projectexpansion", STAGES.MIDGARD),
];

// Each group specifies only what differs from BASE_DEFAULTS.
let stagedGroups = {
  actuallyAdditions: {
    defaults: defaults(STAGES.JOTUNHEIM),
    items: [
      { item: "actuallyadditions:iron_casing" },
      { item: "actuallyadditions:black_quartz" }
    ]
  },

  ae2: {
    defaults: defaults(STAGES.JOTUNHEIM),
    items: [
      { item: "ae2:controller" },
      { item: "ae2:crystal_resonance_generator" },
      { item: "ae2:energy_acceptor" },

      { item: "ae2wtlib:quantum_bridge_card", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      { item: "expatternprovider:wireless_connect", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      
      { item: "appliede:emc_interface", stage: "midgard_stage", langKey: "ftb.tooltip.gated.mod.dimension.midgard" },
      { item: "expatternprovider:circuit_slicer", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" },
      { item: "ae2:crafting_card", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" }
    ],
    tags: [],
  },

  animus: {
    defaults: defaults(STAGES.NIFLHEIM),
    items: [
      { item: "animus:spear_bound" },
      { item: "animus:blood_infused_spellbook", stage: "bifrost_stage", langKey: "ftb.tooltip.gated.item.dimension.bifrost" },
      { item: "animus:hellforged_bow", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      { item: "animus:diabolical_fungi", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" },
      { item: "animus:hand_of_death", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" },
    ],
    tags: [],
  },

  apotheosis: {
    defaults: defaults(STAGES.MUSPELHEIM),
    items: [
      { item: "apotheosis:augmenting_table" },
    ]
  },

  ars_nouveau: {
    defaults: defaults(STAGES.NIFLHEIM),
    items: [
      { item: "ars_nouveau:novice_spell_book", stage: "hel_maze_completed", langKey: "ftb.tooltip.gated.item.novice_spell_book" },
      { item: "ars_nouveau:archmage_spell_book" },
      { item: "ars_nouveau:mob_jar" },
      { item: "ars_nouveau:warp_scroll", stage: "muspelheim_stage", restrictItem: false, langKey: "ftb.tooltip.gated.item.dimension.muspelheim" }
    ],
    tags: [],
  },

  bloodmagic: {
    defaults: defaults(STAGES.NIFLHEIM),
    items: [
      { item: "bloodmagic:masterbloodorb" },
      { item: "bloodmagic:alchemicalreactionchamber"},
    ],
    tags: [],
  },

  botania: {
    defaults: defaults(STAGES.MIDGARD),
    items: [
      { item: "botania:pure_daisy" },
    ],
    tags: [
      { tag: "botania:petals", hideJEI: true }
    ],
  },

  create: {
    defaults: defaults(STAGES.MIDGARD),
    items: [
      { item: "create:item_drain", stage: "hel_maze_completed", langKey: "ftb.tooltip.gated.item.hel_maze" },
      {
        item: "create:andesite_alloy",
        includeRecipes: [
          { type: "enderio:alloy_smelting", id: "ftb:enderio/alloy_smelting/andesite_alloy_from_zinc" },
          { type: "enderio:alloy_smelting", id: "ftb:enderio/alloy_smelting/andesite_alloy" },
          { type: "thermal:smelter",        id: "ftb:thermal/smelter/simple/andesite_alloy_from_zinc" },
          { type: "thermal:smelter",        id: "ftb:thermal/smelter/simple/andesite_alloy" },
          { type: "minecraft:crafting",     id: "create:crafting/materials/andesite_alloy" },
          { type: "minecraft:crafting",     id: "create:crafting/materials/andesite_alloy_from_zinc" },
        ],
      },
      { item: "create:cart_assembler" },
    ],
    tags: [
      { tag: "create:su_generators" },
    ],
  },

  draconicevolution: {
    defaults: defaults(STAGES.MIDGARD, { stage: "draconic_stage", langKey: "ftb.tooltip.gated.item.draconicevolution.chestpiece" } ),
    items: [
      { item: "draconicevolution:wyvern_chestpiece" },
      { item: "draconicevolution:draconic_chestpiece" },
      { item: "draconicevolution:chaotic_chestpiece" },
    ],
    tags: [],
  },

  enchanted: {
    defaults: defaults(STAGES.MIDGARD),
    items: [
      { item: "enchanted:mutandis_extremis" },
    ],
    tags: [],
  },

  enderio: {
    defaults: defaults(STAGES.JOTUNHEIM_MOD),
    items: [
      { item: "enderio:grains_of_infinity", includeRecipes: [{ type: "enderio:fire_crafting", id: "enderio:fire_crafting/infinity" }] },
      { item: "enderio:dark_steel_ingot", langKey: "ftb.tooltip.gated.item.dimension.jotunheim", includeRecipes: [{ type: "tconstruct:alloying", id: "ftb:tconstruct/alloying/dark_steel" }] },
      { item: "enderio:conduit_binder_composite" },
      { item: "enderio:crafter", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" }
    ],
    tags: [],
  },

  fluxnetworks: {
    defaults: defaults(STAGES.MIDGARD_MOD),
    items: [
      { item: "fluxnetworks:flux_dust" },
      { item: "fluxnetworks:flux_point" },
    ],
    tags: [],
  },

  ftb: {
    defaults: defaults(STAGES.BOSS_HEL_KILLED),
    items: [
      { item: "ftbpc:action_pad", includeRecipes: [{ type: "malum:spirit_infusion", id: "ftb:spirit_infusion/action_pad" }] },
      { item: "ftb:draconic_ember", stage: "asgard_stage", restrictItem: false, langKey: "ftb.tooltip.gated.item.draconic_ember", includeRecipes: [
        { type: "iceandfire:dragonforge", id: "ftb:dragonforge/ice/draconic_ember" },
        { type: "iceandfire:dragonforge", id: "ftb:dragonforge/lightning/draconic_ember" },
        { type: "iceandfire:dragonforge", id: "ftb:dragonforge/fire/draconic_ember" }
      ]},
    ],
    tags: [],
  },

  iceandfire: {
    defaults: defaults(STAGES.MUSPELHEIM),
    items: [
      { item: "iceandfire:dragonsteel_ice_ingot" },
      { item: "iceandfire:dragonsteel_lightning_ingot" },
      { item: "iceandfire:dragonsteel_fire_ingot" },
      { item: "thermal_extra:dragonsteel_ingot" },

    ],
    tags: [],
  },

  integrateddynamics: {
    defaults: defaults(STAGES.JOTUNHEIM, { langKey: "ftb.tooltip.gated.item.id_automation", hideJEI: true }),
    items: [
      { item: "integrateddynamics:variable_transformer_output" },
      { item: "integrateddynamics:variable_transformer_input" },
      { item: "integrateddynamics:portable_logic_programmer" },
      { item: "integrateddynamics:logic_programmer", hideJEI: false },
      { item: "integrateddynamics:variable", hideJEI: false },
    ],
    tags: [
      { tag: "integrateddynamics:parts", ignoreItems: ["integratedtunnels:part_interface_item", "integratedterminals:part_terminal_storage"] },
    ],
  },

  irons_spellbooks: {
    defaults: defaults(STAGES.NIFLHEIM),
    items: [],
    tags: [
      { tag: "irons_spellbooks:upgrade_orbs" }
    ],
  },

  minecraft: {
    defaults: defaults(STAGES.BIFROST),
    items: [
      { item: "minecraft:cobblestone", stage: "hel_maze_completed", langKey: "ftb.tooltip.gated.item.hel_maze", includeRecipes: [{ type: "minecraft:crafting", id: "ftb:mysticalagriculture/cobblestone" }] },

      { item: "minecraft:grass_block" },
      { item: "minecraft:stone" },
      { item: "minecraft:deepslate" },
      { item: "minecraft:ghast_tear" },
      { item: "minecraft:pointed_dripstone", includeRecipes: [{ type: "minecraft:crafting", id: "ftb:mysticalagriculture/pointed_dripstone" }] },
      { item: "minecraft:dripstone_block", includeRecipes: [{ type: "minecraft:crafting", id: "ftb:mysticalagriculture/dripstone_block" }] },
      { item: "minecraft:tuff", includeRecipes: [{ type: "minecraft:crafting", id: "ftb:mysticalagriculture/tuff" }] },
      { item: "minecraft:gold_ingot" },
      { item: "minecraft:gold_block" },
      { item: "minecraft:gold_nugget" },
      { item: "minecraft:diamond", includeRecipes: [{ type: "enderio:sag_milling", id: "enderio:sag_milling/coal_ore" }] },
      { item: "minecraft:diamond_block" },
      { item: "minecraft:emerald" },
      { item: "minecraft:emerald_block" },

      { item: "minecraft:blaze_powder", includeRecipes: [{ type: "lychee:item_inside", id: "ftb:lychee/item_inside/minecraft/blaze_powder" }] },

      { item: "minecraft:nether_star" },
      { item: "minecraft:netherite_ingot", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      { item: "minecraft:netherite_block", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      { item: "minecraft:netherite_scrap", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      { item: "minecraft:ancient_debris", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
      { item: "minecraft:wither_skeleton_skull" },
      { item: "minecraft:blaze_rod", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim" },
    ],
    tags: [],
  },

  megacells: {
    defaults: defaults(STAGES.JOTUNHEIM),
    items: [
      { item: "megacells:sky_steel_ingot" },
      { item: "megacells:decompression_pattern", hideJEI: true },
    ]
  },


  mysticalagriculture: {
    defaults: defaults(STAGES.MIDGARD, { hideJEI: true }),
    items: [
      { item: "mysticalagriculture:prosperity_seed_base", hideJEI: false },
    ],
    tags: [
      { tag: "mysticalagriculture:seeds", 
        ignoreItems: [
          "mysticalagriculture:dye_seeds",
        ]
      },
      {
        tag: "mysticalagriculture:essences", 
        ignoreItems: [
          "mysticalagriculture:air_essence",
          "mysticalagriculture:dirt_essence",
          "mysticalagriculture:earth_essence",
          "mysticalagriculture:fire_essence",
          "mysticalagriculture:nature_essence",
          "mysticalagriculture:stone_essence",
          "mysticalagriculture:water_essence",
          "mysticalagriculture:dye_essence",
        ],
      },
    ],
  },

  powah: {
    defaults: defaults(STAGES.JOTUNHEIM, { langKey: "ftb.tooltip.gated.tier.dimension.jotunheim" }),
    items: [
      { item: "powah:energizing_orb", langKey: "ftb.tooltip.gated.item.dimension.jotunheim" },
      { item: "powah:steel_energized" },
      { item: "powah:crystal_blazing" },
      { item: "powah:crystal_niotic" },
      { item: "powah:crystal_spirited", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.tier.dimension.muspelheim" },
      { item: "powah:crystal_nitro", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.tier.dimension.muspelheim" },
      { item: "powah:uraninite", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.powah_reactors" },
      { item: "powah:reactor_starter", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.powah_reactors" },
    ],
    tags: [
      { tag: "forge:ores/uraninite", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard", hideJEI: true },
      { tag: "ftb:powah_staging/reactors", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.powah_reactors", ignoreItems: ["powah:reactor_starter"], hideJEI: true },
      { tag: "ftb:powah_staging/others", hideJEI: true },
      { tag: "ftb:powah_staging/starter", ignoreItems: ["powah:thermo_generator_starter", "powah:energy_cell_starter", "powah:energy_cable_starter", "powah:reactor_starter"], hideJEI: true },
      { tag: "ftb:powah_staging/basic", ignoreItems: ["powah:thermo_generator_basic", "powah:energy_cell_basic", "powah:energy_cable_basic", "powah:reactor_basic"], hideJEI: true },
      { tag: "ftb:powah_staging/hardened", ignoreItems: ["powah:reactor_hardened", "powah:steel_energized"], hideJEI: true },
      { tag: "ftb:powah_staging/blazing", ignoreItems: ["powah:reactor_blazing", "powah:crystal_blazing"], hideJEI: true },
      { tag: "ftb:powah_staging/niotic", ignoreItems: ["powah:reactor_niotic", "powah:crystal_niotic"], hideJEI: true },
      { tag: "ftb:powah_staging/spirited", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim", ignoreItems: ["powah:reactor_spirited", "powah:crystal_spirited"], hideJEI: true },
      { tag: "ftb:powah_staging/nitro", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim", ignoreItems: ["powah:reactor_nitro", "powah:crystal_nitro"], hideJEI: true },
    ],
  },

  projecte: {
    defaults: defaults(STAGES.MUSPELHEIM),
    items: [
      { item: "projecte:relay_mk2", stage: "bifrost_stage", langKey: "ftb.tooltip.gated.item.dimension.bifrost" },
      
      { item: "projecte:transmutation_table" },
      { item: "projecte:condenser_mk2" },
      { item: "projecte:collector_mk3" },
      { item: "projecte:relay_mk3" },
      
      { item: "projecte:dark_matter" },
      { item: "projecte:red_matter" },
      { item: "projectexpansion:magenta_matter", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.pexpansion_matters" },
      { item: "projectexpansion:magenta_fuel", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.pexpansion_fuels" },
      { item: "projecte:transmutation_tablet", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" },
      { item: "projectexpansion:transmutation_interface", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard" },
    ],
    tags: [
        { tag: "projectexpansion:matter", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.pexpansion_matters", hideJEI: true, ignoreItems: ["projectexpansion:magenta_matter"] },
        { tag: "projectexpansion:fuel", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.pexpansion_fuels", hideJEI: true, ignoreItems: ["projectexpansion:magenta_fuel"] },
    ],
  },

  reliquary: {
    defaults: defaults(STAGES.MUSPELHEIM),
    items: [
      { item: "reliquary:molten_core" },
    ],
    tags: [],
  },

  rftools: {
    defaults: defaults(STAGES.MIDGARD),
    items: [
      { item: "rftoolsbase:dimensionalshard", stage: "jotunheim_stage", langKey: "ftb.tooltip.gated.mod.dimension.jotunheim" },
      { item: "rftoolsutility:crafter1" },
      { item: "rftoolsutility:crafter2" },
      { item: "rftoolsutility:crafter3" }
    ],
    tags: [],
  },

  sfm: {
    defaults: defaults(STAGES.MIDGARD),
    items: [
      { item: "sfm:manager" },
      { item: "sfm:printing_press" },
    ],
    tags: [],
  },

  sophCore: {
    defaults: defaults(STAGES.DISABLED),
    items: [
      { item: "sophisticatedbackpacks:magnet_upgrade" },
      { item: "sophisticatedbackpacks:advanced_magnet_upgrade" },
      { item: "sophisticatedstorage:magnet_upgrade" },
      { item: "sophisticatedstorage:advanced_magnet_upgrade" },
    ],
    tags: [],
  },

  thermal: {
    defaults: defaults(STAGES.JOTUNHEIM_MOD),
    items: [
      { item: "thermal:frost_melon_seeds", stage: "hel_maze_completed", langKey: "ftb.tooltip.gated.item.hel_maze"},
      { item: "thermal:machine_frame" },
      { item: "thermal:device_rock_gen", langKey: "ftb.tooltip.gated.item.dimension.jotunheim" },
      { item: "thermal:enderium_ingot", stage: "muspelheim_stage", langKey: "ftb.tooltip.gated.item.dimension.muspelheim", includeRecipes: [{ type: "tconstruct:alloying", id: "tconstruct:smeltery/alloys/molten_enderium"}] },
      { item: "thermal:machine_crafter", stage: "midgard_stage", langKey: "ftb.tooltip.gated.item.dimension.midgard"}
    ],
    tags: [],
  },

  woot: {
    defaults: defaults(STAGES.MUSPELHEIM_MOD),
    items: [
      { item: "woot_revived:stygian_dust" },
      { item: "bloodmagicwootaddon:blood_collector_upgrade", hideJEI: true },
    ],
    tags: [],
  },

  xycraft: {
    defaults: defaults(STAGES.MUSPELHEIM),
    items: [
      { item: "xycraft_machines:extractor" },
    ],
    tags: [],
  },
};

Object.keys(stagedGroups).forEach(function(key) {
  global.stagedItems[key] = stagedGroups[key];
});

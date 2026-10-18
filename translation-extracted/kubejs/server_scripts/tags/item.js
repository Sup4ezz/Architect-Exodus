const addItemTags = [
  {
    tagName: "industrialforegoing:laser_lens",
    itemIDs: [
      "industrialforegoing:laser_lens0",
      "industrialforegoing:laser_lens1",
      "industrialforegoing:laser_lens2",
      "industrialforegoing:laser_lens3",
      "industrialforegoing:laser_lens4",
      "industrialforegoing:laser_lens5",
      "industrialforegoing:laser_lens6",
      "industrialforegoing:laser_lens7",
      "industrialforegoing:laser_lens8",
      "industrialforegoing:laser_lens9",
      "industrialforegoing:laser_lens10",
      "industrialforegoing:laser_lens11",
      "industrialforegoing:laser_lens12",
      "industrialforegoing:laser_lens13",
      "industrialforegoing:laser_lens14",
      "industrialforegoing:laser_lens15",
    ],
  },
  {
    tagName: "minecraft:signs",
    itemIDs: ["malum:runewood_sign", "malum:soulwood_sign"],
  },
  {
    tagName: "ftb:any_dragonsteel",
    itemIDs: [
      "iceandfire:dragonsteel_fire_ingot",
      "iceandfire:dragonsteel_lightning_ingot",
      "iceandfire:dragonsteel_ice_ingot",
    ],
  },
  {
    tagName: "ftb:dragons_blood",
    itemIDs: [
      "iceandfire:fire_dragon_blood",
      "iceandfire:ice_dragon_blood",
      "iceandfire:lightning_dragon_blood",
    ],
  },
  {
    tagName: "ae2:sky_stone_blocks",
    itemIDs: ["ae2:sky_stone_block", "ae2:smooth_sky_stone_block", "ae2:sky_stone_brick", "ae2:sky_stone_small_brick"],
  },
  {
    tagName: "ae2:lumen_paint_balls",
    itemIDs: [
      "ae2:white_lumen_paint_ball",
      "ae2:orange_lumen_paint_ball",
      "ae2:magenta_lumen_paint_ball",
      "ae2:light_blue_lumen_paint_ball",
      "ae2:yellow_lumen_paint_ball",
      "ae2:lime_lumen_paint_ball",
      "ae2:pink_lumen_paint_ball",
      "ae2:gray_lumen_paint_ball",
      "ae2:light_gray_lumen_paint_ball",
      "ae2:cyan_lumen_paint_ball",
      "ae2:cyan_lumen_paint_ball",
      "ae2:purple_lumen_paint_ball",
      "ae2:blue_lumen_paint_ball",
      "ae2:brown_lumen_paint_ball",
      "ae2:green_lumen_paint_ball",
      "ae2:red_lumen_paint_ball",
      "ae2:black_lumen_paint_ball",
    ],
  },
  {
    tagName: "enderio:default_clear_glass",
    itemIDs: [
      "enderio:clear_glass",
      "enderio:clear_glass_white",
      "enderio:clear_glass_orange",
      "enderio:clear_glass_magenta",
      "enderio:clear_glass_light_blue",
      "enderio:clear_glass_yellow",
      "enderio:clear_glass_lime",
      "enderio:clear_glass_pink",
      "enderio:clear_glass_gray",
      "enderio:clear_glass_light_gray",
      "enderio:clear_glass_cyan",
      "enderio:clear_glass_purple",
      "enderio:clear_glass_blue",
      "enderio:clear_glass_brown",
      "enderio:clear_glass_green",
      "enderio:clear_glass_red",
      "enderio:clear_glass_black",
    ],
  },
  {
    tagName: "enderio:default_fused_quartz",
    itemIDs: [
      "enderio:fused_quartz",
      "enderio:fused_quartz_white",
      "enderio:fused_quartz_orange",
      "enderio:fused_quartz_magenta",
      "enderio:fused_quartz_light_blue",
      "enderio:fused_quartz_yellow",
      "enderio:fused_quartz_lime",
      "enderio:fused_quartz_pink",
      "enderio:fused_quartz_gray",
      "enderio:fused_quartz_light_gray",
      "enderio:fused_quartz_cyan",
      "enderio:fused_quartz_purple",
      "enderio:fused_quartz_blue",
      "enderio:fused_quartz_brown",
      "enderio:fused_quartz_green",
      "enderio:fused_quartz_red",
      "enderio:fused_quartz_black",
    ],
  },
  {
    tagName: "ftb:non_tinkers_slime_balls",
    itemIDs: [
      "industrialforegoing:pink_slime",
      "minecraft:slime_ball",
      "embers:adhesive",
      "actuallyadditions:rice_slimeball",
      "xycraft_machines:resin_ball",
      "malum:runic_sapball",
      "malum:cursed_sapball",
    ],
  },
  {
    tagName: "ftb:non_boarded_runewood_planks",
    itemIDs: [
      "malum:rustic_runewood_tiles",
      "malum:runewood_planks",
      "malum:vertical_runewood_planks",
      "malum:rustic_runewood_planks",
      "malum:vertical_rustic_runewood_planks",
      "malum:runewood_tiles",
    ],
  },
  {
    tagName: "ftb:non_boarded_soulwood_planks",
    itemIDs: [
      "malum:rustic_soulwood_tiles",
      "malum:soulwood_planks",
      "malum:vertical_soulwood_planks",
      "malum:rustic_soulwood_planks",
      "malum:vertical_rustic_soulwood_planks",
      "malum:soulwood_tiles",
    ],
  },
  {
    tagName: "quark:revertable_chests",
    itemIDs: ["ars_nouveau:archwood_chest"],
  },
  {
    tagName: "forge:gems/raw_scarlet_neodymium",
    itemIDs: ["alexscaves:raw_scarlet_neodymium"],
  },
  {
    tagName: "forge:gems/raw_azure_neodymium",
    itemIDs: ["alexscaves:raw_azure_neodymium"],
  },
  {
    tagName: "forge:slimeballs/magma",
    itemIDs: ["minecraft:magma_cream"],
  },
  {
    tagName: "forge:tools/hammers",
    itemIDs: ["embers:tinker_hammer"],
  },
  {
    tagName: "forge:deadcoral",
    itemIDs: [
      "minecraft:dead_brain_coral",
      "minecraft:dead_bubble_coral",
      "minecraft:dead_fire_coral",
      "minecraft:dead_horn_coral",
      "minecraft:dead_tube_coral",
      "minecraft:dead_brain_coral_block",
      "minecraft:dead_bubble_coral_block",
      "minecraft:dead_fire_coral_block",
      "minecraft:dead_horn_coral_block",
      "minecraft:dead_tube_coral_block",
    ],
  },
  {
    tagName: "ftb:apples",
    itemIDs: [
      "minecraft:apple",
      "minecraft:golden_apple",
      "minecraft:enchanted_golden_apple",
      "alexscaves:darkened_apple",
      "alexscaves:apple",
      "create:honeyed_apple",
      "tconstruct:jeweled_apple",
      "animus:blood_apple",
      "dungeonsdelight:sculk_apple",
      "dungeonsdelight:sculk_dogapple",
    ],
  },

  // Used for items that we want to make accessible early but not grindy later
  {
    tagName: "ftb:any_gold_ingot",
    itemIDs: ["minecraft:gold_ingot", "malum:cthonic_gold"],
  },
  {
    tagName: "ftb:any_gold_nugget",
    itemIDs: ["minecraft:gold_nugget", "malum:cthonic_gold_fragment"],
  },
  {
    tagName: "ftb:any_gold",
    itemIDs: ["minecraft:gold_ingot", "malum:cthonic_gold_fragment"],
  },
  {
    tagName: "ftb:tiny_coals",
    itemIDs: [
      "actuallyadditions:tiny_coal",
      "actuallyadditions:tiny_charcoal",
      "ftbmaterials:coal_tiny",
      "ftbmaterials:charcoal_tiny",
    ],
  },

  // Used for recipe corrections
  {
    tagName: "ftb:junk_shards",
    itemIDs: [
      "scraps:junk",
      "scraps:shard_bone",
      "scraps:shard_brick",
      "scraps:shard_flint",
      "quark:clear_shard",
      "scraps:shard_leather",
      "scraps:shard_paper",
      "scraps:shard_wood",
    ],
  },
  {
    tagName: "ftb:saplings/runewood",
    itemIDs: ["malum:runewood_sapling", "malum:azure_runewood_sapling"],
  },
  {
    tagName: "ftb:progression_stone",
    itemIDs: ["minecraft:cobblestone", "minecraft:blackstone"],
  },
  {
    tagName: "ftb:progression_furnace",
    itemIDs: ["minecraft:furnace", "quark:deepslate_furnace", "quark:blackstone_furnace"],
  },
  {
    tagName: "irons_spellbooks:holy_focus",
    itemIDs: ["bhc:red_heart"],
  },
  {
    tagName: "ftb:powah_staging/others",
    itemIDs: [
      "powah:energized_steel_block",
      "powah:steel_energized",
      "powah:ender_core",
      "powah:charged_snowball",
      "powah:aerial_pearl",
      "powah:player_aerial_pearl",
      "powah:blank_card",
      "powah:binding_card",
      "powah:binding_card_dim",
      "powah:photoelectric_pane",
    ],
  },
  {
    tagName: "ftb:powah_staging/reactors",
    itemIDs: ["powah:uraninite_raw", "powah:uraninite_block"],
  },
  {
    tagName: "ftb:ae2_staging/certus_quartz",
    itemIDs: ["ae2:small_quartz_bud", "ae2:medium_quartz_bud", "ae2:large_quartz_bud", "ae2:quartz_cluster"],
  },
  {
    tagName: "ftb:thermal_material",
    itemIDs: ["malum:blazing_quartz", "minecraft:blaze_powder"],
  },
  {
    tagName: "minecraft:brewing_stand_fuel",
    itemIDs: ["mysticalagriculture:fire_essence"],
  },
  {
    tagName: "forge:stone",
    itemIDs: ["minecraft:blackstone"],
  },
  {
    tagName: "forge:plates",
    itemIDs: ["malum:soul_stained_steel_plating"],
  },
  {
    tagName: "mysticalagriculture:seeds",
    itemIDs: ["mysticalagriculture:soulium_seed_base"],
  },
  {
    tagName: "ars_nouveau:magic_saplings",
    itemIDs: [
      "ars_nouveau:green_archwood_sapling",
      "ars_nouveau:red_archwood_sapling",
      "ars_elemental:yellow_archwood_sapling",
      "ars_nouveau:blue_archwood_sapling",
    ],
  },
  {
    tagName: "c:ingots/mithril",
    itemIDs: ["irons_spellbooks:mithril_ingot"],
  },
  {
    tagName: "integrateddynamics:parts",
    itemIDs: ["integratedterminals:terminal_storage_portable"],
  },
  {
    tagName: "curios:bifrost_key",
    itemIDs: ["ftbpc:action_pad"],
  },
  {
    tagName: "forge:ingots/black_steel",
    itemIDs: ["cataclysm:black_steel_ingot"],
  },
  {
    tagName: "forge:storage_blocks/black_steel",
    itemIDs: ["cataclysm:black_steel_block"],
  },
  {
    tagName: "forge:nuggets/black_steel",
    itemIDs: ["cataclysm:black_steel_nugget"],
  },
  {
    tagName: "forge:armors",
    itemIDs: ["malum:soul_hunter_cloak", "malum:soul_hunter_robe", "malum:soul_hunter_leggings", "malum:soul_hunter_boots", "malum:soul_stained_steel_helmet", "malum:soul_stained_steel_chestplate", "malum:soul_stained_steel_leggings", "malum:soul_stained_steel_boots", "malum:malignant_stronghold_helmet", "malum:malignant_stronghold_chestplate", "malum:malignant_stronghold_leggings", "malum:malignant_stronghold_boots"]
  },
  {
    tagName: "projecte:no_repair_talisman",
    itemIDs: ["bhc:red_heart_patch", "bhc:yellow_heart_patch", "bhc:green_heart_patch", "bhc:blue_heart_patch"],
  },
  {
    tagName: "animus:disallow_repair",
    itemIDs: ["bhc:red_heart_patch", "bhc:yellow_heart_patch", "bhc:green_heart_patch", "bhc:blue_heart_patch"],
  },
  {
    tagName: "minecraft:freeze_immune_wearables",
    itemIDs: [
      "iceandfire:forest_troll_leather_boots",
      "iceandfire:mountain_troll_leather_boots",
      "iceandfire:frost_troll_leather_boots",
    ],
  },
  {
    tagName: "translocators:regulate",
    itemIDs: ["ftbmaterials:copper_nugget"],
  },
  {
    tagName: "ftb:c_tier_swords",
    itemIDs: [
      "simplyswords:tainted_relic",
      "simplyswords:frostfall",
      "simplyswords:arcanethyst",
      "simplyswords:emberblade",
      "simplyswords:toxic_longsword",
      "simplyswords:shadowsting",
      "simplyswords:thunderbrand",
    ],
  },
  {
    tagName: "ftb:b_tier_swords",
    itemIDs: [
      "simplyswords:watching_warglaive",
      "simplyswords:soulstealer",
      "simplyswords:stormbringer",
      "simplyswords:caelestis",
      "simplyswords:twisted_blade",
      "simplyswords:icewhisper",
      "simplyswords:emberlash",
    ],
  },
  {
    tagName: "ftb:a_tier_swords",
    itemIDs: [
      "simplyswords:watcher_claymore",
      "simplyswords:molten_edge",
      "simplyswords:harbinger",
      "simplyswords:enigma",
      "simplyswords:livyatan",
      "simplyswords:magiscythe",
    ],
  },
  {
    tagName: "ftb:s_tier_swords",
    itemIDs: [
      "simplyswords:whisperwind",
      "simplyswords:stars_edge",
      "mythicbotany:mjoellnir",
      "simplyswords:brimstone_claymore",
      "simplyswords:soulrender",
    ],
  },
  {
    tagName: "botania:fated_items",
    itemIDs: [
      "botania:thor_ring",
      "botania:king_key",
      "botania:infinite_fruit",
      "botania:odin_ring",
      "botania:flugel_eye",
      "botania:loki_ring",
    ],
  },
  {
    tagName: "irons_spellbooks:upgrade_orbs",
    itemIDs: [
      "irons_spellbooks:cooldown_upgrade_orb",
      "irons_spellbooks:fire_upgrade_orb",
      "irons_spellbooks:lightning_upgrade_orb",
      "irons_spellbooks:nature_upgrade_orb",
      "irons_spellbooks:holy_upgrade_orb",
      "irons_spellbooks:blood_upgrade_orb",
      "irons_spellbooks:evocation_upgrade_orb",
      "irons_spellbooks:protection_upgrade_orb",
      "irons_spellbooks:ender_upgrade_orb",
      "irons_spellbooks:ice_upgrade_orb",
      "irons_spellbooks:mana_upgrade_orb",
    ],
  },
  {
    tagName: "lychee:fire_immune",
    itemIDs: [
      "minecraft:magma_block",
      "ars_nouveau:fire_essence",
      "ae2:certus_quartz_crystal",
      "ae2:charged_certus_quartz_crystal",
      "ftb:deepslate_dust",
      "ftb:blackstone_dust",
    ],
  },
  {
    tagName: "forge:dusts/blackstone",
    itemIDs: ["ftb:blackstone_dust"],
  },
  {
    tagName: "forge:gems/charged_certus_quartz",
    itemIDs: ["ae2:charged_certus_quartz_crystal"],
  },
  {
    tagName: "forge:dusts/deepslate",
    itemIDs: ["ftb:deepslate_dust"],
  },
  {
    tagName: "forge:ground/nether_mushrooms",
    itemIDs: ["wizards_reborn:ground_crimson_fungus", "wizards_reborn:ground_warped_fungus"],
  },
  {
    tagName: "ftb:emberlash_materials",
    itemIDs: ["bloodmagic:reagentlava", "thermal:signalum_ingot"],
  },
  {
    tagName: "ftb:caelestis_materials",
    itemIDs: ["ae2:fluix_crystal", "bloodmagic:reagentvoid"],
  },
  {
    tagName: "ftb:icewhisper_materials",
    itemIDs: ["block_factorys_bosses:ice_gauntlet", "mowziesmobs:ice_crystal"],
  },
  {
    tagName: "ftb:stormbringer_materials",
    itemIDs: ["powah:energized_steel_block", "animus:reagentstorm"],
  },
  {
    tagName: "ftb:soulstealer_materials",
    itemIDs: ["enderio:empty_soul_vial", "malum:void_salts"],
  },
  {
    tagName: "ftb:twisted_blade_materials",
    itemIDs: ["actuallyadditions:empowered_restonia_crystal", "occultism:afrit_essence"],
  },
  {
    tagName: "forge:rosin",
    itemIDs: ["ftb:arcane_rosin"],
  },
  {
    tagName: "embers:aspectus/dragonsteel",
    itemIDs: ["ftb:dragonsteel_aspectus"],
  },
  {
    tagName: "embers:aspectus/gaia",
    itemIDs: ["ftb:gaia_aspectus"],
  },
  {
    tagName: "embers:aspectus",
    itemIDs: ["ftb:dragonsteel_aspectus", "ftb:gaia_aspectus"],
  },
  {
    tagName: "malum:basic_trinkets",
    itemIDs: ["malum:gilded_ring", "malum:gilded_belt", "malum:ornate_ring", "malum:ornate_necklace"],
  },
  {
    tagName: "enchanted:seeds",
    itemIDs: [
      "enchanted:wolfsbane_seeds",
      "enchanted:snowbell_seeds",
      "enchanted:mandrake_seeds",
      "enchanted:belladonna_seeds",
      "enchanted:water_artichoke_seeds",
    ],
  },
  {
    tagName: "ae2:processors",
    itemIDs: ["ae2:logic_processor", "ae2:calculation_processor", "ae2:engineering_processor"],
  },
  {
    tagName: "ae2:addon_storage_buses",
    itemIDs: [
      "expatternprovider:tag_storage_bus",
      "expatternprovider:mod_storage_bus",
      "expatternprovider:precise_storage_bus",
    ],
  },
  {
    tagName: "ae2:crafting_storages",
    itemIDs: [
      "ae2:1k_crafting_storage",
      "ae2:4k_crafting_storage",
      "ae2:16k_crafting_storage",
      "ae2:64k_crafting_storage",
      "ae2:256k_crafting_storage",
    ],
  },
  {
    tagName: "ae2:storage_components",
    itemIDs: [
      "ae2:cell_component_1k",
      "ae2:cell_component_4k",
      "ae2:cell_component_16k",
      "ae2:cell_component_64k",
      "ae2:cell_component_256k",
    ],
  },
  {
    tagName: "ae2:item_storage_cells",
    itemIDs: [
      "ae2:item_storage_cell_1k",
      "ae2:item_storage_cell_4k",
      "ae2:item_storage_cell_16k",
      "ae2:item_storage_cell_64k",
      "ae2:item_storage_cell_256k",
    ],
  },
  {
    tagName: "ae2things:disk_drives",
    itemIDs: [
      "ae2things:disk_drive_1k",
      "ae2things:disk_drive_4k",
      "ae2things:disk_drive_16k",
      "ae2things:disk_drive_64k",
      "ae2things:disk_drive_256k",
    ],
  },
  {
    tagName: "enderio:conduits",
    itemIDs: [
      "enderio:energy_conduit",
      "enderio:fluid_conduit",
      "enderio:pressurized_fluid_conduit",
      "enderio:ender_fluid_conduit",
      "enderio:redstone_conduit",
      "enderio:item_conduit",
      "enderio:me_conduit",
      "enderio:dense_me_conduit",
    ],
  },
  {
    tagName: "ftb:chalks",
    itemIDs: [
      "occultism:chalk_white",
      "occultism:chalk_gold",
      "occultism:chalk_purple",
      "occultism:chalk_red",
      "occultengineering:chalk_copper",
      "occultengineering:chalk_zinc",
      "occultengineering:chalk_brass",
      "enchanted:golden_chalk",
      "enchanted:ritual_chalk",
      "enchanted:nether_chalk",
      "enchanted:otherwhere_chalk",
    ],
  },
  {
    tagName: "ftb:elemental_essences",
    itemIDs: [
      "mysticalagriculture:air_essence",
      "mysticalagriculture:earth_essence",
      "mysticalagriculture:water_essence",
      "mysticalagriculture:fire_essence",
    ],
  },
  {
    tagName: "botania:apothecary",
    itemIDs: [
      "botania:apothecary_default",
      "botania:apothecary_forest",
      "botania:apothecary_plains",
      "botania:apothecary_mountain",
      "botania:apothecary_fungal",
      "botania:apothecary_swamp",
      "botania:apothecary_desert",
      "botania:apothecary_taiga",
      "botania:apothecary_mesa",
      "botania:apothecary_mossy",
      "botania:apothecary_livingrock",
      "botania:apothecary_deepslate",
    ],
  },
  {
    tagName: "ftb:aesir_shards",
    itemIDs: [
      "ftb:ice_shard",
      "ftb:fire_shard",
      "ftb:nature_shard",
      "ftb:arcane_shard",
      "ftb:celestial_shard",
      "ftb:vampiric_shard",
      "ftb:null_shard",
    ],
  },
  {
    tagName: "ftb:aesir_gems",
    itemIDs: [
      "ftb:ice_gem",
      "ftb:fire_gem",
      "ftb:nature_gem",
      "ftb:arcane_gem",
      "ftb:celestial_gem",
      "ftb:vampiric_gem",
      "ftb:null_gem",
    ],
  },
  {
    tagName: "ftb:aesir_crystals",
    itemIDs: [
      "ftb:ice_crystal",
      "ftb:fire_crystal",
      "ftb:nature_crystal",
      "ftb:arcane_crystal",
      "ftb:celestial_crystal",
      "ftb:vampiric_crystal",
      "ftb:null_crystal",
    ],
  },
  {
    tagName: "ftb:realm_fragments",
    itemIDs: [
      "ftb:fragment_helheim",
      "ftb:fragment_jotunheim",
      "ftb:fragment_niflheim",
      "ftb:fragment_muspelheim",
      "ftb:fragment_midgard",
      "ftb:fragment_alfheim",
      "ftb:fragment_asgard",
    ],
  },
  {
    tagName: "ftb:surtr_summon_materials",
    itemIDs: [
      "bloodmagic:weakbloodshard",
      "ftb:empowered_netherite",
    ]
  },
  {
    tagName: "matc:tiered_crystal",
    itemIDs: ["matc:inferium_crystal", 
      "matc:prudentium_crystal", 
      "matc:tertium_crystal", 
      "matc:imperium_crystal"]
  },
  {
    tagName: "ftb:ashlord_drops",
    itemIDs: [
      "block_factorys_bosses:dragon_bone",
      "block_factorys_bosses:dragon_skull"
    ]
  },
  {
    tagName: "ftb:dragon_head",
    itemIDs: [
      "minecraft:dragon_head",
      "#iceandfire:dragon_skulls",
      "block_factorys_bosses:dragon_skull"
    ]
  }
];

const removeItemTags = [
  {
    tagName: "ftbultimine:excluded_tools",
    itemIDs: [
      "ars_nouveau:novice_spell_book",
      "ars_nouveau:apprentice_spell_book",
      "ars_nouveau:archmage_spell_book",
      "ars_nouveau:creative_spell_book",
    ],
  },
  {
    tagName: "minecraft:logs_that_burn",
    itemIDs: ["#malum:runewood_logs", "#malum:soulwood_logs"],
  },
  {
    tagName: "curios:curio",
    itemIDs: ["ftbpc:action_pad"],
  },
  {
    tagName: "malum:hidden_items/black_crystal",
    itemIDs: ["malum:fused_consciousness"]
  },
  {
    tagName: "malum:hidden_items/void",
    itemIDs: ["malum:fused_consciousness"]
  }
];

const powahStagingTags = {
  types: [
    "battery",
    "energy_cell",
    "ender_cell",
    "energy_cable",
    "ender_gate",
    "energizing_rod",
    "player_transmitter",
    "crystal",
    "energy_hopper",
    "energy_discharger",
    "furnator",
    "thermo_generator",
    "magmator",
    "reactor",
    "capacitor",
  ],
  tiers: ["starter", "basic", "hardened", "blazing", "niotic", "spirited", "nitro"],
  blacklist: ["capacitor_basic"],
};

const glyphTierTags = [
  {
    tagName: "ftb:glyph_tier_1",
    itemIDs: [
      "ars_nouveau:glyph_amplify",
      "ars_nouveau:glyph_bounce",
      "ars_nouveau:glyph_conjure_water",
      "ars_nouveau:glyph_craft",
      "ars_nouveau:glyph_crush",
      "ars_nouveau:glyph_cut",
      "ars_nouveau:glyph_delay",
      "ars_nouveau:glyph_dispel",
      "ars_nouveau:glyph_evaporate",
      "ars_nouveau:glyph_fell",
      "ars_nouveau:glyph_freeze",
      "ars_nouveau:glyph_gust",
      "ars_nouveau:glyph_harm",
      "ars_nouveau:glyph_harvest",
      "ars_nouveau:glyph_ignite",
      "ars_nouveau:glyph_interact",
      "ars_nouveau:glyph_launch",
      "ars_nouveau:glyph_leap",
      "ars_nouveau:glyph_light",
      "ars_nouveau:glyph_phantom_block",
      "ars_nouveau:glyph_pickup",
      "ars_nouveau:glyph_place_block",
      "ars_nouveau:glyph_projectile",
      "ars_nouveau:glyph_pull",
      "ars_nouveau:glyph_randomize",
      "ars_nouveau:glyph_redstone_signal",
      "ars_nouveau:glyph_reset",
      "ars_nouveau:glyph_rotate",
      "ars_nouveau:glyph_rune",
      "ars_nouveau:glyph_self",
      "ars_nouveau:glyph_sensitive",
      "ars_nouveau:glyph_snare",
      "ars_nouveau:glyph_summon_steed",
      "ars_nouveau:glyph_summon_wolves",
      "ars_nouveau:glyph_toss",
      "ars_nouveau:glyph_touch",
      "ars_nouveau:glyph_underfoot",
      "ars_nouveau:glyph_wololo",
      "ars_elemental:glyph_aerial_filter",
      "ars_elemental:glyph_aquatic_filter",
      "ars_elemental:glyph_conjure_terrain",
      "ars_elemental:glyph_fiery_filter",
      "ars_elemental:glyph_insect_filter",
      "ars_elemental:glyph_not_aerial_filter",
      "ars_elemental:glyph_not_aquatic_filter",
      "ars_elemental:glyph_not_fiery_filter",
      "ars_elemental:glyph_not_insect_filter",
      "ars_elemental:glyph_not_summon_filter",
      "ars_elemental:glyph_not_undead_filter",
      "ars_elemental:glyph_spark",
      "ars_elemental:glyph_summon_filter",
      "ars_elemental:glyph_undead_filter",
    ],
  },
  {
    tagName: "ftb:glyph_tier_2",
    itemIDs: [
      "ars_nouveau:glyph_accelerate",
      "ars_nouveau:glyph_animate_block",
      "ars_nouveau:glyph_aoe",
      "ars_nouveau:glyph_cold_snap",
      "ars_nouveau:glyph_dampen",
      "ars_nouveau:glyph_decelerate",
      "ars_nouveau:glyph_duration_down",
      "ars_nouveau:glyph_ender_inventory",
      "ars_nouveau:glyph_exchange",
      "ars_nouveau:glyph_explosion",
      "ars_nouveau:glyph_extend_time",
      "ars_nouveau:glyph_extract",
      "ars_nouveau:glyph_firework",
      "ars_nouveau:glyph_flare",
      "ars_nouveau:glyph_fortune",
      "ars_nouveau:glyph_gravity",
      "ars_nouveau:glyph_grow",
      "ars_nouveau:glyph_heal",
      "ars_nouveau:glyph_infuse",
      "ars_nouveau:glyph_invisibility",
      "ars_nouveau:glyph_name",
      "ars_nouveau:glyph_pierce",
      "ars_nouveau:glyph_sense_magic",
      "ars_nouveau:glyph_slowfall",
      "ars_nouveau:glyph_smelt",
      "ars_nouveau:glyph_wind_shear",
      "ars_elemental:glyph_arc_projectile",
      "ars_elemental:glyph_bubble_shield",
      "ars_elemental:glyph_charm",
      "ars_elemental:glyph_discharge",
      "ars_elemental:glyph_envenom",
      "ars_elemental:glyph_phantom_grasp",
      "ars_elemental:glyph_poison_spores",
      "ars_elemental:glyph_propagator_arc",
      "ars_elemental:glyph_spike",
      "ars_elemental:glyph_watery_grave",
      "starbunclemania:glyph_pickup_fluid",
      "starbunclemania:glyph_place_fluid",
    ],
  },
  {
    tagName: "ftb:glyph_tier_3",
    itemIDs: [
      "ars_nouveau:glyph_blink",
      "ars_nouveau:glyph_burst",
      "ars_nouveau:glyph_fangs",
      "ars_nouveau:glyph_glide",
      "ars_nouveau:glyph_hex",
      "ars_nouveau:glyph_intangible",
      "ars_nouveau:glyph_lightning",
      "ars_nouveau:glyph_linger",
      "ars_nouveau:glyph_orbit",
      "ars_nouveau:glyph_split",
      "ars_nouveau:glyph_summon_decoy",
      "ars_nouveau:glyph_summon_undead",
      "ars_nouveau:glyph_summon_vex",
      "ars_nouveau:glyph_wall",
      "ars_nouveau:glyph_wither",
      "ars_elemental:glyph_homing_projectile",
      "ars_elemental:glyph_life_link",
      "ars_elemental:glyph_propagator_homing",
    ],
  },
];

const ae2StagingTags = {
  types: ["sword", "pickaxe", "axe", "shovel", "hoe", "cutting_knife"],
  tiers: ["certus", "nether"],
};

const georeBuds = {
  resources: [
  "coal", "copper", "diamond", "emerald", "lead", "aluminum", 
  "monazite", "black_quartz", "uraninite", "zinc", "topaz",
  "sapphire", "ruby", "ancient_debris", "redstone", "quartz",
  "lapis", "iron", "gold", "nickel", "osmium", "platinum", 
  "silver", "tin", "tungsten", "uranium",
  "allthemodium", "unobtainium", "vibranium"
  ],
  size: ["small", "medium", "large"]
}

ServerEvents.tags("item", (event) => {
  addItemTags.forEach((tag) => {
    event.add(tag.tagName, tag.itemIDs);
  });

  removeItemTags.forEach((tag) => {
    event.remove(tag.tagName, tag.itemIDs);
  });

  powahStagingTags.types.forEach((type) => {
    powahStagingTags.tiers.forEach((tier) => {
      if (powahStagingTags.blacklist.includes(`${type}_${tier}`)) return;
      if (type === "reactor") {
        event.add(`ftb:powah_staging/reactors`, `powah:${type}_${tier}`);
      }
      event.add(`ftb:powah_staging/${tier}`, `powah:${type}_${tier}`);
      event.add(`ftb:powah_staging/${tier}`, `powah:${tier}_crystal_block`);
    });
  });

  glyphTierTags.forEach((tag) => {
    event.add(tag.tagName, tag.itemIDs);
  });

  ae2StagingTags.types.forEach((type) => {
    ae2StagingTags.tiers.forEach((tier) => {
      event.add(`ftb:ae2_staging/hel_gear`, `ae2:${tier}_quartz_${type}`);
    });
  });

  georeBuds.resources.forEach((resource) => {
    georeBuds.size.forEach((size) => {
      let item = `geore:${size}_${resource}_bud`
      event.removeAllTagsFrom(item)
      event.add("c:hidden_from_recipe_viewers", item)
    })
});
});

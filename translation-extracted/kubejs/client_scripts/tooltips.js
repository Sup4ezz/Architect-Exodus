// Tooltip Script
const addToolTips = [
  {
    items: ["ftbpc:action_pad"],
    lines: [Text.translate("ftb.tooltip.action_pad")],
  },
  {
    items: ["enchanted:taglock_kit"],
    lines: [Text.translate("ftb.tooltip.taglock_kit")],
  },
  {
    items: ["minecraft:wither_rose"],
    lines: [Text.translate("tooltip.barter_from_piglins")],
  },
  {
    items: ["minecraft:amethyst_shard"],
    lines: [Text.translate("tooltip.natural_generation")],
  },
  {
    items: [
      "bhc:red_heart",
      "bhc:yellow_heart",
      "bhc:green_heart",
      "bhc:blue_heart",
    ],
    lines: [Text.translate("ftb.tooltip.bifrost_tradeable.cleric")],
  },
  {
    items: ["bhc:red_heart"],
    lines: [Text.translate("ftb.tooltip.gateway_drop")],
  },
  {
    items: ["minecraft:brewing_stand"],
    lines: [Text.translate("ftb.tooltip.brewing_stand_fuel")],
  },
  {
    items: ["bloodmagic:soulgempetty"],
    lines: [Text.translate("ftb.tooltip.tartaric_gem.petty")],
  },
  {
    items: ["bloodmagic:soulgemlesser"],
    lines: [Text.translate("ftb.tooltip.tartaric_gem.lesser")],
  },
  {
    items: ["bloodmagic:soulgemcommon"],
    lines: [Text.translate("ftb.tooltip.tartaric_gem.common")],
  },
  {
    items: ["bloodmagic:soulgemgreater"],
    lines: [Text.translate("ftb.tooltip.tartaric_gem.greater")],
  },
  {
    items: ["malum:soulstone", "malum:soulstone_ore"],
    lines: [Text.translate("ftb.tooltip.soulstone")],
  },
  {
    items: ["tconstruct:tinkers_anvil", "tconstruct:scorched_anvil"],
    lines: [Text.translate("ftb.tooltip.tconstruct.anvil")],
  },
  {
    items: ["deus_ex_machina:ambrosia"],
    lines: [Text.translate("ftb.tooltip.ambrosia")],
  },
  {
    items: [
      "iceandfire:dragonegg_red",
      "iceandfire:dragonegg_green",
      "iceandfire:dragonegg_bronze",
      "iceandfire:dragonegg_gray",
      "iceandfire:dragonegg_blue",
      "iceandfire:dragonegg_white",
      "iceandfire:dragonegg_sapphire",
      "iceandfire:dragonegg_silver",
      "iceandfire:dragonegg_electric",
      "iceandfire:dragonegg_amythest",
      "iceandfire:dragonegg_black",
      "iceandfire:dragonegg_copper",
    ],
    lines: [Text.translate("ftb.tooltip.dragon_egg.hatch_dim")],
  },
  {
    items: ["ftb:codex_glyph_1"],
    lines: [Text.translate("ftb.tooltip.codex_glyph_1").gray()],
  },
  {
    items: ["ftb:codex_glyph_2"],
    lines: [Text.translate("ftb.tooltip.codex_glyph_2").gray()],
  },
  {
    items: ["ftb:codex_glyph_3"],
    lines: [Text.translate("ftb.tooltip.codex_glyph_3").gray()],
  },
  {
    items: ["ftb:sealed_scroll_common"],
    lines: [
      Text.translate("ftb.tooltip.sealed_scroll").gray(),
      Text.translate("ftb.tooltip.sealed_scroll.common").white(),
    ],
  },
  {
    items: ["ftb:sealed_scroll_uncommon"],
    lines: [
      Text.translate("ftb.tooltip.sealed_scroll").gray(),
      Text.translate("ftb.tooltip.sealed_scroll.uncommon").green(),
    ],
  },
  {
    items: ["ftb:sealed_scroll_rare"],
    lines: [
      Text.translate("ftb.tooltip.sealed_scroll").gray(),
      Text.translate("ftb.tooltip.sealed_scroll.rare").aqua(),
    ],
  },
  {
    items: ["ftb:sealed_scroll_epic"],
    lines: [
      Text.translate("ftb.tooltip.sealed_scroll").gray(),
      Text.translate("ftb.tooltip.sealed_scroll.epic").lightPurple(),
    ],
  },
  {
    items: ["ftb:sealed_scroll_legendary"],
    lines: [
      Text.translate("ftb.tooltip.sealed_scroll").gray(),
      Text.translate("ftb.tooltip.sealed_scroll.legendary").gold(),
    ],
  },
  {
    items: [
      "minecraft:leather_boots",
      "iceandfire:forest_troll_leather_boots",
      "iceandfire:mountain_troll_leather_boots",
      "iceandfire:frost_troll_leather_boots",
    ],
    lines: [Text.translate("ftb.tooltip.leather_boots")],
  },
  {
    items: ["enchanted:snowbell_seeds"],
    lines: [Text.translate("ftb.tooltip.snowbell_seeds")],
  },
  {
    items: ["embers:ember_bore"],
    lines: [Text.translate("ftb.tooltip.ember_bore")],
  },
  {
    items: ["ftb:twisted_runestone"],
    lines: [Text.translate("ftb.tooltip.twisted_runestone"), Text.translate("ftb.tooltip.twisted_runestone_1")],
  },
  {
    items: ["ftb:mechanical_heart"],
    lines: [Text.translate("ftb.tooltip.mechanical_heart"), Text.translate("ftb.tooltip.mechanical_heart_1")],
  },
  {
    items: ["embers:ancient_motive_core"],
    lines: [Text.translate("ftb.tooltip.ancient_motive_core")],
  },
  {
    items: ["naturesaura:nature_altar"],
    lines: [Text.translate("tooltip.natural_altar")],
  },
  {
    items: ["ftb:glod_crystal"],
    lines: [Text.translate("tooltip.glod_crystal")],
  },
  {
    items: ["ftb:fiery_remains"],
    lines: [
      Text.translate("ftb.tooltip.fiery_remains"),
      Text.translate("ftb.tooltip.fiery_remains.1"),
      Text.translate("ftb.tooltip.spacer"),
      Text.translate("ftb.tooltip.fiery_remains.tip"),
    ],
  },
  {
    items: [
      "simplyswords:toxic_longsword",
      "simplyswords:emberblade",
      "simplyswords:frostfall",
      "simplyswords:thunderbrand",
      "simplyswords:arcanethyst",
      "simplyswords:shadowsting",
      "simplyswords:tainted_relic",
    ],
    lines: [Text.translate("ftb.tooltip.swords.c_tier")],
  },
  {
    items: [
      "simplyswords:emberlash",
      "simplyswords:caelestis",
      "simplyswords:icewhisper",
      "simplyswords:stormbringer",
      "simplyswords:soulstealer",
      "simplyswords:twisted_blade",
      "simplyswords:watching_warglaive",
    ],
    lines: [Text.translate("ftb.tooltip.swords.b_tier")],
  },
  {
    items: [
      "simplyswords:molten_edge",
      "simplyswords:watcher_claymore",
      "simplyswords:livyatan",
      "simplyswords:enigma",
      "simplyswords:magiscythe",
      "simplyswords:harbinger",
    ],
    lines: [Text.translate("ftb.tooltip.swords.a_tier")],
  },
  {
    items: [
      "simplyswords:brimstone_claymore",
      "simplyswords:soulrender",
      "simplyswords:stars_edge",
      "simplyswords:whisperwind",
      "mythicbotany:mjoellnir",
    ],
    lines: [Text.translate("ftb.tooltip.swords.s_tier")],
  },
  {
    items: ["ftb:draconic_ember"],
    lines: [Text.translate("ftb.tooltip.draconic_ember")],
  },
  {
    items: ["ftb:reconsecrated_aesir_stone"],
    lines: [Text.translate("ftb.tooltip.reconsecrated_aesir_stone")],
  },
  {
    items: [
      "ftb:fragment_helheim",
      "ftb:fragment_jotunheim",
      "ftb:fragment_niflheim",
      "ftb:fragment_muspelheim",
      "ftb:fragment_midgard",
      "ftb:fragment_alfheim",
      "ftb:fragment_asgard",
    ],
    lines: [Text.translate("ftb.tooltip.ragnarok_drop")],
  },
  {
    items: ["ftb:aesirium"],
    lines: [Text.translate("ftb.tooltip.aesirium")],
  },
  {
    items: ["thermal:device_tree_extractor", "ftb:nether_sap_bucket"],
    lines: [Text.translate("ftb.tooltip.nether_sap")],
  },
  {
    items: ["tconstruct:knightmetal_shard"],
    lines: [Text.translate("ftb.tooltip.knightmetal_shard")],
  },
  {
    items: [
      "irons_spellbooks:uncommon_ink",
      "irons_spellbooks:rare_ink",
      "irons_spellbooks:epic_ink",
      "irons_spellbooks:legendary_ink",
    ],
    lines: [Text.translate("ftb.tooltip.wandering_trader_ink")],
  },
  {
    items: ["minecraft:compass"],
    lines: [Text.translate("ftb.tooltip.hel_maze_compass")]
  }
];

const auraBottleTooltipKeyByStoredType = {
  "naturesaura:nether": "ftb.tooltip.aura_bottle.nether",
  "naturesaura:overworld": "ftb.tooltip.aura_bottle.overworld",
  "naturesaura:end": "ftb.tooltip.aura_bottle.end",
  "naturesaura:other": "ftb.tooltip.aura_bottle.other",
};

ItemEvents.tooltip((event) => {
  for (let entry of addToolTips) {
    for (let item of entry.items) {
      event.add(item, entry.lines);
    }
  }

  event.addAdvanced("naturesaura:aura_bottle", (item, advanced, text) => {
    const nbt = item.nbt;
    if (!nbt) return;
    const storedType = String(nbt.getString("stored_type"));
    const key = auraBottleTooltipKeyByStoredType[storedType];
    if (key) {
      text.add(Text.translate(key));
    }
  });
});

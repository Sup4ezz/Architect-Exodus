const addBlockTags = [
  {
    tagName: "ftb:ae2_staging/certus_quartz",
    itemIDs: ["ae2:small_quartz_bud", "ae2:medium_quartz_bud", "ae2:large_quartz_bud", "ae2:quartz_cluster"],
  },
  {
    tagName: "enchanted:mutandis_blacklist",
    itemIDs: [
      "botania:white_mystical_flower",
      "botania:light_gray_mystical_flower",
      "botania:gray_mystical_flower",
      "botania:black_mystical_flower",
      "botania:brown_mystical_flower",
      "botania:red_mystical_flower",
      "botania:orange_mystical_flower",
      "botania:yellow_mystical_flower",
      "botania:lime_mystical_flower",
      "botania:green_mystical_flower",
      "botania:cyan_mystical_flower",
      "botania:light_blue_mystical_flower",
      "botania:blue_mystical_flower",
      "botania:purple_mystical_flower",
      "botania:magenta_mystical_flower",
      "botania:pink_mystical_flower",
      "botania:white_mushroom",
      "botania:light_gray_mushroom",
      "botania:gray_mushroom",
      "botania:black_mushroom",
      "botania:brown_mushroom",
      "botania:red_mushroom",
      "botania:orange_mushroom",
      "botania:yellow_mushroom",
      "botania:lime_mushroom",
      "botania:green_mushroom",
      "botania:cyan_mushroom",
      "botania:light_blue_mushroom",
      "botania:blue_mushroom",
      "botania:purple_mushroom",
      "botania:magenta_mushroom",
      "botania:pink_mushroom",
      "minecraft:grass",
      "minecraft:azalea",
      "minecraft:flowering_azalea",
      "naturesaura:end_flower"
    ]
  },
  {
    tagName: "ftbragnarok:boss_indestructible",
    itemIDs: ["summoningrituals:indestructible_altar"]
  },
  {
    tagName: "ftbchunks:interact_whitelist",
    itemIDs: ["summoningrituals:indestructible_altar", "wizards_reborn:wisestone_pedestal"]
  },
  {
    tagName: "ftbchunks:edit_whitelist",
    itemIDs: ["minecraft:fire"]
  },
  {
    tagName: "forge:ender",
    itemIDs: ["tconstruct:molten_ender_fluid"]
  }
]

let buddingBlockIds = [];

ServerEvents.tags("block", (event) => {
  addBlockTags.forEach((tag) => {
    event.add(tag.tagName, tag.itemIDs);
  });

  const mithrilOres = ["irons_spellbooks:mithril_ore", "irons_spellbooks:deepslate_mithril_ore"];
  event.remove("forge:needs_netherite_tool", mithrilOres);
  event.add("minecraft:needs_diamond_tool", mithrilOres);

  buddingBlockIds = [];
  event.get("forge:budding").getObjectIds().forEach(function(id) {
    buddingBlockIds.push(id.toString());
  });

  event.remove("forge:relocation_not_supported", "#geore:budding_geore");
  event.remove("forge:relocation_not_supported", "#forge:budding");
  event.remove("forge:relocation_not_supported", "#forge:buds");
  event.remove("forge:relocation_not_supported", "#forge:clusters");
  event.remove("ars_nouveau:gravity_blacklist", "#geore:budding_geore");
  event.remove("ars_nouveau:gravity_blacklist", "#forge:budding");
  event.remove("ars_nouveau:gravity_blacklist", "#forge:buds");
  event.remove("ars_nouveau:gravity_blacklist", "#forge:clusters");
  event.remove("projecte:needs_dark_matter_tool", ["projecte:dm_pedestal", "projecte:dark_matter_block"]);
  event.remove("projecte:needs_red_matter_tool", [
    "projecte:red_matter_block",
    "projectexpansion:magenta_matter_block",
    "projectexpansion:pink_matter_block",
    "projectexpansion:purple_matter_block",
    "projectexpansion:violet_matter_block",
    "projectexpansion:blue_matter_block",
    "projectexpansion:cyan_matter_block",
    "projectexpansion:green_matter_block",
    "projectexpansion:lime_matter_block",
    "projectexpansion:yellow_matter_block",
    "projectexpansion:orange_matter_block",
    "projectexpansion:white_matter_block",
    "projectexpansion:fading_matter_block",
    "projectexpansion:compact_sun"
  ]);
});

ServerEvents.tags("block_entity_type", (event) => {
  addBlockTags.forEach((tag) => {
    event.add(tag.tagName, tag.itemIDs);
  });

  if (buddingBlockIds.length > 0) {
    event.add("forge:budding", buddingBlockIds);
  }
});

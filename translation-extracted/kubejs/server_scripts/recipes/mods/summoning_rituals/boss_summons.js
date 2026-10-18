ServerEvents.recipes((event) => {
  summoningRitualRecipe(event, {
    altarItem: "occultism:golden_sacrificial_bowl",
    mobOutputs: ["ftbragnarok:hel"],
    inputs: [
      "minecraft:skeleton_skull",
      "tconstruct:amethyst_bronze_ingot",
      "bloodmagic:blankslate",
      "ars_nouveau:source_gem",
      "irons_spellbooks:greater_healing_potion"
    ],
    recipeTime: 200,
    id: "boss/hel"
  });

  summoningRitualRecipe(event, {
    altarItem: "occultism:golden_sacrificial_bowl",
    mobOutputs: ["ftbragnarok:ymir"],
    inputs: [
      "ftb:orichalcum_ingot",
      "actuallyadditions:empowered_diamatine_crystal",
      "powah:charged_snowball",
      "tconstruct:cobalt_nugget",
      "ftb:wrought_iron_ingot"
    ],
    recipeTime: 200,
    id: "boss/ymir"
  });

  summoningRitualRecipe(event, {
    altarItem: "occultism:golden_sacrificial_bowl",
    mobOutputs: [
      SummoningOutput.mob("ftbragnarok:jormungandr")
        .offset(0, -3, 0)
    ],
    inputs: [
      "bloodmagic:reagentbinding",
      "enchanted:attuned_stone_charged",
      "malum:fused_consciousness",
      "mowziesmobs:ice_crystal",
      "occultism:afrit_essence",
    ],
    recipeTime: 200,
    id: "boss/jormungandr"
  });

  summoningRitualRecipe(event, {
    altarItem: "occultism:golden_sacrificial_bowl",
    mobOutputs: ["ftbragnarok:surtr"],
    inputs: [
      "naturesaura:token_rage",
      "ftb:muspelloy_ingot",
      "minecraft:nether_star",
      "rftoolsbase:infused_diamond",
      "#ftb:surtr_summon_materials",
    ],
    recipeTime: 200,
    id: "boss/surtr"
  });

  summoningRitualRecipe(event, {
    altarItem: "occultism:golden_sacrificial_bowl",
    mobOutputs: ["ftbragnarok:skoll", "ftbragnarok:hati"],
    inputs: [
      "create:chromatic_compound",
      "ftb:gaia_nugget",
      "mysticalagriculture:awakened_supremium_essence",
    ],
    recipeTime: 200,
    id: "boss/twins"
  });

  summoningRitualRecipe(event, {
    altarItem: "ftb:aesirium",
    mobOutputs: ["ftbragnarok:nidhogg"],
    inputs: [
      "draconicevolution:dragon_heart",
      "ftb:fire_cluster",
      "ftb:ice_cluster",
      "ftb:nature_cluster",
      "ftb:arcane_cluster",
      "ftb:celestial_cluster",
      "ftb:vampiric_cluster",
      "bloodmagic:ingot_hellforged"
    ],
    recipeTime: 200,
    id: "boss/nidhoggr"
  });

});

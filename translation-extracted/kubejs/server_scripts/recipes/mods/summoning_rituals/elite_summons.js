ServerEvents.recipes((event) => {
  summoningRitualRecipe(event, {
    altarItem: "alexscaves:vesper_wing",
    mobOutputs: ["alexscaves:forsaken"],
    inputs: [
      "irons_spellbooks:arcane_essence",
      "irons_spellbooks:arcane_essence",
      "ars_nouveau:source_gem",
      "ars_nouveau:source_gem",
      "bloodmagic:reinforcedslate"
    ],
    recipeTime: 150,
    id: "elite/forsaken"
  });

  summoningRitualRecipe(event, {
    altarItem: "actuallyadditions:diamatine_crystal",
    mobOutputs: [
      SummoningOutput.mob("block_factorys_bosses:yeti").data({
        BossBarVisible: 1,
        is_enraged: 2
      })
    ],
    inputs: [
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
    ],
    recipeTime: 150,
    id: "elite/yeti"
  });

  summoningRitualRecipe(event, {
    altarItem: "enchanted:attuned_stone",
    mobOutputs: [
      SummoningOutput.mob("mowziesmobs:frostmaw").data({
        active: 1,
        alwaysActive: 1,
        has_crystal: 1
      })
    ],
    inputs: [
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
    ],
    recipeTime: 150,
    id: "elite/frostmaw"
  });

  summoningRitualRecipe(event, {
    altarItem: "draconicevolution:draconium_block",
    mobOutputs: [
      SummoningOutput.mob("block_factorys_bosses:infernal_dragon").data({
        BossBarVisible: 1,
      })
    ],
    inputs: [
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
    ],
    recipeTime: 150,
    id: "elite/infernal_dragon"
  });

  summoningRitualRecipe(event, {
    altarItem: "create:shadow_steel",
    mobOutputs: [
      SummoningOutput.mob("block_factorys_bosses:underworld_knight").data({
        BossBarVisible: 1,
      })
    ],
    inputs: [
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
      "thermal_extra:soul_infused_dust",
    ],
    recipeTime: 150,
    id: "elite/helvar"
  });
});
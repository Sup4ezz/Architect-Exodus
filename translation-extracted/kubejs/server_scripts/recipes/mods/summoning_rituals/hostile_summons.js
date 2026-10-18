ServerEvents.recipes((event) => {
  summoningRitualRecipe(event, {
    altarItem: "mysticalagriculture:fire_essence",
    mobOutputs: [
      SummoningOutput.mob("creeper")
        .data({powered:1})
    ],
    inputs: [
      "iceandfire:dread_shard",
      "supplementaries:ash",
      "malum:aerial_spirit",
      "malum:grim_talc"
    ],
    recipeTime: 200,
    id: "charged_creeper"
  });
});
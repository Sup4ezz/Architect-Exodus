ServerEvents.recipes((event) => {
  summoningRitualRecipe(event, {
    altarItem: "minecraft:feather",
    mobOutputs: [
      SummoningOutput
        .mob("chicken")
        .count(2)
        .spread(1, 0, 1)
    ],
    inputs: [
      "minecraft:bone_block",
      "malum:sacred_spirit",
      "mysticalagriculture:earth_essence"
    ],
    id: "chickens"
  });
  
  summoningRitualRecipe(event, {
    altarItem: "minecraft:leather",
    mobOutputs: [
      SummoningOutput
        .mob("cow")
        .count(2)
        .spread(1, 0, 1)
    ],
    inputs: [
      "minecraft:bone_block",
      "malum:sacred_spirit",
      "mysticalagriculture:earth_essence"
    ],
    id: "cows"
  });
  
  summoningRitualRecipe(event, {
    altarItem: "minecraft:carrot",
    mobOutputs: [
      SummoningOutput
        .mob("pig")
        .count(2)
        .spread(1, 0, 1)
    ],
    inputs: [
      "minecraft:bone_block",
      "malum:sacred_spirit",
      "mysticalagriculture:earth_essence"
    ],
    id: "pigs"
  });
  
  summoningRitualRecipe(event, {
    altarItem: "minecraft:white_wool",
    mobOutputs: [
      SummoningOutput
        .mob("sheep")
        .count(2)
        .spread(1, 0, 1)
    ],
    inputs: [
      "minecraft:bone_block",
      "malum:sacred_spirit",
      "mysticalagriculture:earth_essence"
    ],
    id: "sheep"
  });
  
  summoningRitualRecipe(event, {
    altarItem: "minecraft:emerald",
    mobOutputs: ["minecraft:wandering_trader"],
    inputs: [
      "minecraft:bone_block",
      "malum:sacred_spirit",
      "mysticalagriculture:earth_essence"
    ],
    id: "trader"
  });
});
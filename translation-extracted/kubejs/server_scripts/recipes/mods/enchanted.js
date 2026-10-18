ServerEvents.recipes((event) => {
  event
    .custom({
      type: "enchanted:witch_cauldron",
      cookingColor: [140, 40, 50],
      finalColor: [80, 20, 30],
      ingredients: [
        { item: "minecraft:zombie_head" },
        { item: "enchanted:taglock" },
        { item: "enchanted:attuned_stone" },
        { item: "minecraft:honeycomb" },
      ],
      power: 3000,
      result: { item: "minecraft:player_head" },
    })
    .id("ftb:enchanted/witch_cauldron/player_head");

      event
    .custom({
      type: "enchanted:witch_cauldron",
      cookingColor: [14, 143, 175],
      finalColor: [146, 199, 180],
      ingredients: [
        { item: "minecraft:quartz" },
        { item: "mysticalagriculture:water_essence" },
      ],
      power: 2000,
      result: { item: "minecraft:prismarine_shard", count: 4 },
    })
    .id("ftb:enchanted/witch_cauldron/prismarine_shard");

       event
    .custom({
      type: "enchanted:witch_cauldron",
      cookingColor: [14, 143, 175],
      finalColor: [146, 199, 180],
      ingredients: [
        { item: "minecraft:arrow" },
        { item: "minecraft:prismarine_shard" },
        { item: "enchanted:whiff_of_magic" },
      ],
      power: 2500,
      result: { item: "iceandfire:sea_serpent_arrow", count: 4 },
    })
    .id("ftb:enchanted/witch_cauldron/sea_serpent_arrow");

           event
    .custom({
      type: "enchanted:witch_cauldron",
      cookingColor: [223, 229, 227],
      finalColor: [146, 199, 180],
      ingredients: [
        { item: "alexscaves:thornwood_branch" },
        { item: "minecraft:prismarine_shard" , count: 3},
        {item: "enchanted:tear_of_the_goddess"}
      ],
      power: 5000,
      result: { item: "minecraft:trident"},
    })
    .id("ftb:enchanted/witch_cauldron/trident");
    
});

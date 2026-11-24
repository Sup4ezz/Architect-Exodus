ServerEvents.recipes((event) => {
  summoningRitualRecipe(event, {
    altarItem: "alexscaves:darkened_apple",
    sacrifices: ["quark:foxhound"],
    blockBelow: { block: "ftb:rotten_flesh_block" },
    recipeTime: 100,
    itemOutputs: [["ftb:fiery_remains", 4]],
    id: "sacrifice/foxhound",
  });
});

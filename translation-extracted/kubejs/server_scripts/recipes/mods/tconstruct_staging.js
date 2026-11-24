ServerEvents.recipes((event) => {
  const blazingBloodRecipes = [
    { type: "tconstruct:entity_melting", id: "tconstruct:smeltery/entity_melting/blaze" },
    { type: "tconstruct:melting", id: "tconstruct:smeltery/entity_melting/heads/blaze" },
  ];

  blazingBloodRecipes.forEach(function (entry) {
    RecipeMachineStage.addRecipe(entry.type, entry.id, "muspelheim_stage");
  });
});

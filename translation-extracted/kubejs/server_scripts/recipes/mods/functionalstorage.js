ServerEvents.recipes((event) => {
  event.shaped("functionalstorage:configuration_tool", ["PPP", "PDG", "PAP"], {
    P: "minecraft:paper",
    G: "malum:cthonic_gold",
    D: "#functionalstorage:drawer",
    A: "tconstruct:amethyst_bronze_ingot"
  }).id("ftb:functionalstorage/configuration_tool")

  event.shaped("functionalstorage:linking_tool", ["PPP", "PDG", "PSP"], {
    P: "minecraft:paper",
    G: "malum:cthonic_gold",
    D: "#functionalstorage:drawer",
    S: "malum:soul_stained_steel_ingot"
  }).id("ftb:functionalstorage/linking_tool")

  const custom_compacting_recipes = [
    {input: "minecraft:rotten_flesh", input_amount: 9, output: "ftb:rotten_flesh_block"},
    {input: "minecraft:sugar", input_amount: 9, output: "supplementaries:sugar_cube"}
  ];

  custom_compacting_recipes.forEach(recipe => {
    event.custom({
      type: "functionalstorage:custom_compacting",
      higher_input: { 
        count: 1, 
        item: recipe.output 
      },
      lower_input: { 
        count: recipe.input_amount, 
        item: recipe.input
      },
    }).id(`ftb:functional_storage/${recipe.input.split(":")[1]}_compacting`);
  });

});

ServerEvents.recipes((event) => {
  event
    .shaped("expatternprovider:circuit_cutter", ["ILI", "GSG", "CTE"], {
      I: "#forge:ingots/iron",
      L: "ae2:logic_processor",
      G: "ae2:quartz_glass",
      S: "minecraft:stonecutter",
      C: "ae2:calculation_processor",
      T: "ae2:sky_stone_tank",
      E: "ae2:engineering_processor",
    })
    .id("ftb:expatternprovider/circuit_cutter");
});

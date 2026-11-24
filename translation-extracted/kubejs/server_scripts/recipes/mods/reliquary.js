ServerEvents.recipes((event) => {
  event
    .shapeless("reliquary:alkahestry_altar", [
      "#forge:obsidian",
      "minecraft:redstone_lamp",
      "#forge:ender_pearls",
      "cataclysm:black_steel_ingot"
    ]).id("ftb:reliquary/alkahestry_altar");
});

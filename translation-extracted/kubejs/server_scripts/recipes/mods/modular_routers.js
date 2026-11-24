ServerEvents.recipes((event) => {
  event
    .shaped("6x modularrouters:blank_module", [" R ", "PPP", "GGG"], {
      R: "#forge:dusts/redstone",
      P: "minecraft:paper",
      G: "embers:dawnstone_nugget",
    })
    .id("ftb:modularrouters/blank_module");
});

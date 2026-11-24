ServerEvents.recipes((event) => {
  event
    .shaped("mowziesmobs:wrought_axe", ["ISI", "ISI", " S "], {
      I: "ftb:wrought_iron_ingot",
      S: "minecraft:stick",
    })
    .id("ftb:mowziesmobs/wrought_axe");

  event
    .shaped("mowziesmobs:wrought_helmet", ["III", "I I", "   "], {
      I: "ftb:wrought_iron_ingot",
    })
    .id("ftb:mowziesmobs/wrought_helmet");
});

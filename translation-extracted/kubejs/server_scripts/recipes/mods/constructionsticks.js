ServerEvents.recipes((event) => {
  event
    .shaped("constructionstick:template_replacement", [" GA", "GEG", "AG "], {
      G: "#forge:glass",
      E: "#forge:ender_pearls",
      A: "malum:arcane_spirit"
    }).id("ftb:construction_sticks/replacement_template");

  event
    .shaped("constructionstick:template_angel", [" GA", "GFG", "AG "], {
      G: "#forge:glass",
      F: "#forge:feathers",
      A: "malum:aerial_spirit"
    }).id("ftb:construction_sticks/angel_template");

  event
    .shaped("constructionstick:template_battery", [" GR", "GPG", "RG "], {
      G: "#forge:glass",
      P: "minecraft:potato",
      R: "thermal:rf_coil"
    }).id("ftb:construction_sticks/battery_template");
});

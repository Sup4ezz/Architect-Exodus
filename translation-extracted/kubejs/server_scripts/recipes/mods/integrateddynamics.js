ServerEvents.recipes((event) => {
  event
    .custom({
      type: "bloodmagic:array",
      addedinput: {
        item: "mysticalagriculture:nature_essence",
      },
      baseinput: {
        tag: "ftb:saplings/runewood",
      },
      output: {
        item: "integrateddynamics:menril_sapling",
      },
      texture: "bloodmagic:textures/models/alchemyarrays/growthsigil.png",
    })
    .id("ftb:integrateddynamics/menril_sapling");

  event
    .shaped("integrateddynamics:mechanical_squeezer", [" O ", "BSB", " O "], {
      B: "integrateddynamics:energy_battery",
      S: "integrateddynamics:squeezer",
      O: "#forge:obsidian",
    })
    .id("ftb:integrateddynamics/mechanical_squeezer");

  event
    .shapeless("integrateddynamics:coal_generator", ["integrateddynamics:energy_battery", "#ftb:progression_furnace"])
    .id("ftb:integrateddynamics/generator");

  event
    .shaped("integratedterminals:part_terminal_storage", ["DGD", "GMG", "DBD"], {
      D: "#forge:dusts/glowstone",
      G: "integratedterminals:menril_glass",
      M: "integrateddynamics:crystalized_menril_block",
      B: "integrateddynamics:energy_battery",
    })
    .id("ftb:integrateddynamics/part_terminal_storage");
});

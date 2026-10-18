ServerEvents.recipes((event) => {
  malumSpiritInfusion(event, {
    input: "minecraft:ender_pearl",
    output: "projecte:philosophers_stone",
    spirits: [
      ["eldritch", 8],
      ["arcane", 4],
    ],
    extraItems: [
      "malum:hex_ash",
      ["minecraft:redstone", 4],
      ["malum:soul_stained_steel_nugget", 4],
      ["minecraft:rotten_flesh", 8],
    ],
  });

  event
    .shaped("projecte:condenser_mk1", ["ODO", "DCD", "ODO"], {
      O: "#forge:obsidian",
      D: "create:rose_quartz",
      C: "projecte:alchemical_chest",
    })
    .id("ftb:projecte/condenser_mk1");

  event
    .shaped("projecte:collector_mk1", ["GTG", "GAG", "GFG"], {
      G: "minecraft:glowstone",
      T: "#forge:glass",
      A: "minecraft:amethyst_block",
      F: "#ftb:progression_furnace",
    })
    .id("ftb:projecte/collector_mk1");

  event
    .shaped("projecte:collector_mk2", ["GLG", "GCG", "GGG"], {
      G: "minecraft:glowstone",
      L: "ftbmaterials:lumium_plate",
      C: "projecte:collector_mk1",
    })
    .id("ftb:projecte/collector_mk2_jotunheim");

  event
    .shaped("projecte:collector_mk2", ["GLG", "GCG", "GGG"], {
      G: "minecraft:glowstone",
      L: "ars_nouveau:jar_of_light",
      C: "projecte:collector_mk1",
    })
    .id("ftb:projecte/collector_mk2_niflheim");

  event
    .shaped("projecte:relay_mk1", ["OGO", "OAO", "OOO"], {
      O: "#forge:obsidian",
      G: "#forge:glass",
      A: "minecraft:amethyst_block",
    })
    .id("ftb:projecte/relay_mk1");

  event
    .shaped("projecte:relay_mk2", ["OLO", "ORO", "OOO"], {
      O: "#forge:obsidian",
      L: "ftbmaterials:lumium_plate",
      R: "projecte:relay_mk1",
    })
    .id("ftb:projecte/relay_mk2_jotunheim");

  event
    .shaped("projecte:relay_mk2", ["OLO", "ORO", "OOO"], {
      O: "#forge:obsidian",
      L: "ars_nouveau:jar_of_light",
      R: "projecte:relay_mk1",
    })
    .id("ftb:projecte/relay_mk2_niflheim");

  event
    .shaped("projecte:alchemical_chest", ["MLM", "BRB", "ICI"], {
      C: "#forge:chests/wooden",
      R: "create:rose_quartz",
      I: "#forge:ingots/iron",
      L: "projecte:low_covalence_dust",
      M: "projecte:medium_covalence_dust",
      B: "#ftb:progression_stone",
    })
    .id("ftb:projecte/alchemical_chest");

  event
    .shaped("projecte:klein_star_ein", ["MMM", "MTM", "MMM"], {
      T: "experienceobelisk:transforming_focus",
      M: "projecte:mobius_fuel",
    })
    .id("ftb:projecte/klein_star_ein");

  event
    .shapeless("40x projecte:low_covalence_dust", ["#minecraft:coals", "8x #ftb:progression_stone"])
    .id("ftb:projecte/low_covalence_dust");
});

ProjectEEvents.setEMC((event) => {
  event.setEMC("minecraft:piston", 336);
  event.setEMC("minecraft:sticky_piston", 720);
  event.setEMC("naturesaura:aura_bottle", 0);
  event.setEMC("minecraft:blaze_powder", 0);
  event.setEMC("minecraft:blaze_rod", 0);
  event.setEMC("powah:dielectric_paste", 49);
  event.setEMC("bloodmagic:ingot_hellforged", 0);
  event.setEMC("bloodmagic:dungeon_metal", 0);
  event.setEMC("botania:manasteel_ingot", 0);
  event.setEMC("botania:manasteel_block", 0);
  event.setEMC("botania:elementium_ingot", 0);
  event.setEMC("botania:elementium_block", 0);
});

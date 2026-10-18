ServerEvents.recipes((event) => {
  let black_quartz_conflicting_recipes = [
    "actuallyadditions:black_quartz_wall",
    "actuallyadditions:black_quartz_stair",
    "actuallyadditions:black_quartz_slab",
  ];

  black_quartz_conflicting_recipes.forEach((recipe) => {
    event.replaceInput(
      { id: recipe },
      "actuallyadditions:black_quartz_pillar_block",
      "actuallyadditions:black_quartz_block"
    );
  });

  event
    .shaped("actuallyadditions:lens_of_the_miner", ["DGI", "CLB", "QPE"], {
      D: "#forge:gems/diamond",
      G: "#ftb:any_gold_nugget",
      B: "actuallyadditions:black_quartz",
      C: "#minecraft:coals",
      E: "#forge:gems/emerald",
      I: "#forge:ingots/iron",
      L: "actuallyadditions:lens",
      P: "#forge:gems/lapis",
      Q: "#forge:gems/quartz",
    })
    .id("ftb:actually_subtractions/lens_of_the_miner");

  event.shaped("actuallyadditions:xp_solidifier", ["BBB", "EAE", "BBB"], {
    B: "minecraft:experience_bottle",
    E: "actuallyadditions:empowered_diamantine_crystal_block",
    A: "actuallyadditions:advanced_coil",
  }).id("ftb:actually_subtractions/xp_solidifier");

  // Custom Lens Conversions
  const miningLensAdditions = [
    { input: "minecraft:sand", output: "thermal:oil_sand" },
    { input: "minecraft:red_sand", output: "thermal:oil_red_sand" },
  ];
  miningLensAdditions.forEach((item) => {
    actuallyadditionsMiningLensRecipe(
      event,
      item.input,
      item.output,
      1000,
      "ftb:mining_lens/" + item.output.split(":")[1]
    );
  });

  ["red", "light", "green", "dark", "blue"].forEach((color) => {
    actuallyadditionsMiningLensRecipe(
      event,
      "xycraft_world:kivi",
      "xycraft_world:xychorium_ore_kivi_" + color,
      1000,
      "ftb:mining_lens/xychorium_ore_kivi_" + color
    );
  });

  actuallyAdditionsCrushingRecipe(
    event,
    "forge:crops/rice",
    [["minecraft:sugar", 2]],
    "actuallyadditions:crushing/rice"
  );

  event.shapeless(
    Item.of("actuallyadditions:rice_dough", 2),
    ["#forge:crops/rice", "#forge:crops/rice", "#forge:crops/rice"]
  ).id("actuallyadditions:rice_dough");

  event.shaped(
    Item.of("minecraft:paper", 3),
    ["R  ", " R ", "  R"],
    { R: "#forge:crops/rice" }
  ).id("actuallyadditions:rice_paper");

  event.shapeless(
    "actuallyadditions:rice_seeds",
    ["#forge:crops/rice"]
  ).id("actuallyadditions:rice_seeds");

  //Making Glod Crystals from Orichalcum
  event.custom({
    type: "actuallyadditions:laser",
    energy: 60,
    ingredient: {
      tag: "ftb:any_gold"
    },
    result: {
      item: "ftb:glod_crystal"
    }
  }).id("ftb:actuallyadditions/laser/glod_crystal");

  event.custom({
    type: "actuallyadditions:laser",
    energy: 80,
    ingredient: {
      "item": "minecraft:basalt"
    },
    result: {
      "item": "xycraft_world:kivi"
    }
  }).id("ftb:actuallyadditions/laser/kivi");

});

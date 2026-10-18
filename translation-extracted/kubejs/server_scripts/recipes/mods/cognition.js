ServerEvents.recipes((event) => {
  event
    .shaped("experienceobelisk:cognitive_crystal", [" X ", "XSX", " X "], {
      X: "experienceobelisk:cognitive_amalgam",
      S: "actuallyadditions:solidified_experience",
    })
    .id("ftb:cognition/cognitive_crystal");

  cognitionMolecularMetamorphosis(event, {
    inputs: [
      ["experienceobelisk:cognitive_flux", 2],
      "actuallyadditions:solidified_experience"
    ],
    output: "experienceobelisk:cognitive_crystal",
    expCost: 16,
    duration: 20,
  });

  event
    .shapeless("4x experienceobelisk:cognitive_flux", [
      "minecraft:quartz",
      "minecraft:black_concrete_powder",
      "tconstruct:amethyst_bronze_nugget",
    ])
    .id("ftb:cognition/cognitive_flux");

  cognitionMolecularMetamorphosis(event, {
    inputs: [
      "#ftb:apples",
      "#forge:storage_blocks/gold",
    ],
    output: "minecraft:enchanted_golden_apple",
    expCost: 1395,
    duration: 300,
  });
});

ServerEvents.recipes((event) => {
  // Andesite Alloy Recipe accepts any Andesite
  let andesite_alloy_recipes = [
    "create:crafting/materials/andesite_alloy",
    "create:crafting/materials/andesite_alloy_from_zinc",
  ];
  andesite_alloy_recipes.forEach((recipe) => {
    event.replaceInput({ id: recipe }, "minecraft:andesite", "#chipped:andesite");
  });

  event
    .custom({
      type: "create:mixing",
      heatRequirement: "superheated",
      ingredients: [
        { item: "create:refined_radiance" },
        { item: "create:shadow_steel" },
        { fluid: "woot_revived:pure_dye_fluid", amount: 1000 },
      ],
      results: [{ item: "create:chromatic_compound" }],
    })
    .id("ftb:create/mixing/chromatic_compound");

  event
    .shaped("64x create:refined_radiance_casing", ["RRR", "RAR", "RRR"], {
      R: "create:refined_radiance",
      A: "create:andesite_casing",
    })
    .id("ftb:create/crafting/refined_radiance_casing");

  event
    .shaped("64x create:shadow_steel_casing", ["SSS", "SAS", "SSS"], {
      S: "create:shadow_steel",
      A: "create:andesite_casing",
    })
    .id("ftb:create/crafting/shadow_steel_casing");

  event
    .custom({
      type: "create:item_application",
      ingredients: [
        { item: "create:brass_casing" },
        { item: "minecraft:obsidian" },
      ],
      results: [{ item: "create:railway_casing" }],
    })
    .id("ftb:create/item_application/railway_casing");

  event
    .custom({
      type: "createaddition:liquid_burning",
      input: { fluidTag: "forge:pyrotheum", amount: 1000 },
      burnTime: 12000,
    })
    .id("ftb:create/liquid_burning/pyrotheum");

  event
    .custom({
      type: "createaddition:liquid_burning",
      input: { fluidTag: "forge:crimson_pyrotheum", amount: 1000 },
      burnTime: 24000,
      superheated: true,
    })
    .id("ftb:create/liquid_burning/crimson_pyrotheum");

  event
    .custom({
      type: "createaddition:liquid_burning",
      input: { fluidTag: "forge:molten_muspelloy", amount: 1000 },
      burnTime: 36000,
      superheated: true,
    })
    .id("ftb:create/liquid_burning/molten_muspelloy");
});

// priority: 50

/**
 * Recipes to remove from EnderIO.
 */
const XYCRAFT_RECIPE_TO_REMOVE = [
  "xycraft_world:compacting/raw_aluminum",
  "xycraft_world:compacting/aluminum_ingot",
  "xycraft_world:compacting/aluminum_nugget",
];

const xychorium_types = ["blue", "green", "red", "dark", "light"];

ServerEvents.recipes((event) => {
  XYCRAFT_RECIPE_TO_REMOVE.forEach((recipe) => {
    event.remove({ id: recipe });
  });

  xychorium_types.forEach((material) => {
    // Minecraft
    event.smelting(`xycraft_world:xychorium_gem_${material}`, `#forge:ores/xychorium_${material}`, 0.7, 200);
    event.blasting(`xycraft_world:xychorium_gem_${material}`, `#forge:ores/xychorium_${material}`, 0.7, 100);
    // EnderIO
    if (Platform.isLoaded("enderio")) {
      enderIOBasicSagMillingRecipe(
        event,
        `forge:ores/xychorium_${material}`,
        [
          [`xycraft_world:xychorium_gem_${material}`, 2],
          [`xycraft_world:xychorium_gem_${material}`, 1, 0.33],
        ],
        `ftb:enderio/sag_mill/ores/xychorium_${material}`,
        true,
      );
    }
    // Create
    if (Platform.isLoaded("create")) {
      createBasicCrushingRecipe(
        event,
        `forge:ores/xychorium_${material}`,
        [
          [`xycraft_world:xychorium_gem_${material}`, 2],
          [`xycraft_world:xychorium_gem_${material}`, 1, 0.33],
          ["create:experience_nugget", 1, 0.75],
        ],
        `ftb:create/crushing/ores/xychorium_${material}`,
      );
    }
    // Thermal
    if (Platform.isLoaded("thermal")) {
      thermalPulverizerRecipe(
        event,
        `forge:ores/xychorium_${material}`,
        [
          [`xycraft_world:xychorium_gem_${material}`, 2],
          [`xycraft_world:xychorium_gem_${material}`, 1, 0.33],
        ],
        `ftb:thermal/pulverizer/ores/xychorium_${material}`,
      );
    }
    // Integrated Dynamics
    if (Platform.isLoaded("integrateddynamics")) {
      integratedDynamicsMechanicalSqueezerRecipe(
        event,
        `forge:ores/xychorium_${material}`,
        [
          [`xycraft_world:xychorium_gem_${material}`, 2],
          [`xycraft_world:xychorium_gem_${material}`, 1, 0.33],
        ],
        `ftb:integrateddynamics/squeezer/mechanical/ores/xychorium_${material}`,
      );

      integratedDynamicsSqueezerRecipe(
        event,
        `forge:ores/xychorium_${material}`,
        [[`xycraft_world:xychorium_gem_${material}`, 2]],
        `ftb:integrateddynamics/squeezer/automatic/ores/xychorium_${material}`,
      );
    }
    // Actually Additions
    if (Platform.isLoaded("actuallyadditions")) {
      actuallyAdditionsCrushingRecipe(
        event,
        `forge:ores/xychorium_${material}`,
        [
          [`xycraft_world:xychorium_gem_${material}`, 2],
          [`xycraft_world:xychorium_gem_${material}`, 1, 0.33],
        ],
        `ftb:actually_subtractions/crusher/ores/xychorium_${material}`,
      );
    }
  });
});

ServerEvents.recipes((event) => {
  global.resources_ores_ingot.forEach((mod) => {
    mod.materials.forEach((material) => {

      if (material === "steel") {
        return
      }

      const oreTag = `#${global.tag_prefix}:ores/${material}`;
      const ingot =
        mod.modID === "minecraft"
          ? `minecraft:${material}_ingot`
          : `ftbmaterials:${material}_ingot`;

      event.smelting(ingot, oreTag).xp(0.7)
        .cookingTime(200)
        .id(`ftb:smelting/${material}_ore_to_ingot`);

      event.blasting(ingot, oreTag).xp(0.7)
        .cookingTime(100)
        .id(`ftb:blasting/${material}_ore_to_ingot`);

    });
  });
})
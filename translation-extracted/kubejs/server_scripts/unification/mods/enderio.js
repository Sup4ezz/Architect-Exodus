// priority: 50

/**
 * Recipes to remove from EnderIO.
 */
const ENDERIO_RECIPES_TO_REMOVE = [
  "enderio:iron_gear",
  "enderio:item.minecraft.copper_ingot_from_blasting",
  "enderio:item.minecraft.copper_ingot_from_smelting",
  "enderio:item.minecraft.gold_ingot_from_blasting",
  "enderio:item.minecraft.gold_ingot_from_smelting",
  "enderio:item.minecraft.iron_ingot_from_blasting",
  "enderio:item.minecraft.iron_ingot_from_smelting",
  "enderio:sag_milling/redstone_ore",
  "enderio:sag_milling/lapis_ore",
  "enderio:sag_milling/copper_ore",
  "enderio:sag_milling/gold_ore",
  "enderio:sag_milling/iron_ore",
  "enderio:sag_milling/copper",
  "enderio:sag_milling/iron",
  "enderio:sag_milling/copper",
];
ServerEvents.recipes((event) => {
  event.remove(ENDERIO_RECIPES_TO_REMOVE);

  // Add SAG milling recipes for FTB materials
  global.resources_ores_ingot.forEach((mod) => {
    mod.materials.forEach((material) => {
      const rawMaterialTag = `${global.tag_prefix}:raw_materials/${material}`;
      const oreTag = `${global.tag_prefix}:ores/${material}`;
      const ingotTag = `${global.tag_prefix}:ingots/${material}`;
      const dust = `ftbmaterials:${material}_dust`;


      if (material !== "steel") {
        // Raw Ores -> Dust
        enderIOBasicSagMillingRecipe(
          event,
          rawMaterialTag,
          [
            [`ftbmaterials:${material}_dust`, 1],
            [`ftbmaterials:${material}_dust`, 1, 0.33],
          ],
          `ftb:enderio/sag_mill/raw_materials/${material}`,
          true
        );
      }
      if (material !== "steel") {
        // Ores -> Dust
        enderIOBasicSagMillingRecipe(
          event,
          oreTag,
          [
            [dust, 2],
            [dust, 1, 0.25],
          ],
          `ftb:enderio/sag_mill/ores/${material}`,
          true
        );
      }

      // Ingots -> Dusts
      enderIOBasicSagMillingRecipe(event, ingotTag, [[dust, 1]], `ftb:enderio/sag_mill/ingots/${material}`, false);


      if (material !== "tin") {
        // Plates -> Dusts
        enderIOBasicSagMillingRecipe(
          event,
          `${global.tag_prefix}:plates/${material}`,
          [[dust, 1]],
          `ftb:enderio/sag_mill/plates/${material}`,
          false
        );
      }
    });
  });

  global.resources_ores_gem.forEach((mod) => {
    mod.materials.forEach((material) => {
      const gem = material[0];
      const amount = material[1];
      const oreTag = `${global.tag_prefix}:ores/${gem}`;
      const gemTag = `${global.tag_prefix}:gems/${gem}`;
      const dustTag = `${global.tag_prefix}:dusts/${gem}`;
      const dust = `ftbmaterials:${gem}_dust`;
      const gemName = material[2] ?? gem;
      const gemOutput = mod.modID === "minecraft" ? `minecraft:${gemName}` : `ftbmaterials:${gemName}`;

      enderIOBasicSagMillingRecipe(
        event,
        oreTag,
        [
          [gemOutput, amount],
          [gemOutput, Math.floor(amount / 2), 0.33],
        ],
        `ftb:enderio/sag_mill/ores/${gem}`,
        false
      );

      if (gem === "redstone" || gem === "lapis") {
        return;
      }

      enderIOBasicAlloySmeltingRecipe(event, dustTag, gemOutput, `ftb:enderio/alloy_smelting/dusts/${gem}`);

      if (gem === "coal") {
        enderIOBasicSagMillingRecipe(event, "minecraft:coals", [[dust, 1]], `ftb:enderio/sag_mill/gems/${gem}`, false);
        return;
      }
      enderIOBasicSagMillingRecipe(event, gemTag, [[dust, 1]], `ftb:enderio/sag_mill/gems/${gem}`, false);
    });
  });

  global.alloys.forEach((material) => {
    const ingotTag = `${global.tag_prefix}:ingots/${material}`;
    const dust = `ftbmaterials:${material}_dust`;

    // Ingot -> Dusts
    enderIOBasicSagMillingRecipe(event, ingotTag, [[dust, 1]], `ftb:enderio/sag_mill/ingots/${material}`, false);

    // Plates -> Dusts
    enderIOBasicSagMillingRecipe(
      event,
      `${global.tag_prefix}:plates/${material}`,
      [[dust, 1]],
      `ftb:enderio/sag_mill/plates/${material}`,
      false
    );
  });

  enderIOBasicSagMillingRecipe(
    event,
    `forge:ores/draconium`,
    [["draconicevolution:draconium_dust", 2]],
    `ftb:enderio/sag_mill/ores/draconium`,
    true
  );

  enderIOBasicSagMillingRecipe(
    event,
    `forge:ores/soulium`,
    [["mysticalagriculture:soulium_dust", 2]],
    `ftb:enderio/sag_mill/ores/soulium`,
    true
  );

  enderIOBasicSagMillingRecipe(
    event,
    `forge:ores/inferium`,
    [["mysticalagriculture:inferium_essence", 2]],
    `ftb:enderio/sag_mill/ores/inferium`,
    true
  );

  enderIOBasicSagMillingRecipe(
    event,
    `forge:ores/prosperity`,
    [["mysticalagriculture:prosperity_shard", 2]],
    `ftb:enderio/sag_mill/ores/prosperity`,
    true
  );
});

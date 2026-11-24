// priority: 50

/**
 * Recipes to remove from Create.
 */
const CREATE_RECIPES_TO_REMOVE = [
  "create:crushing/lapis_ore",
  "create:crushing/redstone_ore",
  "create:crushing/deepslate_redstone_ore",
  "create:crushing/deepslate_lapis_ore",
  "create:crushing/nether_quartz_ore",
  "createaddition:crushing/diamond",
  "createaddition:crafting/electrum_block",
  "createaddition:crafting/electrum_ingot",
  "createaddition:crafting/electrum",
  "create:crushing/raw_zinc_block",
  "create:crushing/raw_zinc",
  "create:crushing/raw_osmium_block",
  "create:crushing/osmium_ore",
  "create:crushing/raw_osmium",
  "create:crushing/raw_silver",
  "create:crushing/raw_silver_block",
  "create:crushing/silver_ore",
  "create:crushing/tin_ore",
  "create:crushing/raw_tin",
  "create:crushing/raw_tin_block",
  "create:crushing/raw_lead",
  "create:crushing/lead_ore",
  "create:crushing/raw_lead_block",
  "create:crushing/raw_aluminum_block",
  "create:crushing/raw_aluminum",
  "create:crushing/aluminum_ore",
  "create:crushing/raw_nickel",
  "create:crushing/nickel_ore",
  "create:crushing/raw_nickel_block",
];

ServerEvents.recipes((event) => {
  // Remove Recipes
  event.remove(CREATE_RECIPES_TO_REMOVE);

  // Loop For Resource Ores
  global.resources_ores_ingot.forEach((mod) => {
    mod.materials.forEach((material) => {
      const oreTag = `${global.tag_prefix}:ores/${material}`;
      const ingotTag = `${global.tag_prefix}:ingots/${material}`;
      const dust = `ftbmaterials:${material}_dust`;

      if (material !== "steel") {
        // Ore -> Crushed Iron
        createBasicCrushingRecipe(
          event,
          oreTag,
          [
            [`create:crushed_raw_${material}`, 2],
            [`create:crushed_raw_${material}`, 1, 0.25],
            ["create:experience_nugget", 1, 0.75],
          ],
          `ftb:create/crushing/ores/${material}`
        );
      }

      // Ingot -> Dust
      createBasicCrushingRecipe(event, ingotTag, [[dust]], `ftb:create/crushing/ingots/${material}`);

      if (material !== "tin") {
        // Plates -> Dust
        createBasicCrushingRecipe(
          event,
          `${global.tag_prefix}:plates/${material}`,
          [[dust]],
          `ftb:create/crushing/plates/${material}`
        );
      }

      if (material !== "steel") {
        // Raw Block -> Crushed
        createBasicCrushingRecipe(
          event,
          `${global.tag_prefix}:raw_blocks/${material}`,
          [
            [`create:crushed_raw_${material}`, 9],
            ["create:experience_nugget", 1, 0.75],
          ],
          `ftb:create/crushing/raw_blocks/${material}`
        );
      }

      if (material !== "steel") {
      // Raw -> Crushed
        createBasicCrushingRecipe(
          event,
          `${global.tag_prefix}:raw_materials/${material}`,
          [
            [`create:crushed_raw_${material}`, 2],
            ["create:experience_nugget", 1, 0.75],
          ],
          `ftb:create/crushing/raw_${material}`
        );
      }
    });
  });

  // Loop For Gem Ores
  global.resources_ores_gem.forEach((mod) => {
    mod.materials.forEach((material) => {
      const gem = material[0];
      const amount = material[1];
      const oreTag = `${global.tag_prefix}:ores/${gem}`;
      const gemTag = `${global.tag_prefix}:gems/${gem}`;
      const dust = `ftbmaterials:${gem}_dust`;
      const gemName = material[2] ?? gem;
      const gemOutput = mod.modID === "minecraft" ? `minecraft:${gemName}` : `ftbmaterials:${gemName}`;

      // Ore -> Resource
      createBasicCrushingRecipe(
        event,
        oreTag,
        [
          [gemOutput, amount],
          [gemOutput, Math.floor(amount / 2), 0.33],
          ["create:experience_nugget", 1, 0.75],
        ],
        `ftb:create/crushing/ores/${gem}`
      );

      // Resource -> Dust
      if (gem === "redstone") return;
      if (gem === "coal") {
        createBasicCrushingRecipe(event, "minecraft:coals", [[dust, 1]], `ftb:create/crushing/gems/${gem}`);
        return;
      }
      createBasicCrushingRecipe(event, gemTag, [[dust, 1]], `ftb:create/crushing/gems/${gem}`);
    });
  });

  // Loop For Alloys
  global.alloys.forEach((material) => {
    const ingotTag = `${global.tag_prefix}:ingots/${material}`;
    const dust = `ftbmaterials:${material}_dust`;

    // Ingot -> Dust
    createBasicCrushingRecipe(event, ingotTag, [[dust]], `ftb:create/crushing/ingots/${material}`);

    // Plates -> Dust
    createBasicCrushingRecipe(
      event,
      `${global.tag_prefix}:plates/${material}`,
      [[dust]],
      `ftb:create/crushing/plates/${material}`
    );
  });

  global.plates.forEach((material) => {
    event
      .custom({
        type: "create:pressing",
        ingredients: [
          {
            tag: `forge:ingots/${material}`,
          },
        ],
        results: [
          {
            item: `ftbmaterials:${material}_plate`,
          },
        ],
      })
      .id(`ftb:create/pressing/plates/${material}`);
  });

  createBasicCrushingRecipe(
    event,
    `forge:ores/draconium`,
    [["draconicevolution:draconium_dust", 2]],
    `ftb:create/crushing/ore/draconium`
  );

  createBasicCrushingRecipe(
    event,
    `forge:ores/soulium`,
    [["mysticalagriculture:soulium_dust", 2]],
    `ftb:create/crushing/ore/soulium`
  );

  createBasicCrushingRecipe(
    event,
    `forge:ores/inferium`,
    [["mysticalagriculture:inferium_essence", 2]],
    `ftb:create/crushing/ore/inferium`
  );

  createBasicCrushingRecipe(
    event,
    `forge:ores/prosperity`,
    [["mysticalagriculture:prosperity_shard", 2]],
    `ftb:create/crushing/ore/prosperity`
  );

  event
    .custom({
      type: "create:sequenced_assembly",
      ingredient: {
        tag: "forge:dusts/obsidian",
      },
      loops: 1,
      results: [
        {
          item: "ftbmaterials:obsidian_sheet",
        },
      ],
      sequence: [
        {
          type: "create:filling",
          ingredients: [
            {
              item: "create:unprocessed_obsidian_sheet",
            },
            {
              amount: 500,
              fluid: "minecraft:lava",
              nbt: {},
            },
          ],
          results: [
            {
              item: "create:unprocessed_obsidian_sheet",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:unprocessed_obsidian_sheet",
            },
          ],
          results: [
            {
              item: "create:unprocessed_obsidian_sheet",
            },
          ],
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "create:unprocessed_obsidian_sheet",
            },
          ],
          results: [
            {
              item: "create:unprocessed_obsidian_sheet",
            },
          ],
        },
      ],
      transitionalItem: {
        item: "create:unprocessed_obsidian_sheet",
      },
    })
    .id(`ftb:create/obsidian_sheet_from_dust`);
});

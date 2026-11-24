// priority: 50

const BLOOD_MAGIC_RECIPES_TO_REMOVE = [
  "bloodmagic:arc/fragmentsfrom_ore_gold",
  "bloodmagic:arc/dustsfrom_ore_copper",
  "bloodmagic:arc/fragmentsfrom_ore_iron",
  "bloodmagic:arc/dustsfrom_raw_iron",
  "bloodmagic:arc/dustsfrom_gravel_gold",
  "bloodmagic:arc/dustsfrom_ingot_copper",
  "bloodmagic:arc/dustsfrom_raw_gold",
  "bloodmagic:arc/fragmentscopper",
  "bloodmagic:arc/dustsfrom_gravel_iron",
  "bloodmagic:arc/dustsfrom_ore_gold",
  "bloodmagic:arc/gravelsgold",
  "bloodmagic:arc/dustsfrom_raw_copper",
  "bloodmagic:arc/fragmentsfrom_ore_copper",
  "bloodmagic:arc/fragmentsiron",
  "bloodmagic:arc/dustsfrom_ingot_gold",
  "bloodmagic:arc/gravelsiron",
  "bloodmagic:arc/dustsfrom_ore_iron",
  "bloodmagic:arc/fragmentsgold",
  "bloodmagic:arc/gravelscopper",
  "bloodmagic:arc/dustsfrom_ingot_iron",
  "bloodmagic:arc/dustsfrom_gravel_copper",
  "bloodmagic:alchemytable/corrupted_iron",
  "bloodmagic:alchemytable/sand_iron",
  "bloodmagic:alchemytable/corrupted_copper",
  "bloodmagic:alchemytable/corrupted_gold",
  "bloodmagic:alchemytable/sand_gold",
];

// Removes Fluid Recipes
ServerEvents.recipes((event) => {
  event.remove(BLOOD_MAGIC_RECIPES_TO_REMOVE);

  const skipMaterials = ["steel"];
  global.resources_ores_ingot.forEach((mod) => {
    mod.materials.forEach((material) => {
      if (skipMaterials.includes(material)) return;
      event
        .custom({
          type: "bloodmagic:arc",
          addedoutput: [
            {
              type: {
                item: `ftbmaterials:${material}_crystal`,
              },
              chance: 0.5,
              mainchance: 0.0,
            },
          ],
          consumeingredient: false,
          input: {
            tag: `forge:ores/${material}`,
          },
          inputsize: 1,
          mainoutputchance: 0.0,
          output: {
            count: 4,
            item: `ftbmaterials:${material}_crystal`,
          },
          tool: {
            tag: "bloodmagic:arc/explosive",
          },
        })
        .id(`ftb:bloodmagic/arc/${material}_crystal_from_ore`);

      event
        .custom({
          type: "bloodmagic:arc",
          addedoutput: [
            {
              type: {
                item: `ftbmaterials:${material}_crystal`,
              },
              chance: 0.25,
              mainchance: 0.0,
            },
          ],
          consumeingredient: false,
          input: {
            tag: `forge:raw_materials/${material}`,
          },
          inputsize: 1,
          mainoutputchance: 0.0,
          output: {
            count: 2,
            item: `ftbmaterials:${material}_crystal`,
          },
          tool: {
            tag: "bloodmagic:arc/explosive",
          },
        })
        .id(`ftb:bloodmagic/arc/${material}_crystal_from_raw`);

      event
        .custom({
          type: "bloodmagic:arc",
          addedoutput: [
            {
              type: {
                item: "bloodmagic:corrupted_tinydust",
              },
              chance: 0.25,
              mainchance: 0.0,
            },
          ],
          consumeingredient: false,
          input: {
            tag: `forge:crystals/${material}`,
          },
          inputsize: 1,
          mainoutputchance: 0.0,
          output: {
            item: `ftbmaterials:${material}_shard`,
          },
          tool: {
            tag: "bloodmagic:arc/resonator",
          },
        })
        .id(`ftb:bloodmagic/arc/${material}_shard_from_crystal`);

      event
        .custom({
          type: "bloodmagic:alchemytable",
          input: [
            {
              tag: `forge:crystals/${material}`,
            },
            {
              item: "bloodmagic:corrupted_dust",
            },
          ],
          output: {
            count: 2,
            item: `ftbmaterials:${material}_shard`,
          },
          syphon: 50,
          ticks: 50,
          upgradeLevel: 3,
        })
        .id(`ftb:bloodmagic/table/${material}_shard_from_crystal`);

      event
        .custom({
          type: "bloodmagic:arc",
          consumeingredient: false,
          input: {
            tag: `forge:shards/${material}`,
          },
          inputsize: 1,
          mainoutputchance: 0.0,
          output: {
            item: `ftbmaterials:${material}_dust`,
          },
          tool: {
            tag: "bloodmagic:arc/cuttingfluid",
          },
        })
        .id(`ftb:bloodmagic/arc/${material}_dust_from_shard`);
    });
  });
});

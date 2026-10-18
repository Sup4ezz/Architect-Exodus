// priority: 10000

// Tag Prefix
global.tag_prefix = "forge";

// Settings
global.clusters = false;
global.chunks = false;
global.nether_ores = true;
global.end_ores = false;

// === FLUIDS ===
global.fluid_mod = "tinkers";
global.fluid_amounts = [
  // Tag, Output Amount, Secondary Output, Secondary Output Fluid Amount
  ["gears", 180, false],
  ["ingots", 90, false],
  ["nuggets", 10, false],
  ["ores", 240, true, 20],
  ["plates", 90, false],
  ["raw_materials", 120, true, 10],
  ["storage_blocks", 810, false],
  ["raw_blocks", 1080, true, 90],
];

// == Multi Ore Output ===
global.multi_output = [
  ["aluminum", "iron"],
  ["copper", "gold"],
  ["gold", "silver"],
  ["iron", "nickel"],
  ["lead", "silver"],
  ["nickel", "iron"],
  ["platinum", "gold"],
  ["tin", "lead"],
  ["uranium", "lead"],
];

// === Ore Gen Weight ===
global.ore_gen_weights = [
  ["ancient_debris", 1, ["nether"], "minecraft:ancient_debris"],
  ["coal", 5000],
  ["copper", 5000],
  ["diamond", 50],
  ["emerald", 30],
  ["gold", 500],
  ["iron", 3000],
  ["lapis", 250],
  ["lead", 2000],
  ["quartz", 3000, ["nether"], "minecraft:nether_quartz_ore"],
  ["nickel", 2000],
  ["redstone", 200],
  ["silver", 1000],
  ["sulfur", 1000],
  ["tin", 2000],
  ["aluminum", 2000],
  ["zinc", 1000],
];

global.resources_ores_ingot = [];
global.resources_ores_gem = [];
global.resources_gens = [];
global.alloys = [];
global.gears = [];
global.rods = [];
global.plates = [];
global.wires = [];
global.gems = [];
global.blades = [];
global.fluid_types = [];
global.usedOres = [];
global.fluids = ["tconstruct:molten_uranium", "tconstruct:flowing_molten_uranium"];

// Mods

// Minecraft
if (Platform.isLoaded("minecraft")) {
  global.resources_ores_ingot.push({
    modID: "minecraft",
    modPrefixOverride: "minecraft",
    materials: ["iron", "gold", "copper"],
  });
  global.resources_ores_gem.push({
    modID: "minecraft",
    materials: [
      ["coal", 2],
      ["redstone", 10],
      ["lapis", 8, "lapis_lazuli"],
      ["diamond", 2],
      ["emerald", 2],
      ["quartz", 2],
    ],
  });

  // Special Ore Type. Need getting added here
  global.usedOres.push({
    modID: "minecraft",
    material: "ancient_debris",
  });
}

// Thermal
if (Platform.isLoaded("thermal")) {
  global.resources_ores_ingot.push({
    modID: "thermal",
    materials: ["silver", "nickel", "tin", "lead", "steel"],
  });

  global.resources_ores_gem.push({
    modID: "thermal",
    materials: [
      ["ruby", 2],
      ["sapphire", 2],
      ["apatite", 2],
      ["niter", 2],
      ["sulfur", 2],
      ["cinnabar", 2],
    ],
  });
  global.alloys.push("invar", "constantan", "electrum", "bronze", "lumium");

  global.gears.push(
    "tin",
    "iron",
    "invar",
    "gold",
    "electrum",
    "copper",
    "constantan",
    "bronze",
    "lead",
    "diamond",
    "lumium",
    "nickel",
    "silver"
  );
  global.plates.push("lumium", "lead", "invar", "electrum", "constantan", "bronze", "silver");
}

// Xycraft
if (Platform.isLoaded("xycraft_world")) {
  global.resources_ores_ingot.push({
    modID: "xycraft",
    materials: ["aluminum"],
  });

  global.plates.push("aluminum");
}

// Create
if (Platform.isLoaded("create")) {
  global.resources_ores_ingot.push({
    modID: "create",
    materials: ["zinc"],
  });
  global.alloys.push("brass");
  global.plates.push("copper", "gold", "iron", "brass", "zinc");
}

// Create Addition
if (Platform.isLoaded("createaddition")) {
  global.wires.push("iron", "gold", "copper", "electrum");
  global.rods.push("iron", "gold", "electrum", "copper", "lumium");
}

// Embers
if (Platform.isLoaded("embers")) {
  if (global.fluid_mod !== "embers") {
    global.fluids.push(
      "embers:molten_aluminum_bucket",
      "embers:molten_brass_bucket",
      "embers:molten_bronze_bucket",
      "embers:molten_constantan_bucket",
      "embers:molten_copper_bucket",
      "embers:molten_electrum_bucket",
      "embers:molten_gold_bucket",
      "embers:molten_invar_bucket",
      "embers:molten_iron_bucket",
      "embers:molten_lead_bucket",
      "embers:molten_nickel_bucket",
      "embers:molten_platinum_bucket",
      "embers:molten_silver_bucket",
      "embers:molten_tin_bucket",
      "embers:molten_uranium_bucket",
      "embers:molten_zinc_bucket",
      "embers:steam_bucket"
    );
  }
}

// Thermal Extra
if (Platform.isLoaded("thermal_extra")) {
  if (global.fluid_mod !== "thermal_extra") {
    global.fluids.push(
      "thermal_extra:raw_aluminum_bucket",
      "thermal_extra:raw_copper_bucket",
      "thermal_extra:raw_gold_bucket",
      "thermal_extra:raw_iron_bucket",
      "thermal_extra:raw_lead_bucket",
      "thermal_extra:raw_nickel_bucket",
      "thermal_extra:raw_osmium_bucket",
      "thermal_extra:raw_silver_bucket",
      "thermal_extra:raw_tin_bucket",
      "thermal_extra:raw_uranium_bucket",
      "thermal_extra:raw_zinc_bucket"
    );
  }
}

// Setup Data For Usage

// Makes an Array of used types
const usedTypes = global.resources_ores_ingot
  .filter((resource) => resource.modID !== "minecraft")
  .map((resource) => resource.materials)
  .reduce((acc, materials) => acc.concat(materials), []);

if (global.resources_ores_ingot) {
  global.resources_ores_ingot.forEach((resource) => {
    resource.materials.forEach((material) => {
      global.usedOres.push({
        modID: resource.modID,
        material: material,
      });
    });
  });
}

if (global.resources_ores_gem) {
  global.resources_ores_gem.forEach((resource) => {
    resource.materials.forEach((material) => {
      global.usedOres.push({
        modID: resource.modID,
        material: material[0],
      });
    });
  });
}

global.resources_ores_gem.forEach((mod) => {
  mod.materials.forEach((material) => {
    usedTypes.push(material[0]);
  });
});

global.alloys.forEach((alloy) => {
  usedTypes.push(alloy);
});

// All Material Types
const types = [
  "aluminum",
  "apatite",
  "antimony",
  "bauxite",
  "brass",
  "bronze",
  "chromium",
  "cinnabar",
  "constantan",
  "dimensional_shard",
  "electrum",
  "fluorite",
  "graphite",
  "invar",
  "iridium",
  "lapis_lazuli",
  "lead",
  "lumium",
  "monazite",
  "nickel",
  "niter",
  "osmium",
  "platinum",
  "plutonium",
  "quartz",
  "redstone",
  "refined_glowstone",
  "resonating_ore",
  "ruby",
  "salt",
  "sapphire",
  "silicon",
  "silver",
  "steel",
  "sulfur",
  "tin",
  "titanium",
  "tungsten",
  "uranium",
  "zinc",
];

global.hide = types.filter((ore) => !usedTypes.includes(ore));

if (!Platform.isLoaded("mekanism")) {
  global.hide.push("dirty_dust", "clump");
}

if (!global.clusters) {
  global.hide.push("cluster");
}

if (!global.chunks) {
  global.hide.push("chunk");
}

if (!global.nether_ores) {
  global.hide.push("nether_ore");
}

if (!global.end_ores) {
  global.hide.push("end_ore");
}

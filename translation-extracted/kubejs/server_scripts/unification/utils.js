// priority: 9750

function getFluidType(material) {
  if (global.fluid_mod == "tinkers") {
    return `tconstruct:molten_${material}`;
  }
}

function removeFluid(event, modID, material) {
  event.remove({
    id: `create:empty_${modID}_${material}_bucket_of_${modID}_${material}`,
  });
  event.remove({
    id: `create:fill_minecraft_bucket_with_${modID}_${material}`,
  });
  event.remove({ id: `thermal:bottler_${material}_bucket` });
}

// Function to get the secondary output of material
const conversionMap = {};
for (const [key, value] of global.multi_output) {
  conversionMap[key] = value;
}

function convertMaterial(material) {
  return conversionMap[material] || null;
}

function getOreInfo(oreName) {
  const ore = global.ore_gen_weights.find(([name]) => name === oreName);

  if (!ore) {
    return;
  }

  const weight = ore[1];
  const dims = ore.length > 2 ? ore[2] : ["nether", "overworld", "end"];
  const itemId = ore.length > 3 ? ore[3] : null;

  return { weight: weight, dimensions: dims, itemId: itemId };
}

let isFirstRun = true;

function recipeError(mod, recipeType, data, reason) {
  if (isFirstRun) {
    console.error("Make sure to reload startup Scripts!!!");
    isFirstRun = false;
  }

  console.error(`Error Adding Recipe: (${mod}, ${recipeType}), ${data} -> ${reason}`);
}

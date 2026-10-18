// priority: 100002
/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} inputBlock - blockTag
 * @param {string} oreID - itemID
 * @param {number} weight - ore Weight
 * @param {string} id - recipeID
 */
function botaniaOrechidRecipe(event, inputBlock, oreID, weight, id) {
  event
    .custom({
      type: "botania:orechid",
      input: {
        type: "block",
        block: inputBlock,
      },
      output: {
        type: "block",
        block: oreID,
      },
      weight: weight,
    })
    .id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} inputBlock - blockTag
 * @param {string} oreID - itemID
 * @param {number} weight - ore Weight
 * @param {string} id - recipeID
 */
function botaniaOrechidIgnemRecipe(event, inputBlock, oreID, weight, id) {
  event
    .custom({
      type: "botania:orechid_ignem",
      input: {
        type: "block",
        block: inputBlock,
      },
      output: {
        type: "block",
        block: oreID,
      },
      weight: weight,
    })
    .id(id);
}

/**
 * Creates a Recipe for Mythic Botany Infusion
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {Array<string|[string, number]>} opts.ingredients - Ingredient strings or [ingredient, count]. Prefix with # for tags
 * @param {string|[string, number]} opts.output - Output item (string or tuple)
 * @param {number} opts.manapool - Mana cost as a manapool amount (e.g. 1 for 1 manapool, 0.5 for half a manapool)
 * @param {string} opts.type - "plate" or "infuser" for base botania or mythic botany infusion recipes, respectively
 * @param {number} [opts.fromColor] - Optional start color (RGB int). Defaults to 255.
 * @param {number} [opts.toColor] - Optional end color (RGB int). Defaults to 65280.
 * 
 * @example
 * botaniaInfusionRecipe(event, {
 *   ingredients: [
 *     ["botania:life_essence", 2],
 *     "botania:terrasteel_ingot"
 *   ],
 *   output: "botania:gaia_ingot",
 *   manapool: 1,
 *   type: "infuser",
 * });
 */
function botaniaInfusionRecipe(event, opts) {
  let normalizedIngredients = normalizeIndividualOutputs(opts.ingredients);
  let normalizedOutput = normalizeItem(opts.output, "item");

  var manaConversion = 1000000 * opts.manapool;
  var recipeId;
  var actualType;

  if (opts.type === "plate") {
    recipeId = `ftb:botania/terra_plate/${normalizedOutput.item.split(":")[1]}`;
    actualType = "botania:terra_plate";
  } else if (opts.type === "infuser") {
    recipeId = `ftb:mythicbotany/infuser/${normalizedOutput.item.split(":")[1]}`;
    actualType = "mythicbotany:infuser";
  } else {
    throw new Error(`Invalid type '${opts.type}' for botania infusion recipe with output '${normalizedOutput.item}'. Must be 'plate' or 'infuser'.`);
  }

  let recipeData = {
    type: actualType,
    ingredients: normalizedIngredients,
    mana: manaConversion,
  }

  if (opts.type === "plate") {
    recipeData.result = normalizedOutput;
  }
  
  if (opts.type === "infuser") {
    recipeData.group = "infuser";
    recipeData.fromColor = opts.fromColor !== undefined ? opts.fromColor : 0xFFFF00;
    recipeData.output = normalizedOutput;
    recipeData.toColor = opts.toColor !== undefined ? opts.toColor : 0x4B0082;
  }

  // console.log(`Custom Botania Recipe: ${JSON.stringify(recipeData)}`);
  event.custom(recipeData).id(recipeId);
}

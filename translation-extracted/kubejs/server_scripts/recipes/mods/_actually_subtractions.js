// priority: 100002
/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} inputBlock - blockID
 * @param {string} oreID - itemID
 * @param {number} weight - ore Weight
 * @param {string} id - recipeID
 */
function actuallyadditionsMiningLensRecipe(event, inputBlock, oreID, weight, id) {
  event
    .custom({
      type: "actuallyadditions:mining_lens",
      ingredient: {
        item: inputBlock,
      },
      output_type: "item",
      result: {
        item: oreID,
      },
      weight: weight,
    })
    .id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} ingredientItem - itemID
 * @param {Array<[string, number?, number?]>} outputItems
 * - itemID
 * - count
 * - weight (0.0 - 1.0)
 * @param {string} id - recipeID
 */
function actuallyAdditionsCrushingRecipe(event, ingredientItem, outputItems, id) {
  event
    .custom({
      type: "actuallyadditions:crushing",
      ingredient: { tag: ingredientItem },
      result: outputItems.map((entry) => {
        let result = {
          result: { id: entry[0] },
        };
        if (entry[1] !== undefined) result.result.Count = entry[1];
        if (entry[2] !== undefined) result.chance = entry[2];
        return result;
      }),
    })
    .id(id);
}

/**
 * Creates a Recipe for Actually Additions Empowerer
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {string} opts.input - Centre item (prefix with # for tags)
 * @param {Array<string>} opts.modifiers - Secondary items (prefix with # for tags)
 * @param {string} opts.output - Output itemID
 * @param {number} opts.energy - Energy cost
 * @param {number} opts.time - Processing time (mod default = 50)
 * @param {number} opts.color - Display color (decimal RGB)
 */
function actuallyAdditionsEmpoweringRecipe(event, opts) {
  function resolveItemOrTag(entry) {
    if (entry.startsWith("#")) {
      return { tag: entry.substring(1) };
    }
    return { item: entry };
  }

  event
    .custom({
      type: "actuallyadditions:empowering",
      base: resolveItemOrTag(opts.input),
      modifiers: opts.modifiers.map(function (mod) { return resolveItemOrTag(mod); }),
      result: {
        item: opts.output,
      },
      energy: opts.energy,
      time: opts.time,
      color: opts.color,
    })
    .id(`ftb:actually_subtractions/empowerer/${opts.output.split(":")[1]}`);
}

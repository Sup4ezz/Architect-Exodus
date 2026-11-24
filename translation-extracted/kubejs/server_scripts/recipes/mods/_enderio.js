// priority: 100000

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} itemInputTag - itemTag
 * @param {Array<[string, number?, number?]>} outputItems
 * -
 * - itemID
 * - count
 * - weight (0.0 - 1.0)
 * @param {string} id - recipeID
 * @param {boolean} bonus - whether bonus output is allowed
 */
function enderIOBasicSagMillingRecipe(event, itemInputTag, outputItems, id, bonus) {
  const recipe = {
    type: "enderio:sag_milling",
    energy: 2400,
    input: { tag: itemInputTag },
    outputs: outputItems.map((entry) => {
      let result = { item: entry[0] };
      if (entry[1] !== undefined) result.count = entry[1];
      if (entry[2] !== undefined) result.chance = entry[2];
      return result;
    }),
  };

  if (bonus === false) {
    recipe.bonus = "none";
  }

  event.custom(recipe).id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} inputTag - itemTag
 * @param {string | [string, number]} outputItem
 * - itemID
 * - count
 * @param {string} id - recipeID
 */
function enderIOBasicAlloySmeltingRecipe(event, inputTag, outputItem, id) {
  const outputID = Array.isArray(outputItem) ? outputItem[0] : outputItem;
  const outputAmount = Array.isArray(outputItem) ? outputItem[1] : 1;

  event
    .custom({
      type: "enderio:alloy_smelting",
      energy: 1500,
      experience: 0.35,
      is_smelting: true,
      inputs: [
        {
          ingredient: {
            tag: inputTag,
          },
          count: outputAmount,
        },
      ],
      result: { item: outputID, count: outputAmount },
    })
    .id(id);
}

/**
 *
 * @param {RecipesEventJS} event
 * @param {Array<{ count: number, tag?: string, item?: string }>} inputs - input ingredients (tag or item)
 * @param {string} output - result item ID
 * @param {number} energy - energy required
 * @param {number} experience - experience gained
 * @param {string} recipeID - unique recipe ID
 * 
 * @example
 * Example Usage:
 * enderioAlloySmeltingRecipe(event, [
 *   { tag: "forge:ingots/gold", count: 1 },
 *   { tag: "forge:ingots/silver", count: 1 }
 * ], "ftbmaterials:electrum_ingot", 6400, 0.3, "electrum");
 */
function enderioAlloySmeltingRecipe(event, inputs, output, output_count, energy, experience, recipeID) {
  const formattedInputs = inputs.map((input) => ({
    count: input.count,
    ingredient: input.tag ? { tag: input.tag } : { item: input.item },
  }));

  event
    .custom({
      type: "enderio:alloy_smelting",
      energy: energy,
      experience: experience,
      inputs: formattedInputs,
      result: {
        count: output_count,
        item: output,
      },
    })
    .id(`ftb:enderio/alloy_smelting/${recipeID}`);
}

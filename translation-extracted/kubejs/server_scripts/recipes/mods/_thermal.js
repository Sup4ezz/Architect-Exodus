// priority: 100002

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} ingredientTag - itemTag
 * @param {Array<[string, number?, number?]> | [string, number?, number?]} outputItem
 * -
 * - itemID
 * - count
 * - weight (0.0 - 1.0)
 * @param {string} id - recipeID
 */
function thermalPulverizerRecipe(event, ingredientTag, outputItem, id) {
  const outputArray = Array.isArray(outputItem[0]) ? outputItem : [outputItem];

  const results = outputArray.map((entry) => {
    if (typeof entry === "string") {
      return { item: entry, count: 1 };
    }

    var item = entry[0];
    var count = entry[1];
    var chance = entry[2];

    var result = { item: item };
    if (count !== undefined) result.count = count;
    if (chance !== undefined) result.chance = chance;
    return result;
  });

  var recipe = {
    type: "thermal:pulverizer",
    ingredient: { tag: ingredientTag },
    result: results,
  };

  event.custom(recipe).id(id);
}

/**
 *
 * @param {RecipesEventJS} event
 * @param {Array<{ tag?: string, item?: string, count: number }>} ingredients - 2 or 3 ingredients
 * @param {string} output - output item ID
 * @param {number} outputCount - output item count
 * @param {number} energy - energy cost
 * @param {string} recipeID - recipe ID (no namespace)
 * 
 * @example
 * thermalSmelterRecipe(event, [
 *   { tag: "forge:dusts/redstone", count: 1 },
 *   { tag: "forge:ingots/gold", count: 1 },
 *   { tag: "forge:dusts/glowstone", count: 1 }
 * ], "enderio:energetic_alloy_ingot", 1, 12000, 'energetic_alloy');
 */

function thermalSmelterRecipe(event, ingredients, output, outputCount, energy, recipeID) {
  if (ingredients.length < 2 || ingredients.length > 3) {
    console.error(`Invalid number of ingredients in thermalSmelterRecipe: expected 2 or 3, got ${ingredients.length}`);
    return;
  }

  const ingredientList = ingredients.map((ing) => ({
    value: [ing.tag ? { tag: ing.tag } : { item: ing.item }],
    count: ing.count,
  }));

  event
    .custom({
      type: "thermal:smelter",
      ingredients: ingredientList,
      result: [
        {
          item: output,
          count: outputCount,
        },
      ],
      energy: energy,
    })
    .id(`ftb:thermal/smelter/${ingredients.length === 2 ? "simple" : "complex"}/${recipeID}`);
}

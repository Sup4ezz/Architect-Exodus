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
 */
function createBasicCrushingRecipe(event, itemInputTag, outputItems, id) {
  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          tag: itemInputTag,
        },
      ],
      processingTime: 400,
      results: outputItems.map((entry) => {
        let result = { item: entry[0] };
        if (entry[1] !== undefined) result.count = entry[1];
        if (entry[2] !== undefined) result.chance = entry[2];
        return result;
      }),
    })
    .id(id);
}

/**
 *
 * @param {RecipesEventJS} event
 * @param {Array<{ tag?: string, item?: string, count?: number }>} ingredients - input ingredients (tag or item)
 * @param {Array<{ item: string, count?: number }>} results - output items
 * @param {string} heated - the heat requirement (none, heated or superheated)
 * @param {string} recipeID - unique recipe ID
 *
 * @example 
 * Basic Example
 * createMixingRecipe(event,
 *  [
 *    { tag: "forge:dusts/redstone", count: 1 },
 *    { tag: "forge:ingots/gold", count: 1 },
 *    { tag: "forge:dusts/glowstone", count: 1 }
 *  ],
 *  [
 *    { item: "enderio:energetic_alloy_ingot", count: 1 }
 *  ],
 *  true,
 *  "energetic_alloy_heated");
*/
function createMixingRecipe(event, ingredients, results, heated, recipeID) {
  const formattedIngredients = ingredients
    .map((ing) => {
      const single = {};
      if (ing.tag) single.tag = ing.tag;
      if (ing.item) single.item = ing.item;

      const count = ing.count ? ing.count : 1;

      // Create an array with the ingredient repeated 'count' times
      const repeated = [];
      for (let i = 0; i < count; i++) {
        repeated.push(single);
      }
      return repeated;
    })
    .reduce((a, b) => a.concat(b), []); // Flattens the nested arrays

  const formattedResults = results.map((res) => ({
    item: res.item,
    count: res.count || 1,
  }));

  const recipe = {
    type: "create:mixing",
    ingredients: formattedIngredients,
    results: formattedResults,
  };

  switch (heated) {
    case "heated":
      recipe.heatRequirement = "heated";
      break;
    case "superheated":
      recipe.heatRequirement = "superheated";
    default:
      break;
  }

  event.custom(recipe).id(`ftb:create/alloying/${recipeID}`);
}


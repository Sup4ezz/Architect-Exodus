// priority: 100002

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} ingredientTag - itemTag
 * @param {Array<[string, number?, number?]>} outputItems
 * -
 * - itemID
 * - count
 * - weight (0.0 - 1.0)
 * @param {string} id - recipeID
 */
function integratedDynamicsMechanicalSqueezerRecipe(event, ingredientTag, outputItems, id) {
  event
    .custom({
      type: "integrateddynamics:mechanical_squeezer",
      item: { tag: ingredientTag },
      result: {
        items: outputItems.map((entry) => {
          let result = { item: { item: entry[0] } };
          if (entry[1] !== undefined) result.item.count = entry[1];
          if (entry[2] !== undefined) result.chance = entry[2];
          return result;
        }),
      },
      duration: 40,
    })
    .id(id);
}

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} ingredientTag - itemTag
 * @param {Array<[string, number?, number?]>} outputItems
 * -
 * - itemID
 * - count
 * - weight (0.0 - 1.0)
 * @param {string} id - recipeID
 */
function integratedDynamicsSqueezerRecipe(event, ingredientTag, outputItems, id) {
  event
    .custom({
      type: "integrateddynamics:squeezer",
      item: { tag: ingredientTag },
      result: {
        items: outputItems.map((entry) => {
          let result = { item: { item: entry[0] } };
          if (entry[1] !== undefined) result.item.count = entry[1];
          if (entry[2] !== undefined) result.chance = entry[2];
          return result;
        }),
      },
    })
    .id(id);
}

// priority: 100002

/**
 * Creates a Recipe for Blood Magic Soulforge
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {Array<string|{item:string, count?:number, nbt?:object}>} opts.input - Input items array (1-4 items)
 * @param {string|{item:string, count?:number, nbt?:object}} opts.output - Output item (string or object)
 * @param {Array<number>|{drain:number, minimumDrain:number}} opts.drain - Drain values [drain, minimumDrain] or object
 * @param {string} [opts.id] - Optional recipe ID (defaults to ftb:soulforge/namespace:path)
 * 
 * @example
 * bloodMagicSoulforge(event, {
 *   input: [
 *     "occultism:otherstone_pedestal",
 *     "malum:cthonic_gold",
 *     "occultism:spirit_attuned_crystal",
 *     "occultism:book_of_binding_foliot",
 *   ],
 *   output: "occultism:datura_seeds",
 *   drain: [16.0, 16.0],
 * });
 */
function bloodMagicSoulforge(event, { input, output, drain, id }) {
  const itemOutput = typeof output === "string" ? { item: output } : output;
  const drainValues = Array.isArray(drain) ? { drain: drain[0], minimumDrain: drain[1] } : drain;

  const inputs = input.map((item) => {
    if (typeof item === "string") {
      if (item.startsWith("#")) {
        return { tag: item.substring(1) };
      }
      return { item: item };
    }
    return item;
  });

  const recipe_id = id || `ftb:soulforge/${itemOutput.item.split(":")[1]}`;

  const recipeData = {
    type: "bloodmagic:soulforge",
    drain: drainValues.drain,
    minimumDrain: drainValues.minimumDrain,
    output: itemOutput,
  };

  inputs.forEach((item, index) => {
    recipeData[`input${index}`] = item;
  });

  event.custom(recipeData).id(recipe_id);
}

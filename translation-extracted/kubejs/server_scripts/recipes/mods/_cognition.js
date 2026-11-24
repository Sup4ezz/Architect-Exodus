// priority: 100002

/**
 * Creates a Recipe for Experience Obelisk Molecular Metamorphosis
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {Array<string|[string, number]|object>} opts.inputs - Up to 3 input items. Prefix with '#' for tags.
 * @param {string|[string, number]|object} opts.output - Output item. String auto-wraps with count:1.
 * @param {number} opts.expCost - Experience cost
 * @param {number} [opts.duration] - Process time in ticks (default: 20)
 * @param {string} [opts.id] - Optional recipe ID. Defaults to ftb:molecular_metamorphosis/<output_name>
 *
 * @example
 * cognitionMolecularMetamorphosis(event, {
 *   inputs: [
 *     ["experienceobelisk:cognitive_flux", 2],
 *     "actuallyadditions:solidified_experience"
 *   ],
 *   output: "experienceobelisk:cognitive_crystal",
 *   expCost: 16,
 *   duration: 40,
 * });
 */
function cognitionMolecularMetamorphosis(event, { inputs, output, expCost, duration, id }) {
  output = normalizeItem(output, "item");

  const slots = [];
  for (let i = 0; i < 3; i++) {
    if (inputs[i]) {
      var input = normalizeItem(inputs[i], "item");
      slots.push({
        ingredient: input.tag ? { tag: input.tag } : { item: input.item },
        count: input.count,
      });
    } else {
      slots.push({ ingredient: [], count: 0 });
    }
  }

  event
    .custom({
      type: "experienceobelisk:molecular_metamorphosis",
      ingredient1: slots[0].ingredient,
      count1: slots[0].count,
      ingredient2: slots[1].ingredient,
      count2: slots[1].count,
      ingredient3: slots[2].ingredient,
      count3: slots[2].count,
      result: output,
      cost: expCost,
      processTime: duration || 20,
    })
    .id(id ?? "ftb:molecular_metamorphosis/" + output.item.split(":")[1]);
}

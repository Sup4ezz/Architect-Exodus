// priority: 100002

/**
 * Creates a Recipe for Malum Spirit Infusion
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {string|[string, number]|object} opts.input - Main activation item (string, tuple, or object). Prefix with # for tags
 * @param {string|[string, number]|object} opts.output - Main output item (string, tuple, or object). Prefix with # for tags
 * @param {Array<string|[string, number]|object>} opts.spirits - Spirit requirements (strings, tuples, or objects)
 * @param {Array<string|[string, number]|object>} opts.extraItems - Optional extra items (strings, tuples, or objects). Prefix with # for tags
 *
 * @example
 * (Basic NBTs are easier parsed as objects)
 * malumSpiritInfusion(event, {
 *   input: "minecraft:ender_pearl",
 *   output: { item: "gateways:gate_pearl", nbt: "{gateway:'gateways:elemental_heart'}" },
 *   spirits: [
 *     ["infernal", 2 ],
 *     ["earthen", 2 ],
 *     ["aqueous", 2 ],
 *     ["aerial", 2 ],
 *   ],
 *   extraItems: [
 *     ["minecraft:quartz", 2]
 *   ]
 * });
 */
function malumSpiritInfusion(event, { input, output, spirits, extraItems, id, useNbtFromInput }) {
  input = normalizeItem(input, "item");
  output = normalizeItem(output, "item");
  const normalizedSpirits = (spirits || []).map((spirit) => normalizeItem(spirit, "type"));
  const normalizedExtraItems = (extraItems || []).map((extra) => normalizeItem(extra, "item"));

  const recipeData = {
    type: "malum:spirit_infusion",
    extra_items: normalizedExtraItems,
    spirits: normalizedSpirits,
    input: input,
    output: output,
  };
  if (useNbtFromInput === false) recipeData.useNbtFromInput = false;

  event
    .custom(recipeData)
    .id(id ?? `ftb:spirit_infusion/${(output.item || output.tag).split(":")[1]}`);
}

// priority: 100002

/**
 * Creates a Recipe for Ars Nouveau's Enchanting Apparatus
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {string|[string, number]|object} opts.input - Main activation item (string, tuple, or object). Prefix with # for tags
 * @param {Array<string|[string, number]|object>} opts.pedestalItems - Items to place on pedestals. Strings and objects
 *   are used as-is; a tuple ["item:id", count] expands into `count` repeated entries. Prefix item IDs with # for tags.
 * @param {string|[string, number]|object} opts.output - Main output item (string, tuple, or object). Prefix with # for tags
 * @param {number} opts.source - Source cost for the enchanting apparatus
 * @param {boolean} opts.keepNBT - (Optional) Whether to keep NBT of the reagent
 * @param {string} opts.id - (Optional) ID for the recipe
 */
function arsNouveauEnchantingApparatus(event, { input, pedestalItems, output, source, keepNBT, id }) {
  input = normalizeItem(input, "item");
  output = normalizeItem(output, "item");
  const normalizedPedestalItems = normalizeIndividualOutputs(pedestalItems);
  
  event
    .custom({
      type: "ars_nouveau:enchanting_apparatus",
      keepNbtOfReagent: !!keepNBT,
      output: output,
      pedestalItems: normalizedPedestalItems,
      reagent: [input],
      sourceCost: source,
    })
    .id(id ?? "ftb:enchanting_apparatus/" + (output.item || output.tag || "unknown").split(":")[1]);
}
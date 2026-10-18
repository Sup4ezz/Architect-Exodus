// priority: 100002

function parseInput(input) {
  if (typeof input === "string") {
    if (input.startsWith("#")) {
      return Ingredient.of(input);
    }
    return input;
  }

  const [item, qtt] = input;
  const quantity = qtt || 1;

  if (item.startsWith("#")) {
    return quantity > 1 ? `${quantity}x ${Ingredient.of(item)}` : Ingredient.of(item);
  }

  return quantity > 1 ? `${quantity}x ${item}` : item;
}

function parseItemQuantity(input) {
  if (typeof input === "string") {
    return [input, 1];
  }
  const [item, qtt] = input;
  return [item, qtt || 1];
}

/**
 * Creates custom recipes for Summoning Ritual Mod
 * @param {RecipesEventJS} event - Recipe Event
 * @param {Object} opts - Named parameter objects
 * @param {string|Array} opts.altarItem - Altar input (mandatory) - can be string or [item, qtt]
 * @param {Array<string|Array>} opts.itemOutputs - Array of item outputs [item, qtt]
 * @param {Array<string|Object>} opts.mobOutputs - Array of mob outputs (string or SummoningOutput object)
 * @param {Array<string|Array>} opts.inputs - Array of inputs [item, qtt]
 * @param {Array<string|Array>} opts.sacrifices - Array of sacrifices [mob, count]
 * @param {Array<number>} opts.sacrificeRegion - Sacrifice region [x, z]
 * @param {number} opts.recipeTime - Recipe time (default: 200)
 * @param {Object} opts.blockBelow - Block below requirement {block, state}
 * @param {string} opts.dayTime - Day time requirement ('day' or 'night')
 * @param {string} opts.weather - Weather requirement ('clear', 'rain', 'thunder')
 * @param {string} opts.id - Recipe ID field (will be prefixed with 'ftb:summoning/')
 *
 * @example
 * // Basic ritual example
 * summoningRitualRecipe(event, {
 *   altarItem: '#forge:ingots',
 *   itemOutputs: [
 *     ['gold_ingot', 3],
 *     'diamond'
 *   ],
 *   inputs: [
 *     ['minecraft:stone', 64],
 *     ['prismarine_shard', 5],
 *     '#forge:glass'
 *   ],
 *   id: 'basic_ritual'
 * });
 *
 * @example
 * // Advanced ritual with mob outputs and requirements
 * summoningRitualRecipe(event, {
 *   altarItem: '#forge:ingots',
 *   itemOutputs: [
 *     ['gold_ingot', 3],
 *     'diamond'
 *   ],
 *   mobOutputs: [
 *     'wolf',
 *     SummoningOutput.mob('blaze')
 *       .count(5)
 *       .offset(0, 3, 0)
 *       .spread(4, 0, 4)
 *       .data({ Health: 50, Attributes: [{ Name: 'generic.max_health', Base: 50 }]})
 *   ],
 *   inputs: [
 *     ['minecraft:stone', 64],
 *     ['amethyst_shard', 10],
 *     '#forge:glass'
 *   ],
 *   sacrifices: [
 *     ['pig', 3],
 *     'cow'
 *   ],
 *   sacrificeRegion: [3, 3],
 *   recipeTime: 200,
 *   blockBelow: { block: 'minecraft:furnace', state: { lit: true } },
 *   dayTime: 'day',
 *   weather: 'clear',
 *   id: 'advanced_ritual'
 * });
 */
function summoningRitualRecipe(
  event,
  {
    altarItem,
    itemOutputs,
    mobOutputs,
    inputs,
    sacrifices,
    sacrificeRegion,
    blockBelow,
    dayTime,
    weather,
    recipeTime,
    id,
  }
) {
  if (!altarItem) {
    console.error(`summoningRitualRecipe: "ftb:summoning/${id}" - "altarItem" is mandatory`);
    return;
  }

  recipeTime = recipeTime || 100;

  let recipe = event.recipes.summoningrituals.altar(parseInput(altarItem));

  if (itemOutputs && itemOutputs.length > 0) {
    itemOutputs.forEach((output) => {
      const [item, qtt] = parseItemQuantity(output);
      recipe = recipe.itemOutput(qtt > 1 ? `${qtt}x ${item}` : item);
    });
  }

  if (mobOutputs && mobOutputs.length > 0) {
    mobOutputs.forEach((mob) => {
      recipe = recipe.mobOutput(mob);
    });
  }

  if (inputs && inputs.length > 0) {
    inputs.forEach((input) => {
      recipe = recipe.input(parseInput(input));
    });
  }

  if (sacrifices && sacrifices.length > 0) {
    sacrifices.forEach((sacrifice) => {
      const [mob, count] = parseItemQuantity(sacrifice);
      recipe = recipe.sacrifice(mob, count);
    });
  }

  if (sacrificeRegion?.length === 2) {
    recipe = recipe.sacrificeRegion(sacrificeRegion[0], sacrificeRegion[1]);
  }

  recipe = recipe.recipeTime(recipeTime);

  if (blockBelow) {
    recipe = recipe.blockBelow(blockBelow.block, blockBelow.state || {});
  }

  if (dayTime) {
    recipe = recipe.dayTime(dayTime);
  }

  if (weather) {
    recipe = recipe.weather(weather);
  }

  if (id) {
    recipe = recipe.id(`ftb:summoning/${id}`);
  }

  return recipe;
}

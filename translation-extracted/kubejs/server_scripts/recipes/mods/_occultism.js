// priority: 100002

/**
 *
 * @param {RecipesEventJS} event - recipeEvent
 * @param {string} ingredientTag - itemTag
 * @param {string} oreID - output itemID
 * @param {number} weight - weight (0.0 - 1.0)
 * @param {string} id - recipeID
 */
function occultismMinerRecipe(event, ingredientTag, oreID, weight, id) {
  event
    .custom({
      type: "occultism:miner",
      ingredient: {
        tag: ingredientTag,
      },
      result: {
        item: oreID,
      },
      weight: weight,
    })
    .id(id);
}

/**
 * Creates a Custom Recipe for Occultism Rituals
 * @param {RecipesEventJS} event - recipeEvent
 * @param {object} opts - Named parameters object
 * @param {string} opts.ritualType - Ritual Type (e.g. craft, summon with job) {Default: Craft}
 * @param {string} opts.pentacleName - Pentacle Name in JEI
 * @param {string} opts.activationItem - Ritual activation item
 * @param {Array<{item:string, amount:number, nbt?:object}>} opts.ingredientList - Array of ingredient objects. Each entry can be:
 *   - Simple: `{item: "minecraft:diamond", amount: 4}`
 *   - With tag: `{item: "#forge:ingots/gold", amount: 8}`
 *   - With NBT: `{item: "minecraft:enchanted_book", amount: 1, nbt: {StoredEnchantments: [{id: "minecraft:sharpness", lvl: 5}]}}`
 * @param {string|{item:string, count?:number, nbt?:object}} opts.ingredientResult - Crafting output. Can be:
 *   - Simple string: `"minecraft:diamond"`
 *   - Object with count: `{item: "minecraft:diamond_sword", count: 1}`
 *   - Object with NBT: `{item: "minecraft:diamond_sword", nbt: {Enchantments: [{id: "minecraft:sharpness", lvl: 5}]}}`
 * @param {number} opts.ritualDuration - Ritual duration in ticks (20 ticks = 1 second)
 * @param {number} [opts.spiritMaxAge] - Optional: Maximum age for summoned spirits in ticks (for summon_spirit_with_job rituals)
 * @param {string} [opts.spiritJobType] - Optional: Job type for summoned spirits (e.g., "occultism:crush_tier1")
 * @param {string} [opts.entityToSummon] - Optional: Entity to summon (e.g., "occultism:foliot")
 * @param {{tag:string, displayname:string}} [opts.entityToSacrifice] - Optional: Entity sacrifice definition (e.g., {tag: "forge:cows", displayname: "ritual.occultism.sacrifice.cows"})
 * @example
 * // Spirit summoning with job example
 * occultismRitualRecipe(event, {
 *   ritualType: "occultism:summon_spirit_with_job",
 *   pentacleName: "conjure glyph",
 *   activationItem: "occultism:book_of_binding_bound_foliot",
 *   ingredientList: [
 *     {item: "#forge:raw_materials/iron", amount: 1},
 *     {item: "#forge:raw_materials/gold", amount: 1},
 *     {item: "#forge:raw_materials/copper", amount: 1},
 *     {item: "#forge:raw_materials/silver", amount: 1}
 *   ],
 *   ingredientResult: "occultism:jei_dummy/none",
 *   ritualDuration: 60,
 *   spiritMaxAge: 32400,
 *   spiritJobType: "occultism:crush_tier1",
 *   entityToSummon: "occultism:foliot"
 * });
 *
 * @example
 * // Complex crafting recipe example
 * occultismRitualRecipe(event, {
 *   ritualType: "occultism:craft",
 *   pentacleName: "craft_marid",
 *   activationItem: "occultism:book_of_binding_bound_marid",
 *   ingredientList: [
 *     {item: "minecraft:nether_star", amount: 1},
 *     {item: "#forge:gems/diamond", amount: 8},
 *     {
 *       item: "minecraft:enchanted_book",
 *       amount: 1,
 *       nbt: {StoredEnchantments: [{id: "minecraft:sharpness", lvl: 5}]}
 *     }
 *   ],
 *   ingredientResult: {
 *     item: "minecraft:diamond_sword",
 *     nbt: {
 *       Enchantments: [
 *         {id: "minecraft:sharpness", lvl: 5},
 *         {id: "minecraft:looting", lvl: 3}
 *       ],
 *       display: {
 *         Name: '{"text":"Blade of the Ancients","color":"dark_purple","bold":true}',
 *         Lore: [
 *           '{"text":"Forged in ritual flames","color":"gray","italic":true}',
 *           '{"text":"Bound by Marid power","color":"gray","italic":true}'
 *         ]
 *       },
 *       AttributeModifiers: [
 *         {
 *           AttributeName: "generic.attack_damage",
 *           Name: "generic.attack_damage",
 *           Amount: 12,
 *           Operation: 0,
 *           UUID: [I; 1, 2, 3, 4],
 *           Slot: "mainhand"
 *         }
 *       ]
 *     }
 *   },
 *   ritualDuration: 1200
 * });
 */
function occultismRitualRecipe(event, {
  ritualType,
  pentacleName, 
  activationItem,
  ingredientList, 
  ingredientResult, 
  ritualDuration,
  spiritMaxAge,
  spiritJobType,
  entityToSummon,
  entityToSacrifice,
  ritualDummy
}) {
  ritualType = ritualType || "occultism:craft";
  ingredientResult = ingredientResult || "occultism:jei_dummy/none";
  ingredientList = ingredientList || [];
  ritualDummy = ritualDummy || "occultism:ritual_dummy/custom_ritual";

  let resultObject;
  let itemId;
  let itemName;

  if (typeof ingredientResult === 'string') {
    itemId = ingredientResult;
    resultObject = { item: ingredientResult };
  } else if (typeof ingredientResult === 'object' && ingredientResult !== null) {
    itemId = ingredientResult.item || ingredientResult.id || 'unknown_item';
    resultObject = ingredientResult;
  } else {
    console.error(`Invalid ingredientResult format for occultism recipe containing: ${ingredientList}`);
    return;
  }

  if (itemId === "occultism:jei_dummy/none") {
    if (spiritJobType) {
      itemName = spiritJobType.includes(":") ? spiritJobType.split(":")[1] : spiritJobType;
    } else if (entityToSummon) {   
      itemName = entityToSummon.includes(":") ? entityToSummon.split(":")[1] : entityToSummon;
    } else {
      itemName = "summon";
    }
  } else {
    itemName = itemId.includes(":") ? itemId.split(":")[1] : itemId;
  }

  const recipe_id = `ftb:ritual/${itemName}`;

  pentacleName = pentacleName.toLowerCase().trim();
  const pentacle = OccultismPentacles[pentacleName];
  if (!pentacle) {
    console.error(`Invalid pentacle name: ${pentacleName} for recipe ${recipe_id}`);
    return;
  }

  const ingredients = [];

  ingredientList.forEach(entry => {
    const itemId = entry.item || (entry.tag ? "#" + entry.tag : null);
    const amount = entry.amount || 1;

    if (!itemId || amount < 1) {
      console.error(`Invalid ingredient entry: ${JSON.stringify(entry)} for recipe ${recipe_id}`);
      return;
    }

    const isTag = itemId.startsWith("#");
    const tagName = isTag ? itemId.substring(1) : null;

    let baseIngredient;
    if (isTag) {
      baseIngredient = { tag: tagName };
    } else {
      baseIngredient = { item: itemId };
      if (entry.nbt) {
        baseIngredient.nbt = entry.nbt;
      }
    }
    
    for (let i = 0; i < amount; i++) {
      ingredients.push(JSON.parse(JSON.stringify(baseIngredient)));
    }
  });

  let sacrificeData;
  if (entityToSacrifice !== undefined) {
    if (typeof entityToSacrifice !== 'object' || entityToSacrifice === null || !entityToSacrifice.tag || !entityToSacrifice.displayname) {
      console.error(`Invalid entityToSacrifice for recipe ${recipe_id}`);
      return;
    }
    sacrificeData = {
      tag: entityToSacrifice.tag,
      display_name: entityToSacrifice.displayname,
    };
  }

  const recipeData = {
    type: "occultism:ritual",
    ritual_type: ritualType,
    ritual_dummy: {
      item: ritualDummy
    },
    pentacle_id: pentacle,
    activation_item: {
      item: activationItem
    },
    ingredients: ingredients,
    result: resultObject,
    duration: ritualDuration
  };

  if (spiritMaxAge !== undefined) {
    recipeData.spirit_max_age = spiritMaxAge;
  }
  if (spiritJobType !== undefined) {
    recipeData.spirit_job_type = spiritJobType;
  }
  if (entityToSummon !== undefined) {
    recipeData.entity_to_summon = entityToSummon;
  }
  if (sacrificeData !== undefined) {
    recipeData.entity_to_sacrifice = sacrificeData;
  }

  event.custom(recipeData).id(recipe_id);
}
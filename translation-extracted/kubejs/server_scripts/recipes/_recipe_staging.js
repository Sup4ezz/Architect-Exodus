// priority: -10
const typeIgnores = [
  /^integrateddynamics:crafting_special_/,
  /^cucumber:/,
  /^mantle:/,
  "reliquary:alkahestry_crafting",
  "minecraft:smithing_transform",
  "botania:gog_alternation",
  "geore:blasting",
  "geore:furnace",
  "mcjtylib:copy_nbt",
  "fluxnetworks:nbt_wipe_recipe",
];

const debugLogging = false; // Controls detailed logging for recipe staging. Set to false to reduce log spam
let devBypassOverride = false; // Set to false before release

function logDebug(message) {
  if (!debugLogging) return;
  if (typeof message === "string") {
    console.log(message);
    return;
  }
  console.log("");
  console.log("--------------------------------------------------");
}

function normalizeRecipeType(recipeType) {
  if (recipeType === "minecraft:crafting_shaped" || recipeType === "minecraft:crafting_shapeless") {
    return "minecraft:crafting";
  }
  return recipeType;
}

// Merges defaults with per-entry overrides
function resolve(defaults, entry) {
  return Object.assign({}, defaults, entry);
}

function isDevBypass(stagingObject, defaults) {
  if (devBypassOverride) return true;
  return stagingObject?.devBypass ?? defaults?.devBypass ?? false;
}

function applyModStaging(stagingObject) {
  let mod = stagingObject.mod;
  let stage = stagingObject.stage ?? `${mod}_stage`;
  let ignoreItems = stagingObject.ignoreItems ?? [];
  let ignoreTags = stagingObject.ignoreTags ?? [];
  let hideModRecipes = stagingObject.hideModRecipes ?? true;
  let stagingID = `ftb:astages_mod_${mod}`;

  logDebug(`[MOD STAGING] Gating items from mod "${mod}" to stage "${stage}". Ignoring Tags: [${ignoreTags.join(", ")}] | Ignoring items: [${ignoreItems.join(", ")}]`);

  AStages.addRestrictionForMod(stagingID, stage, mod).ignoreItems(ignoreItems).ignoreTags(ignoreTags);
  logDebug(`Gated non-ignored items from mod "${mod}" to stage "${stage}"`);

  if (hideModRecipes) {
    AStages.addRestrictionForModRecipe(`${stagingID}/recipes`, stage, mod);
    logDebug(`All recipes using mod "${mod}" gated to "${stage}"`);
  }
  logDebug();
}

ServerEvents.recipes((event) => {
  console.log("[STAGING] Starting recipe staging...");

  global.stagedMods.forEach((modEntry) => {
    if (isDevBypass(modEntry)) return logDebug(`devBypass for mod "${modEntry.mod}"`);
    applyModStaging(modEntry);
  });

  let itemCfgMap = {};

  Object.values(global.stagedItems).forEach((value) => {
    if (value.tags)
      value.tags.forEach((stagingObject) => {
        if (isDevBypass(stagingObject, value.defaults)) {
          logDebug(`devBypass for tag "${stagingObject.tag}"`);
          return;
        }
        let groupCfg = resolve(value.defaults, stagingObject);
        let tagItemIds = Ingredient.of("#" + stagingObject.tag).itemIds;
        let ignore = groupCfg.ignoreItems || [];
        let expanded = 0;
        let skipped = 0;

        tagItemIds.forEach((id) => {
          let itemId = id.toString();
          if (ignore.indexOf(itemId) !== -1) {
            skipped++;
            return;
          }
          let perItem = Object.assign({}, stagingObject, { item: itemId });
          delete perItem.tag;
          let cfg = resolve(value.defaults, perItem);
          let storable = cfg.canAttack || cfg.canEquip;
          cfg.canPickUp = cfg.canPickUp || storable;
          if (!itemCfgMap[itemId]) itemCfgMap[itemId] = [];
          itemCfgMap[itemId].push(cfg);
          expanded++;
        });

        logDebug(`[TAG STAGING] ${stagingObject.tag} -> ${expanded} items gated to "${groupCfg.stage}" (ignored ${skipped})`);
      });

    if (value.items)
      value.items.forEach((stagingObject) => {
        if (isDevBypass(stagingObject, value.defaults)) {
          logDebug(`devBypass for item "${stagingObject.item}"`);
          return;
        }
        let cfg = resolve(value.defaults, stagingObject);
        let storable = cfg.canAttack || cfg.canEquip;
        cfg.canPickUp = cfg.canPickUp || storable;
        if (!itemCfgMap[cfg.item]) itemCfgMap[cfg.item] = [];
        itemCfgMap[cfg.item].push(cfg);
        logDebug(`[ITEM STAGING] ${cfg.item} gated to stage "${cfg.stage}"`);
      });
  });

  let stagedRecipeCount = 0;

  Object.values(itemCfgMap).forEach((cfgs) => {
    cfgs.forEach((cfg) => {
      if (!cfg.includeRecipes || !cfg.includeRecipes.length) return;
      cfg.includeRecipes.forEach((moddedRecipe) => {
        let type = moddedRecipe ? moddedRecipe.type : null;
        let id = moddedRecipe ? moddedRecipe.id : null;
        if (!type || !id) {
          console.warn(`Invalid includeRecipes entry for item "${cfg.item}": ${JSON.stringify(moddedRecipe)}. Expected format: {type: "recipeType", id: "recipeId"}`);
          return;
        }
        RecipeMachineStage.addRecipe(type, id, cfg.stage);
        stagedRecipeCount++;
      });
    });
  });

  event.forEachRecipe({}, (recipe) => {
    let resultItem = recipe.getOriginalRecipeResult();
    if (!resultItem) {
      console.warn(`[STAGING] null result from getOriginalRecipeResult for ${recipe.getId()} (${recipe.getType()})`);
      return;
    }
    if (resultItem.isEmpty()) return;

    let itemId = resultItem.getId();
    let cfgs = itemCfgMap[itemId];
    if (!cfgs) return;

    let recipeType = normalizeRecipeType(recipe.getType().toString());
    if (typeIgnores.some((pattern) => (pattern instanceof RegExp ? pattern.test(recipeType) : recipeType === pattern)))
      return;

    let recipeId = recipe.getId().toString();
    cfgs.forEach((cfg) => {
      if (cfg.ignoreRecipes.includes(recipeId)) return;
      let stagingID = `ftb:astages_${recipeId}`;
      if (recipeType.includes("minecraft")) {
        AStages.addRestrictionForRecipe(stagingID, cfg.stage, recipeType, recipeId);
      } else {
        RecipeMachineStage.addRecipe(recipeType, recipeId, cfg.stage);
      }
      stagedRecipeCount++;
    });
  });

  Object.values(itemCfgMap).forEach((cfgs) => {
    cfgs.forEach((cfg) => {
      if (!cfg.restrictItem) return;
      let parts = cfg.item.split(":");
      let restrictionID = `ftb:astages_${parts[0]}_${parts[1]}_restriction`;
      let storable = cfg.canAttack || cfg.canEquip;
      AStages.addRestrictionForItem(restrictionID, cfg.stage, cfg.item)
        .setCanAttack(cfg.canAttack)
        .setCanBeStoredInInventory(storable)
        .setCanBeStoredInContainers(storable)
        .setCanBeEquipped(cfg.canEquip)
        .setCanPickedUp(cfg.canPickUp)
        .setCanItemBeLeftClicked(cfg.canLeftClick)
        .setCanItemBeRightClicked(cfg.canRightClick)
        .setCanInteractWithBlock(cfg.canBlockInteract)
        .setCanBeDig(cfg.canMine)
        .setHideInJEI(cfg.hideJEI)
        .setHideTooltip(true)
        .setHiddenName(function () {
          return Text.translate(cfg.langKey);
        });
      logDebug(`[ITEM RESTRICTION] ${cfg.item} restricted to stage "${cfg.stage}" (attack=${!!cfg.canAttack}, equip=${!!cfg.canEquip}, pickUp=${!!cfg.canPickUp}, leftClick=${!!cfg.canLeftClick}, rightClick=${!!cfg.canRightClick}, blockInteract=${!!cfg.canBlockInteract}, mine=${!!cfg.canMine}, hideJEI=${!!cfg.hideJEI}, tooltip=${cfg.langKey})`);
    });
  });

  let stagedItemCount = Object.keys(itemCfgMap).length;
  console.log(`[STAGING] Finished. Staged ${stagedItemCount} items and ${stagedRecipeCount} recipes.`);
});

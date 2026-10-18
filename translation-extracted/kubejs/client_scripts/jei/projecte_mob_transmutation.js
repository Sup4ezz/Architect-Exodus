const $MobTransmutation$BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");

const $MobTransmutation$InputRenderer = new Mantle$EntityIngredientRenderer(32);
const $MobTransmutation$OutputRenderer = new Mantle$EntityIngredientRenderer(18);

const $MobTransmutation$PeacefulEntities = [
  "minecraft:sheep",
  "minecraft:pig",
  "minecraft:cow",
  "minecraft:chicken",
  "minecraft:squid",
  "minecraft:horse",
  "minecraft:rabbit",
  "minecraft:llama",
  "minecraft:parrot",
  "minecraft:goat",
  "minecraft:bee"
];

const $MobTransmutation$HostileEntities = [
  "minecraft:zombie",
  "minecraft:enderman",
  "minecraft:stray",
  "minecraft:husk",
  "minecraft:drowned",
  "minecraft:phantom",
  "cataclysm:draugr",
  "iceandfire:dread_thrall",
  "iceandfire:dread_beast",
  "tconstruct:ender_slime",
  "minecraft:shulker",
  "minecraft:ghast",
  "quark:wraith",
  "alexscaves:gloomoth"
];

function $MobTransmutation$getEntityType(id) {
  return $MobTransmutation$BuiltInRegistries.ENTITY_TYPE.get(Utils.id(id));
}

function $MobTransmutation$getSpawnEggStack(entityType) {
  const egg = Forge$ForgeSpawnEggItem.fromEntityType(entityType);
  if (egg == null) return null;
  return Item.of(Item.getId(egg));
}

JEIAddedEvents.registerCategories((event) => {
  const JEIHelper = event.data.getJeiHelpers();
  const guiHelper = JEIHelper.getGuiHelper();
  event.custom("ftb:projecte_mob_transmutation", (category) => {
    category
      .title(Text.translate("jei.category.ftb.projecte_mob_transmutation"))
      .setWidth(140)
      .setHeight(45)
      .icon(guiHelper.createDrawableItemStack(Item.of("projecte:philosophers_stone")))
      .isRecipeHandled((recipe) => {
        return true;
      })
      .handleLookup((builder, recipe, focuses) => {
        const data = recipe.getRecipeData();
        const sourceType = data.getSource();
        const sourceEgg = data.getSourceEgg();

        const inputSlot = builder
          .addSlot("input")
          .setCustomRenderer(Mantle$MantleJEIConstants.ENTITY_TYPE, $MobTransmutation$InputRenderer)
          .addIngredient(Mantle$MantleJEIConstants.ENTITY_TYPE, new Mantle$EntityIngredient$EntityInput(sourceType));

        if (sourceEgg != null) {
          builder.createFocusLink(inputSlot, builder.addInvisibleIngredients("input").addItemStack(sourceEgg));
        }

        data.getResults().forEach((resultEntry) => {
          const resultSlot = builder
            .addSlot("output")
            .setCustomRenderer(Mantle$MantleJEIConstants.ENTITY_TYPE, $MobTransmutation$OutputRenderer)
            .addIngredient(Mantle$MantleJEIConstants.ENTITY_TYPE, new Mantle$EntityIngredient$EntityInput(resultEntry.type));

          if (resultEntry.egg != null) {
            builder.createFocusLink(resultSlot, builder.addInvisibleIngredients("output").addItemStack(resultEntry.egg));
          }
        });
      })
      .createRecipeExtras((builder, recipe, focuses) => {
        const recipeSlots = builder.getRecipeSlots();
        const outputSlots = recipeSlots.getSlots("output");
        const widget = builder.addScrollGridWidget(outputSlots, 5, 2);
        widget.setPosition(0, 0, category.getWidth(), category.getHeight(), "right", "top");

        const inputSlot = recipeSlots.getSlots("input").get(0);
        inputSlot.setPosition(0, 0);
      })
      .background(guiHelper.createBlankDrawable(16, 16));
  });
});

function $MobTransmutation$registerPool(event, ids) {
  const resolved = [];
  ids.forEach((id) => {
    const type = $MobTransmutation$getEntityType(id);
    if (type == null) return;
    resolved.push({ id: id, type: type, egg: $MobTransmutation$getSpawnEggStack(type) });
  });

  resolved.forEach((source) => {
    const results = resolved.filter((entry) => entry.id !== source.id);
    if (results.length === 0) return;

    event.custom("ftb:projecte_mob_transmutation").add({
      getSource: function () {
        return source.type;
      },
      getSourceEgg: function () {
        return source.egg;
      },
      getResults: function () {
        return results;
      }
    });
  });
}

JEIAddedEvents.registerRecipes((event) => {
  $MobTransmutation$registerPool(event, $MobTransmutation$PeacefulEntities);
  $MobTransmutation$registerPool(event, $MobTransmutation$HostileEntities);
});

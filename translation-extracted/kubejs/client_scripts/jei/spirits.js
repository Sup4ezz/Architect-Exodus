const $JeiEntityRenderer = new Mantle$EntityIngredientRenderer(32);

JEIAddedEvents.registerCategories((event) => {
  const JEIHelper = event.data.getJeiHelpers();
  const guiHelper = JEIHelper.getGuiHelper();
  event.custom("ftb:spirit_drops", (catagory) => {
    catagory
      .title(Text.translate("jei.category.ftb.spirit_drop"))
      .setWidth(140)
      .setHeight(35)
      .icon(guiHelper.createDrawableItemStack(Item.of("ftb:unrefined_spirit")))
      .isRecipeHandled((recipe) => {
        return true;
      })
      .handleLookup((builder, recipe, focuses) => {
        let entities = builder
          .addSlot("input")
          .setCustomRenderer(Mantle$MantleJEIConstants.ENTITY_TYPE, $JeiEntityRenderer)
          .addIngredient(Mantle$MantleJEIConstants.ENTITY_TYPE, recipe.getRecipeData().getDisplay());

        let eggs = builder.addInvisibleIngredients("input").addItemStack(recipe.getRecipeData().getEgg());

        builder.createFocusLink(entities, eggs);

        recipe
          .getRecipeData()
          .getResult()
          .forEach((result) => {
            builder.addSlot("output").addItemStack(result);
          });
      })
      .createRecipeExtras((builder, recipe, focuses) => {
        let recipeSlots = builder.getRecipeSlots();
        let outputSlots = recipeSlots.getSlots("output");
        let widget = builder.addScrollGridWidget(outputSlots, 5, 2);

        widget.setPosition(0, 0, catagory.getWidth(), catagory.getHeight(), "right", "top");

        let inputSlots = recipeSlots.getSlots("input").get(0);

        inputSlots.setPosition(0, 0);
      })
      .background(guiHelper.createBlankDrawable(16, 16));
  });
});
/**
 * @type {Internal.JeiRuntime}
 */
let $SpiritDrops$JeiRuntime = null;
/**
 * @type {Internal.CustomJSRecipe$CustomRecipeListBuilder}
 */
let $SpiritDrops$JeiRecipeBuilder = null;
NetworkEvents.dataReceived("update_spirit_data", (event) => {
  Malum$SpiritDataReloadListener.SPIRIT_DATA.clear();

  event.getData().data.forEach((spirit_data) => {
    let spirit_list = Utils.newList();
    let spirit_entity = Utils.id(spirit_data.entity);
    let spirit_type = spirit_data.type;
    spirit_data.spirits.forEach((spirit) => {
      spirit_list.add(Malum$SpiritWithCount.load(spirit));
    });
    Malum$SpiritDataReloadListener.SPIRIT_DATA.put(
      spirit_entity,
      new Malum$EntitySpiritDropData(Malum$SpiritHarvestHandler.getSpiritType(spirit_type), spirit_list, null)
    );
  });
  if ($SpiritDrops$JeiRecipeBuilder != null) {
    Malum$SpiritDataReloadListener.SPIRIT_DATA.forEach((entity, spirits) => {
      $SpiritDrops$JeiRecipeBuilder.add({
        getResult: function () {
          let spiritList = Utils.newList();
          spirits.droppedSpirits.forEach((spirit) => {
            spiritList.add(spirit.getStack());
          });
          return spiritList;
        },
        getEgg: function () {
          return Item.of(Item.getId(Forge$ForgeSpawnEggItem.fromEntityType(entity)));
        },
        getDisplay: function () {
          return new Mantle$EntityIngredient$EntityInput(entity);
        },
      });
    });
    $SpiritDrops$JeiRuntime
      .getRecipeManager()
      .addRecipes($SpiritDrops$JeiRecipeBuilder.getRecipeType(), $SpiritDrops$JeiRecipeBuilder.getRecipes());
    $SpiritDrops$JeiRecipeBuilder = null;
  }
});
JEIAddedEvents.onRuntimeAvailable((event) => {
  $SpiritDrops$JeiRuntime = event.data
})
JEIAddedEvents.registerRecipes((event) => {
  if (Malum$SpiritDataReloadListener.SPIRIT_DATA.isEmpty()) {
    $SpiritDrops$JeiRecipeBuilder = event.custom("ftb:spirit_drops");
  } else if ($SpiritDrops$JeiRecipeBuilder == null) {
    Malum$SpiritDataReloadListener.SPIRIT_DATA.forEach((entity, spirits) => {
      event.custom("ftb:spirit_drops").add({
        getResult: function () {
          let spiritList = Utils.newList();
          spirits.droppedSpirits.forEach((spirit) => {
            spiritList.add(spirit.getStack());
          });
          return spiritList;
        },
        getEgg: function () {
          return Item.of(Item.getId(Forge$ForgeSpawnEggItem.fromEntityType(entity)));
        },
        getDisplay: function () {
          return new Mantle$EntityIngredient$EntityInput(entity);
        },
      });
    });
  }
});

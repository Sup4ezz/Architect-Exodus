JEIAddedEvents.registerCategories((event) => {
  const JEIHelper = event.data.getJeiHelpers();
  const guiHelper = JEIHelper.getGuiHelper();
  event.custom("enchanted:anointment", (category) => {
    category
      .title(Text.translate("jei.category.ftb.anointment"))
      .setWidth(100)
      .setHeight(36)
      .icon(guiHelper.createDrawableItemStack(Item.of("enchanted:anointing_paste")))
      .isRecipeHandled((recipe) => {
        return true;
      })
      .handleLookup((builder, recipe, focuses) => {
        builder
          .addSlot("input")
          .addItemStack(recipe.getRecipeData().getIngredient())
          .setPosition(
            0,
            0,
            category.getWidth(),
            category.getHeight(),
            "left",
            "top"
          );

        builder
          .addSlot("output")
          .addItemStack(recipe.getRecipeData().getResult())
          .setPosition(
            0,
            0,
            category.getWidth(),
            category.getHeight(),
            "right",
            "top"
          );

        builder
          .addSlot("catalyst")
          .addItemStack(recipe.getRecipeData().getCatalyst())
          .setPosition((category.getWidth() / 2) - 8, 20);
      })
      .createRecipeExtras((builder, recipe, focuses) => {
        builder.addAnimatedRecipeArrow(100).setPosition((category.getWidth() / 2) - 8, 0);
      })
      .background(guiHelper.createBlankDrawable(16, 16))
      .setTooltipHandlerOverride((tooltip, recipe, slots_view, mouse_x, mouse_y) => {
        let arrow_left = (category.getWidth() / 2) - 8;
        let arrow_right = arrow_left + 24;
        let arrow_top = 0;
        let arrow_bottom = arrow_top + 17;

        if (
          mouse_x >= arrow_left &&
          mouse_x <= arrow_right &&
          mouse_y >= arrow_top &&
          mouse_y <= arrow_bottom
        ) {
          tooltip.add(Text.translate("ftb.jei.anointment.explain"));
        }
      });
  });
});

JEIAddedEvents.registerRecipes((event) => {
  event.custom("enchanted:anointment").add({
    getIngredient: function () {
      return Item.of("minecraft:cauldron");
    },
    getResult: function () {
      return Item.of("enchanted:witch_cauldron");
    },
    getCatalyst: function () {
      return Item.of("enchanted:anointing_paste");
    },
  });
});

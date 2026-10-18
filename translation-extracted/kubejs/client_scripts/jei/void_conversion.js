JEIAddedEvents.registerCategories((event) => {
  const JEIHelper = event.data.getJeiHelpers();
  const guiHelper = JEIHelper.getGuiHelper();
  event.custom("ftb:void_conversion", (category) => {

    let icon = guiHelper
      .drawableBuilder(
        "ftb:textures/gui/void_swirl.png",
        0,
        0,
        16,
        16
      ).setTextureSize(16, 16)
      .build();

    let the_void = guiHelper
      .drawableBuilder(
        "ftb:textures/gui/void.png", 
        0, 
        0, 
        64, 
        32
      ).setTextureSize(64, 32)
      .build();




    category
      .title(Text.translate("jei.category.ftb.void_conversion"))
      .setWidth(120)
      .setHeight(45)
      .icon(icon)
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
          )

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
          )
      })
      .createRecipeExtras((builder, recipe, focuses) => {
         
        builder.addAnimatedRecipeArrow(100).setPosition((category.getWidth() / 2) - 8, 0);

        let the_void_left = (category.getWidth() / 2) - (the_void.getWidth() / 2);
        let the_void_right = the_void_left + the_void.getWidth();
        
        let the_void_top = the_void.getHeight() - (the_void.getHeight() / 2);
        let the_void_bottom = the_void_top + the_void.getHeight();

        builder.addDrawable(
          the_void, 
          the_void_left, 
          the_void_top
        );
      })
      .background(guiHelper.createBlankDrawable(16, 16))
      .setTooltipHandlerOverride((tooltip, recipe, slots_view, mouse_x, mouse_y) => {
        let the_void_left = (category.getWidth() / 2) - (the_void.getWidth() / 2);
        let the_void_right = the_void_left + the_void.getWidth();
        
        let the_void_top = the_void.getHeight() - (the_void.getHeight() / 2);
        let the_void_bottom = the_void_top + the_void.getHeight();

        if (
          mouse_x >= the_void_left &&
          mouse_x <= the_void_right &&
          mouse_y >= the_void_top &&
          mouse_y <= the_void_bottom
        ) {
          tooltip.add(Text.translate("ftb.jei.void_convert.explain"))
        }
      })
      ;
  });
});



JEIAddedEvents.registerRecipes((event) => {
  event.custom("ftb:void_conversion").add({
    getResult: function () {
      return Item.of("malum:raw_soulstone");
    },
    getIngredient: function () {
      return Item.of("tconstruct:ender_slime_crystal")
    },
	});
	event.custom("ftb:void_conversion").add({
	getResult: function () {
		return Item.of("malum:raw_soulstone", 4);
	},
	getIngredient: function () {
		return Item.of("tconstruct:ender_slime_crystal_block")
	},
  });
});

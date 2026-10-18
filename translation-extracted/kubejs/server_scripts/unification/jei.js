ServerEvents.tags("item", (event) => {
  event.add(
    "c:hidden_from_recipe_viewers",
    Ingredient.of(/^ftbmaterials:/).itemIds.filter((id) => global.hide.some((hidden) => id.includes(hidden)))
  );

  const categories = {
    rod: global.rods,
    plate: global.plates,
    gear: global.gears,
    wire: global.wires,
    gem: global.gems,
    blade: global.blades,
  };

  for (const [suffix, list] of Object.entries(categories)) {
    event.add(
      "c:hidden_from_recipe_viewers",
      Ingredient.of(new RegExp(`^ftbmaterials:.*${suffix}$`)).itemIds.filter(
        (id) => !list.some((item) => id.includes(item))
      )
    );
  }

  event.add("c:hidden_from_recipe_viewers", ["thermal:ruby_gear", "thermal:sapphire_gear"]);
});

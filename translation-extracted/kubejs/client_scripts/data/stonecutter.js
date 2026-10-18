const Stonecutter$Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

NetworkEvents.dataReceived("update_stonecutter", (event) => {
  let anvil_type = event.getData()["anvil_type"]
  Stonecutter$Minecraft.getInstance().execute(() => {
    let menu = Client.getCurrentScreen().getMenu()
    let recipes = menu.getRecipes()

    Ingredient.of("#tconstruct:anvil_metal").getItemIds().forEach((item) => {
      let id = Utils.id("ftb", `stonecutter/${anvil_type}/${item.replace(':', '_')}`)
      if (!recipes.some((item) => item.getId() == id)) {
        recipes.add(
          new Minecraft$StonecutterRecipe(
            id,
            "none",
            Ingredient.of(`tconstruct:${anvil_type}`),
            Item.of(`tconstruct:${anvil_type}`, { texture: item })
          )
        )
      }
    })
  })
})

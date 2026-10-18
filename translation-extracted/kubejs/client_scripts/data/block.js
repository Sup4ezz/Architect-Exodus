BlockEvents.rightClicked("irons_spellbooks:alchemist_cauldron", (event) => {
  if (event.item.id === "alexscaves:jelly_bean") {
    event.cancel();
  }
});

BlockEvents.rightClicked("botania:runic_altar", (event) => {
  let is_tag = event
    .getLevel()
    .getBiome(event.getBlock().getPos())
    .tags()
    .toList()
    .some((tag) => tag.location() == "ftb:unbreakable_biome")
  let player = event.getPlayer()
  let is_creative = false
  if (player == null) {
    is_creative = player.isSpectator() || player.isCreative()
  }
  if (is_tag && !is_creative) {
    event.cancel()
  }
})
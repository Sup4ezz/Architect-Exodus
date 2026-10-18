BlockEvents.rightClicked("irons_spellbooks:alchemist_cauldron", event => {
  if (event.item.id === "alexscaves:jelly_bean") {
    event.cancel();
  }
});

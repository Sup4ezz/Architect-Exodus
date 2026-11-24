// priority: 1001

const hideJEI = [
  "summoningrituals:indestructible_altar",
  "integratedtunnels:dummy_pickaxe",
  "appliede:dummy_emc_item",
  "occultism:dictionary_of_spirits_icon",
  "ftb:allay_speaker",
];

ServerEvents.tags("item", (event) => {
  hideJEI.forEach((item) => {
    event.removeAllTagsFrom(item);
    event.add("c:hidden_from_recipe_viewers", item);
  });
});

ServerEvents.recipes((event) => {
  event
    .shaped("gag:hearthstone", [" S ", "SAS", " S "], {
      S: "#forge:stone",
      A: "minecraft:amethyst_block",
    })
    .id("ftb:gag/hearthstone");

  event
    .shaped("gag:time_sand_pouch", ["GNG", "LDL", "LLL"], {
      G: "malum:cthonic_gold_fragment",
      N: "minecraft:shulker_shell",
      D: "reliquary:void_tear",
      L: "minecraft:leather",
    })
    .id("ftb:gag/time_sand_pouch");

  event
    .custom({
      type: "lychee:lightning_channeling",
      item_in: [
        {
          item: "gag:hearthstone",
        },
      ],
      post: [
        {
          type: "drop_item",
          item: "gag:energized_hearthstone",
        },
      ],
    })
    .id("ftb:lychee/lightning_channeling/gag/energize_hearthstone");

  event
    .custom({
      type: "powah:energizing",
      ingredients: [
        {
          item: "gag:hearthstone",
        },
      ],
      energy: 10000,
      result: {
        item: "gag:energized_hearthstone",
      },
    })
    .id("ftb:gag/energized_hearthstone");
});

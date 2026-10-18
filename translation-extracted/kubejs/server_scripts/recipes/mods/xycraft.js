ServerEvents.recipes((event) => {
  let chiseled_deepslate_conflicting_recipes = [
    "xycraft_override:shaped/chiseled_deepslate_red_r",
    "xycraft_override:shaped/chiseled_deepslate_red",
    "xycraft_override:shaped/chiseled_deepslate_blue_r",
    "xycraft_override:shaped/chiseled_deepslate_blue",
    "xycraft_override:shaped/chiseled_deepslate_green_r",
    "xycraft_override:shaped/chiseled_deepslate_green",
    "xycraft_override:shaped/chiseled_deepslate_dark_r",
    "xycraft_override:shaped/chiseled_deepslate_dark",
    "xycraft_override:shaped/chiseled_deepslate_light_r",
    "xycraft_override:shaped/chiseled_deepslate_light",
  ];

  chiseled_deepslate_conflicting_recipes.forEach((recipe) => {
    event.replaceInput({ id: recipe }, "#minecraft:planks", "minecraft:chiseled_deepslate");
  });

  event
    .custom({
      type: "enderio:slicing",
      energy: 20000,
      inputs: [
        { tag: "forge:dusts/redstone" },
        { tag: "forge:silicon" },
        { tag: "forge:dusts/redstone" },
        { tag: "forge:silicon" },
        { tag: "forge:dusts/redstone" },
        { tag: "forge:silicon" },
      ],
      output: Item.of(`xycraft_machines:incomplete_processor`, 3),
    })
    .id(`ftb:enderio/slicing/ae2/incomplete_processor`);

  event
    .custom({
      type: "xycraft_machines:extractor",
      adjacent: [
        {
          predicate_type: "xycraft_core:fluid_type_rule",
          fluid_type: "alexscaves:purple_soda",
        },
        {
          predicate_type: "xycraft_core:fluid_type_rule",
          fluid_type: "minecraft:lava",
        },
      ],
      item_result: { Count: 1, id: "alexscaves:rock_candy_orange" },
      target: {
        predicate_type: "xycraft_core:block_rule",
        block: "alexscaves:rock_candy_orange",
      },
      ticks: 30,
      valid_directions: ["down", "up", "north", "south", "west", "east"],
    })
    .id("ftb:xycraft/extractor/rock_candy_orange");
});

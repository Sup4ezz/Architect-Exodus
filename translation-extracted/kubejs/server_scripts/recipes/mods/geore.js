const georeBlocks = [
  "geore:coal_block",
  "geore:copper_block",
  "geore:diamond_block",
  "geore:emerald_block",
  "geore:gold_block",
  "geore:iron_block",
  "geore:lapis_block",
  "geore:quartz_block",
  "geore:redstone_block",
  "geore:ancient_debris_block",
  "geore:ruby_block",
  "geore:sapphire_block",
  "geore:topaz_block",
  "geore:zinc_block",
  "geore:uraninite_block",
  "geore:black_quartz_block",
  "geore:aluminum_block",
  "geore:lead_block",
  "geore:nickel_block",
  "geore:osmium_block",
  "geore:platinum_block",
  "geore:silver_block",
  "geore:tin_block",
  "geore:tungsten_block",
];

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "functionalstorage:custom_compacting",
      higher_input: {
        count: 1,
        item: "minecraft:ancient_debris"
      },
      lower_input: {
        count: 9,
        item: "geore:ancient_debris_shard"
      },
    })
    .id("ftb:functional_storage/ancient_debris_compacting");

  georeBlocks.forEach((block) => {
    var material = block.split(":")[1].split("_block")[0];

    event.shapeless(`4x geore:${material}_shard`, block).id(`ftb:geore/${material}_block_to_shards`);

    event
      .custom({
        type: "ars_nouveau:crush",
        input: { item: block },
        output: [
          {
            chance: 1.0,
            count: 4,
            item: `geore:${material}_shard`,
          },
          {
            chance: 0.25,
            count: 2,
            item: `geore:${material}_shard`,
          },
        ],
        skip_block_place: true,
      })
      .id(`ftb:ars_nouveau/crushing/geore_${material}_block_to_shard`);

    if (material === "ancient_debris") return;
    event
      .custom({
        type: "functionalstorage:custom_compacting",
        higher_input: {
          count: 1,
          item: block
        },
        lower_input: {
          count: 4,
          item: `geore:${material}_shard`
        },
      })
      .id(`ftb:functional_storage/${material}_compacting`);
  });
});


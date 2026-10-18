ServerEvents.recipes((event) => {
    event.shaped("scraps:garbage", ["SSS", "SJS", "SSS"], {
      S: "#ftb:junk_shards",
      J: "scraps:junk"
    }).id("ftb:scraps/shards_to_garbage");

    event.shapeless("quark:clear_shard", [
      "scraps:shard_glass"
    ]).id("ftb:scraps/glass_shard_conversion");

});

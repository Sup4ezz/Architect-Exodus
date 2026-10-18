ServerEvents.recipes((event) => {
  bloodMagicSoulforge(event, {
    input: [
      "minecraft:bow",
      "malum:soul_stained_steel_ingot",
      "bloodmagic:soulgempetty",
      "iceandfire:dread_shard"
    ],
    output: {
      item: "animus:sentient_bow",
      nbt: "{Damage:0}"
    },
    drain: [64.0, 256.0]
  });
});

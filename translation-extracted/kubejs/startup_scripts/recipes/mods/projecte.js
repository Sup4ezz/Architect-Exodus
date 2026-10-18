ProjectEEvents.registerWorldTransmutations(event => {
  let transmutations = [
    {input: "farmersdelight:rich_soil", output: "minecraft:mycelium"}
  ]

  transmutations.forEach(pair => {
    event.transform(pair.input, pair.output);
    event.transform(pair.output, pair.input);
  });

  event.transform("minecraft:sand", "minecraft:gravel");
  event.transform("minecraft:gravel", "minecraft:sand");
})

ServerEvents.recipes((event) => {
  // Remove Current Recipes
  event.remove({ type: "botania:orechid" });
  event.remove({ type: "botania:orechid_ignem" });
  event.remove({ type: "actuallyadditions:mining_lens" });
  //event.remove({ type: "occultism:miner" });

  global.usedOres.forEach((ore) => {
    let oreModID = ore.modID;
    let oreType = ore.material;
    let oreData = getOreInfo(oreType);

    if (oreData === undefined) {
      return;
    }

    let weight = oreData.weight;
    let dims = oreData.dimensions;

    let overworldID = oreModID === "minecraft" ? "minecraft" : "ftbmaterials";

    // Overworld (Stone Ore / Deepslate Ore)
    if (dims.includes("overworld")) {
      let inputStone = "minecraft:stone";
      let inputDeepslate = "minecraft:deepslate";

      let outputStone = `${overworldID}:${oreType}_${oreModID === "minecraft" ? "ore" : "stone_ore"}`;
      let outputDeepslate = `${overworldID}:${
        oreModID === "minecraft" ? `deepslate_${oreType}_ore` : `${oreType}_deepslate_ore`
      }`;

      if (ore.material === "lapis") {
        outputStone = "minecraft:lapis_ore";
        outputDeepslate = "minecraft:deepslate_lapis_ore";
      }

      // Actually Additions
      if (Platform.isLoaded("actuallyadditions")) {
        // Stone
        actuallyadditionsMiningLensRecipe(
          event,
          inputStone,
          outputStone,
          weight,
          `ftb:actually_subtractions/mining_lens/stone/${oreType}`
        );
        // Deepslate
        actuallyadditionsMiningLensRecipe(
          event,
          inputDeepslate,
          outputDeepslate,
          weight,
          `ftb:actually_subtractions/mining_lens/deepslate/${oreType}`
        );
      }

      // Botania
      if (Platform.isLoaded("botania")) {
        // Stone
        botaniaOrechidRecipe(event, inputStone, outputStone, weight, `ftb:botania/orechid/stone/${oreType}`);
        // Deepslate
        botaniaOrechidIgnemRecipe(
          event,
          inputDeepslate,
          outputDeepslate,
          weight,
          `ftb:botania/orechid/deepslate/${oreType}`
        );
      }

      // Occultism
      if (Platform.isLoaded("occultism") && false) {
        // Stone
        occultismMinerRecipe(
          event,
          "occultism:miners/ores",
          outputStone,
          weight,
          `ftb:occultism/miner/stone/${oreType}`
        );
        // Deepslate
        occultismMinerRecipe(
          event,
          "occultism:miners/deeps",
          outputDeepslate,
          weight,
          `ftb:occultism/miner/deepslate/${oreType}`
        );
      }
    }

    // Nether (Nether Ore)
    if (dims.includes("nether") && global.nether_ores) {
      let input = "minecraft:netherrack";
      let output = oreData.itemId || `ftbmaterials:${oreType}_nether_ore`;

      if (oreType === "lapis") {
        output = "ftbmaterials:lapis_lazuli_nether_ore";
      }

      // Actually Additions
      if (Platform.isLoaded("actuallyadditions")) {
        // Netherrack
        actuallyadditionsMiningLensRecipe(
          event,
          input,
          output,
          weight,
          `ftb:actually_subtractions/mining_lens/netherrack/${oreType}`
        );
      }

      // Botania
      if (Platform.isLoaded("botania")) {
        // Netherrack
        botaniaOrechidIgnemRecipe(event, input, output, weight, `ftb:botania/orechid/netherrack/${oreType}`);
      }

      // Occultism
      if (Platform.isLoaded("occultism") && false) {
        // Netherrack
        occultismMinerRecipe(
          event,
          "occultism:miners/master",
          output,
          weight,
          `ftb:occultism/miner/netherrack/${oreType}`
        );
      }
    }
  });
});

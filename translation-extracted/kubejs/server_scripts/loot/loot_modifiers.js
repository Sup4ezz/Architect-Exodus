// Loot Modifiers Script (LootJS)
LootJS.modifiers((event) => {
  // Woot factories generate loot by re-killing the mob with a stage-less fake
  // player (GameProfile name "woot_revived"), so stage-gated removals must
  // exempt it or factories never produce the gated drops. Can't key off the
  // simulator dimension: Woot spoofs the level's dimension key to the
  // factory's dimension during the kill. Woot itself is Muspelheim-staged, so
  // this can't bypass progression. FTB-Modpack-Issues#12548
  const isWootFakePlayer = (n) =>
    n.playerPredicate((p) => String(p.getGameProfile().getName()) === "woot_revived");

  const isArsFakePlayer = (n) =>
    n.playerPredicate((p) => String(p.getGameProfile().getName()) === "Ars_Nouveau");

  const isDEGrinderFakePlayer = (n) =>
    n.playerPredicate((p) => String(p.getGameProfile().getName()) === "Draconic Evolution Grinder");

  // Ender slimes should only drop knightmetal shards if the player has killed Hel
  event
    .addEntityLootModifier("tconstruct:ender_slime")
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("bifrost_stage"))
    .removeLoot("tconstruct:knightmetal_shard");

  // Ghasts should only drop ghast tears if the player has killed Hel
  event
    .addEntityLootModifier("minecraft:ghast")
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("bifrost_stage"))
    .removeLoot("minecraft:ghast_tear");

  event
    .addEntityLootModifier("occultism:possessed_ghast")
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("bifrost_stage"))
    .removeLoot("minecraft:ghast_tear");

  // Blaze drops require Muspelheim access
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("muspelheim_stage"))
    .removeLoot("minecraft:blaze_rod")
    .removeLoot("reliquary:molten_core");

  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("bifrost_stage"))
    .removeLoot("minecraft:blaze_powder");

  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("bifrost_stage"))
    .removeLoot("minecraft:diamond")
    .removeLoot("minecraft:diamond_block")
    .removeLoot("minecraft:emerald")
    .removeLoot("minecraft:emerald_block");

  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .removeLoot("minecraft:netherite_ingot")
    .removeLoot("minecraft:netherite_scrap")
    .removeLoot("minecraft:netherite_block");

  // EnderIO's common_loot GLM injects dark steel etc. into vanilla chests; gate behind Jotunheim
  event
    .addLootTableModifier(/^minecraft:chests\//)
    .not((n) => n.hasAnyStage("jotunheim_stage"))
    .removeLoot("@enderio");

  // Remove ice/snow/snowball from chest loot tables globally (packed_ice and blue_ice are OK)
  event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot("minecraft:ice")
    .removeLoot("minecraft:snow_block")
    .removeLoot("minecraft:snowball");

  event
    .addLootTypeModifier(LootType.CHEST, LootType.ENTITY, LootType.GIFT, LootType.BLOCK, LootType.FISHING)
    .removeLoot("relics:rage_glove");

  event
    .addLootTypeModifier(LootType.CHEST, LootType.ENTITY, LootType.GIFT)
    .removeLoot("@sophisticatedstorage")
    .removeLoot("@sophisticatedbackpacks");

  // Shulkers have a 20% chance to drop a chorus fruit
  event
    .addEntityLootModifier("minecraft:shulker")
    .randomChance(0.2)
    .addLoot("minecraft:chorus_fruit");

  // Foxhound drops Tongue of Dog when killed with an Arthana (mirrors Enchanted's vanilla wolf drop)
  event
    .addEntityLootModifier("quark:foxhound")
    .matchMainHand("enchanted:arthana")
    .randomChanceWithLooting(0.2, 0.2)
    .addLoot("enchanted:tongue_of_dog");

  // Unify iceandfire:witherbone drops to bhc:wither_bone (cockatrice, mausoleum chest, etc.)
  event
    .addLootTypeModifier(LootType.ENTITY, LootType.CHEST)
    .apply((ctx) => {
      if (!ctx.hasLoot("iceandfire:witherbone")) return;
      let total = 0;
      ctx.findLoot("iceandfire:witherbone").forEach((stack) => { total += stack.getCount(); });
      ctx.removeLoot("iceandfire:witherbone");
      if (total > 0) ctx.addLoot(Item.of("bhc:wither_bone", total));
    });

  event
    .addEntityLootModifier("ftbragnarok:hel")
    .apply(function (ctx) {
      let count = 4 + Math.floor(Math.random() * 3);
      ctx.addLoot(Item.of("malum:cthonic_gold_fragment", count));
    });

  event
    .addEntityLootModifier("irons_spellbooks:citadel_keeper")
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("bifrost_stage"))
    .removeLoot("minecraft:gold_nugget")
    .removeLoot("minecraft:gold_ingot")
    .removeLoot("minecraft:golden_helmet")
    .removeLoot("minecraft:golden_chestplate")
    .removeLoot("minecraft:golden_leggings")
    .removeLoot("minecraft:golden_boots")
    .removeLoot("minecraft:golden_sword")
    .removeLoot("minecraft:golden_axe")
    .removeLoot("minecraft:golden_pickaxe")
    .removeLoot("minecraft:golden_shovel")
    .removeLoot("minecraft:golden_hoe");

  event
    .addEntityLootModifier("irons_spellbooks:citadel_keeper")
    .not(isWootFakePlayer)
    .not(isArsFakePlayer)
    .not(isDEGrinderFakePlayer)
    .not((n) => n.hasAnyStage("muspelheim_stage"))
    .removeLoot("minecraft:netherite_scrap")
    .removeLoot("minecraft:netherite_ingot");

  event
    .addLootTypeModifier(LootType.ENTITY)
    .hasAnyStage("midgard_stage")
    .randomChance(0.05)
    .addLoot("mysticalagriculture:inferium_essence");

  event
    .addBlockLootModifier("ars_nouveau:creative_source_jar")
    .removeLoot("*")
    .addLoot("ars_nouveau:source_jar");

  // Prevent snowbell seeds from dropping from grass in Helheim (private team dimensions)
  let grassBlocks = ["minecraft:grass", "minecraft:tall_grass", "minecraft:fern"];
  grassBlocks.forEach(function (block) {
    event
      .addBlockLootModifier(block)
      .apply(function (ctx) {
        let dimId = String(ctx.getLevel().getDimension());
        if (dimId.includes("ftbteambases")) {
          ctx.removeLoot("enchanted:snowbell_seeds");
        }
      });
  });
});

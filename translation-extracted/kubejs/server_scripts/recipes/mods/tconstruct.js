ServerEvents.recipes((event) => {
  //#region Redstone Melting
  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          tag: "forge:dusts/redstone",
        },
      ],
      result: {
        amount: 100,
        tag: "forge:redstone",
      },
      temperature: 477,
      time: 49,
    })
    .id("ftb:tconstruct/melting/redstone");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          tag: "forge:storage_blocks/redstone",
        },
      ],
      result: {
        amount: 900,
        tag: "forge:redstone",
      },
      temperature: 477,
      time: 49,
    })
    .id("ftb:tconstruct/melting/redstone_block");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          item: "geore:redstone_shard",
        },
      ],
      result: {
        amount: 100,
        tag: "forge:redstone",
      },
      temperature: 477,
      time: 49,
    })
    .id("ftb:tconstruct/melting/geore_redstone_shard");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          item: "geore:redstone_block",
        },
      ],
      result: {
        amount: 400,
        tag: "forge:redstone",
      },
      temperature: 477,
      time: 49,
    })
    .id("ftb:tconstruct/melting/geore_redstone_block");
  //#endregion

  //#region Quartz Melting
  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          item: "geore:quartz_shard",
        },
      ],
      result: {
        amount: 100,
        fluid: "tconstruct:molten_quartz",
      },
      temperature: 637,
      time: 55,
    })
    .id("ftb:tconstruct/melting/geore_quartz_shard");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          item: "geore:quartz_block",
        },
      ],
      result: {
        amount: 400,
        fluid: "tconstruct:molten_quartz",
      },
      temperature: 637,
      time: 110,
    })
    .id("ftb:tconstruct/melting/geore_quartz_block");
  //#endregion

  //#region Glowstone Melting
  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          tag: "forge:dusts/glowstone",
        },
      ],
      result: {
        amount: 250,
        tag: "forge:glowstone",
      },
      temperature: 477,
      time: 49,
    })
    .id("ftb:tconstruct/melting/glowstone");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: [
        {
          item: "minecraft:glowstone",
        },
      ],
      result: {
        amount: 1000,
        tag: "forge:glowstone",
      },
      temperature: 477,
      time: 49,
    })
    .id("ftb:tconstruct/melting/glowstone_block");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cooling_time: 203,
      fluid: {
        amount: 900,
        tag: "forge:redstone",
      },
      result: {
        tag: "forge:storage_blocks/redstone",
      },
    })
    .id("ftb:tconstruct/casting_basin/redstone_block");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 20,
      cast: {
        tag: "tconstruct:casts/multi_use/gem",
      },
      fluid: {
        amount: 100,
        tag: "forge:redstone",
      },
      result: {
        tag: "forge:dusts/redstone",
      },
    })
    .id("ftb:tconstruct/casting_table/redstone_dust");

  event
    .custom({
      type: "tconstruct:casting_basin",
      cooling_time: 203,
      fluid: {
        amount: 1000,
        tag: "forge:glowstone",
      },
      result: {
        item: "minecraft:glowstone",
      },
    })
    .id("ftb:tconstruct/casting_basin/glowstone_block");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 20,
      cast: {
        tag: "tconstruct:casts/multi_use/gem",
      },
      fluid: {
        amount: 250,
        tag: "forge:glowstone",
      },
      result: {
        tag: "forge:dusts/glowstone",
      },
    })
    .id("ftb:tconstruct/casting_table/glowstone_dust");
  //#endregion

  // #region Main Recipes
  event
    .shapeless("3x minecraft:bone", ["#forge:wither_bones", "#forge:wither_bones", "#forge:wither_bones"])
    .id("ftb:tconstruct/wither_bone_conversion");

  event
    .shapeless("tinkersjewelry:book", [
      "minecraft:book",
      Item.of("tinkersjewelry:gem", '{Material:"tconstruct:rock#stone"}'),
    ])
    .id("ftb:tinkersjewelry_book");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        item: "minecraft:apple",
      },
      cast_consumed: true,
      cooling_time: 118,
      fluid: {
        amount: 400,
        tag: "tconstruct:molten_diamond",
      },
      result: "tconstruct:jeweled_apple",
    })
    .id("ftb:tconstruct/casting_table/jeweled_apple");

  event
    .shapeless("4x tconstruct:ender_slime_crystal", "tconstruct:ender_slime_crystal_block")
    .id(`ftb:tconstruct/ender_slime_crystal_block_to_shards`);

  event
    .custom({
      type: "functionalstorage:custom_compacting",
      higher_input: {
        count: 1,
        item: "tconstruct:ender_slime_crystal_block",
      },
      lower_input: {
        count: 4,
        item: "tconstruct:ender_slime_crystal",
      },
    })
    .id("ftb:functional_storage/ender_slime_crystal_compacting");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 20,
      cast: {
        item: "minecraft:book",
      },
      cast_consumed: true,
      fluid: {
        amount: 50,
        fluid: "tconstruct:liquid_soul",
      },
      result: {
        item: "ftb:skill_catalyst",
      },
    })
    .id("ftb:tconstruct/casting_table/skill_catalyst");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        item: "minecraft:bone",
      },
      cast_consumed: true,
      cooling_time: 60,
      fluid: {
        amount: 200,
        tag: "tconstruct:liquid_soul",
      },
      result: "bhc:wither_bone",
    })
    .id("ftb:tconstruct/casting_table/wither_bone");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        item: "minecraft:melon_slice",
      },
      cast_consumed: true,
      cooling_time: 54,
      fluid: {
        amount: 80,
        fluid: "ftb:molten_cthonic_gold",
      },
      result: "minecraft:glistering_melon_slice",
    })
    .id("ftb:tconstruct/casting_table/glistering_melon_slice");

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        item: "minecraft:carrot",
      },
      cast_consumed: true,
      cooling_time: 54,
      fluid: {
        amount: 80,
        fluid: "ftb:molten_cthonic_gold",
      },
      result: "minecraft:golden_carrot",
    })
    .id("ftb:tconstruct/casting_table/golden_carrot");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 161,
      cast: {
        tag: "ftb:apples",
      },
      cast_consumed: true,
      fluid: {
        amount: 720,
        tag: "forge:molten_gold",
      },
      result: {
        item: "minecraft:golden_apple",
      },
    })
    .id("ftb:tconstruct/casting_table/golden_apple");

  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        { tag: "forge:molten_iron", amount: 180 },
        { fluid: "tconstruct:molten_obsidian", amount: 1000 },
      ],
      result: { fluid: "ftb:molten_black_steel", amount: 90 },
      temperature: 950,
    })
    .id("ftb:tconstruct/alloying/black_steel");

  event
    .custom({
      type: "tconstruct:alloy",
      inputs: [
        { tag: "forge:molten_black_steel", amount: 90 },
        { fluid: "tconstruct:molten_obsidian", amount: 1000 },
      ],
      result: { fluid: "ftb:molten_dark_steel", amount: 180 },
      temperature: 950,
    })
    .id("ftb:tconstruct/alloying/dark_steel");

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: {
        item: "bloodmagic:basemonstersoul",
      },
      result: {
        amount: 500,
        fluid: "tconstruct:liquid_soul",
      },
      temperature: 950,
      time: 60,
    })
    .id("ftb:tconstruct/melting/demon_will");

  //Converting Ichor into Skyslime
  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          item: "tconstruct:ichor_congealed_slime",
        },
      ],
      block_in: {
        blocks: ["ftb:cryotheum"],
      },
      post: [
        {
          type: "drop_item",
          item: "tconstruct:sky_congealed_slime",
        },
        {
          type: "place",
          block: "*",
        },
      ],
    })
    .id("ftb:lychee/item_inside/tconstruct/sky_congealed_slime");

  event
    .custom({
      type: "tconstruct:melting_fuel",
      duration: 250,
      fluid: { name: "ftb:crimson_pyrotheum", amount: 50 },
      rate: 20,
      temperature: 1800,
    })
    .id("ftb:tconstruct/fuel/crimson_pyrotheum");

  // #endregion

  // #region Copper Cast Recipes
  const otherCasts = [
    "adze_head",
    "boots_plating",
    "bow_grip",
    "bow_limb",
    "broad_axe_head",
    "broad_blade",
    "chestplate_plating",
    "hammer_head",
    "helmet_plating",
    "large_plate",
    "leggings_plating",
    "maille",
    "pick_head",
    "repair_kit",
    "small_axe_head",
    "small_blade",
    "tool_binding",
    "tool_handle",
    "tough_binding",
    "tough_handle",
  ];
  otherCasts.forEach((cast) => {
    const isPlating = cast.endsWith("_plating");
    event
      .custom({
        type: "tconstruct:casting_table",
        cast: isPlating
          ? [
              { type: "tconstruct:material", item: `tconstruct:${cast}` },
              { item: `tconstruct:${cast}_dummy` },
            ]
          : {
              type: "tconstruct:material",
              item: `tconstruct:${cast}`,
            },
        cast_consumed: true,
        cooling_time: 57,
        fluid: {
          amount: 90,
          tag: "forge:molten_copper",
        },
        result: `tconstruct:${cast}_cast`,
        switch_slots: true,
      })
      .id(`ftb:tconstruct/casting_table/${cast}_cast`);
  });

  const regularCasts = ["nugget", "gem", "rod"];
  regularCasts.forEach((cast) => {
    event
      .custom({
        type: "tconstruct:casting_table",
        cast: {
          tag: `forge:${cast}s`,
        },
        cast_consumed: true,
        cooling_time: 57,
        fluid: {
          amount: 90,
          tag: "forge:molten_copper",
        },
        result: `tconstruct:${cast}_cast`,
        switch_slots: true,
      })
      .id(`ftb:tconstruct/casting_table/${cast}_cast`);
  });

  const mantleCasts = ["coin", "gear", "plate", "wire"];
  mantleCasts.forEach((cast) => {
    event
      .custom({
        type: "tconstruct:casting_table",
        cast: {
          tag: `forge:${cast}s`,
        },
        cast_consumed: true,
        conditions: [
          {
            type: "mantle:tag_filled",
            tag: `forge:${cast}s`,
          },
        ],
        cooling_time: 57,
        fluid: {
          amount: 90,
          tag: "forge:molten_copper",
        },
        result: `tconstruct:${cast}_cast`,
        switch_slots: true,
      })
      .id(`ftb:tconstruct/casting_table/${cast}_cast`);
  });

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: [
        {
          type: "forge:difference",
          base: {
            tag: "forge:ingots",
          },
          subtracted: {
            item: "tconstruct:fake_ingot",
          },
        },
        {
          type: "tconstruct:material",
          item: "tconstruct:fake_ingot",
        },
      ],
      cast_consumed: true,
      cooling_time: 57,
      fluid: {
        amount: 90,
        tag: "forge:molten_copper",
      },
      result: "tconstruct:ingot_cast",
      switch_slots: true,
    })
    .id(`ftb:tconstruct/casting_table/ingot_cast`);

  event
    .custom({
      type: "tconstruct:casting_table",
      cast: {
        type: "tconstruct:material",
        item: "tinkersjewelry:plain_ring",
      },
      cast_consumed: true,
      cooling_time: 57,
      fluid: {
        amount: 90,
        tag: "forge:molten_copper",
      },
      result: "tinkersjewelry:plain_ring_cast",
      switch_slots: true,
    })
    .id(`ftb:tconstruct/casting_table/plain_ring_cast`);

  event
    .custom({
      type: "tconstruct:melting",
      ingredient: {
        tag: "tconstruct:casts/gold",
      },
      result: {
        amount: 90,
        tag: "forge:molten_copper",
      },
      temperature: 700,
      time: 57,
    })
    .id(`ftb:tconstruct/melting/copper_casts`);
  //#endregion

  // #region Anvil Texture Variants
  event
    .getRecipes()
    .kubejs.shaped(
      Item.of("tconstruct:tinkers_anvil", { texture: "tconstruct:amethyst_bronze_block" }),
      ["MMM", " S ", "SSS"],
      {
        M: Ingredient.of("tconstruct:amethyst_bronze_block"),
        S: Ingredient.of("#tconstruct:smeltery_bricks"),
      }
    );

  event
    .getRecipes()
    .kubejs.shaped(
      Item.of("tconstruct:scorched_anvil", { texture: "tconstruct:amethyst_bronze_block" }),
      ["MMM", " S ", "SSS"],
      {
        M: Ingredient.of("tconstruct:amethyst_bronze_block"),
        S: Ingredient.of("#tconstruct:scorched_blocks"),
      }
    );

  event
    .custom({
      type: "minecraft:stonecutting",
      ingredient: Ingredient.of("tconstruct:tinkers_anvil"),
      result: Item.of("tconstruct:tinkers_anvil"),
    })
    .id("ftb:stonecutting/tinkers_anvil_manual_only");

  event
    .custom({
      type: "minecraft:stonecutting",
      ingredient: Ingredient.of("tconstruct:scorched_anvil"),
      result: Item.of("tconstruct:scorched_anvil"),
    })
    .id("ftb:stonecutting/scorched_anvil_manual_only");
  // #endregion

  // #region Materials
  event
    .custom({
      type: "tconstruct:material",
      ingredient: {
        item: "ae2:fluix_crystal",
      },
      material: "ftb:fluix",
      value: 1,
    })
    .id("ftb:tconstruct/material/fluix");

  event
    .custom({
      type: "tconstruct:material",
      ingredient: {
        tag: "forge:ingots/iesnium",
      },
      material: "ftb:iesnium",
      value: 1,
    })
    .id("ftb:tconstruct/material/iesnium");

  event
    .custom({
      type: "tconstruct:material",
      ingredient: {
        tag: "forge:ingots/enderium",
      },
      material: "ftb:enderium",
      value: 1,
    })
    .id("ftb:tconstruct/material/enderium");

  event
    .custom({
      type: "tconstruct:material",
      ingredient: {
        item: "minecraft:prismarine_crystals",
      },
      material: "tconstruct:prismarine",
      value: 1,
    })
    .id("ftb:tconstruct/material/prismarine");
  //#endregion
});

// Adding Anvil Texture Variants to Stonecutter
PlayerEvents.inventoryOpened("minecraft:stonecutter", (event) => {
  let menu = event.getInventoryContainer();
  menu.addSlotListener({
    m_7934_: (m, s, i) => {
      if (m.getType() != Utils.getRegistry("minecraft:menu").getValue("minecraft:stonecutter")) return;
      if (s != 0) return;
      let isTinkersAnvil = i.getId() == "tconstruct:tinkers_anvil";
      let isScorchedAnvil = i.getId() == "tconstruct:scorched_anvil";
      if (!isTinkersAnvil && !isScorchedAnvil) return;
      let recipes = m.getRecipes();
      let anvil_type = null;
      if (isTinkersAnvil) {
        anvil_type = "tinkers_anvil";
      } else if (isScorchedAnvil) {
        anvil_type = "scorched_anvil";
      }
      if (anvil_type == null) return;
      Ingredient.of("#tconstruct:anvil_metal")
        .getItemIds()
        .forEach((item) => {
          let id = Utils.id("ftb", `stonecutter/${anvil_type}/${item.replace(":", "_")}`);
          if (!recipes.some((item) => item.getId() == id)) {
            recipes.add(
              new Minecraft$StonecutterRecipe(
                id,
                "none",
                Ingredient.of(`tconstruct:${anvil_type}`),
                Item.of(`tconstruct:${anvil_type}`, { texture: item })
              )
            );
          }
        });
      event.getPlayer().sendData("update_stonecutter", { anvil_type: anvil_type });
    },
    m_142153_: (m, s, f) => {},
  });
});

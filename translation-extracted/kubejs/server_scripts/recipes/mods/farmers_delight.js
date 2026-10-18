ServerEvents.recipes((event) => {
  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [{ item: "ftbmaterials:charcoal_dust" }],
      result: [{ 
        count: 1, 
        item: "minecraft:black_dye" 
      }],
      tool: { tag: "forge:tools/hammers" },
    })
    .id("ftb:crushing/charcoal_dust_to_dye");

  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [{ tag: "forge:deadcoral" }],
      result: [{ 
        count: 1, 
        item: "minecraft:sand" 
      }],
      tool: { tag: "forge:tools/hammers" },
    })
    .id("ftb:crushedcoral");

  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [{ tag: "minecraft:coals" }],
      result: [{ 
        count: 1, 
        item: "ftbmaterials:charcoal_dust" 
      }],
      tool: { tag: "forge:tools/hammers" },
    })
    .id("ftb:crushedcoals");

  // Cooking Pot - use empty bucket instead of water bucket
  event
    .shaped("farmersdelight:cooking_pot", ["bSb", "iWi", "iii"], {
      b: "minecraft:brick",
      S: "minecraft:wooden_shovel",
      i: "#forge:ingots/iron",
      W: "minecraft:bucket",
    })
    .id("farmersdelight:cooking_pot");

  event
    .custom({
      type: "farmersdelight:cooking",
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        { item: "thermal:amaranth" },
        { item: "thermal:amaranth" },
        { item: "thermal:amaranth" },
        { item: "actuallyadditions:solidified_experience" },
      ],
      recipe_book_tab: "misc",
      result: {
        count: 3,
        item: "alexscaves:jelly_bean",
        nbt: { Potion: "minecraft:water" },
      },
    })
    .id("ftb:farmers_delight/cooking/deepsight_jelly_beans");

  event
    .shapeless("4x farmersdelight:rich_soil", ["farmersdelight:rich_soil", "mysticalagriculture:earth_essence"])
    .id("ftb:farmers_delight/rich_soil_duplication");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 200,
      consumptionRate: 5,
      drainRate: 5,
      input: {
        tag: "minecraft:dirt",
      },
      output: {
        item: "farmersdelight:rich_soil",
      },
      upgradeLevel: 0,
    })
    .id("ftb:blood_magic/altar/rich_soil");

  event
    .custom({
      type: "farmersdelight:cutting",
      ingredients: [{ tag: "minecraft:leaves" }],
      result: [{ 
        count: 1, 
        item: "farmersdelight:straw" 
      }],
      tool: { tag: "forge:tools/hammers" },
    })
    .id("ftb:crushedleaves");

  //Ground Materials from Wizard's Reborn
  const wizards_ground = [
    {output: 'wizards_reborn:ground_red_mushroom', input: "minecraft:red_mushroom"},
    {output: "wizards_reborn:ground_brown_mushroom", input: "minecraft:brown_mushroom"},
    {output: 'wizards_reborn:ground_crimson_fungus', input: "minecraft:crimson_fungus"},
    {output: 'wizards_reborn:ground_warped_fungus', input: "minecraft:warped_fungus"},
    {output: 'wizards_reborn:ground_mor', input: "wizards_reborn:mor"},
    {output: 'wizards_reborn:ground_elder_mor', input: "wizards_reborn:elder_mor"}
  ];

  wizards_ground.forEach(item => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [{ item: item.input }],
      result: [{ 
        count: 1, 
        item: item.output
      }],
      tool: { tag: "forge:tools/hammers" },
    }).id(`ftb:farmersdelight/cutting/wizards_reborn/${item.output.split(":")[1]}`);
  });

});

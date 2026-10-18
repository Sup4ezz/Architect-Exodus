ServerEvents.recipes((event) => {
  const bossHeartYields = [
    ["ftbragnarok:dead_heart",         4],
    ["ftbragnarok:frost_heart",        6],
    ["ftbragnarok:venom_heart",        6],
    ["ftbragnarok:flame_heart",       10],
    ["ftbragnarok:eclipse_heart",     16],
    ["ftbragnarok:destruction_heart", 32],
  ];
  bossHeartYields.forEach((entry) => {
    const heart = entry[0];
    const yieldCount = entry[1];
    event
      .shapeless(Item.of("ftb:distilled_power", yieldCount), [heart])
      .id("ftb:bhc/distilled_power_from_" + heart.split(":")[1]);
  });

  event
    .shapeless("bhc:red_heart_canister", [
      "bhc:red_heart",
      "#forge:wither_bones",
      "minecraft:golden_apple",
      "bhc:canister"
    ]).id("ftb:bhc/red_heart_canister");

  event.custom({
      type: "bloodmagic:altar",
      altarSyphon: 1000,
      consumptionRate: 50,
      drainRate: 50,
      input: {
        tag: "forge:wool",
      },
      output: {
        item: "bhc:red_heart_patch",
      },
      upgradeLevel: 0,
    }).id("ftb:bhc/altar/red_heart_patch");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 20,
      cast: {
        tag: "forge:wool",
      },
      cast_consumed: true,
      fluid: {
        amount: 90,
        tag: "forge:molten_gold",
      },
      result: {
        item: "bhc:yellow_heart_patch",
      },
    }).id("ftb:bhc/casting_table/yellow_heart_patch");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 20,
      cast: {
        tag: "forge:wool",
      },
      cast_consumed: true,
      fluid: {
        amount: 100,
        tag: "tconstruct:molten_emerald",
      },
      result: {
        item: "bhc:green_heart_patch",
      },
    }).id("ftb:bhc/casting_table/green_heart_patch");

  event
    .custom({
      type: "tconstruct:casting_table",
      cooling_time: 20,
      cast: {
        tag: "forge:wool",
      },
      cast_consumed: true,
      fluid: {
        amount: 90,
        tag: "forge:molten_manasteel",
      },
      result: {
        item: "bhc:blue_heart_patch",
      },
    }).id("ftb:bhc/casting_table/blue_heart_patch");
});

ServerEvents.recipes((event) => {
  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 4000,
      consumptionRate: 20,
      drainRate: 20,
      input: {
        item: "ars_nouveau:source_gem",
      },
      output: {
        item: "alexscaves:occult_gem",
      },
      upgradeLevel: 1,
    })
    .id("ftb:alexscaves/occult_gem");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 2500,
      consumptionRate: 10,
      drainRate: 10,
      input: {
        item: "minecraft:cobweb",
      },
      output: {
        item: "alexscaves:dark_tatters",
      },
      upgradeLevel: 1,
    })
    .id("ftb:alexscaves/dark_tatters");

  event
    .custom({
      type: "bloodmagic:altar",
      altarSyphon: 1000,
      consumptionRate: 10,
      drainRate: 10,
      input: {
        item: "minecraft:stick",
      },
      output: {
        item: "alexscaves:thornwood_branch",
      },
      upgradeLevel: 1,
    })
    .id("ftb:alexscaves/thornwood_branch");
});

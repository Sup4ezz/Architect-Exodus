const geores = [
  "coal",
  "copper",
  "diamond",
  "emerald",
  "gold",
  "iron",
  "lapis",
  "netherite_scrap",
  "quartz",
  "redstone",
  "ancient_debris",
  "zinc",
  "uraninite",
  "black_quartz",
  "lead",
  "nickel",
  "platinum",
  "silver",
  "tin"
]

ItemEvents.modification((event) => {
  geores.forEach((ore) => {
    event.modify(`georenouveau:${ore}_geore_dowsing_rod`, (item) => {
      item.maxDamage = 20;
    });
  });

  event.modify(`ars_nouveau:dowsing_rod`, (item) => {
    item.maxDamage = 20;
  });

  // Runic Scythe Durability
  event.modify("animus:runic_sentient_scythe", (item) => {
    item.maxDamage = 1750;
  });
  event.modify("bloodmagic:soulscythe", (item) => {
    item.maxDamage = 1250;
  });
  event.modify("reliquary:angelheart_vial", (item) => {
    item.setMaxStackSize(1);
  });

  event.modify("farmersdelight:stuffed_pumpkin", (item) => {
    item.setFoodProperties(food => {
      food.hunger(10);
      food.saturation(0.7);
    });
  });

  event.modify("ftbmaterials:charcoal_block", (item) => {
    item.burnTime = 16000;
  });
});

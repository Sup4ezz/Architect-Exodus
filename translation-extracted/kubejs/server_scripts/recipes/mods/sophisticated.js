// priority: 101

const hideSophisticated = [
  // Backpacks
  "sophisticatedbackpacks:inception_upgrade",
  "sophisticatedbackpacks:infinity_upgrade",
  "sophisticatedbackpacks:survival_infinity_upgrade",
  "sophisticatedbackpacks:deposit_upgrade",
  "sophisticatedbackpacks:advanced_deposit_upgrade",
  "sophisticatedbackpacks:restock_upgrade",
  "sophisticatedbackpacks:advanced_restock_upgrade",
  // Storage
  "sophisticatedstorage:infinity_upgrade",
  "sophisticatedstorage:survival_infinity_upgrade",
];

const removeSophisticated = [
  // Backpacks
  "sophisticatedbackpacks:auto_blasting_upgrade",
  "sophisticatedbackpacks:auto_smelting_upgrade",
  "sophisticatedbackpacks:auto_smoking_upgrade",
  "sophisticatedbackpacks:battery_upgrade",
  "sophisticatedbackpacks:blasting_upgrade",
  "sophisticatedbackpacks:smelting_upgrade",
  "sophisticatedbackpacks:smithing_upgrade",
  "sophisticatedbackpacks:smoking_upgrade",
  "sophisticatedbackpacks:stonecutter_upgrade",
  "sophisticatedbackpacks:tank_upgrade",
  "sophisticatedstorage:smelting_upgrade",
  "sophisticatedstorage:auto_smelting_upgrade",
  "sophisticatedstorage:smoking_upgrade",
  "sophisticatedstorage:auto_smoking_upgrade",
  "sophisticatedstorage:blasting_upgrade",
  "sophisticatedstorage:auto_blasting_upgrade",
  "sophisticatedstorage:crafting_upgrade",
  "sophisticatedstorage:stonecutter_upgrade",
  "sophisticatedstorage:stack_downgrade_tier_1",
  "sophisticatedstorage:stack_downgrade_tier_2",
  "sophisticatedstorage:stack_downgrade_tier_3",
  "sophisticatedstorage:jukebox_upgrade",
  "sophisticatedstorage:advanced_jukebox_upgrade",
  "sophisticatedstorage:pump_upgrade",
  "sophisticatedstorage:advanced_pump_upgrade",
  "sophisticatedstorage:xp_pump_upgrade",
  "sophisticatedstorage:compression_upgrade"
];

ServerEvents.tags("item", (event) => {
  hideSophisticated.forEach((id) => {
    event.add("c:hidden_from_recipe_viewers", id);
  });
});

ServerEvents.recipes((event) => {
  hideSophisticated.forEach((id) => {
    event.remove({ output: id });
  });

  removeSophisticated.forEach((id) => {
    event.remove({ output: id });
  });
});

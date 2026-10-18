const $HelLootGuard$EquipmentSlot = Java.loadClass("net.minecraft.world.entity.EquipmentSlot");
const $HelLootGuard$Restricted = /^minecraft:(golden|diamond|netherite)_(helmet|chestplate|leggings|boots|sword|pickaxe|axe|shovel|hoe)$/;
const $HelLootGuard$HandSlots = [$HelLootGuard$EquipmentSlot.MAINHAND, $HelLootGuard$EquipmentSlot.OFFHAND];
const $HelLootGuard$ArmorSlots = [
  $HelLootGuard$EquipmentSlot.FEET,
  $HelLootGuard$EquipmentSlot.LEGS,
  $HelLootGuard$EquipmentSlot.CHEST,
  $HelLootGuard$EquipmentSlot.HEAD,
];

function $helLootGuardStrip(entity, stacks, slots) {
  if (stacks == null) return;
  let index = 0;
  for (let stack of stacks) {
    let slot = slots[index];
    index++;
    if (slot == null || stack == null || stack.isEmpty()) continue;
    if ($HelLootGuard$Restricted.test(String(stack.getId()))) {
      entity.setItemSlot(slot, Item.of("minecraft:air"));
    }
  }
}

EntityEvents.spawned((event) => {
  let entity = event.getEntity();
  let dim = entity.level.getDimension();
  if (String(dim) != "ftb:hel" && !FTBTeamBases$DimensionUtils.isPrivateTeamDimension(dim)) return;
  if (!entity.isMonster()) return;

  $helLootGuardStrip(entity, entity.getHandSlots(), $HelLootGuard$HandSlots);
  $helLootGuardStrip(entity, entity.getArmorSlots(), $HelLootGuard$ArmorSlots);
});

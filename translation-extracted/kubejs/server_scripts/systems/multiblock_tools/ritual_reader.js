const $ListTag = Java.loadClass("net.minecraft.nbt.ListTag");
const $ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack");
const $ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity");

function $Ritual$CheckPedestals(level, center, required_items) {
  let pedestal_block = "wizards_reborn:wisestone_pedestal";
  let radius = 4; // 7x7 = center ± 3
  let found_items = [];

  for (let x = -radius; x <= radius; x++) {
    for (let z = -radius; z <= radius; z++) {
      let pos = center.offset(x, 0, z);
      let block_id = String(Minecraft$BuiltInRegistries.BLOCK.getKey(level.getBlockState(pos).getBlock()));

      if (block_id !== pedestal_block) continue;

      let block_entity = level.getBlockEntity(pos);
      if (block_entity == null) continue;

      let nbt = block_entity.saveWithFullMetadata();
      let items_list = nbt.getList("Items", 10);

      for (let i = 0; i < items_list.size(); i++) {
        let item_id = items_list.getCompound(i).getString("id");
        if (item_id != null && item_id !== "") {
          found_items.push(item_id);
        }
      }
    }
  }

  let missing = required_items.slice();
  for (let i = 0; i < found_items.length; i++) {
    let idx = missing.indexOf(found_items[i]);
    if (idx !== -1) {
      missing.splice(idx, 1);
    }
  }

  return missing;
}

function $Ritual$ReturnPedestalItems(level, center, player) {
  let pedestal_block = "wizards_reborn:wisestone_pedestal";
  let radius = 4;
  let pedestals_found = 0;
  let items_dropped = 0;

  console.log(
    "[Ritual] ReturnPedestalItems @ center " + center + " player " + player.x + "," + player.y + "," + player.z
  );

  for (let x = -radius; x <= radius; x++) {
    for (let z = -radius; z <= radius; z++) {
      let pos = center.offset(x, 0, z);
      let block_id = String(Minecraft$BuiltInRegistries.BLOCK.getKey(level.getBlockState(pos).getBlock()));

      if (block_id !== pedestal_block) continue;
      pedestals_found++;

      let block_entity = level.getBlockEntity(pos);
      if (block_entity == null) continue;

      let nbt = block_entity.saveWithFullMetadata();
      let items_list = nbt.getList("Items", 10);
      console.log("[Ritual] Pedestal " + pos + " items=" + items_list.size() + " keys=" + nbt.getAllKeys());

      for (let i = 0; i < items_list.size(); i++) {
        let stack = $ItemStack.of(items_list.getCompound(i));
        if (!stack.isEmpty()) {
          let entity = new $ItemEntity(level, player.x, player.y + 0.5, player.z, stack, 0.0, 0.0, 0.0);
          entity.setDefaultPickUpDelay();
          level.addFreshEntity(entity);
          items_dropped++;
        }
      }

      nbt.put("Items", new $ListTag());
      block_entity.load(nbt);
      block_entity.setChanged();
      let state = level.getBlockState(pos);
      level.sendBlockUpdated(pos, state, state, 3);
    }
  }

  console.log("[Ritual] Found " + pedestals_found + " pedestals, dropped " + items_dropped + " items");
}

// Items required on wisestone pedestals for the Nidhoggr ritual
const $Ritual$NidhoggrItems = [
  "ftb:reconsecrated_aesir_stone",
  "ftb:fragment_asgard",
  "ftb:fragment_alfheim",
  "ftb:fragment_midgard",
  "ftb:fragment_muspelheim",
  "ftb:fragment_niflheim",
  "ftb:fragment_jotunheim",
  "ftb:fragment_helheim",
];

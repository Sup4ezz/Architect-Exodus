BlockEvents.rightClicked("justtrialspawners:vault", function (event) {
  let player = event.getPlayer();
  let level = event.getLevel();
  let pos = event.getBlock().getPos();
  let beData = event.getBlock().getEntityData();
  let config = beData != null ? beData.getCompound("config") : null;
  let keyItem = config != null ? config.getCompound("key_item") : null;
  let lootTable = config != null ? String(config.getString("loot_table")) : "";
  let isOminous = lootTable.indexOf("ominous") >= 0;
  let correctKey = isOminous ? "justtrialspawners:ominous_trial_key" : "justtrialspawners:trial_key";

  if (player == null || player.isFake()) return;
  if (beData == null || config == null || keyItem == null) return;
  if (String(keyItem.getString("id")) !== "minecraft:air") return;

  let cmd = "execute in " + level.getDimension() + " run data merge block "
    + pos.getX() + " " + pos.getY() + " " + pos.getZ()
    + ' {config:{key_item:{id:"' + correctKey + '",Count:1b}}}';
  level.getServer().runCommandSilent(cmd);
  player.tell(Text.translate("ftb.maze.vault_repaired").gold());
});

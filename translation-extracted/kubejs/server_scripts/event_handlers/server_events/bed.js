const $Taglock$CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag");
const $Taglock$NbtUtils = Java.loadClass("net.minecraft.nbt.NbtUtils");
const $Bed$Stats = Java.loadClass("net.minecraft.stats.Stats");

function $bedSelfTaglock(player) {
  let tag = new $Taglock$CompoundTag();
  tag.put("entity", $Taglock$NbtUtils.createUUID(player.getUuid()));
  tag.putString("entityName", player.getName().getString());
  return Item.of("enchanted:taglock").withNBT(tag);
}

BlockEvents.rightClicked(event => {
const {player, level, block, item} = event;
  if(player.level.isClientSide()) return;

  if(block.hasTag("minecraft:beds")) {
    player.runCommand("/sethome");
    player.getStats().setValue(player, $Bed$Stats.CUSTOM.get($Bed$Stats.TIME_SINCE_REST), 0);
    player.tell(Text.translate("ftb.bed.insomnia_reset").aqua());
    if(item.getId() === "enchanted:taglock_kit") {
      item.shrink(1);
      player.give($bedSelfTaglock(player));
      player.tell(Text.translate("ftb.taglock.self_bound").green());
    }
    // player.setRespawnPostion(new player.RespawnConfig(LevelData.RespawnData.of(player.level.dimension(), block.getPos(), player.getYRot(), player.getXRot()), false), true)
    event.cancel();
  }
})

// this.setRespawnPosition(
//    new ServerPlayer.RespawnConfig(LevelData.RespawnData.of(this.level().dimension(), pos, this.getYRot(), this.getXRot()), false), true
// );
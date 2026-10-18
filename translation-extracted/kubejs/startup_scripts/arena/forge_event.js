
/**
 * Place arena when a player joins a party (base is already provisioned at this point)
 */
FTBTeams$TeamEvent.PLAYER_JOINED_PARTY.register(FTBUtilsKJS.createConsumer((event)=>{
  let team = event.getTeam()
  let player = event.getPlayer()
  if (!player || !team.getOwner().equals(player.getUuid())) return;

  let arena_data = {};
  if (team.getExtraData()["ftbarenas"] == null) {
    team.getExtraData()["ftbarenas"] = arena_data;
  }
  arena_data = team.getExtraData()["ftbarenas"];
  let arena_position = BlockPos(-656, 200, 304);
  arena_data["ftb:hel"] = { x: arena_position.getX(), y: arena_position.getY(), z: arena_position.getZ() };
  team.markDirty()
  // player.tell(arena_data["ftb:hel"])
}));

// FTBTeams$TeamEvent.DELETED.register(FTBUtilsKJS.createConsumer((event)=>{
//   let team = event.getTeam()
//   Utils.getServer().runCommand(`/ftb_arena clear "${team}"`)
// }));

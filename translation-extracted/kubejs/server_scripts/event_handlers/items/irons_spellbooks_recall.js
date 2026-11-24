NativeEvents.onEvent("io.redspace.ironsspellbooks.api.events.SpellOnCastEvent", (event) => {
  if (String(event.getSpellId()) !== "irons_spellbooks:recall") return;

  const player = event.getEntity();
  const server = player.getServer();
  player.persistentData.ftb_recall_active = true;
  server.scheduleInTicks(2, () => {
    player.persistentData.ftb_recall_active = false;
  });

  const playerData = FTBEssentials$FTBEPlayerData.getOrCreate(player).orElse(null);
  const homeEntry = playerData != null ? playerData.homeManager().destinations().findFirst().orElse(null) : null;

  if (homeEntry != null) {
    let homeTp = homeEntry.destination();
    let homePos = homeTp.getPos();
    let homeDim = String(homeTp.getDimension().location());
    server.scheduleInTicks(1, () =>
      player.teleportTo(
        homeDim,
        homePos.getX() + 0.5,
        homePos.getY() + 0.01,
        homePos.getZ() + 0.5,
        homeTp.yRot != null ? homeTp.yRot : player.getYaw(),
        homeTp.xRot != null ? homeTp.xRot : player.getPitch()
      )
    );
    return;
  }

  const base = FTBTeamBasesKJS.getBaseForPlayer(player);
  if (base != null) {
    let basePos = base.spawnPos();
    let baseDim = String(base.dimension().location());
    server.scheduleInTicks(1, () =>
      player.teleportTo(baseDim, basePos.getX() + 0.5, basePos.getY() + 0.01, basePos.getZ() + 0.5, 180, 0)
    );
    return;
  }

  server.scheduleInTicks(1, () => player.teleportTo("ftbteambases:lobby", 0.5, 171, 0.5, 180, 0));
});

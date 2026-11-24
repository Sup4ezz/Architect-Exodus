// priority: 100

const $AsgardRestoration$pendingSwallows = {};

const $AsgardRestoration$SWALLOW_FALLBACK_TICKS = 240;

function $AsgardRestoration$runSwallowBlackout(entry) {
  if (entry == null || entry.done) return;
  entry.done = true;

  let players = entry.players;
  let server = entry.server;

  console.info("[Asgard] Swallow blackout running for " + players.length
    + " player(s), teleport to ftb:nidhogg (" + entry.destX + "," + entry.destY + "," + entry.destZ + ")");

  for (let i = 0; i < players.length; i++) {
    players[i].sendData("ftb:asgard_screen_shatter", {});
    FDLib$FDLibCalls.startCutsceneForPlayer(
      players[i],
      new FDLib$CutsceneData().addScreenEffect(
        0,
        FDLib$FDScreenEffects.SCREEN_COLOR.get(),
        new FDLib$ScreenColorData(0 / 255, 0 / 255, 0 / 255, 255 / 255),
        10,   // fade-in  (0.5s to full black)
        90,   // hold     (covers narration + teleport)
        20    // fade-out (1s reveal of the stomach)
      )
    );
  }

  server.scheduleInTicks(80, function() {
    for (let k = 0; k < players.length; k++) {
      players[k].teleportTo(
        "ftb:nidhogg",
        entry.destX + 0.5,
        entry.destY,
        entry.destZ + 0.5,
        0, 0
      );
    }
  });
}

NativeEvents.onEvent("dev.ftb.mods.ftbragnarok.event.NidhoggDivebombEvent$Impact", (event) => {
  let uuid = event.getPlayer().getStringUuid();
  let entry = $AsgardRestoration$pendingSwallows[uuid];
  if (entry == null) return;
  delete $AsgardRestoration$pendingSwallows[uuid];
  console.info("[Asgard] Divebomb impact for " + event.getPlayer().username
    + " (reachedPlayer=" + event.reachedPlayer() + ") -> running blackout");
  $AsgardRestoration$runSwallowBlackout(entry);
});

function $AsgardRestoration$NidhoggSwallow(players, team, level, ritual_center) {
  if (players == null || players.length === 0) {
    console.error("[Asgard] NidhoggSwallow aborted: no players");
    return;
  }

  console.info("[Asgard] NidhoggSwallow start: players=" + players.length
    + " team=" + (team == null ? "null" : team.getShortName())
    + " level=" + (level == null ? "null" : level.getDimension())
    + " ritual_center=" + ritual_center);

  let server = players[0].getServer();

  // Return ritual items to the player BEFORE any teleport/divebomb so they don't get left behind on Asgard pedestals
  if (level != null && ritual_center != null) {
    try {
      $Ritual$ReturnPedestalItems(level, ritual_center, players[0]);
    } catch (err) {
      console.error("[Ritual] ReturnPedestalItems failed: " + err);
    }
  }

  server.runCommandSilent("execute in ftb:nidhogg run forceload add -80 -577 48 -449");

  server.runCommandSilent("ftb_arena place " + team.getShortName() + " ftb:nidhogg");

  let arenaData = $Arena$Utils.getOrCreateArenaData(team);
  let nidhoggArena = arenaData["ftb:nidhogg"];
  let destX = (nidhoggArena != null && nidhoggArena["x"] != null) ? Number(nidhoggArena["x"]) : -16;
  let destY = (nidhoggArena != null && nidhoggArena["y"] != null) ? Number(nidhoggArena["y"]) + 2 : 105;
  let destZ = (nidhoggArena != null && nidhoggArena["z"] != null) ? Number(nidhoggArena["z"]) : -513;

  console.info("[Asgard] NidhoggSwallow destination: (" + destX + "," + destY + "," + destZ + ")"
    + (nidhoggArena == null ? " [hardcoded fallback, no ftb:nidhogg arena data]" : " [from arena data]"));

  let entry = {
    players: players,
    server: server,
    destX: destX,
    destY: destY,
    destZ: destZ,
    done: false
  };

  let leadUuid = players[0].getStringUuid();
  $AsgardRestoration$pendingSwallows[leadUuid] = entry;

  server.runCommandSilent("ftbragnarok divebomb " + players[0].username);

  console.info("[Asgard] NidhoggSwallow armed: lead=" + players[0].username
    + " fallback in " + $AsgardRestoration$SWALLOW_FALLBACK_TICKS + " ticks");

  server.scheduleInTicks($AsgardRestoration$SWALLOW_FALLBACK_TICKS, function() {
    if ($AsgardRestoration$pendingSwallows[leadUuid] === entry) {
      console.warn("[Asgard] NidhoggSwallow divebomb never impacted, running fallback blackout");
      delete $AsgardRestoration$pendingSwallows[leadUuid];
      $AsgardRestoration$runSwallowBlackout(entry);
    }
  });
}

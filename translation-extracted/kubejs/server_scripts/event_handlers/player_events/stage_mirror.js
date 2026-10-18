const $StageMirror$PlayerStageProvider = Java.loadClass("com.alessandro.astages.capability.PlayerStageProvider");

function $StageMirror$AStagesList(player) {
  let out = [];
  let cap = player.getCapability($StageMirror$PlayerStageProvider.PLAYER_STAGE);
  if (cap == null) return out;
  let playerStage = cap.orElse(null);
  if (playerStage == null) return out;
  let stages = playerStage.getStages();
  for (let i = 0; i < stages.size(); i++) out.push(String(stages.get(i)));
  return out;
}

function $StageMirror$GameStagesList(player) {
  let out = [];
  player.stages.getAll().forEach((s) => out.push(String(s)));
  return out;
}

function $StageMirror$ReadList(tag) {
  let out = [];
  let i = 0;
  if (tag == null) return out;
  for (i = 0; i < tag.size(); i++) out.push(String(tag.get(i)).replace(/"/g, ""));
  return out;
}

function $StageMirror$GetEntry(player, create) {
  let team = FTBTeamsKJS.getTeamForPlayer(player);
  let root = null;
  if (team == null) return null;
  root = team.getExtraData()["ftbstagemirror"];
  if (root == null) {
    if (!create) return null;
    team.getExtraData()["ftbstagemirror"] = {};
    root = team.getExtraData()["ftbstagemirror"];
  }
  return { team: team, root: root, tag: root[String(player.getUuid())] };
}

function $StageMirror$Union(mirrorList, currentList) {
  let out = mirrorList.slice();
  let i = 0;
  for (i = 0; i < currentList.length; i++) {
    if (out.indexOf(currentList[i]) === -1) out.push(currentList[i]);
  }
  return out;
}

function $StageMirror$Snapshot(player) {
  let ctx = null;
  let mirrorGs = [];
  let mirrorAs = [];
  let gs = null;
  let as = null;
  if (player == null || player.isFake()) return;
  ctx = $StageMirror$GetEntry(player, true);
  if (ctx == null) return;
  if (ctx.tag != null) {
    mirrorGs = $StageMirror$ReadList(ctx.tag["gamestages"]);
    mirrorAs = $StageMirror$ReadList(ctx.tag["astages"]);
  }
  gs = $StageMirror$Union(mirrorGs, $StageMirror$GameStagesList(player));
  as = $StageMirror$Union(mirrorAs, $StageMirror$AStagesList(player));
  if (ctx.tag != null && gs.length === mirrorGs.length && as.length === mirrorAs.length) return;
  ctx.root[String(player.getUuid())] = { gamestages: gs, astages: as };
  ctx.team.markDirty();
}

function $StageMirror$RemoveStage(player, stage) {
  let ctx = null;
  let gs = null;
  let as = null;
  if (player == null) return;
  ctx = $StageMirror$GetEntry(player, false);
  if (ctx == null || ctx.tag == null) return;
  gs = $StageMirror$ReadList(ctx.tag["gamestages"]).filter((s) => s !== stage);
  as = $StageMirror$ReadList(ctx.tag["astages"]).filter((s) => s !== stage);
  ctx.root[String(player.getUuid())] = { gamestages: gs, astages: as };
  ctx.team.markDirty();
}

function $StageMirror$Restore(player) {
  let server = null;
  let ctx = null;
  let name = null;
  let current = null;
  let mirrored = null;
  let restored = [];
  let changed = false;
  let i = 0;
  if (player == null || player.isFake()) return;
  server = player.getServer();
  ctx = $StageMirror$GetEntry(player, false);
  if (server == null || ctx == null || ctx.tag == null) return;
  name = player.getUsername();

  current = $StageMirror$GameStagesList(player);
  mirrored = $StageMirror$ReadList(ctx.tag["gamestages"]);
  for (i = 0; i < mirrored.length; i++) {
    if (current.indexOf(mirrored[i]) === -1) {
      player.stages.addNoUpdate(mirrored[i]);
      restored.push(mirrored[i]);
      changed = true;
    }
  }
  if (changed) player.stages.sync();

  current = $StageMirror$AStagesList(player);
  mirrored = $StageMirror$ReadList(ctx.tag["astages"]);
  for (i = 0; i < mirrored.length; i++) {
    if (current.indexOf(mirrored[i]) === -1) {
      server.runCommandSilent("astages add " + name + " " + mirrored[i] + " false true");
      restored.push("astages/" + mirrored[i]);
    }
  }

  if (restored.length > 0) {
    console.log("[StageMirror] Restored " + restored.length + " missing stage(s) for " + name + ": " + restored.join(", "));
  }
}

global.StageMirror = {
  snapshot: $StageMirror$Snapshot,
  removeStage: $StageMirror$RemoveStage,
};

PlayerEvents.loggedIn((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(60, () => {
    $StageMirror$Restore(player);
    $StageMirror$Snapshot(player);
  });
});

PlayerEvents.respawned((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(20, () => {
    $StageMirror$Restore(player);
  });
});

PlayerEvents.loggedOut((event) => {
  $StageMirror$Snapshot(event.getPlayer());
});

CommonAddedEvents.playerChangeDimension((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(60, () => {
    $StageMirror$Snapshot(player);
  });
});

let $StageMirror$TickCounter = 0;
ServerEvents.tick((event) => {
  $StageMirror$TickCounter++;
  if ($StageMirror$TickCounter % 6000 !== 0) return;
  event.getServer().getPlayerList().getPlayers().forEach((p) => $StageMirror$Snapshot(p));
});

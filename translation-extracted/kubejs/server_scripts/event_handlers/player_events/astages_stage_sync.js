const $StageSync$TeamData = Java.loadClass("dev.ftb.mods.ftbquests.quest.TeamData");
const $StageSync$QuestObjectBase = Java.loadClass("dev.ftb.mods.ftbquests.quest.QuestObjectBase");
const $StageSync$PlayerStageProvider = Java.loadClass("com.alessandro.astages.capability.PlayerStageProvider");

const $StageSync$StageQuests = {
  pack_start_stage:   "2F15D918EF183051",
  hel_maze_completed: "00770A59B8189794",
  boss_hel_killed:    "68E6B5B50F3C74CA",
  bifrost_stage:      "0CE4A8E9ACE78C97",
  jotunheim_stage:    "1A7F90AFA0BF4E77",
  niflheim_stage:     "5E71D8A65F0AA191",
  muspelheim_stage:   "690FE877EA0F2450",
  midgard_stage:      "6AD3782183BBC9EB",
  draconic_stage:     "4AD3E7AFEBE71D50",
  heralds_killed:     "2F17949A1AA2BBE7",
};

const $StageSync$GameStageQuests = {
  "ftb:bifrost_unlocked":     ["0CE4A8E9ACE78C97"],
  "ftb:jotunheim_unlocked":   ["1B543FF3679D7AB7", "690FE877EA0F2450"],
  "ftb:niflheim_unlocked":    ["3A22B41A723918C0", "690FE877EA0F2450"],
  "ftb:muspelheim_unlocked":  ["0F80B209B1F6318E", "5A35E56F3FBC2CD2"],
  "ftb:midgard_unlocked":     ["16709A9CA45DEA4C"],
  "ftb:ginnungagap_unlocked": ["01CC471FFDABD4C2"],
  "ftb:alfheim_unlocked":     ["69B5A8DFD7204AA8"],
  "ftb:asgard_unlocked":      ["5C196309E0FD0A0F"],
  "ftb:nidhogg_boss_killed":  ["3C6EAEFF0744E8CB"],
  boss_hel_killed:            ["68E6B5B50F3C74CA"],
  boss_ymir_killed:           ["0F80B209B1F6318E"],
  boss_jormungandr_killed:    ["5A35E56F3FBC2CD2"],
  boss_surtr_killed:          ["16709A9CA45DEA4C"],
  boss_twins_killed:          ["1867E0344DB73FF9"],
  boss_nidhoggr_killed:       ["4AD3E7AFEBE71D50"],
  pack_start_stage:           ["2F15D918EF183051"],
  hel_maze_completed:         ["00770A59B8189794"],
  bifrost_stage:              ["0CE4A8E9ACE78C97"],
  jotunheim_stage:            ["1A7F90AFA0BF4E77"],
  niflheim_stage:             ["5E71D8A65F0AA191"],
  muspelheim_stage:           ["690FE877EA0F2450"],
  midgard_stage:              ["6AD3782183BBC9EB"],
  asgard_stage:               ["10E6D806760B6661"],
  draconic_stage:             ["4AD3E7AFEBE71D50"],
};

function $StageSync$GetPlayerStage(player) {
  let cap = player.getCapability($StageSync$PlayerStageProvider.PLAYER_STAGE);
  if (cap == null) return null;
  return cap.orElse(null);
}

function $StageSync$HasStage(playerStage, stage) {
  let stages = playerStage.getStages();
  for (let i = 0; i < stages.size(); i++) {
    if (String(stages.get(i)) == stage) return true;
  }
  return false;
}

function $StageSync$TeamCompletedQuest(player, hexId) {
  let team = $StageSync$TeamData.get(player);
  if (team == null) return false;
  let parsed = $StageSync$QuestObjectBase.parseHexId(hexId);
  if (parsed == null || !parsed.isPresent()) return false;
  let quest = team.getFile().get(parsed.get());
  if (quest == null) return false;
  return team.isCompleted(quest);
}

function $StageSync$ReconcileAStages(player, server) {
  let playerStage = $StageSync$GetPlayerStage(player);
  if (playerStage == null) return;
  let name = player.getUsername();
  let keys = Object.keys($StageSync$StageQuests);
  for (let i = 0; i < keys.length; i++) {
    let stage = keys[i];
    if ($StageSync$HasStage(playerStage, stage)) continue;
    if ($StageSync$TeamCompletedQuest(player, $StageSync$StageQuests[stage])) {
      server.runCommandSilent("astages add " + name + " " + stage + " false true");
    }
  }
}

function $StageSync$ReconcileGameStages(player) {
  let keys = Object.keys($StageSync$GameStageQuests);
  let changed = false;
  let stage = null;
  let quests = null;
  let i = 0;
  let j = 0;
  for (i = 0; i < keys.length; i++) {
    stage = keys[i];
    if (player.stages.has(stage)) continue;
    quests = $StageSync$GameStageQuests[stage];
    for (j = 0; j < quests.length; j++) {
      if ($StageSync$TeamCompletedQuest(player, quests[j])) {
        player.stages.addNoUpdate(stage);
        changed = true;
        break;
      }
    }
  }
  if (changed) player.stages.sync();
}

function $StageSync$Reconcile(player) {
  if (player == null || player.isFake()) return;
  let server = player.getServer();
  if (server == null) return;
  $StageSync$ReconcileAStages(player, server);
  $StageSync$ReconcileGameStages(player);
}

PlayerEvents.loggedIn((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(40, () => {
    $StageSync$Reconcile(player);
  });
});

CommonAddedEvents.playerChangeDimension((event) => {
  let player = event.getPlayer();
  event.getServer().scheduleInTicks(40, () => {
    $StageSync$Reconcile(player);
  });
});

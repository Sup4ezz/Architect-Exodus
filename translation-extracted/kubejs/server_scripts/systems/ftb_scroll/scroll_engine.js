// priority: 10

PlayerEvents.loggedIn((event) => {
  event.player.persistentData.remove("activeScrollId");
});

// Receive scroll finished/skipped callback from client
NetworkEvents.dataReceived("ftb:scroll_finished", function (event) {
  let player = event.player;
  let scrollId = player.persistentData.getString("activeScrollId");
  if (scrollId) {
    let def = getScrollDefinition(scrollId);
    if (def && def.sound) {
      player.server.runCommandSilent("stopsound " + player.username + " master " + def.sound);
      player.server.runCommandSilent("stopsound " + player.username + " voice " + def.sound);
    }
  }
  if (scrollId == "helheim_departure") {
    player.server.scheduleInTicks(40, function() {
      Dialogue.begin(player, {
        npc: "allay_speaker",
        titleKey: "entity.ftblh.little_helper",
        textKeys: ["ftb.little_helper.ambient.bifrost_elevator"],
        duration: 8
      });
    });
  }

  player.persistentData.remove("activeScrollId");
});

let ScrollEngine = {
  start: function (player, scrollId) {
    if (player.persistentData.contains("activeScrollId")) return false;

    let def = getScrollDefinition(scrollId);
    if (!def) return false;

    let padLines = def.padLines != null ? def.padLines : 3;
    let resolvedLines = [];
    let lineColors = [];
    let titleColor = def.titleColor || 0xc8aa6e;
    let textColor = def.textColor || 0xd4d4d4;

    if (def.titleKey) {
      resolvedLines.push(ftbLang(def.titleKey, player));
      lineColors.push(titleColor);
      resolvedLines.push("");
      lineColors.push(textColor);
    }

    if (def.textKey) {
      let fullText = ftbLang(def.textKey, player);
      let bodyLines = fullText.split("\n");
      for (let i = 0; i < bodyLines.length; i++) {
        resolvedLines.push(bodyLines[i]);
        lineColors.push(textColor);
      }
    }

    for (let t = 0; t < padLines; t++) {
      resolvedLines.push("");
      lineColors.push(textColor);
    }

    player.persistentData.putString("activeScrollId", scrollId);

    player.sendData("ftb:scroll_start", {
      scrollId: scrollId,
      lines: resolvedLines.join("\n"),
      colors: lineColors.join(","),
      speed: def.speed || 0.6,
      durationSeconds: def.durationSeconds || 0,
      textScale: def.textScale || 1.0,
      lineSpacing: def.lineSpacing || 14,
      overlayColor: def.overlayColor != null ? def.overlayColor : -872415232,
      sound: def.sound || "",
      skipHoldTicks: 40,
    });

    return true;
  },

  stop: function (player) {
    if (player.persistentData.contains("activeScrollId")) {
      let scrollId = player.persistentData.getString("activeScrollId");
      let def = getScrollDefinition(scrollId);
      if (def && def.sound) {
        player.server.runCommandSilent("stopsound " + player.username + " master " + def.sound);
      }
    }
    player.persistentData.remove("activeScrollId");
    player.sendData("ftb:scroll_stop", {});
  },
};

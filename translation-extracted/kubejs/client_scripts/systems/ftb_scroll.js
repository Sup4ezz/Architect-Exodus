// Client-side FTB Scroll Engine
// All rendering, tick processing, skip detection, and sound handled locally.
// Server sends resolved text via ftb:scroll_start, client notifies via ftb:scroll_finished.

let MC = Java.loadClass("net.minecraft.client.Minecraft");
let InputConstants = Java.loadClass("com.mojang.blaze3d.platform.InputConstants");

let scrollState = null;
let scrollSoundInstance = null;

let SCROLL_OVERLAY_W = 280;
let SCROLL_OVERLAY_PAD = 20;
let SCROLL_PAD_TOP = 50;
let SCROLL_PAD_BOTTOM = 50;
let SCROLL_MAX_LINES = 80;

NetworkEvents.dataReceived("ftb:scroll_start", function (event) {
  let data = event.getData();

  MC.getInstance().execute(function () {
    if (scrollState) {
      stopScrollSound();
      clearScrollPaint();
    }

    clearChat();

    let linesStr = String(data["lines"]);
    let colorsStr = String(data["colors"]);

    let lines = linesStr.split("\n");
    let colorParts = colorsStr.split(",");
    let colors = [];
    for (let i = 0; i < colorParts.length; i++) {
      colors.push(parseInt(colorParts[i], 10));
    }

    let mc = MC.getInstance();
    let screenH = mc.getWindow().getGuiScaledHeight();
    let lineSpacing = Number(data["lineSpacing"]);

    let durationSeconds = Number(data["durationSeconds"]) || 0;

    scrollState = {
      scrollId: String(data["scrollId"]),
      lines: lines,
      colors: colors,
      speed: Number(data["speed"]),
      durationSeconds: durationSeconds,
      textScale: Number(data["textScale"]),
      lineSpacing: lineSpacing,
      overlayColor: Number(data["overlayColor"]),
      sound: String(data["sound"]),
      skipHoldTicks: Number(data["skipHoldTicks"]),
      scrollY: screenH / 2 - SCROLL_PAD_BOTTOM,
      skipTicks: 0,
      lineCount: lines.length,
      totalHeight: lines.length * lineSpacing,
      paintedLines: {},
    };

    if (scrollState.sound && scrollState.sound !== "") {
      playScrollSound(scrollState.sound);
    }
  });
});

NetworkEvents.dataReceived("ftb:scroll_stop", function (event) {
  MC.getInstance().execute(function () {
    if (scrollState) {
      stopScrollSound();
      clearScrollPaint();
      scrollState = null;
    }
  });
});

ClientEvents.tick(function (event) {
  if (!scrollState) return;

  let player = Client.player;
  if (!player) return;

  let mc = MC.getInstance();
  let screenH = mc.getWindow().getGuiScaledHeight();

  let speed;
  if (scrollState.durationSeconds > 0) {
    // Duration-based: recompute every tick so window resizes stay in sync.
    // Total pixel distance from start position to end-of-scroll bound, including text body.
    let distance = (screenH - SCROLL_PAD_TOP - SCROLL_PAD_BOTTOM) + scrollState.totalHeight;
    speed = distance / (scrollState.durationSeconds * 20);
  } else {
    // Legacy speed-based fallback.
    speed = scrollState.speed * (screenH / 480);
  }

  // Skip detection via raw key state (works in all gamemodes including adventure)
  let sneakKey = mc.options.keyShift.getKey();
  let window = mc.getWindow().getWindow();
  let keyDown = InputConstants.isKeyDown(window, sneakKey.getValue());
  if (keyDown) {
    scrollState.skipTicks++;
    if (scrollState.skipTicks >= scrollState.skipHoldTicks) {
      finishScroll();
      return;
    }
  } else {
    scrollState.skipTicks = 0;
  }

  scrollState.scrollY -= speed;

  let topBound = -(screenH / 2 - SCROLL_PAD_TOP);
  if (scrollState.scrollY + scrollState.totalHeight < topBound) {
    finishScroll();
    return;
  }

  clearChat();
  renderScroll(player, mc, screenH);
});

function renderScroll(player, mc, screenH) {
  let state = scrollState;
  let paintData = {};

  let overlayW = state.textScale * SCROLL_OVERLAY_W + SCROLL_OVERLAY_PAD * 2;
  let overlayH = screenH - SCROLL_PAD_TOP - SCROLL_PAD_BOTTOM;
  paintData["ftb_scroll_overlay"] = {
    type: "rectangle",
    color: state.overlayColor,
    x: 0,
    y: 0,
    w: overlayW,
    h: overlayH,
    alignX: "center",
    alignY: "center",
    draw: "ingame",
  };

  // Skip hint with actual bound key name
  let keyName = mc.options.keyShift.getKey().getDisplayName().getString();
  let skipText = Text.translate("ftb.scroll.skip.hint", keyName).getString();
  if (state.skipTicks > 0) {
    let pct = Math.min(100, Math.floor((state.skipTicks / state.skipHoldTicks) * 100));
    skipText = Text.translate("ftb.scroll.skip.progress", String(pct)).getString();
  }
  paintData["ftb_scroll_skip"] = {
    type: "text",
    text: skipText,
    color: 0x888888,
    scale: 0.7,
    x: 0,
    y: screenH / 2 - SCROLL_PAD_BOTTOM - 5,
    alignX: "center",
    alignY: "center",
    draw: "ingame",
  };

  // Text lines — only render what's visible
  let topClip = -(screenH / 2 - SCROLL_PAD_TOP);
  let bottomClip = screenH / 2 - SCROLL_PAD_BOTTOM;

  for (let i = 0; i < state.lineCount; i++) {
    let lineY = state.scrollY + i * state.lineSpacing;
    let lineId = "ftb_scroll_line_" + i;

    if (lineY > topClip && lineY < bottomClip) {
      paintData[lineId] = {
        type: "text",
        text: state.lines[i],
        color: state.colors[i] || 0xffffff,
        scale: state.textScale,
        x: 0,
        y: lineY,
        alignX: "center",
        alignY: "center",
        draw: "ingame",
      };
      state.paintedLines[i] = true;
    } else if (state.paintedLines[i]) {
      paintData[lineId] = { remove: true };
      delete state.paintedLines[i];
    }
  }

  player.paint(paintData);
}

function finishScroll() {
  let scrollId = scrollState.scrollId;
  stopScrollSound();
  clearScrollPaint();
  scrollState = null;
  Client.player.sendData("ftb:scroll_finished", { scrollId: scrollId });
}

function clearScrollPaint() {
  let player = Client.player;
  if (!player) return;

  let removals = {};
  removals["ftb_scroll_overlay"] = { remove: true };
  removals["ftb_scroll_skip"] = { remove: true };

  let maxLines = scrollState ? scrollState.lineCount : SCROLL_MAX_LINES;
  for (let i = 0; i < maxLines; i++) {
    removals["ftb_scroll_line_" + i] = { remove: true };
  }

  player.paint(removals);
}

function resolveLocalizedScrollSound(baseSoundId) {
  let lang = "";
  try {
    lang = String(MC.getInstance().getLanguageManager().getSelected());
  } catch (e) {
    return baseSoundId;
  }
  if (lang === "" || lang === "en_us") return baseSoundId;

  let localizedId = baseSoundId + "." + lang;
  let loc = Minecraft$ResourceLocation.tryParse(localizedId);
  if (loc == null) return baseSoundId;

  try {
    if (Client.getSoundManager().getSoundEvent(loc) != null) {
      return localizedId;
    }
  } catch (e) {}

  return baseSoundId;
}

function playScrollSound(soundId) {
  scrollSoundInstance = new Minecraft$SimpleSoundInstance(
    resolveLocalizedScrollSound(soundId),
    "voice",
    1,
    1,
    Minecraft$SoundInstance.createUnseededRandom(),
    false,
    0,
    "NONE",
    0,
    0,
    0,
    true
  );
  Client.getSoundManager().play(scrollSoundInstance);
}

function stopScrollSound() {
  if (scrollSoundInstance) {
    Client.getSoundManager().stop(scrollSoundInstance);
    scrollSoundInstance = null;
  }
}

function clearChat() {
  let mc = MC.getInstance();
  if (mc.gui) {
    mc.gui.getChat().clearMessages(true);
  }
}

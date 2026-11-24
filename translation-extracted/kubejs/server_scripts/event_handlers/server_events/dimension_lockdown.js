// priority: 100

// Prevents nether portal creation, blocks travel to nether/end,
// and ejects unauthorized players back to the lobby.

// --- Block nether portal formation ---
NativeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent", (event) => {
  event.setCanceled(true);
});

// --- Block all entity travel to nether and end ---
NativeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", (event) => {
  let dimKey = String(event.getDimension());
  let entity = event.getEntity();
  let blockTravel = false;

  if (dimKey.indexOf("minecraft:the_nether") !== -1) {
    blockTravel = true;
  } else if (dimKey.indexOf("minecraft:the_end") !== -1) {
    blockTravel = !entity.stages.has("ftb:ginnungagap_unlocked");
  } else if (dimKey.indexOf("minecraft:overworld") !== -1) {
    blockTravel = !entity.stages.has("ftb:midgard_unlocked");
  }

  if (blockTravel) {
    event.setCanceled(true);
    if (entity.isPlayer() && !entity.persistentData.ftb_recall_active) {
      entity.tell(Text.translate("ftb.dimension.blocked").red());
    }
  }
});

function $DimLockdown$isUnauthorized(player, dimKey) {
  if (dimKey.indexOf("minecraft:the_nether") !== -1) return true;
  if (dimKey.indexOf("minecraft:the_end") !== -1 && !player.stages.has("ftb:ginnungagap_unlocked")) return true;
  if (dimKey.indexOf("minecraft:overworld") !== -1 && !player.stages.has("ftb:midgard_unlocked")) return true;
  return false;
}

function $DimLockdown$ejectToLobby(player) {
  player.teleportTo("ftbteambases:lobby", 0.5, 171, 0.5, 0, 0);
  player.tell(Text.translate("ftb.dimension.ejected").red());
}

// --- Safety net: eject unauthorized players on dimension change ---
CommonAddedEvents.playerChangeDimension((event) => {
  let player = event.getPlayer();
  let toDim = String(event.getNewLevel().getDimension());
  if ($DimLockdown$isUnauthorized(player, toDim)) {
    event.getServer().scheduleInTicks(1, () => $DimLockdown$ejectToLobby(player));
  }
});

PlayerEvents.loggedIn((event) => {
  let player = event.getPlayer();
  player.getServer().scheduleInTicks(20, () => {
    if ($DimLockdown$isUnauthorized(player, String(player.level.getDimension()))) {
      $DimLockdown$ejectToLobby(player);
    }
  });
});

// --- Prevent end portal frame activation (block eye of ender use on frames) ---
BlockEvents.rightClicked("minecraft:end_portal_frame", (event) => {
  let player = event.getPlayer();
  if (player == null) return;
  if (player.isCreative()) return;
  let item = event.getItem();
  if (item.id === "minecraft:ender_eye") {
    event.cancel();
    player.tell(Text.translate("ftb.dimension.end_portal_blocked").red());
  }
});

const $FlightHandler$Blacklist = [
  "ftb:asgard",
  "ftb:bifrost",
  "ftb:jotunheim",
  "ftb:muspelheim",
  "ftb:niflheim",
  "minecraft:overworld",
  "minecraft:the_nether",
  "minecraft:the_end",
  "ftbteambases:lobby",
  "ftbteambases:bases",
  "mythicbotany:alfheim",
  //"ftb:bifrost",
];

const $FlightHandler$ExternalFlightEffects = [
  "ars_nouveau:flight",
  "bloodmagic:flight",
  "reliquary:flight",
  "attributeslib:flying",
];

const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");

function $FlightHandler$hasItemAnywhere(player, itemId) {
  let inv = player.getInventory();
  let size = inv.getContainerSize();
  for (let i = 0; i < size; i++) {
    if (inv.getItem(i).getId() == itemId) return true;
  }
  let curio = $CuriosApi.getCuriosHelper().findFirstCurio(player, Item.of(itemId).getItem());
  return curio.isPresent();
}

function $FlightHandler$hasRendingGaleFlight(player) {
  let inv = player.getInventory();
  let size = inv.getContainerSize();
  for (let i = 0; i < size; i++) {
    let stack = inv.getItem(i);
    if (stack.getId() != "reliquary:rending_gale") continue;
    let gale = stack.getItem();
    if (String(gale.getMode(stack)) == "FLIGHT" && gale.hasFlightCharge(stack)) {
      return true;
    }
  }
  return false;
}

function $FlightHandler$galeIsCharged(stack) {
  let nbt = stack.getNbt();
  let mode = nbt ? nbt.getInt("Mode") : 0;
  if (!nbt) return false;
  return nbt.getLong("StoredEMC") > 0 || mode == 1 || mode == 3;
}

function $FlightHandler$hasProjectEFlight(player) {
  if ($FlightHandler$hasItemAnywhere(player, "projecte:arcana_ring")) return true;

  let inv = player.getInventory();
  let size = inv.getContainerSize();
  for (let i = 0; i < size; i++) {
    let stack = inv.getItem(i);
    if (stack.getId() != "projecte:swiftwolf_rending_gale") continue;
    if ($FlightHandler$galeIsCharged(stack)) return true;
  }
  let curio = $CuriosApi
    .getCuriosHelper()
    .findFirstCurio(player, Item.of("projecte:swiftwolf_rending_gale").getItem());
  if (curio.isPresent() && $FlightHandler$galeIsCharged(curio.get().stack())) {
    return true;
  }
  return false;
}

const $FlightHandler$RecheckDelays = [1, 5, 20, 40];

const $FlightHandler = {
  /**
   * @param {Internal.ServerPlayer} player
   */
  run: function (player, forceSync) {
    let creativeFlight = player.getAttributeValue("attributeslib:creative_flight");
    let abilities = player.getAbilities();
    let pData = player.getPersistentData();
    let weGrantedFlight = pData.getBoolean("ftb:flight_handler_granted");
    let hasExternalFlight = false;

    if (creativeFlight <= 0) {
      hasExternalFlight =
        $FlightHandler$ExternalFlightEffects.some(function (eff) {
          return player.hasEffect(eff);
        }) ||
        $FlightHandler$hasRendingGaleFlight(player) ||
        $FlightHandler$hasProjectEFlight(player);
    }

    if (creativeFlight > 0 || hasExternalFlight) {
      if (abilities.mayfly == false) {
        abilities.mayfly = true;
        if (creativeFlight > 0) {
          abilities.flying = true;
        }
        pData.putBoolean("ftb:flight_handler_granted", true);
        player.onUpdateAbilities();
      }
    }
    if (creativeFlight <= 0 && !hasExternalFlight) {
      if (abilities.mayfly == true && weGrantedFlight) {
        abilities.mayfly = false;
        abilities.flying = false;
        pData.putBoolean("ftb:flight_handler_granted", false);
        player.onUpdateAbilities();
      }
    }

    if (forceSync) {
      player.onUpdateAbilities();
    }
  },

  recheck: function (server, player) {
    $FlightHandler$RecheckDelays.forEach(function (delay) {
      server.scheduleInTicks(delay, function () {
        if (player.isRemoved()) return;
        $FlightHandler.run(player, true);
      });
    });
  },
};

PlayerEvents.tick((event) => {
  let player = event.getPlayer();
  if (player == null || player.isFake()) return;
  let server = event.getServer();
  if (server.getTickCount() % 20 == 0) {
    server.scheduleInTicks(1, () => {
      $FlightHandler.run(player);
    });
  }
});

PlayerEvents.loggedIn((event) => {
  const { player } = event;
  
  player.getPersistentData()["has_seen_bifrost"] = false;

  if (!player.stages.has("starter_items")) {
    player.stages.add("starter_items");
    player.stages.add("ftbchunks_mapping");
    player.give("ftbquests:book");
    event.server.scheduleInTicks(1, () => {
      player.teleportTo("ftbteambases:lobby", 0.5, 171, 0.5, 180, 0);
    });
  }

  if (!player.stages.has("mob_stages")) {
    player.stages.add("mob_stages");
    ["protection_from_mobs_t0", "protection_from_mobs_t1", "protection_from_mobs_t2"].forEach((stage) =>
      player.stages.add(stage)
    );
  }
  let spirit_data = [];
  Malum$SpiritDataReloadListener.SPIRIT_DATA.forEach((entity, spirits) => {
    let spirit_drops = [];
    spirits.droppedSpirits.forEach((spirit) => {
      spirit_drops.push(spirit.save(NBT.compoundTag()));
    });
    spirit_data.push(
      NBT.compoundTag({
        entity: entity.toString(),
        type: spirits.primaryType.identifier,
        spirits: spirit_drops,
      })
    );
  });
  event.getPlayer().sendData("update_spirit_data", NBT.toTagCompound({ data: NBT.toTagCollection(spirit_data) }));
});

// Hel lives under ftbteambases:private_for_<uuid> per-team IDs. The literal
// blacklist entries never match those, so flight wasn't being revoked in Hel.
// Normalize private team dims to ftb:hel before the lookup.
function $FlightHandler$resolveDim(toDimRL) {
  if (FTBTeamBases$DimensionUtils.isPrivateTeamDimension(toDimRL)) {
    return new ResourceLocation("ftb:hel");
  }
  return toDimRL;
}

CommonAddedEvents.playerChangeDimension((event) => {
  let server = event.getServer();
  let player = event.getPlayer();

  let toLevel = event.getNewLevel();
  let toDimRL = $FlightHandler$resolveDim(toLevel.getDimension());

  let mayFly = player.getAbilities().mayfly;

  let toFlightStage = toDimRL.withPath("flight/" + toDimRL.getPath());

  let allowFlightTo = player.getStages().has(toFlightStage) || !$FlightHandler$Blacklist.some((dim) => dim == toDimRL);



  

  let attribute = player.getAttribute("attributeslib:creative_flight");
  if (!allowFlightTo && attribute.hasModifier($Flight$DimensionModifier)) {
    attribute.removeModifier($Flight$DimensionUUID);
  } else if (allowFlightTo && !attribute.hasModifier($Flight$DimensionModifier)) {
    attribute.addPermanentModifier($Flight$DimensionModifier);
  }
  $FlightHandler.recheck(server, player);
});

PlayerEvents.respawned((event) => {
  let server = event.getServer();
  let player = event.getPlayer();

  let toLevel = player.getLevel();
  let toDimRL = $FlightHandler$resolveDim(toLevel.getDimension());

  let mayFly = player.getAbilities().mayfly;

  let toFlightStage = toDimRL.withPath("flight/" + toDimRL.getPath());

  let allowFlightTo = player.getStages().has(toFlightStage) || !$FlightHandler$Blacklist.some((dim) => dim == toDimRL);

  let attribute = player.getAttribute("attributeslib:creative_flight");

  if (!allowFlightTo && attribute.hasModifier($Flight$DimensionModifier)) {
    attribute.removeModifier($Flight$DimensionUUID);
  } else if (allowFlightTo && !attribute.hasModifier($Flight$DimensionModifier)) {
    attribute.addPermanentModifier($Flight$DimensionModifier);
  }
  $FlightHandler.recheck(server, player);
});

NativeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangeGameModeEvent", function (event) {
  /** @type {Internal.ServerPlayer} */
  let player = event.getEntity();
  let server = player.getServer();
  $FlightHandler.recheck(server, player);
});

// const ProjectE$WorldTransmutations = Java.loadClass("moze_intel.projecte.utils.WorldTransmutations")
// const ProjectE$WorldTransmutationEntry = Java.loadClass("moze_intel.projecte.api.imc.WorldTransmutationEntry")
// ItemEvents.rightClicked((event) => {
//   const { player, item, target } = event;
//     if (item.id == "minecraft:stick") {
// 			let entry = new ProjectE$WorldTransmutationEntry(Blocks.SCULK.defaultBlockState(), Blocks.CAKE.defaultBlockState(), null)
// 			let entries = ProjectE$WorldTransmutations.getWorldTransmutations()
// 			if (!entries.contains(entry)) {
// 				entries.add(entry)
// 			}
//     }
// });

ItemEvents.rightClicked("gag:energized_hearthstone", (event) => {
  const { player, item, target } = event;
  if (!target.block && player.isShiftKeyDown()) {
    item.getNbt().remove("target")
  }
});



/** 
 * Handles Ars Maze Spell
 */

BlockEvents.broken((event) => {
  let is_in_biome = event
    .getLevel()
    .getBiome(event.getBlock().getPos())
    .tags()
    .toList()
    .some((tag) => tag.location() == "ftb:unbreakable_biome");
  let player = event.getPlayer();
  let is_creative = false;
  let is_fake = false;
  if (player != null) {
    is_creative = player.isSpectator() || player.isCreative();
    is_fake = player.isFake();
  }
  if (is_in_biome && !is_creative && !is_fake) {
    event.cancel();
  }
});

/** 
 * Handles Ars Maze Spell
 */

BlockEvents.placed((event) => {
  let is_in_biome = event
    .getLevel()
    .getBiome(event.getBlock().getPos())
    .tags()
    .toList()
    .some((tag) => tag.location() == "ftb:unbreakable_biome");
  let player = event.getPlayer();
  let is_creative = false;
  if (player != null) {
    is_creative = player.isSpectator() || player.isCreative();
  }
  if (is_in_biome && !is_creative) {
    event.cancel();
  }
});

BlockEvents.broken((event) => {
  let player = event.getPlayer();
  let is_creative = false;

  if (player != null) {
    is_creative = player.isSpectator() || player.isCreative();
  }

  let level = event.getLevel();

  if (level == null) return;
  if (level.isClientSide()) return;
  if (is_creative) return;

  let pos = event.getBlock().getPos();

  if ($Arena$isArena(level, pos)) {
    event.cancel();
  }
});

BlockEvents.placed((event) => {
  let player = event.getPlayer();
  let is_creative = false;

  if (player != null) {
    is_creative = player.isSpectator() || player.isCreative();
  }

  let level = event.getLevel();

  if (level == null) return;
  if (level.isClientSide()) return;
  if (is_creative) return;

  let pos = event.getBlock().getPos();

  if ($Arena$isArena(level, pos)) {
    event.cancel();
  }
});

function spawnTradingHall(server) {
  let level = server.getLevel("ftb:bifrost");

  $$TRADING_HALL_CONFIG.forEach((entry) => {
    const {blockPos, spawnPos, profession, jobBlock} = entry;
    let villager = level.createEntity("minecraft:villager");
    villager.x = spawnPos.x + 0.5;
    villager.y = spawnPos.y + 1;
    villager.z = spawnPos.z + 0.5;

    // Force profession during spawn
    villager.mergeNbt({
      VillagerData: {
        profession: profession,
        level: 1,
        type: "minecraft:snow",
      },
      Brain: {
        memories: {
          "minecraft:job_site": {
            value: {
              pos: [blockPos.x, blockPos.y, blockPos.z],
              dimension: "ftb:bifrost",
            },
          },
        },
      },
    });

    level.getBlock(new BlockPos(blockPos.x, blockPos.y, blockPos.z)).set(jobBlock);
    villager.spawn();
  });
}

function clearTradingHall(server) {
  let level = server.getLevel("ftb:bifrost");
  let villagers = level.getEntities().filter(e => e.getType() == "minecraft:villager");
  villagers.forEach(villager => {
    let memory = villager.getBrain().getMemory("minecraft:job_site");
    if(!memory.isPresent()) { villager.discard(); return; }
    let pos = memory.get().pos();
    level.getBlock(pos).set("minecraft:air");
    server.runCommandSilent(
      `execute in ftb:bifrost run particle soul_fire_flame ${villager.x} ${villager.y + 1} ${villager.z} 0.3 0.8 0.3 0.02 50`
    );
    villager.discard();

    // Clear out any lingering job blocks
    $$TRADING_HALL_CONFIG.forEach((entry) => {
      level.getBlock(new BlockPos(entry.blockPos.x, entry.blockPos.y, entry.blockPos.z)).set("minecraft:air");
    });
  })
}

var SEVEN_DAYS = 20*60*20*7; // 20 ticks * 60 seconds * 20 minutes * 7 days
ServerEvents.tick((event) => {
  const {server} = event;
  if (server.tickCount % 100 !== 0) return;

  let sPData = server.persistentData;
  sPData["trading_hall_timer"] = (sPData["trading_hall_timer"] || 0) + 1;
  if (sPData["trading_hall_timer"] < SEVEN_DAYS/100) return;
  sPData["trading_hall_timer"] = 0;

  let bifrost = server.getLevel("ftb:bifrost");
  let forcedChunks = bifrost.getForcedChunks();

  // more robust but potentially not needed?
  // for(let x = -2; x <= 1; x++) {
  //   for(let z = -2; z <= 1; z++) {
  //     if(!forcedChunks.contains(new ChunkPos(x, z))) {
  //       bifrost.setChunkForced(x, z, true);
  //       server.runCommand(`execute in ftb:bifrost run forceload add ${x*16} ${z*16}`);
  //     }
  // }

  if(forcedChunks.size() == 0) {
    server.runCommandSilent(`execute in ftb:bifrost run forceload add -22 22 22 -22`) // Ensure chunks are loaded before we try to manipulate them [-2, -2] to [1, 1]
  }
  clearTradingHall(server);
  spawnTradingHall(server);
});

//VILLAGER POI OVERRIDE
// Locate the private TYPE_BY_STATE map via reflection
var typeByState = null;
var poiOverrideApplied = false;

try {
  var probeState = Minecraft$BuiltInRegistries.BLOCK.get("minecraft:lectern").defaultBlockState();
  var fields = new Minecraft$PoiTypes().getClass().getDeclaredFields();
  for (var i = 0; i < fields.length; i++) {
    fields[i].setAccessible(true);
    try {
      var val = fields[i].get(null);
      if (val && val.containsKey && val.containsKey(probeState)) {
        typeByState = val;
        break;
      }
    } catch (e) {}
  }
} catch (e) {
  console.error("[POI Override] Failed to find TYPE_BY_STATE: " + e);
}

if (typeByState) {
  ServerEvents.loaded(function (event) {
    var config = $$TRADING_HALL_CONFIG;
    for (var k = 0; k < config.length; k++) {
      var entry = config[k];

      try {
        var origBlock = Minecraft$BuiltInRegistries.BLOCK.get(entry.defaultBlock);
        var poiHolder = typeByState.get(origBlock.defaultBlockState());

        if (!poiHolder) {
          console.error("[POI Override] " + entry.defaultBlock + " not in POI map for: " + entry.profession);
          continue;
        }

        var origStates = origBlock.getStateDefinition().getPossibleStates();
        for (var r = 0; r < origStates.size(); r++) {
          typeByState.remove(origStates.get(r));
        }

        var newStates = Minecraft$BuiltInRegistries.BLOCK.get(entry.jobBlock).getStateDefinition().getPossibleStates();
        for (var s = 0; s < newStates.size(); s++) {
          typeByState.remove(newStates.get(s));
        }
        for (var s = 0; s < newStates.size(); s++) {
          typeByState.put(newStates.get(s), poiHolder);
        }

        console.log("[POI Override] " + entry.profession + ": " + entry.defaultBlock + " -> " + entry.jobBlock);
      } catch (e) {
        console.error("[POI Override] Error processing " + entry.profession + ": " + e);
      }
    }
  });
}

ServerEvents.commandRegistry((event) => {
    const Commands = event.commands

    event.register(
        Commands.literal("tradinghall")
        .requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
            .then(Commands.literal("spawn").executes((ctx) => {
                spawnTradingHall(ctx.getSource().getServer())
                return 1
            }))
            .then(Commands.literal("clear").executes((ctx) => {
                clearTradingHall(ctx.getSource().getServer())
                return 1
            }))
    )
})
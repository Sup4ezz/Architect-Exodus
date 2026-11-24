const $$MazeRoomHints = {
  "Sky Walkway":          "ftb.maze.sky_walkway.start",
  "Spell Walkway":        "ftb.maze.spell_walkway.start",
  "Spot the Difference":  "ftb.maze.spot_the_difference.start",
  "Fake Floor":           "ftb.maze.fake_floor.start",
  "Trapped Floor":        "ftb.maze.trapped_floor.start",
  "Bullshit Walkway":     "ftb.maze.bullshit_walkway.start",
};

const Maze$$VoidRescueAt = {};
const Maze$$VoidRescueCooldown = 200;

function Maze$$F_TriggerVoidRescue(player, server) {
  if (player.isCreative() || player.isSpectator()) return;
  let uuid = player.getStringUuid();
  let now = server.getTickCount();
  let last = Maze$$VoidRescueAt[uuid];
  if (last != null && now - last < Maze$$VoidRescueCooldown) return;
  Maze$$VoidRescueAt[uuid] = now;
  server.runCommand(`/ftb_raido ${player.getDisplayName().getString()} -64 -16 -291 5 -1180`);

  let tracked = typeof Maze$$TrackedPlayers !== "undefined" ? Maze$$TrackedPlayers[uuid] : null;
  if (tracked == null || tracked.current_room == null || typeof Maze$$Definition === "undefined") return;
  let rxy = tracked.current_room;
  if (rxy.y < 0 || rxy.y >= Maze$$Definition.length || rxy.x < 0 || rxy.x >= Maze$$Definition[rxy.y].length) return;
  let name = Maze$$Definition[rxy.y][rxy.x].name;
  let hintKey = $$MazeRoomHints[name];
  if (hintKey) {
    player.tell(Text.translate(hintKey).gold());
  }
}

EntityEvents.hurt("minecraft:player", (event) => {
  if (event.getSource().getType() != "outOfWorld") return;
  let player = event.getPlayer();
  let level = player.getLevel();
  let blockPos = player.blockPosition().atY(1);
  if (level.getBiome(blockPos).key().location() == "ftb:hel/maze") {
    Maze$$F_TriggerVoidRescue(player, event.getServer());
    event.cancel();
  }
});

let Maze$$BullshitBounds = null;
function Maze$$F_GetBullshitBounds() {
  if (Maze$$BullshitBounds != null) return Maze$$BullshitBounds;
  let result = { minX: 0, maxX: -1, minZ: 0, maxZ: -1 };
  for (let y = 0; y < Maze$$Definition.length; y++) {
    for (let x = 0; x < Maze$$Definition[y].length; x++) {
      if (Maze$$Definition[y][x].name == "Bullshit Walkway") {
        result = {
          minX: Maze$$OriginX + x * 16,
          maxX: Maze$$OriginX + x * 16 + 15,
          minZ: Maze$$OriginZ + y * 16,
          maxZ: Maze$$OriginZ + y * 16 + 15,
        };
      }
    }
  }
  Maze$$BullshitBounds = result;
  return Maze$$BullshitBounds;
}

ServerEvents.tick((event) => {
  let server = event.getServer();
  let bounds = Maze$$F_GetBullshitBounds();
  if (bounds.maxX < bounds.minX) return;
  server.getPlayerList().getPlayers().forEach((player) => {
    if (player.getY() >= MazeConfig.MIN_Y) return;
    let x = player.getX();
    let z = player.getZ();
    if (x < bounds.minX || x > bounds.maxX || z < bounds.minZ || z > bounds.maxZ) return;
    let biomePos = player.blockPosition().atY(1);
    if (player.getLevel().getBiome(biomePos).key().location() != "ftb:hel/maze") return;
    Maze$$F_TriggerVoidRescue(player, server);
  });
});

NativeEvents.onEvent("net.minecraftforge.event.entity.EntityMountEvent", (event) => {
  let player = event.getEntityMounting()
  let vehicle = event.getEntityBeingMounted()
  let is_mounting = event.isMounting()

  if (!player.isPlayer()) return;
  if (vehicle.getType() != "ftblh:little_helper") return;
  if (is_mounting == true) return;
  vehicle.setIdlePositioner(vehicle.IDLE_POSITIONER_RIGHT)
})


// "ftb.maze.shulkers.start"
// "ftb.maze.arrow_trap.start"
// "ftb.maze.final_room.start"
// "ftb.maze.entrance.start"
// "ftb.maze.two_levers.start"
// "ftb.maze.kinetic_rune_tutorial.start"
// "ftb.maze.first_vault.start"
// "ftb.maze.trapped_chest.start"
// "ftb.maze.jump_lava.start"
// "ftb.maze.fan_pull_pakour.start"
// "ftb.maze.trapped_floor.start"
// "ftb.maze.burnout_puzzle.start"
// "ftb.maze.fake_floor.start"
// "ftb.maze.dash.start"
// "ftb.maze.sky_walkway.start"
// "ftb.maze.spell_walkway.start"
// "ftb.maze.elemental_runes.start"
// "ftb.maze.nozzle_shitshow.start"
// "ftb.maze.piston_pit.start"
// "ftb.maze.magic_selection.start"
// "ftb.maze.anxiety_sand.start"
// "ftb.maze.turret_dodge.start"
// "ftb.maze.spot_the_difference.start"
// "ftb.maze.turret_decoy.start"
// "ftb.maze.turret_tangle.start"
// "ftb.maze.healing_harming.start"
// "ftb.maze.bullshit_walkway.start"

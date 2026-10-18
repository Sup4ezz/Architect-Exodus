// priority 10

// ============================================================================
// MAZE CONTROLLER
// Handles player interactions, boss encounters, and block protection within
// the procedural maze dungeon system.
// ============================================================================

// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------

const MazeConfig = {
  // Maze dimensions
  SIZE: 128,
  ROOM_SIZE: 16,
  ROOM_CENTER_OFFSET: 8,
  GRID_SIZE: 8,

  // Vertical bounds
  MIN_Y: 0,
  MAX_Y: 32,
  WALL_Y_MIN: 2,
  WALL_Y_MAX: 5,

  // Detection ranges
  BOSS_DETECTION_RADIUS: 8,
  BOSS_DETECTION_HEIGHT: 16,
  BOSS_TIMEOUT_TICKS: 20 * 60 * 5,

  // Timing (in ticks)
  TICK_INTERVAL: 20,
  MAZE_RESET_INTERVAL: 20 * 60 * 120, // 2 hours
  MAZE_RESET_STAGGER: 20 * 30, // 30 seconds between each reset

  // Valid dimensions for maze
  VALID_DIMENSIONS: ["hel", "private"],

  // Block used for walls
  WALL_BLOCK_SOLID: "ars_nouveau:mirrorweave",
  WALL_BLOCK_PASSABLE: "ars_nouveau:falseweave",
  WALL_MIMIC_STATE: '{mimic_state:{Name:"malum:tainted_rock_column",Properties:{axis:"y"}}}',

  // Flight restriction modifier
  FLIGHT_MODIFIER_ID: "6-9-4-2-0",
};

const Maze$$EliteDraugrNbt = `{Tags:["maze_boss"],CustomName:'{"text":"Elite Draugr","color":"dark_red","bold":true}',CustomNameVisible:1b,PersistenceRequired:1b,Health:120f,Attributes:[{Name:"generic.max_health",Base:120d},{Name:"generic.attack_damage",Base:14d},{Name:"generic.armor",Base:10d},{Name:"generic.knockback_resistance",Base:0.6d},{Name:"generic.movement_speed",Base:0.28d}]}`;

// ---------------------------------------------------------------------------
// IN-MEMORY STATE (not persisted - intentionally resets on server restart)
// ---------------------------------------------------------------------------

/**
 * Tracks which rooms each player has triggered (messages, traps, etc.)
 * Structure: { [playerUuid]: { [roomKey]: true } }
 */
const Maze$$TriggeredRooms = {};

/**
 * Tracks which players are currently inside the maze
 * Used to detect enter/exit transitions and avoid redundant commands
 * Structure: { [playerUuid]: boolean }
 */
const Maze$$TrackedPlayers = {};
const Maze$$ValidHelDimensions = "ftb:hel";

const Maze$$North = 1 << 0;
const Maze$$East = 1 << 1;
const Maze$$South = 1 << 2;
const Maze$$West = 1 << 3;

const Maze$$Definition = [
  [
    {
      name: "Entrance",
      links: Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Zombies",
      links: Maze$$West | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "1st Loot",
      links: Maze$$West | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "2nd Boss",
      links: Maze$$West | Maze$$East | Maze$$South,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`execute in ${player.level.getDimension()} run summon alexscaves:ferrouslime ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"], CustomName:{"text":"Slime Man"}}`)
        Utils.getServer().runCommandSilent(`execute in ${player.level.getDimension()} run summon alexscaves:ferrouslime ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"], CustomName:{"text":"Slime Man"}}`
        );
      },
    },
    {
      name: "Jump Lava Dodge",
      links: Maze$$West | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "3rd Library",
      links: Maze$$West | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Eye Puzzle",
      links: Maze$$West | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Trapped Floor",
      links: Maze$$West | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "Skeletons",
      links: Maze$$North | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Shulkers",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {
        Utils.getServer().runCommandSilent(`execute in ${player.level.getDimension()} run summon minecraft:shulker -279 2 -1148 {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`execute in ${player.level.getDimension()} run summon minecraft:shulker -279 2 -1140 {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`execute in ${player.level.getDimension()} run summon minecraft:shulker -271 2 -1148 {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`execute in ${player.level.getDimension()} run summon minecraft:shulker -271 2 -1140 {Tags:["maze_boss"]}`);
      },
    },
    {
      name: "Slime",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Trapped Chest",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "2nd Loot",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Fan Pull Pakour",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Spinning Walls",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Husks",
      links: Maze$$North | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "Two Levers",
      links: Maze$$North | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Wipeout",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Arrow Trap",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {
        Utils.getServer().runCommandSilent(`/ftb_utils fill -266 3 -1131 -266 3 -1131 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -266 3 -1125 -266 3 -1125 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -262 3 -1121 -262 3 -1121 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -256 3 -1121 -256 3 -1121 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -252 3 -1125 -252 3 -1125 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -252 3 -1131 -252 3 -1131 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -256 3 -1135 -256 3 -1135 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -262 3 -1135 -262 3 -1135 malum:tainted_rock_column ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -266 3 -1131 -266 3 -1131 minecraft:dispenser[facing=east]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -266 3 -1125 -266 3 -1125 minecraft:dispenser[facing=east]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -262 3 -1121 -262 3 -1121 minecraft:dispenser[facing=north]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -256 3 -1121 -256 3 -1121 minecraft:dispenser[facing=north]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -252 3 -1125 -252 3 -1125 minecraft:dispenser[facing=west]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -252 3 -1131 -252 3 -1131 minecraft:dispenser[facing=west]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -256 3 -1135 -256 3 -1135 minecraft:dispenser[facing=south]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
        Utils.getServer().runCommandSilent(`/ftb_utils fill -262 3 -1135 -262 3 -1135 minecraft:dispenser[facing=south]{ForgeCaps:{},Items:[{Count:8b,Slot:4b,id:"minecraft:arrow"}]} ${player.level.getDimension()}`);
      },
    },
    {
      name: "1st Boss",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon cataclysm:draugr ${center.getX()} 2 ${center.getZ()} ${Maze$$EliteDraugrNbt}`);
      },
    },
    {
      name: "4th Loot",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Stray",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "2nd Vault",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "3rd Loot",
      links: Maze$$North | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "1st Library",
      links: Maze$$North | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Kinetic Rune Tutorial",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "1st Vault",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "2nd Library",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "4th Boss",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon cataclysm:draugr ${center.getX()} 2 ${center.getZ()} ${Maze$$EliteDraugrNbt}`);
      },
    },
    {
      name: "Fake Floor",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "3rd Boss",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon justtrialspawners:breeze ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon justtrialspawners:breeze ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon minecraft:shulker ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
      },
    },
    {
      name: "Burnout Puzzle",
      links: Maze$$North | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "Final Loot",
      links: Maze$$North | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Bullshit Walkway",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Turret Tangle",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Turret Decoy",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Dash",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Spell Walkway",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Elemental Runes",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "1st Storeroom",
      links: Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "Final Boss",
      links: Maze$$North | Maze$$East | Maze$$South,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon ars_nouveau:wilden_stalker ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon ars_nouveau:wilden_stalker ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon irons_spellbooks:necromancer ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
      },
    },
    {
      name: "Healing Harming Maze",
      links: Maze$$North | Maze$$East | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "6th Boss",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon cataclysm:koboleton ${center.getX()} 2 ${center.getZ()} {Tags:["maze_boss"]}`);
      },
    },
    {
      name: "Spot the Difference",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Sky Walkway",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Magma Cream",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Nozzle Shitshow",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Endermen",
      links: Maze$$North | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "Final Q1",
      links: Maze$$North,
      extra: function (player) {},
      tags: ["final"],
    },
    {
      name: "Final Q2",
      links: 0,
      extra: function (player) {},
      tags: ["final"],
    },
    {
      name: "5th Vault",
      links: Maze$$North | Maze$$East | Maze$$South,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Turret Dodge",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "5th Library",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "4th Vault",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Drowned",
      links: Maze$$North | Maze$$East | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Elemental Rune Maze",
      links: Maze$$North | Maze$$South | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
  [
    {
      name: "Final Q3",
      links: 0,
      tags: ["final"],
      extra: function (player) {},
    },
    {
      name: "Final Q4",
      links: 0,
      tags: ["final"],
      extra: function (player) {},
    },
    {
      name: "Anxiety Sand",
      links: Maze$$North | Maze$$East,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Bogged",
      links: Maze$$North | Maze$$East | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Magic Selection",
      links: Maze$$North | Maze$$East | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "Piston Pit",
      links: Maze$$North | Maze$$East | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
    {
      name: "5th Boss",
      links: Maze$$North | Maze$$East | Maze$$West,
      tags: ["boss"],
      extra: function (player) {
        let room = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());
        let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);
        Utils.getServer().runCommandSilent(`/execute in ${player.level.getDimension()} run summon cataclysm:draugr ${center.getX()} 2 ${center.getZ()} ${Maze$$EliteDraugrNbt}`);
      },
    },
    {
      name: "4th Library",
      links: Maze$$North | Maze$$West,
      tags: [],
      extra: function (player) {},
    },
  ],
];

const Maze$$HilbertTable = (() => {
  function gilbert_d2xy(index, w, h) {
    let _P = { x: 0, y: 0 };
    let _A = { x: 0, y: h };
    let _B = { x: w, y: 0 };

    if (w >= h) {
      _A.x = w;
      _A.y = 0;
      _B.x = 0;
      _B.y = h;
    }
    return gilbert_d2xy_r(index, 0, _P, _A, _B);
  }
  function gilbert_d2xy_r(dst_idx, cur_idx, p, a, b) {
    let _p = {},
      _a = {},
      _b = {};
    let nxt_idx = -1;

    let w = Math.abs(a.x + a.y);
    let h = Math.abs(b.x + b.y);

    let da = { x: Math.sign(a.x), y: Math.sign(a.y) };
    let db = { x: Math.sign(b.x), y: Math.sign(b.y) };
    let d = { x: da.x + db.x, y: da.y + db.y, i: dst_idx - cur_idx };

    if (h == 1) {
      return { x: p.x + da.x * d.i, y: p.y + da.y * d.i };
    }
    if (w == 1) {
      return { x: p.x + db.x * d.i, y: p.y + db.y * d.i };
    }

    let a2 = { x: Math.floor(a.x / 2), y: Math.floor(a.y / 2) };
    let b2 = { x: Math.floor(b.x / 2), y: Math.floor(b.y / 2) };

    let w2 = Math.abs(a2.x + a2.y);
    let h2 = Math.abs(b2.x + b2.y);

    if (2 * w > 3 * h) {
      // prefer even steps
      if (w2 % 2 && w > 2) {
        a2.x += da.x;
        a2.y += da.y;
      }

      nxt_idx = cur_idx + Math.abs((a2.x + a2.y) * (b.x + b.y));
      if (cur_idx <= dst_idx && dst_idx < nxt_idx) {
        return gilbert_d2xy_r(dst_idx, cur_idx, p, a2, b);
      }
      cur_idx = nxt_idx;

      _p = { x: p.x + a2.x, y: p.y + a2.y };
      _a = { x: a.x - a2.x, y: a.y - a2.y };

      return gilbert_d2xy_r(dst_idx, cur_idx, _p, _a, b);
    }

    // prefer event steps
    if (h2 % 2 && h > 2) {
      b2.x += db.x;
      b2.y += db.y;
    }

    // standard case: one step up, on long horizontal, one step down
    nxt_idx = cur_idx + Math.abs((b2.x + b2.y) * (a2.x + a2.y));
    if (cur_idx <= dst_idx && dst_idx < nxt_idx) {
      return gilbert_d2xy_r(dst_idx, cur_idx, p, b2, a2);
    }
    cur_idx = nxt_idx;

    nxt_idx = cur_idx + Math.abs((a.x + a.y) * (b.x - b2.x + (b.y - b2.y)));
    if (cur_idx <= dst_idx && dst_idx < nxt_idx) {
      _p = { x: p.x + b2.x, y: p.y + b2.y };
      _b = { x: b.x - b2.x, y: b.y - b2.y };
      return gilbert_d2xy_r(dst_idx, cur_idx, _p, a, _b);
    }
    cur_idx = nxt_idx;

    _p = {
      x: p.x + (a.x - da.x) + (b2.x - db.x),
      y: p.y + (a.y - da.y) + (b2.y - db.y),
    };
    _a = { x: -b2.x, y: -b2.y };
    _b = { x: -(a.x - a2.x), y: -(a.y - a2.y) };

    return gilbert_d2xy_r(dst_idx, cur_idx, _p, _a, _b);
  }

  let result = [];

  for (let d = 0; d < 64; d++) {
    let c = gilbert_d2xy(d, 8, 8)
    c = {x: c.y, y: c.x};

    result.push(c);
  }
  return result;
})();

const Maze$$AABB = Java.loadClass("net.minecraft.world.phys.AABB");
const Maze$$OriginX = -299;
const Maze$$OriginY = 0;
const Maze$$OriginZ = -1168;

/**
 * Tracks boss encounter states per dimension
 * Structure: { [dimension]: { [roomKey]: "in_progress" | "defeated" } }
 * Note: Not persisted - boss fights reset on server restart (mobs despawn anyway)
 */
const Maze$$TrackedBosses = {};

const Maze$$BossProgressSince = {};

const Maze$$GeneratedDims = {};

// ---------------------------------------------------------------------------
// UTILITY FUNCTIONS
// ---------------------------------------------------------------------------

/**
 * Checks if a position is within the maze boundaries
 * @param {ResourceLocation} dimension - The dimension identifier
 * @param {BlockPos} pos - The position to check
 * @returns {boolean}
 */
function isInMaze(entity) {
  return Maze$$F_IsEntityInMaze(entity);
}

/**
 * Converts world coordinates to maze room coordinates
 * @param {number} worldX - World X coordinate
 * @param {number} worldZ - World Z coordinate
 * @returns {Object|undefined} Room data or undefined if not found
 */
function getRoomFromCoordinate(worldX, worldZ) {
  const relativeX = worldX - maze.x + 0.5;
  const relativeZ = worldZ - maze.z + 0.5;
  const roomX = relativeX >> 4;
  const roomZ = relativeZ >> 4;

  return mazeRooms[`${roomX},${roomZ}`];
}

/**
 * Gets the center world coordinates for a room
 * @param {number} roomX - Room grid X
 * @param {number} roomZ - Room grid Z
 * @returns {{x: number, z: number}}
 */
function getRoomMiddleCoordinate(roomX, roomZ) {
  return {
    x: maze.x + roomX * MazeConfig.ROOM_SIZE + MazeConfig.ROOM_CENTER_OFFSET,
    z: maze.z + roomZ * MazeConfig.ROOM_SIZE + MazeConfig.ROOM_CENTER_OFFSET,
  };
}

/**
 * Creates a unique key for a room based on its coordinates
 * @param {number} roomX - Room grid X
 * @param {number} roomZ - Room grid Z
 * @returns {string}
 */
function getRoomKey(roomX, roomZ) {
  return `${roomX},${roomZ}`;
}

/**
 * Executes a command silently
 * @param {string} command - The command to execute
 */
function runCommand(command) {
  Utils.server.runCommandSilent(command);
}

/**
 * Executes a command in a specific dimension
 * @param {string} dimension - The dimension ID
 * @param {string} command - The command to execute
 */
function runCommandInDimension(dimension, command) {
  runCommand(`/execute in ${dimension} run ${command}`);
}

// ---------------------------------------------------------------------------
// WALL MANAGEMENT
// ---------------------------------------------------------------------------

/**
 * Resets all maze state for a dimension
 * @param {string} dimension - The dimension ID
 */
function resetMaze(dimension) {
  regenerateAllWalls(dimension);

  // Clear in-memory state for this dimension
  Maze$$TrackedBosses[dimension] = {};
  // lastActivityTimestamp[dimension] = Utils.server.tickCount;

  // Clear player triggers (they'll re-trigger messages on re-entry)
  Object.keys(Maze$$TriggeredRooms).forEach((uuid) => {
    Maze$$TriggeredRooms[uuid] = [];
  });

  // Kill maze entities
}

// ---------------------------------------------------------------------------
// BOSS ENCOUNTER SYSTEM
// ---------------------------------------------------------------------------

const BossEncounter = {
  /**
   * Gets the boss state for a room in a dimension
   * @param {string} dimension - The dimension ID
   * @param {Object} room - The room data
   * @returns {string|undefined} "in_progress", "defeated", or undefined
   */
  getState(dimension, room) {
    const dimStates = Maze$$TrackedBosses[dimension];
    if (!dimStates) return undefined;
    return dimStates[getRoomKey(room.x, room.y)];
  },

  /**
   * Sets the boss state for a room in a dimension
   * @param {string} dimension - The dimension ID
   * @param {Object} room - The room data
   * @param {string} state - The new state
   */
  setState(dimension, room, state) {
    if (!Maze$$TrackedBosses[dimension]) Maze$$TrackedBosses[dimension] = {};
    Maze$$TrackedBosses[dimension][getRoomKey(room.x, room.y)] = state;
  },

  /**
   * Gets the exit direction for a boss room (direction to next room)
   * @param {Object} room - The room data
   * @returns {Direction|null} The exit direction or null if this is the last room
   */
  getExitDirection(room) {
    const nextRoom = mazeRoomsList[room.i + 1];
    if (!nextRoom || !nextRoom.dir || !nextRoom.dir[0]) {
      return null;
    }
    return nextRoom.dir[0].opposite;
  },

  /**
   * Checks if there are any monsters in the boss arena
   * @param {Level} level - The level instance
   * @param {Entity} player - The player entity (for reference)
   * @param {{x: number, z: number}} center - Room center coordinates
   * @returns {boolean}
   */
  hasActiveMonsters(level, player, center) {
    const radius = MazeConfig.BOSS_DETECTION_RADIUS;
    const height = MazeConfig.BOSS_DETECTION_HEIGHT;

    const searchArea = new Maze$$AABB(
      center.x - radius,
      MazeConfig.MIN_Y,
      center.z - radius,
      center.x + radius,
      height,
      center.z + radius
    );

    const monsters = level.getEntities(player, searchArea, (entity) => entity.isMonster());
    return monsters.length > 0;
  },

  /**
   * Starts a boss encounter for a room
   * @param {Player} player - The player
   * @param {string} dimension - The dimension ID
   * @param {Object} room - The room data
   */
  start(player, dimension, room) {
    const center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y);

    // Spawn the boss(es)
  },

  /**
   * Completes a boss encounter
   * @param {Player} player - The player
   * @param {string} dimension - The dimension ID
   * @param {Object} room - The room data
   */
  complete(player, dimension, room) {
    let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y, 3);
    let pathways = [center.offset(-8, 0, 0), center.offset(0, 0, +8), center.offset(+8, 0, 0), center.offset(0, 0, -8)];

    pathways.forEach((door, idx) => {
      if (player.getLevel().getBlock(door).getId() == "ars_nouveau:mirrorweave") {
        if (idx == 0 || idx == 2) {
          Maze$$F_FillWall(
            player.getLevel(),
            door.offset(0, -1, -1),
            door.offset(0, 1, 1),
            `ars_nouveau:falseweave[level=0]{mimic_state:{Name:"malum:tainted_rock_column",Properties:{axis:"y"}}}`
          );
        }
        if (idx == 1 || idx == 3) {
          Maze$$F_FillWall(
            player.getLevel(),
            door.offset(-1, -1, 0),
            door.offset(1, 1, 0),
            `ars_nouveau:falseweave[level=0]{mimic_state:{Name:"malum:tainted_rock_column",Properties:{axis:"y"}}}`
          );
        }
      }
    });

    // Update state
    this.setState(dimension, room, "defeated");

    player.level.getPlayers().forEach((entity) => {
      if (Maze$$F_IsEntityInMaze(entity)) {
        FTBLittleHelper.getHelperEntity(entity).ifPresent((ftblh) => {
          ftblh.addMessage(Text.translate("ftb.maze.boss_defeated", entity), 150);
        });
      }
    });
  },

  /**
   * Checks and updates boss encounter status
   * @param {PlayerTickEvent} event - The player tick event
   * @param {Object} room - The room data
   * @param {string} dimension - The dimension ID
   */
  update(event, room, dimension) {
    let bossState = this.getState(dimension, room);
    let progressKey = dimension + "|" + getRoomKey(room.x, room.y);

    if (!bossState) {
      this.setState(dimension, room, "in_progress");
      Maze$$BossProgressSince[progressKey] = event.getServer().getTickCount();
      event.level.getPlayers().forEach((entity) => {
        if (Maze$$F_IsEntityInMaze(entity)) {
          FTBLittleHelper.getHelperEntity(entity).ifPresent((ftblh) => {
            ftblh.addMessage(Text.translate("ftb.maze.boss_encounter", entity), 150);
          });
        }
      });
      return;
    }

    if (bossState === "in_progress") {
      let center = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y, 2);
      let stillFighting = this.hasActiveMonsters(event.level, event.entity, center);
      let since = Maze$$BossProgressSince[progressKey];
      if (since == null) {
        since = event.getServer().getTickCount();
        Maze$$BossProgressSince[progressKey] = since;
      }
      // console.log(stillFighting)
      if (!stillFighting) {
        this.complete(event.player, dimension, room);
      } else if (event.getServer().getTickCount() - since >= MazeConfig.BOSS_TIMEOUT_TICKS) {
        console.warn("[maze] Boss room " + getRoomKey(room.x, room.y) + " in " + dimension + " unresolved after " + MazeConfig.BOSS_TIMEOUT_TICKS + " ticks; force-opening to prevent deadlock.");
        this.complete(event.player, dimension, room);
      }
    }
    // "defeated" state - do nothing, player can pass through
  },
};

// ---------------------------------------------------------------------------
// PLAYER STATE MANAGEMENT
// ---------------------------------------------------------------------------

const PlayerState = {
  /**
   * Checks if player has already triggered a room's function
   * @param {string} uuid - Player UUID
   * @param {Object} room - The room data
   * @returns {boolean}
   */
  hasTriggeredRoom(uuid, room) {
    const triggers = Maze$$TriggeredRooms[uuid];
    if (!triggers) return false;
    return triggers.some((r) => r.x == room.x && r.y == room.y);
  },

  /**
   * Marks a room as triggered for a player
   * @param {string} uuid - Player UUID
   * @param {Object} room - The room data
   */
  markRoomTriggered(uuid, room) {
    if (!Maze$$TriggeredRooms[uuid]) Maze$$TriggeredRooms[uuid] = [];
    Maze$$TriggeredRooms[uuid].push({ x: room.x, y: room.y });
    
  },

  /**
   * Checks if player is tracked as being in the maze
   * @param {string} uuid - Player UUID
   * @returns {boolean}
   */
  isInMaze(uuid) {
    if (Maze$$TrackedPlayers[uuid] == null) {
      return false
    }
    return Maze$$TrackedPlayers[uuid]["current_room"] != null;
  },

  /**
   * Handles player entering the maze (called once on entry)
   * @param {Internal.ServerPlayer} player - The player
   */
  onEnterMaze(player) {
    const uuid = player.uuid.toString();

    Maze$$F_EnsureGenerated(player);

    let room = Maze$$F_RoomXYFromXYZ(player.blockPosition().x, player.blockPosition().y, player.blockPosition().z);
    Maze$$TrackedPlayers[uuid] = {current_room: room};
    if (!player.hasEffect("ftb:maze_no_flight")) {
      player.forceAddEffect(new Minecraft$MobEffectInstance(
        "ftb:maze_no_flight", 
        -1, 
        0,
        false,
        false,
        true
      ), 
      null
    )}
  },

  /**
   * Handles player exiting the maze (called once on exit)
   * @param {Internal.ServerPlayer} player - The player
   */
  onExitMaze(player) {
    const uuid = player.uuid.toString();
    Maze$$TrackedPlayers[uuid] = null;
  },
};

// ---------------------------------------------------------------------------
// BLOCK PROTECTION SYSTEM
// ---------------------------------------------------------------------------

const BlockProtection = {
  /**
   * Creates an event cancellation handler with optional exceptions
   * @param {Function} [exceptionCheck] - Function that returns true if action should be allowed
   * @returns {Function} Event handler
   */
  createHandler(exceptionCheck) {
    return (event) => {
      if (event.player == null) return;
      if (event.player.creative) return;

      if (exceptionCheck && exceptionCheck(event)) return;

      if (isInMaze(event.player)) {
        event.cancel();
      }
    };
  },

  /**
   * Checks if a block break should be allowed
   * @param {BlockEvent} event - The block event
   * @returns {boolean}
   */
  allowBlockBreak(event) {
    if (event.block.id === "minecraft:air") return true;
    let player = event.getPlayer();
    if (player == null) return true; // ?
    // Allow fake players to break white concrete (automation support)
    const isFakePlayerBreakingConcrete = event.block.id === "minecraft:white_concrete" && player.isFake();

    return isFakePlayerBreakingConcrete;
  },

  /**
   * Checks if a block placement should be allowed
   * @param {BlockEvent} event - The block event
   * @returns {boolean}
   */
  allowBlockPlace(event) {
    return event.block.id === "minecraft:air";
  },

  /**
   * Checks if a block interaction should be allowed
   * @param {BlockEvent} event - The block event
   * @returns {boolean}
   */
  allowBlockInteract(event) {
    return interactWhitelist.includes(event.block.id);
  },
};

// ---------------------------------------------------------------------------
// EVENT HANDLERS
// ---------------------------------------------------------------------------

// Main player tick handler


// Main player tick handler
PlayerEvents.tick((event) => {
  if (event.player == null || event.player.isFake()) return;
  // Only process every TICK_INTERVAL ticks
  if (event.getServer().getTickCount() % MazeConfig.TICK_INTERVAL != 0) return;

  // Skip creative/spectator players
  if (event.player.creative || event.player.spectator) return;

  const uuid = event.player.uuid.toString();
  const dimension = event.level.dimension.toString();
  const currentlyInMaze = isInMaze(event.getPlayer());
  const wasInMaze = PlayerState.isInMaze(uuid);
  // Handle state transitions
  if (currentlyInMaze && !wasInMaze) {
    PlayerState.onEnterMaze(event.player);
  } else if (!currentlyInMaze && wasInMaze) {
    PlayerState.onExitMaze(event.player);
  }

  // Process maze logic if inside
  if (currentlyInMaze) {
    handlePlayerInMaze(event, uuid, dimension);
  }
});

// /**
//  * Handles player tick while inside the maze
//  * @param {PlayerTickEvent} event - The tick event
//  * @param {string} uuid - Player UUID
//  * @param {string} dimension - Dimension ID
//  */
function handlePlayerInMaze(event, uuid, dimension) {
  const playerPos = event.player.blockPosition();
  const roomXY = Maze$$F_RoomXYFromXYZ(playerPos.x, 0, playerPos.z);
  if (roomXY.y < 0 || roomXY.y >= Maze$$Definition.length ||
      roomXY.x < 0 || roomXY.x >= Maze$$Definition[roomXY.y].length) return;
  let room = Maze$$Definition[roomXY.y][roomXY.x];
  let level = event.getLevel();

  // Ensure player is fully tracked — handles edge cases where a player
  // enters the maze without going through the normal entry flow
  if (Maze$$TrackedPlayers[uuid] == null) {
    Maze$$TrackedPlayers[uuid] = { current_room: roomXY };
    PlayerState.onEnterMaze(event.player);
  }
  if (Maze$$TriggeredRooms[uuid] == null) {
    Maze$$TriggeredRooms[uuid] = [];
  }

  // Process room-specific functions
  let previous_room = Maze$$TrackedPlayers[uuid]["current_room"]

  if ((previous_room.x != roomXY.x) || (previous_room.y != roomXY.y)) {
    if (Maze$$TriggeredRooms[uuid].length > 0) {

      let North = (room.links & Maze$$North) > 0;
      let East = (room.links & Maze$$East) > 0;
      let South = (room.links & Maze$$South) > 0;
      let West = (room.links & Maze$$West) > 0;

      let NorthDir = { x: roomXY.x, y: roomXY.y - 1 };
      let EastDir = { x: roomXY.x + 1, y: roomXY.y };
      let SouthDir = { x: roomXY.x, y: roomXY.y + 1 };
      let WestDir = { x: roomXY.x - 1, y: roomXY.y };

      let options = [];

      if (North && previous_room.x == NorthDir.x && previous_room.y == NorthDir.y) options.push(NorthDir);
      if (East && previous_room.x == EastDir.x && previous_room.y == EastDir.y) options.push(EastDir);
      if (South && previous_room.x == SouthDir.x && previous_room.y == SouthDir.y) options.push(SouthDir);
      if (West && previous_room.x == WestDir.x && previous_room.y == WestDir.y) options.push(WestDir);

      options.forEach((dir) => {
        let door = new BlockPos(-299, 0, -1168).offset(
          roomXY.x * 16 + 8 + 8 * (dir.x - roomXY.x),
          3,
          roomXY.y * 16 + 8 + 8 * (dir.y - roomXY.y)
        );

        let from;
        let to;

        switch (dir) {
          case NorthDir:
          case SouthDir:
            from = door.offset(-1, -1, 0);
            to = door.offset(1, 2, 0);
            break;
          case EastDir:
          case WestDir:
            from = door.offset(0, -1, -1);
            to = door.offset(0, 2, 1);
            break;
          default:
            throw new Error("No Random Direction Picked?");
        }
        let is_mounted = event.getPlayer().isPassenger() && event.getPlayer().getVehicle().getType() == "ftblh:little_helper"
        if (!is_mounted) {
          Maze$$F_FillWall(level, from, to, `minecraft:air`);
        }
      });
    }
    Maze$$TrackedPlayers[uuid]["current_room"] = roomXY;
  }
  
  if (!PlayerState.hasTriggeredRoom(uuid, roomXY)) {
    room.extra(event.player);
    PlayerState.markRoomTriggered(uuid, roomXY);
  }

  if (room.tags.includes("boss")) {
    BossEncounter.update(event, roomXY, dimension);
  }
}

// /**
//  * Processes room-specific functions based on room type
//  * @param {PlayerTickEvent} event - The tick event
//  * @param {Object} room - Room data
//  * @param {string} uuid - Player UUID
//  * @param {string} dimension - Dimension ID
//  */

// Block protection events
BlockEvents.broken(BlockProtection.createHandler(BlockProtection.allowBlockBreak));
BlockEvents.placed(BlockProtection.createHandler(BlockProtection.allowBlockPlace));
BlockEvents.leftClicked(BlockProtection.createHandler());
BlockEvents.rightClicked(BlockProtection.createHandler(BlockProtection.allowBlockInteract));

// Checking if player has completed the maze by interacting with the runic altar in the final room
BlockEvents.rightClicked("botania:runic_altar", (event) => {
  const player = event.getPlayer();
  if (player == null || !isInMaze(player)) return;

  if (player.stages.has("hel_maze_completed")) {
    event.cancel();
    player.tell(Text.translate("ftb.maze.completed_chat_repeat").green());
    return;
  }

  if (!event.getItem().isEmpty()) {
    event.cancel();
    player.tell(Text.translate("ftb.maze.empty_hand_required").red());
    return;
  }

  event.level.getPlayers().forEach(function (entity) {
    if (Maze$$F_IsEntityInMaze(entity) && !entity.stages.has("hel_maze_completed")) {
      entity.stages.add("hel_maze_completed");
      entity.tell(Text.translate("ftb.maze.completed_chat").gold());
    }
  });
});

// Item usage restrictions
ItemEvents.rightClicked((event) => {
  if (!isInMaze(event.getPlayer())) return;

  const restrictedPattern = /bucket|boat/;
  if (restrictedPattern.test(event.item.id)) {
    event.cancel();
  }
});


// Explosion protection
LevelEvents.afterExplosion((event) => {
  event.affectedBlocks
    .filter((block) => Maze$$F_IsInMaze(event.getLevel(), block.pos))
    .forEach((block) => event.removeAffectedBlock(block));
});

function Maze$$F_IsInHel(dimension) {
  let isInHel = FTBTeamBases$DimensionUtils.isPrivateTeamDimension(dimension) ||
    Maze$$ValidHelDimensions == dimension;
  
  return isInHel;
}

function Maze$$F_IsInMaze(level, position) {
  if (!Maze$$F_IsInHel(level.getDimension().toString())) return false;
  return level.getBiome(position).key().location() == "ftb:hel/maze";
}
/**
 * 
 * @param {Internal.Entity} entity 
 * @returns 
 */
function Maze$$F_IsEntityInMaze(entity) {
  const dimension = entity.getLevel().getDimension();
  let isInMaze = entity.getLevel().getBiome(entity.blockPosition()).key().location() == "ftb:hel/maze"
  let isInHel = Maze$$F_IsInHel(dimension)
  if (!isInHel) return false;
  return isInMaze;
}

/**
 * 
 * @param {Internal.ServerLevel} level 
 * @param {*} from 
 * @param {*} to 
 * @param {*} block 
 */
function Maze$$F_FillWall(level, from, to, block) {
  let fillCommand = "/ftb_utils fill ";

  fillCommand += `${from.x} `;
  fillCommand += `${from.y} `;
  fillCommand += `${from.z} `;
  fillCommand += `${to.x} `;
  fillCommand += `${to.y} `;
  fillCommand += `${to.z} `;
  fillCommand += `${block} `;
  fillCommand += level.getDimension();

  Utils.getServer().runCommandSilent(fillCommand);
}

function Maze$$F_SolidifyWalkwayRoom(level, name) {
  let target = null;
  for (let y = 0; y < Maze$$Definition.length; y++) {
    for (let x = 0; x < Maze$$Definition[y].length; x++) {
      if (Maze$$Definition[y][x].name == name) {
        target = { x: x, y: y };
      }
    }
  }
  if (target == null) return;

  let baseX = Maze$$OriginX + target.x * 16;
  let baseZ = Maze$$OriginZ + target.y * 16;

  for (let dx = 0; dx < 16; dx++) {
    for (let dz = 0; dz < 16; dz++) {
      for (let dy = MazeConfig.MIN_Y; dy <= MazeConfig.MAX_Y; dy++) {
        let pos = new BlockPos(baseX + dx, Maze$$OriginY + dy, baseZ + dz);
        let block = level.getBlock(pos);
        if (block.getId() != "ars_nouveau:falseweave") continue;
        let be = block.getEntityData();
        let mimic = be != null ? be.getCompound("mimic_state") : null;
        let mimicName = mimic != null ? String(mimic.getString("Name")) : "";
        if (mimicName == "malum:tainted_rock_column") continue;
        let blockStr = mimicName != ""
          ? "ars_nouveau:mirrorweave[level=0]{mimic_state:" + mimic.toString() + "}"
          : "ars_nouveau:mirrorweave[level=0]";
        Maze$$F_FillWall(level, pos, pos, blockStr);
      }
    }
  }
}

function Maze$$F_LocalRoomXYFromBlockPos(BlockPosition) {
  const bx = BlockPosition.getX();
  const bz = BlockPosition.getZ();

  const localX = (bx - Maze$$OriginX) % 16;
  const localZ = (bz - Maze$$OriginZ) % 16;

  return { x: localX, y: localZ };
}

function Maze$$F_RoomXYFromXYZ(x, y, z) {
  const bx = Math.floor(x);
  const bz = Math.floor(z);

  const roomX = Math.floor((bx - Maze$$OriginX) / 16);
  const roomZ = Math.floor((bz - Maze$$OriginZ) / 16);

  return { x: roomX, y: roomZ };
}

function Maze$$F_CenterBlockPosFromRoomXY(P_x, P_y, atY) {
  const height = atY ?? 2;

  let pos = new BlockPos(Maze$$OriginX, Maze$$OriginY, Maze$$OriginZ).offset(
    P_x * 16 + 8,
    height,
    P_y * 16 + 8
  );

  return pos;
}

function Maze$$F_IsDoorOpen(level, rx, ry, dx, dz) {
  let door = new BlockPos(Maze$$OriginX, Maze$$OriginY, Maze$$OriginZ).offset(
    rx * 16 + 8 + 8 * dx,
    3,
    ry * 16 + 8 + 8 * dz
  );
  let id = level.getBlock(door).getId();
  return id == "ars_nouveau:falseweave" || id == "ars_nouveau:mirrorweave" || id == "minecraft:air";
}

function Maze$$F_NextHintDirection(player) {
  let level = player.getLevel();
  let rows = Maze$$Definition.length;
  let cols = Maze$$Definition[0].length;
  let cur = Maze$$F_RoomXYFromXYZ(player.getX(), player.getY(), player.getZ());

  if (cur.x < 0 || cur.y < 0 || cur.x >= cols || cur.y >= rows) {
    return { status: "outside", direction: null };
  }

  let goal = Maze$$HilbertTable[Maze$$HilbertTable.length - 1];
  let goalKey = goal.x + "," + goal.y;
  let startKey = cur.x + "," + cur.y;
  if (startKey == goalKey) {
    return { status: "at_end", direction: null };
  }

  let dirs = [
    { name: "north", dx: 0, dz: -1 },
    { name: "east", dx: 1, dz: 0 },
    { name: "south", dx: 0, dz: 1 },
    { name: "west", dx: -1, dz: 0 },
  ];

  let visited = {};
  let parent = {};
  let queue = [{ x: cur.x, y: cur.y }];
  let found = false;
  visited[startKey] = true;

  while (queue.length > 0 && !found) {
    let node = queue.shift();
    let nodeKey = node.x + "," + node.y;
    for (let i = 0; i < dirs.length; i++) {
      let d = dirs[i];
      let nx = node.x + d.dx;
      let ny = node.y + d.dz;
      if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
      let nKey = nx + "," + ny;
      if (visited[nKey]) continue;
      if (!Maze$$F_IsDoorOpen(level, node.x, node.y, d.dx, d.dz)) continue;
      visited[nKey] = true;
      parent[nKey] = { fromKey: nodeKey, dir: d.name };
      if (nKey == goalKey) {
        found = true;
        break;
      }
      queue.push({ x: nx, y: ny });
    }
  }

  if (!found) {
    return { status: "no_path", direction: null };
  }

  let stepKey = goalKey;
  let firstDir = null;
  while (stepKey != startKey) {
    let step = parent[stepKey];
    firstDir = step.dir;
    stepKey = step.fromKey;
  }

  return { status: "ok", direction: firstDir };
}

function Maze$$F_TellHint(ctx) {
  let player = ctx.getSource().getPlayerOrException();
  if (!isInMaze(player)) {
    player.tell(Text.translate("ftb.maze.hint.not_in_maze"));
    return 0;
  }

  let result = Maze$$F_NextHintDirection(player);
  if (result.status == "at_end") {
    player.tell(Text.translate("ftb.maze.hint.at_end"));
    return 1;
  }
  if (result.status == "outside" || result.status == "no_path") {
    player.tell(Text.translate("ftb.maze.hint.no_path"));
    return 0;
  }

  player.tell(Text.translate("ftb.maze.hint." + result.direction));
  return 1;
}

function Maze$$F_EnsureGenerated(player) {
  let level = player.getLevel();
  let dimKey = level.getDimension().toString();
  let team = FTBTeamsKJS.getTeamForPlayer(player);
  let mazeData;

  if (team != null) {
    if (team.getExtraData()["ftbmaze"] == null) {
      team.getExtraData()["ftbmaze"] = {};
    }
    mazeData = team.getExtraData()["ftbmaze"];
    if (mazeData[dimKey] != null) return;
  } else if (Maze$$GeneratedDims[dimKey]) {
    return;
  }

  Maze$$F_SealMaze(level);
  Maze$$F_GenerateMaze(level);

  if (team != null) {
    mazeData[dimKey] = { generated: true };
    team.markDirty();
  } else {
    Maze$$GeneratedDims[dimKey] = true;
  }
  console.info("[maze] Generated maze on first entry for " + dimKey);
}

function Maze$$F_SealMaze(level) {
  Maze$$HilbertTable.forEach((room, idx) => {
    const cur_room = Maze$$Definition[room.y][room.x];

    let North = (cur_room.links & Maze$$North) > 0;
    let East = (cur_room.links & Maze$$East) > 0;
    let South = (cur_room.links & Maze$$South) > 0;
    let West = (cur_room.links & Maze$$West) > 0;

    const NorthDir = { x: room.x, y: room.y - 1 };
    const EastDir = { x: room.x + 1, y: room.y };
    const SouthDir = { x: room.x, y: room.y + 1 };
    const WestDir = { x: room.x - 1, y: room.y };

    let options = [];

    if (North) options.push(NorthDir);
    if (East) options.push(EastDir);
    if (South) options.push(SouthDir);
    if (West) options.push(WestDir);

    options.forEach((dir) => {
      let door = new BlockPos(-299, 0, -1168).offset(
        room.x * 16 + 8 + 8 * (dir.x - room.x),
        3,
        room.y * 16 + 8 + 8 * (dir.y - room.y)
      );

      let from;
      let to;

      switch (dir) {
        case NorthDir:
        case SouthDir:
          from = door.offset(-1, -1, 0);
          to = door.offset(1, 2, 0);
          break;
        case EastDir:
        case WestDir:
          from = door.offset(0, -1, -1);
          to = door.offset(0, 2, 1);
          break;
        default:
          throw new Error("No Random Direction Picked?");
      }

      Maze$$F_FillWall(level, from, to, `malum:tainted_rock_column`);
    });
  });
}

function Maze$$F_GenerateMaze(level) {
  Maze$$HilbertTable.forEach((room, idx) => {
    const cur_room = Maze$$Definition[room.y][room.x];

    let North = (cur_room.links & Maze$$North) > 0;
    let East = (cur_room.links & Maze$$East) > 0;
    let South = (cur_room.links & Maze$$South) > 0;
    let West = (cur_room.links & Maze$$West) > 0;

    const NorthDir = { x: room.x, y: room.y - 1 };
    const EastDir = { x: room.x + 1, y: room.y };
    const SouthDir = { x: room.x, y: room.y + 1 };
    const WestDir = { x: room.x - 1, y: room.y };

    let options = [];

    if (North && Maze$$HilbertTable.findIndex(({ x: x, y: y }) => NorthDir.x == x && NorthDir.y == y) > idx) {
      options.push(NorthDir);
    }

    if (East && Maze$$HilbertTable.findIndex(({ x: x, y: y }) => EastDir.x == x && EastDir.y == y) > idx) {
      options.push(EastDir);
    }

    if (South && Maze$$HilbertTable.findIndex(({ x: x, y: y }) => SouthDir.x == x && SouthDir.y == y) > idx) {
      options.push(SouthDir);
    }

    if (West && Maze$$HilbertTable.findIndex(({ x: x, y: y }) => WestDir.x == x && WestDir.y == y) > idx) {
      options.push(WestDir);
    }
      
    let randomDir;

    if (options.length == 0) {
      return;
    } else {
      randomDir = options[Math.floor(Math.random() * options.length)];
    }

    let door = Maze$$F_CenterBlockPosFromRoomXY(room.x, room.y, 3).offset(
      8 * (randomDir.x - room.x),
      0,
      8 * (randomDir.y - room.y)
    );

    let from;
    let to;

    switch (randomDir) {
      case NorthDir:
      case SouthDir:
        from = door.offset(-1, -1, 0);
        to = door.offset(1, 1, 0);
        break;
      case EastDir:
      case WestDir:
        from = door.offset(0, -1, -1);
        to = door.offset(0, 1, 1);
        break;
      default:
        throw new Error("No Random Direction Picked?");
    }

    if (cur_room.tags.findIndex((val) => val == "boss") > -1) {
      Maze$$F_FillWall(
        level,
        from,
        to,
        `ars_nouveau:mirrorweave[level=0]{mimic_state:{Name:"malum:tainted_rock_column",Properties:{axis:"y"}}}`
      );
    } else {
      Maze$$F_FillWall(
        level,
        from,
        to,
        `ars_nouveau:falseweave[level=0]{mimic_state:{Name:"malum:tainted_rock_column",Properties:{axis:"y"}}}`
      );
    }
  });

  Maze$$F_SolidifyWalkwayRoom(level, "Bullshit Walkway");
}

function Maze$$F_Clear(level) {
  Maze$$TrackedBosses[level.getDimension()] = {};

  level.getPlayers().forEach((player) => {
    Maze$$TriggeredRooms[player.getStringUuid()] = [];
  });

  level
    .getEntities()
    .filter((entity) => {
      return (
        (Maze$$F_IsEntityInMaze(entity) && entity.getTags().contains("maze_boss")) ||
        entity.getCustomName() == `{"text":"Slime Man"}`
      );
    })
    .forEach((entity) => {
      entity.discard();
    });
}

ServerEvents.commandRegistry((event) => {
  let Commands = event.getCommands();
  let Arguments = event.getArguments();
  let Suggestions = event.getBuiltinSuggestions();

  function GetRoom(ctx) {
    let player = ctx.getSource().getPlayerOrException();

    if (!Maze$$F_IsEntityInMaze(player)) {
      ctx.getSource().sendFailure(Text.translate("ftb.maze.room.undefined"));
      return 1;
    }

    let localXY = Maze$$F_LocalRoomXYFromBlockPos(player.blockPosition());

    let roomXY = Maze$$F_RoomXYFromXYZ(player.blockPosition().x, player.blockPosition().y, player.blockPosition().z);

    if (localXY.x == 0 || localXY.y == 0) {
      ctx.getSource().sendSystemMessage(`${roomXY.x}, ${roomXY.y}`);
      ctx.getSource().sendSystemMessage(`${localXY.x}, ${localXY.y}`);
      ctx.getSource().sendSystemMessage(Text.translate("ftb.maze.in_wall"));
    } else {
      ctx.getSource().sendSystemMessage(`${roomXY.x}, ${roomXY.y}`);
      ctx.getSource().sendSystemMessage(`${localXY.x}, ${localXY.y}`);
      ctx.getSource().sendSystemMessage(Maze$$Definition[roomXY.y][roomXY.x].name);
    }
    return 1;
  }

  let root = Commands.literal("ftb_maze");

  root = root
    .requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
    .then(
      Commands.literal("reset")
        .executes((ctx) => {
          Maze$$F_SealMaze(ctx.getSource().getLevel());
          Maze$$F_Clear(ctx.getSource().getLevel());
          Maze$$F_GenerateMaze(ctx.getSource().getLevel());
          return 1;
        })
        .then(
          Commands.argument("dimension", Arguments.DIMENSION.create(event)).executes((ctx) => {
            let level = Arguments.DIMENSION.getResult(ctx, "dimension");
            Maze$$F_SealMaze(level);
            Maze$$F_Clear(level);
            Maze$$F_GenerateMaze(level);
            return 1;
          })
        )
    )
    .then(Commands.literal("getroom").executes((ctx) => GetRoom(ctx)))
    .then(
      Commands.literal("seal").executes((ctx) => {
        Maze$$F_SealMaze(ctx.getSource().getLevel());
        return 1;
      })
    )
    .then(
      Commands.literal("generate").executes((ctx) => {
        Maze$$F_GenerateMaze(ctx.getSource().getLevel());
        return 1;
      })
    )
    .then(
      Commands.literal("clear").executes((ctx) => {
        Maze$$F_Clear(ctx.getSource().getLevel());
        return 1;
      })
    )
    .then(
      Commands.literal("unstick").executes((ctx) => {
        let player = ctx.getSource().getPlayerOrException();
        if (!Maze$$F_IsEntityInMaze(player)) {
          ctx.getSource().sendFailure(Text.translate("ftb.maze.room.undefined"));
          return 1;
        }
        let pos = player.blockPosition();
        let roomXY = Maze$$F_RoomXYFromXYZ(pos.x, pos.y, pos.z);
        BossEncounter.complete(player, player.level.dimension.toString(), roomXY);
        ctx.getSource().sendSystemMessage(`Force-opened maze room ${roomXY.x}, ${roomXY.y}`);
        return 1;
      })
    );
  event.register(root);

  let mazeAlias = Commands.literal("maze")
    .requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS))
    .then(
      Commands.literal("unstick").executes((ctx) => {
        let player = ctx.getSource().getPlayerOrException();
        if (!Maze$$F_IsEntityInMaze(player)) {
          ctx.getSource().sendFailure(Text.translate("ftb.maze.room.undefined"));
          return 1;
        }
        let pos = player.blockPosition();
        let roomXY = Maze$$F_RoomXYFromXYZ(pos.x, pos.y, pos.z);
        BossEncounter.complete(player, player.level.dimension.toString(), roomXY);
        ctx.getSource().sendSystemMessage(`Force-opened maze room ${roomXY.x}, ${roomXY.y}`);
        return 1;
      })
    );
  event.register(mazeAlias);
});

let Maze$$ResetQueue = [];
let Maze$$ResetCooldown = 0;

ServerEvents.tick((event) => {
  let tickCount = event.getServer().getTickCount();

  // Every 2 hours, build the queue of bases that need resetting
  if (tickCount % MazeConfig.MAZE_RESET_INTERVAL == 300) {
    Maze$$ResetQueue = [];
    let team_base = FTBTeamBasesKJS.getBaseInstanceManager(event.getServer()).allLiveBases();
    team_base.forEach((team_id, base) => {
      let is_in_maze = FTBTeamsKJS.getTeamByUuid(team_id)
        .getMembers()
        .find((player_id) => Maze$$TrackedPlayers[player_id] != null && Maze$$TrackedPlayers[player_id]["current_room"] != null);
      if (is_in_maze == null) {
        Maze$$ResetQueue.push(base.dimension().location().toString());
      }
    });
    Maze$$ResetCooldown = 0;
  }

  // Process one base per stagger interval
  if (Maze$$ResetQueue.length > 0) {
    if (Maze$$ResetCooldown <= 0) {
      let dim = Maze$$ResetQueue.shift();
      event.getServer().runCommandSilent("/ftb_maze reset " + dim);
      Maze$$ResetCooldown = MazeConfig.MAZE_RESET_STAGGER;
    } else {
      Maze$$ResetCooldown--;
    }
  }
})

NativeEvents.onEvent("net.minecraftforge.event.entity.EntityTeleportEvent$EnderEntity", (event) => {
  let entity = event.getEntity();
  if (entity.getEntityType() != "minecraft:shulker") return;
  if (Maze$$F_IsEntityInMaze(entity)) {
    event.setCanceled(true);
  }
})
// priority: 1000

const $Arena$ConsoleName = "FTB Arena";
const $Arena$Console = Java.createConsole($Arena$ConsoleName);
$Arena$Console.setDebugEnabled(true);

const $Arena$RealmConfig = {
  DEFAULT: {
    min: 10000,
    max: 25000,
    atY: 200,
  },
  "ftb:niflheim": {
    atY: 64,
  },
  "ftb:muspelheim": {
    atY: 160,
  },
};

const $Arena$RealmArenas = {
  "minecraft:overworld": {
    schematic: "ftb:arena/hati_skol_v3_p",
    size: {x: 332, y: 240, z: 314},
    offset: { x: -189, y: -93, z: -65 },
    altar_offset: { x: 0, y: 0, z: 75 },
  },
  "ftb:niflheim": {
    schematic: "ftb:arena/jormungandr_v5",
    size: {x: 221, y: 93, z: 195},
    offset: { x: -99, y: -42, z: -96 },
    altar_offset: { x: 0, y: 1, z: 0 },
  },
  "ftb:jotunheim": {
    schematic: "ftb:arena/ymir_v3_p",
    size: {x: 255, y: 218, z: 306},
    offset: { x: -81, y: -66, z: -136 },
    altar_offset: { x: 49, y: 0, z: 0 },
  },
  "ftb:muspelheim": {
    schematic: "ftb:arena/surtr_v3_p",
    size: {x: 302, y: 205, z: 317},
    offset: { x: -274, y: -60, z: -147 },
    altar_offset: { x: -116, y: 0, z: 0 },
  },
  "ftb:hel": {
    schematic: "ftb:arena/hel_v2_p",
    size: {x: 262, y: 270, z: 259},
    offset: { x: -80, y: -64, z: -128 },
    altar_offset: { x: 54, y: -3, z: 0 },
  },
};

const $Arena$Config = {
  /** @type {"ticks" | "per_tick"} */
  speed_type: "per_tick",
  speed: 200,
};

const $Arena$RegenThreshold = MINUTE * 30;
const $Arena$ActiveTimeout = 7200000; // 2 hours
const $Arena$RegenGracePeriod = MINUTE * 3;
const $Arena$PasteDurationSafetyFactor = 1.5;
const $Arena$PasteDurationMaxMs = MINUTE * 30;

// Every boss arena pastes the same altar block at altar_offset. Any other
// block (including naturally-generated terrain after a dim wipe) means the
// arena is gone and must be re-pasted.
const $Arena$AltarBlock = "summoningrituals:indestructible_altar";

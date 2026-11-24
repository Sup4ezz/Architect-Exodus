// priority: 99999
const DEBUG = true

/** @type {Internal.Map<ResourceLocation_, ResourceLocation_>} */
const $$BossRealmMap = Utils.newMap();
// Keep in sync with server_scripts/_init/server_globals/server_constants.js.
// resolved via prefix match in summoning_rituals_handler.js, so don't add
// per-variant entries here.
$$BossRealmMap.ofEntries(
  $$BossRealmMap.entry("ftb:hel"              , "ftb:hel"             ),
  $$BossRealmMap.entry("ftb:ymir"             , "ftb:jotunheim"       ),
  $$BossRealmMap.entry("ftb:jormungandr"      , "ftb:niflheim"        ),
  $$BossRealmMap.entry("ftb:surtr"            , "ftb:muspelheim"      ),
  $$BossRealmMap.entry("ftb:twins"            , "minecraft:overworld" ),
  $$BossRealmMap.entry("ftb:hati"             , "minecraft:overworld" ),
  $$BossRealmMap.entry("ftb:skoll"            , "minecraft:overworld" ),
  $$BossRealmMap.entry("ftb:nidhoggr"         , "ftb:asgard"          ),
);

const $Arena$RealmArenas = {
  "minecraft:overworld": {
    schematic: "ftb:arena/hati_skol_v3_p",
    size: {x: 332, y: 240, z: 314},
    offset: { x: -189, y: -93, z: -65 },
    altar_offset: { x: 0, y: 0, z: 75 },
    // ~-189 107 ~-62
  },

  /**
   * TODO: Change Offset to be center of arena
   * update arena
   */
  "ftb:niflheim": {
    schematic: "ftb:arena/jormungandr_v5",
    size: {x: 221, y: 93, z: 195},
    offset: { x: -99, y: -42, z: -96 },
    altar_offset: { x: 0, y: 1, z: 0 },
    // ~-238 106 ~-116
  },
  "ftb:jotunheim": {
    schematic: "ftb:arena/ymir_v3_p",
    size: {x: 255, y: 218, z:306},
    offset: { x: -81, y: -66, z: -136 },
    altar_offset: { x: 49, y: 0, z: 0 },
    // ~-28 134 ~-139
  },
  "ftb:muspelheim": {
    schematic: "ftb:arena/surtr_v3_p",
    size: {x: 302, y: 205, z:317},
    offset: { x: -274, y: -60, z: -147 },
    altar_offset: { x: -116, y: 0, z: 0 },
    // ~-274 140 ~-147
  },

  // /fillbiome -465 136 431 -736 352 176 ftb:arena/hel
  // -161 17 -1025 -304 0 -1184

  "ftb:hel": {
    schematic: "ftb:arena/hel_v2_p",
    size: {x: 262, y: 270, z: 259},
    offset: { x: -80, y: -64, z: -128 },
    altar_offset: { x: 54, y: -3, z: 0 },
  },
};

/**
 * A List of all the Bifrost Dimensions
 */
const $$NineRealmLevels = [
  "ftb:hel", // Private Team Dimension
  "ftb:jotunheim",
  "ftb:niflheim",
  "ftb:muspelheim",
  "minecraft:overworld", // Midgard
  "mythicbotany:alfheim", // Alfheim added by Mythic Botany
  "ftb:asgard",
  "ftb:ginnungagap", // The End? I&F Dragons?
  "minecraft:the_end",
]

const $Maze$NoFlightIdentifier = ResourceLocation.fromNamespaceAndPath("ftb", "maze_no_flight")
const $Maze$NoFlightUUID = new Java$UUID($Maze$NoFlightIdentifier.hashCode(), $Maze$NoFlightIdentifier.hashCode())
const $Maze$NoFlightModifier = new Minecraft$AttributeModifier(
  $Maze$NoFlightUUID,
  $Maze$NoFlightIdentifier.toString(),
  -1,
  "addition"
)



// const $$$NIL_UUID = FTBTeams$FTBTUtils.NO_PROFILE.getId()
// const $$$LobbyTeamName = "FTB"
// const $$$LobbyServerID = UUID.fromString("ddc10a3e-b566-4e84-af66-8c315272ab02")
// const $$$LobbyClaimColor = FTBLibrary$Color4I.rgb(0xFF40FF)
// const $$$LobbyCenterPos = new Vec3d(0, 0, 0)
// const $$$LobbyRadius = 5
// const $$$BifrostCenterPos = new Vec3d(0, 0, 0)
// const $$$BifrostRadius = 5

// const $$$AutoClaimRegions = {
// 	"ftbteambases:lobby": {
// 		SDF: function (X,Z) {
// 			let temp = new Vec3d(X, 0, Z).subtract($$$LobbyCenterPos).horizontalDistance()
// 			return (temp - $$$LobbyRadius) <= 0
// 		},
// 	},
// 	"ftb:bifrost": {
// 		Center: new Vec3d(0, 0, 0),
// 		Radius: 5,
// 		SDF: function (X,Z) {
// 			return true
// 		},
// 	},
// }


// const $$$LobbyShape = "square"

// BlockPos is a default binding in KJS
// const BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

/**
 * Available Server Bindings
 * As of 2026-01-08
 */

// AABB
// ACropRestriction
// ADimensionRestriction
// AEffectRestriction
// AEnchantRestriction
// AItemRestriction
// ALootRestriction
// AMobRestriction
// AModels
// AOreRestriction
// APetRestriction
// ARecipeRestriction
// ARegionRestriction
// AScreenRestriction
// AStages
// AStagesCurios
// AStructureRestriction
// ATime
// AlmostUnified
// Attributes
// Block
// BlockPos
// BlockProperties
// BlockStatePredicate
// Blocks
// Chisel
// Client
// Color
// Component
// CorporeaHelper
// DamageSource
// DimensionAttributes
// Direction
// Duration
// EnderIOBonusType
// EntityJSUtils
// FTBLittleHelper
// FTBQuests
// Facing
// Feature
// Fluid
// FluidAmounts
// ForgeItemFilter
// HOUR
// Ingredient
// IngredientHelper
// InputItem
// InteractionResult
// Interval
// Item
// ItemAttributes
// ItemFilter
// Items
// Java
// JavaMath
// JsonIO
// KMath
// Ku
// LootContextParams
// LootEntry
// LootType
// LycheeLootContextParams
// LycheeReference
// MINUTE
// ManaHandler
// Matrix3f
// Matrix4f
// MobAttributes
// MobCategory
// NBT
// NBTIO
// Notification
// OutputItem
// Painter
// PetAttributes
// Platform
// Quaternionf
// RegionAttributes
// ResourceLocation
// RotationAxis
// SECOND
// ScreenAttributes
// SoundType
// Stats
// StructureAttributes
// Structures
// Text
// UUID
// Utils
// Vec3d
// Vec3f
// Vec3i
// Vec4f
// clearInterval
// clearTimeout
// console
// global
// onEvent
// setInterval
// setTimeout
// settings

// -----------------------------------------------------------------------------
// SDM Mob Staging Configuration
// Location:
//   server_scripts/_init/globals/consts.js
//
// Each staged mob is defined using a single schema:
//
// {
//   mob: "namespace:mob_id",
//
//   // Optional biome restrictions. Supports:
//   //   - Biomes: "minecraft:plains"
//   //   - Tags:   "#minecraft:is_overworld"
//   biomes: [...],
//
//   // Optional replacement mob ID.
//   // If omitted, the mob is simply blocked until the stage is unlocked.
//   replace: "namespace:mob_id"
// }
//
// -----------------------------------------------------------------------------
/*
const mob_stages = [
  {
    stage: "stage_one",
    mobs: [
      {
        mob: "minecraft:phantom",
        biomes: [
          "#minecraft:is_overworld"
        ],
    },
    ],
  },
  {
    stage: "stage_two",
    mobs: [
      {
        mob: "minecraft:ender_dragon"
      }
    ]
  }
];
*/
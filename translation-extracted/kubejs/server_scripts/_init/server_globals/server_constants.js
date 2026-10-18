// priority: 99999

// Boss : Dimension
// Keep in sync with startup_scripts/_init/startup_globals/startup_constants.js.
// resolved via prefix match in summoning_rituals_handler.js, so don't add
// per-variant entries here.

/** @type {Internal.Map<ResourceLocation_, ResourceLocation_>} */
const $$BossRealmMap = Utils.newMap();
$$BossRealmMap.put("ftb:hel",              "ftb:hel");
$$BossRealmMap.put("ftb:ymir",             "ftb:jotunheim");
$$BossRealmMap.put("ftb:jormungandr",      "ftb:niflheim");
$$BossRealmMap.put("ftb:surtr",            "ftb:muspelheim");
$$BossRealmMap.put("ftb:twins",            "minecraft:overworld");
$$BossRealmMap.put("ftb:hati",             "minecraft:overworld");
$$BossRealmMap.put("ftb:skoll",            "minecraft:overworld");
$$BossRealmMap.put("ftb:nidhoggr",         "ftb:asgard");


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

// Villager Override Configs for Trading Hall in BiFrost Dim
const $$TRADING_HALL_CONFIG = [
  {
        profession: 'minecraft:armorer',
        defaultBlock: 'minecraft:blast_furnace',
        jobBlock: 'ftb:armorer_station',
        spawnPos: {x:-9, y:43, z:-19},
        blockPos:{x:-9, y:43, z:-18}
    }, 
    {
        profession: 'minecraft:butcher',
        defaultBlock: 'minecraft:smoker',
        jobBlock: 'ftb:butcher_station',
        spawnPos: {x:7, y:43, z:-19},
        blockPos:{x:7, y:43, z:-18}
    }, 
     {
        profession: 'minecraft:cartographer',
        defaultBlock: 'minecraft:cartography_table',
        jobBlock: 'ftb:cartographer_station',
        spawnPos: {x:14, y:43, z:-17},
        blockPos:{x:14, y:43, z:-16}
    }, 
     {
        profession: 'minecraft:cleric',
        defaultBlock: 'minecraft:brewing_stand',
        jobBlock: 'ftb:cleric_station',
        spawnPos: {x:18, y:43, z:-10},
        blockPos:{x:17, y:43, z:-10}
    }, 
     {
        profession: 'minecraft:farmer',
        defaultBlock: 'minecraft:composter',
        jobBlock: 'ftb:farmer_station',
        spawnPos: {x:19, y:43, z:-5},
        blockPos:{x:18, y:43, z:-5}
    }, 
     {
        profession: 'minecraft:fisherman',
        defaultBlock: 'minecraft:barrel',
        jobBlock: 'ftb:fisherman_station',
        spawnPos: {x:19, y:43, z:6},
        blockPos:{x:18, y:43, z:6}
    }, 
     {
        profession: 'minecraft:fletcher',
        defaultBlock: 'minecraft:fletching_table',
        jobBlock: 'ftb:fletcher_station',
        spawnPos: {x:17, y:43, z:13},
        blockPos:{x:16, y:43, z:13}
    }, 
     {
        profession: 'minecraft:leatherworker',
        defaultBlock: 'minecraft:cauldron',
        jobBlock: 'ftb:leatherworker_station',
        spawnPos: {x:9, y:43, z:18},
        blockPos:{x:9, y:43, z:17}
    }, 
     {
        profession: 'minecraft:librarian',
        defaultBlock: 'minecraft:lectern',
        jobBlock: 'ftb:librarian_station',
        spawnPos: {x:4, y:43, z:18},
        blockPos:{x:4, y:43, z:17}
    }, 
     {
        profession: 'minecraft:mason',
        defaultBlock: 'minecraft:stonecutter',
        jobBlock: 'ftb:mason_station',
        spawnPos: {x:-6, y:43, z:19},
        blockPos:{x:-6, y:43, z:18}
    }, 
     {
        profession: 'minecraft:shepherd',
        defaultBlock: 'minecraft:loom',
        jobBlock: 'ftb:shepherd_station',
        spawnPos: {x:-14, y:43, z:17},
        blockPos:{x:-14, y:43, z:16}
    }, 
     {
        profession: 'minecraft:toolsmith',
        defaultBlock: 'minecraft:smithing_table',
        jobBlock: 'ftb:toolsmith_station',
        spawnPos: {x:-16, y:43, z:12},
        blockPos:{x:-15, y:43, z:12}
    }, 
     {
        profession: 'minecraft:weaponsmith',
        defaultBlock: 'minecraft:grindstone',
        jobBlock: 'ftb:weaponsmith_station',
        spawnPos: {x:-19, y:43, z:8},
        blockPos:{x:-18, y:43, z:8}
    }, 
     {
        profession: 'ae2:fluix_researcher',
        defaultBlock: 'ae2:charger',
        jobBlock: 'ftb:fluix_researcher_station',
        spawnPos: {x:-18, y:43, z:4},
        blockPos:{x:-17, y:43, z:4}
    }, 
     {
        profession: 'iceandfire:scribe',
        defaultBlock: 'iceandfire:lectern',
        jobBlock: 'ftb:scribe_station',
        spawnPos: {x:-19, y:43, z:-6},
        blockPos:{x:-18, y:43, z:-6}
    }, 
     {
        profession: 'ars_nouveau:shady_wizard',
        defaultBlock: 'ars_nouveau:arcane_core',
        jobBlock: 'ftb:shady_wizard_station',
        spawnPos: {x:-17, y:43, z:-14},
        blockPos:{x:-16, y:43, z:-14}
    } 
]

const $Maze$NoFlightIdentifier = ResourceLocation.fromNamespaceAndPath("ftb", "maze_no_flight")
const $Maze$NoFlightUUID = new Java$UUID($Maze$NoFlightIdentifier.hashCode(), $Maze$NoFlightIdentifier.hashCode())
const $Maze$NoFlightModifier = new Minecraft$AttributeModifier(
  $Maze$NoFlightUUID,
  $Maze$NoFlightIdentifier.toString(),
  -1,
  "addition"
)

const $Flight$DimensionIdentifier = ResourceLocation.fromNamespaceAndPath("ftb", "dimension_flight");
const $Flight$DimensionUUID = new Java$UUID($Flight$DimensionIdentifier.hashCode(), $Flight$DimensionIdentifier.hashCode());
const $Flight$DimensionModifier = new Minecraft$AttributeModifier(
  $Flight$DimensionUUID, 
  $Flight$DimensionIdentifier.toString(), 
  1, 
  "addition"
);
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
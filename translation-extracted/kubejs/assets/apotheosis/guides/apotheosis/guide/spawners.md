---
navigation:
  title: Spawners
  icon: minecraft:spawner
  position: 3
item_ids:
  - minecraft:spawner
---
# <Color id="dark_purple">Spawners</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Spawners</Color>
  <ItemImage id="minecraft:spawner" scale="2" />

  Apotheosis makes Mob Spawners fully configurable and upgradeable. Pick them up with Silk Touch, modify their stats with items, and build efficient mob farms.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mob Spawners</Color>
</Column>

Mob Spawners can now be picked up using a <Color id="aqua">Silk Touch</Color> pickaxe. Mining a spawner with Silk Touch costs extra durability but lets you relocate it anywhere you like.

Once placed, spawners can be configured and upgraded by applying modifier items directly to them.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spawner Stats</Color>
</Column>

Every spawner has configurable stats that control its behavior:

* <Color id="aqua">Min Spawn Delay</Color> — The minimum time (in ticks) between spawn attempts.
* <Color id="aqua">Max Spawn Delay</Color> — The maximum time (in ticks) between spawn attempts.
* <Color id="aqua">Spawn Count</Color> — How many mobs are spawned per activation.
* <Color id="aqua">Max Nearby Entities</Color> — The spawner stops working if this many of its mob type are already nearby.
* <Color id="aqua">Activation Range</Color> — How close a player must be for the spawner to activate.
* <Color id="aqua">Spawn Range</Color> — The horizontal radius in which mobs can appear.

The following toggles can also be applied:

* <Color id="aqua">Ignores Players</Color> — Spawner runs even without a player nearby.
* <Color id="aqua">Ignores Conditions</Color> — Ignores vanilla spawn condition checks (light level, block type, etc.).
* <Color id="aqua">Redstone Control</Color> — Spawner only runs when receiving a redstone signal.
* <Color id="aqua">Ignores Light</Color> — Ignores light level requirements for spawning.
* <Color id="aqua">No AI</Color> — Spawned mobs have no AI. Highly recommended for mob farms as it significantly reduces server load.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spawner Modifiers</Color>
</Column>

Spawner stats are changed by right-clicking the spawner while holding a modifier item. Each modifier adjusts one or more stats and has a cap on how many times it can be applied.

All spawner modifiers and their effects are visible in <Color id="aqua">JEI</Color> — search for "Spawner Modifier" to see the full list.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Capturing Enchantment</Color>
</Column>

<Color id="aqua">Capturing</Color> is a sword enchantment that gives mobs a chance to drop their spawn egg on death. The chance is <Color id="red">0.4% per enchantment level</Color>.

Use the dropped spawn egg on a spawner by right-clicking to change the spawner's entity type. This is the primary method for creating spawners of specific mob types.

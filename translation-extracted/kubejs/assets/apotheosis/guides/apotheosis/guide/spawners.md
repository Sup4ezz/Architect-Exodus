---
navigation:
  title: Спавнеры
  icon: minecraft:spawner
  position: 3
item_ids:
  - minecraft:spawner
---
# <Color id="dark_purple">Спавнеры</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Спавнеры</Color>
  <ItemImage id="minecraft:spawner" scale="2" />

  Apotheosis позволяет полностью настраивать и улучшать Mob Spawners. Забирайте их инструментом с Silk Touch, меняйте характеристики с помощью предметов и создавайте эффективные фермы мобов.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mob Spawners</Color>
</Column>

Теперь Mob Spawners можно добывать киркой с <Color id="aqua">Silk Touch</Color>. Это расходует дополнительную прочность инструмента, но позволяет перенести спавнер в любое место.

После установки спавнер можно настраивать и улучшать, применяя к нему предметы-модификаторы.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Характеристики спавнера</Color>
</Column>

У каждого спавнера есть настраиваемые характеристики, определяющие его работу:

* <Color id="aqua">Min Spawn Delay</Color> — минимальное время (в тиках) между попытками появления мобов.
* <Color id="aqua">Max Spawn Delay</Color> — максимальное время (в тиках) между попытками появления мобов.
* <Color id="aqua">Spawn Count</Color> — количество мобов, появляющихся за одну активацию.
* <Color id="aqua">Max Nearby Entities</Color> — спавнер перестаёт работать, если поблизости уже находится указанное количество мобов этого типа.
* <Color id="aqua">Activation Range</Color> — расстояние, на котором игрок должен находиться, чтобы активировать спавнер.
* <Color id="aqua">Spawn Range</Color> — горизонтальный радиус, в котором могут появляться мобы.

Также можно включать и отключать следующие параметры:

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

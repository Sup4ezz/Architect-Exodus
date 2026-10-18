---
navigation:
  title: Main Machines
  icon: enderio:alloy_smelter
  parent: index.md
  position: 2
item_ids:
  - enderio:alloy_smelter
  - enderio:sag_mill
  - enderio:slice_and_splice
  - enderio:soul_binder
  - enderio:powered_spawner
  - enderio:ensouled_chassis
  - enderio:dark_steel_grinding_ball
  - enderio:energetic_alloy_grinding_ball
  - enderio:vibrant_alloy_grinding_ball
  - enderio:conductive_alloy_grinding_ball
  - enderio:pulsating_alloy_grinding_ball
  - enderio:redstone_alloy_grinding_ball
  - enderio:copper_alloy_grinding_ball
  - enderio:end_steel_grinding_ball
  - enderio:soularium_grinding_ball
---
# <Color id="dark_aqua">Main Machines</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_aqua">Main Machines</Color>
  <ItemImage id="enderio:alloy_smelter" scale="2" />
  Ender IO machines form the backbone of your tech infrastructure. Most require <ItemLink id="enderio:dark_steel_ingot" /> and power from a generator to function.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="gold">All machines accept Capacitor upgrades</Color> to increase speed, energy storage, and efficiency. See [Power](power.md) for capacitor details.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Processing Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:alloy_smelter" />
  ### <Color id="aqua">Alloy Smelter</Color>
</Row>

The heart of Ender IO. Combines up to three ingredients into alloys like <ItemLink id="enderio:dark_steel_ingot" />, <ItemLink id="enderio:energetic_alloy_ingot" />, and <ItemLink id="enderio:vibrant_alloy_ingot" />. Also functions as a standard furnace for single-item smelting. Insert a <ItemLink id="enderio:basic_capacitor" /> or better to boost speed and energy capacity.

The Alloy Smelter's interface allows side input/output configuration, redstone configuration, and swapping between three modes:

- <Color id="yellow">Alloy only mode</Color>: Only allows the Alloy Smelter to create alloys.
- <Color id="yellow">Furnace only mode</Color>: Treats the Alloy Smelter as a furnace.
- <Color id="yellow">Alloying and Smelting</Color>: Does both, which can be problematic when automating as some items will be smelted before turning into alloys.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="enderio:sag_mill" />
  ### <Color id="aqua">SAG Mill</Color>
</Row>

Grinds ores into dusts for double output, and breaks down items into component materials. Insert Grinding Balls to increase bonus output chance and energy efficiency — you can use Flint as an early option.

<ItemImage id="minecraft:air" scale="0.25"/>

| Grinding Ball | Main Bonus |
|---|---|
| <ItemImage id="enderio:dark_steel_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:dark_steel_grinding_ball" /></Color> | Balanced efficiency and output |
| <ItemImage id="enderio:energetic_alloy_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:energetic_alloy_grinding_ball" /></Color> | Higher bonus output chance |
| <ItemImage id="enderio:vibrant_alloy_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:vibrant_alloy_grinding_ball" /></Color> | Best bonus output chance |
| <ItemImage id="enderio:conductive_alloy_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:conductive_alloy_grinding_ball" /></Color> | Energy efficiency focused |
| <ItemImage id="enderio:pulsating_alloy_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:pulsating_alloy_grinding_ball" /></Color> | Energy efficiency focused |
| <ItemImage id="enderio:redstone_alloy_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:redstone_alloy_grinding_ball" /></Color> | Speed focused |
| <ItemImage id="enderio:copper_alloy_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:copper_alloy_grinding_ball" /></Color> | Early-game option |
| <ItemImage id="enderio:end_steel_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:end_steel_grinding_ball" /></Color> | Best overall performance |
| <ItemImage id="enderio:soularium_grinding_ball" scale="0.5" /> <Color id="aqua"><ItemLink id="enderio:soularium_grinding_ball" /></Color> | Soul-line option — high bonus output chance (2.15x) |

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Soul Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Soul machines work with mob souls captured in <ItemLink id="enderio:empty_soul_vial" />. This is the late-game line of Ender IO, requiring <ItemLink id="enderio:soularium_ingot" /> to craft.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:slice_and_splice" />
  ### <Color id="aqua">Slice'N'Splice</Color>
</Row>

A grim machine that combines mob heads and other materials to create advanced components. Used to craft the <ItemLink id="enderio:ensouled_chassis" /> needed for the Powered Spawner and other soul machinery.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:soul_binder" />
  ### <Color id="aqua">Soul Binder</Color>
</Row>

Binds captured mob souls from <ItemLink id="enderio:filled_soul_vial" /> into items, creating soul-infused components for advanced crafting. Essential for setting up Powered Spawners.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:powered_spawner" />
  ### <Color id="aqua">Powered Spawner</Color>
</Row>

The crown jewel of soul machinery. Spawns mobs using power within a 4-block range. The mob type is determined by the Broken Spawner used to craft it — acquire one by breaking a vanilla Spawner. You can change the mob type by combining a Broken Spawner with a <ItemLink id="enderio:filled_soul_vial" /> of the desired mob in the <ItemLink id="enderio:soul_binder" />. Upgrade with capacitors for faster spawn rates. Check JEI for the crafting recipe (press U on a Broken Spawner).

<ItemImage id="minecraft:air" scale="0.25"/>
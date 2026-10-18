---
navigation:
  title: Storage
  icon: thermal:energy_cell
  parent: index.md
  position: 4
item_ids:
  - thermal:energy_cell
  - thermal:energy_cell_frame
  - thermal:fluid_cell
  - thermal:fluid_tank_augment
---
# <Color id="red">Storage</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Storage</Color>
  <ItemImage id="thermal:energy_cell" scale="2" />
  Thermal Expansion provides dedicated storage blocks for energy and fluids. Both can be upgraded with augments to increase capacity.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy Storage</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:energy_cell" />
  ### <Color id="aqua">Redstone Flux Cell</Color>
</Row>

Stores up to <Color id="gold">1,000,000 FE</Color> at base capacity. Accepts and outputs energy from all sides — configure each face as input, output, or both via the GUI. Can be enchanted with <Color id="aqua">Holding</Color> to further increase storage capacity.

Place multiple RF Cells adjacent to each other and they will form a connected storage network. Use Integral Component upgrades and RF Coil augments to increase transfer rates.


<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="gold">Tip:</Color> RF Cells retain their stored energy when broken with a <ItemLink id="thermal:wrench" /> or Crescent Hammer. This makes them portable energy buffers for moving power between setups.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Fluid Storage</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:fluid_cell" />
  ### <Color id="aqua">Fluid Cell</Color>
</Row>

Stores up to <Color id="gold">32 buckets</Color> (32,000 mB) of any fluid at base capacity. Like the RF Cell, each face can be configured as input or output. Upgrade with <ItemLink id="thermal:fluid_tank_augment" /> to increase capacity.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:fluid_tank_augment" />
  ### <Color id="aqua">Expanded Tank Constructor</Color>
</Row>

An augment that increases the maximum fluid capacity of Fluid Cells. Multiple tiers are available through the Thermal Extra addon — Soul Infused, Twinite, Shellite, Dragonsteel, and Abyssal variants each provide larger capacity boosts.


<ItemImage id="minecraft:air" scale="0.25"/>

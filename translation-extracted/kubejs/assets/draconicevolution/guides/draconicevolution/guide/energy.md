---
navigation:
  title: Energy Systems
  icon: draconicevolution:energy_core
  parent: index.md
  position: 4
item_ids:
  - draconicevolution:energy_core
  - draconicevolution:energy_core_stabilizer
  - draconicevolution:energy_pylon
  - draconicevolution:energy_transfuser
  - draconicevolution:basic_io_crystal
  - draconicevolution:basic_relay_crystal
  - draconicevolution:basic_wireless_crystal
  - draconicevolution:draconic_energy_core
  - draconicevolution:chaotic_energy_core
  - draconicevolution:crystal_binder
  - draconicevolution:flux_gate
  - draconicevolution:generator
---
# <Color id="red">Energy Systems</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Energy Systems</Color>
  <ItemImage id="energy_core" scale="2" />

  Draconic Evolution provides a suite of powerful energy storage, transfer, and generation tools capable of handling massive amounts of RF.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy Core</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_core" />
  ### <Color id="aqua">Energy Core</Color>
</Row>

The Energy Core is a massive multiblock RF storage structure. It comes in tiers (1 through 8) with exponentially increasing capacity. Tier 1 is compact and accessible early on, while Tier 8 can store quintillions of RF.

The multiblock is built from <ItemLink id="energy_core" /> blocks, <ItemLink id="energy_core_stabilizer" /> blocks, and Draconium or Awakened Draconium blocks. Use the GUI to toggle the build guide overlay, assemble the structure, and tier up or down.

Higher tiers require <ItemLink id="draconic_energy_core" /> or <ItemLink id="chaotic_energy_core" /> controllers.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Stabilizers & Pylons</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_core_stabilizer" />
  ### <Color id="aqua">Energy Core Stabilizers</Color>
</Row>

Stabilizers are placed at the edges of the Energy Core structure. They are required for the multiblock to form correctly. Advanced stabilizers are needed for higher tiers.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_pylon" />
  ### <Color id="aqua">Energy Pylons</Color>
</Row>

Energy Pylons transfer energy in and out of the Energy Core. Place them adjacent to the core structure. They can be set to input or output mode.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy Crystals</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Energy Crystals form the backbone of Draconic Evolution's wireless energy network. There are three types:

- <ItemLink id="basic_io_crystal" /> — Connect directly to machines and blocks for energy transfer.
- <ItemLink id="basic_relay_crystal" /> — Extend the network range by relaying energy between crystals.
- <ItemLink id="basic_wireless_crystal" /> — Provide long-range wireless connections.

Each type comes in three tiers (Basic, Wyvern, Draconic) with increasing transfer rates. Use the <ItemLink id="crystal_binder" /> to link crystals together into a network.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy Utilities</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_transfuser" />
  ### <Color id="aqua">Energy Transfuser</Color>
</Row>

The Energy Transfuser is a multi-slot charging station for items and energy storage blocks. Each slot can be set to Buffer, Charge, or Discharge mode with sequential or balanced input priority.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="flux_gate" />
  ### <Color id="aqua">Flux Gate</Color>
</Row>

The Flux Gate controls the energy flow rate between two sides. The flow rate is adjustable via redstone signal, where signal strength 0-15 maps between configurable low and high flow values.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="generator" />
  ### <Color id="aqua">Generator</Color>
</Row>

The Draconic Generator burns fuel with 5 operating modes: <Color id="green">Eco Plus</Color>, <Color id="green">Eco</Color>, <Color id="aqua">Normal</Color>, <Color id="yellow">Performance</Color>, and <Color id="red">Overdrive</Color>. Higher modes produce more power but consume fuel less efficiently.


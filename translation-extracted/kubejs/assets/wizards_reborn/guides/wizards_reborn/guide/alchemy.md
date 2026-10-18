---
navigation:
  title: Alchemy
  icon: wizards_reborn:alchemy_machine
  parent: index.md
  position: 5
item_ids:
  - wizards_reborn:alchemy_furnace
  - wizards_reborn:alchemy_machine
  - wizards_reborn:alchemy_boiler
  - wizards_reborn:fluid_extractor
  - wizards_reborn:steam_extractor
  - wizards_reborn:steam_pipe
  - wizards_reborn:fluid_pipe
  - wizards_reborn:orbital_fluid_retainer
  - wizards_reborn:steam_thermal_storage
---

# <Color id="dark_purple">Alchemy</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Alchemy</Color>

  <ItemImage id="alchemy_machine" scale="2" />

  Wissen Alchemy lets you combine ingredients into new materials. The alchemy setup requires steam, fluids, and Wissen working together. You'll find a working example setup at the bottom of this page.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Alchemy Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The alchemy system uses three core blocks:

<Row>
  <ItemImage id="alchemy_furnace" />
  ### <Color id="aqua">Alchemy Furnace</Color>
</Row>

The heat source for your alchemy setup.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alchemy_machine" />
  ### <Color id="aqua">Alchemy Machine</Color>
</Row>

The main processing block where ingredients are combined. Requires steam to operate.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alchemy_boiler" />
  ### <Color id="aqua">Alchemy Boiler</Color>
</Row>

Generates steam to power the Alchemy Machine.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Steam & Fluid Handling</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Moving steam and fluids between machines requires pipes and extractors:

<Row>
  <ItemImage id="steam_extractor" />
  ### <Color id="aqua">Steam Extractor</Color>
</Row>

Pulls steam from a source block for transport through pipes.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="steam_pipe" />
  ### <Color id="aqua">Steam Pipe</Color>
</Row>

Transports steam between machines.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="fluid_extractor" />
  ### <Color id="aqua">Fluid Extractor</Color>
</Row>

Pulls fluids from a source for transport.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="fluid_pipe" />
  ### <Color id="aqua">Fluid Pipe</Color>
</Row>

Transports fluids between machines.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Fluid & Steam Storage</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="orbital_fluid_retainer" />
  ### <Color id="aqua">Orbital Fluid Retainer</Color>
</Row>

Stores fluids for your alchemy network.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="steam_thermal_storage" />
  ### <Color id="aqua">Steam Thermal Storage</Color>
</Row>

Buffers steam so your boiler output can be stored and used on demand.

***

<Column alignItems="center" fullWidth={true}>
  ### <Color id="gold">Working Example</Color>
</Column>

<GameScene zoom="5" interactive={true}>
  <ImportStructure src="assets/alchemy_example.nbt" />
</GameScene>
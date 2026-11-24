---
navigation:
  title: Getting Started
  icon: integrateddynamics:squeezer
  parent: index.md
  position: 1
item_ids:
  - integrateddynamics:squeezer
  - integrateddynamics:drying_basin
  - integrateddynamics:menril_log
  - integrateddynamics:crystalized_menril_chunk
  - integrateddynamics:mechanical_squeezer
  - integrateddynamics:mechanical_drying_basin
---
# <Color id="aqua">Getting Started</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Getting Started</Color>
  <ItemImage id="squeezer" scale="2" />

  Before you can start building logic networks, you need to gather resources from Menril Trees and process them into usable materials.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Menril Trees</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="menril_log" scale="2" />
  ### <Color id="aqua">Menril Log</Color>
</Row>

You may occasionally encounter tall blue trees. Such trees are called Menril Trees, and have some very interesting properties. The leaves give off light due to illuminating berries, which are also very tasty. The wood contains a lot of resin, which can be used for crafting most of the things in this mod.

Menril Trees are most commonly found in Meneglin Biomes. Use a <ItemLink id="naturescompass:naturescompass" /> to find one.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Processing</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="squeezer" />
  ### <Color id="aqua">Squeezer</Color>
</Row>

The Squeezer is an early-game machine that allows you to jump on blocks and items to break or squeeze them. Not only players, but any entity can jump or fall on it. Resulting items will either fall into any adjacent inventory or on the ground. Resulting fluids will remain in the machine and will flow to one of the two sides when there is a target tank. The machine contains a small suspension that can be enabled with a redstone pulse to reset it.

Use it to squeeze <ItemLink id="menril_log" /> to obtain Menril Resin.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="drying_basin" />
  ### <Color id="aqua">Drying Basin</Color>
</Row>

Drying out blocks and items can be done using the Drying Basin. This can for instance be useful when you want to let your Menril Resin dry into <ItemLink id="crystalized_menril_chunk" />.

Place a Drying Basin next to the Squeezer to collect the resin automatically. The resin will flow from the Squeezer into the adjacent basin and dry into crystals over time.


<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Mechanical Upgrades</Color>

<Row>
  <ItemImage id="mechanical_squeezer" />
  <ItemImage id="mechanical_drying_basin" />
</Row>

Later on, you can upgrade to the <ItemLink id="mechanical_squeezer" /> and <ItemLink id="mechanical_drying_basin" />. These powered versions consume energy (FE) but are significantly faster and do not require manual jumping. They are a worthwhile investment once you have a reliable power source.

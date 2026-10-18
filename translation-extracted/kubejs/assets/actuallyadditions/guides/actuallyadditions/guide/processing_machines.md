---
navigation:
  title: Processing Machines
  icon: actuallyadditions:crusher
  parent: index.md
  position: 6
item_ids:
  - actuallyadditions:crusher
  - actuallyadditions:crusher_double
  - actuallyadditions:powered_furnace
  - actuallyadditions:lava_factory_controller
  - actuallyadditions:canola_press
  - actuallyadditions:fermenting_barrel
---
# <Color id="green">Processing Machines</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Processing Machines</Color>
  <ItemImage id="crusher" scale="2" />

  These machines transform items and materials using CF power.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Row>
  <ItemImage id="crusher" />
  ### <Color id="aqua">Crusher</Color>
</Row>

The Crusher grinds ores into dust, yielding <Color id="green">2x output</Color> per ore. It can also grind ingots back into dust. The <ItemLink id="crusher_double" /> processes two items simultaneously.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="powered_furnace" />
  ### <Color id="aqua">Powered Furnace</Color>
</Row>

A CF-powered furnace that smelts two items at a time. No fuel needed; just supply it with Crystal Flux.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="canola_press" />
  ### <Color id="aqua">Canola Press</Color>
</Row>

The Canola Press converts Canola into Canola Oil, which can be burned in the <ItemLink id="oil_generator" />.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="fermenting_barrel" />
  ### <Color id="aqua">Fermenting Barrel</Color>
</Row>

The Fermenting Barrel upgrades Canola Oil into Refined Canola Oil for greater energy output.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="lava_factory_controller" />
  ### <Color id="aqua">Lava Factory</Color>
</Row>

Produces lava using CF. Requires 4 Lava Factory Casing blocks placed around the block directly above the Lava Factory to function.

<GameScene zoom="2.5" background="#333333" interactive={true}>
  <Block id="lava_factory_controller" x="1" y="0" z="1" />
  <BlockAnnotation x="1" y="1" z="1" color="#00000000">
  Lava generates in the middle!
  </BlockAnnotation>
  <Block id="lava_factory_casing" x="0" y="1" z="1" />
  <Block id="lava_factory_casing" x="2" y="1" z="1" />
  <Block id="lava_factory_casing" x="1" y="1" z="0" />
  <Block id="lava_factory_casing" x="1" y="1" z="2" />
</GameScene>


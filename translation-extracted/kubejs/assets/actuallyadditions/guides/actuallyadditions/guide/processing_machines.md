---
navigation:
  title: Перерабатывающие механизмы
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
# <Color id="green">Перерабатывающие механизмы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Перерабатывающие механизмы</Color>
  <ItemImage id="crusher" scale="2" />

  Эти механизмы перерабатывают предметы и материалы, используя энергию CF.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Row>
  <ItemImage id="crusher" />
  ### <Color id="aqua">Crusher</Color>
</Row>

Crusher измельчает руды в пыль, обеспечивая <Color id="green">удвоенный выход</Color> с каждой руды. Он также превращает слитки обратно в пыль. <ItemLink id="crusher_double" /> обрабатывает два предмета одновременно.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="powered_furnace" />
  ### <Color id="aqua">Powered Furnace</Color>
</Row>

Печь на энергии CF, переплавляющая по два предмета за раз. Топливо не требуется — достаточно подать Crystal Flux.

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


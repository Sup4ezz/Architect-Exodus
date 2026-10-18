---
navigation:
  title: Начало работы
  icon: actuallyadditions:atomic_reconstructor
  parent: index.md
  position: 1
item_ids:
  - actuallyadditions:atomic_reconstructor
  - actuallyadditions:restonia_crystal
  - actuallyadditions:palis_crystal
  - actuallyadditions:diamatine_crystal
  - actuallyadditions:void_crystal
  - actuallyadditions:emeradic_crystal
  - actuallyadditions:enori_crystal
  - actuallyadditions:empowerer
  - actuallyadditions:display_stand
  - actuallyadditions:black_quartz
---
# <Color id="green">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Начало работы</Color>
  <ItemImage id="atomic_reconstructor" scale="2" />

  На этой странице описаны основы Actually Additions: создание кристаллов и ключевые механизмы, которые пригодятся в начале игры.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Black Quartz</Color>
</Column>

<Row>
  <ItemImage id="black_quartz" />
  <Column>
    Black Quartz встречается в виде руды под землёй в большинстве измерений, в виде Geore Nodes в <Color id="aqua">Jotunheim</Color> или добывается некоторыми генераторами руды, например шахтёрами Occultism. Это один из основных материалов для создания предметов в Actually Additions.
  </Column>
</Row>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Atomic Reconstruction</Color>
</Column>

The <Color id="green"><ItemLink id="atomic_reconstructor"/></Color> is the first of two core machines used in Actually Additions. It shoots a laser beam that converts items and blocks placed or dropped in front of it. When supplied with power (<Color id="red">1,000 FE/CF</Color> per shot), it can convert ores and materials.

Among these conversions are 6 types of crystals used in most early-game and mid-game Actually Additions recipes:

<ItemGrid>
  <ItemIcon id="restonia_crystal" />
  <ItemIcon id="palis_crystal" />
  <ItemIcon id="diamatine_crystal" />
  <ItemIcon id="void_crystal" />
  <ItemIcon id="emeradic_crystal" />
  <ItemIcon id="enori_crystal" />
</ItemGrid>

Right-click the Atomic Reconstructor with a <ItemLink id="minecraft:redstone_torch" /> to toggle between deactivated-by-redstone and pulse modes. This allows you to set up a very early automation using a pressure plate on top of or next to the Atomic Reconstructor and dropping items on it.

The Atomic Reconstructor can also be fitted with <ItemImage id="actuallyadditions:lens" scale="0.5" /> [Lenses](actuallyadditions:lenses.md) to change or enhance its beam behavior.

<RecipeFor id="atomic_reconstructor" />

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Empowerer</Color>
</Column>

The <Color id="green"><ItemLink id="empowerer"/></Color> is the second core machine used in Actually Additions. It is used to empower crystals into stronger versions. Place the item to empower on the Empowerer block, then place the 4 required empowering items on <ItemLink id="display_stand" /> blocks positioned exactly 2 blocks away in each cardinal direction. The Display Stands need CF power to perform the empowerment.


<ItemImage id="minecraft:air" scale="0.5" />

### <Color id="aqua">Empowerer Setup</Color>

You will also need 4 <Color id="dark_green"><ItemLink id="display_stand" />s</Color> provided with energy to finish setting up your <Color id="green"><ItemLink id="empowerer"/></Color>. They must be placed 3 blocks away from the Display stand as seen on the diagram below.

To craft with this setup you will need to place the main crystal on the Empowerer, while the other resources should be placed around it on top of the <Color id="dark_green"><ItemLink id="display_stand" />s</Color>.

> <Color id="yellow">Tip</Color>: Empowering entire crystal blocks at once is cheaper than individual ingots as both recipes consume the same amount of extra resources.

<GameScene zoom="2.5" background="#333333">
  <IsometricCamera yaw="30" roll="60" pitch="90" />
  <Block id="empowerer" />
  <BlockAnnotation x="1" color="#aaaaaa"/>
  <BlockAnnotation x="2" color="#aaaaaa"/>
  <Block x="3" id="display_stand" />
  <BlockAnnotation x="-1" color="#aaaaaa"/>
  <BlockAnnotation x="-2" color="#aaaaaa"/>
  <Block x="-3" id="display_stand" />
  <BlockAnnotation z="1" color="#aaaaaa"/>
  <BlockAnnotation z="2" color="#aaaaaa"/>
  <Block z="3" id="display_stand" />
  <BlockAnnotation z="-1" color="#aaaaaa"/>
  <BlockAnnotation z="-2" color="#aaaaaa"/>
  <Block z="-3" id="display_stand" />
</GameScene>
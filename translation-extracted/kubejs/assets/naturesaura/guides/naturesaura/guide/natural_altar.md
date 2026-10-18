---
navigation:
  title: Natural Altar
  icon: naturesaura:nature_altar
  parent: index.md
  position: 3
item_ids:
  - naturesaura:nature_altar
  - naturesaura:gold_brick
  - naturesaura:gold_nether_brick
  - naturesaura:crushing_catalyst
  - naturesaura:conversion_catalyst
---

# <Color id="green">Natural Altar</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Natural Altar</Color>

  <ItemImage id="nature_altar" scale="2" />

  The Natural Altar is the second main crafting method in Nature's Aura. It infuses one type of item with aura to transform it into another.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Building the Altar</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The Natural Altar is a multiblock structure. You will need:

- 1x <ItemLink id="nature_altar" />
- 8x Golden Bricks (<ItemLink id="gold_brick" /> or <ItemLink id="gold_nether_brick" />)
- 20x Any wooden planks
- 16x Main bricks (Stone Bricks or Nether Bricks)
- 4x Intersection bricks (Chiseled Stone Bricks or Red Nether Bricks)

<ItemImage id="minecraft:air" scale="0.25"/>

<GameScene zoom="1.5" background="#333333" interactive={true}>
  <ImportStructure src="assets/naturesaura_altar.nbt" />
</GameScene>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Using the Altar</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Place the input item on the Natural Altar and it will draw aura from the surrounding area to perform the transformation. The altar works with auras from well-lit realms or those infused with spirits.

<Color id="red">Important:</Color> The altar consumes local aura to craft. Make sure you have sufficient aura generation nearby or you risk depleting the area.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Altar Catalysts</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Catalysts can be placed on one of the four central Golden Bricks to augment the altar with additional functionality.

<Row>
  <ItemImage id="crushing_catalyst" />
  ### <Color id="aqua">Crumbling Catalyst</Color>
</Row>

Augments the altar to break down materials into more basic ingredients using aura, emulating natural decomposition at a faster rate.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="conversion_catalyst" />
  ### <Color id="aqua">Conversion Catalyst</Color>
</Row>

Enables additional transformation recipes on the Natural Altar, converting materials between similar types.
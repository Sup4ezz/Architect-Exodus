---
navigation:
  title: Metallurgy
  icon: embers:melter
  parent: index.md
  position: 2
item_ids:
  - embers:melter
  - embers:melter_bottom
  - embers:stamp_base
  - embers:stamp
  - embers:mixer_centrifuge_top
  - embers:mixer_centrifuge_bottom
  - embers:hearth_coil
  - embers:geologic_separator
  - embers:bin
---
# <Color id="gold">Metallurgy</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="gold">Metallurgy</Color>
  <ItemImage id="melter" scale="2" />

  The metallurgical machines of Embers allow you to melt, alloy, stamp, and smelt metals using the power of activated Ember.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Melter</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="melter" />
  ### <Color id="aqua">Melter</Color>
</Row>

Using the power of activated Ember, you have devised a way to melt down objects. When the Melter's bottom block is provided with Ember, it will melt down meltable items in its top block into their liquid state, where the molten fluid can be piped out for external use.

The <ItemLink id="melter" /> is a <Color id="aqua">2-block tall</Color> structure. Place items in the top block and supply Ember to the bottom block to begin melting.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="geologic_separator" />
  ### <Color id="aqua">Geologic Separator</Color>
</Row>

The <ItemLink id="geologic_separator" /> is a machine upgrade devised to filter out impurities when melting ores, providing a little bit of extra output. Attach it beside a <ItemLink id="melter" /> to boost ore processing yields.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Stamper</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="stamp_base" />
  ### <Color id="aqua">Stamp Base</Color>
</Row>

The <ItemLink id="stamp_base" /> receives molten metal from above and stamps it into items using different stamp plates. Pour molten metal in, place the appropriate Stamp, and the Stamper will produce ingots, plates, or other items depending on which stamp is used.


<ItemImage id="minecraft:air" scale="0.25"/>

Stamps:

<ItemGrid>
  <ItemIcon id="flat_stamp" />
  <ItemIcon id="ingot_stamp" />
  <ItemIcon id="nugget_stamp" />
  <ItemIcon id="plate_stamp" />
  <ItemIcon id="gear_stamp" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mixer Centrifuge</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mixer_centrifuge" />
  ### <Color id="aqua">Mixer Centrifuge</Color>
</Row>

Through the Mixer Centrifuge, you can create new alloys from molten metals. Each face of the bottom block is its own tank. When fluid is pumped into these tanks in a particular combination and the top block is given Ember, a molten alloy will be created which can be pumped out of the top block.


<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="green">Dawnstone</Color> is a strong alloy of <Color id="aqua">gold and copper in equal parts</Color>, created using the Mixer Centrifuge. With Ember imbued into its very nature during creation, this alloy allows you to create the material structure for many more advanced Ember mechanisms.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Hearth Coil</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="hearth_coil" />
  ### <Color id="aqua">Hearth Coil</Color>
</Row>

Gone are the days of using solid fuels in a stone furnace. When supplied with Ember, the <ItemLink id="hearth_coil" /> will heat up. The hotter it gets, the faster it will smelt the items placed on top of it.

The Hearth Coil can be specialized with upgrades:
* <Color id="green">Atmospheric Bellows</Color> — Restricts to blasting recipes only, but operates at <Color id="aqua">2x speed</Color>.
* <Color id="green">Char Instiller</Color> — Restricts to smoking recipes only, but operates at <Color id="aqua">2x speed</Color>.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Bin</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="bin" />
  ### <Color id="aqua">Bin</Color>
</Row>

A simple barrel of lead with an open top, the <ItemLink id="bin" /> can hold up to a stack of any item. It can also be used to automatically collect outputs from some machines.


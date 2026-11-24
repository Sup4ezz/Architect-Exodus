---
navigation:
  title: Machines
  icon: embers:stamper
  parent: index.md
  position: 4
item_ids:
  - embers:item_pipe
  - embers:item_extractor
  - embers:fluid_pipe
  - embers:fluid_extractor
  - embers:item_dropper
  - embers:automatic_hammer
  - embers:dawnstone_anvil
  - embers:item_transfer
  - embers:fluid_transfer
  - embers:clockwork_attenuator
  - embers:catalytic_plug
  - embers:combustion_chamber
  - embers:catalysis_chamber
  - embers:mini_boiler
  - embers:cinder_plinth
---
# <Color id="gold">Machines</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="gold">Machines</Color>
  <ItemImage id="stamper" scale="2" />

  The machines of Embers Rekindled handle item and fluid transport, automation, and machine upgrades. This page covers the utility machines that form the backbone of your dwarven workshop.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Transport</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="fluid_pipe" />
  <ItemIcon id="fluid_extractor" />
  <ItemIcon id="item_pipe" />
  <ItemIcon id="item_extractor" />
</ItemGrid>

Iron Pipes transport fluids, Lead Pipes transport items. Pipes can only insert to tanks or inventories — to extract, craft a corresponding Extractor, place it adjacent to the container, and power it with redstone.

Use the <ItemLink id="tinker_hammer" /> to disconnect pipes from each other. Right-click a pipe with a <Color id="aqua">stick</Color> to unclog it if items or fluids get stuck.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="item_transfer" />
  <ItemIcon id="fluid_transfer" />
</ItemGrid>

Wireless transfer blocks that function similarly to pipes but over distance. Link a pair together to transport items or fluids without running pipes across your base. Can be filtered to only transfer specific items or fluids.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="item_dropper" />
  ### <Color id="aqua">Item Dropper</Color>
</Row>

The <ItemLink id="item_dropper" /> spews items vertically downward, useful for feeding items into machines or creating automated processing chains.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Dawnstone Anvil</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="dawnstone_anvil" />
  ### <Color id="aqua">Dawnstone Anvil</Color>
</Row>

The Dawnstone Anvil may be used to both repair items, or break down items into their component parts. Place a damaged item on the anvil, then its repair material, then give it a good couple whacks with the Tinker Hammer to repair it. Place the damaged item alone and give it some strong blows, and it will break apart into its component pieces.

The Dawnstone Anvil is also used for <Color id="green">attaching augments</Color> to tools and armor that have a Motive Core installed.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="automatic_hammer" />
  ### <Color id="aqua">Automatic Hammer</Color>
</Row>

Simply requires redstone power and a bit of Ember power, and will handle the hammering of the Dawnstone Anvil much more forcefully and faster than you manually could. Place it adjacent to a Dawnstone Anvil to automate repairs and augment attachment.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Machine Upgrades</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="combustion_chamber" />
  ### <Color id="aqua">Combustion Chamber</Color>
</Row>

A machine upgrade that burns fuels to boost the attached machine. Different fuels provide different multipliers:
* <Color id="green">Coal</Color> — 2x boost
* <Color id="green">Nether Brick</Color> — 3x boost
* <Color id="green">Blaze Powder</Color> — 4x boost

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="catalysis_chamber" />
  ### <Color id="aqua">Catalysis Chamber</Color>
</Row>

A machine upgrade that uses catalysts to boost the attached machine. Different catalysts provide different multipliers:
* <Color id="green">Ember Grit</Color> — 2x boost
* <Color id="green">Gunpowder</Color> — 3x boost
* <Color id="green">Glowstone Dust</Color> — 4x boost

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="catalytic_plug" />
  ### <Color id="aqua">Catalytic Plug</Color>
</Row>

Doubles the speed of the machine, but only if also supplied with Steam from the back. Up to 2 can be attached to a single machine to quadruple its speed.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="clockwork_attenuator" />
  ### <Color id="aqua">Clockwork Attenuator</Color>
</Row>

This dial can directly control a machine's speed. It has two internal settings that toggle on a redstone signal: active and inactive. Attach it to any machine to precisely regulate its operation speed with redstone control.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mini_boiler" />
  ### <Color id="aqua">Mini Boiler</Color>
</Row>

By attaching this pressure vessel to the side of an Ember-consuming or -producing machine, you can boil water into steam for other purposes. But beware that at high pressures, the boiler can easily rupture...


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Cinder Plinth</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="cinder_plinth" />
  ### <Color id="aqua">Cinder Plinth</Color>
</Row>

Place any item into it, power it with Ember, and it will burn the item into black Ash. Ash is a key ingredient in various alchemical recipes and for crafting the Ashen Cloak armor set.


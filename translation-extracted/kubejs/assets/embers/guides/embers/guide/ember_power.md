---
navigation:
  title: Ember Power
  icon: embers:copper_cell
  parent: index.md
  position: 3
item_ids:
  - embers:ember_activator
  - embers:ember_emitter
  - embers:ember_receiver
  - embers:copper_cell
  - embers:crystal_cell
  - embers:beam_cannon
  - embers:beam_splitter
  - embers:ember_relay
  - embers:mirror_relay
  - embers:mechanical_core
  - embers:copper_charger
  - embers:ember_siphon
---
# <Color id="gold">Ember Power</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="gold">Ember Power</Color>
  <ItemImage id="copper_cell" scale="2" />

  Once you have raw Ember Crystals, you need a way to activate and distribute that energy. This page covers the machines that form your Ember power network — from activation and storage to transmission and interfacing.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ember Activator</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_activator" />
  ### <Color id="aqua">Ember Activator</Color>
</Row>

The <ItemLink id="ember_activator" /> is an ingenious device, finally allowing you to extract usable energy from Ember Crystals and Shards. Simply insert said Crystals and Shards into the bottom of the device using a Hopper or other item transportation method, and soon, marked by a fiery burst, activated Ember will appear within the copper cage atop the machine.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Emitters & Receptors</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The actual manipulation of Ember involves two main blocks: <ItemLink id="ember_emitter" /> and <ItemLink id="ember_receiver" />.

<Row>
  <ItemImage id="ember_emitter" />
  ### <Color id="aqua">Ember Emitter</Color>
</Row>

Ember Emitters function as the sending end — place them on a machine and they will suck out Ember into their internal buffer. Then, while powered by <Color id="red">redstone</Color>, they will periodically expel Ember in bursts toward a linked Receptor.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_receiver" />
  ### <Color id="aqua">Ember Receptor</Color>
</Row>

Ember Receptors are the receiving end. Place them on any machine that accepts Ember, and they will catch incoming bursts and feed the energy into that machine.

To link an Emitter to a Receptor, use the <ItemLink id="tinker_hammer" />: right-click the Emitter first, then right-click the Receptor. There is no distance limit, but Ember bursts can fade over very long distances.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ember Storage</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="copper_cell" />
  ### <Color id="aqua">Copper Cell</Color>
</Row>

The <ItemLink id="copper_cell" /> fulfills a very simple purpose: Ember storage. It can be given Ember using an Ember Receptor, or have Ember removed from it through an Ember Emitter. When broken, it will retain its stored Ember.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="crystal_cell" />
  ### <Color id="aqua">Crystal Cell</Color>
</Row>

The <ItemLink id="crystal_cell" /> will start small, and can have Ember inserted and extracted from it. It can also have Ember fuel items such as Ember Crystals inserted into it as well. Each fuel item will increase the maximum capacity of the Cell, eventually causing physical growth in the glowing crystal atop it.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Beam Network</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="beam_cannon" />
  ### <Color id="aqua">Beam Cannon</Color>
</Row>

When given enough Ember and powered with <Color id="red">redstone</Color>, the <ItemLink id="beam_cannon" /> will fire off a beam of pure radiant heat in the direction it is facing. This beam can kill nearly any unarmored creature, and also initiate transmutation at the Exchange Tablet. It can also transport large volumes of Ember to a receiver or Beam Splitter.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="ember_relay" />
  <ItemIcon id="mirror_relay" />
  <ItemIcon id="beam_splitter" />
</ItemGrid>

Relays allow you to redirect and distribute Ember transmissions across your network:

- <ItemLink id="ember_relay" /> — Passes Ember straight through, acting as a waypoint in your network.
- <ItemLink id="mirror_relay" /> — Bounces Ember like light off a mirror, allowing you to redirect transmissions around corners.
- <ItemLink id="beam_splitter" /> — Divides an incoming beam into multiple outgoing streams, useful for powering several machines from a single source.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Charger & Siphon</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="copper_charger" />
  ### <Color id="aqua">Copper Charger</Color>
</Row>

The <ItemLink id="copper_charger" /> fills Ember containers placed inside it, allowing you to charge portable items that run on Ember energy.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_siphon" />
  ### <Color id="aqua">Ember Siphon</Color>
</Row>

The <ItemLink id="ember_siphon" /> inverts the function of a Charger — it drains Ember from containers placed inside it, extracting stored energy back into your network.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mechanical Core</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mechanical_core" />
  ### <Color id="aqua">Mechanical Core</Color>
</Row>

The <ItemLink id="mechanical_core" /> will act as a proxy to the inventory, fluid storage, or Ember storage of any large machine it is facing towards. Up to <Color id="green">three</Color> Mechanical Cores can be chained to provide a more extended interface, making it easier to automate complex setups.

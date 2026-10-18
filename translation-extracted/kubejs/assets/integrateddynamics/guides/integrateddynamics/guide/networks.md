---
navigation:
  title: Networks
  icon: integrateddynamics:cable
  parent: index.md
  position: 2
item_ids:
  - integrateddynamics:cable
  - integrateddynamics:wrench
  - integrateddynamics:facade
  - integrateddynamics:part_connector_mono_directional
  - integrateddynamics:part_connector_omni_directional
---
# <Color id="aqua">Networks</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Networks</Color>
  <ItemImage id="cable" scale="2" />

  Integrated Dynamics networks are the foundation of any good automation system. A network is a collection of connected Logic Cables on which parts can be placed. This page covers cables, the wrench used to manage them, facades for hiding cables, and connectors for long-distance links.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Cable Basics</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="cable" />
  ### <Color id="aqua">Logic Cables</Color>
</Row>

Logic Cables are the backbone of every Integrated Dynamics network. Place them down to form a connected network, then attach parts such as readers and writers directly onto the cables. Cables should be managed using a <ItemLink id="wrench" />. Shift+right-clicking a cable or part will remove it, while a regular right-click will disconnect it from adjacent cables.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="wrench" />
  ### <Color id="aqua">Wrench</Color>
</Row>

The Wrench is the essential tool for managing cables and parts. Right-click a cable to disconnect it from neighboring cables. Shift+right-click a cable or part to remove it entirely. The wrench also has an offset mode that allows you to configure the target position of a part, useful for precise placement.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="facade" />
  ### <Color id="aqua">Facades</Color>
</Row>

Even though Logic Cables may look nice, in some cases you will probably want to hide them. Facades can resemble any material, letting you disguise your cable runs to blend in with their surroundings. Simply craft a Facade and apply it to any cable.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Connectors</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

For long-distance or cross-dimensional network connections, Integrated Dynamics offers two types of connectors:

<Row>
  <ItemImage id="part_connector_mono_directional" />
  ### <Color id="aqua">Mono-Directional Connector</Color>
</Row>

Connects two networks in a straight line up to 512 blocks apart. Place one on each end facing the other to link the networks together.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_connector_omni_directional" />
  ### <Color id="aqua">Omni-Directional Connector</Color>
</Row>

Connects networks in any direction, even across dimensions. Each connector is assigned a group ID, and all connectors sharing the same group ID are linked together. Each group displays a unique color of particles so you can tell them apart at a glance.

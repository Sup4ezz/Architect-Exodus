---
navigation:
  title: Writers
  icon: integrateddynamics:part_redstone_writer
  parent: index.md
  position: 5
item_ids:
  - integrateddynamics:part_audio_writer
  - integrateddynamics:part_effect_writer
  - integrateddynamics:part_entity_writer
  - integrateddynamics:part_machine_writer
  - integrateddynamics:part_inventory_writer
  - integrateddynamics:part_redstone_writer
---
# <Color id="aqua">Writers</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Writers</Color>
  <ItemImage id="part_redstone_writer" scale="2" />

  Writers perform actions based on Variable Card values. Place them on Logic Cables facing a target block to write information or trigger behavior in the world.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Writer Types</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_audio_writer" />
  ### <Color id="aqua">Audio Writer</Color>
</Row>

Play sounds and music based on variable values. Insert a Variable Card to control which sound is played, its volume, and pitch.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_effect_writer" />
  ### <Color id="aqua">Effect Writer</Color>
</Row>

Emit particles based on variable values and settings. Useful for visual indicators and decorative effects tied to your network logic.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_entity_writer" />
  ### <Color id="aqua">Entity Writer</Color>
</Row>

Configure and control entities in the world. Can be used to apply effects or modify entity behavior based on variable values.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_machine_writer" />
  ### <Color id="aqua">Machine Writer</Color>
</Row>

Configure and control machines. Use variable values to set machine parameters or trigger machine operations remotely through your network.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_inventory_writer" />
  ### <Color id="aqua">Inventory Writer</Color>
</Row>

Perform inventory-related actions on adjacent containers. Note that this writer does not transfer items itself; it configures inventory behavior based on variable values.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_redstone_writer" />
  ### <Color id="aqua">Redstone Writer</Color>
</Row>

Output a specific redstone signal level based on a variable value. Insert an Integer Variable Card to control the exact redstone strength (0-15) emitted from the cable face.


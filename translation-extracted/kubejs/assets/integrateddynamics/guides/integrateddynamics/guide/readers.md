---
navigation:
  title: Readers
  icon: integrateddynamics:variable
  parent: index.md
  position: 4
item_ids:
  - integrateddynamics:part_audio_reader
  - integrateddynamics:part_block_reader
  - integrateddynamics:part_entity_reader
  - integrateddynamics:part_extradimensional_reader
  - integrateddynamics:part_fluid_reader
  - integrateddynamics:part_inventory_reader
  - integrateddynamics:part_machine_reader
  - integrateddynamics:part_network_reader
  - integrateddynamics:part_redstone_reader
  - integrateddynamics:part_world_reader
---
# <Color id="aqua">Readers</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Readers</Color>
  <ItemImage id="part_redstone_reader" scale="2" />

  The simplest method for creating a dynamic variable is done using Readers. Different types of readers exist for reading information from the world and storing it inside a Variable Card. Each Reader contains one or more Aspects for reading different things with different Value Types. Readers are placed on Logic Cables facing a target block. Insert a Variable Card to bind it to an aspect.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Reader Types</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Audio Reader</Color>

Reads information about music and audio playing in the environment. Useful for detecting note block output or other sound-related signals.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Block Reader</Color>

Reads information about the block the part is facing. Can detect block type, properties, hardness, and other block-level data.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Entity Reader</Color>

Reads information about entities in the space the part is facing. Can detect entity type, health, position, and other entity attributes.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Extra-Dimensional Reader</Color>

Reads server-wide information such as the list of online players. Unlike other readers, this one does not need to face a specific block since it reads global data.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Fluid Reader</Color>

Reads values from the fluid tank being faced. Can detect fluid type, amount, capacity, and other tank-related data.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Inventory Reader</Color>

Reads information from the facing inventory, such as slot count, contained items, and fullness. This reader only reads data and does not transfer items.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Machine Reader</Color>

Reads from the facing machine, such as its current recipes and work status. Useful for monitoring furnaces, crafting machines, and other processing blocks.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Network Reader</Color>

Reads information about an Integrated Dynamics network being faced. This can be a different network from the one the reader is attached to, allowing you to monitor external networks.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Redstone Reader</Color>

Reads redstone information from the facing block. Can detect signal strength, whether a block is powered, and comparator output levels.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">World Reader</Color>

Reads information about the world such as current weather, time of day, light level, and other environmental data.

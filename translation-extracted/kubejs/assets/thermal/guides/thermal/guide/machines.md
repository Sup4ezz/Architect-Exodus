---
navigation:
  title: Механизмы
  icon: thermal:machine_pulverizer
  parent: index.md
  position: 2
item_ids:
  - thermal:machine_furnace
  - thermal:machine_pulverizer
  - thermal:machine_smelter
  - thermal:machine_sawmill
  - thermal:machine_crucible
  - thermal:machine_chiller
  - thermal:machine_insolator
  - thermal_extra:component_assembly
  - thermal_extra:advanced_refinery
  - thermal_extra:endothermic_dehydrator
  - thermal_extra:fluid_mixer
  - thermal_extra:nitratic_igniter
  - thermal_extra:dynamo_frost
  - thermal_extra:device_harvester
  - thermal_extra:device_lava_gen
---
# <Color id="red">Механизмы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Механизмы</Color>
  <ItemImage id="thermal:machine_pulverizer" scale="2" />
  Механизмы Thermal Expansion перерабатывают предметы, используя Redstone Flux (FE). Каждый механизм собирается из <ItemLink id="thermal:machine_frame" /> и может быть улучшен с помощью [модулей](augments.md).
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="gold">Совет:</Color> Все механизмы поддерживают улучшения Integral Component и специализированные Augments. Полное описание системы улучшений см. в разделе [Augments](augments.md).

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Перерабатывающие механизмы</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_furnace" />
  ### <Color id="aqua">Redstone Furnace</Color>
</Row>

Smelts items using FE instead of furnace fuels. Functionally identical to a vanilla Furnace but faster with upgrades and never needs refueling — just power. Your first step up from coal-burning.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_pulverizer" />
  ### <Color id="aqua">Pulverizer</Color>
</Row>

Crushes ores into dusts for double smelting output. Also breaks down items into component materials — grind Cobblestone into Sand, Gravel into Flint, and more. One of the most essential Thermal machines.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_smelter" />
  ### <Color id="aqua">Induction Smelter</Color>
</Row>

Combines two ingredients into alloys. This is how you create <ItemLink id="thermal:invar_ingot" />, <ItemLink id="thermal:electrum_ingot" />, <ItemLink id="thermal:signalum_ingot" />, and other Thermal alloys. Also processes ores with Sand for bonus secondary outputs, or with <ItemLink id="thermal:cinnabar" /> to guarantee them.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_sawmill" />
  ### <Color id="aqua">Sawmill</Color>
</Row>

Processes logs into planks with bonus Sawdust. More efficient than hand-crafting — you get extra planks per log. Sawdust can be compressed into Recycled materials or used in other recipes.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Fluid Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_crucible" />
  ### <Color id="aqua">Magma Crucible</Color>
</Row>

Melts solid items into fluids. Turns Cobblestone into Lava, Ice into Water, Redstone into Destabilized Redstone fluid, Glowstone into Energized Glowstone fluid, and Ender Pearls into Resonant Ender. Essential for fluid-based alloy crafting.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_chiller" />
  ### <Color id="aqua">Blast Chiller</Color>
</Row>

The reverse of the Magma Crucible — freezes fluids into solid blocks. Turn Water into Ice, Lava into Obsidian, and special fluids into their crystallized forms. Useful for automating materials that normally require tedious collection.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Agriculture</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal:machine_insolator" />
  ### <Color id="aqua">Phytogenic Insolator</Color>
</Row>

Grows crops and plants inside its inventory using FE and Water. Place seeds or saplings in the input slot and supply power. Optionally add fertilizer (like <ItemLink id="thermal:apatite" /> or Phytogro) in the catalyst slot to dramatically increase growth speed and bonus output chance. See [Cultivation](cultivation.md) for the full crop list.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Thermal Extra Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The Thermal Extra addon adds a set of mid-to-endgame machines that sit on top of the base Thermal infrastructure. They run on FE the same way and accept the same augment families.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:component_assembly" />
  ### <Color id="aqua">Component Assembler</Color>
</Row>

The most important addition for this pack — it is the machine used to craft <ItemLink id="thermal:redstone_servo" /> and the <Color id="green">AE2 processors</Color> (Logic / Engineering / Calculation / Accumulation). See [Processors](ae2:guide:processors.md) on the AE2 guide for the processor flow.

To craft the Component Assembler itself: Paraffin Wax + 4× <ItemLink id="thermal:hardened_glass" /> + <ItemLink id="thermal:machine_frame" /> + 2× <Color id="aqua">Twinite Gear</Color> + 2× <ItemLink id="thermal:rf_coil" />.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:advanced_refinery" />
  ### <Color id="aqua">Advanced Refinery</Color>
</Row>

An upgraded version of the Centrifugal Separator with multiple output channels. Used for complex fluid distillation chains — turning crude oil into refined products with byproducts split into separate output slots. Necessary for higher-tier Thermal/Thermal Extra crafts that need Paraffin Wax and similar refined outputs.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:endothermic_dehydrator" />
  ### <Color id="aqua">Endothermic Dehydrator</Color>
</Row>

The reverse of the Magma Crucible — pulls fluid out of items, producing dried/dehydrated outputs. Used for crafts that require removing moisture or solidifying fluids into dust forms.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:fluid_mixer" />
  ### <Color id="aqua">Fluid Mixer</Color>
</Row>

Combines two fluids into a single fluid output, with an optional secondary item output. Used for resin/dye/alloy fluid prep that the Magma Crucible can't handle.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:nitratic_igniter" />
  ### <Color id="aqua">Nitratic Igniter</Color>
</Row>

Uses explosive reagents (nitre, gunpowder) to grind ores and items into dusts. Functionally similar to the Pulverizer but for materials that resist normal grinding — handy for endgame ores.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:dynamo_frost" />
  ### <Color id="aqua">Gelid Dynamo</Color>
</Row>

A Thermal Extra Dynamo that generates FE from <Color id="aqua">cold-themed fuels</Color> like Blizz Cubes, Snowballs, and Ice. The Frost analog to the Magmatic Dynamo. Pairs well with Cultivator-grown blizz crops for a renewable cold-fuel loop.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:device_harvester" />
  ### <Color id="aqua">Crop Harvester</Color>
</Row>

An area-effect device that breaks fully-grown crops within its radius. Install <ItemLink id="thermal_extra:dragonsteel_area_radius_augment" /> augments to expand the harvest area. Great for autocrop fields without per-block harvesters.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermal_extra:device_lava_gen" />
  ### <Color id="aqua">Magmatic Accumulator</Color>
</Row>

Generates lava in its internal tank using FE. Significantly faster in the <Color id="red">Nether</Color> or any nether-tagged dimension (Muspelheim, Nidhogg's domain) — a reliable infinite lava source once you have access.

<ItemImage id="minecraft:air" scale="0.25"/>

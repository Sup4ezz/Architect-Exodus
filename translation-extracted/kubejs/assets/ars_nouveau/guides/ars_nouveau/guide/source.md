---
navigation:
  title: Source и энергия
  icon: ars_nouveau:source_jar
  parent: index.md
  position: 3
item_ids:
  - ars_nouveau:source_jar
  - ars_nouveau:volcanic_sourcelink
  - ars_nouveau:agronomic_sourcelink
  - ars_nouveau:vitalic_sourcelink
  - ars_nouveau:alchemical_sourcelink
  - ars_nouveau:mycelial_sourcelink
  - starbunclemania:fluid_sourcelink
  - ars_nouveau:relay
  - ars_nouveau:relay_splitter
  - ars_nouveau:relay_warp
  - ars_nouveau:relay_collector
  - ars_nouveau:relay_deposit
  - ars_nouveau:dominion_wand
  - ars_nouveau:sourceberry_bush
---
# <Color id="light_purple">Source и энергия</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Source и энергия</Color>
  <ItemImage id="source_jar" scale="2" />

  Source — магическая энергия, питающая все устройства Ars Nouveau, от Imbuement Chamber до Enchanting Apparatus. Получайте её с помощью Sourcelinks, храните в Source Jars и передавайте через Relays.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Source</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="source_jar" />
  ### <Color id="aqua">Source Jar</Color>
</Row>

Source Jars хранят Source, полученную от ближайших Sourcelinks. Для работы многих блоков и рецептов нужна Source, поэтому необходимо организовать её производство и хранение. Поставьте Source Jar рядом с Sourcelink — и сосуд постепенно наполнится.

При разрушении сосуд сохраняет накопленную Source. Компаратор рядом с Source Jar выдаёт сигнал в зависимости от уровня заполнения.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="sourceberry_bush" />
  ### <Color id="aqua">Sourceberry</Color>
</Row>

Crafted using <CommandLink command="/guideme open @s bloodmagic:guide bloodmagic:crafting.md" title="Open GuideMe Page" close={true}><Color id="red">Blood Magic Alchemy Arrays</Color></CommandLink>, <ItemLink id="sourceberry_bush" /> Bushes drop Sourceberries when harvested. Eating a Sourceberry grants <Color id="green">Mana Regen</Color> for a few seconds.

These can also be used to make Mana Regen potions.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="dominion_wand" />
  ### <Color id="aqua">Dominion Wand</Color>
</Row>

The Dominion Wand is the essential tool for configuring Source Relays, automation creatures, and other magical connections. Use it on the source block, then on a target block to create a connection. Sneak-use on a block to clear its connections. Sneak-use in the air to switch to <Color id="green">Strict mode</Color>, which lets you specify the exact side of a block to connect. The wand is also used to control Familiars.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Sourcelinks</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="yellow">Note:</Color> Sourcelinks are gated behind progression — you cannot obtain them until you have left <Color id="red">Hel</Color> and reached the realms beyond.

<ItemImage id="minecraft:air" scale="0.25"/>

Sourcelinks generate Source from various activities in the world. Place them near a <ItemLink id="source_jar" /> to automatically fill it.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="volcanic_sourcelink" />
  ### <Color id="aqua">Volcanic Sourcelink</Color>
</Row>

Generates Source from burnable items like Coal or Logs, either dropped nearby or placed on pedestals. Archwood Logs produce bonus Source, with <Color id="green">Blazing Archwood</Color> generating the most.

As it produces Source, the Volcanic Sourcelink generates heat, converting stone blocks within a 3x3 area into Magma Blocks and eventually Lava. If the Lava is uncovered, a <Color id="red">Lava Lily</Color> forms on top.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="agronomic_sourcelink" />
  ### <Color id="aqua">Agronomic Sourcelink</Color>
</Row>

Generates Source from crop and tree growth within <Color id="green">15 blocks</Color>. Magical plants such as Mageblooms, Source Berry Bushes, and Archwood Saplings grant bonus Source. Generated Source is deposited into Source Jars within 5 blocks. <Color id="yellow">Note:</Color> Bonemealing does not count as growth for Source generation.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="vitalic_sourcelink" />
  ### <Color id="aqua">Vitalic Sourcelink</Color>
</Row>

Generates Source from mob deaths and animal breeding nearby. Also passively generates Source from baby animals in the area, and accelerates their growth.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alchemical_sourcelink" />
  ### <Color id="aqua">Alchemical Sourcelink</Color>
</Row>

Generates Source by consuming potions from adjacent Potion Jars. More complex potions produce more Source, its duration and level each increase the yield, with multipliers for each effect a potion contains. Automate with <Color id="green">Wixies</Color> for a self-sustaining Source supply.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mycelial_sourcelink" />
  ### <Color id="aqua">Mycelial Sourcelink</Color>
</Row>

Generates Source from nearby food items, with a bonus based on the food's nourishment value. <Color id="green">Source Berry</Color> food generates more than non-magical alternatives. Feed it using nearby pedestals.

As a side effect, it converts Grass and Dirt in the 3x3 below it into Mycelium and grows mushrooms in nearby empty spaces.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="starbunclemania:fluid_sourcelink" />
  ### <Color id="aqua">Fluid Sourcelink</Color>
</Row>

Generates Source from fluids. It will automatically drain from tanks below it if they are compatible (check JEI for a full list of fluids).

Added by the Starbuncle Mania addon.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Реле Source</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Source Relays передают Source между сосудами и устройствами. Use the <ItemLink id="dominion_wand" /> to create connections: use the wand on the source block, then use it on the target. Sneak-use the wand on a Relay to clear its connections. Relays have a default range of <Color id="green">30 blocks</Color>.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="relay" />
  <ItemIcon id="relay_collector" />
  <ItemIcon id="relay_deposit" />
  <ItemIcon id="relay_splitter" />
  <ItemIcon id="relay_warp" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

- **Relay** - Basic Source transport between linked points within 30 blocks.
- **Collector Relay** - Automatically pulls Source from unlinked Source Jars within 5 blocks.
- **Deposit Relay** - Automatically deposits Source into unlinked Source Jars within 5 blocks. Ideal for Source storage rooms.
- **Splitter Relay** - Splits Source to multiple destinations at once with higher throughput than a standard Relay.
- **Warp Relay** - Teleports Source to other Warp Relays at any distance, but transfers beyond 30 blocks have a chance to lose some Source.

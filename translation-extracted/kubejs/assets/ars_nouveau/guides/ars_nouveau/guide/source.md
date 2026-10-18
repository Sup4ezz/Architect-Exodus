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

  Source is the magical energy that powers all of Ars Nouveau's devices, from the Imbuement Chamber to the Enchanting Apparatus. Gather it with Источники Source, store it in Source Jars, и transport it with Relays.
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

Source Jars store Source generated from nearby Источники Source. Many blocks и recipes require Source to function, so you will need both a way to generate it и a way to store it. Place a Source Jar near any Sourcelink и it will fill over time.

При разрушении сосуд сохраняет накопленную Source. Компаратор рядом с Source Jar выдаёт сигнал в зависимости от уровня заполнения.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="sourceberry_bush" />
  ### <Color id="aqua">Sourceberry</Color>
</Row>

Crafted using <CommandLink command="/guideme open @s bloodmagic:guide bloodmagic:crafting.md" title="Open GuideMe Page" close={true}><Color id="red">Blood Magic Alchemy Arrays</Color></CommandLink>, <ItemLink id="sourceberry_bush" /> Кусты дают Sourceberries при сборе урожая. Употребление Sourceberry даёт эффект <Color id="green">Mana Regen</Color> на несколько секунд.

Из них также можно создавать зелья Mana Regen.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="dominion_wand" />
  ### <Color id="aqua">Dominion Wand</Color>
</Row>

Dominion Wand is the essential tool for configuring Реле Source, automation creatures, и other magical connections. Use it on the source block, then on a target block to create a connection. Sneak-use on a block to clear its connections. Sneak-use in the air to switch to <Color id="green">Strict mode</Color>, which lets you specify the exact side of a block to connect. wand is also used to control Фамильяры.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Источники Source</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="yellow">Note:</Color> Источники Source are gated behind progression — you cannot obtain them until you have left <Color id="red">Hel</Color> и reached the realms beyond.

<ItemImage id="minecraft:air" scale="0.25"/>

Источники Source generate Source from various activities in the world. Place them near a <ItemLink id="source_jar" /> , чтобы автоматически наполнять его.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="volcanic_sourcelink" />
  ### <Color id="aqua">Volcanic Sourcelink</Color>
</Row>

Generates Source from burnable items , например Coal or Logs, either dropped nearby or placed on pedestals. Archwood Logs produce bonus Source, with <Color id="green">Blazing Archwood</Color> .

As it produces Source, the Volcanic Sourcelink generates heat, converting stone blocks within a 3x3 area into Magma Blocks и eventually Lava. If the Lava is uncovered, a <Color id="red">Lava Lily</Color> .

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="agronomic_sourcelink" />
  ### <Color id="aqua">Agronomic Sourcelink</Color>
</Row>

Generates Source from crop и tree growth within <Color id="green">15 blocks</Color>. Magical plants such as Mageblooms, Source Berry Bushes, и Archwood Saplings grant bonus Source. Generated Source is deposited into Source Jars within 5 блоков. <Color id="yellow">Note:</Color> Использование костной муки не считается ростом для производства Source.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="vitalic_sourcelink" />
  ### <Color id="aqua">Vitalic Sourcelink</Color>
</Row>

Generates Source from mob deaths и animal breeding . Also passively generates Source from baby animals in the area, и accelerates their growth.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alchemical_sourcelink" />
  ### <Color id="aqua">Alchemical Sourcelink</Color>
</Row>

Generates Source by consuming potions from adjacent Potion Jars. More complex potions produce more Source, its duration и level each increase the yield, with multipliers for each effect a potion contains. Automate with <Color id="green">Wixies</Color> для автономного производства Source.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mycelial_sourcelink" />
  ### <Color id="aqua">Mycelial Sourcelink</Color>
</Row>

Производит Source из еды поблизости; количество зависит от питательности. <Color id="green">Source Berry</Color> даёт больше Source, чем обычная пища. Подавайте еду с помощью ближайших пьедесталов.

As a side effect, it converts Grass и Dirt in the 3x3 below it into Mycelium и grows mushrooms in nearby empty spaces.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="starbunclemania:fluid_sourcelink" />
  ### <Color id="aqua">Fluid Sourcelink</Color>
</Row>

Производит Source из жидкостей. Если жидкость поддерживается, устройство автоматически забирает её из резервуаров снизу. Полный список смотрите в JEI.

Добавлено дополнением Starbuncle Mania.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Реле Source</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Реле Source transport Source between jars и devices. Use the <ItemLink id="dominion_wand" /> для создания соединения: сначала примените жезл к источнику, затем к цели. Зажмите Shift и примените жезл к Relay, чтобы удалить его связи. Стандартный радиус Relay — <Color id="green">30 blocks</Color>.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="relay" />
  <ItemIcon id="relay_collector" />
  <ItemIcon id="relay_deposit" />
  <ItemIcon id="relay_splitter" />
  <ItemIcon id="relay_warp" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

- **Relay** - Basic Source transport between linked points within 30 блоков.
- **Collector Relay** - Automatically pulls Source from unlinked Source Jars within 5 блоков.
- **Deposit Relay** - Automatically deposits Source into unlinked Source Jars within 5 блоков. Ideal for Source storage rooms.
- **Splitter Relay** - Одновременно распределяет Source по нескольким направлениям и имеет более высокую пропускную способность, чем обычный Relay.
- **Warp Relay** - Передаёт Source другим Warp Relays на любом расстоянии, но при передаче дальше 30 блоков часть энергии может потеряться.

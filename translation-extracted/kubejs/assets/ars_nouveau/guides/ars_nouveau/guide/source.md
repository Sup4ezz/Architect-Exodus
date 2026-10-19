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

Sourceberry Bushes, которые можно вырастить с помощью <CommandLink command="/guideme open @s bloodmagic:guide bloodmagic:crafting.md" title="Открыть страницу руководства" close={true}><Color id="red">алхимических кругов Blood Magic</Color></CommandLink>, дают ягоды Sourceberry при сборе урожая. Съеденная Sourceberry на несколько секунд накладывает эффект <Color id="green">Mana Regen</Color>.

Ягоды также используются для приготовления зелий Mana Regen.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="dominion_wand" />
  ### <Color id="aqua">Dominion Wand</Color>
</Row>

Dominion Wand — основной инструмент для настройки Source Relays, автоматизированных существ и других магических соединений. Используйте жезл на исходном блоке, а затем на целевом, чтобы создать связь. Примените его к блоку с зажатым Shift, чтобы удалить связи. Используйте жезл с зажатым Shift в воздухе, чтобы включить <Color id="green">Strict mode</Color>, позволяющий выбрать конкретную сторону блока для подключения. Жезл также используется для управления фамильярами.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Sourcelinks</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="yellow">Note:</Color> Sourcelinks are gated behind progression — you cannot obtain them until you have left <Color id="red">Hel</Color> and reached the realms beyond.

<ItemImage id="minecraft:air" scale="0.25"/>

Sourcelinks производят Source, используя различные действия и процессы в мире. Разместите их рядом с <ItemLink id="source_jar" />, чтобы автоматически наполнять сосуд.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="volcanic_sourcelink" />
  ### <Color id="aqua">Volcanic Sourcelink</Color>
</Row>

Производит Source из горючих предметов, например Coal или Logs, выброшенных рядом либо размещённых на пьедесталах. Archwood Logs дают дополнительную Source, а <Color id="green">Blazing Archwood</Color> — больше всего.

Во время производства Source Volcanic Sourcelink выделяет тепло: каменные блоки в области 3×3 превращаются в Magma Blocks, а затем в Lava. Если лава не накрыта блоком, сверху появляется <Color id="red">Lava Lily</Color>.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="agronomic_sourcelink" />
  ### <Color id="aqua">Agronomic Sourcelink</Color>
</Row>

Производит Source при росте культур и деревьев в радиусе <Color id="green">15 блоков</Color>. Магические растения, например Mageblooms, Source Berry Bushes и Archwood Saplings, дают дополнительную Source. Энергия поступает в Source Jars в радиусе 5 блоков. <Color id="yellow">Примечание:</Color> использование костной муки не считается ростом для генерации Source.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="vitalic_sourcelink" />
  ### <Color id="aqua">Vitalic Sourcelink</Color>
</Row>

Производит Source при гибели мобов и размножении животных поблизости. Также пассивно получает Source от детёнышей в области действия и ускоряет их рост.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alchemical_sourcelink" />
  ### <Color id="aqua">Alchemical Sourcelink</Color>
</Row>

Производит Source, поглощая зелья из соседних Potion Jars. Чем сложнее зелье, тем больше Source оно даёт: длительность, уровень и каждый дополнительный эффект повышают выход энергии. Автоматизируйте процесс с помощью <Color id="green">Wixies</Color>, чтобы создать самоподдерживающийся источник Source.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mycelial_sourcelink" />
  ### <Color id="aqua">Mycelial Sourcelink</Color>
</Row>

Производит Source из находящейся поблизости еды; количество энергии зависит от её питательности. Еда из <Color id="green">Source Berry</Color> даёт больше Source, чем обычные продукты. Подавайте пищу через расположенные рядом пьедесталы.

Дополнительно преобразует Grass и Dirt в области 3×3 под собой в Mycelium и выращивает грибы на соседних свободных блоках.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="starbunclemania:fluid_sourcelink" />
  ### <Color id="aqua">Fluid Sourcelink</Color>
</Row>

Производит Source из жидкостей. Если жидкость поддерживается, Sourcelink автоматически забирает её из резервуаров под собой. Полный список подходящих жидкостей смотрите в JEI.

Добавлено дополнением Starbuncle Mania.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Реле Source</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Source Relays передают Source между сосудами и устройствами. Используйте <ItemLink id="dominion_wand" />, чтобы создать соединение: сначала примените жезл к исходному блоку, затем к целевому. Используйте жезл с зажатым Shift на Relay, чтобы удалить его соединения. Стандартная дальность реле — <Color id="green">30 блоков</Color>.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="relay" />
  <ItemIcon id="relay_collector" />
  <ItemIcon id="relay_deposit" />
  <ItemIcon id="relay_splitter" />
  <ItemIcon id="relay_warp" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

- **Relay** — передаёт Source между связанными точками в пределах 30 блоков.
- **Collector Relay** — автоматически забирает Source из неподключённых Source Jars в радиусе 5 блоков.
- **Deposit Relay** — автоматически помещает Source в неподключённые Source Jars в радиусе 5 блоков. Подходит для комнат хранения Source.
- **Splitter Relay** — распределяет Source сразу по нескольким направлениям и имеет большую пропускную способность, чем обычное Relay.
- **Warp Relay** — передаёт Source между Warp Relays на любом расстоянии, но при передаче дальше 30 блоков часть Source может потеряться.

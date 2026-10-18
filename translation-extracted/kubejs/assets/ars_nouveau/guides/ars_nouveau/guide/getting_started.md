---
navigation:
  title: Начало работы
  icon: ars_nouveau:source_gem
  parent: index.md
  position: 1
item_ids:
  - ars_nouveau:novice_spell_book
  - ars_nouveau:apprentice_spell_book
  - ars_nouveau:archmage_spell_book
  - ars_nouveau:source_gem
  - ars_nouveau:imbuement_chamber
  - ars_nouveau:scribes_table
  - ars_nouveau:archwood_log
  - ars_nouveau:magebloom_crop
  - ars_nouveau:magebloom_fiber
  - ars_nouveau:blank_parchment
---
# <Color id="light_purple">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Начало работы</Color>
  <ItemImage id="source_gem" scale="2" />

  Добро пожаловать в Ars Nouveau! Это руководство поможет начать создавать заклинания: от поиска природных ресурсов до постройки первых магических механизмов.

  Чтобы приступить к изучению мода, сначала пройдите <CommandLink command="/ftbquests open_book 00770A59B8189794" title="Перейти к квесту о лабиринте" close={true}><Color id="red">лабиринт Хельхейма</Color></CommandLink>.
</Column>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Генерация мира</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Некоторые ресурсы естественным образом появляются в измерениях, отличных от <Color id="red">Хельхейма</Color>. <Color id="green">Archwood Trees</Color> имеют несколько декоративных вариантов и используются для создания Casting Wands. <Color id="green">Source Berries</Color> не растут в мире: их можно получить с помощью <CommandLink command="/guideme open @s bloodmagic:guide bloodmagic:crafting.md" title="Открыть страницу руководства" close={true}><Color id="red">алхимических кругов Blood Magic</Color></CommandLink>. Ягоды используются для создания зелий восстановления маны. <ItemLink id="source_gem" /> получают, наделяя аметист или лазурит энергией Source в <ItemLink id="imbuement_chamber" />. Процесс можно ускорить, подавая Source.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Получение Source Gems</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="imbuement_chamber" />
  ### <Color id="aqua">Imbuement Chamber</Color>
</Row>

Создайте <Color id="green">Imbuement Chamber</Color> и поместите внутрь аметист или лазурит. Камера наполнит предмет энергией Source и создаст <ItemLink id="source_gem" />. Source накапливается пассивно; также камера может получать энергию из ближайших Source Jars.

<Color id="green">Imbuement Chamber</Color> можно создать в <Color id="red">Хельхейме</Color>, используя Cthonic Gold.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Книги заклинаний</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="novice_spell_book" />
  ### <Color id="aqua">Ars Spell Books</Color>
</Row>

Три уровня книг открывают доступ к всё более мощным глифам. <Color id="green">Novice Spell Book</Color> открывает заклинания первого уровня, <Color id="green">Apprentice Spell Book</Color> — второго, а <Color id="green">Archmage Spell Book</Color> — третьего.

Книги более высокого уровня дают больше ячеек для заклинаний, увеличивают запас маны и скорость её восстановления. При улучшении книги все изученные заклинания переносятся в новую. Книги также можно окрашивать, меняя их внешний вид.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Изучение новых глифов</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="scribes_table" />
  ### <Color id="aqua">Scribe's Table</Color>
</Row>

Scribe's Table используется для изучения новых глифов. Примените книгу заклинаний к столу, чтобы открыть кодекс. Для каждого глифа требуются определённые предметы (рецепты можно посмотреть в JEI) и очки опыта.

Выберите глиф и бросьте необходимые предметы на стол. После этого стол запишет новый глиф в книгу заклинаний. Scribe's Table также используется для нанесения заклинаний на [снаряжение, жезлы и пергаменты заклинаний](equipment.md).

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Мана</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

При сотворении заклинаний расходуется мана. Её максимальный запас и скорость восстановления можно увеличить несколькими способами:

- Носить комплекты <Color id="green">Mage Броня</Color>.
- Накладывать на снаряжение зачарования <Color id="green">Mana Boost</Color> и <Color id="green">Mana Regen</Color>.
- Изучать новые глифы в книге заклинаний.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Материалы</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="magebloom_crop" />
  ### <Color id="aqua">Magebloom</Color>
</Row>

С помощью Enchanting Apparatus можно создать семена <Color id="light_purple">Magebloom</Color>. После сбора урожая растение даёт <ItemLink id="magebloom_fiber" /> — ключевой ингредиент для создания магической брони.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="blank_parchment" />
  ### <Color id="aqua">Blank Parchment</Color>
</Row>

Из Magebloom Fiber также можно изготовить <Color id="green">Blank Parchment</Color>. Чтобы записать заклинание, примените пергамент к Scribe's Table, выберите заклинание в книге, затем зажмите Shift и щёлкните ПКМ по пергаменту. Spell Parchment используется для создания турелей заклинаний и других устройств.
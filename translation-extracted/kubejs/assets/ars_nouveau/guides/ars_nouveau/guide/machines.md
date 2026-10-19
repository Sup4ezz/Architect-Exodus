---
navigation:
  title: Механизмы
  icon: ars_nouveau:enchanting_apparatus
  parent: index.md
  position: 7
item_ids:
  - ars_nouveau:enchanting_apparatus
  - ars_nouveau:arcane_core
  - ars_nouveau:arcane_pedestal
  - ars_nouveau:storage_lectern
  - ars_nouveau:bookwyrm_charm
  - ars_nouveau:repository
  - ars_nouveau:potion_jar
  - ars_nouveau:potion_melder
  - ars_nouveau:potion_diffuser
  - ars_nouveau:mob_jar
  - ars_nouveau:runic_chalk
  - ars_nouveau:crystallizer
  - ars_nouveau:scryers_crystal
  - ars_nouveau:scryers_oculus
---
# <Color id="light_purple">Механизмы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Механизмы</Color>
  <ItemImage id="enchanting_apparatus" scale="2" />

  Ars Nouveau добавляет магические механизмы для создания предметов, хранения ресурсов, работы с зельями и удалённого наблюдения.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Enchanting Apparatus</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanting_apparatus" />
  ### <Color id="aqua">Enchanting Apparatus</Color>
</Row>

Основная станция для создания предметов в Ars Nouveau. Под ней должен находиться <ItemLink id="arcane_core" />, а <ItemLink id="arcane_pedestal" /> нужно разместить в пределах трёх блоков от Apparatus. Число пьедесталов зависит от рецепта и может достигать восьми.

Разложите ингредиенты рецепта по пьедесталам, затем примените к Apparatus предмет-результат, чтобы начать создание. Для некоторых рецептов также требуется Source из ближайших сосудов. Apparatus используется для создания механизмов, Curios, снаряжения, зачарованных предметов и улучшения брони.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Storage System</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="storage_lectern" />
  ### <Color id="aqua">Storage Lectern</Color>
</Row>

Позволяет просматривать и управлять несколькими подключёнными инвентарями, а также создавать предметы через единый интерфейс. Свяжите инвентари в пределах <Color id="green">30 блоков</Color> с помощью <Color id="green">Dominion Wand</Color>. Каждый привязанный <Color id="green">Bookwyrm</Color> обслуживает до восьми инвентарей; для расширения сети добавьте больше Bookwyrms.

Если переименовать сундук на наковальне или с помощью заклинания <Color id="green">Name</Color>, в интерфейсе Lectern для него появится отдельная вкладка — так проще организовать хранилище.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="bookwyrm_charm" />
  ### <Color id="aqua">Bookwyrm Charm</Color>
</Row>

Используйте предмет на Storage Lectern, чтобы добавить Bookwyrm в систему. Bookwyrm получают с помощью <Color id="green">Ritual of Awakening</Color>, усилив ритуал предметами Book и Quill.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="repository" />
  ### <Color id="aqua">Repository</Color>
</Row>

Хранит столько же предметов, сколько двойной сундук. Ему можно задать имя для отображения. Хорошо работает в сети Storage Lectern.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Potion System</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="potion_jar" />
  ### <Color id="aqua">Potion Jar</Color>
</Row>

Хранит до 100 доз зелья. Заполняйте или опустошайте сосуд с помощью бутылочек, фляг или стрел. Wixies используют Potion Jars для автоматического приготовления зелий. Сосуд можно заблокировать с помощью <Color id="green">Dominion Wand</Color>, чтобы избежать случайных изменений. Компаратор выдаёт сигнал в зависимости от заполнения.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="potion_melder" />
  ### <Color id="aqua">Potion Melder</Color>
</Row>

Объединяет зелья из двух входных сосудов и помещает результат в выходной сосуд. Для работы требуется Source. Удобен для создания зелий с несколькими эффектами.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="potion_diffuser" />
  ### <Color id="aqua">Potion Diffuser</Color>
</Row>

Забирает зелье из подключённого сосуда и примерно каждые 10 минут накладывает его эффект на ближайших существ. Подходит для создания областей с постоянными усилениями.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Other Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mob_jar" />
  ### <Color id="aqua">Mob Jar</Color>
</Row>

Захватывает и хранит мобов с помощью <Color id="green">Ritual of Containment</Color>. Если поставить Note Block над Mob Jar, он будет воспроизводить звуки захваченного существа.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="runic_chalk" />
  ### <Color id="aqua">Runic Chalk</Color>
</Row>

Размещает на земле постоянные руны, которые накладывают записанные заклинания на существ, проходящих по ним. Руны автоматически заряжаются от ближайших Source Jars.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="scryers_crystal" />
  ### <Color id="aqua">Scryer's Crystal & Oculus</Color>
</Row>

Инструменты для удалённого наблюдения. Через <ItemLink id="scryers_crystal" /> можно смотреть на удалённую местность. <ItemLink id="scryers_oculus" /> вместе со Scryer's Scrolls позволяет получать доступ к нескольким кристаллам из одного места.

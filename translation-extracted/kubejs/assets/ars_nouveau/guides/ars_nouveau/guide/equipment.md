---
navigation:
  title: Снаряжение
  icon: ars_nouveau:enchanters_sword
  parent: index.md
  position: 4
item_ids:
  - ars_nouveau:enchanters_sword
  - ars_nouveau:enchanters_shield
  - ars_nouveau:enchanters_mirror
  - ars_nouveau:enchanters_eye
  - ars_nouveau:spell_bow
  - ars_nouveau:spell_crossbow
  - ars_nouveau:wand
  - ars_nouveau:sorcerer_hood
  - ars_nouveau:sorcerer_robes
  - ars_nouveau:sorcerer_leggings
  - ars_nouveau:sorcerer_boots
  - ars_nouveau:arcanist_hood
  - ars_nouveau:arcanist_robes
  - ars_nouveau:arcanist_leggings
  - ars_nouveau:arcanist_boots
  - ars_nouveau:battlemage_hood
  - ars_nouveau:battlemage_robes
  - ars_nouveau:battlemage_leggings
  - ars_nouveau:battlemage_boots
  - ars_nouveau:alteration_table
---
# <Color id="light_purple">Снаряжение</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Снаряжение</Color>
  <ItemImage id="enchanters_sword" scale="2" />

  Ars Nouveau предлагает магическое оружие, комплекты брони и материалы для создания снаряжения, дополняющего ваши заклинания.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Броня</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

В Ars Nouveau есть три комплекта брони, каждый со своими преимуществами:

- **Sorcerer** — слабее защищает от физических атак, зато имеет больше всего ячеек Thread для настройки бонусов.
- **Arcanist** — сбалансированные защита и количество ячеек Thread.
- **Battlemage** — обеспечивает наилучшую физическую защиту, но имеет меньше ячеек Thread.

Все три комплекта увеличивают <Color id="green">восстановление маны</Color>, пока надеты. Каждый комплект можно улучшить до трёх уровней с помощью Enchanting Apparatus. Улучшение открывает дополнительные и более мощные ячейки Thread.

<ItemGrid>
  <ItemIcon id="sorcerer_hood" />
  <ItemIcon id="sorcerer_robes" />
  <ItemIcon id="sorcerer_leggings" />
  <ItemIcon id="sorcerer_boots" />
  <ItemIcon id="arcanist_hood" />
  <ItemIcon id="arcanist_robes" />
  <ItemIcon id="arcanist_leggings" />
  <ItemIcon id="arcanist_boots" />
  <ItemIcon id="battlemage_hood" />
  <ItemIcon id="battlemage_robes" />
  <ItemIcon id="battlemage_leggings" />
  <ItemIcon id="battlemage_boots" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.5"/>

### <Color id="aqua">Стихийная броня</Color>

<ItemImage id="minecraft:air" scale="0.25"/>

- ars_elemental:air_hat
- ars_elemental:air_robes
- ars_elemental:air_leggings
- ars_elemental:air_boots

Каждая часть этой брони настроена на школу воздуха: усиливает глифы воздуха, снижает их стоимость и уменьшает урон от связанных с воздухом источников — падения, столкновений со стенами во время полёта и молний. Полный комплект преобразует предотвращённый урон в ману, поэтому падения становятся гораздо менее опасными.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="alteration_table" />
  ### <Color id="aqua">Alteration Table</Color>
</Row>

Thread — это особые бонусы, которые накладываются с помощью <ItemLink id="alteration_table" />. На каждой части магической брони есть как минимум одна <Color id="green">ячейка Thread</Color>; её уровень указан в подсказке предмета. Положите броню на подставку стола. На планшете отобразятся доступные ячейки — нажмите ПКМ по планшету, держа нужный Thread, чтобы применить его. Чтобы снять Thread, взаимодействуйте с отображением пустой рукой. Улучшение брони в Enchanting Apparatus открывает дополнительные ячейки Thread.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Оружие заклинателя</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Заклинания можно записывать на магическое снаряжение с помощью Scribe's Table. У каждого предмета уже есть своя форма <Color id="green">Form</Color>, поэтому не добавляйте Form в записываемое заклинание: так вы освободите ячейку для дополнительных эффектов и усилений.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanters_sword" />
  ### <Color id="aqua">Enchanter's Sword</Color>
</Row>

Перед нанесением урона применяет к цели заклинание с формой <Color id="light_purple">Touch</Color>. Также добавляет одно дополнительное усиление <Color id="green">Amplify</Color> к последнему эффекту заклинания.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanters_shield" />
  ### <Color id="aqua">Enchanter's Shield</Color>
</Row>

При блокировании урона на короткое время повышает <Color id="green">восстановление маны</Color> и <Color id="green">урон заклинаний</Color>. Со временем щит самостоятельно чинится, расходуя ману из вашего запаса.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanters_mirror" />
  ### <Color id="aqua">Enchanter's Mirror</Color>
</Row>

Применяет заклинание с формой <Color id="light_purple">Self</Color>, сниженной стоимостью маны и увеличенной длительностью. Например, если записать только <Color id="green">Heal</Color>, зеркало будет исцелять вас при использовании.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spell_bow" />
  ### <Color id="aqua">Spell Bow</Color>
</Row>

Если на лук записано заклинание, выпущенные стрелы становятся Spell Arrows и применяют его при попадании. Если обычных стрел нет, выпускается магическая стрела с нулевым уроном. При нехватке маны лук стреляет обычными стрелами. <Color id="green">Augment Arrows</Color> позволяют дополнительно усилить записанное заклинание.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spell_crossbow" />
  ### <Color id="aqua">Spell Crossbow</Color>
</Row>

Работает как Spell Bow, но выполнен в виде арбалета. Также поддерживает Augment Arrows.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="wand" />
  ### <Color id="aqua">Wand</Color>
</Row>

Хранит одно заклинание, которое всегда начинается с <Color id="light_purple">Projectile → Accelerate</Color>. Записывайте только глифы эффектов: например, если добавить <Color id="green">Break</Color>, при использовании получится <Color id="green">Projectile → Accelerate → Break</Color>. Wand обходит обычное ограничение в 10 глифов, позволяя создавать более длинные цепочки заклинаний.

<ItemImage id="minecraft:air" scale="0.25"/>

***

Нужны аксессуары и полезные предметы? Перейдите к разделу [Аксессуары и полезные предметы](trinkets.md).

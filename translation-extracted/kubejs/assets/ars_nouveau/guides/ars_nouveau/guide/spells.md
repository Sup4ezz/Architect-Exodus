---
navigation:
  title: Создание заклинаний
  icon: ars_nouveau:glyph_projectile
  parent: index.md
  position: 2
item_ids:
  - ars_nouveau:glyph_projectile
  - ars_nouveau:glyph_touch
  - ars_nouveau:glyph_self
  - ars_nouveau:glyph_underfoot
  - ars_nouveau:blank_glyph
  - ars_nouveau:spell_parchment
---
# <Color id="light_purple">Создание заклинаний</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Создание заклинаний</Color>
  <ItemImage id="glyph_projectile" scale="2" />

  Заклинания Ars Nouveau собираются из отдельных глифов, расположенных в цепочку. Понимание системы глифов — ключ к освоению магии.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Первое заклинание</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Чтобы создать заклинание, возьмите Spell Book и нажмите <Color id="green"><KeyBind id="key.ars_nouveau.open_book" /></Color> (по умолчанию C), чтобы открыть меню создания заклинаний. Каждое заклинание начинается с глифа <Color id="aqua">Form</Color>, определяющего способ применения. Выберите <Color id="green">Projectile</Color> в качестве формы, затем добавьте <Color id="aqua">Effect</Color>, например <Color id="green">Harm</Color>, чтобы определить действие заклинания. Дайте заклинанию имя и нажмите Save.

Стоимость заклинания в мане отображается внизу меню. Справа находятся пронумерованные ячейки сохранённых заклинаний. Слева можно менять цвет заклинаний и настраивать параметры.

Испытайте новое заклинание в мире. Многие полезные эффекты, включая <Color id="green">Break</Color>, относятся ко второму уровню (Tier 2): чтобы открыть их, улучшите Spell Book с помощью Scribe's Table. Для разрушения особо прочных блоков, например Obsidian, дополнительно нужны <Color id="green">Augments</Color>, усиливающие заклинание. Новые глифы изучаются с помощью [Scribe's Table](getting_started.md).

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Как работают заклинания</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Каждое заклинание начинается с глифа <Color id="green">Form</Color>, определяющего способ применения. После Form добавьте глифы <Color id="green">Effect</Color>, задающие действие заклинания, и <Color id="green">Augment</Color>, изменяющие его свойства.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="glyph_projectile" />
  ### <Color id="aqua">Глифы формы</Color>
</Row>

<ItemImage id="minecraft:air" scale="0.25"/>


- <ItemLink id="glyph_projectile" /> - Выпускает снаряд заклинания вперёд
- <ItemLink id="glyph_touch" /> - Применяет заклинание при касании
- <ItemLink id="glyph_self" /> - Применяет заклинание к себе
- <ItemLink id="glyph_underfoot" /> - Применяет заклинание к блоку под вами

<ItemImage id="minecraft:air" scale="0.25"/>

После Form добавьте глифы эффектов, например Break, Harm, Heal, Ignite или Freeze. Затем настройте заклинание с помощью усилений Amplify, Extend Time, AOE, Pierce и других модификаторов.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Уровни глифов</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Глифы разделены на три уровня. Для их изучения нужна книга заклинаний соответствующего уровня или выше.

### <Color id="aqua">Tier 1 — базовые эффекты</Color>

Harm, Harvest, Ignite, Freeze, Light, Snare, Launch, Pull, Pickup, Place Block и другие глифы составляют основу вашего арсенала.

### <Color id="aqua">Tier 2 — продвинутые эффекты</Color>

Break, AOE, Heal, Grow, Smelt, Explosion, Cold Snap, Gravity, Fortune, Exchange, Invisibility, Wind Shear и другие глифы дают гораздо больше возможностей и силы.

### <Color id="aqua">Tier 3 — мощные эффекты</Color>

Lightning, Blink, Wither, Hex, Fangs, Summon Undead/Vex/Decoy, Glide, Wall, Linger, Split, Burst и другие глифы — самые мощные доступные эффекты, способные создавать разрушительные комбинации.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Хранение заклинаний</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spell_parchment" />
  ### <Color id="aqua">Spell Parchment</Color>
</Row>

Заклинания можно записывать на <Color id="green">Spell Parchment</Color> с помощью Scribe's Table, чтобы использовать их отдельно от книги заклинаний.

Spell Parchment используется для нескольких задач:

- <Color id="green">Spell Turrets</Color> — автоматизируют применение заклинаний: турели стреляют записанными заклинаниями
- <Color id="green">Reactive Enchantment</Color> — позволяет накладывать на снаряжение заклинания, срабатывающие при определённых событиях
- <Color id="green">Runic Chalk</Color> — создаёт на земле руны, активирующие заклинания

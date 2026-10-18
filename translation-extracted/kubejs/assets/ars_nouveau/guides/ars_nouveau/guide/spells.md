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

To create a spell, hold a Spell Book и press <Color id="green"><KeyBind id="key.ars_nouveau.open_book" /></Color> (по умолчанию C), чтобы открыть меню создания заклинаний. Каждое заклинание начинается с глифа <Color id="aqua">Form</Color> , определяющего способ применения. Выберите <Color id="green">Projectile</Color> в качестве формы, затем добавьте <Color id="aqua">Effect</Color> , например <Color id="green">Harm</Color> to define what the spell does. Name your spell и click Save.

mana cost is displayed at the bottom of the menu. On the right side, numbered slots store your saved spells. On the left, you can change spell colors и adjust settings.

Попробуйте новое заклинание в мире. Многие полезные эффекты, включая <Color id="green">Break</Color>) live in Tier 2 — to unlock them, build the upgraded Spell Book at the Scribe's Table. Harder blocks , например Obsidian additionally require <Color id="green">Augments</Color> , усиливающие заклинание. Новые глифы изучаются с помощью [Scribe's Table](getting_started.md).

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Как работают заклинания</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Каждое заклинание начинается с глифа <Color id="green">Form</Color> , определяющего способ применения. После Form добавьте <Color id="green">Effect</Color> glyphs to define what the spell does, и <Color id="green">Augment</Color> , изменяющие поведение заклинания.

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

После Form добавьте глифы эффектов, например Break, Harm, Heal, Ignite, Freeze, и many more . Затем усилите их глифами Amplify, Extend Time, AOE, Pierce, и other modifiers , чтобы дополнительно настроить заклинание.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Уровни глифов</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Глифы разделены на три уровня. Для их изучения нужна книга заклинаний соответствующего уровня или выше.

### <Color id="aqua">Tier 1 - Basic Effects</Color>

Harm, Harvest, Ignite, Freeze, Light, Snare, Launch, Pull, Pickup, Place Block, и more. Это основа вашего арсенала заклинаний.

### <Color id="aqua">Tier 2 - Advanced Effects</Color>

Break, AOE, Heal, Grow, Smelt, Explosion, Cold Snap, Gravity, Fortune, Exchange, Invisibility, Wind Shear, и more. These provide much greater versatility и power.

### <Color id="aqua">Tier 3 - Powerful Effects</Color>

Lightning, Blink, Wither, Hex, Fangs, Summon Undead/Vex/Decoy, Glide, Wall, Linger, Split, Burst, и more. Это самые мощные доступные глифы, способные создавать разрушительные эффекты.

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

Spell Parchment используется несколькими способами:

- <Color id="green">Spell Turrets</Color> - Автоматизируйте применение заклинаний с помощью турелей, стреляющих записанными заклинаниями
- <Color id="green">Reactive Enchantment</Color> - Наносите на снаряжение заклинания, срабатывающие при определённых событиях
- <Color id="green">Runic Chalk</Color> - Создавайте на земле руны, активирующие заклинания

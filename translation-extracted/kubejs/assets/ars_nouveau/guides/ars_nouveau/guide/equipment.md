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

  Ars Nouveau предлагает оружие, усиленное магией, комплекты брони и материалы для создания снаряжения, дополняющего ваши заклинания.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Броня</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemImage id="minecraft:air" scale="0.25"/>

В Ars Nouveau есть три комплекта брони, каждый со своими преимуществами:

- **Sorcerer** - Низкая физическая защита, но больше всего ячеек Thread для настройки бонусов.
- **Arcanist** - Сбалансированные защита и количество ячеек Thread.
- **Battlemage** - Наивысшая физическая защита, но меньше ячеек Thread.

Все три комплекта увеличивают <Color id="green">mana regeneration</Color> при ношении. Каждый комплект можно улучшить до третьего уровня с помощью Enchanting Apparatus.

Броня sets can also be upgraded via the <ItemLink id="enchanting_apparatus"/> до третьего уровня, открывая дополнительные и более мощные ячейки Thread.

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


### <Color id="aqua">Elemental Броняs</Color>

<ItemImage id="minecraft:air" scale="0.25"/>

  - ars_elemental:air_hat
  - ars_elemental:air_robes
  - ars_elemental:air_leggings
  - ars_elemental:air_boots

Attuned to the school of air, each piece of this armor will amplify air glyphs, make them cheaper и reduce air-related damage lik falling, hitting walls while flying, и lightning. When all pieces are equipped  the damage reduced is converted into mana, falling won't be a problem anymore.

<ItemImage id="minecraft:air" scale="0.5"/>


<Row>
  <ItemImage id="alteration_table" />
  ### <Color id="aqua">Alteration Table</Color>
</Row>

Нити (бонусы) применяются с помощью <ItemLink id="alteration_table" /> . У каждой части магического снаряжения есть как минимум одна <Color id="green">Thread Slot</Color>, with the tier shown in the item's tooltip. To use the table, place your armor on the stand. tablet displays available slots — right click a Thread onto the tablet to apply it. To remove a thread, interact with the display using an empty hand. Броня tiers can be upgraded at the Enchanting Apparatus for additional Thread Slots.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Оружие заклинателя</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Spells can be inscribed directly onto magical equipment at the Scribe's Table. Снаряжение casts a specific <Color id="green">Form</Color>; поэтому не добавляйте в записываемое заклинание глиф Form. Так освободится ячейка для дополнительных эффектов и усилений.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanters_sword" />
  ### <Color id="aqua">Enchanter's Sword</Color>
</Row>

Сотворяет заклинание <Color id="light_purple">Touch</Color> по цели перед нанесением урона. Меч также добавляет одно дополнительное усиление <Color id="green">Amplify</Color> к последнему эффекту заклинания.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanters_shield" />
  ### <Color id="aqua">Enchanter's Shield</Color>
</Row>

Даёт бонусы <Color id="green">Mana Regen</Color> и <Color id="green">Spell Damage</Color> на короткое время при блокировании урона. Со временем самостоятельно чинится, расходуя ману из вашего запаса.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanters_mirror" />
  ### <Color id="aqua">Enchanter's Mirror</Color>
</Row>

Сотворяет заклинание <Color id="light_purple">Self</Color>-targeted spell with a mana discount и bonus duration. For example, inscribing just <Color id="green">Heal</Color> , зеркало будет лечить вас при использовании.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spell_bow" />
  ### <Color id="aqua">Spell Bow</Color>
</Row>

После записи заклинания стрелы превращаются в Spell Arrows и применяют заклинание при попадании. Если обычных стрел нет, выпускается магическая стрела с нулевым уроном. Если мана закончится, будут выпускаться обычные стрелы. <Color id="green">Augment Arrows</Color> могут дополнительно усилить записанное заклинание.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spell_crossbow" />
  ### <Color id="aqua">Spell Crossbow</Color>
</Row>

Работает как Spell Bow, но в форме арбалета. Также поддерживает Augment Arrows.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="wand" />
  ### <Color id="aqua">Wand</Color>
</Row>

Хранит одно заклинание, которое всегда начинается с <Color id="light_purple">Projectile -> Accelerate</Color> . Записывайте только глифы эффектов. Например, если записать <Color id="green">Break</Color> , при использовании будет сотворяться <Color id="green">Projectile -> Accelerate -> Break</Color> . Обходит стандартное ограничение в 10 глифов и позволяет создавать более длинные цепочки заклинаний.

<ItemImage id="minecraft:air" scale="0.25"/>

***

Looking for curios, trinkets, и utility items? See [Аксессуары и полезные предметы](trinkets.md).

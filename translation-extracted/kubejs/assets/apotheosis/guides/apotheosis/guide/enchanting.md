---
navigation:
  title: Зачарование
  icon: minecraft:enchanting_table
  position: 2
item_ids:
  - minecraft:enchanting_table
  - apotheosis:library
  - apotheosis:ender_library
  - apotheosis:scrap_tome
---
# <Color id="dark_purple">Зачарование</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Зачарование</Color>
  <ItemImage id="minecraft:enchanting_table" scale="2" />

  Apotheosis полностью перерабатывает систему зачарования Minecraft. Ограничение ванильного уровня 30 снято, полки могут повысить силу зачарования до 100-го уровня, а работу стола определяют пять новых характеристик.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Характеристики зачарования</Color>
</Column>

Apotheosis добавляет столу зачарования пять характеристик. Наведите курсор на интерфейс зачарования, чтобы увидеть текущие значения.

- <Color id="aqua">Eterna</Color> — основная характеристика. Каждое очко повышает максимальный уровень зачарования на 2. Обычные книжные полки дают Eterna до 30-го уровня, а специальные позволяют поднять его выше.
- <Color id="aqua">Quanta</Color> — определяет разброс результатов. Базовая сила зачарования умножается на случайное значение от (1 − Quanta) до (1 + Quanta). Чем выше Quanta, тем сильнее колебания: результат может быть как отличным, так и ужасным.
- <Color id="aqua">Arcana</Color> — влияет на вероятность редких зачарований и получение дополнительных зачарований. Default rarity weights are Common 10, Uncommon 5, Rare 3, Very Rare 1. Every 10% of Arcana shifts these weights toward rarer results. At 25% Arcana you are guaranteed at least 2 enchantments, and at 75% you get at least 3.
- <Color id="aqua">Rectification</Color> — Improves the lower bound of the Quanta roll. This makes your results more consistently good without reducing the upper bound. Higher is always better.
- <Color id="aqua">Clues</Color> — Each point reveals one additional enchantment in the enchanting table preview window, letting you make more informed decisions.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Enchantment Library</Color>
</Column>

<Row>
  <ItemImage id="library" />
  ### <Color id="aqua">Enchantment Library</Color>
</Row>

- apotheosis:ender_library

The Enchantment Library stores enchantments as points. Insert enchanted books to deposit enchantments, then click to extract individual books. The standard Library caps enchantment levels at XVI. The Library of Alexandria variant caps at XXXI.


<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Tomes & Scrapping</Color>
</Column>

<Color id="aqua">Tomes</Color> are specialized books that only receive certain types of enchantments when used at the enchanting table, letting you target weapon, armor, or tool enchantments specifically.

<Row>
  <ItemImage id="scrap_tome" />
  ### <Color id="aqua">Scrapping Tomes</Color>
</Row>

Scrapping Tomes extract enchantments from items when combined in an anvil:

- <Color id="gold">Basic Scrapping Tome:</Color> Recovers half of the item's enchantments. Destroys the item.
- <Color id="gold">Superior Scrapping Tome:</Color> Recovers all enchantments. Destroys the item.
- <Color id="gold">Extraction Tome:</Color> Recovers all enchantments and keeps the item intact.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Cobwebs</Color>
</Column>

Place a <Color id="aqua">Cobweb</Color> against an enchanting table to strip all enchantments from an item. Use a <Color id="aqua">Prismatic Cobweb</Color> to also remove curses.

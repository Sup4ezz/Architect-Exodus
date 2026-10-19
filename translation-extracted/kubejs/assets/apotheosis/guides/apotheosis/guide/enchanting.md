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
- <Color id="aqua">Arcana</Color> — влияет на вероятность редких зачарований и получения дополнительных зачарований. Базовые веса редкости: Common — 10, Uncommon — 5, Rare — 3, Very Rare — 1. Каждые 10% Arcana смещают веса в сторону более редких результатов. При 25% Arcana гарантировано как минимум 2 зачарования, а при 75% — как минимум 3.
- <Color id="aqua">Rectification</Color> — повышает нижнюю границу случайного значения Quanta. Благодаря этому результаты становятся стабильнее и чаще оказываются хорошими, не снижая возможный максимум. Чем выше значение, тем лучше.
- <Color id="aqua">Clues</Color> — каждое очко показывает ещё одно зачарование в окне предварительного просмотра стола, помогая принять более обоснованное решение.

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

Enchantment Library хранит зачарования в виде очков. Поместите зачарованную книгу внутрь, чтобы записать зачарования, затем нажмите на библиотеку, чтобы извлечь отдельные книги. Обычная Library ограничивает уровень зачарования значением XVI, а вариант Library of Alexandria — XXXI.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Фолианты и извлечение зачарований</Color>
</Column>

<Color id="aqua">Tomes</Color> — специализированные книги, которые при использовании на столе зачарования получают только определённые типы зачарований. Это позволяет целенаправленно получать зачарования для оружия, брони или инструментов.

<Row>
  <ItemImage id="scrap_tome" />
  ### <Color id="aqua">Scrapping Tomes</Color>
</Row>

Scrapping Tomes извлекают зачарования из предметов при объединении на наковальне:

- <Color id="gold">Basic Scrapping Tome:</Color> возвращает половину зачарований предмета. Сам предмет уничтожается.
- <Color id="gold">Superior Scrapping Tome:</Color> возвращает все зачарования. Сам предмет уничтожается.
- <Color id="gold">Extraction Tome:</Color> возвращает все зачарования и сохраняет предмет.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Паутина</Color>
</Column>

Поместите <Color id="aqua">Cobweb</Color> рядом со столом зачарования, чтобы снять с предмета все зачарования. <Color id="aqua">Prismatic Cobweb</Color> также снимает проклятия.

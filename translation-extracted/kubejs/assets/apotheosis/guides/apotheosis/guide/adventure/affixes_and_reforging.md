---
navigation:
  title: Affixes и перековка
  icon: apotheosis:sigil_of_rebirth
  parent: adventure.md
  position: 1
item_ids:
  - apotheosis:simple_reforging_table
  - apotheosis:reforging_table
  - apotheosis:sigil_of_rebirth
  - apotheosis:sigil_of_enhancement
  - apotheosis:sigil_of_withdrawal
  - apotheosis:common_material
  - apotheosis:uncommon_material
  - apotheosis:rare_material
  - apotheosis:epic_material
  - apotheosis:mythic_material
---
# <Color id="dark_purple">Affixes и перековка</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Affixes и перековка</Color>
  <ItemImage id="sigil_of_rebirth" scale="2" />

  Предметы с Affix — сгенерированное снаряжение с особыми модификаторами, похожими на зачарования. У каждого предмета есть редкость, определяющая возможное количество характеристик, эффектов и гнёзд.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Редкости</Color>
</Column>

<Row>
<Column>

- <Color id="gray">Common</Color> — 1 характеристика, иногда 2-я
- <Color id="green">Uncommon</Color> — 2 характеристики, иногда 3-я; возможно 1 гнездо
- <Color id="blue">Rare</Color> — 3 характеристики и 1 эффект, иногда 2-й эффект; возможно гнездо и небольшой бонус к прочности

</Column>
<Column>

- <Color id="dark_purple">Epic</Color> — 3 характеристики и 1 эффект, иногда 4-я характеристика и 2-й эффект; до 2 гнёзд и более высокий бонус к прочности
- <Color id="gold">Mythic</Color> — 4 характеристики и 2 эффекта, иногда 3-й эффект и до 3 гнёзд; значительный бонус к прочности

</Column>
</Row>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Типы Affix</Color>
</Column>

- <Color id="aqua">Stat Affixes</Color> — бонусы к характеристикам, например к урону, броне или скорости передвижения.
- <Color id="light_purple">Effect Affixes</Color> — особые способности, срабатывающие в бою или при других действиях. Появляются только на предметах редкости <Color id="blue">Rare</Color> и выше.
- <Color id="green">Socket Affixes</Color> — пустые гнёзда для Gems, дающих дополнительные бонусы.
- <Color id="yellow">Durability Affix</Color> — множитель прочности, который перемножается с эффектом Unbreaking. Доступен только на предметах редкости <Color id="blue">Rare</Color> и выше.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Sigils</Color>
</Column>

<Row>
  <ItemImage id="sigil_of_rebirth" />
  ### <Color id="aqua">Sigil of Rebirth</Color>
</Row>

Используется в Reforging Tables для повторного случайного выбора всех Affix предмета.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="sigil_of_enhancement" />
  ### <Color id="aqua">Sigil of Enhancement</Color>
</Row>

Используется в Augmenting Table для улучшения или повторного выбора отдельных Affix.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="sigil_of_withdrawal" />
  ### <Color id="aqua">Sigil of Withdrawal</Color>
</Row>

Используется в Smithing Table, чтобы извлечь Gem из предмета с Affix.

***
<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Перековка и улучшение</Color>
</Column>

Перековка заново генерирует все Affix предмета и может превратить обычное снаряжение в мощный предмет с Affix. Для этого есть два стола:

<Row>
  <ItemImage id="simple_reforging_table" />
  ### <Color id="aqua">Simple Reforging Table</Color>
</Row>

Позволяет перековывать предметы вплоть до редкости <Color id="blue">Rare</Color>. Хороший выбор для улучшения снаряжения в начале игры.

<ItemImage id="minecraft:air" scale="0.5" />

<Row>
  <ItemImage id="reforging_table" />
  ### <Color id="aqua">Reforging Table</Color>
</Row>

Позволяет перековывать предметы вплоть до редкости <Color id="gold">Mythic</Color>. Полноценная версия для поздних этапов игры.

Для перековки нужны три компонента: предмет, материалы редкости и <ItemLink id="sigil_of_rebirth" />. Как и при зачаровывании, вам предложат 3 варианта. Предмет можно перековывать неоднократно.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="augmenting_table" />
  ### <Color id="aqua">Augmenting Table</Color>
</Row>

Augmenting Table — станция поздней игры, позволяющая улучшать или заново выбирать отдельные Affix с помощью <ItemLink id="sigil_of_enhancement" />.

- <Color id="green">Улучшение</Color> — стоит <Color id="red">2 Sigils</Color>. Повышает силу выбранного Affix на 25%.
- <Color id="aqua">Повторный выбор</Color> — стоит <Color id="red">1 Sigil</Color>. Случайным образом заменяет выбранный Affix.

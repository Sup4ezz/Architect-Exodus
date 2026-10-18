---
navigation:
  title: Самоцветы
  icon: apotheosis:gem
  parent: adventure.md
  position: 2
item_ids:
  - apotheosis:gem
  - apotheosis:gem_dust
  - apotheosis:gem_cutting_table
  - apotheosis:salvaging_table
  - apotheosis:sigil_of_withdrawal
---
# <Color id="dark_purple">Самоцветы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Самоцветы</Color>
  <ItemImage id="gem" scale="2" />

  Gems — это кристаллы, которые можно вставлять в предметы с Affix, получая дополнительные бонусы. Эффект каждого самоцвета зависит от типа предмета, в который он вставлен: оружие, броня, щит и так далее.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Установка и извлечение самоцветов</Color>
</Column>

- Чтобы <Color id="green">вставить</Color> Gem, объедините его с предметом с Affix в Smithing Table.
- Чтобы <Color id="red">извлечь</Color> Gem, объедините предмет с <ItemLink id="sigil_of_withdrawal" /> в Smithing Table.

Gems можно найти в сундуках и получить за убийство мобов (засчитываются только убийства игроком). Чаще они выпадают с боссов.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Row>
  <ItemImage id="gem_cutting_table" />
  ### <Color id="aqua">Gem Cutting Table</Color>
</Row>

Gem Cutting Table повышает редкость Gems. Для работы нужны <ItemLink id="gem_dust" />, соответствующие материалы редкости и рецепт из JEI.cond Gem as a catalyst.


<ItemImage id="minecraft:air" scale="0.25" />
***

<Row>
  <ItemImage id="salvaging_table" />
  ### <Color id="aqua">Salvaging Table</Color>
</Row>

The Salvaging Table breaks down Affix items into Rarity Materials corresponding to the item's rarity. You can also crush Gems into <ItemLink id="gem_dust" /> by placing them in the Salvaging Table (or dropping them on an Anvil in-world).


<Row>
<ItemImage id="common_material" />
<ItemImage id="uncommon_material" />
<ItemImage id="rare_material" />
<ItemImage id="epic_material" />
<ItemImage id="mythic_material" />
</Row>

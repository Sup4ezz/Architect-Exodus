---
navigation:
  title: Начало работы
  parent: index.md
  icon: powah:wrench
  position: 0
item_ids:
  - powah:wrench
  - powah:uraninite
  - powah:uraninite_ore
  - powah:uraninite_ore_dense
  - powah:uraninite_ore_poor
---

# <Color id="yellow">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="yellow">Начало работы</Color>

  <ItemImage id="wrench" scale="2" />

  Всё необходимое для начала генерации, хранения и передачи энергии с помощью Powah.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Система уровней</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Почти все механизмы и предметы Powah имеют 7 уровней. У высоких уровней больше вместимость и пропускная способность, но их сложнее создавать. Каждый уровень улучшается из предыдущего.

<ItemImage id="minecraft:air" scale="0.25"/>

- <Color id="aqua">Starter</Color> — самый доступный начальный уровень
- <Color id="aqua">Basic</Color>
- <Color id="aqua">Hardened</Color>
- <Color id="aqua">Blazing</Color>
- <Color id="aqua">Niotic</Color>
- <Color id="aqua">Spirited</Color>
- <Color id="aqua">Nitro</Color> — максимальная мощность

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Первая энергетическая система</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Основной принцип работы Powah прост: **вырабатывайте** энергию, **передавайте** её по кабелям и **используйте** в механизмах.

1. Создайте генератор уровня Starter — <ItemLink id="furnator_starter" /> (сжигает твёрдое топливо) или <ItemLink id="magmator_starter" /> (использует лаву).
2. Подключите его с помощью <ItemLink id="energy_cable_starter" /> к механизмам или к <ItemLink id="energy_cell_starter" /> для хранения энергии.
3. Используйте <ItemLink id="wrench" /> в режиме Config Mode, чтобы настроить стороны кабеля как вход или выход.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Wrench</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="wrench" />
  ### <Color id="aqua">Wrench</Color>
</Row>

The Wrench is your essential tool for working with Powah machines. Craft one before setting up any power system. It has 3 modes:

- <Color id="aqua">Config Mode</Color> — Change cable I/O configuration (input, output, or both).
- <Color id="aqua">Link Mode</Color> — Link blocks like the Energizing Orb and Energizing Rods.
- <Color id="aqua">Rotate Mode</Color> — Rotate blocks horizontally.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Uraninite</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="uraninite_ore_dense" />
  ### <Color id="aqua">Uraninite Ore</Color>
</Row>

![](./materials/uraninite.png)

Uraninite is the fuel for Powah's Reactors — the most powerful generators available. It is rarely found underground in three variants:

- <Color id="aqua">Poor Ore</Color> — Below Y=64
- <Color id="aqua">Normal Ore</Color> — Below Y=20
- <Color id="aqua">Dense Ore</Color> — Below Y=0

Generates in 1 to 5 block deposits. An iron pickaxe or better is needed to mine it, and Fortune increases the amount of Raw Uraninite dropped.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energizing</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energizing_orb" />
  ### <Color id="aqua">Energizing Orb</Color>
</Row>

The Energizing Orb is Powah's crafting station — it uses FE to transform items into upgraded components. You will need it to craft many advanced Powah materials. Place Energizing Rods nearby on cables or FE blocks to power it. See the [Energizing](energizing.md) page for full details.

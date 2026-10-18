---
navigation:
  title: Генерация EMC
  icon: projecte:collector_mk1
  parent: index.md
  position: 2
item_ids:
  - projecte:collector_mk1
  - projecte:collector_mk2
  - projecte:collector_mk3
  - projecte:relay_mk1
  - projecte:relay_mk2
  - projecte:relay_mk3
  - projecte:klein_star_ein
  - projecte:klein_star_zwei
  - projecte:klein_star_drei
  - projecte:klein_star_vier
  - projecte:klein_star_sphere
  - projecte:klein_star_omega
---
# <Color id="dark_purple">Генерация EMC</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Генерация EMC</Color>
  <ItemImage id="collector_mk1" scale="2" />

  Пассивная генерация EMC позволяет накапливать энергию без ручного преобразования предметов. Collectors производят EMC, Relays усиливают поток, а Klein Stars хранят энергию.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Коллекторы энергии</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Energy Collectors пассивно производят EMC из солнечного или искусственного света. Доступны три уровня с возрастающей скоростью генерации.

<ItemGrid>
  <ItemIcon id="collector_mk1" />
  <ItemIcon id="collector_mk2" />
  <ItemIcon id="collector_mk3" />
</ItemGrid>

Помещайте топливо в Collector, чтобы улучшать его по цепочке: coal → <ItemLink id="alchemical_coal" /> → <ItemLink id="mobius_fuel" /> → <ItemLink id="aeternalis_fuel" />. Collectors также могут передавать EMC соседним Anti-Matter Relays.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Anti-Matter Relays</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Relays collect EMC from adjacent Collectors and boost their output. Three tiers are available (MK1, MK2, MK3). Chain multiple Collectors into a Relay to multiply your EMC production.

<ItemGrid>
  <ItemIcon id="relay_mk1" />
  <ItemIcon id="relay_mk2" />
  <ItemIcon id="relay_mk3" />
</ItemGrid>

A typical <Color id="green">"Power Flower"</Color> setup uses multiple Collectors feeding into one Relay, which then feeds into a Condenser or Transmutation Table for automated item production.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Klein Stars</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Klein Stars are portable EMC storage devices. Six tiers are available with exponentially increasing capacity:

<ItemGrid>
  <ItemIcon id="klein_star_ein" />
  <ItemIcon id="klein_star_zwei" />
  <ItemIcon id="klein_star_drei" />
  <ItemIcon id="klein_star_vier" />
  <ItemIcon id="klein_star_sphere" />
  <ItemIcon id="klein_star_omega" />
</ItemGrid>

- <ItemLink id="klein_star_ein" /> — <Color id="red">50,000</Color> EMC
- <ItemLink id="klein_star_zwei" /> — <Color id="red">200,000</Color> EMC
- <ItemLink id="klein_star_drei" /> — <Color id="red">800,000</Color> EMC
- <ItemLink id="klein_star_vier" /> — <Color id="red">3,200,000</Color> EMC
- <ItemLink id="klein_star_sphere" /> — <Color id="red">12,800,000</Color> EMC
- <ItemLink id="klein_star_omega" /> — <Color id="red">51,200,000</Color> EMC

Klein Stars can be charged in Collectors, Relays, or via the Transmutation Table. They are used to power various ProjectE items and as fuel for the Energy Condenser.


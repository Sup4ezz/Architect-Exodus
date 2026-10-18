---
navigation:
  title: EMC Generation
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
# <Color id="dark_purple">EMC Generation</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">EMC Generation</Color>
  <ItemImage id="collector_mk1" scale="2" />

  Passive EMC generation allows you to accumulate energy without manually breaking down items. Collectors generate it, Relays amplify it, and Klein Stars store it.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy Collectors</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Energy Collectors passively generate EMC from sunlight (or artificial light). Three tiers are available, each with increasing generation rates.

<ItemGrid>
  <ItemIcon id="collector_mk1" />
  <ItemIcon id="collector_mk2" />
  <ItemIcon id="collector_mk3" />
</ItemGrid>

Place fuel items inside a Collector to upgrade them through the fuel chain: coal -> <ItemLink id="alchemical_coal" /> -> <ItemLink id="mobius_fuel" /> -> <ItemLink id="aeternalis_fuel" />. Collectors can also output EMC to adjacent Anti-Matter Relays.


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


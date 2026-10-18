---
navigation:
  title: Getting Started
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

# <Color id="yellow">Getting Started</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="yellow">Getting Started</Color>

  <ItemImage id="wrench" scale="2" />

  Everything you need to know to start generating, storing, and transferring power with Powah.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Tier System</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Almost every Powah machine and item comes in 7 tiers. Higher tiers have more capacity and throughput but cost more to craft. Each tier upgrades from the previous one.

<ItemImage id="minecraft:air" scale="0.25"/>

- <Color id="aqua">Starter</Color> — Cheapest entry point
- <Color id="aqua">Basic</Color>
- <Color id="aqua">Hardened</Color>
- <Color id="aqua">Blazing</Color>
- <Color id="aqua">Niotic</Color>
- <Color id="aqua">Spirited</Color>
- <Color id="aqua">Nitro</Color> — Maximum power

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Your First Power Setup</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The basic Powah workflow is simple: **generate** power, **move** it through cables, and **use** it in machines.

1. Craft a Starter-tier generator — the <ItemLink id="furnator_starter" /> (burns solid fuel) or <ItemLink id="magmator_starter" /> (burns lava) are the easiest to start with.
2. Connect it with <ItemLink id="energy_cable_starter" /> to your machines or an <ItemLink id="energy_cell_starter" /> for storage.
3. Use the <ItemLink id="wrench" /> in Config Mode to set cable sides to input or output as needed.

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

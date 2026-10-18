---
navigation:
  title: Energy Storage
  parent: index.md
  icon: powah:energy_cell_blazing
  position: 2
item_ids:
  - powah:energy_cell_starter
  - powah:energy_cell_basic
  - powah:energy_cell_hardened
  - powah:energy_cell_blazing
  - powah:energy_cell_niotic
  - powah:energy_cell_spirited
  - powah:energy_cell_nitro
  - powah:energy_cell_creative
  - powah:battery_starter
  - powah:battery_basic
  - powah:battery_hardened
  - powah:battery_blazing
  - powah:battery_niotic
  - powah:battery_spirited
  - powah:battery_nitro
---

# <Color id="yellow">Energy Storage</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="yellow">Energy Storage</Color>

  <ItemImage id="energy_cell_blazing" scale="2" />

  Energy Cells and Batteries store FE and share the same capacity and I/O rates across all tiers.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Storage Types</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_cell_starter" />
  ### <Color id="aqua">Energy Cell</Color>
</Row>

Stores FE locally as a placed block. Can be shift-clicked into an Ender Cell GUI to add capacity to an Ender Network channel — any stored power transfers to that channel.

![](./storage_transfer/energy_cell.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="battery_starter" />
  ### <Color id="aqua">Battery</Color>
</Row>

A portable FE storage item that charges other items in your inventory. Like Energy Cells, Batteries can be shift-clicked into an Ender Cell GUI to increase a channel's capacity.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Storage Tiers</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="energy_cell_starter" />
  <ItemIcon id="energy_cell_basic" />
  <ItemIcon id="energy_cell_hardened" />
  <ItemIcon id="energy_cell_blazing" />
  <ItemIcon id="energy_cell_niotic" />
  <ItemIcon id="energy_cell_spirited" />
  <ItemIcon id="energy_cell_nitro" />
</ItemGrid>

<ItemGrid>
  <ItemIcon id="battery_starter" />
  <ItemIcon id="battery_basic" />
  <ItemIcon id="battery_hardened" />
  <ItemIcon id="battery_blazing" />
  <ItemIcon id="battery_niotic" />
  <ItemIcon id="battery_spirited" />
  <ItemIcon id="battery_nitro" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

|          | Capacity          | Max I/O           |
| -------- | ----------------- | ----------------- |
| Starter  | 1,000,000 FE      | 1,000 FE/t        |
| Basic    | 4,000,000 FE      | 4,000 FE/t        |
| Hardened | 10,000,000 FE     | 10,000 FE/t       |
| Blazing  | 40,000,000 FE     | 40,000 FE/t       |
| Niotic   | 100,000,000 FE    | 100,000 FE/t      |
| Spirited | 400,000,000 FE    | 400,000 FE/t      |
| Nitro    | 2,000,000,000 FE  | 2,000,000 FE/t    |
| Creative | Unlimited FE      | 2,000,000 FE/t    |
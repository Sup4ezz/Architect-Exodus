---
navigation:
  title: Charging & Automation
  parent: index.md
  icon: powah:player_transmitter_spirited
  position: 5
item_ids:
  - powah:player_transmitter_starter
  - powah:player_transmitter_basic
  - powah:player_transmitter_hardened
  - powah:player_transmitter_blazing
  - powah:player_transmitter_niotic
  - powah:player_transmitter_spirited
  - powah:player_transmitter_nitro
  - powah:binding_card
  - powah:binding_card_dim
  - powah:player_aerial_pearl
  - powah:energy_hopper_starter
  - powah:energy_hopper_basic
  - powah:energy_hopper_hardened
  - powah:energy_hopper_blazing
  - powah:energy_hopper_niotic
  - powah:energy_hopper_spirited
  - powah:energy_hopper_nitro
  - powah:energy_discharger_starter
  - powah:energy_discharger_basic
  - powah:energy_discharger_hardened
  - powah:energy_discharger_blazing
  - powah:energy_discharger_niotic
  - powah:energy_discharger_spirited
  - powah:energy_discharger_nitro
---

# <Color id="yellow">Charging & Automation</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="yellow">Charging & Automation</Color>

  <ItemImage id="player_transmitter_spirited" scale="2" />

  These blocks handle charging and discharging items automatically. All three share the same capacity and I/O rates across tiers.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Player Transmitter</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="player_transmitter_starter" />
  ### <Color id="aqua">Player Transmitter</Color>
</Row>

Charges items wirelessly in a linked player's inventory, including armor slots and the off-hand.

![](./energy_blocks/player_transmitter.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="binding_card" />
  ### <Color id="aqua">Binding Card</Color>
</Row>

Links a player with a Player Transmitter in the same dimension. Right-click to bind yourself, then insert into a transmitter.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="binding_card_dim" />
  ### <Color id="aqua">Binding Card (Dimensional)</Color>
</Row>

Works the same as the Binding Card, but across dimensions.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="player_aerial_pearl" />
  ### <Color id="aqua">Player Aerial Pearl</Color>
</Row>

A crafting ingredient for the Player Transmitter. Obtained by using an Aerial Pearl on a Zombie or Husk.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
</Row>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy Hopper & Discharger</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_hopper_starter" />
  ### <Color id="aqua">Energy Hopper</Color>
</Row>

Charges chargeable items inside an adjacent inventory like chests or any block with an accessible inventory that does not already have FE storage.

![](./energy_blocks/energy_hopper.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_discharger_starter" />
  ### <Color id="aqua">Energy Discharger</Color>
</Row>

Drains FE from charged items and stores that energy in an internal buffer. Connect via cables to extract and reuse the stored power elsewhere.

![](./energy_blocks/energy_discharger.png)

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Shared Tiers</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="player_transmitter_starter" />
  <ItemIcon id="player_transmitter_basic" />
  <ItemIcon id="player_transmitter_hardened" />
  <ItemIcon id="player_transmitter_blazing" />
  <ItemIcon id="player_transmitter_niotic" />
  <ItemIcon id="player_transmitter_spirited" />
  <ItemIcon id="player_transmitter_nitro" />
</ItemGrid>

<ItemGrid>
  <ItemIcon id="energy_hopper_starter" />
  <ItemIcon id="energy_hopper_basic" />
  <ItemIcon id="energy_hopper_hardened" />
  <ItemIcon id="energy_hopper_blazing" />
  <ItemIcon id="energy_hopper_niotic" />
  <ItemIcon id="energy_hopper_spirited" />
  <ItemIcon id="energy_hopper_nitro" />
</ItemGrid>

<ItemGrid>
  <ItemIcon id="energy_discharger_starter" />
  <ItemIcon id="energy_discharger_basic" />
  <ItemIcon id="energy_discharger_hardened" />
  <ItemIcon id="energy_discharger_blazing" />
  <ItemIcon id="energy_discharger_niotic" />
  <ItemIcon id="energy_discharger_spirited" />
  <ItemIcon id="energy_discharger_nitro" />
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
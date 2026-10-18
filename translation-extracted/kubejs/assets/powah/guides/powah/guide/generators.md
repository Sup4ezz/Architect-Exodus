---
navigation:
  title: Генераторы
  parent: index.md
  icon: powah:furnator_starter
  position: 1
item_ids:
  - powah:furnator_starter
  - powah:furnator_basic
  - powah:furnator_hardened
  - powah:furnator_blazing
  - powah:furnator_niotic
  - powah:furnator_spirited
  - powah:furnator_nitro
  - powah:magmator_starter
  - powah:magmator_basic
  - powah:magmator_hardened
  - powah:magmator_blazing
  - powah:magmator_niotic
  - powah:magmator_spirited
  - powah:magmator_nitro
  - powah:thermo_generator_starter
  - powah:thermo_generator_basic
  - powah:thermo_generator_hardened
  - powah:thermo_generator_blazing
  - powah:thermo_generator_niotic
  - powah:thermo_generator_spirited
  - powah:thermo_generator_nitro
  - powah:reactor_starter
  - powah:reactor_basic
  - powah:reactor_hardened
  - powah:reactor_blazing
  - powah:reactor_niotic
  - powah:reactor_spirited
  - powah:reactor_nitro
  - powah:dry_ice
---

# <Color id="yellow">Генераторы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="yellow">Генераторы</Color>

  <ItemImage id="furnator_starter" scale="2" />

  Генераторы Powah производят FE из разных источников топлива. Все генераторы представлены в 7 уровнях — от Starter до Nitro.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Топливные генераторы</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="furnator_starter" />
  ### <Color id="aqua">Furnator</Color>
</Row>

Производит FE из твёрдого топлива для печей, например угля и древесины. Высокие уровни вырабатывают больше FE/т, но сжигают топливо быстрее; количество энергии на один тик горения не меняется.

![](./generators/furnator.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="magmator_starter" />
  ### <Color id="aqua">Magmator</Color>
</Row>

Производит FE из высокотемпературных жидкостей, например лавы. Значения по уровням такие же, как у Furnator.

![](./generators/magmator.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="furnator_starter" />
  <ItemIcon id="furnator_basic" />
  <ItemIcon id="furnator_hardened" />
  <ItemIcon id="furnator_blazing" />
  <ItemIcon id="furnator_niotic" />
  <ItemIcon id="furnator_spirited" />
  <ItemIcon id="furnator_nitro" />
</ItemGrid>

<ItemGrid>
  <ItemIcon id="magmator_starter" />
  <ItemIcon id="magmator_basic" />
  <ItemIcon id="magmator_hardened" />
  <ItemIcon id="magmator_blazing" />
  <ItemIcon id="magmator_niotic" />
  <ItemIcon id="magmator_spirited" />
  <ItemIcon id="magmator_nitro" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

|        | Capacity      | Generates     | Max Extract    |
| ------ | ------------- | ------------- | -------------- |
| Starter | 20,000 FE     | 20 FE/t       | 80 FE/t        |
| Basic   | 80,000 FE     | 80 FE/t       | 320 FE/t       |
| Hardened | 200,000 FE    | 200 FE/t      | 800 FE/t       |
| Blazing | 800,000 FE    | 800 FE/t      | 3,200 FE/t     |
| Niotic  | 2,000,000 FE  | 2,000 FE/t    | 8,000 FE/t     |
| Spirited | 8,000,000 FE  | 8,000 FE/t    | 32,000 FE/t    |
| Nitro   | 40,000,000 FE | 40,000 FE/t   | 160,000 FE/t   |

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
</Row>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Environmental Generators</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thermo_generator_starter" />
  ### <Color id="aqua">Thermo Generator</Color>
</Row>

Produces FE when placed on top of a heat source like lava. Requires a coolant fluid like water to run.

![](./generators/thermo_generator.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="thermo_generator_starter" />
  <ItemIcon id="thermo_generator_basic" />
  <ItemIcon id="thermo_generator_hardened" />
  <ItemIcon id="thermo_generator_blazing" />
  <ItemIcon id="thermo_generator_niotic" />
  <ItemIcon id="thermo_generator_spirited" />
  <ItemIcon id="thermo_generator_nitro" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

|        | Capacity      | Generates     | Max Extract    |
| ------ | ------------- | ------------- | -------------- |
| Starter | 20,000 FE     | 20 FE/t       | 80 FE/t        |
| Basic   | 80,000 FE     | 60 FE/t       | 320 FE/t       |
| Hardened | 200,000 FE    | 100 FE/t      | 800 FE/t       |
| Blazing | 800,000 FE    | 200 FE/t      | 3,200 FE/t     |
| Niotic  | 2,000,000 FE  | 400 FE/t      | 8,000 FE/t     |
| Spirited | 8,000,000 FE  | 800 FE/t      | 32,000 FE/t    |
| Nitro   | 40,000,000 FE | 2,000 FE/t    | 160,000 FE/t   |

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
</Row>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Reactor</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="reactor_starter" />
  ### <Color id="aqua">Reactor</Color>
</Row>

A multiblock FE generator that uses <ItemLink id="uraninite" /> as fuel. Place 36 Reactor blocks in a 3x4 area and it builds itself.

![](./generators/reactor.png)

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="dry_ice" />
  ### <Color id="aqua">Dry Ice</Color>
</Row>

![](./materials/dry_ice.png)

Used to cool down Reactors for optimal performance. Found underground below Y=64, or obtained by energizing two pieces of Blue Ice.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="reactor_starter" />
  <ItemIcon id="reactor_basic" />
  <ItemIcon id="reactor_hardened" />
  <ItemIcon id="reactor_blazing" />
  <ItemIcon id="reactor_niotic" />
  <ItemIcon id="reactor_spirited" />
  <ItemIcon id="reactor_nitro" />
</ItemGrid>

<ItemImage id="minecraft:air" scale="0.25"/>

|        | Capacity        | Generation Factor | Max Extract      |
| ------ | --------------- | ----------------- | ---------------- |
| Starter | 250,000 FE      | 250 FE/t          | 1,000 FE/t       |
| Basic   | 1,000,000 FE    | 1,000 FE/t        | 4,000 FE/t       |
| Hardened | 2,500,000 FE    | 2,500 FE/t        | 10,000 FE/t      |
| Blazing | 10,000,000 FE   | 10,000 FE/t       | 40,000 FE/t      |
| Niotic  | 25,000,000 FE   | 25,000 FE/t       | 100,000 FE/t     |
| Spirited | 100,000,000 FE  | 100,000 FE/t      | 400,000 FE/t     |
| Nitro   | 500,000,000 FE  | 500,000 FE/t      | 2,000,000 FE/t   |

<ItemImage id="minecraft:air" scale="0.25"/>


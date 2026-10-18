---
navigation:
  title: Генерация ауры
  icon: naturesaura:oak_generator
  parent: index.md
  position: 4
item_ids:
  - naturesaura:ancient_sapling
  - naturesaura:oak_generator
  - naturesaura:animal_generator
  - naturesaura:moss_generator
  - naturesaura:flower_generator
  - naturesaura:projectile_generator
  - naturesaura:slime_split_generator
  - naturesaura:aura_detector
  - naturesaura:aura_cache
---

# <Color id="green">Генерация ауры</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Генерация ауры</Color>

  <ItemImage id="oak_generator" scale="2" />

  Аура — жизненная сила Nature's Aura. Без достаточного её количества устройства перестанут работать. Управление уровнем ауры — одна из основных механик мода.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Древние деревья</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ancient_sapling" />
  ### <Color id="aqua">Ancient Trees</Color>
</Row>

Ancient Trees — первый способ поддерживать уровень ауры. Когда местная аура опускается ниже среднего, взрослое древнее дерево начинает пассивно её производить. Энергия постепенно истощает листву: со временем листья исчезают, и остаётся увядший ствол.

<Color id="yellow">Важно:</Color>
- Ancient Trees могут только <Color id="aqua">поддерживать</Color> обычный уровень ауры, но не повышать его выше базового значения
- Они работают только в мирах со светом и свежим воздухом
- Оставшаяся Ancient Wood используется в рецептах, поэтому не превращайте всю древесину в уголь
- These saplings cannot be farmed for new saplings; they are an approximation of a species from a lost age

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Active Aura Generators</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

To push aura levels beyond normal, you need active generators. These tap into various natural processes to produce aura. There are several early options:

<ItemGrid>
  <ItemIcon id="oak_generator" />
  <ItemIcon id="flower_generator" />
  <ItemIcon id="animal_generator" />
  <ItemIcon id="moss_generator" />
  <ItemIcon id="projectile_generator" />
  <ItemIcon id="slime_split_generator" />
</ItemGrid>

- <ItemLink id="oak_generator" /> -- Generates aura from natural tree growth
- <ItemLink id="flower_generator" /> -- Consumes different types of flowers from the area
- <ItemLink id="animal_generator" /> -- Harnesses energy from nearby animals
- <ItemLink id="moss_generator" /> -- Cleans moss off of stone blocks
- <ItemLink id="projectile_generator" /> -- Absorbs the energy of projectiles
- <ItemLink id="slime_split_generator" /> -- Generates aura from slime splitting

<Color id="red">Warning:</Color> Generators do not care how full the local aura is. They will keep producing even if levels are dangerously high. Use an Aura Detector to manage this.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Aura Detector</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="aura_detector" />
  ### <Color id="aqua">Aura Detector</Color>
</Row>

The Environmental Eye is useful for personal feedback, but other devices need information too. The Aura Detector reads local aura levels and outputs a redstone signal via a comparator, allowing you to automate generators based on current aura levels.

This is essential for preventing aura overflow or depletion when running automated setups.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Aura Cache</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="aura_cache" />
  ### <Color id="aqua">Aura Cache</Color>
</Row>

Aura clings to the local environment and is difficult to use personally. The Aura Cache creates a portable storage for aura. To fill it, place the Cache into a Natural Altar.

This can later be upgraded into an <Color id="green">Aura Trove</Color> for increased storage capacity.


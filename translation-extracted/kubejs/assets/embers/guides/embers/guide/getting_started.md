---
navigation:
  title: Начало работы
  icon: embers:ember_crystal
  parent: index.md
  position: 1
item_ids:
  - embers:ember_crystal
  - embers:ember_shard
  - embers:caminite_blend
  - embers:caminite_brick
  - embers:tinker_hammer
  - embers:ember_bore
  - embers:atmospheric_gauge
  - embers:field_chart
  - embers:ancient_codex
---
# <Color id="gold">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="gold">Начало работы</Color>
  <ItemImage id="ember_crystal" scale="2" />

  В основе этого мода лежит мощный источник энергии — Ember. В руководстве описаны основы его использования: создание первых материалов, поиск Ember и добыча из глубин под коренной породой.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Caminite</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Caminite — прочная керамика из глины и песка. После обжига получается материал, подходящий для создания механизмов.

Создайте <ItemLink id="caminite_blend" /> из глины и песка, затем обожгите в печи, чтобы получить <ItemLink id="caminite_brick" /> — основной строительный материал для большинства механизмов Embers.

<Color id="yellow">Примечание:</Color> Caminite и дальнейшее развитие Embers доступны только в <Color id="red">Muspelheim</Color>. Чтобы создавать эти материалы, сначала доберитесь до этого мира.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Tinker Hammer</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="tinker_hammer" />
  ### <Color id="aqua">Tinker Hammer</Color>
</Row>

<ItemLink id="tinker_hammer" /> с массивной головкой из свинца и железа — удобный инструмент. Им можно сплющивать два металлических слитка в пластину, а также взаимодействовать с некоторыми механизмами.

The Tinker Hammer is also used to <Color id="green">link Ember Emitters and Receptors</Color>, which is essential for building your Ember power network later on.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Prospecting</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Из меди и железа можно создать устройство для измерения плотности энергии Ember в выбранной точке мира.

<Row>
  <ItemImage id="atmospheric_gauge" />
  ### <Color id="aqua">Atmospheric Gauge</Color>
</Row>

<ItemLink id="atmospheric_gauge" /> измеряет плотность Ember в текущей точке. Используйте его, чтобы найти богатые энергией места перед установкой Bore.


<ItemImage id="minecraft:air" scale="0.25"/>

<ItemLink id="field_chart" /> показывает распределение Ember на большой территории и помогает выбрать место для добычи.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ember Extraction</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_bore" />
  ### <Color id="aqua">Ember Bore</Color>
</Row>

While bedrock may halt your downward advances, it will not halt your machines. The <ItemLink id="ember_bore" /> must be fueled with normal furnace fuel items, and must be placed at a position where the blades of the Bore can touch bedrock.

When fueled, the Bore will dig up <Color id="green">Ember Crystals</Color> from deeper into the earth. Place it above bedrock in an area with high Ember density for the best yields.


<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="ember_crystal" />
  <ItemIcon id="ember_shard" />
</ItemGrid>

These crystals come in several sizes — the larger <ItemLink id="ember_crystal" /> and the smaller <ItemLink id="ember_shard" />. Through the immolation of these crystals, you may be able to activate the power within them for other use.

Ember Clusters are created by alchemically fusing multiple crystals together for even more power. These crystals and shards are the raw fuel for the entire Ember energy system.

---
navigation:
  title: Generators
  icon: actuallyadditions:coal_generator
  parent: index.md
  position: 2
item_ids:
  - actuallyadditions:coal_generator
  - actuallyadditions:leaf_generator
  - actuallyadditions:oil_generator
  - actuallyadditions:heat_collector
  - actuallyadditions:bio_reactor
---
# <Color id="green">Generators</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Generators</Color>
  <ItemImage id="coal_generator" scale="2" />
  Generators produce Crystal Flux (CF) to power your machines. Each generator has different fuel sources and output rates.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Crystal Flux</Color>
</Column>

Crystal Flux (CF) is the energy system used by all Actually Additions machines. It is fully compatible with Forge Energy (FE) and Redstone Flux (RF), so any energy source from other mods can also power Actually Additions machines. You do not need a dedicated CF generator to get started. Simply connect any CF, FE, or RF power source.
***

<ItemImage id="minecraft:air" scale="0.25" />
<Column alignItems="center" fullWidth={true}>
</Column>

<Row>
  <ItemImage id="coal_generator" scale="1" />
  ### <Color id="aqua">Coal Generator</Color>
</Row>
Burns any furnace fuel to generate CF. Apply a redstone signal to stop it from burning fuel. A comparator can read the amount of energy currently stored.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="leaf_generator" scale="1" />
  ### <Color id="aqua">Leaf Generator</Color>
</Row>
Destroys nearby leaves to generate CF. The range is configurable. A simple early-game generator; place it near trees.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="heat_collector" scale="1" />
  ### <Color id="aqua">Heat Collector</Color>
</Row>
Generates CF from nearby lava blocks. Requires a minimum number of lava source blocks surrounding it to function. Be aware that it will occasionally consume a lava block.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="bio_reactor" scale="1" />
  ### <Color id="aqua">Bio Reactor</Color>
</Row>
Generates CF from organic materials such as seeds, food, and plants. The more <Color id="green">variety</Color> of items you feed it, the more power it produces. Fill it with many different types of organic items for maximum output.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="oil_generator" scale="1" />
  ### <Color id="aqua">Oil Generator</Color>
</Row>

Burns Canola Oil and its upgraded variants for CF. The oil production chain works as follows:

1. Harvest Canola and process it in the <ItemLink id="canola_press" /> to get Canola Oil.
2. Use the <ItemLink id="fermenting_barrel" /> to upgrade it to Refined Canola Oil.
3. Further tiers include Crystallized Oil and Empowered Oil (created via in-world crafting).

Higher tier oils produce significantly more CF per bucket.
---
navigation:
  title: Мана
  icon: botania:mana_spreader
  parent: index.md
  position: 2
item_ids:
  - botania:mana_spreader
  - botania:mana_pool
  - botania:diluted_pool
  - botania:mana_tablet
  - botania:mana_mirror
  - botania:lens_normal
  - botania:lens_speed
  - botania:lens_power
  - botania:lens_time
  - botania:lens_efficiency
  - botania:mana_void
  - botania:mana_distributor
  - botania:mana_prism
  - botania:spark
  - botania:mana_detector
  - botania:spark_upgrade_dispersive
  - botania:spark_upgrade_dominant
  - botania:spark_upgrade_recessive
  - botania:spark_upgrade_isolated
---
# <Color id="green">Mana</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Mana</Color>
  <ItemImage id="mana_spreader" scale="2" />

  Mana — жизненная сила Botania. Её производят цветы, Spreaders передают её, Pools хранят, а устройства и Functional Flora расходуют. Понимание сети Mana — ключ к освоению мода.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mana Spreader</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_spreader" scale="1.5" />
  <Column>
    <Color id="green">Mana Spreader</Color> — основной блок для передачи Mana. Он направляется на цель и выпускает в её сторону импульсы Mana. Используйте <ItemLink id="twig_wand" /> в режиме Bind Mode, чтобы связать Spreader с Mana Pool или другим блоком-приёмником.
  </Column>
</Row>

Есть несколько уровней: обычный Spreader (из <ItemLink id="livingwood" />), Elven Spreader (из Dreamwood, быстрее и с большим радиусом) и Gaia Spreader (с наконечником из редстоуна, высший уровень).

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mana Pool</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_pool" scale="1.5" />
  <Column>
    The <Color id="green">Mana Pool</Color> stores Mana received from Spreaders and provides it to crafting devices and functional flowers within range. Items thrown into a filled Mana Pool can be transformed via Mana Infusion recipes — check JEI for the full list.
  </Column>
</Row>

The <ItemLink id="diluted_pool" /> is a cheaper alternative that holds less Mana. Use a <ItemLink id="mana_tablet" /> to carry Mana portably — place it in a Mana Pool to charge it.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mana Lenses</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="lens_normal" scale="1.5" />
  <Column>
    Attach Mana Lenses to Mana Spreaders to modify how their Mana bursts behave. Many lens types exist, and lenses can be combined together at a crafting table for compound effects.
  </Column>
</Row>

Common lens types include:
- **Velocity** — Faster bursts, longer range
- **Potency** — Stronger bursts, more Mana per shot
- **Bore** — Breaks blocks the burst hits
- **Warp** — Teleports bursts through nearby Mana Pools
- **Phantom** — Passes through solid blocks

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Sparks</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spark" scale="1.5" />
  <Column>
    Place <Color id="green">Sparks</Color> on top of Mana Pools for automatic wireless Mana distribution between pools. Sparks can be upgraded with Spark Augments to control flow direction.
  </Column>
</Row>

- **Dominant** — Pulls Mana from nearby Sparks
- **Recessive** — Sends Mana to nearby Sparks
- **Dispersive** — Shares Mana with nearby players wearing Mana-using baubles
- **Isolated** — Blocks all Spark interactions

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Other Mana Devices</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_tablet" />
  ### <Color id="aqua">Mana Tablet</Color>
</Row>

Portable Mana storage. Place in a Mana Pool to charge it. Supplies Mana to items in your inventory that need it.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_mirror" />
  ### <Color id="aqua">Mana Mirror</Color>
</Row>

Links to a specific Mana Pool for remote access to its Mana from anywhere.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_void" />
  ### <Color id="aqua">Mana Void</Color>
</Row>

Place under a Mana Pool to destroy excess Mana, preventing overflow and waste.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_distributor" />
  ### <Color id="aqua">Mana Distributor</Color>
</Row>

Evenly distributes Mana from one Spreader to multiple nearby targets.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="prism" />
  ### <Color id="aqua">Mana Prism</Color>
</Row>

Redirects Mana bursts that pass through it. Can also apply lens effects without being attached to a Spreader.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mana_detector" />
  ### <Color id="aqua">Mana Detector</Color>
</Row>

Emits a redstone signal when a Mana burst passes through it. Useful for monitoring Mana flow.

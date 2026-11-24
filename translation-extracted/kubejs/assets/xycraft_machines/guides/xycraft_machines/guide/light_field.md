---
navigation:
  title: Light Field
  icon: xycraft_machines:light_field
  parent: index.md
  position: 2
item_ids:
  - xycraft_machines:light_field
---
# <Color id="yellow">Light Field</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="yellow">Light Field</Color>
  <ItemImage id="xycraft_machines:light_field" scale="2" />

  The Light Field is a single-block <Color id="green">mob spawn suppressor</Color>. Place one and it prevents hostile mob spawns within a cubed volume centred on the block — much simpler than scattering torches everywhere or building a full lighting grid.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">What It Does</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The <ItemLink id="xycraft_machines:light_field" /> suppresses mob spawns in the chunked area around itself — both surface and dark indoor areas. Useful for:

- <Color id="green">Base perimeters</Color> — one Light Field instead of a torch ring.
- <Color id="green">Underground builds</Color> — keep tunnels mob-free without lighting the walls.
- <Color id="green">Bridges & infrastructure</Color> — stop arrow spawns mid-crossing.

The block does <Color id="yellow">not</Color> suppress mobs that have already spawned, nor mobs spawned by spawners or summoning rituals. It only blocks the natural spawn event.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Recipe</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

A 3×3 shaped craft:

- <Color id="green">4×</Color> Xychorium Light Gems (corners) — tagged `forge:gems/xychorium_light`
- <Color id="green">2×</Color> <ItemLink id="xycraft_world:kivi" /> (middle sides) — tagged `xycraft:building/kivi`
- <Color id="green">1×</Color> <ItemLink id="minecraft:glowstone" /> (centre)
- <Color id="green">1×</Color> Silica Glass (top middle) — tagged `forge:glass/silica`
- <Color id="green">1×</Color> <ItemLink id="xycraft_machines:machine_base" /> (bottom middle)

<RecipeFor id="xycraft_machines:light_field" fallbackText="Check JEI — the Light Field uses Xychorium Light gems and Kivi blocks around a Glowstone core." />

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Where to Get the Materials</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

- <Color id="green">Xychorium Light Gems</Color> — extracted from <Color id="aqua">Light Xychorium Ore</Color>, which spawns in overworld-tagged biomes (Midgard, the vanilla Overworld). Use the [Extractor](index.md) for high-throughput processing.
- <Color id="green">Kivi</Color> — found in the Niflheim kivi geode formations and via Xycraft worldgen. See JEI for the budding/cluster cycle.
- <Color id="green">Aluminum</Color> for the Machine Base — see [Xycraft Ore in Jotunheim](jotunheim_ore.md).

---
navigation:
  title: Ore in Jotunheim
  icon: xycraft_world:aluminum_ore_stone
  parent: index.md
  position: 3
item_ids:
  - xycraft_world:aluminum_ore_stone
  - xycraft_world:aluminum_ore_deepslate
  - xycraft_world:aluminum_ore_kivi
---
# <Color id="aqua">Xycraft Ore in Jotunheim</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Xycraft Ore in Jotunheim</Color>
  <ItemImage id="xycraft_world:aluminum_ore_stone" scale="2" />

  Architect's Exodus adds <Color id="green">Xycraft Aluminum Ore</Color> generation to <Color id="aqua">Jotunheim</Color> via a custom biome modifier. The Xychorium colour ores (Light/Dark/Blue/Green/Red) are <Color id="yellow">not</Color> added here — only Aluminum.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">What Spawns</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The pack injects `xycraft_world:ore_aluminum` into the `#ftb:is_jotunheim` biome tag at the `underground_ores` worldgen step. This is the same Aluminum ore feature that vanilla Xycraft uses in the Overworld — three variants depending on the surrounding stone:

<ItemGrid>
  <ItemIcon id="xycraft_world:aluminum_ore_stone" />
  <ItemIcon id="xycraft_world:aluminum_ore_deepslate" />
  <ItemIcon id="xycraft_world:aluminum_ore_kivi" />
</ItemGrid>

- <ItemLink id="xycraft_world:aluminum_ore_stone" /> — normal stone host
- <ItemLink id="xycraft_world:aluminum_ore_deepslate" /> — deepslate host
- <ItemLink id="xycraft_world:aluminum_ore_kivi" /> — embedded in Kivi (special host found in geode formations)

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Why It Matters</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Aluminum is the gating material for the Xycraft <ItemLink id="xycraft_machines:machine_base" /> — which is required for every Xycraft Machine recipe (Extractor, [Light Field](light_field.md), etc.). Until you reach Jotunheim, Aluminum is restricted to Overworld biomes. Once you have Jotunheim access, you'll find significant Aluminum yield while you're already mining there for the other Jotunheim-exclusive ores.

<Color id="gold">Tip:</Color> If you spot a Kivi geode in Jotunheim, the Kivi-host aluminum variant inside it gives you both Aluminum and Kivi in one mining trip — useful for the Light Field recipe.

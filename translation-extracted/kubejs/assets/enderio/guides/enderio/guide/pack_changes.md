---
navigation:
  title: Changes in This Pack
  icon: enderio:grains_of_infinity
  parent: index.md
  position: 7
item_ids:
  - enderio:grains_of_infinity
  - enderio:dark_steel_ingot
  - enderio:soularium_ingot
  - enderio:end_steel_ingot
  - enderio:conduit_binder_composite
  - enderio:crafter
  - enderio:primitive_alloy_smelter
  - enderio:vibrant_photovoltaic_module
  - enderio:powered_spawner
  - enderio:empty_soul_vial
---

# <Color id="dark_aqua">Changes in This Pack</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_aqua">Changes in This Pack</Color>

  <ItemImage id="enderio:grains_of_infinity" scale="2" />

  Ender IO opens up at <Color id="aqua">Jotunheim</Color>. Its alloys have been folded into the pack's shared alloying system, its solar power is gone, and its soul machinery has a large boss blacklist.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Realm Gates</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

| Item | Requirement |
|---|---|
| <ItemLink id="enderio:grains_of_infinity" /> | Reach <Color id="aqua">Jotunheim</Color> |
| <ItemLink id="enderio:dark_steel_ingot" /> | Reach <Color id="aqua">Jotunheim</Color> |
| <ItemLink id="enderio:conduit_binder_composite" /> | Reach <Color id="aqua">Jotunheim</Color> |
| <ItemLink id="enderio:crafter" /> | Reach <Color id="green">Midgard</Color> |

Those four are the whole gate. Everything downstream is limited only by the materials.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Grains of Infinity</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Ender IO normally allows fire crafting in the Overworld only, which would strand the whole mod in one realm. The pack adds <Color id="aqua">Jotunheim</Color>, <Color id="aqua">Niflheim</Color>, <Color id="red">Muspelheim</Color> and <Color id="gold">Asgard</Color> to that list.

<Color id="red">Helheim and Alfheim are not on it</Color>, and the base block is always bedrock. Deepslate never works, regardless of realm.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Alloys Moved to Shared Recipes</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The Alloy Smelter recipes for <ItemLink id="enderio:dark_steel_ingot" />, <ItemLink id="enderio:soularium_ingot" /> and <ItemLink id="enderio:end_steel_ingot" /> were removed and rebuilt through the pack's unified alloying system. The result is the same ingot from the same ingredients, but now available in three machines instead of one:

- The <Color id="green">Alloy Smelter</Color>
- A <Color id="green">Create mixer</Color>
- A <Color id="green">Thermal Induction Smelter</Color>

Dark Steel also gains a <Color id="green">Tinkers' Construct smeltery</Color> route: molten Iron plus molten Obsidian makes molten Black Steel, and Black Steel plus more Obsidian makes molten Dark Steel. You will require the <Color id="aqua">Jotunheim</Color> stage for this recipe to be unlocked.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Removed</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:vibrant_photovoltaic_module" />
  ### <Color id="aqua">Photovoltaic Modules</Color>
</Row>

<Color id="red">All three solar modules are uncraftable.</Color> The Stirling Generator is the only EnderIO generator left, so plan to import power from another mod.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:primitive_alloy_smelter" />
  ### <Color id="aqua">Primitive Alloy Smelter</Color>
</Row>

<Color id="red">Removed.</Color> There is no fuel-burning stepping stone, so your first alloys wait on a powered Alloy Smelter, or on the Create and Thermal routes above.

<ItemImage id="minecraft:air" scale="0.25"/>

Also gone, mostly to stop duplicate ways of making the same thing:

- EnderIO's <Color id="green">powdered</Color> dusts for coal, copper, ender pearl, gold, iron, obsidian, quartz and tin, along with its Silicon recipe, all deferring to the unified versions
- SAG milling of <Color id="green">clay</Color> and <Color id="green">sand</Color>
- EnderIO's own stick recipe

Ender Pearl SAG milling is retargeted, and now yields <Color id="green">9 AE2 Ender Dust</Color>.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Soul Machinery Blacklists</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enderio:empty_soul_vial" />
  ### <Color id="aqua">What You Cannot Capture</Color>
</Row>

Two blacklists exist, each covering around <Color id="gold">65 entity types</Color>. One blocks capture in a <ItemLink id="enderio:empty_soul_vial" />, the other blocks use in a <ItemLink id="enderio:powered_spawner" />.

Between them they cover the Wither, the Ender Dragon, the full Cataclysm boss and mini-boss roster, and the pack's own boss entities. Soul vialling a boss to farm it is not a strategy that works here.

<ItemImage id="minecraft:air" scale="0.25"/>

The <ItemLink id="enderio:crafter" /> recipe is also rebuilt, using a Void Chassis, iron gears, silicon and Black Quartz.

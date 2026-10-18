---
navigation:
  title: Changes in This Pack
  icon: embers:ember_grit
  parent: index.md
  position: 7
item_ids:
  - embers:ember_grit
  - embers:ember_bore
  - embers:tinker_hammer
  - embers:mechanical_core
  - embers:mixer_centrifuge
  - embers:stamp_base
  - embers:ancient_golem_spawn_egg
  - ae2:logic_processor
  - ftb:dwarven_processor
  - ftbmaterials:silver_ingot
  - ftbmaterials:lead_ingot
---

# <Color id="gold">Changes in This Pack</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="gold">Changes in This Pack</Color>

  <ItemImage id="ember_grit" scale="2" />

  Embers is not stage gated here. Instead it is anchored to <Color id="red">Muspelheim</Color> through worldgen and the Bore, and its Mixer Centrifuge and Stamper have been expanded into pack-wide infrastructure that other mods depend on.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">The Bore Only Runs in Muspelheim</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_bore" />
  ### <Color id="aqua">Ember Bore</Color>
</Row>

The Bore's output table has been rewritten. Its only listed dimension is <Color id="red">Muspelheim</Color>, with a maximum height of <Color id="gold">Y -20</Color> and a requirement of three bedrock blocks beneath the blades. Embers' Nether boring entries are switched off.

Everything else in Embers is craftable from the start, so you can build and plumb your entire workshop before you ever reach Muspelheim. It simply will not have any Ember to run on.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ores and Mobs</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Embers' own silver and lead ore blocks are unified away, and the pack repoints Embers' ore features at the shared versions, placing them in <Color id="red">Muspelheim</Color>: silver at vein size 6, lead at vein size 8.

You will not find an Embers silver ore in JEI, only the unified <ItemLink id="ftbmaterials:silver_ingot" /> and <ItemLink id="ftbmaterials:lead_ingot" /> ores. This is only Embers' contribution to worldgen, though. Both metals also generate widely from Thermal and Occultism across every overworld-tagged realm, so neither is Muspelheim-exclusive and neither will hold up your progress.

<Color id="green">Ancient Golems</Color> are also added to Muspelheim's spawn list. They are the source of Archaic Bricks, which alchemy needs before it can duplicate them.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">The Mixer Is Now the Pack's Alloy Station</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mixer_centrifuge" />
  ### <Color id="aqua">Cross-Mod Alloys</Color>
</Row>

Sixteen alloys spanning Thermal and Tinkers' Construct have been added to the Mixer Centrifuge, from Bronze and Invar up to Netherite, Manyullyn and Queen's Slime. The full table is on the [Metallurgy](metallurgy.md) page.

<Color id="yellow">Brass is the deliberate exception</Color>, removed so that it stays the job of an alloy smelter or a Create mixer.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">The Stamper Makes Circuits</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="stamp_base" />
  ### <Color id="aqua">Processors</Color>
</Row>

This is the change most likely to catch you out, because it makes Embers a prerequisite for <Color id="aqua">Applied Energistics</Color> rather than an optional side mod. Processor production runs through Embers stamping.

<ItemGrid>
  <ItemIcon id="ae2:logic_processor" />
  <ItemIcon id="ae2:engineering_processor" />
  <ItemIcon id="ae2:calculation_processor" />
  <ItemIcon id="megacells:accumulation_processor" />
  <ItemIcon id="ftb:dwarven_processor" />
</ItemGrid>

Stamp silicon into printed silicon, stamp printed silicon with redstone into an incomplete processor, then stamp that with the matching molten metal to finish it:

| Processor | Finished with |
|---|---|
| Logic | Molten Gold |
| Engineering | Molten Diamond |
| Calculation | Molten Certus Quartz |
| Accumulation | Molten Sky Steel |
| <Color id="gold">Dwarven</Color> | Molten Dawnstone |

The Dwarven Processor is exclusive to this pack, and Dawnstone means it is exclusive to Embers.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Other Additions</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

- <Color id="green">Dragonsteel</Color> is alloyed in the Mixer from Dragonblood and molten Dragonsteel, in fire, ice and lightning variants, then stamped into ingots.
- Two extra <Color id="green">aspecti</Color> are stamped from an Ember Shard: a Dragonsteel one and a Gaia one.
- <Color id="green">GeOre shards</Color> for copper, gold, iron, lead, nickel, silver and tin can be melted directly in the Melter.
- The <ItemLink id="embers:tinker_hammer" /> recipe drops its lead, becoming five iron ingots and two sticks.
- The <ItemLink id="embers:mechanical_core" /> is rebuilt around iron, lead, a Caminite Brick and a cauldron.
- Embers' <Color id="red">silver tool set</Color> is removed, as are its duplicate lead and sticky piston recipes.

---
navigation:
  title: Getting Started
  icon: ars_nouveau:source_gem
  parent: index.md
  position: 1
item_ids:
  - ars_nouveau:novice_spell_book
  - ars_nouveau:apprentice_spell_book
  - ars_nouveau:archmage_spell_book
  - ars_nouveau:source_gem
  - ars_nouveau:imbuement_chamber
  - ars_nouveau:scribes_table
  - ars_nouveau:archwood_log
  - ars_nouveau:magebloom_crop
  - ars_nouveau:magebloom_fiber
  - ars_nouveau:blank_parchment
---
# <Color id="light_purple">Getting Started</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Getting Started</Color>
  <ItemImage id="source_gem" scale="2" />

  Welcome to Ars Nouveau. This guide covers everything you need to begin your journey into spell crafting, from finding natural resources to building your first magical workstations.

  To get started with this mod, you'll need to clear the <CommandLink command="/ftbquests open_book 00770A59B8189794" title="Go to Maze Quest" close={true}><Color id="red">Helheim Maze</Color></CommandLink>.
</Column>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">World Generation</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Several resources spawn naturally in realms other than <Color id="red">Helheim</Color>. <Color id="green">Archwood Trees</Color> come in decorative variants and are used for crafting Casting Wands. <Color id="green">Source Berries</Color> do NOT spawn in the world, but can be crafted using <CommandLink command="/guideme open @s bloodmagic:guide bloodmagic:crafting.md" title="Open GuideMe Page" close={true}><Color id="red">Blood Magic Alchemy Arrays</Color></CommandLink> and can be used to craft Mana Regen potions. <ItemLink id="source_gem" />s are obtained by imbuing Amethyst or Lapis in an <ItemLink id="imbuement_chamber" />, which can be sped up with Source.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Obtaining Source Gems</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="imbuement_chamber" />
  ### <Color id="aqua">Imbuement Chamber</Color>
</Row>

Build an <Color id="green">Imbuement Chamber</Color> and place Amethyst or Lapis inside. The chamber will imbue the item with Source to create <ItemLink id="source_gem" />. It passively accumulates Source or draws from nearby Source Jars.

The <Color id="green">Imbuement Chamber</Color> can be crafted in <Color id="red">Helheim</Color> using Cthonic Gold.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spell Books</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="novice_spell_book" />
  ### <Color id="aqua">Ars Spell Books</Color>
</Row>

Three tiers of spell books unlock progressively more powerful glyphs. The <Color id="green">Novice Spell Book</Color> grants access to Tier 1 spells, the <Color id="green">Apprentice Spell Book</Color> unlocks Tier 2, and the <Color id="green">Archmage Spell Book</Color> unlocks Tier 3.

Higher tier books provide more spell slots, additional mana, and increased mana regeneration. Upgrading your spell book transfers all learned spells. Books can also be dyed to customize their appearance.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Learning New Glyphs</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="scribes_table" />
  ### <Color id="aqua">Scribe's Table</Color>
</Row>

The <Color id="green">Scribe's Table</Color> is used to learn new glyphs. Use a spell book on the table to open the codex. Each glyph requires a specific set of items (check JEI for each Glyph) and experience points.

Select a glyph, throw the required items onto the table, and the table scribes a new glyph into your spell book. The Scribe's Table is also used for inscribing spells onto [Equipment, Wand, and Spell Parchments](equipment.md).


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mana</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Spell Mana is consumed when casting spells. Your maximum mana and regeneration rate can be increased in several ways:

- Wearing <Color id="green">Mage Armor</Color> sets
- Applying <Color id="green">Mana Boost</Color> and <Color id="green">Mana Regen</Color> enchantments to your gear
- Unlocking more glyphs in your spell book

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Materials</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="magebloom_crop" />
  ### <Color id="aqua">Magebloom</Color>
</Row>

Using the Enchanting Apparatus, you can craft <Color id="light_purple">Magebloom Seeds</Color>. When harvested, Magebloom can be turned into <ItemLink id="magebloom_fiber" />, the key ingredient for crafting magical armor.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="blank_parchment" />
  ### <Color id="aqua">Blank Parchment</Color>
</Row>

Magebloom Fiber can also be used to craft <Color id="green">Blank Parchment</Color>. To inscribe a spell, use the parchment on a Scribe's Table, select the spell in your Spell Book, then sneak-right click the parchment. Spell Parchment is used for spell turrets, reactive enchantments, item filters, and crafting Warp Scrolls.

<ItemImage id="minecraft:air" scale="0.25"/>
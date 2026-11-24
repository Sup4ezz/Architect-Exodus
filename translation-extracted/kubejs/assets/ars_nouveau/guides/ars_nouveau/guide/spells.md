---
navigation:
  title: Spell Crafting
  icon: ars_nouveau:glyph_projectile
  parent: index.md
  position: 2
item_ids:
  - ars_nouveau:glyph_projectile
  - ars_nouveau:glyph_touch
  - ars_nouveau:glyph_self
  - ars_nouveau:glyph_underfoot
  - ars_nouveau:blank_glyph
  - ars_nouveau:spell_parchment
---
# <Color id="light_purple">Spell Crafting</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Spell Crafting</Color>
  <ItemImage id="glyph_projectile" scale="2" />

  Spells in Ars Nouveau are built from modular Glyphs arranged in a chain. Understanding the glyph system is key to mastering magic.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Your First Spell</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

To create a spell, hold a Spell Book and press <Color id="green"><KeyBind id="key.ars_nouveau.open_book" /></Color> (Default: C) to open the spell crafting menu. Every spell starts with a <Color id="aqua">Form</Color> which determines how the spell is delivered. Select <Color id="green">Projectile</Color> as the form, then add an <Color id="aqua">Effect</Color> like <Color id="green">Harm</Color> to define what the spell does. Name your spell and click Save.

The mana cost is displayed at the bottom of the menu. On the right side, numbered slots store your saved spells. On the left, you can change spell colors and adjust settings.

Try using your new spell in the world. Many useful Effects (including <Color id="green">Break</Color>) live in Tier 2 — to unlock them, build the upgraded Spell Book at the Scribe's Table. Harder blocks like Obsidian additionally require <Color id="green">Augments</Color> to strengthen the spell. You can learn new Glyphs from the [Scribe's Table](getting_started.md).

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">How Spells Work</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Every spell starts with a <Color id="green">Form</Color> glyph that determines how the spell is delivered. After the Form, add <Color id="green">Effect</Color> glyphs to define what the spell does, and <Color id="green">Augment</Color> glyphs to modify the behavior.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="glyph_projectile" />
  ### <Color id="aqua">Form Glyphs</Color>
</Row>

<ItemImage id="minecraft:air" scale="0.25"/>


- <ItemLink id="glyph_projectile" /> - Fires a spell projectile forward
- <ItemLink id="glyph_touch" /> - Applies spell on contact
- <ItemLink id="glyph_self" /> - Casts on yourself
- <ItemLink id="glyph_underfoot" /> - Casts at the block below you

<ItemImage id="minecraft:air" scale="0.25"/>

After the Form glyph, add Effect glyphs such as Break, Harm, Heal, Ignite, Freeze, and many more. Then augment them with Amplify, Extend Time, AOE, Pierce, and other modifiers to customize the spell further.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Glyph Tiers</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Glyphs are organized into three tiers, each requiring its corresponding spell book tier or higher.

### <Color id="aqua">Tier 1 - Basic Effects</Color>

Harm, Harvest, Ignite, Freeze, Light, Snare, Launch, Pull, Pickup, Place Block, and more. These are the foundation of your spell arsenal.

### <Color id="aqua">Tier 2 - Advanced Effects</Color>

Break, AOE, Heal, Grow, Smelt, Explosion, Cold Snap, Gravity, Fortune, Exchange, Invisibility, Wind Shear, and more. These provide much greater versatility and power.

### <Color id="aqua">Tier 3 - Powerful Effects</Color>

Lightning, Blink, Wither, Hex, Fangs, Summon Undead/Vex/Decoy, Glide, Wall, Linger, Split, Burst, and more. These are the most potent glyphs available, capable of devastating effects.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Storing Spells</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spell_parchment" />
  ### <Color id="aqua">Spell Parchment</Color>
</Row>

Spells can be inscribed onto <Color id="green">Spell Parchment</Color> at the Scribe's Table for use beyond your spell book.

Spell Parchment is used in several important ways:

- <Color id="green">Spell Turrets</Color> - Automate spell casting with turrets that fire inscribed spells
- <Color id="green">Reactive Enchantment</Color> - Apply spells to equipment that trigger on specific events
- <Color id="green">Runic Chalk</Color> - Create spell-casting runes on the ground

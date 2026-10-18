---
navigation:
  title: Brewing in Hel
  icon: minecraft:brewing_stand
  parent: index.md
  position: 1
item_ids:
  - minecraft:brewing_stand
  - minecraft:blaze_powder
  - irons_spellbooks:alchemist_cauldron
---
# <Color id="red">Brewing Potions in Hel</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Brewing Potions in Hel</Color>
  <ItemImage id="minecraft:brewing_stand" scale="2" />

  Vanilla brewing is built around the Nether — blaze rods for the brewing stand, blaze powder for fuel. In Hel, the Nether is out of reach, so the pack provides <Color id="green">two adapted paths</Color> for brewing. Either path gets you Healing Potions in time for the Hel boss.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Path 1 — Vanilla Brewing Stand (Adapted Recipe)</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="minecraft:brewing_stand" />
  ### <Color id="aqua">Brewing Stand</Color>
</Row>

The Brewing Stand recipe is rewritten so you do <Color id="green">not</Color> need a blaze rod. Instead, craft it with:

- <ItemLink id="create:rose_quartz" /> (from Create)
- <ItemLink id="mysticalagriculture:fire_essence" /> (Mystical Agriculture — earned through Hel farming)
- Plus the standard stone surround

<RecipeFor id="minecraft:brewing_stand" fallbackText="Check JEI — the Hel recipe replaces the blaze rod with Rose Quartz + Fire Essence." />

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="minecraft:blaze_powder" />
  ### <Color id="aqua">Blaze Powder (without Blazes)</Color>
</Row>

Drop <ItemLink id="minecraft:glowstone" /> into a block of <Color id="red">Pyrotheum</Color> fluid. The glowstone is converted into <ItemLink id="minecraft:blaze_powder" /> directly.

<ItemImage id="minecraft:air" scale="0.25"/>

With a working Brewing Stand and a Blaze Powder source, the rest of brewing works as normal: brew an Awkward Potion, then add the active ingredient.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Path 2 — Iron's Spellbooks Alchemist Cauldron</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="irons_spellbooks:alchemist_cauldron" />
  ### <Color id="aqua">Alchemist Cauldron</Color>
</Row>

If you'd rather skip the Brewing Stand entirely, Iron's Spellbooks provides an <ItemLink id="irons_spellbooks:alchemist_cauldron" /> — a cauldron-based brewer that uses fluid-form potions instead of bottles.

Craft the cauldron from iron ingots + amethyst dust + a vanilla cauldron. Throw in a <ItemLink id="iceandfire:dread_shard" /> (drops from Ice and Fire mobs in Hel) to produce an <Color id="green">Awkward Potion fluid</Color> base. From there, add an active ingredient to flavour the potion (Glistering Melon for Healing, etc.) and bottle the result.

This path is fully blaze-free and works without a Brewing Stand. It is also the path the questbook nudges you toward for the <Color id="green">Greater Healing Potion</Color> required to summon Hel.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">What to Brew in Hel</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The questbook flags two specific potions you actually need before leaving Hel:

- <Color id="aqua">Potion of Healing II</Color> — brewed in the Brewing Stand (Path 1). Vital for surviving Hel's combat.
- <Color id="aqua">Greater Healing Potion</Color> — brewed in the Alchemist Cauldron (Path 2). One of the summoning ingredients for the Hel boss ritual.

Both potions are unlocked once you have either brewing system running. Don't try to skip past Hel without at least one stack of healing — the boss fight expects you to have them.

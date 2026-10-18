---
navigation:
  title: Changes in This Pack
  icon: naturesaura:eye
  parent: index.md
  position: 10
item_ids:
  - naturesaura:eye
  - naturesaura:aura_bottle
  - naturesaura:bottle_two_the_rebottling
  - naturesaura:gold_leaf
  - naturesaura:end_flower
  - naturesaura:calling_spirit
  - naturesaura:infused_iron
  - naturesaura:tainted_gold
  - naturesaura:placer
  - naturesaura:auto_crafter
  - naturesaura:sky_ingot
---

# <Color id="green">Changes in This Pack</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Changes in This Pack</Color>

  <ItemImage id="eye" scale="2" />

  Nature's Aura assumes three dimensions. Architect's Exodus has nine realms, so the aura map has been rewritten, a few recipes rerouted through other mods, and some behaviour patched in the companion mod.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Which Realm Has Which Aura</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

This is the single most useful thing to know about Nature's Aura here. Every realm has been mapped onto one of the mod's three aura types, and that mapping decides what you can bottle, where generators work, and which imbalance effects can fire.

<ItemImage id="minecraft:air" scale="0.25"/>

| Aura type | Realms |
|---|---|
| <Color id="yellow">Overworld</Color> | Niflheim, Midgard, Asgard, and inside any Hyperbox |
| <Color id="red">Nether</Color> | Muspelheim, Nidhogg's domain, the Blood Magic Demon Realm |
| <Color id="dark_purple">End</Color> | Jotunheim, Alfheim, the Bifrost, Ginnungagap |

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="yellow">Helheim is deliberately absent from that list.</Color> It carries no mapped type, so it falls back to the mod's generic type. You can still fill a Bottle and Cork there, but you get <Color id="aqua">Bottled Substance</Color>, which no recipe uses. Nature's Aura does not really begin until you leave.

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="green">Hyperboxes are a special case.</Color> Each one is its own dimension with a generated name, so it cannot be listed in a config file. The companion mod handles it instead, forcing <Color id="yellow">Overworld</Color> aura inside any Hyperbox. Aura machinery works in a Hyperbox exactly as it would above ground.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Recipe Changes</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="bottle_two_the_rebottling" />
  ### <Color id="aqua">Bottle and Cork</Color>
</Row>

Now takes <ItemLink id="gold_leaf" /> in place of the planks in its recipe, so you need working Brilliant Fiber before you can bottle anything.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="end_flower" />
  ### <Color id="aqua">End Flower</Color>
</Row>

Normally this only generates in the End. The pack adds a second route: drop <Color id="light_purple">Botania mystical flowers</Color> into a <Color id="dark_purple">Malum Weeping Well</Color> and they come back as End Flowers.

Worth knowing because the End Flower is needed for the improved Environmental Eye, and again much later as one component of <Color id="gold">Aesirium</Color>.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="calling_spirit" />
  ### <Color id="aqua">Spirit of Calling</Color>
</Row>

The normal crafting recipe still works. The pack adds an <Color id="dark_purple">Occultism</Color> alternative: a craft ritual on the <Color id="aqua">Niflheim pentacle</Color>, activated with a Gold Ingot, consuming <ItemLink id="infused_iron" /> and <ItemLink id="tainted_gold" />.

Useful if you have Occultism running but would rather not spend Aura Bottles and a diamond each time.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Removed</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="auto_crafter" />
  ### <Color id="aqua">Auto Crafter</Color>
</Row>

<Color id="red">Removed.</Color> The Auto Crafter multiblock is uncraftable and hidden from JEI. Use another mod's autocrafting instead. Every other Nature's Aura automation block is untouched.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Behaviour Patches</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="placer" />
  ### <Color id="aqua">Imperceptible Builder</Color>
</Row>

The Builder now respects item staging. It checks the <Color id="aqua">owner of the block</Color> rather than whoever happens to be standing nearby, so it will not place something you have not unlocked yet, and it cannot be used to slip past a realm gate.

If a Builder silently refuses to place an item, check whether that item is still locked for you.

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="gold">Aura Bottles have no EMC.</Color> They are excluded from ProjectE's transmutation system, so bottled aura cannot be condensed or duplicated.

<ItemImage id="minecraft:air" scale="0.25"/>

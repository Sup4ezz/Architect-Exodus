---
navigation:
  title: Distillery & Rites
  icon: enchanted:distillery
  parent: index.md
  position: 6
item_ids:
  - enchanted:distillery
  - enchanted:gypsum
  - enchanted:tear_of_the_goddess
  - enchanted:diamond_vapour
  - enchanted:oil_of_vitriol
  - enchanted:demonic_blood
  - enchanted:ender_dew
  - enchanted:refined_evil
  - enchanted:wood_ash
  - enchanted:quicklime
  - enchanted:ritual_chalk
  - enchanted:golden_chalk
  - enchanted:attuned_stone_charged
  - enchanted:circle_talisman
---
# <Color id="dark_purple">Distillery & Rites</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Distillery & Rites</Color>
  <ItemImage id="distillery" scale="2" />

  The Distillery produces advanced reagents from Oven byproducts, and Rites are powerful magical effects performed using chalk circles at the Altar.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">The Distillery</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="distillery" />
  ### <Color id="aqua">Distillery</Color>
</Row>

The Distillery takes magical byproducts from the Witch's Oven and refines them into advanced reagents. It requires an <ItemLink id="attuned_stone" /> to craft and uses <ItemLink id="clay_jar" /> to collect outputs, similar to the Oven.

The Distillery requires a powered Altar nearby to power it.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Distillery Products</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The Distillery produces a variety of reagents used in chalk crafting, Rites, and other advanced recipes:

<ItemGrid>
  <ItemIcon id="gypsum" />
  <ItemIcon id="tear_of_the_goddess" />
  <ItemIcon id="wood_ash" />
  <ItemIcon id="diamond_vapour" />
  <ItemIcon id="oil_of_vitriol" />
  <ItemIcon id="demonic_blood" />
  <ItemIcon id="ender_dew" />
  <ItemIcon id="refined_evil" />
</ItemGrid>

- <ItemLink id="gypsum" /> — A key ingredient for crafting Ritual Chalk.
- <ItemLink id="tear_of_the_goddess" /> — Used in Ritual Chalk and other advanced recipes.
- <ItemLink id="wood_ash" /> — A common distillery product used as a catalyst in various recipes.
- <ItemLink id="diamond_vapour" /> — A rare and valuable distilled essence.
- <ItemLink id="oil_of_vitriol" /> — A corrosive reagent for advanced recipes.
- <ItemLink id="demonic_blood" /> — Used in dark witchcraft Rites.
- <ItemLink id="ender_dew" /> — An otherworldly reagent distilled from ender-related materials.
- <ItemLink id="refined_evil" /> — A potent essence used in the most powerful dark recipes.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ritual Chalk</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ritual_chalk" />
  ### <Color id="aqua">Ritual Chalk</Color>
</Row>

Ritual Chalk is used to draw magic circles on the ground around the Altar. These circles are required to perform Rites. Crafted using <ItemLink id="gypsum" /> and <ItemLink id="tear_of_the_goddess" /> from the Distillery.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="golden_chalk" />
  ### <Color id="aqua">Golden Chalk</Color>
</Row>

An advanced chalk needed for more powerful Rites. Crafted using gold and additional reagents.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Performing Rites</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

To perform a Rite:

1. Draw the correct chalk circle pattern on the ground using <ItemLink id="ritual_chalk" /> or <ItemLink id="golden_chalk" /> — the circle does <Color id="yellow">not</Color> have to surround the Altar; it can be drawn anywhere within range of a powered Altar
2. Drop the required items <Color id="yellow">on the ground inside the circle</Color> — items are <Color id="red">not</Color> placed on the Altar
3. Right-click the central chalk glyph with your bare hand (or an Attuned Stone for stored rites) to begin the Rite

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Rite Accessories</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="attuned_stone_charged" />
  ### <Color id="aqua">Charged Attuned Stone</Color>
</Row>

The Charged Attuned Stone is created by performing a Rite with an <ItemLink id="attuned_stone" />. It is a more powerful version used in advanced recipes.

Rite catalysts that can be used in various recipes include: <ItemLink id="minecraft:redstone" />, <ItemLink id="minecraft:glowstone_dust" />, <ItemLink id="wood_ash" />, and <ItemLink id="quicklime" />.

Charged Attuned Stones are a key point of progression in circle magic, as they allow a witch to perform certain rituals and rites without setting up a new Altar at the circle's location. 

This remote ritual will deplete the Attuned Stone's charge rather than consuming the item entirely, acting as a reusable 'battery' in a way.

The charging rite itself does consume the other items in the rite however so the storage is not entirely free.

Charging the Attuned Stone requires an advanced rite (2 circles) and an Altar nearby with at least 2000 power. This is easily enough achieved with upgraded enhancements and a few nice trees in the area.

<ItemImage id="minecraft:air" scale="0.25"/>

<GameScene zoom="1" background="#333333">
  <IsometricCamera yaw="30" roll="60" pitch="90" />

  {/* Center — golden chalk */}
  <Block id="enchanted:golden_chalk" x="0" y="0" z="0" />

  {/* Inner ring — radius 3 (2-block gap from centre) */}
  <Block id="enchanted:ritual_chalk" x="0"  y="0" z="-3" />
  <Block id="enchanted:ritual_chalk" x="1"  y="0" z="-3" />
  <Block id="enchanted:ritual_chalk" x="-1"  y="0" z="-3" />
  <Block id="enchanted:ritual_chalk" x="2"  y="0" z="-2" />
  <Block id="enchanted:ritual_chalk" x="3"  y="0" z="0"  />
  <Block id="enchanted:ritual_chalk" x="3"  y="0" z="1"  />
  <Block id="enchanted:ritual_chalk" x="3"  y="0" z="-1"  />
  <Block id="enchanted:ritual_chalk" x="2"  y="0" z="2"  />
  <Block id="enchanted:ritual_chalk" x="0"  y="0" z="3"  />
  <Block id="enchanted:ritual_chalk" x="1"  y="0" z="3"  />
  <Block id="enchanted:ritual_chalk" x="-1"  y="0" z="3"  />
  <Block id="enchanted:ritual_chalk" x="-2" y="0" z="2"  />
  <Block id="enchanted:ritual_chalk" x="-3" y="0" z="0"  />
  <Block id="enchanted:ritual_chalk" x="-3" y="0" z="1"  />
  <Block id="enchanted:ritual_chalk" x="-3" y="0" z="-1"  />
  <Block id="enchanted:ritual_chalk" x="-2" y="0" z="-2" />

  {/* Outer ring — radius 5 (1-block gap from inner) */}
  {/* Top */}
  <Block id="enchanted:ritual_chalk" x="-2"  y="0" z="-5" />
  <Block id="enchanted:ritual_chalk" x="-1" y="0" z="-5" />
  <Block id="enchanted:ritual_chalk" x="0"  y="0" z="-5" />
  <Block id="enchanted:ritual_chalk" x="1"  y="0" z="-5" />
  <Block id="enchanted:ritual_chalk" x="2"  y="0" z="-5" />
  {/* Top-right */}
  <Block id="enchanted:ritual_chalk" x="3"  y="0" z="-4" />
  <Block id="enchanted:ritual_chalk" x="4"  y="0" z="-3" />
  {/* Right */}
  <Block id="enchanted:ritual_chalk" x="5"  y="0" z="-2" />
  <Block id="enchanted:ritual_chalk" x="5"  y="0" z="-1" />
  <Block id="enchanted:ritual_chalk" x="5"  y="0" z="0"  />
  <Block id="enchanted:ritual_chalk" x="5"  y="0" z="1"  />
  <Block id="enchanted:ritual_chalk" x="5"  y="0" z="2"  />
  {/* Bottom-right */}
  <Block id="enchanted:ritual_chalk" x="4"  y="0" z="3"  />
  <Block id="enchanted:ritual_chalk" x="3"  y="0" z="4"  />
  {/* Bottom */}
  <Block id="enchanted:ritual_chalk" x="2"  y="0" z="5"  />
  <Block id="enchanted:ritual_chalk" x="1"  y="0" z="5"  />
  <Block id="enchanted:ritual_chalk" x="0"  y="0" z="5"  />
  <Block id="enchanted:ritual_chalk" x="-1" y="0" z="5"  />
  <Block id="enchanted:ritual_chalk" x="-2" y="0" z="5"  />
  {/* Bottom-left */}
  <Block id="enchanted:ritual_chalk" x="-3" y="0" z="4"  />
  <Block id="enchanted:ritual_chalk" x="-4" y="0" z="3"  />
  {/* Left */}
  <Block id="enchanted:ritual_chalk" x="-5" y="0" z="2"  />
  <Block id="enchanted:ritual_chalk" x="-5" y="0" z="1"  />
  <Block id="enchanted:ritual_chalk" x="-5" y="0" z="0"  />
  <Block id="enchanted:ritual_chalk" x="-5" y="0" z="-1" />
  <Block id="enchanted:ritual_chalk" x="-5" y="0" z="-2" />
  {/* Top-left */}
  <Block id="enchanted:ritual_chalk" x="-4" y="0" z="-3" />
  <Block id="enchanted:ritual_chalk" x="-3" y="0" z="-4" />
</GameScene>




<Row>
  <ItemImage id="circle_talisman" />
  ### <Color id="aqua">Circle Talisman</Color>
</Row>

The Circle Talisman allows you to save and recall chalk circle patterns, making it much easier to set up Rites repeatedly. A very useful tool once you start performing Rites regularly.

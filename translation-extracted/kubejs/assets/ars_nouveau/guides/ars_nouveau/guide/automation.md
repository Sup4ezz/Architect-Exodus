---
navigation:
  title: Automation
  icon: ars_nouveau:starbuncle_charm
  parent: index.md
  position: 6
item_ids:
  - ars_nouveau:starbuncle_charm
  - ars_nouveau:wixie_charm
  - ars_nouveau:drygmy_charm
  - ars_nouveau:whirlisprig_charm
  - ars_nouveau:amethyst_golem_charm
  - ars_nouveau:basic_spell_turret
  - ars_nouveau:spell_prism
  - ars_nouveau:spell_sensor
  - ars_nouveau:void_prism
  - ars_nouveau:redstone_relay
  - ars_nouveau:allow_scroll
  - ars_nouveau:deny_scroll
  - ars_nouveau:mimic_scroll
---
# <Color id="light_purple">Automation</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Automation</Color>
  <ItemImage id="starbuncle_charm" scale="2" />

  Ars Nouveau provides magical creatures and spell-casting devices that can automate item transport, crafting, farming, and more.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Magical Creatures</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="starbuncle_charm" />
  ### <Color id="aqua">Starbuncle</Color>
</Row>

Handles item transport. Found naturally in caves, befriended by tossing a <ItemLink id="minecraft:gold_nugget" /> to one. Starbuncles pick up items and deliver them to nearby inventories.

Use a <Color id="green">Dominion Wand</Color> on a chest, then on a Starbuncle to set a delivery destination. To have a Starbuncle pull items from a chest, select the chest first, then use the wand on the Starbuncle. Sneak-use the wand on a Starbuncle to clear its instructions. Control what they carry with <ItemLink id="allow_scroll" /> and <ItemLink id="deny_scroll" />. Can be dyed any color.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="wixie_charm" />
  ### <Color id="aqua">Wixie</Color>
</Row>

Auto-crafting assistant. Obtained by casting <Color id="green">Dispel</Color> on a Witch at half health. Place the charm on a Cauldron to summon the Wixie.

To set a crafting recipe, use the desired output item on the Wixie's Cauldron. Place chests nearby with the required ingredients, and keep a Source Jar next to the Cauldron — each craft requires a small amount of Source. Use a <Color id="green">Dominion Wand</Color> to set the output storage. Wixies can also auto-craft potions when Potion Jars are nearby.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="drygmy_charm" />
  ### <Color id="aqua">Drygmy</Color>
</Row>

Produces mob drops without killing. Found naturally in the wild, befriended by throwing a <Color id="green">Wilden Horn</Color> nearby.

Use the <Color id="light_purple">Drygmy Charm</Color> on a Mossy Cobblestone block to set its home, which converts into a <Color id="green">Drygmy Hedge</Color>. The Drygmy will harvest drops from any mob within 10 blocks of the Hedge, storing items in an adjacent chest. Each harvest requires Source from a nearby jar.

Adding more Drygmys increases drop output, but the most effective method is increasing their happiness — each unique entity type within 10 blocks raises the happiness bonus. Drygmys can also harvest from mobs stored in <Color id="green">Containment Jars</Color>, allowing you to safely use hostile mobs.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="whirlisprig_charm" />
  ### <Color id="aqua">Whirlisprig</Color>
</Row>

Produces natural materials such as wood, crops, seeds, and flowers from surrounding vegetation. Befriended by growing a tree near a wild Whirlisprig.

Use the charm on any flower to summon the Whirlisprig and set its home. When provided Source and storage next to their home block, Whirlisprigs generate natural materials based on surrounding vegetation. A more diverse habitat increases their happiness and output.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="amethyst_golem_charm" />
  ### <Color id="aqua">Amethyst Golem</Color>
</Row>

Harvests, grows, and collects Amethyst clusters. Obtained via the <Color id="green">Ritual of Awakening</Color> performed near Budding Amethyst blocks.

Use the charm to summon the Golem, then set its home with a <Color id="green">Dominion Wand</Color> — select the Golem first, then a chest. The Golem will harvest any crystals within 10 blocks of its home.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Other Golems</Color>

<ItemGrid>
  <ItemIcon id="georenouveau:coal_geore_golem_charm" />
  <ItemIcon id="georenouveau:copper_geore_golem_charm" />
  <ItemIcon id="georenouveau:diamond_geore_golem_charm" />
  <ItemIcon id="georenouveau:emerald_geore_golem_charm" />
  <ItemIcon id="georenouveau:gold_geore_golem_charm" />
  <ItemIcon id="georenouveau:iron_geore_golem_charm" />
  <ItemIcon id="georenouveau:lapis_geore_golem_charm" />
  <ItemIcon id="georenouveau:quartz_geore_golem_charm" />
  <ItemIcon id="georenouveau:redstone_geore_golem_charm" />
  <ItemIcon id="georenouveau:zinc_geore_golem_charm" />
  <ItemIcon id="ars_nouveau:amethyst_golem_charm" />
</ItemGrid>

With <Color id="gold">GeOres</Color>, golems can harvest much more than just Amethyst. Perform the <Color id="green">Ritual of Awakening</Color> near a golem's respective block to summon and command it.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spell Automation</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="basic_spell_turret" />
  ### <Color id="aqua">Spell Turret</Color>
</Row>

Casts spells on a redstone signal, functioning like a magical dispenser. Accepts Touch and Projectile form spells. Draws Source from nearby jars. Can use Place Block and Item Pickup glyphs with an adjacent inventory.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="spell_prism" />
  ### <Color id="aqua">Spell Prism</Color>
</Row>

Redirects spell projectiles in the direction the block faces. Sends a signal to adjacent Observers when a spell passes through.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="spell_sensor" />
  ### <Color id="aqua">Spell Sensor</Color>
</Row>

Outputs a redstone signal when a spell is cast nearby. Signal strength scales based on the length of the spell cast.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="void_prism" />
  ### <Color id="aqua">Void Prism</Color>
</Row>

Destroys any spell projectiles that pass through it. Useful for stopping stray spells in automated setups.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Filter Scrolls</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="allow_scroll" />
  ### <Color id="aqua">Allow Scroll</Color>
</Row>

Magical creatures will only interact with items listed on this scroll. Use it to restrict a Starbuncle to specific materials.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="deny_scroll" />
  ### <Color id="aqua">Deny Scroll</Color>
</Row>

Magical creatures will interact with everything except items listed on this scroll. The inverse of the Allow Scroll.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mimic_scroll" />
  ### <Color id="aqua">Mimic Scroll</Color>
</Row>

Magical creatures will only insert items that match the contents of the attached inventory. Useful for sorting systems.

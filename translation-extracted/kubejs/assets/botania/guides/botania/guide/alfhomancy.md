---
navigation:
  title: Эльфийская магия
  icon: botania:flight_tiara
  parent: index.md
  position: 7
item_ids:
  - botania:alfheim_portal
  - botania:natura_pylon
  - botania:glimmering_livingwood
  - botania:dreamwood
  - botania:elementium_ingot
  - botania:pixie_dust
  - botania:terrasteel_ingot
  - botania:dragonstone
  - botania:manasteel_ingot
  - botania:mana_pearl
  - botania:mana_diamond
  - botania:elf_quartz
  - botania:flight_tiara
  - botania:gaia_head
  - botania:life_essence
  - botania:gaia_pylon
  - botania:gaia_ingot
  - botania:spawner_claw
  - botania:gaia_spreader
  - botania:dice
  - botania:flugel_eye
  - botania:infinite_fruit
  - botania:king_key
  - botania:odin_ring
  - botania:thor_ring
  - botania:loki_ring
  - botania:terra_axe
  - mythicbotany:alfsteel_ingot
  - mythicbotany:alfsteel_pylon
  - mythicbotany:alfsteel_template
  - mythicbotany:alfheim_rune
  - mythicbotany:asgard_rune
  - mythicbotany:helheim_rune
  - mythicbotany:joetunheim_rune
  - mythicbotany:muspelheim_rune
  - mythicbotany:midgard_rune
  - mythicbotany:nidavellir_rune
  - mythicbotany:niflheim_rune
  - mythicbotany:vanaheim_rune
  - mythicbotany:rune_holder
  - mythicbotany:central_rune_holder
  - mythicbotany:gjallar_horn_empty
  - mythicbotany:gjallar_horn_full
  - mythicbotany:kvasir_mead
  - mythicbotany:faded_nether_star
  - mythicbotany:yggdrasil_branch
  - mythicbotany:dream_cherry
  - mythicbotany:elementium_ore
  - mythicbotany:dragonstone_ore
  - mythicbotany:raw_elementium
---
# <Color id="green">Эльфийская магия</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Эльфийская магия</Color>
  <ItemImage id="flight_tiara" scale="2" />
  Алфомантия is the art of trading with the Elves of Alfheim. By opening a portal and sending items through, you gain access to powerful Elven materials — and eventually face the ultimate Botania challenge: the Gaia Guardian.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">The Portal to Alfheim</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alfheim_portal" />
  ### <Color id="aqua">Alfheim Portal</Color>
</Row>

Once upon a time, Elves shared the world with Minecraftians. Due to events unknown, they were banished back to their own world, **Alfheim**, never to return. Experiments have been performed to re-establish a connection, and a theoretical procedure for creating a portal has been devised.

The net requirements are:
- 8 <ItemLink id="botania:livingwood" /> blocks (any variant — logs, wood, stripped, etc.)
- 3 <ItemLink id="botania:glimmering_livingwood" /> blocks
- 1 <Color id="aqua">Elven Gateway Core</Color>
- At least 2 <ItemLink id="botania:mana_pool" /> with <ItemLink id="natura_pylon" /> directly above them

At least two Mana Pools with Natura Pylons need to be within an 11x11x11 area around the Core. The initial activation costs a huge amount of Mana and is performed by right-clicking the core with a <ItemLink id="botania:twig_wand" />. The portal draws Mana from all pyloned pools equally — if any pool runs out, the connection closes.

The link is too weak to transfer living beings, but items can make it through. Mana from the surrounding pools is needed for items to survive a return trip. Toss items into the portal to trade with the Elves.

> <Color id="gold">Tip:</Color> Once the portal is open, toss in this Lexicon — the Elves will transcribe their knowledge into it.

<GameScene zoom="2" background="#222222" interactive={true}>
  <ImportStructure src="assets/alfheim_portal.nbt" />
  <IsometricCamera yaw="45" pitch="30" />
</GameScene>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alfheim_portal" />
  ### <Color id="aqua">Alfheim Dimension</Color>
</Row>

Alfheim is a lush dimension with unique biomes including Dreamwood Forests, Golden Fields, Alfheim Hills, Lakes, and Plains. Botania flowers spawn naturally here, and you can find <ItemLink id="mythicbotany:elementium_ore" /> and <ItemLink id="mythicbotany:dragonstone_ore" /> as mineable ores instead of relying solely on Elven Portal trades.

> <Color id="red">Warning:</Color> Flight is disabled in Alfheim. Plan your exploration accordingly.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Resources of Alfheim</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Alfheim contains a myriad of valuable resources. The Elves are interested in trading resources native to their lands in exchange for materials from ours.

<Row>
  <ItemImage id="dreamwood" />
  ### <Color id="aqua">Dreamwood</Color>
</Row>

The Elven version of Livingwood. Obtained by tossing <ItemLink id="botania:livingwood" /> through the portal. Can be crafted into decorative blocks just like Livingwood can. Used in advanced devices and spreaders.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="elementium_ingot" />
  ### <Color id="aqua">Elementium</Color>
</Row>

Elven metal obtained by tossing <ItemLink id="botania:manasteel_ingot" /> through the portal. Used to craft Elementium tools and armor, which have unique enchantment-like properties.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="pixie_dust" />
  ### <Color id="aqua">Pixie Dust</Color>
</Row>

Obtained by tossing <ItemLink id="botania:mana_pearl" /> and <ItemLink id="botania:mana_diamond" /> through the portal together. A key crafting ingredient for endgame Botania items.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="dragonstone" />
  ### <Color id="aqua">Dragonstone</Color>
</Row>

Obtained by tossing <ItemLink id="minecraft:diamond" /> through the portal. Used in powerful endgame recipes and lens crafting.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="elf_quartz" />
  ### <Color id="aqua">Elven Quartz</Color>
</Row>

The Elves covet Nether Quartz, as the quartz in their world is tinted green. Toss <ItemLink id="minecraft:quartz" /> through the portal to receive Elven Quartz. It holds no functional difference to other quartz types, including any decorative variants.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mythicbotany:alfsteel_ingot" />
  ### <Color id="aqua">Alfsteel Ingot</Color>
</Row>

The next tier of Botania metal beyond Terrasteel and Elementium. Created by infusing Elementium with massive amounts of Mana at the Mana Infuser. Alfsteel equipment is among the strongest in the pack.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ritual of Gaia</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="life_essence" />
  ### <Color id="aqua">Gaia Guardian</Color>
</Row>

The **Ritual of Gaia** is a trial often undertaken by elves. It yields <ItemLink id="life_essence" />, which are coveted as fragments of the power of the Goddess of Gaia herself.

This ritual requires:
- An **active Beacon**
- <ItemLink id="gaia_pylon" /> surrounding it (functioning as an altar)
- A single <ItemLink id="botania:terrasteel_ingot" /> as a sacrifice

<GameScene zoom="1" background="#222222" interactive={true}>
  <ImportStructure src="assets/gaia_ritual.nbt" />
  <RemoveBlocks id="minecraft:snow" />
  <RemoveBlocks id="minecraft:snow_block" />
  <RemoveBlocks id="minecraft:powder_snow" />
</GameScene>

To start the ritual, sneak-right click the Beacon with the Terrasteel Ingot, take a step back, and prepare to fight for your life. The fight with the Guardian of Gaia can be even harder than that with the Wither. Upon the Guardian's defeat, a handful of Gaia Spirits is dropped as a prize.

<Color id="gold">Recommended gear:</Color> A set of enchanted Elementium Armor, a <ItemLink id="botania:terra_sword" />, and a miscellany of Brews and Trinkets. The Beacon's effect is forcibly nullified during the battle. The Guardian has a massive pool of health, so Enchantments and Brews are a must.

The difficulty and reward scale with the number of people participating. Over five people in the vicinity can create chaotic and dangerous situations — rituals on that scale probably shouldn't be attempted.

> <Color id="red">Warning:</Color> Stay away from the purple.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="gaia_ingot" />
  ### <Color id="aqua">Gaia Guardian II</Color>
</Row>

Combining <ItemLink id="botania:terrasteel_ingot" /> and <ItemLink id="life_essence" /> creates a <ItemLink id="gaia_ingot" /> — an utterly useless alloy where the two energies cancel almost perfectly. However, this ingot can be sacrificed to a Beacon to summon an even stronger Gaia Guardian with more strength, speed, and resistance.

Slaying this greater Guardian yields many more Gaia Spirits, as well as a handful of goodies and rare treasure. It's a worthwhile foe.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Endgame Items</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="flight_tiara" />
  ### <Color id="aqua">Flugel Tiara</Color>
</Row>

Grants creative flight powered by Mana. Multiple wing styles are available as cosmetic variants. One of the most coveted Botania items.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="gaia_spreader" />
  ### <Color id="aqua">Gaia Spreader</Color>
</Row>

The most powerful Mana Spreader tier. Fires larger Mana bursts with greater capacity. Essential for high-throughput Mana networks.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spawner_claw" />
  ### <Color id="aqua">Life Imbuer</Color>
</Row>

An advanced device that uses Gaia Spirits in its crafting. Part of the endgame Botania progression that opens up after defeating the Gaia Guardian.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">The Relics of the Aesir</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="dice" />
  ### <Color id="aqua">Dice of Fate</Color>
</Row>

The high clans of Alfheim have passed down an old legend: "Whosoever rolls a Die of Fate shall be rewarded with a Gift from the Gods." These gifts, known as the **Relics of the Aesir**, are soulbound and unique. The Dice of Fate is six-sided, implying the existence of six Relics.

The <ItemLink id="dice" /> is dropped by the Gaia Guardian II. Relics know who earned them — giving someone a Relic they didn't earn is a bad idea. The same Relic may not be awarded to the same person twice, so keeping an earned Relic safe is high priority.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="flugel_eye" />
  ### <Color id="aqua">Eye of the Flugel</Color>
</Row>

Unlike the crafted <ItemLink id="flight_tiara" />, the Eye of the Flugel contains primordial Flugel magic — strong enough to recall its owner to a previously-visited location.

Sneak-right clicking somewhere binds the Eye to that position. Holding right-click with a bound Eye uses Mana to warp its owner back to the bound location. The Eye cannot warp across dimensions.

Having an Eye of the Flugel on hand also allows a Flugel Tiara user to fly with an empty flight bar, at a higher Mana cost.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="infinite_fruit" />
  ### <Color id="aqua">The Fruit of Grisaia</Color>
</Row>

Bestows its bearer with an endless supply of nourishment. It can be eaten like any other food, but uses Mana to replenish hunger instead of being consumed. Get used to the taste of apple.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="king_key" />
  ### <Color id="aqua">Key of the King's Law</Color>
</Row>

A powerful relic that materializes weapons from thin air. Holding right-click begins summoning glowing projectiles. Up to twenty can be created at once, and releasing the key launches them one at a time at the point the summoner is looking towards. These projectiles move at high velocities and explode on contact.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="odin_ring" />
  ### <Color id="aqua">Ring of Odin</Color>
</Row>

One of the three mythical rings of the Aesir. The Ring of Odin grants its bearer the vitality and resistance of the Father God. It provides **ten extra hearts** of health and indefinite protection from drowning, suffocation, fire, and starvation.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="thor_ring" />
  ### <Color id="aqua">Ring of Thor</Color>
</Row>

One of the three mythical rings of the Aesir. The Ring of Thor bestows the might of the Thunder God. When equipped, it dramatically increases a <ItemLink id="botania:terra_pick" />'s area of effect.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="loki_ring" />
  ### <Color id="aqua">Ring of Loki</Color>
</Row>

One of the three mythical rings of the Aesir. The Ring of Loki allows the wearer to call upon the Trickster God's ability to effectively be in multiple places at once.

To use an equipped Ring of Loki:
1. Sneak-right click a block with an empty hand to designate it as the "origin"
2. Sneak-right click other blocks to store their offsets from the origin
3. Sneak-right click the origin again to finish the selection
4. When placing blocks while sneaking, all wireframe locations will have blocks placed there too

Sneak-right clicking a stored block during selection removes it. To clear a completed selection, sneak-right click the ground twice.

The <ItemLink id="botania:terra_pick" /> and <ItemLink id="botania:terra_axe" /> will also break blocks at these locations when sneaking. The ring consumes Mana for each block placed, and the larger the selection, the more expensive each placement becomes.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Legendary Items</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mythicbotany:gjallar_horn_empty" />
  ### <Color id="aqua">Gjallarhorn</Color>
</Row>

The horn that heralds Ragnarok. Craft the <ItemLink id="mythicbotany:gjallar_horn_empty" /> and fill it to create the <ItemLink id="mythicbotany:gjallar_horn_full" />. When sounded, it triggers powerful effects.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mythicbotany:kvasir_mead" />
  ### <Color id="aqua">Kvasir's Mead</Color>
</Row>

The mead of poetry from Norse mythology. A powerful consumable that grants significant temporary buffs.

<ItemImage id="minecraft:air" scale="0.25"/>

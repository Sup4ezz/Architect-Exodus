---
navigation:
  title: Устройства
  icon: botania:hourglass
  parent: index.md
  position: 5
item_ids:
  - botania:hourglass
  - botania:mana_enchanter
  - mythicbotany:mana_infuser
  - mythicbotany:mana_collector
  - botania:turntable
  - botania:alchemy_catalyst
  - botania:conjuration_catalyst
  - botania:brewery
  - botania:terra_plate
  - botania:runic_altar
  - botania:open_crate
  - botania:craft_crate
  - botania:drum_wild
  - botania:abstruse_platform
  - botania:spectral_platform
  - botania:red_string_container
  - botania:red_string_dispenser
  - botania:red_string_relay
  - botania:animated_torch
  - botania:fel_pumpkin
  - botania:cocoon
  - botania:incense_plate
  - botania:avatar
---
# <Color id="green">Устройства</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Устройства</Color>
  <ItemImage id="hourglass" scale="2" />
  Botania предлагает множество полезных устройств, работающих на Mana. От станций для создания предметов до инструментов автоматизации — эти блоки составляют основу любой системы Botania.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Создание предметов и инфузия</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="runic_altar" />
  ### <Color id="aqua">Runic Altar</Color>
</Row>

Runic Altar создаёт Runes: разместите сверху ингредиенты и подавайте Mana с помощью Mana Spreader. Сначала бросьте Livingrock, затем ингредиенты рецепта и подавайте Mana до завершения процесса. Для завершения щёлкните ПКМ с Wand of the Forest.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="brewery" />
  ### <Color id="aqua">Brewery</Color>
</Row>

Brews Botania potions using Mana. Place a Vial or Flask on the Brewery, toss in the required ingredients, then supply Mana. Flasks have multiple uses compared to single-use Vials.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="terra_plate" />
  ### <Color id="aqua">Terrestrial Agglomeration Plate</Color>
</Row>

Converts resources into Terrasteel using massive amounts of Mana. Place on a 5x5 platform of Livingrock and Lapis Blocks with Mana Pools adjacent. Drop a Manasteel Ingot, Mana Diamond, and Mana Pearl on the plate to begin.

<GameScene zoom="3" background="#222222" interactive={true}>
  <ImportStructure src="assets/terra_plate.nbt" />
</GameScene>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="enchanter" />
  ### <Color id="aqua">Mana Enchanter</Color>
</Row>

Enchants items using Mana instead of XP. Build on top of a Mana Pool with pillars of Livingrock and Obsidian at each corner. Place an enchanted book and the target item, then supply Mana.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mythicbotany:mana_infuser" />
  ### <Color id="aqua">Mana Infuser</Color>
</Row>

The central crafting station for Mythic Botany. Place it on top of a Mana Pool and toss items onto it to infuse them with Mana. Used to create Alfsteel, realm runes, and other advanced materials.

<GameScene zoom="3" background="#222222" interactive={true}>
  <ImportStructure src="assets/alfheim_plate.nbt" />
</GameScene>


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mythicbotany:mana_collector" />
  ### <Color id="aqua">Mana Collector</Color>
</Row>

Collects ambient Mana from the environment. Place near the Mana Infuser to supplement its Mana intake.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Catalysts</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="alchemy_catalyst" />
  ### <Color id="aqua">Alchemy Catalyst</Color>
</Row>

Place adjacent to a Mana Pool to enable Alchemy recipes. These transform one item into another when tossed into the pool.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="conjuration_catalyst" />
  ### <Color id="aqua">Conjuration Catalyst</Color>
</Row>

Place adjacent to a Mana Pool to enable Conjuration recipes. These duplicate items at the cost of Mana.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Automation & Utility</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="hourglass" />
  ### <Color id="aqua">Hourglass</Color>
</Row>

Emits redstone pulses at configurable intervals using sand. Essential for automation timing. Place sand inside to set the duration.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="open_crate" />
  ### <Color id="aqua">Open Crate</Color>
</Row>

Drops items placed into it into the world below. Useful for automating Mana Pool recipes by dropping ingredients in on a redstone pulse.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="open_crate" />
  ### <Color id="aqua">Crafting Crate</Color>
</Row>

A 3x3 crafting grid in block form. Insert items into its inventory and it will attempt to craft the result. Pair with hoppers or item pipes for automated crafting.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="animated_torch" />
  ### <Color id="aqua">Animated Torch</Color>
</Row>

Moves between two positions when toggled by a redstone signal. Useful for movable redstone sources.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Platforms & Red String</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="abstruse_platform" />
  ### <Color id="aqua">Abstruse Platform</Color>
</Row>

Invisible when you are not looking directly at it. Great for hidden walkways.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spectral_platform" />
  ### <Color id="aqua">Spectral Platform</Color>
</Row>

Intangible from below — you can jump up through it but stand on top normally.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="red_string_container" />
  ### <Color id="aqua">Red String Blocks</Color>
</Row>

Red String Container, Dispenser, and Relay bind to a remote block and act as a proxy for inventory, dispensing, or comparator interactions respectively.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Summoning & Misc</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="fel_pumpkin" />
  ### <Color id="aqua">Fel Pumpkin</Color>
</Row>

Spawns Blazes when placed. Use with caution!

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="cocoon" />
  ### <Color id="aqua">Cocoon</Color>
</Row>

Spawns a random animal over time. Can be influenced by placing certain blocks nearby.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="incense_plate" />
  ### <Color id="aqua">Incense Plate</Color>
</Row>

Burns an Incense Stick brewed at the Brewery. Grants a permanent potion effect that lasts until death.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="avatar" />
  ### <Color id="aqua">Avatar</Color>
</Row>

Holds a Botania Rod and continuously activates its effect, powered by Mana. Useful for automated rod usage like the Rod of the Seas or Rod of the Lands.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="turntable" />
  ### <Color id="aqua">Turntable</Color>
</Row>

Rotates the block placed on top of it. Useful for rotating clay items for crafting different Botania petal blocks.

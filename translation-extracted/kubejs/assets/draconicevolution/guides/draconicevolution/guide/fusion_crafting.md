---
navigation:
  title: Fusion Crafting
  icon: draconicevolution:crafting_core
  parent: index.md
  position: 2
item_ids:
  - draconicevolution:crafting_core
  - draconicevolution:basic_crafting_injector
  - draconicevolution:wyvern_crafting_injector
  - draconicevolution:awakened_crafting_injector
  - draconicevolution:chaotic_crafting_injector
---
# <Color id="red">Fusion Crafting</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Fusion Crafting</Color>
  <ItemImage id="crafting_core" scale="2" />

  Fusion Crafting is Draconic Evolution's advanced crafting system. It uses a central Crafting Core surrounded by Crafting Injectors to fuse ingredients together into powerful items, consuming large amounts of RF energy in the process.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Fusion Crafting Core</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="crafting_core" />
  ### <Color id="aqua">Crafting Core</Color>
</Row>

The Fusion Crafting Core is the central block of the Fusion Crafting system. Place it down and surround it with Fusion Crafting Injectors. The core holds the primary input item, and injectors hold the supporting ingredients. The system requires large amounts of RF energy to operate.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Fusion Crafting Injectors</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Injectors come in four tiers matching the mod's tier system:

- <ItemLink id="basic_crafting_injector" /> — Draconium (Basic) tier, used for Wyvern tier recipes
- <ItemLink id="wyvern_crafting_injector" /> — Wyvern tier, used for Draconic tier recipes
- <ItemLink id="awakened_crafting_injector" /> — Draconic (Awakened) tier, used for Chaotic tier recipes
- <ItemLink id="chaotic_crafting_injector" /> — Chaotic tier, used for the highest tier recipes

Injectors must be placed within range of the Fusion Crafting Core (not directly adjacent — leave at least 1 block gap). Each injector holds one ingredient item. Higher tier recipes require higher tier injectors. Injectors can be set to single item or stack mode.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Crafting Process</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

1. Place the primary item in the Fusion Crafting Core
2. Place supporting ingredients in the surrounding Injectors
3. Supply RF energy to the Core (it will show "Ready to craft" when valid)
4. Click Craft — the system will charge, then perform the fusion
5. The output item appears in the Core

The energy cost varies per recipe and is shown in the GUI. JEI shows all Fusion Crafting recipes.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Building the Structure</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>
 (WIP Section)
 
Your Crafting Injectors can be placed in any axis positioned 3 blocks away — one on each face (up, down, north, south, east, west). All injectors must face toward the core.

<ItemImage id="minecraft:air" scale="0.25"/>

<GameScene zoom="2" background="#333333" interactive={true}>
  <ImportStructure src="assets/crafting_core.nbt"/>
</GameScene>

<GameScene zoom="2" interactive={true}>
  <ImportStructure src="assets/crafting_core_valid_setup.nbt"/>
</GameScene>

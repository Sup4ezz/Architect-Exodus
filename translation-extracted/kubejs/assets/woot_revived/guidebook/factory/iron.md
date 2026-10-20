---
navigation:
  parent: factory/factory-index.md
  title: "Iron"
  icon: "woot_revived:iron_cell"
  position: 2
item_ids:
  - woot_revived:iron_pylon
  - woot_revived:iron_plinth
  - woot_revived:iron_cell
---
# Iron Factory

Второй уровень фабрики.

## Постройка

Обратите внимание: маленькие Fake Spawner на схеме необязательны.

При строительстве поможет <ItemImage id="layout" scale="0.5"/> [Layout](../machines-blocks/layout.md#iron), настроенный на второй уровень.

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/factory/iron.snbt" />
  <IsometricCamera yaw="195" pitch="6" />
</GameScene>

## Iron Factory Blocks

<Row>
  <BlockImage id="iron_pylon" scale="4" p:attached="true" />
  <BlockImage id="iron_plinth" scale="4" p:attached="true" />
  <BlockImage id="iron_cell" scale="4" p:attached="true" />
</Row>


Для этого уровня понадобится:
20 <ItemImage id="iron_pylon" scale="0.5"/> Iron Pylon,
12 <ItemImage id="iron_plinth" scale="0.5"/> Iron Plinth,
1 <ItemImage id="iron_cell" scale="0.5"/> Iron Vitality Cell

<Row>
  <RecipeFor id="iron_pylon" />
  <RecipeFor id="iron_plinth" />
  <RecipeFor id="iron_cell" />
</Row>
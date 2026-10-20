---
navigation:
  parent: factory/factory-index.md
  title: "Diamond"
  icon: "woot_revived:diamond_cell"
  position: 4
item_ids:
  - woot_revived:diamond_pylon
  - woot_revived:diamond_plinth
  - woot_revived:diamond_cell
---
# Diamond Factory

Четвёртый уровень фабрики.

## Постройка

Обратите внимание: маленькие Fake Spawner на схеме необязательны.

При строительстве поможет <ItemImage id="layout" scale="0.5"/> [Layout](../machines-blocks/layout.md#diamond), настроенный на четвёртый уровень.

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/factory/diamond.snbt" />
  <IsometricCamera yaw="195" pitch="6" />
</GameScene>

## Diamond Factory Blocks

<Row>
  <BlockImage id="diamond_pylon" scale="4" p:attached="true" />
  <BlockImage id="diamond_plinth" scale="4" p:attached="true" />
  <BlockImage id="diamond_cell" scale="4" p:attached="true" />
</Row>


Для этого уровня понадобится:
32 <ItemImage id="diamond_pylon" scale="0.5"/> Diamond Pylon,
32 <ItemImage id="diamond_plinth" scale="0.5"/> Diamond Plinth,
1 <ItemImage id="diamond_cell" scale="0.5"/> Diamond Vitality Cell

<Row>
  <RecipeFor id="diamond_pylon" />
  <RecipeFor id="diamond_plinth" />
  <RecipeFor id="diamond_cell" />
</Row>
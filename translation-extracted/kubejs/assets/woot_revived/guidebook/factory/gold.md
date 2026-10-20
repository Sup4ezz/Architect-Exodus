---
navigation:
  parent: factory/factory-index.md
  title: "Gold"
  icon: "woot_revived:gold_cell"
  position: 3
item_ids:
  - woot_revived:gold_pylon
  - woot_revived:gold_plinth
  - woot_revived:gold_cell
---
# Gold Factory

Третий уровень фабрики.

## Постройка

Обратите внимание: маленькие Fake Spawner на схеме необязательны.

При строительстве поможет <ItemImage id="layout" scale="0.5"/> [Layout](../machines-blocks/layout.md#gold), настроенный на третий уровень.

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/factory/gold.snbt" />
  <IsometricCamera yaw="195" pitch="6" />
</GameScene>

## Gold Factory Blocks

<Row>
  <BlockImage id="gold_pylon" scale="4" p:attached="true" />
  <BlockImage id="gold_plinth" scale="4" p:attached="true" />
  <BlockImage id="gold_cell" scale="4" p:attached="true" />
</Row>


Для этого уровня понадобится:
36 <ItemImage id="gold_pylon" scale="0.5"/> Gold Pylon,
24 <ItemImage id="gold_plinth" scale="0.5"/> Gold Plinth,
1 <ItemImage id="gold_cell" scale="0.5"/> Gold Vitality Cell

<Row>
  <RecipeFor id="gold_pylon" />
  <RecipeFor id="gold_plinth" />
  <RecipeFor id="gold_cell" />
</Row>
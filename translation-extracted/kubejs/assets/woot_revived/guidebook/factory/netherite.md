---
navigation:
  parent: factory/factory-index.md
  title: "Netherite"
  icon: "woot_revived:netherite_cell"
  position: 5
item_ids:
  - woot_revived:netherite_pylon
  - woot_revived:netherite_plinth
  - woot_revived:netherite_cell
---
# Netherite Factory

Пятый и последний уровень фабрики.

## Постройка

Обратите внимание: маленькие Fake Spawner на схеме необязательны.

При строительстве поможет <ItemImage id="layout" scale="0.5"/> [Layout](../machines-blocks/layout.md#netherite), настроенный на пятый уровень.

<GameScene zoom="2.5" interactive={true}>
  <ImportStructure src="../assets/factory/netherite.snbt" />
  <IsometricCamera yaw="195" pitch="6" />
</GameScene>

## Netherite Factory Blocks

<Row>
  <BlockImage id="netherite_pylon" scale="4" p:attached="true" />
  <BlockImage id="netherite_plinth" scale="4" p:attached="true" />
  <BlockImage id="netherite_cell" scale="4" p:attached="true" />
</Row>


Для этого уровня понадобится:
12 <ItemImage id="netherite_pylon" scale="0.5"/> Netherite Pylon,
24 <ItemImage id="netherite_plinth" scale="0.5"/> Netherite Plinth,
1 <ItemImage id="netherite_cell" scale="0.5"/> Netherite Vitality Cell

<Row>
  <RecipeFor id="netherite_pylon" />
  <RecipeFor id="netherite_plinth" />
  <RecipeFor id="netherite_cell" />
</Row>
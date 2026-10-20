---
navigation:
  parent: factory/factory-index.md
  title: "Copper"
  icon: "woot_revived:copper_cell"
  position: 1
item_ids:
  - woot_revived:copper_pylon
  - woot_revived:copper_plinth
  - woot_revived:copper_cell
---
# Copper Factory

Это первый и самый простой уровень фабрики.

Он отлично подходит для знакомства с модом и создания простой фабрики для одного моба!

## Постройка

Сначала постройте центральное основание фабрики, затем достройте внешнюю часть.

При строительстве поможет <ItemImage id="layout" scale="0.5"/> [Layout](../machines-blocks/layout.md#copper), настроенный на первый уровень.

<Row>
  <GameScene zoom="2.5" interactive={true}>
    <ImportStructure src="../assets/factory/copper_half.snbt" />
    <IsometricCamera yaw="195" pitch="6" />
  </GameScene>

  <GameScene zoom="2.5" interactive={true}>
    <ImportStructure src="../assets/factory/copper.snbt" />
    <IsometricCamera yaw="195" pitch="6" />
  </GameScene>
</Row>

## Copper Factory Blocks

<Row>
  <BlockImage id="copper_pylon" scale="4" p:attached="true" />
  <BlockImage id="copper_plinth" scale="4" p:attached="true" />
  <BlockImage id="copper_cell" scale="4" p:attached="true" />
</Row>

Для фабрики нужны блоки из раздела [Основные блоки](common-blocks.md), а также специальные блоки этого уровня.

Для этого уровня понадобится:
17 <ItemImage id="copper_pylon" scale="0.5"/> Copper Pylon,
6 <ItemImage id="copper_plinth" scale="0.5"/> Copper Plinth,
1 <ItemImage id="copper_cell" scale="0.5"/> Copper Vitality Cell

<Row>
  <RecipeFor id="copper_pylon" />
  <RecipeFor id="copper_plinth" />
  <RecipeFor id="copper_cell" />
</Row>
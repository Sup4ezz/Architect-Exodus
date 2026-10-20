---
navigation:
  parent: factory/factory-index.md
  title: "Основные блоки"
  icon: "woot_revived:factory_connect"
  position: 0
item_ids:
  - woot_revived:factory_ctr_base_pri
  - woot_revived:factory_ctr_base_sec
  - woot_revived:factory_connect
---
# Основные блоки

В каждой фабрике используются эти основные блоки. Подробнее об их размещении читайте на страницах соответствующих уровней.

## Factory Heart

The <ItemImage id="heart" scale="0.5"/> [Factory Heart](../machines-blocks/heart.md) — главный контроллер фабрики

<RecipeFor id="heart" />

## Upgrade Slot

The <ItemImage id="factory_upgrade" scale="0.5"/> [Upgrade Slot](../machines-blocks/upgrade-slot.md) хранит улучшения, установленные на фабрике

<RecipeFor id="factory_upgrade" />

## Fake Spawner

The <ItemImage id="fake_spawner" scale="0.5"/> [Fake Spawner](../mob-shard.md) хранит данные моба, убийство которого будет имитироваться

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="../assets/anvil/fake_spawner.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="fake_spawner" scale="2"/>
  Для изготовления нужны запрограммированный <ItemImage id="mob_shard" scale="0.5"/> Mob Shard, <ItemImage id="prism" scale="0.5"/> Prism и <ItemImage id="factory_base" scale="0.5"/> Factory Base.
</Row>

## Primary Base и Secondary Base

The <ItemImage id="factory_ctr_base_pri" scale="0.5"/> Primary Base and the <ItemImage id="factory_ctr_base_sec" scale="0.5"/> Secondary Base служат основанием для <ItemImage id="fake_spawner" scale="0.5"/> Fake Spawner

Fake Spawner на Secondary Base устанавливать необязательно.

<Row>
  <RecipeFor id="factory_ctr_base_pri" />
  <RecipeFor id="factory_ctr_base_sec" />
</Row>

## Factory Connector

<ItemImage id="factory_ctr_base_pri" scale="0.5"/> Factory Connector соединяет фабрику с ингредиентами, необходимыми для производства.

<RecipeFor id="factory_connect" />

## Ingredient Importer

The <ItemImage id="import" scale="0.5"/> [Ingredient Importer](../machines-blocks/import.md) позволяет импортировать предметы и жидкости, необходимые для имитации появления моба

<RecipeFor id="import" />

## Loot Exporter

The <ItemImage id="export" scale="0.5"/> [Loot Exporter](../machines-blocks/export.md) выводит все предметы и жидкости, полученные в результате имитации убийства мобов

<RecipeFor id="export" />

## Vitality Cells

Все Vitality Cells подходят для фабрик любого уровня!

Откройте [Layout](../machines-blocks/layout.md): там видно, как блок ячейки жизненной силы меняется в зависимости от выбранной Vitality Cell.
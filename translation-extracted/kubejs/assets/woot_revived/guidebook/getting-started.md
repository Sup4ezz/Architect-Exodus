---
navigation:
  title: "Начало работы"
  position: 10
  icon: "woot_revived:stygian_ingot"
item_ids:
  - woot_revived:stygian_dust
  - woot_revived:stygian_ingot
  - woot_revived:stygian_hammer
  - woot_revived:plate_mold
  - woot_revived:shard_mold
  - woot_revived:dye_casing_mold
  - woot_revived:stygian_plate
  - woot_revived:factory_base
---
# Начало работы

## Получение Stygian Ingot

Для начала работы с Woot Revived создайте немного <ItemImage id="stygian_dust" scale="0.5"/> Stygian Dust
<Recipe id="stygian_dust" />

Затем переплавьте его, чтобы получить <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot
<Recipe id="stygian_ingot_cook" />

## Изготовление форм

Сначала изготовьте <ItemImage id="stygian_anvil" scale="0.5"/> Stygian Anvil и <ItemImage id="stygian_hammer" scale="0.5"/> Stygian Hammer
<Row>
  <Recipe id="stygian_anvil" />
  <Recipe id="stygian_hammer" />
</Row>

Поставьте Stygian Anvil на <ItemImage id="minecraft:magma_block" scale="0.5"/> Magma Block

Чтобы создавать предметы на Stygian Anvil, нажмите по наковальне правой кнопкой мыши, держа Stygian Hammer

Для каждой формы понадобятся <ItemImage id="minecraft:quartz" scale="0.5"/> Quartz и <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot

Формы не расходуются при изготовлении предметов, поэтому достаточно создать по одной каждой формы.

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/plate_mold.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="plate_mold" scale="2"/>
  Для создания plate mold понадобится <ItemImage id="minecraft:iron_trapdoor" scale="0.5"/> Iron Trapdoor
</Row>

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/shard_mold.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="shard_mold" scale="2"/>
  Для создания shard mold понадобится <ItemImage id="minecraft:prismarine_shard" scale="0.5"/> Prismarine Shard
</Row>

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/dye_casing_mold.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="dye_casing_mold" scale="2"/>
  Для создания dye casing mold понадобится любой краситель, например <ItemImage id="minecraft:white_dye" scale="0.5"/> White Dye
</Row>

## Создание Factory Base

Для изготовления всех блоков мода сначала потребуется Factory Base.

Сначала изготовьте <ItemImage id="stygian_plate" scale="0.5"/> Stygian Plate.

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/stygian_plate.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="stygian_plate" scale="2"/>
  Для этого нужны <ItemImage id="plate_mold" scale="0.5"/> plate mold и <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot.
</Row>

После этого вы сможете создать блок Factory Base.

<Recipe id="factory_base" />

## Что дальше?

Теперь можно [ловить мобов](mob-shard.md) или [строить первую фабрику](factory/copper.md)!
---
navigation:
  parent: upgrades/upgrades-index.md
  title: "Shard Drop Upgrade"
  icon: "woot_revived:iron_shard_drop_upgrade"
  position: 1
item_ids:
  - woot_revived:iron_shard_drop_upgrade
  - woot_revived:gold_shard_drop_upgrade
  - woot_revived:diamond_shard_drop_upgrade
  - woot_revived:netherite_shard_drop_upgrade
  - woot_revived:copper_shard
  - woot_revived:iron_shard
  - woot_revived:gold_shard
  - woot_revived:diamond_shard
  - woot_revived:netherite_shard
---
# Shard Drop Upgrade

<Row>
  <ItemImage id="iron_shard_drop_upgrade" scale="3"/>
  <ItemImage id="gold_shard_drop_upgrade" scale="3"/>
  <ItemImage id="diamond_shard_drop_upgrade" scale="3"/>
  <ItemImage id="netherite_shard_drop_upgrade" scale="3"/>
</Row>

Shard Drop Upgrade позволяет мобам ронять осколки соответствующих уровней.

## Как получить Copper Shard

Как видите, улучшения не создают <ItemImage id="copper_shard" scale="0.5"/> Copper Shard.

Это связано с тем, что <ItemImage id="copper_shard" scale="0.5"/> Copper Shard нужно изготовить на <ItemImage id="stygian_anvil" scale="0.5"/> Stygian Anvil.

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="../assets/anvil/copper_shard.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="copper_shard" scale="2"/>
  Для изготовления нужны <ItemImage id="shard_mold" scale="0.5"/> shard mold и 4 <ItemImage id="minecraft:copper_ingot" scale="0.5"/> Copper Ingot.
</Row>

## Выпадение осколков I Upgrade

Drop <ItemImage id="iron_shard" scale="0.5"/> Iron Shard with a 50% drop chance.

The upgrade need to be applied at least on Copper Factory for the <ItemImage id="iron_shard" scale="0.5"/> Iron Shard to drop

<RecipeFor id="iron_shard_drop_upgrade" />

## Выпадение осколков II Upgrade

Drop <ItemImage id="iron_shard" scale="0.5"/> Iron Shard with a 50% drop chance.

Drop <ItemImage id="gold_shard" scale="0.5"/> Gold Shard with a 30% drop chance.

The upgrade need to be applied at least on Iron Factory for the <ItemImage id="gold_shard" scale="0.5"/> Gold Shard to drop

<RecipeFor id="gold_shard_drop_upgrade" />

## Выпадение осколков III Upgrade

Drop <ItemImage id="iron_shard" scale="0.5"/> Iron Shard with a 50% drop chance.

Drop <ItemImage id="gold_shard" scale="0.5"/> Gold Shard with a 30% drop chance.

Drop <ItemImage id="diamond_shard" scale="0.5"/> Diamond Shard with a 15% drop chance.

The upgrade need to be applied at least on Gold Factory for the <ItemImage id="diamond_shard" scale="0.5"/> Diamond Shard to drop

<RecipeFor id="diamond_shard_drop_upgrade" />

## Выпадение осколков IV Upgrade

Drop <ItemImage id="iron_shard" scale="0.5"/> Iron Shard with a 50% drop chance.

Drop <ItemImage id="gold_shard" scale="0.5"/> Gold Shard with a 30% drop chance.

Drop <ItemImage id="diamond_shard" scale="0.5"/> Diamond Shard with a 15% drop chance.

Drop <ItemImage id="netherite_shard" scale="0.5"/> Netherite Shard with a 5% drop chance.

The upgrade need to be applied at least on Diamond Factory for the <ItemImage id="netherite_shard" scale="0.5"/> Netherite Shard to drop

<RecipeFor id="netherite_shard_drop_upgrade" />

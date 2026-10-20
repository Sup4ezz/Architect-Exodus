---
navigation:
  title: "Как поймать моба?"
  position: 20
  icon: "mob_shard"
item_ids:
  - woot_revived:mob_shard
  - woot_revived:fake_spawner
---
# Как поймать моба?

Чтобы поймать моба, понадобится <ItemImage id="mob_shard" scale="0.5"/> Mob Shard.

## Создание Mob Shard

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/mob_shard.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="mob_shard" scale="2"/>
  Для изготовления нужны <ItemImage id="shard_mold" scale="0.5"/> shard mold и 2 <ItemImage id="stygian_ingot" scale="0.5"/> Stygian Ingot.
</Row>

## Использование Mob Shard

Чтобы поймать моба, ударьте его Mob Shard.

Можно также бросить осколок в моба. После броска моб станет неуязвим ко всему, кроме лавы.

Если после удара Mob Shard не перешёл в состояние захвата, скорее всего, этот моб находится в чёрном списке или не считается живым существом.

После успешного захвата убейте этого моба 5 раз любым оружием или инструментом, не убирая Mob Shard из инвентаря.

После пяти убийств Mob Shard будет полностью запрограммирован, и его можно будет превратить в <ItemImage id="fake_spawner" scale="0.5"/> Fake Spawner.

## Создание Fake Spawner

Чтобы фабрика могла использовать пойманного моба, превратите <ItemImage id="mob_shard" scale="0.5"/> Mob Shard в <ItemImage id="fake_spawner" scale="0.5"/> Fake Spawner.

<Row alignItems="center">
  <GameScene zoom="5">
    <ImportStructure src="assets/anvil/fake_spawner.snbt" />
    <IsometricCamera yaw="180" pitch="40" />
  </GameScene>
  <ItemImage id="fake_spawner" scale="2"/>
  Для изготовления нужны <ItemImage id="mob_shard" scale="0.5"/> Mob Shard, <ItemImage id="prism" scale="0.5"/> Prism и <ItemImage id="factory_base" scale="0.5"/> Factory Base.
</Row>
---
navigation:
  parent: machines-blocks/machines-blocks-index.md
  title: "Схема"
  icon: "woot_revived:layout"
item_ids:
  - woot_revived:layout
---
# Схема

<BlockImage id="layout" scale="5"/>

<ItemImage id="layout" scale="0.5"/> Layout показывает чертёж фабрики.

Нажмите по нему правой кнопкой мыши, чтобы изменить отображаемый уровень фабрики.

Блоки в предварительном просмотре не имеют столкновений, их нельзя сломать, а вместо них можно сразу поставить соответствующие настоящие блоки.

## Изготовление

<RecipeFor id="layout" />

# Предварительный просмотр

<Row>
  <Column>
    ## Copper

    <GameScene zoom="2.5" interactive={true}>
      <ImportStructure src="../assets/layout/copper.snbt" />
      <IsometricCamera yaw="195" pitch="6" />
    </GameScene>
  </Column>

  <Column>
    ## Iron

    <GameScene zoom="2.5" interactive={true}>
      <ImportStructure src="../assets/layout/iron.snbt" />
      <IsometricCamera yaw="195" pitch="6" />
    </GameScene>
  </Column>

  <Column>
    ## Gold

    <GameScene zoom="2.5" interactive={true}>
      <ImportStructure src="../assets/layout/gold.snbt" />
      <IsometricCamera yaw="195" pitch="6" />
    </GameScene>
  </Column>

  <Column>
    ## Diamond

    <GameScene zoom="2.5" interactive={true}>
      <ImportStructure src="../assets/layout/diamond.snbt" />
      <IsometricCamera yaw="195" pitch="6" />
    </GameScene>
  </Column>

  <Column>
    ## Netherite

    <GameScene zoom="2.5" interactive={true}>
      <ImportStructure src="../assets/layout/netherite.snbt" />
      <IsometricCamera yaw="195" pitch="6" />
    </GameScene>
  </Column>
</Row>

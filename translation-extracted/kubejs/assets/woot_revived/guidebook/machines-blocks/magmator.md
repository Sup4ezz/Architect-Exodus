---
navigation:
  parent: machines-blocks/machines-blocks-index.md
  title: "Magmator"
  icon: "woot_revived:netherite_magmator"
item_ids:
  - woot_revived:copper_magmator
  - woot_revived:iron_magmator
  - woot_revived:gold_magmator
  - woot_revived:diamond_magmator
  - woot_revived:netherite_magmator
---
# Magmator

<Row>
  <BlockImage id="copper_magmator" scale="2" />
  <BlockImage id="iron_magmator" scale="2" />
  <BlockImage id="gold_magmator" scale="2" />
  <BlockImage id="diamond_magmator" scale="2" />
  <BlockImage id="netherite_magmator" scale="2" />
</Row>

Magmator автоматизирует работу <ItemImage id="stygian_anvil" scale="0.5"/> [Stygian Anvil](anvil.md).

Поставьте его под наковальню: через заданное количество тиков он будет пытаться изготовить предмет и помещать его в соседний сундук. Если рядом нет сундука, блок ничего не сделает.

Нажмите Shift и щёлкните по блоку, чтобы изменить режим работы с редстоуном.

Скорость работы каждого Magmator:
- <ItemImage id="copper_magmator" scale="0.5"/> Copper Magmator: <WootConfig key="magmator.copper_tick_rate" /> ticks/craft
- <ItemImage id="iron_magmator" scale="0.5"/> Iron Magmator: <WootConfig key="magmator.iron_tick_rate" /> ticks/craft
- <ItemImage id="gold_magmator" scale="0.5"/> Gold Magmator: <WootConfig key="magmator.gold_tick_rate" /> ticks/craft
- <ItemImage id="diamond_magmator" scale="0.5"/> Diamond Magmator: <WootConfig key="magmator.diamond_tick_rate" /> ticks/craft
- <ItemImage id="netherite_magmator" scale="0.5"/> Netherite Magmator: <WootConfig key="magmator.netherite_tick_rate" /> ticks/craft

## Изготовление

<Row>
  <RecipeFor id="copper_magmator" />
  <RecipeFor id="iron_magmator" />
  <RecipeFor id="gold_magmator" />
  <RecipeFor id="diamond_magmator" />
  <RecipeFor id="netherite_magmator" />
</Row>
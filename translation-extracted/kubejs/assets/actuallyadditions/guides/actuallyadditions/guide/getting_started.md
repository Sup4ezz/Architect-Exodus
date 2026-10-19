---
navigation:
  title: Начало работы
  icon: actuallyadditions:atomic_reconstructor
  parent: index.md
  position: 1
item_ids:
  - actuallyadditions:atomic_reconstructor
  - actuallyadditions:restonia_crystal
  - actuallyadditions:palis_crystal
  - actuallyadditions:diamatine_crystal
  - actuallyadditions:void_crystal
  - actuallyadditions:emeradic_crystal
  - actuallyadditions:enori_crystal
  - actuallyadditions:empowerer
  - actuallyadditions:display_stand
  - actuallyadditions:black_quartz
---
# <Color id="green">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Начало работы</Color>
  <ItemImage id="atomic_reconstructor" scale="2" />

  На этой странице описаны основы Actually Additions: создание кристаллов и ключевые механизмы, которые пригодятся в начале игры.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Black Quartz</Color>
</Column>

<Row>
  <ItemImage id="black_quartz" />
  <Column>
    Black Quartz встречается в виде руды под землёй в большинстве измерений, в виде Geore Nodes в <Color id="aqua">Jotunheim</Color> или добывается некоторыми генераторами руды, например шахтёрами Occultism. Это один из основных материалов для создания предметов в Actually Additions.
  </Column>
</Row>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Atomic Reconstructor</Color>
</Column>

<Color id="green"><ItemLink id="atomic_reconstructor"/></Color> — первый из двух основных механизмов Actually Additions. Он выпускает лазерный луч, преобразующий предметы и блоки, расположенные или выброшенные перед ним. При подаче энергии ( <Color id="red">1 000 FE/CF</Color> за выстрел) он может преобразовывать руды и материалы.

Среди результатов преобразования — 6 видов кристаллов, используемых во многих рецептах Actually Additions на раннем и среднем этапах игры:

<ItemGrid>
  <ItemIcon id="restonia_crystal" />
  <ItemIcon id="palis_crystal" />
  <ItemIcon id="diamatine_crystal" />
  <ItemIcon id="void_crystal" />
  <ItemIcon id="emeradic_crystal" />
  <ItemIcon id="enori_crystal" />
</ItemGrid>

Нажмите правой кнопкой мыши по Atomic Reconstructor с <ItemLink id="minecraft:redstone_torch" />, чтобы переключить режим между отключением редстоун-сигналом и импульсным режимом. Так можно организовать простую автоматизацию в самом начале игры: установите нажимную плиту сверху или рядом с Atomic Reconstructor и сбрасывайте на неё предметы.

В Atomic Reconstructor также можно установить <ItemImage id="actuallyadditions:lens" scale="0.5" /> [линзы](lenses.md), меняющие или усиливающие свойства луча.

<RecipeFor id="atomic_reconstructor" />

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Empowerer</Color>
</Column>

<Color id="green"><ItemLink id="empowerer"/></Color> — второй основной механизм Actually Additions. Он усиливает кристаллы, превращая их в более мощные варианты. Положите предмет для усиления на блок Empowerer, а четыре требуемых компонента разместите на блоках <ItemLink id="display_stand" />, расположенных точно в двух блоках от устройства по четырём сторонам света. Для работы Display Stands требуется энергия CF.

<ItemImage id="minecraft:air" scale="0.5" />

### <Color id="aqua">Сборка Empowerer</Color>

Для настройки также понадобятся четыре <Color id="dark_green"><ItemLink id="display_stand" />s</Color>, подключённых к энергии. Они должны располагаться на расстоянии трёх блоков от Empowerer, как показано на схеме ниже.

Чтобы выполнить рецепт, положите основной кристалл на Empowerer, а остальные материалы разместите сверху на <Color id="dark_green"><ItemLink id="display_stand" />s</Color> вокруг него.

> <Color id="yellow">Совет</Color>: усиливать целые блоки кристаллов выгоднее, чем отдельные слитки: в обоих рецептах расходуется одинаковое количество дополнительных ресурсов.

<GameScene zoom="2.5" background="#333333">
  <IsometricCamera yaw="30" roll="60" pitch="90" />
  <Block id="empowerer" />
  <BlockAnnotation x="1" color="#aaaaaa"/>
  <BlockAnnotation x="2" color="#aaaaaa"/>
  <Block x="3" id="display_stand" />
  <BlockAnnotation x="-1" color="#aaaaaa"/>
  <BlockAnnotation x="-2" color="#aaaaaa"/>
  <Block x="-3" id="display_stand" />
  <BlockAnnotation z="1" color="#aaaaaa"/>
  <BlockAnnotation z="2" color="#aaaaaa"/>
  <Block z="3" id="display_stand" />
  <BlockAnnotation z="-1" color="#aaaaaa"/>
  <BlockAnnotation z="-2" color="#aaaaaa"/>
  <Block z="-3" id="display_stand" />
</GameScene>
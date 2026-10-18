---
navigation:
  title: Начало работы
  icon: bloodmagic:altar
  parent: index.md
  position: 1
item_ids:
  - bloodmagic:altar
  - bloodmagic:sacrificialdagger
  - bloodmagic:blankslate
  - bloodmagic:daggerofsacrifice
---
# <Color id="red">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Начало работы</Color>
  <ItemImage id="bloodmagic:altar" scale="2" />
  Основа Blood Magic — Blood Altar. Установите его, возьмите Sacrificial Knife и начните получать LP, жертвуя собственным здоровьем: для этого щёлкните ПКМ.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Blood Altar</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Blood Altar хранит Life Points (LP), которые используются для создания предметов непосредственно в алтаре.

На первых порах наполняйте его с помощью Sacrificial Knife, жертвуя собственным здоровьем. Возьмите нож в руку и щёлкните ПКМ, чтобы получить LP.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Получение LP</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="bloodmagic:sacrificialdagger" />
  <Column>
    ### <Color id="aqua">Sacrificial Knife</Color>
  </Column>
</Row>

<Color id="green">Sacrificial Knife</Color> — ваш первый инструмент для получения <Color id="red">LP</Color>. Щёлкните ПКМ, чтобы пожертвовать здоровьем и наполнить Blood Altar Life Points.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="bloodmagic:daggerofsacrifice" />
  <Column>
    ### <Color id="aqua">Dagger of Sacrifice</Color>
  </Column>
</Row>

Достигнув [второго уровня алтаря](altar_tiers.md), вы сможете создать <Color id="green">Dagger of Sacrifice</Color>. Он позволяет использовать жизненную энергию мобов вместо собственного здоровья и получать LP гораздо эффективнее, особенно на высоких уровнях алтаря.

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Сланцы</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

По мере улучшения [уровня алтаря](altar_tiers.md) вам станут доступны рецепты разных сланцев.

<Color id="green"><ItemLink id="bloodmagic:blankslate" /></Color> — самый простой сланец в Blood Magic. Чтобы создать его, поместите Stone в Blood Altar, содержащий не менее <Color id="red">1 000 LP</Color>.

><Color id="red">Важно:</Color> Если положить больше одного Stone, алтарь попытается обработать их все одновременно. Если LP не хватит, создание предметов не удастся.

Следующие уровни сланцев откроются позднее:

<ItemGrid>
  <ItemIcon id="bloodmagic:blankslate" />
  <ItemIcon id="bloodmagic:reinforcedslate" />
  <ItemIcon id="bloodmagic:infusedslate" />
  <ItemIcon id="bloodmagic:demonslate" />
  <ItemIcon id="bloodmagic:etherealslate" />
</ItemGrid>
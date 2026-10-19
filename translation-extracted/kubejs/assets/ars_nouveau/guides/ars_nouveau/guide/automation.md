---
navigation:
  title: Автоматизация
  icon: ars_nouveau:starbuncle_charm
  parent: index.md
  position: 6
item_ids:
  - ars_nouveau:starbuncle_charm
  - ars_nouveau:wixie_charm
  - ars_nouveau:drygmy_charm
  - ars_nouveau:whirlisprig_charm
  - ars_nouveau:amethyst_golem_charm
  - ars_nouveau:basic_spell_turret
  - ars_nouveau:spell_prism
  - ars_nouveau:spell_sensor
  - ars_nouveau:void_prism
  - ars_nouveau:redstone_relay
  - ars_nouveau:allow_scroll
  - ars_nouveau:deny_scroll
  - ars_nouveau:mimic_scroll
---
# <Color id="light_purple">Автоматизация</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="light_purple">Автоматизация</Color>
  <ItemImage id="starbuncle_charm" scale="2" />

  Ars Nouveau предлагает магических существ и устройства для автоматизации перемещения предметов, создания вещей, фермерства и других процессов.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Магические существа</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="starbuncle_charm" />
  ### <Color id="aqua">Starbuncle</Color>
</Row>

Starbuncle переносит предметы между местами. Его можно встретить в пещерах и приручить, бросив рядом <ItemLink id="minecraft:gold_nugget" />. Существо подбирает предметы и доставляет их в ближайшие хранилища.

Используйте <Color id="green">Dominion Wand</Color> сначала на сундуке, а затем на Starbuncle, чтобы назначить место доставки. Чтобы заставить его забирать предметы из сундука, сначала выберите сундук жезлом, затем примените жезл к Starbuncle. Используйте жезл с зажатым Shift на существе, чтобы сбросить указания. Содержимое можно ограничивать с помощью <ItemLink id="allow_scroll" /> и <ItemLink id="deny_scroll" />. Starbuncle можно перекрасить в любой цвет.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="wixie_charm" />
  ### <Color id="aqua">Wixie</Color>
</Row>

Wixie автоматически создаёт предметы по рецептам. Чтобы получить её, примените заклинание <Color id="green">Dispel</Color> к ведьме, здоровье которой опустилось до половины. Поместите Wixie Charm на котёл, чтобы призвать существо.

Чтобы задать рецепт, примените нужный предмет-результат к котлу Wixie. Поставьте рядом сундуки с необходимыми ингредиентами и Source Jar: для каждого создания предмета расходуется немного Source. Используйте <Color id="green">Dominion Wand</Color>, чтобы назначить хранилище для результата. Если поблизости есть Potion Jars, Wixie также может автоматически варить зелья.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="drygmy_charm" />
  ### <Color id="aqua">Drygmy</Color>
</Row>

Drygmy добывает трофеи мобов, не убивая их. Его можно встретить в мире и приручить, бросив рядом <Color id="green">Wilden Horn</Color>.

Примените <Color id="light_purple">Drygmy Charm</Color> к блоку Mossy Cobblestone, чтобы назначить жилище: блок превратится в <Color id="green">Drygmy Hedge</Color>. Drygmy собирает добычу с мобов в радиусе 10 блоков от живой изгороди и складывает предметы в соседний сундук. Для каждого сбора требуется Source из ближайшего сосуда.

Чем больше Drygmy, тем выше выход добычи. Ещё эффективнее повышать их довольство: каждый уникальный вид существа в радиусе 10 блоков увеличивает бонус. Drygmy также могут собирать добычу с мобов, находящихся в <Color id="green">Containment Jars</Color>, поэтому опасных существ можно использовать безопасно.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="whirlisprig_charm" />
  ### <Color id="aqua">Whirlisprig</Color>
</Row>

Whirlisprig производит природные материалы — древесину, урожай, семена и цветы — из окружающей растительности. Чтобы приручить его, вырастите дерево рядом с диким Whirlisprig.

Примените амулет к любому цветку, чтобы призвать Whirlisprig и назначить ему жилище. Если рядом есть Source и хранилище, существо будет производить материалы в зависимости от окружающих растений. Разнообразная среда повышает его довольство и объём добычи.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="amethyst_golem_charm" />
  ### <Color id="aqua">Amethyst Golem</Color>
</Row>

Amethyst Golem выращивает, собирает и добывает кластеры аметиста. Его можно получить с помощью <Color id="green">Ritual of Awakening</Color>, проведённого рядом с блоками Budding Amethyst.

Используйте амулет, чтобы призвать голема, а затем назначьте ему жилище с помощью <Color id="green">Dominion Wand</Color>: сначала выберите голема, затем сундук. Голем будет собирать кристаллы в радиусе 10 блоков от жилища.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Другие големы</Color>

<ItemGrid>
  <ItemIcon id="georenouveau:coal_geore_golem_charm" />
  <ItemIcon id="georenouveau:copper_geore_golem_charm" />
  <ItemIcon id="georenouveau:diamond_geore_golem_charm" />
  <ItemIcon id="georenouveau:emerald_geore_golem_charm" />
  <ItemIcon id="georenouveau:gold_geore_golem_charm" />
  <ItemIcon id="georenouveau:iron_geore_golem_charm" />
  <ItemIcon id="georenouveau:lapis_geore_golem_charm" />
  <ItemIcon id="georenouveau:quartz_geore_golem_charm" />
  <ItemIcon id="georenouveau:redstone_geore_golem_charm" />
  <ItemIcon id="georenouveau:zinc_geore_golem_charm" />
  <ItemIcon id="ars_nouveau:amethyst_golem_charm" />
</ItemGrid>

Благодаря <Color id="gold">GeOres</Color> големы могут добывать не только аметист. Проведите <Color id="green">Ritual of Awakening</Color> рядом с соответствующим блоком, чтобы призвать голема и управлять им.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Автоматизация заклинаний</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="basic_spell_turret" />
  ### <Color id="aqua">Spell Turret</Color>
</Row>

Запускает заклинания по сигналу редстоуна, работая как магический раздатчик. Поддерживает формы заклинаний Touch и Projectile и получает Source из ближайших сосудов. При наличии соседнего хранилища может использовать глифы Place Block и Item Pickup.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="spell_prism" />
  ### <Color id="aqua">Spell Prism</Color>
</Row>

Перенаправляет снаряды заклинаний в направлении, куда обращён блок. Когда заклинание проходит через призму, соседние наблюдатели получают сигнал.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="spell_sensor" />
  ### <Color id="aqua">Spell Sensor</Color>
</Row>

Выдаёт сигнал редстоуна, когда поблизости сотворяют заклинание. Сила сигнала зависит от длины заклинания.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="void_prism" />
  ### <Color id="aqua">Void Prism</Color>
</Row>

Уничтожает снаряды заклинаний, проходящие через призму. Полезна для защиты автоматизированных механизмов от случайных заклинаний.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Свитки фильтрации</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="allow_scroll" />
  ### <Color id="aqua">Allow Scroll</Color>
</Row>

Магические существа взаимодействуют только с предметами, перечисленными в этом свитке. Используйте его, чтобы разрешить Starbuncle переносить только выбранные материалы.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="deny_scroll" />
  ### <Color id="aqua">Deny Scroll</Color>
</Row>

Магические существа взаимодействуют со всеми предметами, кроме перечисленных в свитке. Это противоположность Allow Scroll.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mimic_scroll" />
  ### <Color id="aqua">Mimic Scroll</Color>
</Row>

Магические существа помещают в хранилище только предметы, соответствующие его содержимому. Полезно для систем сортировки.

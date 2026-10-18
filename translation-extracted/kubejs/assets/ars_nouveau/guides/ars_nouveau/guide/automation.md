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

Переносит предметы. Встречается в пещерах; чтобы приручить существо, бросьте рядом <ItemLink id="minecraft:gold_nugget" /> . Starbuncle подбирает предметы и переносит их в ближайшие хранилища.

Use a <Color id="green">Dominion Wand</Color> on a chest, then on a Starbuncle to set a delivery destination. To have a Starbuncle pull items from a chest, select the chest first, then use the wand on the Starbuncle. Sneak-use the wand on a Starbuncle to clear its instructions. Control what they carry with <ItemLink id="allow_scroll" /> и <ItemLink id="deny_scroll" />. Can be dyed any color.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="wixie_charm" />
  ### <Color id="aqua">Wixie</Color>
</Row>

Помощник для автоматического создания предметов. Чтобы получить его, примените <Color id="green">Dispel</Color> на ведьму, у которой осталось половина здоровья. Поместите амулет на котёл, чтобы призвать Wixie.

To set a crafting recipe, use the desired output item on the Wixie's Cauldron. Place chests nearby with the required ingredients, и keep a Source Jar next to the Cauldron — each craft requires a small amount of Source. Use a <Color id="green">Dominion Wand</Color> to set the output storage. Wixies can also auto-craft potions when Potion Jars are .

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="drygmy_charm" />
  ### <Color id="aqua">Drygmy</Color>
</Row>

Получает добычу с мобов без их убийства. Встречается в дикой природе; чтобы приручить, бросьте рядом <Color id="green">Wilden Horn</Color> .

Use the <Color id="light_purple">Drygmy Charm</Color> on a Mossy Cobblestone block to set its home, which converts into a <Color id="green">Drygmy Hedge</Color>. Drygmy will harvest drops from any mob within 10 blocks of the Hedge, storing items in an adjacent chest. Each harvest requires Source from a nearby jar.

Adding more Drygmys increases drop output, but the most effective method is increasing their happiness — each unique entity type within 10 blocks raises the happiness bonus. Drygmys can also harvest from mobs stored in <Color id="green">Containment Jars</Color>, allowing you to safely use hostile mobs.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="whirlisprig_charm" />
  ### <Color id="aqua">Whirlisprig</Color>
</Row>

Получает природные материалы — древесину, урожай, семена и цветы — из окружающей растительности. Чтобы подружиться с Whirlisprig, вырастите дерево рядом с диким существом.

Use the charm on any flower to summon the Whirlisprig и set its home. When provided Source и storage next to their home block, Whirlisprigs generate natural materials based on surrounding vegetation. A more diverse habitat increases their happiness и output.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="amethyst_golem_charm" />
  ### <Color id="aqua">Amethyst Golem</Color>
</Row>

Выращивает и собирает скопления аметиста. Получается с помощью <Color id="green">Ritual of Awakening</Color> рядом с блоками растущего аметиста.

Use the charm to summon the Golem, then set its home with a <Color id="green">Dominion Wand</Color> — select the Golem first, then a chest. Golem will harvest any crystals within 10 blocks of its home.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Other Golems</Color>

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

С помощью <Color id="gold">GeOres</Color> големы могут собирать не только аметист. Проведите <Color id="green">Ritual of Awakening</Color> рядом с соответствующим блоком голема, чтобы призвать его и управлять им.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spell Автоматизация</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="basic_spell_turret" />
  ### <Color id="aqua">Spell Turret</Color>
</Row>

Запускает заклинания по сигналу редстоуна, работая как магический раздатчик. Поддерживает заклинания с формами Touch и Projectile. Получает Source из ближайших сосудов. При наличии соседнего хранилища может использовать глифы Place Block и Item Pickup.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="spell_prism" />
  ### <Color id="aqua">Spell Prism</Color>
</Row>

Перенаправляет снаряды заклинаний в сторону, куда обращён блок. Когда заклинание проходит через призму, соседние наблюдатели получают сигнал.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="spell_sensor" />
  ### <Color id="aqua">Spell Sensor</Color>
</Row>

Outputs a redstone signal when a spell is cast . Signal strength scales based on the length of the spell cast.

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <ItemImage id="void_prism" />
  ### <Color id="aqua">Void Prism</Color>
</Row>

Уничтожает снаряды заклинаний, проходящие через призму. Полезно для защиты автоматизированных механизмов от случайных заклинаний.

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

Магические существа будут взаимодействовать только с предметами, указанными в этом свитке. Используйте его, чтобы ограничить Starbuncle определёнными материалами.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="deny_scroll" />
  ### <Color id="aqua">Deny Scroll</Color>
</Row>

Магические существа будут взаимодействовать со всеми предметами, кроме перечисленных в этом свитке. Работает противоположно Allow Scroll.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mimic_scroll" />
  ### <Color id="aqua">Mimic Scroll</Color>
</Row>

Магические существа будут помещать только предметы, соответствующие содержимому подключённого хранилища. Полезно для сортировочных систем.

---
navigation:
  title: Спавнеры
  icon: minecraft:spawner
  position: 3
item_ids:
  - minecraft:spawner
---
# <Color id="dark_purple">Спавнеры</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Спавнеры</Color>
  <ItemImage id="minecraft:spawner" scale="2" />

  Apotheosis позволяет полностью настраивать и улучшать Mob Spawners. Забирайте их инструментом с Silk Touch, меняйте характеристики с помощью предметов и создавайте эффективные фермы мобов.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mob Spawners</Color>
</Column>

Теперь Mob Spawners можно добывать киркой с <Color id="aqua">Silk Touch</Color>. Это расходует дополнительную прочность инструмента, но позволяет перенести спавнер в любое место.

После установки спавнер можно настраивать и улучшать, применяя к нему предметы-модификаторы.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Характеристики спавнера</Color>
</Column>

У каждого спавнера есть настраиваемые характеристики, определяющие его работу:

* <Color id="aqua">Min Spawn Delay</Color> — минимальное время в тиках между попытками появления мобов.
* <Color id="aqua">Max Spawn Delay</Color> — максимальное время в тиках между попытками появления мобов.
* <Color id="aqua">Spawn Count</Color> — количество мобов, появляющихся за одну активацию.
* <Color id="aqua">Max Nearby Entities</Color> — спавнер прекращает работу, если поблизости уже находится указанное количество мобов этого типа.
* <Color id="aqua">Activation Range</Color> — расстояние, на котором игрок должен находиться для активации спавнера.
* <Color id="aqua">Spawn Range</Color> — горизонтальный радиус, в котором могут появляться мобы.

Также можно включать и отключать следующие параметры:

* <Color id="aqua">Ignores Players</Color> — спавнер работает даже без игрока поблизости.
* <Color id="aqua">Ignores Conditions</Color> — игнорирует стандартные условия появления мобов, например уровень освещения и тип блока.
* <Color id="aqua">Redstone Control</Color> — спавнер работает только при наличии сигнала редстоуна.
* <Color id="aqua">Ignores Light</Color> — игнорирует требования к уровню освещения.
* <Color id="aqua">No AI</Color> — у появившихся мобов отсутствует искусственный интеллект. Для ферм это особенно полезно, поскольку заметно снижает нагрузку на сервер.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Модификаторы спавнера</Color>
</Column>

Чтобы изменить характеристики, нажмите ПКМ по спавнеру, держа в руке предмет-модификатор. Каждый модификатор изменяет одну или несколько характеристик и имеет ограничение на число применений.

Все модификаторы спавнеров и их эффекты перечислены в <Color id="aqua">JEI</Color>. Найдите там «Spawner Modifier», чтобы увидеть полный список.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Зачарование Capturing</Color>
</Column>

<Color id="aqua">Capturing</Color> — зачарование меча, дающее мобам шанс оставить яйцо призыва после смерти. Вероятность составляет <Color id="red">0,4% за каждый уровень зачарования</Color>.

Нажмите ПКМ по спавнеру, используя выпавшее яйцо призыва, чтобы изменить тип существа. Это основной способ создавать спавнеры конкретных мобов.

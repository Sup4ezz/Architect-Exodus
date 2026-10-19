---
navigation:
  title: Readers
  icon: integrateddynamics:variable
  parent: index.md
  position: 4
item_ids:
  - integrateddynamics:part_audio_reader
  - integrateddynamics:part_block_reader
  - integrateddynamics:part_entity_reader
  - integrateddynamics:part_extradimensional_reader
  - integrateddynamics:part_fluid_reader
  - integrateddynamics:part_inventory_reader
  - integrateddynamics:part_machine_reader
  - integrateddynamics:part_network_reader
  - integrateddynamics:part_redstone_reader
  - integrateddynamics:part_world_reader
---
# <Color id="aqua">Считыватели</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Readers</Color>
  <ItemImage id="part_redstone_reader" scale="2" />

  Самый простой способ создать динамическую переменную — использовать Readers. Разные типы считывателей получают информацию об окружающем мире и записывают её в Variable Card. Каждый Reader содержит один или несколько Aspects, считывающих разные данные и возвращающих разные типы значений (Value Types). Установите Reader на Logic Cable так, чтобы он был направлен на целевой блок, и вставьте Variable Card, чтобы связать её с нужным аспектом.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Типы считывателей</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Audio Reader</Color>

Считывает сведения о музыке и звуках вокруг. Полезен для обнаружения звуков нотных блоков и других звуковых сигналов.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Block Reader</Color>

Считывает сведения о блоке, на который направлен компонент: тип, свойства, твёрдость и другие данные.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Entity Reader</Color>

Считывает сведения о существах в области перед компонентом: тип, здоровье, координаты и другие параметры.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Extra-Dimensional Reader</Color>

Считывает глобальные сведения сервера, например список игроков онлайн. В отличие от других считывателей, не требует направления на определённый блок.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Fluid Reader</Color>

Считывает данные резервуара с жидкостью, на который направлен компонент: тип жидкости, объём, вместимость и другие параметры.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Inventory Reader</Color>

Считывает данные инвентаря перед компонентом: количество слотов, предметы и заполненность. Этот считыватель только читает данные и не перемещает предметы.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Machine Reader</Color>

Считывает сведения о механизме перед компонентом, например текущий рецепт и состояние работы. Удобен для мониторинга печей, верстаков и других перерабатывающих блоков.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Network Reader</Color>

Считывает информацию о сети Integrated Dynamics, на которую направлен компонент. Это может быть сеть, отличная от той, к которой подключён сам Reader, что позволяет следить за внешними сетями.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">Redstone Reader</Color>

Считывает данные редстоуна с блока перед компонентом: силу сигнала, наличие питания и уровень сигнала компаратора.

<ItemImage id="minecraft:air" scale="0.25"/>

### <Color id="aqua">World Reader</Color>

Считывает сведения об окружающем мире: погоду, время суток, уровень освещения и другие параметры среды.

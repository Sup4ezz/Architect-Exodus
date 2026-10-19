---
navigation:
  title: Writers
  icon: integrateddynamics:part_redstone_writer
  parent: index.md
  position: 5
item_ids:
  - integrateddynamics:part_audio_writer
  - integrateddynamics:part_effect_writer
  - integrateddynamics:part_entity_writer
  - integrateddynamics:part_machine_writer
  - integrateddynamics:part_inventory_writer
  - integrateddynamics:part_redstone_writer
---
# <Color id="aqua">Записыватели</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Writers</Color>
  <ItemImage id="part_redstone_writer" scale="2" />

  Записыватели выполняют действия на основе значений Variable Cards. Установите Writer на Logic Cable, направив его на целевой блок, чтобы передавать данные или запускать действия в мире.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Типы записывателей</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_audio_writer" />
  ### <Color id="aqua">Audio Writer</Color>
</Row>

Воспроизводит звуки и музыку в зависимости от значений переменных. Вставьте Variable Card, чтобы управлять звуком, громкостью и высотой тона.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_effect_writer" />
  ### <Color id="aqua">Effect Writer</Color>
</Row>

Создаёт частицы в зависимости от значений переменных и настроек. Подходит для визуальных индикаторов и декоративных эффектов, связанных с логикой сети.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_entity_writer" />
  ### <Color id="aqua">Entity Writer</Color>
</Row>

Настраивает и управляет существами в мире. Позволяет накладывать эффекты или менять поведение существ в зависимости от значений переменных.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_machine_writer" />
  ### <Color id="aqua">Machine Writer</Color>
</Row>

Настраивает механизмы и управляет ими. Используйте значения переменных, чтобы задавать параметры механизмов или удалённо запускать операции через сеть.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_inventory_writer" />
  ### <Color id="aqua">Inventory Writer</Color>
</Row>

Выполняет действия с инвентарями соседних контейнеров. Сам по себе этот Writer не перемещает предметы, а настраивает поведение инвентаря на основе значений переменных.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_redstone_writer" />
  ### <Color id="aqua">Redstone Writer</Color>
</Row>

Выдаёт сигнал редстоуна заданной силы на основе значения переменной. Вставьте Variable Card типа Integer, чтобы точно установить мощность сигнала (0–15), выходящего со стороны кабеля.


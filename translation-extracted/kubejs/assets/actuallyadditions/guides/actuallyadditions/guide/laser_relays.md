---
navigation:
  title: Laser Relays
  icon: actuallyadditions:laser_relay
  parent: index.md
  position: 5
item_ids:
  - actuallyadditions:laser_relay
  - actuallyadditions:laser_relay_advanced
  - actuallyadditions:laser_relay_extreme
  - actuallyadditions:laser_relay_fluids
  - actuallyadditions:laser_relay_item
  - actuallyadditions:laser_relay_item_advanced
  - actuallyadditions:laser_wrench
  - actuallyadditions:item_interface
  - actuallyadditions:hopping_item_interface
  - actuallyadditions:item_filter
---
# <Color id="green">Laser Relays</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Laser Relays</Color>
  <ItemImage id="laser_relay" scale="2" />

  Laser Relays — система беспроводной передачи в Actually Additions. Они позволяют передавать энергию CF, жидкости и предметы между механизмами без физических соединений.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Соединение реле</Color>
</Column>

<Row>
  <ItemImage id="laser_wrench" />
  ### <Color id="aqua">Laser Wrench</Color>
</Row>

Все Laser Relays соединяются с помощью <ItemLink id="laser_wrench" />. Нажмите ПКМ по первому реле, затем по второму, чтобы создать соединение. Между связанными реле появится видимый луч. Одно реле можно соединить с несколькими другими, создавая сеть.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Реле</Color>
</Column>

<Row>
  <ItemImage id="laser_relay" />
  ### <Color id="aqua">Energy Laser Relay</Color>
</Row>

Energy Laser Relays беспроводным способом передают Crystal Flux между механизмами. Есть три уровня — <ItemLink id="laser_relay" />, <ItemLink id="laser_relay_advanced" /> и <ItemLink id="laser_relay_extreme" /> — с возрастающими лимитами передачи. При каждой передаче теряется небольшое количество энергии; потери рассчитываются за передачу, а не за каждый переход между реле.

В одной сети можно соединять реле разных уровней, но соединение будет использовать меньший лимит передачи и большие потери из двух подключённых реле.

<Row>
  <ItemImage id="laser_relay_fluids" />
  ### <Color id="aqua">Fluid Laser Relay</Color>
</Row>

Fluid Laser Relays беспроводным способом передают жидкости между резервуарами. Подключаются так же, как энергетические реле: соедините их с помощью Laser Wrench. Разместите реле рядом с каждым резервуаром и свяжите их.

Этот предмет создаётся с помощью Atomic Reconstructor.

<Row>
  <ItemImage id="laser_relay_item" />
  ### <Color id="aqua">Item Laser Relay</Color>
</Row>

Item Laser Relays — самый сложный, но и самый мощный тип реле. Слоты всех контейнеров, подключённых к сети, становятся доступны через сеть. Используйте <ItemLink id="item_interface" /> для работы с ними: он ведёт себя как большой сундук, содержащий все подключённые слоты.

<Row>
  <ItemImage id="laser_relay_item_advanced" />
  ### <Color id="aqua">Advanced Item Laser Relay</Color>
</Row>

Advanced Item Laser Relay добавляет фильтрацию по белому или чёрному списку с отдельными сторонами <Color id="aqua">INBOUND</Color> и <Color id="aqua">OUTBOUND</Color>. Это позволяет точно контролировать, какие предметы поступают в конкретные контейнеры и покидают их.

<ItemImage id="minecraft:air" scale="0.25" />
***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Item Interfaces</Color>
</Column>

<Row>
  <ItemImage id="item_interface" />
  ### <Color id="aqua">Item Interface</Color>
</Row>

Item Interface подключается к сети Item Laser Relay и объединяет все подключённые инвентари в один большой сундук. Трубы и воронки могут взаимодействовать с ним обычным образом.

<Row>
  <ItemImage id="hopping_item_interface" />
  ### <Color id="aqua">Hopping Item Interface</Color>
</Row>

Hopping Item Interface работает так же, но дополнительно автоматически забирает предметы сверху и отправляет предметы в сеть снизу. Внешние трубы не нужны.

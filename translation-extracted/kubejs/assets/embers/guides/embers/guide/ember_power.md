---
navigation:
  title: Энергия Ember
  icon: embers:copper_cell
  parent: index.md
  position: 3
item_ids:
  - embers:ember_activator
  - embers:ember_emitter
  - embers:ember_receiver
  - embers:copper_cell
  - embers:crystal_cell
  - embers:beam_cannon
  - embers:beam_splitter
  - embers:ember_relay
  - embers:mirror_relay
  - embers:mechanical_core
  - embers:copper_charger
  - embers:ember_siphon
---
# <Color id="gold">Энергия Ember</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="gold">Энергия Ember</Color>
  <ItemImage id="copper_cell" scale="2" />

  Когда у вас появятся необработанные Ember Crystals, понадобится способ активировать и передавать эту энергию. Здесь описаны механизмы сети Ember: активация, хранение, передача и подключение устройств.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ember Activator</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_activator" />
  ### <Color id="aqua">Ember Activator</Color>
</Row>

<ItemLink id="ember_activator" /> позволяет извлекать полезную энергию из Ember Crystals и Ember Shards. Подавайте кристаллы и осколки в нижнюю часть устройства с помощью Hopper или другой системы транспортировки предметов. Вскоре после вспышки активированная Ember появится в медной клетке сверху.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Emitters & Receptors</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Для передачи Ember используются два основных блока: <ItemLink id="ember_emitter" /> и <ItemLink id="ember_receiver" />.

<Row>
  <ItemImage id="ember_emitter" />
  ### <Color id="aqua">Ember Emitter</Color>
</Row>

Ember Emitters служат передатчиками: установите их на механизм, и они начнут забирать Ember во внутренний резервуар. При подаче сигнала <Color id="red">редстоуна</Color> они периодически отправляют импульсы Ember к связанному Receptor.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_receiver" />
  ### <Color id="aqua">Ember Receptor</Color>
</Row>

Ember Receptors принимают энергию. Установите их на механизм, который использует Ember, — они будут перехватывать импульсы и передавать энергию устройству.

Чтобы связать Emitter и Receptor, используйте <ItemLink id="tinker_hammer" />: сначала щёлкните ПКМ по Emitter, затем по Receptor. Ограничения по расстоянию нет, однако на очень больших дистанциях импульсы Ember могут рассеиваться.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ember Storage</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="copper_cell" />
  ### <Color id="aqua">Copper Cell</Color>
</Row>

<ItemLink id="copper_cell" /> предназначена для хранения Ember. Энергию можно подавать через Ember Receptor и извлекать с помощью Ember Emitter. При разрушении блока накопленная Ember сохраняется.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="crystal_cell" />
  ### <Color id="aqua">Crystal Cell</Color>
</Row>

The <ItemLink id="crystal_cell" /> will start small, and can have Ember inserted and extracted from it. It can also have Ember fuel items such as Ember Crystals inserted into it as well. Each fuel item will increase the maximum capacity of the Cell, eventually causing physical growth in the glowing crystal atop it.


<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Beam Network</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="beam_cannon" />
  ### <Color id="aqua">Beam Cannon</Color>
</Row>

When given enough Ember and powered with <Color id="red">redstone</Color>, the <ItemLink id="beam_cannon" /> will fire off a beam of pure radiant heat in the direction it is facing. This beam can kill nearly any unarmored creature, and also initiate transmutation at the Exchange Tablet. It can also transport large volumes of Ember to a receiver or Beam Splitter.

<ItemImage id="minecraft:air" scale="0.25"/>

<ItemGrid>
  <ItemIcon id="ember_relay" />
  <ItemIcon id="mirror_relay" />
  <ItemIcon id="beam_splitter" />
</ItemGrid>

Relays allow you to redirect and distribute Ember transmissions across your network:

- <ItemLink id="ember_relay" /> — Passes Ember straight through, acting as a waypoint in your network.
- <ItemLink id="mirror_relay" /> — Bounces Ember like light off a mirror, allowing you to redirect transmissions around corners.
- <ItemLink id="beam_splitter" /> — Divides an incoming beam into multiple outgoing streams, useful for powering several machines from a single source.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Charger & Siphon</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="copper_charger" />
  ### <Color id="aqua">Copper Charger</Color>
</Row>

The <ItemLink id="copper_charger" /> fills Ember containers placed inside it, allowing you to charge portable items that run on Ember energy.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ember_siphon" />
  ### <Color id="aqua">Ember Siphon</Color>
</Row>

The <ItemLink id="ember_siphon" /> inverts the function of a Charger — it drains Ember from containers placed inside it, extracting stored energy back into your network.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mechanical Core</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mechanical_core" />
  ### <Color id="aqua">Mechanical Core</Color>
</Row>

The <ItemLink id="mechanical_core" /> will act as a proxy to the inventory, fluid storage, or Ember storage of any large machine it is facing towards. Up to <Color id="green">three</Color> Mechanical Cores can be chained to provide a more extended interface, making it easier to automate complex setups.

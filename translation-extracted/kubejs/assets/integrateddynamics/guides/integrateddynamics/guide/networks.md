---
navigation:
  title: Networks
  icon: integrateddynamics:cable
  parent: index.md
  position: 2
item_ids:
  - integrateddynamics:cable
  - integrateddynamics:wrench
  - integrateddynamics:facade
  - integrateddynamics:part_connector_mono_directional
  - integrateddynamics:part_connector_omni_directional
---
# <Color id="aqua">Сети</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Networks</Color>
  <ItemImage id="cable" scale="2" />

  Сети Integrated Dynamics — основа любой системы автоматизации. Сеть состоит из соединённых Logic Cables, на которые устанавливаются компоненты. На этой странице описаны кабели, ключ для их настройки, фасады для маскировки кабелей и соединители для связи на больших расстояниях.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Основы кабелей</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="cable" />
  ### <Color id="aqua">Logic Cables</Color>
</Row>

Logic Cables — основа каждой сети Integrated Dynamics. Размещайте кабели, соединяя их в сеть, а затем устанавливайте на них компоненты, например считыватели и записыватели. Для управления кабелями используйте <ItemLink id="wrench" />. Shift + ПКМ удаляет кабель или компонент, а обычный ПКМ отсоединяет его от соседних кабелей.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="wrench" />
  ### <Color id="aqua">Wrench</Color>
</Row>

Wrench — основной инструмент для управления кабелями и компонентами. Щёлкните ПКМ по кабелю, чтобы отсоединить его от соседних кабелей. Shift + ПКМ удаляет кабель или компонент полностью. У ключа также есть режим смещения, позволяющий точно настраивать положение цели для компонента.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="facade" />
  ### <Color id="aqua">Facades</Color>
</Row>

Иногда кабели требуется скрыть. Facades могут имитировать любой материал, позволяя замаскировать проводку под окружающие блоки. Создайте Facade и примените его к кабелю.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Соединители</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Для соединения сетей на большом расстоянии или между измерениями Integrated Dynamics предлагает два типа соединителей:

<Row>
  <ItemImage id="part_connector_mono_directional" />
  ### <Color id="aqua">Mono-Directional Connector</Color>
</Row>

Соединяет две сети по прямой на расстоянии до 512 блоков. Разместите соединитель на каждом конце так, чтобы они были направлены друг на друга.

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_connector_omni_directional" />
  ### <Color id="aqua">Omni-Directional Connector</Color>
</Row>

Соединяет сети в любом направлении, в том числе между измерениями. Каждому соединителю назначается Group ID; все соединители с одинаковым ID связываются друг с другом. Для каждой группы используется свой цвет частиц, поэтому их легко различать.

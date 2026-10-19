---
navigation:
  title: Machines
  icon: integrateddynamics:materializer
  parent: index.md
  position: 6
item_ids:
  - integrateddynamics:materializer
  - integrateddynamics:proxy
  - integrateddynamics:delay
  - integrateddynamics:energy_battery
  - integrateddynamics:coal_generator
  - integrateddynamics:mechanical_squeezer
  - integrateddynamics:mechanical_drying_basin
---
# <Color id="aqua">Механизмы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Machines</Color>
  <ItemImage id="materializer" scale="2" />

  Integrated Dynamics добавляет механизмы, расширяющие возможности логических сетей. Они позволяют обрабатывать переменные, вырабатывать энергию и перерабатывать материалы, что необходимо для продвинутой автоматизации.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Механизмы для переменных</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="materializer" />
  ### <Color id="aqua">Materializer</Color>
</Row>

Преобразует динамические Variable Cards в статические. Вставьте динамическую карту в верхний слот, а пустую — в левый, чтобы сохранить текущее значение в виде статического снимка. Это полезно, когда нужно зафиксировать значение на определённый момент времени.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="proxy" />
  ### <Color id="aqua">Proxy</Color>
</Row>

Добавляет промежуточный уровень ссылок для переменных. Вставьте карту в верхний слот, чтобы создать Proxy Card, динамически ссылающуюся на её значение. Можно заменить исходную карту в любой момент, не меняя все места, где используется прокси, — это упрощает перенастройку сложной логики.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="delay" />
  ### <Color id="aqua">Delay</Color>
</Row>

Сохраняет историю значений переменной во времени. Вставьте карту в верхний слот, чтобы создать карты, обращающиеся к истории как к списку. Это позволяет вычислять средние значения, обнаруживать изменения и рассчитывать разницу за настраиваемый промежуток времени.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Энергия</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_battery" />
  ### <Color id="aqua">Energy Battery</Color>
</Row>

Хранит энергию для сети. Принимает RF от любого совместимого источника. Подайте сигнал редстоуна, чтобы автоматически передавать энергию соседним механизмам. Зажмите Shift и щёлкните ПКМ, держа батарею в инвентаре, чтобы включить автоматическую зарядку предметов, которые вы держите.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="coal_generator" />
  ### <Color id="aqua">Coal Generator</Color>
</Row>

Простой генератор RF, сжигающий любое топливо для печи. Подходит для питания механизмов Integrated Dynamics в начале игры, пока вам недоступны более продвинутые энергетические системы.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Механическая переработка</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mechanical_squeezer" />
  ### <Color id="aqua">Mechanical Squeezer</Color>
</Row>

Энергетическая версия ручного <ItemLink id="squeezer" />. Работает значительно быстрее и даёт больший выход ресурсов. Расходует RF, но не требует ручных прыжков. Полезное улучшение после создания надёжного источника энергии.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mechanical_drying_basin" />
  ### <Color id="aqua">Mechanical Drying Basin</Color>
</Row>

Энергетическая версия ручного <ItemLink id="drying_basin" />. Быстрее обрабатывает предметы и открывает дополнительные рецепты, недоступные базовой версии. Для работы расходует RF.


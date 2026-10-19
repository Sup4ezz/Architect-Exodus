---
navigation:
  title: Parts & Panels
  icon: integrateddynamics:variable
  parent: index.md
  position: 7
item_ids:
  - integrateddynamics:part_display_panel
  - integrateddynamics:part_static_light_panel
  - integrateddynamics:part_dynamic_light_panel
---
# <Color id="aqua">Компоненты и панели</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Parts & Panels</Color>
  <ItemImage id="part_display_panel" scale="2" />

  Компоненты и панели устанавливаются непосредственно на Logic Cables. Они отображают данные, обеспечивают освещение и расширяют возможности подключения к сети.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Настройки компонентов</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

У большинства компонентов в интерфейсе есть панель Settings. Основные параметры:

- **Target Side** — сторона соседнего блока, с которой взаимодействует компонент.
- **Ticks/Operation** — частота обновления компонента. Чем выше значение, тем реже обновления и ниже нагрузка на сеть.
- **Priority** — порядок выполнения, если одновременно работают несколько компонентов. Компоненты с более высоким приоритетом выполняются первыми.
- **Energy Channel** — энергетический канал сети, из которого компонент получает энергию.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Панель отображения</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_display_panel" />
  ### <Color id="aqua">Display Panel</Color>
</Row>

Отображает на своей поверхности текущее значение вставленной Variable Card. Панель можно повернуть с помощью <ItemLink id="wrench" />. В интерфейсе есть кнопка Copy, копирующая отображаемое значение в буфер обмена; это удобно при отладке сложных логических схем.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Световые панели</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_static_light_panel" />
  ### <Color id="aqua">Static Light Panel</Color>
</Row>

При установке на кабель создаёт постоянный источник света. Всегда включена и не требует входной переменной. Простой способ осветить трассу кабелей.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_dynamic_light_panel" />
  ### <Color id="aqua">Dynamic Light Panel</Color>
</Row>

Управляется Variable Card типа Boolean или Integer. Boolean включает и выключает свет, а Integer напрямую задаёт уровень освещения. Подходит для индикаторов и автоматизированных систем освещения.


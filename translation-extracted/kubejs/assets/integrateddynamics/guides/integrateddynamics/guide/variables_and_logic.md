---
navigation:
  title: Variables & Logic
  icon: integrateddynamics:variable
  parent: index.md
  position: 3
item_ids:
  - integrateddynamics:variable
  - integrateddynamics:variablestore
  - integrateddynamics:logic_programmer
  - integrateddynamics:labeller
---
# <Color id="aqua">Переменные и логика</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Variables & Logic</Color>
  <ItemImage id="variable" scale="2" />

  Variable Cards — основа логики Integrated Dynamics. Они содержат ссылки на значения, которые можно считывать, объединять и вычислять в сети.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Карты переменных</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="variable" scale="2" />
  ### <Color id="aqua">Variable Card</Color>
</Row>

Variable Cards — основной способ передачи логических значений. Переменная содержит ссылку на значение (Value) определённого типа (Value Type). Переменные бывают **статическими** и **динамическими**. Статические задаются один раз и не меняются. Динамические вычисляются операторами (Operators) или аспектами считывателей (Reader Aspects).

У каждой Variable Card есть уникальный ID для отладки. Используйте <ItemLink id="labeller" />, чтобы присвоить переменным понятные имена и не путаться в их назначении.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Logic Programmer</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="logic_programmer" scale="2" />
  ### <Color id="aqua">Logic Programmer</Color>
</Row>

Logic Programmer позволяет создавать динамические Variable Cards, применяя Operator к одной или нескольким картам и получая новую карту. Например, можно сложить два числа и получить переменную с результатом.

В нём доступно множество Operators; также можно создавать статические Variable Cards для всех типов значений. Logic Programmer существует в виде блока и предмета — их можно свободно преобразовывать друг в друга в сетке крафта. Предметная версия называется Portable Logic Programmer.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Variable Store</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="variablestore" scale="2" />
  ### <Color id="aqua">Variable Store</Color>
</Row>

Некоторые динамические переменные вычисляются на основе других переменных, и ссылки на них должны быть доступны в той же сети. Например, переменная, представляющая сумму двух значений, должна иметь доступ к исходным переменным в момент вычисления.

Поместите используемые Variable Cards в Variable Store, подключённый к той же сети, где вычисляется динамическая переменная. Так все зависимости будут доступны в момент вычисления.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Типы значений</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Integrated Dynamics поддерживает множество типов значений, которые могут храниться в переменных:

- **Boolean** — логическое значение True или False.
- **Integer** — целые числа примерно от −2 миллиардов до 2 миллиардов.
- **Double** — дробные числа для точных измерений.
- **Long** — целые числа большего диапазона, чем Integer.
- **String** — текстовые значения.
- **List** — список значений одного типа.
- **Operator** — ссылка на оператор; поддерживает частичное применение (currying).
- **NBT** — сложные теги данных для продвинутой обработки.
- **Block, Item, Entity, Fluid** — ссылки на объекты Minecraft.
- **Ingredients, Recipe** — данные, связанные с крафтом.

Все эти типы можно создать как статические значения в Logic Programmer или динамически считывать из мира с помощью Reader Aspects.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Операторы</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Operator может принимать одно или несколько входных значений и выдаёт одно выходное. Обычно входы и выход имеют определённый Value Type; в остальных случаях используется универсальный тип Any. Оператор с одним входом и логическим выходом Boolean называется **Predicate**.

В Logic Programmer можно искать операторы по имени и фильтровать их по типам входных и выходных значений. Объединяйте несколько операторов в сложные логические цепочки, реагирующие на события вокруг сети.

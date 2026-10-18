---
navigation:
  title: Процессоры
  icon: ae2:logic_processor
  parent: index.md
  position: 2
item_ids:
  - ae2:printed_silicon
  - ae2:printed_logic_processor
  - ae2:printed_engineering_processor
  - ae2:printed_calculation_processor
  - ae2:logic_processor
  - ae2:engineering_processor
  - ae2:calculation_processor
  - megacells:accumulation_processor
  - megacells:printed_accumulation_processor
---
# <Color id="aqua">Процессоры</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Процессоры</Color>
  <ItemImage id="ae2:logic_processor" scale="2" />

  Процессоры are crafted very differently here than in vanilla AE2. <Color id="red">В сборке нет Inscriber и его пресс-форм.</Color> Всё выполняется через <Color id="green">Thermal Component Assembly</Color>; также доступен запасной вариант через <Color id="green">Ender IO Slicing</Color> для резервного способа. Остальные этапы прежние: изготовьте Printed Silicon, напечатайте пластину процессора и объедините компоненты.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Шаг 1 — Printed Silicon</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ae2:printed_silicon" />
  ### <Color id="aqua">Printed Silicon</Color>
</Row>

Поместите предмет с тегом <Color id="green">forge:silicon</Color> в <ItemLink id="thermal:machine_press" /> чтобы получить <ItemLink id="ae2:printed_silicon" /> (6,400 FE).

В качестве альтернативы <ItemLink id="enderio:slice_and_splice" /> превращает 3 кремния в 3 Printed Silicon за один цикл (20 000 FE) — удобно при массовом производстве.

<RecipeFor id="ae2:printed_silicon" fallbackText="Check JEI for the Thermal Press recipe." />

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Шаг 2 — Создание печатной пластины процессора</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Для каждого процессора нужна соответствующая печатная пластина. Она создаётся прессованием нужного материала в Thermal Press:

| Plate | Base Material |
|---|---|
| <ItemImage id="ae2:printed_logic_processor" scale="0.5" /> <Color id="aqua">Printed Logic Processor</Color> | forge:ingots/gold |
| <ItemImage id="ae2:printed_engineering_processor" scale="0.5" /> <Color id="aqua">Printed Engineering Processor</Color> | forge:gems/diamond |
| <ItemImage id="ae2:printed_calculation_processor" scale="0.5" /> <Color id="aqua">Printed Calculation Processor</Color> | forge:gems/certus_quartz |
| <ItemImage id="megacells:printed_accumulation_processor" scale="0.5" /> <Color id="aqua">Printed Accumulation Processor</Color> | forge:ingots/sky_steel (MEGACells) |

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Шаг 3 — Сборка в Component Assembler</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Финальная сборка процессора выполняется в <ItemLink id="thermal_extra:component_assembly" />. Для каждого рецепта нужны:

- 1× печатная пластина процессора (Logic / Engineering / Calculation / Accumulation)
- 1× <ItemLink id="ae2:printed_silicon" />
- 50 мБ <Color id="green">Redstone fluid</Color>

Результат: готовый процессор (Logic, Engineering, Calculation или Accumulation), расход энергии — <Color id="green">6,400 FE</Color> на рецепт.

<ItemImage id="minecraft:air" scale="0.25"/>

<RecipeFor id="ae2:logic_processor" fallbackText="Check JEI for the Component Assembler recipe — input the Printed Logic Processor, Printed Silicon, and Redstone fluid." />

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Запасной способ через Ender IO</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Механизм <ItemLink id="enderio:slice_and_splice" /> также может создавать процессоры напрямую: подайте в него <Color id="aqua">Incomplete Processor</Color> и 3 печатные пластины — за цикл он выдаст 3 готовых процессора. Каждый рецепт выполняется медленнее, но это удобно, если Slice'N'Splice уже используется для других производственных цепочек.

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="yellow">Note:</Color> Механизм vanilla Inscriber, all four AE2 Presses (silicon, logic, calculation, engineering), and MEGACells Accumulation Press are <Color id="red">removed</Color> удалены из сборки: их нельзя создать, и они скрыты в JEI.

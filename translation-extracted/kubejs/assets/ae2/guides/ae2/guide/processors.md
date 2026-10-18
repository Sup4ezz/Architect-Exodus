---
navigation:
  title: Processors
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
# <Color id="aqua">Processors</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Processors</Color>
  <ItemImage id="ae2:logic_processor" scale="2" />

  Processors are crafted very differently here than in vanilla AE2. <Color id="red">There is no Inscriber and no Inscriber Presses.</Color> Everything runs through <Color id="green">Thermal Component Assembly</Color>, with <Color id="green">Ender IO Slicing</Color> available as a fallback. The flow is otherwise the same: print silicon, print the processor, combine.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Step 1 — Printed Silicon</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="ae2:printed_silicon" />
  ### <Color id="aqua">Printed Silicon</Color>
</Row>

Run a piece tagged <Color id="green">forge:silicon</Color> through a <ItemLink id="thermal:machine_press" /> to produce <ItemLink id="ae2:printed_silicon" /> (6,400 FE).

Alternatively, the Ender IO <ItemLink id="enderio:slice_and_splice" /> slices 3 silicon into 3 Printed Silicon at once (20,000 FE) — useful when bulk-crafting.

<RecipeFor id="ae2:printed_silicon" fallbackText="Check JEI for the Thermal Press recipe." />

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Step 2 — Print the Processor Plate</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Each processor has a corresponding "printed" plate, made by pressing the appropriate base material in a Thermal Press:

| Plate | Base Material |
|---|---|
| <ItemImage id="ae2:printed_logic_processor" scale="0.5" /> <Color id="aqua">Printed Logic Processor</Color> | forge:ingots/gold |
| <ItemImage id="ae2:printed_engineering_processor" scale="0.5" /> <Color id="aqua">Printed Engineering Processor</Color> | forge:gems/diamond |
| <ItemImage id="ae2:printed_calculation_processor" scale="0.5" /> <Color id="aqua">Printed Calculation Processor</Color> | forge:gems/certus_quartz |
| <ItemImage id="megacells:printed_accumulation_processor" scale="0.5" /> <Color id="aqua">Printed Accumulation Processor</Color> | forge:ingots/sky_steel (MEGACells) |

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Step 3 — Combine in the Component Assembler</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The final processor is assembled in a <ItemLink id="thermal_extra:component_assembly" />. Each processor recipe takes:

- 1× Printed processor plate (Logic / Engineering / Calculation / Accumulation)
- 1× <ItemLink id="ae2:printed_silicon" />
- 50 mB <Color id="green">Redstone fluid</Color>

Output: the finished processor (Logic, Engineering, Calculation, or Accumulation) at <Color id="green">6,400 FE</Color> per recipe.

<ItemImage id="minecraft:air" scale="0.25"/>

<RecipeFor id="ae2:logic_processor" fallbackText="Check JEI for the Component Assembler recipe — input the Printed Logic Processor, Printed Silicon, and Redstone fluid." />

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Ender IO Fallback</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The <ItemLink id="enderio:slice_and_splice" /> can also produce processors directly: feed it an <Color id="aqua">Incomplete Processor</Color> + 3× Printed plate, and it outputs 3 finished processors per cycle. Slower per-recipe but useful if you already have a Slice'N'Splice running for soul-line crafting.

<ItemImage id="minecraft:air" scale="0.25"/>

<Color id="yellow">Note:</Color> The vanilla Inscriber, all four AE2 Presses (silicon, logic, calculation, engineering), and MEGACells Accumulation Press are <Color id="red">removed</Color> from this pack — they cannot be crafted and are hidden from JEI.

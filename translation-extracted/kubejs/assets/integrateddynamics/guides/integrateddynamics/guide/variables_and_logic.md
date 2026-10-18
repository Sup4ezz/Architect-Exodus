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
# <Color id="aqua">Variables & Logic</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Variables & Logic</Color>
  <ItemImage id="variable" scale="2" />

  Variable Cards are the foundation of Integrated Dynamics logic. They carry references to values that can be read, combined, and evaluated across your network.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Variable Cards</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="variable" scale="2" />
  ### <Color id="aqua">Variable Card</Color>
</Row>

Variable Cards are the primary mode of logic transport. A variable contains a reference to a certain Value with a certain Value Type. Variables can either be **static** or **dynamic**. Static variables are defined once and never change. Dynamic variables are the result of some form of Logic Evaluation done by Operators or Reader Aspects.

Each Variable Card has a unique ID for debugging purposes. Use a <ItemLink id="labeller" /> to give your variables readable names so you can keep track of what each one does.


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

The Logic Programmer allows you to create dynamic variable cards by applying an Operator on one or more Variable Cards to produce a new Variable Card. For example, you can add two Numbers together to produce a new Number variable.

It contains a large collection of Operators and also allows creating static Variable Cards for all Value Types. The Logic Programmer exists in both block and item form — you can freely convert between them via the crafting grid. The item form is called the Portable Logic Programmer.


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

Some dynamic variables are evaluated based on other variables, and access to those referenced variables must be possible within the same network. For example, a dynamic variable representing the addition of two variables must be able to access those other variables when evaluated.

Place your referenced Variable Cards into a Variable Store that is connected to the same network as where the dynamic variable is being evaluated. This ensures all dependencies can be resolved at evaluation time.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Value Types</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Integrated Dynamics supports a wide range of value types that variables can hold:

- **Boolean** — True or False
- **Integer** — Whole numbers, ranging from -2 billion to 2 billion
- **Double** — Decimal numbers for precise measurements
- **Long** — Larger integers when Integer is not enough
- **String** — Text values
- **List** — A collection of values sharing the same type
- **Operator** — A reference to an operator (supports currying for partial application)
- **NBT** — Complex data tags for advanced data handling
- **Block, Item, Entity, Fluid** — References to Minecraft objects
- **Ingredients, Recipe** — Crafting-related data

All of these can be created as static values in the Logic Programmer, or read dynamically from the world using Reader Aspects.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Operators</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

An Operator can have one or more input values and has one output value. In most cases the inputs and output have a specific Value Type, otherwise they will accept the Any value type. An Operator with a single input and one Boolean output is called a **Predicate**.

The Logic Programmer allows you to search operators by name and filter them by input or output type, making it easy to find the exact operation you need. Combine multiple operators together to build complex logic chains that react to the world around your network.

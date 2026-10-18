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
# <Color id="aqua">Machines</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Machines</Color>
  <ItemImage id="materializer" scale="2" />

  Integrated Dynamics includes several machines that extend the capabilities of your logic networks. From variable manipulation to energy generation and material processing, these machines are essential for advanced automation.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Variable Machines</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="materializer" />
  ### <Color id="aqua">Materializer</Color>
</Row>

Converts dynamic Variable Cards into static ones. Insert a dynamic card in the top slot and an empty card in the left slot to copy the current value as a static snapshot. This is useful when you need to freeze a value at a specific moment in time.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="proxy" />
  ### <Color id="aqua">Proxy</Color>
</Row>

Adds a layer of indirection for variables. Insert a card in the top slot to write a proxy card that dynamically references that card's value. You can swap the referenced card at any time without updating every place the proxy is used, making it easy to reconfigure complex logic.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="delay" />
  ### <Color id="aqua">Delay</Color>
</Row>

Maintains a history of variable values over time. Insert a card in the top slot to create cards that reference the history as a list. This is useful for calculating averages, detecting changes, or computing differences over a configurable time window.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Energy</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="energy_battery" />
  ### <Color id="aqua">Energy Battery</Color>
</Row>

Provides energy storage for your networks. Accepts RF from any compatible energy source. Apply a redstone signal to enable automatic energy export to adjacent machines. Shift+right-click with the battery in your inventory to enable auto-supply mode, which will charge held items.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="coal_generator" />
  ### <Color id="aqua">Coal Generator</Color>
</Row>

A simple RF energy generator that burns any burnable fuel item. A good early-game power source for your Integrated Dynamics machines before you have access to more advanced energy systems.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Mechanical Processing</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mechanical_squeezer" />
  ### <Color id="aqua">Mechanical Squeezer</Color>
</Row>

An energy-powered upgrade to the manual <ItemLink id="squeezer" />. Significantly faster and produces higher yields. Consumes RF but eliminates the need for manual jumping. A worthwhile investment once you have reliable power.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="mechanical_drying_basin" />
  ### <Color id="aqua">Mechanical Drying Basin</Color>
</Row>

An energy-powered upgrade to the manual <ItemLink id="drying_basin" />. Processes items faster and unlocks additional recipes not available in the basic version. Consumes RF for operation.


---
navigation:
  title: Reactor
  icon: draconicevolution:reactor_core
  parent: index.md
  position: 5
item_ids:
  - draconicevolution:reactor_core
  - draconicevolution:reactor_stabilizer
  - draconicevolution:reactor_injector
---
# <Color id="red">Draconic Reactor</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="red">Draconic Reactor</Color>
  <ItemImage id="reactor_core" scale="2" />

  The Draconic Reactor generates massive amounts of RF from Draconium fuel. It is extremely powerful but equally dangerous — a mismanaged reactor will explode catastrophically.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Structure</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The reactor multiblock consists of three components:

- <ItemLink id="reactor_core" /> — The central block. Place this first.
- <ItemLink id="reactor_stabilizer" /> — Place 4 stabilizers exactly 3 blocks away from the core in each cardinal direction (north, south, east, west).
- <ItemLink id="reactor_injector" /> — Place 1 injector adjacent to the core to feed it energy for the containment field.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Operation</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Fuel the reactor with Awakened Draconium Ingots. Once fueled and activated, monitor these key stats:

- <Color id="aqua">Core Temperature</Color> — Keep this at a manageable level. Higher temperatures increase generation but also increase instability.
- <Color id="aqua">Containment Field Strength</Color> — <Color id="red">Must stay above 0%.</Color> The field consumes energy to maintain. If it drops to zero, the reactor explodes.
- <Color id="aqua">Energy Saturation</Color> — Higher saturation means less fuel consumption. Aim to keep this high for efficiency.
- <Color id="aqua">Generation Rate</Color> — The RF/t output of the reactor.
- <Color id="aqua">Fuel Conversion Rate</Color> — How quickly fuel is being consumed. Lower is better.

Energy must be continuously fed into the reactor via the injector to maintain the containment field. If energy input stops, the field will decay and the reactor will eventually detonate.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Safety Systems</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

The reactor includes a <Color id="green">Semi-Automated Shutdown (SAS)</Color> system. When enabled, the reactor will automatically shut down when the core temperature drops below 2500C and energy saturation reaches 99%.

The reactor also provides comparator outputs for monitoring:
- Field strength
- Temperature
- Saturation
- Fuel level

Use these with redstone circuits to build automated safety systems.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Warning</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

><Color id="red">CRITICAL:</Color> If the containment field fails completely, the reactor enters an irreversible meltdown sequence. An emergency shield reserve activates briefly, but the explosion <Color id="red">cannot be stopped</Color> once meltdown begins.

The resulting explosion rivals a nuclear blast and will destroy a massive area around the reactor. Always build the reactor far from your base and maintain redundant energy supplies to the containment field.

><Color id="yellow">Recommendation:</Color> Build an automated shutdown system using comparator outputs before attempting to run the reactor at high temperatures.

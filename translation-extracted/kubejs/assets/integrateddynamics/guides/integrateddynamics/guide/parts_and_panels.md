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
# <Color id="aqua">Parts & Panels</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Parts & Panels</Color>
  <ItemImage id="part_display_panel" scale="2" />

  Parts and panels are components that attach directly to Logic Cables. They provide visual feedback, lighting, and network connectivity options.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Part Settings</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Most parts have a Settings panel accessible from their GUI. Common settings include:

- **Target Side** — Which face of the adjacent block the part interacts with.
- **Ticks/Operation** — How frequently the part updates. Higher values mean slower updates but less network load.
- **Priority** — Execution order when multiple parts compete. Higher priority parts execute first.
- **Energy Channel** — Which energy channel the part draws from on the network.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Display Panel</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_display_panel" />
  ### <Color id="aqua">Display Panel</Color>
</Row>

Shows the current value of an inserted Variable Card on its face. Can be rotated with a <ItemLink id="wrench" />. The GUI includes a Copy button that copies the displayed value to your clipboard, which is handy for debugging complex logic setups.


<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Light Panels</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_static_light_panel" />
  ### <Color id="aqua">Static Light Panel</Color>
</Row>

Emits a constant light source when placed on a cable. It is always on and requires no variable input. A simple way to add lighting to your cable runs.


<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="part_dynamic_light_panel" />
  ### <Color id="aqua">Dynamic Light Panel</Color>
</Row>

Can be controlled with a Boolean or Integer Variable Card. A Boolean toggles the light on or off, while an Integer sets the light level directly. Useful for indicator lights or automated lighting systems.


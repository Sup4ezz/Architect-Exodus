---
navigation:
  title: Laser Relays
  icon: actuallyadditions:laser_relay
  parent: index.md
  position: 5
item_ids:
  - actuallyadditions:laser_relay
  - actuallyadditions:laser_relay_advanced
  - actuallyadditions:laser_relay_extreme
  - actuallyadditions:laser_relay_fluids
  - actuallyadditions:laser_relay_item
  - actuallyadditions:laser_relay_item_advanced
  - actuallyadditions:laser_wrench
  - actuallyadditions:item_interface
  - actuallyadditions:hopping_item_interface
  - actuallyadditions:item_filter
---
# <Color id="green">Laser Relays</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Laser Relays</Color>
  <ItemImage id="laser_relay" scale="2" />

  Laser Relays are the wireless transfer system of Actually Additions. They can move CF energy, fluids, and items between machines without physical connections.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Connecting Relays</Color>
</Column>

<Row>
  <ItemImage id="laser_wrench" />
  ### <Color id="aqua">Laser Wrench</Color>
</Row>

All Laser Relays are connected using the <ItemLink id="laser_wrench" />. Right-click the first relay, then right-click the second to form a connection. A visible beam appears between linked relays. Each relay can connect to multiple others to form a network.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Relays</Color>
</Column>

<Row>
  <ItemImage id="laser_relay" />
  ### <Color id="aqua">Energy Laser Relay</Color>
</Row>

Energy Laser Relays wirelessly transfer Crystal Flux between machines. There are three tiers — the <ItemLink id="laser_relay" />, <ItemLink id="laser_relay_advanced" />, and <ItemLink id="laser_relay_extreme" /> — with increasing transfer caps. Each transfer incurs a small energy loss — this loss is per-transfer, not per relay hop.

You can interconnect different tiers in the same network, but the connection will use the lowest transfer cap and highest loss of the two connected relays.

<Row>
  <ItemImage id="laser_relay_fluids" />
  ### <Color id="aqua">Fluid Laser Relay</Color>
</Row>

Fluid Laser Relays transfer fluids wirelessly between tanks. They use the same connection method as energy relays; link them with the Laser Wrench. Place a relay adjacent to each tank and connect them.

Item is crafted via the Atomic Reconstructor.

<Row>
  <ItemImage id="laser_relay_item" />
  ### <Color id="aqua">Item Laser Relay</Color>
</Row>

Item Laser Relays are the most complex but also the most powerful relay type. All container slots connected to the relay network are "known" to the network. Use an <ItemLink id="item_interface" /> to interact with those slots; it behaves like a large chest containing every connected slot.

<Row>
  <ItemImage id="laser_relay_item_advanced" />
  ### <Color id="aqua">Advanced Item Laser Relay</Color>
</Row>

The Advanced Item Laser Relay adds white or blocklist filtering with separate <Color id="aqua">INBOUND</Color> and <Color id="aqua">OUTBOUND</Color> sides, giving you fine control over which items enter or leave specific containers.

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Item Interfaces</Color>
</Column>

<Row>
  <ItemImage id="item_interface" />
  ### <Color id="aqua">Item Interface</Color>
</Row>

The Item Interface connects to an Item Laser Relay network and exposes all connected inventories as a single large chest. Pipes and hoppers can interact with it normally.

<Row>
  <ItemImage id="hopping_item_interface" />
  ### <Color id="aqua">Hopping Item Interface</Color>
</Row>

The Hopping Item Interface does the same thing, but also automatically pulls items from above and pushes items into the network below. No external pipes are needed.
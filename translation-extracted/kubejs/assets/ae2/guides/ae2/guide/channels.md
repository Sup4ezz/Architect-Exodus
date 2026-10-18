---
navigation:
  title: Channels
  icon: ae2:controller
  parent: index.md
  position: 4
item_ids:
  - ae2:controller
  - ae2:cable_anchor
---
# <Color id="aqua">Channels</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Channels</Color>
  <ItemImage id="ae2:controller" scale="2" />

  By default, <Color id="green">Architect's Exodus runs AE2 with INFINITE channels</Color>. You can ignore channel planning entirely — every cable carries unlimited channels, every machine connects to the network without a Controller bottleneck.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Default Configuration</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Set in `config/ae2/common.json`:

```
"channels": "infinite"
```

This means:

- You do <Color id="green">not</Color> need a Controller to run a network.
- Dense Smart Cables provide no functional benefit over standard cables for channel capacity — only for visual clarity.
- P2P tunnels can still be useful for separating logical networks or moving large item/fluid throughput, but you do not need to use them to work around channel limits.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Re-enabling Channels (Optional)</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

If you want the classic AE2 challenge of channel management, change the config value to `default`:

```
"channels": "default"
```

This restores vanilla AE2 channel mechanics:

- Standard cables carry 8 channels max
- Dense cables carry 32 channels max
- A Controller is required for networks with more than 8 channels
- P2P tunnels become essential for routing channels through pinch points

<Color id="yellow">If you're following this guide page because you've enabled the default channel mode</Color>, treat the rest of this guide's processor/charged-certus pages as normal — only the channel networking section changes.

<ItemImage id="minecraft:air" scale="0.25"/>

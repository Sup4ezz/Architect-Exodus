---
navigation:
  title: Applied Energistics 2
  icon: ae2:controller
  position: 0
---
# <Color id="aqua">Applied Energistics 2 in Architect's Exodus</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Applied Energistics 2</Color>

  <ItemImage id="ae2:controller" scale="2" />

  Applied Energistics 2 is the digital-storage backbone of this pack. The pack rewires several core AE2 systems — processors are crafted through Thermal/Ender IO, charged certus comes from a Powah Energizing Orb, and the channel limit is disabled. This guide covers <Color id="yellow">only the Exodus-specific changes</Color>; for general AE2 mechanics, refer to JEI or the upstream AE2 documentation.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">What's Different in This Pack</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

- <Color id="red">Inscriber, Inscriber Presses, and Charger are removed.</Color> Their recipes are deleted and the items are hidden from JEI.
- <Color id="green">Processors</Color> are crafted using <Color id="aqua">Thermal Component Assembly</Color> (or <Color id="aqua">Ender IO Slice'N'Splice</Color> as a fallback). No presses, no inscriber.
- <Color id="green">Charged Certus Quartz</Color> is made by energizing plain certus in a <Color id="aqua">Powah Energizing Orb</Color> instead of an AE2 Charger.
- <Color id="green">Flawless certus quartz</Color> comes primarily from <Color id="aqua">GeOre certus geodes in Jotunheim</Color>. Meteorites still generate, but the geodes are the reliable source.
- <Color id="green">Channels are set to INFINITE</Color> by default. You do not need a Controller and you do not need to plan around the 8-channel limit unless you explicitly re-enable it in config.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Page Links</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <Column>
    * <ItemImage id="ae2:certus_quartz_crystal" scale="0.75" /> [Getting Started: Certus Quartz](getting_started.md)
  </Column>
  <Column>
    * <ItemImage id="ae2:logic_processor" scale="0.75" /> [Processors](processors.md)
  </Column>
  <Column>
    * <ItemImage id="ae2:charged_certus_quartz_crystal" scale="0.75" /> [Charged Certus](charged_certus.md)
  </Column>
  <Column>
    * <ItemImage id="ae2:controller" scale="0.75" /> [Channels](channels.md)
  </Column>
</Row>

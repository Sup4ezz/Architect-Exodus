---
navigation:
  title: Начало работы
  icon: malum:spirit_altar
  parent: index.md
  position: 1
item_ids:
  - malum:encyclopedia_arcana
  - malum:spirit_altar
  - malum:runewood_log
  - malum:raw_soulstone
  - malum:processed_soulstone
  - malum:hex_ash
  - malum:spirit_pouch
  - malum:crude_scythe
---
# <Color id="dark_purple">Начало работы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="dark_purple">Начало работы</Color>
  <ItemImage id="spirit_altar" scale="2" />

  Malum начинается со сбора природных материалов и создания первых инструментов для добычи духов. Здесь описаны основы, необходимые для знакомства с магией душ.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Runewood</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="runewood_log" />
  <ItemImage id="exposed_runewood_log"/> 
  ### <Color id="aqua">Runewood</Color>
</Row>

Runewood Trees встречаются в обычном мире. Их древесина — основной строительный материал для большинства устройств и сооружений Malum. Runewood Planks, Runewood Slabs и другие варианты древесины используются во многих рецептах. Для начала добудьте <ItemLink id="runewood_log" />.

Когда саженец вырастет, на деревьях также появятся <Color id="dark_purple">Exposed Runewood logs</Color>. Из этих брёвен можно добывать дополнительные материалы.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Soulstone</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="raw_soulstone" />
  ### <Color id="aqua">Soulstone</Color>
</Row>

Soulstone не генерируется естественным образом в Helheim. Найдите Enderslime Crystals <ItemImage id="tconstruct:ender_slime_crystal"/> и бросьте кристалл в пустоту. Из пустоты поднимется нужный вам Raw Soulstone.
Переплавьте Raw Soulstone, чтобы получить <ItemLink id="processed_soulstone" />. Soulstone используется во множестве рецептов и наряду с Runewood является одним из основных материалов.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Crude Scythe</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="crude_scythe" />
  ### <Color id="aqua">Crude Scythe</Color>
</Row>

Your first scythe — the essential tool for collecting spirits. When you kill a mob with a Scythe, it drops <Color id="dark_purple">Spirit Arcana</Color> matching that creature's soul type. Without a scythe, spirits are lost.

<Recipe id="crude_scythe"/>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spirit Altar</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spirit_altar" />
  ### <Color id="aqua">Spirit Altar</Color>
</Row>

The <ItemLink id="spirit_altar" /> is the primary crafting station. Place an item on the altar (right-click), surround it with items on Arcane Pedestals, then supply Spirit Arcana on additional pedestals. The altar will consume the spirits and ingredients to perform Spirit Infusion.

<Recipe id="malum:spirit_altar"/>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Hex Ash</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="hex_ash" />
  ### <Color id="aqua">Hex Ash</Color>
</Row>

A fundamental crafting ingredient created through Spirit Infusion. <ItemLink id="hex_ash" /> is used in many recipes throughout the mod and serves as a bridge material for more advanced crafting.



<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Spirit Pouch</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

<Row>
  <ItemImage id="spirit_pouch" />
  ### <Color id="aqua">Spirit Pouch</Color>
</Row>

A portable container for storing Spirit Arcana. The <ItemLink id="spirit_pouch" /> keeps your inventory clean while collecting spirits, automatically picking up any spirits that drop nearby.

<Recipe id="ftb:malum/spirit_pouch"/>
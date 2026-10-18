---
navigation:
  title: Applied Energistics 2
  icon: ae2:controller
  position: 0
---
# <Color id="aqua">Applied Energistics 2 в Architect's Exodus</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Applied Energistics 2</Color>

  <ItemImage id="ae2:controller" scale="2" />

  Applied Energistics 2 — основа цифрового хранения предметов в этой сборке. Некоторые ключевые механики AE2 здесь изменены: процессоры создаются через Thermal/Ender IO, заряженный Certus Quartz получается в Energizing Orb от Powah, а ограничение каналов отключено. Это руководство описывает <Color id="yellow">только изменения, внесённые в Architect's Exodus</Color>. Общие механики AE2 смотрите в JEI или официальной документации мода.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Что изменено в сборке</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

- <Color id="red">Inscriber, Inscriber Presses и Charger удалены.</Color> Их рецепты отключены, а предметы скрыты в JEI.
- <Color id="green">Процессоры</Color> создаются с помощью <Color id="aqua">Thermal Component Assembly</Color> или, как запасной вариант, <Color id="aqua">Ender IO Slice'N'Splice</Color>. Прессы и Inscriber не нужны.
- <Color id="green">Charged Certus Quartz</Color> получается зарядкой обычного Certus Quartz в <Color id="aqua">Powah Energizing Orb</Color> вместо Charger из AE2.
- <Color id="green">Flawless Certus Quartz</Color> в основном добывается из <Color id="aqua">GeOre Certus Geodes в Йотунхейме</Color>. Метеориты по-прежнему генерируются, но геоды — более надёжный источник.
- <Color id="green">Каналы по умолчанию установлены в INFINITE.</Color> Контроллер не требуется, и планировать сеть с учётом лимита в 8 каналов не нужно, если вы специально не включите это ограничение в настройках.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Разделы руководства</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.5"/>

<Row>
  <Column>
    * <ItemImage id="ae2:certus_quartz_crystal" scale="0.75" /> [Начало работы: Certus Quartz](getting_started.md)
  </Column>
  <Column>
    * <ItemImage id="ae2:logic_processor" scale="0.75" /> [Процессоры](processors.md)
  </Column>
  <Column>
    * <ItemImage id="ae2:charged_certus_quartz_crystal" scale="0.75" /> [Заряженный Certus Quartz](charged_certus.md)
  </Column>
  <Column>
    * <ItemImage id="ae2:controller" scale="0.75" /> [Каналы](channels.md)
  </Column>
</Row>
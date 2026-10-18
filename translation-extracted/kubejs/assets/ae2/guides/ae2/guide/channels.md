---
navigation:
  title: Каналы
  icon: ae2:controller
  parent: index.md
  position: 4
item_ids:
  - ae2:controller
  - ae2:cable_anchor
---
# <Color id="aqua">Каналы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="aqua">Каналы</Color>
  <ItemImage id="ae2:controller" scale="2" />

  По умолчанию <Color id="green">Architect's Exodus использует в AE2 БЕСКОНЕЧНОЕ количество каналов</Color>. Можно не планировать каналы вообще: каждый кабель поддерживает неограниченное количество каналов, а любые механизмы подключаются к сети без ограничений контроллера.
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Настройки по умолчанию</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Set in `config/ae2/common.json`:

```
"channels": "infinite"
```

Это означает, что:

- Вам <Color id="green">not</Color> не нужен Controller для работы сети.
- Dense Smart Cables не дают преимущества по числу каналов по сравнению с обычными кабелями — они нужны лишь для удобства визуального разделения.
- P2P-туннели полезны для разделения логических сетей и передачи больших потоков предметов или жидкостей, но обходить ими ограничения каналов не требуется.

<ItemImage id="minecraft:air" scale="0.25"/>

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Re-enabling Каналы (Optional)</Color>
</Column>

<ItemImage id="minecraft:air" scale="0.25"/>

Если хотите вернуть классическую механику управления каналами AE2, измените значение настройки на `default`:

```
"channels": "default"
```

Это восстановит стандартные правила каналов AE2:

- Обычные кабели поддерживают максимум 8 каналов
- Плотные кабели поддерживают максимум 32 канала
- Для сетей с более чем 8 каналами необходим Controller
- P2P-туннели становятся необходимы для передачи каналов через узкие места сети

<Color id="yellow">Если вы читаете эту страницу после включения стандартного режима каналов</Color>, остальные разделы руководства о процессорах и заряженном Certus Quartz остаются актуальными — меняется только раздел о сетевых каналах.

<ItemImage id="minecraft:air" scale="0.25"/>

---
navigation:
  parent: mechanics/mechanics-index.md
  title: Хель — королева подземного мира
  icon: ftbragnarok:dead_heart
  position: 1
item_ids:
  - ftbragnarok:dead_heart
---

<Column alignItems="center" fullWidth={true}>

# <Color id="light_purple">Hel</Color> — королева подземного мира
<ItemImage id="ftbragnarok:dead_heart" scale="2" />

Hel — богиня подземного мира и первый босс в цепочке Рагнарёка. Это неуловимая волшебница, предпочитающая сражаться на расстоянии.
</Column>

<Column alignItems="center" fullWidth={true}>
### <ItemImage id="ftbragnarok:dead_heart" scale="0.75" /> <Color id="aqua">Характеристики босса</Color> <ItemImage id="ftbragnarok:dead_heart" scale="0.75" />
</Column>

* <Color id="red">Health:</Color> 350 HP
* <Color id="gold">Damage Cap:</Color> 10% (35 HP per hit)
* <Color id="green">Drops:</Color> <ItemLink id="ftbragnarok:dead_heart" />

***
<Column alignItems="center" fullWidth={true}>
## <Color id="gold">Поведение в бою</Color>
</Column>

Hel — <Color id="light_purple">летающий босс</Color>, парящий над землёй и часто телепортирующийся, чтобы избегать ближнего боя. Особенно опасна её дальняя магия.

### <Color id="aqua">Смена фаз</Color>

| Фаза | Уровень здоровья | Новые способности |
|-------|-----------------|---------------|
| 1 | 100% - 70% | Basic attacks |
| 2 | 70% - 40% | Summons Hel Clones |
| 3 | 40% - 15% | Sculk Tentacles, Starfall |
| 4 | Below 15% | All abilities enhanced |

### <Color id="aqua">Уклонение</Color>
* <Color id="green">Шанс уклонения:</Color> 65% chance to phase through attacks
* <Color id="green">Телепортация:</Color> Teleports away when players get within 6 blocks
* <Color id="green">Щит:</Color> Casts a magical shield when hit by projectiles

***
<Column alignItems="center" fullWidth={true}>
## <Color id="gold">Атаки</Color>
</Column>

### <Color id="red">Soul Fireballs</Color>
Hel выпускает самонаводящиеся огненные шары душ во всех игроков поблизости. Снаряды преследуют выбранные цели.

### <Color id="red">Wither Skulls</Color>
Тёмные черепа, накладывающие эффект иссушения on hit.

### <Color id="red">Sculk Tentacles</Color>
A telegraphed ground attack - watch for purple particles and MOVE! Deals heavy damage if caught.

### <Color id="red">Summon Hel Clones</Color>
Hel summons spectral copies of herself that also cast spells. Kill them quickly!

### <Color id="red">Starfall</Color>
In later phases, Hel calls down meteors from the sky.

### <Color id="aqua">Anti-Flying Mechanic</Color>
If players try to cheese the fight by flying too high, Hel will cast <Color id="light_purple">Chains of Ragnarok</Color> - summoning lightning and pulling all players down to the ground.
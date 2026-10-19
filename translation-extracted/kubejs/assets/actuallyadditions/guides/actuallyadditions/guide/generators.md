---
navigation:
  title: Генераторы
  icon: actuallyadditions:coal_generator
  parent: index.md
  position: 2
item_ids:
  - actuallyadditions:coal_generator
  - actuallyadditions:leaf_generator
  - actuallyadditions:oil_generator
  - actuallyadditions:heat_collector
  - actuallyadditions:bio_reactor
---
# <Color id="green">Генераторы</Color>

<Column alignItems="center" fullWidth={true}>
  # <Color id="green">Генераторы</Color>
  <ItemImage id="coal_generator" scale="2" />
  Генераторы производят Crystal Flux (CF) — энергию для ваших механизмов. У каждого генератора свой источник топлива и своя мощность.
</Column>

<ItemImage id="minecraft:air" scale="0.25" />

***

<Column alignItems="center" fullWidth={true}>
  ## <Color id="gold">Crystal Flux</Color>
</Column>

Crystal Flux (CF) — система энергии, используемая всеми механизмами Actually Additions. Она полностью совместима с Forge Energy (FE) и Redstone Flux (RF), поэтому механизмы могут питаться от источников энергии из других модов. Отдельный генератор CF для начала не обязателен: можно подключить любой источник CF, FE или RF.

***
<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="coal_generator" scale="1" />
  ### <Color id="aqua">Coal Generator</Color>
</Row>

Сжигает любое топливо для печи, производя CF. Подайте сигнал редстоуна, чтобы остановить расход топлива. Компаратор позволяет считывать количество накопленной энергии.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="leaf_generator" scale="1" />
  ### <Color id="aqua">Leaf Generator</Color>
</Row>

Уничтожает листья поблизости, чтобы производить CF. Радиус работы можно настроить. Это простой генератор для начала игры — установите его рядом с деревьями.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="heat_collector" scale="1" />
  ### <Color id="aqua">Heat Collector</Color>
</Row>

Производит CF за счёт расположенных поблизости блоков лавы. Для работы вокруг него должно находиться минимальное количество источников лавы. Учтите: иногда он поглощает один из блоков лавы.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="bio_reactor" scale="1" />
  ### <Color id="aqua">Bio Reactor</Color>
</Row>

Производит CF из органических материалов: семян, еды и растений. Чем <Color id="green">разнообразнее</Color> предметы, которыми вы его снабжаете, тем больше энергии он вырабатывает. Для максимальной мощности используйте разные виды органики.

<ItemImage id="minecraft:air" scale="0.25" />

<Row>
  <ItemImage id="oil_generator" scale="1" />
  ### <Color id="aqua">Oil Generator</Color>
</Row>

Сжигает Canola Oil и его улучшенные варианты, производя CF. Производственная цепочка выглядит так:

1. Соберите Canola и переработайте её в <ItemLink id="canola_press" />, чтобы получить Canola Oil.
2. Используйте <ItemLink id="fermenting_barrel" />, чтобы получить Refined Canola Oil.
3. Следующие ступени — Crystallized Oil и Empowered Oil; их получают с помощью рецептов крафта.

Масла более высокого уровня производят значительно больше CF на ведро.

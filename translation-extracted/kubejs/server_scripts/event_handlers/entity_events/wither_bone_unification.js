EntityEvents.drops("minecraft:wither_skeleton", (event) => {
  const drops = event.getDrops();
  const toReplace = [];
  drops.forEach((itemEntity) => {
    const stack = itemEntity.getItem();
    if (String(stack.id) === "iceandfire:witherbone") {
      toReplace.push({ entity: itemEntity, count: stack.getCount() });
    }
  });
  toReplace.forEach((d) => {
    drops.remove(d.entity);
    event.addDrop(Item.of("bhc:wither_bone", d.count));
  });
});

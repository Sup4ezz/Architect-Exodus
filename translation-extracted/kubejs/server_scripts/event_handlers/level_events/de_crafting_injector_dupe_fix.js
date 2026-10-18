const $Injector$Blocks = [
  "draconicevolution:basic_crafting_injector",
  "draconicevolution:wyvern_crafting_injector",
  "draconicevolution:awakened_crafting_injector",
  "draconicevolution:chaotic_crafting_injector",
];

BlockEvents.rightClicked((event) => {
  let block = event.getBlock();
  if ($Injector$Blocks.indexOf(String(block.getId())) === -1) return;

  let player = event.getPlayer();
  if (player == null) return;

  let entity = block.getEntity();
  if (entity == null || entity.itemHandler == null) return;

  let handler = entity.itemHandler;
  let injectorStack = handler.getStackInSlot(0);

  if (player.isShiftKeyDown()) {
    if (!injectorStack.isEmpty()) {
      let extracted = handler.extractItem(0, 64, false);
      if (!extracted.isEmpty()) player.give(extracted);
    }
    return;
  }

  let handStack = player.getMainHandItem();
  if (!injectorStack.isEmpty() && !handStack.isEmpty()) {
    event.cancel();
  }
});

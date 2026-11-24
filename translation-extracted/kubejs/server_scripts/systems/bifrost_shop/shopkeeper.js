NativeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific", (event)=>{
	let targetEntity = event.getTarget()
	let player = event.getEntity()
	let list = Create$ShoppingListItem.getList(player.getMainHandItem())
	if (player == null || targetEntity == null) return;
	if (player.isSpectator()) return;
	if (player.getLevel().isClientSide()) return;
	if (targetEntity.getType() != "occultism:demonic_wife") return;
	if (list == null) return;
	if (event.getHand() == "OFF_HAND") return;
	let checkout = list.bakeEntries(player.getLevel(), null)
	let price = checkout.getSecond()
	let cart = checkout.getFirst()
	let iterTrueFalse = [true, false]
	let earlyIterReturn = false;

	iterTrueFalse.forEach((simulate) => {
		if (earlyIterReturn) return
		let tally = price.copy()
		let toTransfer = []
		for (let idx = 0; idx < player.getInventory().items.size(); idx++) {
			let item = player.getInventory().getItem(idx);
			if (item.isEmpty()) {
				continue;
			}
			let costCount = tally.getCountOf(item);
			if (costCount == 0) {
				continue
			}

			let toRemove = Math.min(item.getCount(), costCount);
			tally.add(item, -toRemove);

			if (simulate) {
				continue;
			}

			let newStackSize = item.getCount() - toRemove;
			player.getInventory().setItem(idx, newStackSize == 0 ? Item.getEmpty() : item.copyWithCount(newStackSize))
			toTransfer.push(item.copyWithCount(toRemove))
		}

		if (simulate && tally.getTotalCount() != 0) {
			Create$AllSoundEvents.DENY.playOnServer(player.getLevel(), player.blockPosition())
			player.sendSystemMessage(Text.translate("create.stock_keeper.too_broke").red())
			earlyIterReturn = true;
			return;
		}
	})
	if (earlyIterReturn) return;
	player.setItemInHand("MAIN_HAND", Item.getEmpty())

	let cartSizeTracker = 0;

	cart.getStacksByCount().forEach((entry) => {
		cartSizeTracker += Math.ceil(entry.count / entry.stack.getMaxStackSize())
	})

	let cartInv = new Forge$ItemStackHandler()
	cartInv.setSize(cartSizeTracker)
	let basket = cart.getStacksByCount()
	let cartIdx = 0;

	basket.forEach((bigitemstack) => {
		let itemstack = bigitemstack.stack
		let itemcount = bigitemstack.count
		let limit = itemstack.getMaxStackSize()

		while (itemcount > 0) {
			let newStack = itemstack.copyWithCount(itemcount > limit ? limit : itemcount)
			cartInv.insertItem(cartIdx, newStack, false)
			itemcount -= itemcount > limit ? limit : itemcount
			cartIdx++
		}
	})


	let packageitem = Create$PackageItem["containing(net.minecraftforge.items.ItemStackHandler)"](cartInv)
	InteractionResult.sidedSuccess

	player.getLevel().addFreshEntity(Create$PackageEntity.fromItemStack(player.getLevel(), player.position().add(0, 5, 0), packageitem));
	Create$AllSoundEvents.STOCK_TICKER_TRADE.playOnServer(player.getLevel(), player.blockPosition());
	event.setCancellationResult(InteractionResult.SUCCESS)
	event.setCanceled(true)

}, "HIGH")

BlockEvents.rightClicked(("create:brass_table_cloth"), (event)=>{
  let player = event.getPlayer()
  if (player == null) return;
  if (player.mayBuild()) return;
  let table_cloth = event.getBlock().getEntity()
  if (!table_cloth.isShop()) return;
  table_cloth.useShop(event.getPlayer())
})
ItemEvents.dropped("tconstruct:ender_slime_crystal", (event) => {
  if (!FTBTeamBases$DimensionUtils.isPrivateTeamDimension(event.getLevel().getDimension())) {
    return;
  }

  let item = event.getItemEntity();
  event.getServer().scheduleRepeatingInTicks(10, (schedule) => {
    if (!item.isAddedToWorld()) {
      schedule.clear()
    }

    if (item.onGround()) {
      schedule.clear()
    }

    if (item.getAge() > 1200) {
      schedule.clear()
    }

    if (item.getAge() < 0) {
      schedule.clear()
    }

    if (item.position().y() >= -5) return;

    let item_count = item.getItem().getCount()
    let item_position = item.blockPosition()
    let min_y = event.getLevel().getMinBuildHeight()

    item.discard()

    let result = event.getLevel().createEntity("minecraft:item")
    result.setItem(Item.of("malum:raw_soulstone", item_count))

    let pos_list = BlockPos
      .betweenClosedStream(
        item_position.atY(min_y).offset(-1, 0, -1),
        item_position.atY(min_y).offset( 1, 0,  1)
      )
      .map((pos) => event.getLevel().getHeightmapPos("motion_blocking_no_leaves", pos))
      .filter((pos) => pos.getY() > min_y)
      .toArray();
    
    let new_pos = pos_list.pop();

    let movement = new Vec3d(0, 0.40, 0).add(
      (JavaMath.random() - 0.5) * 0.05,
      (JavaMath.random()) * 0,
      (JavaMath.random() - 0.5) * 0.05
    )

    if (new_pos == null) {
      result.setPosition(
        item_position.getX() + 0.5,
        15 + 0.5,
        item_position.getZ() + 0.5
      )
    } else {
      result.setPosition(
        new_pos.getX() + 0.5,
        new_pos.getY() + 0.5 + 7,
        new_pos.getZ() + 0.5
      )
      movement = new Vec3d(0, -0.125, 0).add(
        (JavaMath.random() - 0.5) * 0.05,
        (JavaMath.random()) * 0,
        (JavaMath.random() - 0.5) * 0.05
      )
    }

    result.setDeltaMovement(movement)
    result.setNoGravity(true);
    result.setGlowing(true);
    result.spawn()
    schedule.clear()
  })
})
ItemEvents.dropped("tconstruct:ender_slime_crystal_block", (event) => {
  if (!FTBTeamBases$DimensionUtils.isPrivateTeamDimension(event.getLevel().getDimension())) {
    return;
  }

  let item = event.getItemEntity();
  event.getServer().scheduleRepeatingInTicks(10, (schedule) => {
    if (!item.isAddedToWorld()) {
      schedule.clear()
    }

    if (item.onGround()) {
      schedule.clear()
    }

    if (item.getAge() > 1200) {
      schedule.clear()
    }

    if (item.getAge() < 0) {
      schedule.clear()
    }

    if (item.position().y() >= -5) return;

    let item_count = item.getItem().getCount()
    let item_position = item.blockPosition()
    let min_y = event.getLevel().getMinBuildHeight()
	let result
    item.discard()
	let i = 0;
	
	//let result = event.getLevel().createEntity("minecraft:item")
    do{
	result = event.getLevel().createEntity("minecraft:item");
	result.setItem(Item.of("malum:raw_soulstone", 4));

    let pos_list = BlockPos
      .betweenClosedStream(
        item_position.atY(min_y).offset(-1, 0, -1),
        item_position.atY(min_y).offset( 1, 0,  1)
      )
      .map((pos) => event.getLevel().getHeightmapPos("motion_blocking_no_leaves", pos))
      .filter((pos) => pos.getY() > min_y)
      .toArray();
    
    let new_pos = pos_list.pop();

    let movement = new Vec3d(0, 0.40, 0).add(
      (JavaMath.random() - 0.5) * 0.05,
      (JavaMath.random()) * 0,
      (JavaMath.random() - 0.5) * 0.05
    )

    if (new_pos == null) {
      result.setPosition(
        item_position.getX() + 0.5,
        15 + 0.5,
        item_position.getZ() + 0.5
      )
    } else {
      result.setPosition(
        new_pos.getX() + 0.5,
        new_pos.getY() + 0.5 + 7,
        new_pos.getZ() + 0.5
      )
      movement = new Vec3d(0, -0.125, 0).add(
        (JavaMath.random() - 0.5) * 0.05,
        (JavaMath.random()) * 0,
        (JavaMath.random() - 0.5) * 0.05
      )
    }

    result.setDeltaMovement(movement)
    result.setNoGravity(true);
    result.setGlowing(true);
    result.spawn()
    schedule.clear()
		i++;
	}
	while(i < item_count);
  })
})
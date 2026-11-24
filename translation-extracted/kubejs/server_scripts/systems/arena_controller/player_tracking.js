function $Arena$BuildAABB(team, key) {
  let arena_data = $Arena$Utils.getArenaData(team);
  if (arena_data == null) return null;

  let arena_definition = $Arena$RealmArenas[key];
  if (arena_definition == null) return null;

  let team_arena = arena_data[key];
  if (team_arena == null) return null;
  if (team_arena.x == null || team_arena.y == null || team_arena.z == null) return null;

  let arena_size = arena_definition.size;
  let arena_offset = arena_definition.offset;

  let arena_start = new BlockPos(
    team_arena.x + arena_offset.x,
    team_arena.y + arena_offset.y,
    team_arena.z + arena_offset.z
  );
  let arena_end = new BlockPos(
    arena_start.x + arena_size.x,
    arena_start.y + arena_size.y,
    arena_start.z + arena_size.z
  );
  return new Minecraft$AABB(arena_start.getX(), arena_start.getY(), arena_start.getZ(), arena_end.getX() + 1, arena_end.getY() + 1, arena_end.getZ() + 1);
}

function $Arena$ResolvePlayerArena(player) {
  if (player.isCreative() || player.isSpectator()) return null;

  let level = player.getLevel();
  if (level == null || level.isClientSide()) return null;

  let team = FTBTeamsKJS.getTeamForPlayer(player);
  if (team == null) return null;

  let dimension_location = $Arena$Utils.resolveDimension(level.getDimension());
  let aabb_cache = $Arena$CachedAABBs.computeIfAbsent(team.getShortName(), function() { return Utils.newMap(); });
  let arena_aabb = aabb_cache.computeIfAbsent(dimension_location, function(key) { return $Arena$BuildAABB(team, key); });

  let is_in_arena = arena_aabb != null && arena_aabb.contains(player.position());

  let arena_active = false;
  if (is_in_arena) {
    let arena_data = $Arena$Utils.getArenaData(team);
    if (arena_data != null && arena_data[dimension_location] != null) {
      arena_active = arena_data[dimension_location]["state"] === "ACTIVE";
    }
  }

  return { is_in_arena: is_in_arena, arena_active: arena_active, dimension: dimension_location };
}

function $Arena$CheckPlayer(player) {
  if (player.isCreative() || player.isSpectator()) {
    $Arena$TrackedPlayers.remove(player.getStringUuid());
    return;
  }

  let result = $Arena$ResolvePlayerArena(player);
  if (result == null) return;

  let is_tracked = $Arena$TrackedPlayers.containsKey(player.getStringUuid());

  if (result.is_in_arena && result.arena_active) {
    if (!is_tracked) {
      $Arena$TrackedPlayers.put(player.getStringUuid(), result.dimension);
      player.setGameMode("ADVENTURE");
    }
  } else if (is_tracked) {
    $Arena$TrackedPlayers.remove(player.getStringUuid());
    player.setGameMode("SURVIVAL");
  }
}

function $Arena$EnsureGameMode(player) {
  if (player.isCreative() || player.isSpectator()) return;
  let result = $Arena$ResolvePlayerArena(player);
  if (result == null) return;

  if (result.is_in_arena && result.arena_active) {
    $Arena$TrackedPlayers.put(player.getStringUuid(), result.dimension);
    player.setGameMode("ADVENTURE");
  } else {
    $Arena$TrackedPlayers.remove(player.getStringUuid());
    player.setGameMode("SURVIVAL");
  }
}

PlayerEvents.tick(function(event) {
  let player = event.player;
  let server = event.server;
  if (player == null || player.isFake()) return;
  if (server.getTickCount() % 10 !== 0) return;
  $Arena$CheckPlayer(player);
});

PlayerEvents.loggedIn(function(event) {
  let player = event.getPlayer();
  if (player == null || player.isFake()) return;
  player.getServer().scheduleInTicks(1, function() {
    $Arena$EnsureGameMode(player);
  });
});

PlayerEvents.respawned(function(event) {
  let player = event.getPlayer();
  if (player == null || player.isFake()) return;
  $Arena$TrackedPlayers.remove(player.getStringUuid());
  $Arena$EnsureGameMode(player);
});

CommonAddedEvents.playerChangeDimension(function(event) {
  let player = event.getPlayer();
  if (player == null || player.isFake()) return;
  $Arena$TrackedPlayers.remove(player.getStringUuid());
  let team = FTBTeamsKJS.getTeamForPlayer(player);
  if (team != null) {
    let old_dim = $Arena$Utils.resolveDimension(event.getOldLevel().getDimension());
    let aabb_cache = $Arena$CachedAABBs.get(team.getShortName());
    if (aabb_cache != null) {
      aabb_cache.remove(old_dim);
    }
    $Arena$Utils.despawnAbandonedArenaBosses(player.getServer(), team, old_dim);
  }
  player.getServer().scheduleInTicks(1, function() {
    $Arena$EnsureGameMode(player);
  });
});

PlayerEvents.loggedOut(function(event) {
  let player = event.getPlayer();
  if (player == null) return;
  $Arena$TrackedPlayers.remove(player.getStringUuid());
});

ServerEvents.tick(function(event) {
  if (event.getServer().getTickCount() % 1200 !== 0) return;

  let server = event.getServer();
  let teams = FTBTeamsKJS.getManager().getTeams();

  for (const team of teams) {
    if (!team.isPartyTeam()) continue;
    if (FTBTeamBasesKJS.getBaseForTeam(server, team) == null) continue;

    let arena_data = $Arena$Utils.getArenaData(team);
    if (arena_data == null) continue;

    let dirty = false;

    for (const dimension in arena_data) {
      if ($Arena$RealmArenas[dimension] == null) continue;

      let dim_data = arena_data[dimension];
      if (dim_data == null) continue;

      if (dim_data["state"] == null) {
        dim_data["state"] = "IDLE";
        dirty = true;
      }
      if (dim_data["state"] == "ACTIVE" && dim_data["active_since"] == null) {
        dim_data["active_since"] = Utils.getSystemTime();
        dirty = true;
      }
      if (dim_data["last_visited"] == null) {
        dim_data["last_visited"] = Utils.getSystemTime();
        dirty = true;
      }

      if (dim_data["pasting_until"] != null
          && !$Arena$Utils.isPasting(dim_data)) {
        let target_dim = dimension;
        if (dimension == "ftb:hel") {
          let base = FTBTeamBasesKJS.getBaseForTeam(server, team);
          if (base != null) target_dim = base.dimension().location();
        }
        let arena_level = server.getLevel(target_dim);
        if (arena_level != null) {
          if (dim_data["x"] != null) {
            $Arena$Utils.releaseArenaChunks(arena_level,
                new BlockPos(dim_data["x"], dim_data["y"], dim_data["z"]));
          }
          $Arena$Utils.clearPasteState(dim_data);
          if (dim_data["state"] == "FINISHED") {
            dim_data["state"] = "IDLE";
            dim_data["boss_uuids"] = Utils.newList();
          }
          dirty = true;
        }
      }

      let state = dim_data["state"];
      let last_visited = dim_data["last_visited"];

      let has_members_in_dim = false;
      let member_array = team.getMembers().toArray();
      for (var i = 0; i < member_array.length; i++) {
        let uuid_str = member_array[i].toString();
        if (!$Arena$TrackedPlayers.containsKey(uuid_str)) continue;
        if ($Arena$TrackedPlayers.get(uuid_str) == dimension) {
          has_members_in_dim = true;
          break;
        }
      }

      if (state == "IDLE") continue;

      if (state == "ACTIVE") {
        if (has_members_in_dim) continue;

        let boss_uuids = dim_data["boss_uuids"];
        if (boss_uuids == null || boss_uuids.isEmpty()) {
          dim_data["state"] = "IDLE";
          delete dim_data["active_since"];
          dirty = true;
          continue;
        }

        let active_target_dim = dimension;
        if (dimension == "ftb:hel") {
          let base = FTBTeamBasesKJS.getBaseForTeam(server, team);
          if (base != null) active_target_dim = base.dimension().location();
        }
        let active_arena_level = server.getLevel(active_target_dim);
        if (active_arena_level != null && dim_data["x"] != null) {
          let arena_pos = new BlockPos(dim_data["x"], dim_data["y"], dim_data["z"]);
          if (active_arena_level.isLoaded(arena_pos)) {
            let any_alive = false;
            for (let bi = 0; bi < boss_uuids.size(); bi++) {
              try {
                let uuid_str = String(boss_uuids.get(bi)).replace(/"/g, "");
                let entity = active_arena_level.getEntity(UUID.fromString(uuid_str));
                if (entity != null && entity.isAlive()) {
                  any_alive = true;
                  break;
                }
              } catch (e) {}
            }
            if (!any_alive) {
              $Arena$Console.info("[" + $Arena$ConsoleName + "] No living bosses for "
                  + team.getShortName() + " in " + dimension
                  + " (chunks loaded, all tracked UUIDs absent); marking FINISHED");
              dim_data["state"] = "FINISHED";
              dim_data["last_visited"] = Utils.getSystemTime();
              dim_data["boss_uuids"] = Utils.newList();
              delete dim_data["active_since"];
              $Arena$Utils.releaseArenaChunks(active_arena_level, arena_pos);
              dirty = true;
              continue;
            }
          }
        }

        // Staleness safety valve — boss entity presumed lost
        let active_since = dim_data["active_since"];
        if (active_since != null
            && Utils.getSystemTime() >= active_since + $Arena$ActiveTimeout) {
          $Arena$Console.info("Force-recovering stuck ACTIVE state for "
              + team.getShortName() + " in " + dimension
              + " -- boss entity presumed lost; marking FINISHED for regen");
          dim_data["state"] = "FINISHED";
          dim_data["last_visited"] = Utils.getSystemTime();
          dim_data["boss_uuids"] = Utils.newList();
          delete dim_data["active_since"];
          dirty = true;

          let target_dim = dimension;
          if (dimension == "ftb:hel") {
            let base = FTBTeamBasesKJS.getBaseForTeam(server, team);
            if (base != null) target_dim = base.dimension().location();
          }
          let arena_level = server.getLevel(target_dim);
          if (arena_level != null && dim_data["x"] != null) {
            $Arena$Utils.releaseArenaChunks(arena_level,
                new BlockPos(dim_data["x"], dim_data["y"], dim_data["z"]));
          }
        }
        continue;
      }

      if (state == "FINISHED") {
        if (has_members_in_dim) {
          dim_data["last_visited"] = Utils.getSystemTime();
          dirty = true;
          continue;
        }

        if (Utils.getSystemTime() >= last_visited + $Arena$RegenThreshold) {
          if ($Arena$Utils.isPasting(dim_data)) continue;
          let target_dimension = dimension;
          if (dimension == "ftb:hel") {
            let base = FTBTeamBasesKJS.getBaseForTeam(server, team);
            if (base == null) continue;
            target_dimension = base.dimension().location();
          }
          server.runCommand("/ftb_arena regen " + team.getShortName() + " " + target_dimension);
          dirty = true;
        }
      }
    }

    if (dirty) team.markDirty();
  }

  $Arena$Console.flush(false);
});

ServerEvents.loaded(function (event) {
  let teams = FTBTeamsKJS.getManager().getTeams();
  for (const team of teams) {
    if (!team.isPartyTeam()) continue;
    let arena_data = $Arena$Utils.getArenaData(team);
    if (arena_data == null) continue;

    let dirty = false;
    for (const dimension in arena_data) {
      if ($Arena$RealmArenas[dimension] == null) continue;
      let dim_data = arena_data[dimension];
      if (dim_data == null) continue;
      if (dim_data["state"] == "FINISHED" && dim_data["pasting_until"] != null) {
        $Arena$Utils.clearPasteState(dim_data);
        dirty = true;
        $Arena$Console.info(
          "[" + $Arena$ConsoleName + "] Cleared interrupted regen paste for "
            + team.getShortName() + " in " + dimension + " -- will re-attempt"
        );
      }
    }
    if (dirty) team.markDirty();
  }
  $Arena$Console.flush(false);
});

ServerEvents.commandRegistry((event) => {
  let Commands = event.getCommands();
  let Arguments = event.getArguments();

  // #region Status Command — /ftb_arena status [team]
  let status_command = Commands.literal("status")
    .executes((ctx) => {
      let all_teams = FTBTeamsKJS.getManager().getTeams().filter((team) => team.isPartyTeam());
      let found = false;

      for (const team of all_teams) {
        let arena_data = $Arena$Utils.getArenaData(team);
        if (arena_data == null) continue;
        found = true;

        let realms = Object.keys($Arena$RealmArenas);
        let placed = realms.filter((d) => arena_data[d] != null && arena_data[d]["x"] != null).length;
        let active = realms.filter((d) => arena_data[d] != null && arena_data[d]["state"] == "ACTIVE");
        let finished = realms.filter((d) => arena_data[d] != null && arena_data[d]["state"] == "FINISHED");

        let parts = [team.getShortName() + ": " + placed + "/" + realms.length + " placed"];
        if (active.length > 0) parts.push("ACTIVE: " + active.join(", "));
        if (finished.length > 0) parts.push("FINISHED: " + finished.join(", "));

        ctx.getSource().sendSystemMessage(parts.join(" | "));
      }

      if (!found) ctx.getSource().sendSystemMessage("No teams with arena data.");
      return 1;
    })
    .then(
      Commands.argument("team", FTBTeams$TeamArgument.create()).executes((ctx) => {
        let team = FTBTeams$TeamArgument.get(ctx, "team");
        let arena_data = $Arena$Utils.getArenaData(team);

        ctx.getSource().sendSystemMessage("--- Arena Status: " + team.getShortName() + " ---");

        if (arena_data == null) {
          ctx.getSource().sendSystemMessage("  No arena data.");
          return 1;
        }

        for (const dimension of Object.keys($Arena$RealmArenas)) {
          let dim_data = arena_data[dimension];
          if (dim_data == null || dim_data["x"] == null) {
            ctx.getSource().sendSystemMessage("  " + dimension + ": Not placed");
            continue;
          }

          let state = dim_data["state"] || "IDLE";
          let pos = "(" + dim_data.x + ", " + dim_data.y + ", " + dim_data.z + ")";
          let ftbentries = team.getExtraData()["ftbentries"];
          let dim_entry = ftbentries != null ? ftbentries[dimension] : null;
          let entry = dim_entry != null && dim_entry["x"] != null
            ? " | Entry: (" + dim_entry.x + ", " + dim_entry.y + ", " + dim_entry.z + ")"
            : "";
          let extra = "";
          if (state == "ACTIVE" && dim_data["active_since"] != null) {
            let mins = Math.floor((Utils.getSystemTime() - dim_data.active_since) / 60000);
            extra = " (" + mins + "m active)";
          }
          if (state == "FINISHED" && dim_data["last_visited"] != null) {
            let mins = Math.floor((Utils.getSystemTime() - dim_data.last_visited) / 60000);
            extra = " (finished " + mins + "m ago)";
          }

          ctx.getSource().sendSystemMessage("  " + dimension + ": " + state + extra + " @ " + pos + entry);
        }

        return 1;
      })
    );
  // #endregion

  // #region Place Command — /ftb_arena place <team> <dimension>
  let place_command = Commands.literal("place").then(
    Commands.argument("team", FTBTeams$TeamArgument.create()).then(
      Commands.argument("dimension", Arguments.DIMENSION.create(event)).executes((ctx) => {
        let team = FTBTeams$TeamArgument.get(ctx, "team");
        if (team == null) return 0;
        let team_id = team.getTeamId();

        let target_dimension = Arguments.DIMENSION.getResult(ctx, "dimension");
        let target_dimension_location = $Arena$Utils.resolveDimension(target_dimension.getDimension());

        let arena_data = $Arena$Utils.getOrCreateArenaData(team);
        let arena_definition = $Arena$RealmArenas[target_dimension_location];

        if (arena_definition == null) {
          ctx.getSource().sendSystemMessage("No arena schematic configured for " + target_dimension_location);
          $Arena$Console.flush(false);
          return 1;
        }

        let arena_position;
        let is_new = false;

        if (arena_data[target_dimension_location] != null
            && arena_data[target_dimension_location]["x"] != null) {
          let existing = arena_data[target_dimension_location];
          arena_position = new BlockPos(existing.x, existing.y, existing.z);
        } else {
          is_new = true;
          let config = $Arena$Utils.getRealmConfig(target_dimension_location);
          let random_source = Utils.newRandom(team_id.hashCode() + 1);
          let angle = random_source.nextDouble() * JavaMath.PI * 2.0;
          let distance = config.min + random_source.nextInt(config.max - config.min);

          arena_position = BlockPos.containing(
            Math.floor(Math.cos(angle) * distance),
            config.atY,
            Math.floor(Math.sin(angle) * distance)
          );

          if (target_dimension_location == "ftb:hel") {
            arena_position = new BlockPos(-656, 200, 304);
          }

          if (arena_data[target_dimension_location] == null) {
            arena_data[target_dimension_location] = {};
          }
          arena_data[target_dimension_location]["x"] = arena_position.getX();
          arena_data[target_dimension_location]["y"] = arena_position.getY();
          arena_data[target_dimension_location]["z"] = arena_position.getZ();
          team.markDirty();
        }

        $Arena$CachedAABBs.remove(team.getShortName());

        if (target_dimension_location == "ftb:hel") return 1;

        let altar_offset = arena_definition.altar_offset;
        let altar_pos = arena_position.offset(altar_offset.x, altar_offset.y, altar_offset.z);
        let source = ctx.getSource();

        $Arena$AsyncChunkLoader.whenReady(target_dimension, altar_pos.getX() >> 4, altar_pos.getZ() >> 4, 2, () => {
          let block_at_altar, altar_block_id, dim_state, last_visited, pasted, action, msg;

          if (!is_new) {
            block_at_altar = target_dimension.getBlockState(altar_pos);
            altar_block_id = String(Minecraft$BuiltInRegistries.BLOCK.getKey(block_at_altar.getBlock()));

            if (altar_block_id === $Arena$AltarBlock) {
              dim_state = arena_data[target_dimension_location]["state"];
              if (dim_state != "FINISHED") { $Arena$Console.flush(false); return; }
              last_visited = arena_data[target_dimension_location]["last_visited"];
              if (last_visited != null
                  && Utils.getSystemTime() - last_visited < $Arena$RegenGracePeriod) { $Arena$Console.flush(false); return; }
              if ($Arena$Utils.isPasting(arena_data[target_dimension_location])) { $Arena$Console.flush(false); return; }
              arena_data[target_dimension_location]["state"] = "IDLE";
              arena_data[target_dimension_location]["boss_uuids"] = Utils.newList();
              delete arena_data[target_dimension_location]["active_since"];
              delete arena_data[target_dimension_location]["last_visited"];
              team.markDirty();
              $Arena$Console.debug("[" + $Arena$ConsoleName + "] " + target_dimension_location
                  + " arena FINISHED on entry, regenerating for new attempt");
            } else {
              if ($Arena$Utils.isPasting(arena_data[target_dimension_location])) { $Arena$Console.flush(false); return; }
              $Arena$Console.debug("[" + $Arena$ConsoleName + "] Arena missing at " + arena_position
                  + " in " + target_dimension_location + " (altar slot has " + altar_block_id
                  + "), re-pasting schematic");
            }
          }

          pasted = $Arena$Utils.runPaste(team, arena_data[target_dimension_location],
              target_dimension.getDimension(), arena_position, arena_definition, target_dimension);
          if (!pasted) { $Arena$Console.flush(false); return; }

          action = is_new ? "Placing new" : "Re-pasting";
          msg = action + " arena for " + target_dimension_location
              + " at (" + arena_position.getX() + ", " + arena_position.getY() + ", " + arena_position.getZ() + ")";
          $Arena$Console.debug("[" + $Arena$ConsoleName + "] " + msg);
          source.sendSystemMessage(msg);
          $Arena$Console.flush(false);
        });

        return 1;
      })
    )
  );
  // #endregion

  // #region Place All Command — /ftb_arena place_all <team>
  let place_all_command = Commands.literal("place_all").then(
    Commands.argument("team", FTBTeams$TeamArgument.create()).executes((ctx) => {
      let team = FTBTeams$TeamArgument.get(ctx, "team");
      let team_id = team.getTeamId();
      let arena_data = $Arena$Utils.getOrCreateArenaData(team);

      Object.keys($Arena$RealmArenas).forEach((target_dimension_location) => {
        let target_dimension = ctx.getSource().getServer().getLevel(target_dimension_location);
        let arena_definition = $Arena$RealmArenas[target_dimension_location];

        if (arena_definition == null) {
          ctx.getSource().sendSystemMessage(target_dimension_location + ": No schematic configured");
          return;
        }

        if (arena_data[target_dimension_location] != null
            && arena_data[target_dimension_location]["x"] != null) {
          ctx.getSource().sendSystemMessage(target_dimension_location + ": Already placed, skipping");
          return;
        }

        let config = $Arena$Utils.getRealmConfig(target_dimension_location);
        let random_source = Utils.newRandom(team_id.hashCode() + 1);
        let angle = random_source.nextDouble() * JavaMath.PI * 2.0;
        let distance = config.min + random_source.nextInt(config.max - config.min);

        let arena_position = BlockPos.containing(
          Math.floor(Math.cos(angle) * distance),
          config.atY,
          Math.floor(Math.sin(angle) * distance)
        );

        arena_data[target_dimension_location] = {
          x: arena_position.getX(),
          y: arena_position.getY(),
          z: arena_position.getZ()
        };
        team.markDirty();

        if (target_dimension_location == "ftb:hel") {
          ctx.getSource().sendSystemMessage(target_dimension_location + ": Position stored (no paste for Hel)");
          return;
        }

        let target_level = ctx.getSource().getServer().getLevel(target_dimension_location);
        let pasted = $Arena$Utils.runPaste(team, arena_data[target_dimension_location],
            target_dimension_location, arena_position, arena_definition, target_level);
        if (pasted) {
          ctx.getSource().sendSystemMessage(target_dimension_location + ": Pasting at ("
              + arena_position.getX() + ", " + arena_position.getY() + ", " + arena_position.getZ() + ")");
        } else {
          ctx.getSource().sendSystemMessage(target_dimension_location + ": Paste already in progress, skipping");
        }
      });

      $Arena$CachedAABBs.remove(team.getShortName());
      $Arena$Console.flush(false);
      return 1;
    })
  );
  // #endregion

  // #region Regen Command — /ftb_arena regen <team> <dimension>
  let regen_command = Commands.literal("regen").then(
    Commands.argument("team", FTBTeams$TeamArgument.create()).then(
      Commands.argument("dimension", Arguments.DIMENSION.create(event)).executes((ctx) => {
        let team = FTBTeams$TeamArgument.get(ctx, "team");

        let target_dimension = Arguments.DIMENSION.getResult(ctx, "dimension");
        let target_dimension_location = $Arena$Utils.resolveDimension(target_dimension.getDimension());

        let arena_data = $Arena$Utils.getOrCreateArenaData(team);
        let arena_definition = $Arena$RealmArenas[target_dimension_location];

        if (arena_definition == null) {
          ctx.getSource().sendSystemMessage("No arena schematic configured for " + target_dimension_location);
          $Arena$Console.flush(false);
          return 1;
        }

        if (arena_data[target_dimension_location] == null
            || arena_data[target_dimension_location]["x"] == null) {
          ctx.getSource().sendSystemMessage("No arena placed for " + target_dimension_location + " — use 'place' first");
          $Arena$Console.flush(false);
          return 1;
        }

        let { x, y, z } = arena_data[target_dimension_location];
        let arena_position = new BlockPos(x, y, z);

        let pasted = $Arena$Utils.runPaste(team, arena_data[target_dimension_location],
            target_dimension.getDimension(), arena_position, arena_definition, target_dimension);
        if (!pasted) {
          ctx.getSource().sendSystemMessage("Paste already in progress for " + target_dimension_location);
          $Arena$Console.flush(false);
          return 1;
        }

        let msg = "Regenerating " + target_dimension_location + " arena at (" + x + ", " + y + ", " + z + ")";
        $Arena$Console.debug("[" + $Arena$ConsoleName + "] " + msg);
        ctx.getSource().sendSystemMessage(msg);

        $Arena$CachedAABBs.remove(team.getShortName());
        $Arena$Console.flush(false);
        return 1;
      })
    )
  );
  // #endregion

  // #region Reset Command — /ftb_arena reset <team>
  let reset_command = Commands.literal("reset").then(
    Commands.argument("team", FTBTeams$TeamArgument.create()).executes((ctx) => {
      let team = FTBTeams$TeamArgument.get(ctx, "team");
      team.getExtraData()["ftbarenas"] = {};
      team.markDirty();
      $Arena$CachedAABBs.remove(team.getShortName());
      ctx.getSource().sendSystemMessage("Cleared all arena data for " + team.getShortName());
      return 1;
    })
  );
  // #endregion

  // #region Teleport Command — /ftb_arena tp <player> [dimension]
  function $Arena$RequestPlacement(source, player, team, resolved_dim) {
    player.tell(Text.translate("ftb.arena.tp.preparing").gold());
    source.getServer().runCommandSilent("ftb_arena place " + team.getShortName() + " " + resolved_dim);
    source.sendSystemMessage("No arena in " + resolved_dim + " for " + team.getShortName() + ", placement requested");
  }

  function $Arena$TellPasteWait(player, arena) {
    let remaining = arena["pasting_until"] - Utils.getSystemTime();
    let waitSec = remaining > 0 ? Math.ceil(remaining / 1000) : 60;
    player.tell(Text.translate("ftb.arena.regen.in_progress", String(waitSec)).gold());
  }

  let tp_command = Commands.literal("tp").then(
    Commands.argument("player", Arguments.PLAYER.create(event))
      .executes((ctx) => {
        let player = Arguments.PLAYER.getResult(ctx, "player");
        let target_dimension = player.getLevel();
        let resolved_dim = $Arena$Utils.resolveDimension(target_dimension.getDimension());
        let team = FTBTeamsKJS.getTeamForPlayer(player);
        if (team == null) {
          player.tell(Text.translate("ftb.arena.tp.no_team").red());
          ctx.getSource().sendSystemMessage("Player is not on a team.");
          return 0;
        }

        let arena_data = $Arena$Utils.getArenaData(team);
        let arena = arena_data != null ? arena_data[resolved_dim] : null;
        if (arena == null || arena["x"] == null) {
          $Arena$RequestPlacement(ctx.getSource(), player, team, resolved_dim);
          return 0;
        }

        if ($Arena$Utils.isPasting(arena)) {
          $Arena$TellPasteWait(player, arena);
          ctx.getSource().sendSystemMessage("Arena in " + resolved_dim + " is still pasting");
          return 0;
        }

        let arena_position = new BlockPos(arena.x, arena.y, arena.z).getCenter();
        player.teleportTo(target_dimension.getDimension(), arena_position.x(), arena_position.y(), arena_position.z());
        ctx.getSource().sendSystemMessage("Teleported " + player.getName().getString() + " to arena in " + resolved_dim);
        return 1;
      })
      .then(
        Commands.argument("dimension", Arguments.DIMENSION.create(event)).executes((ctx) => {
          let player = Arguments.PLAYER.getResult(ctx, "player");
          let target_dimension = Arguments.DIMENSION.getResult(ctx, "dimension");
          let target_dimension_location = String(target_dimension.getDimension());
          let team = FTBTeamsKJS.getTeamForPlayer(player);
          if (team == null) {
            player.tell(Text.translate("ftb.arena.tp.no_team").red());
            ctx.getSource().sendSystemMessage("Player is not on a team.");
            return 0;
          }

          if (target_dimension_location == "ftb:hel") {
            target_dimension = FTBTeamBasesKJS.getTeamLevelForPlayer(player);
            target_dimension_location = String(target_dimension.getDimension());
          }

          let arena_data = $Arena$Utils.getArenaData(team);
          let resolved_dim = $Arena$Utils.resolveDimension(target_dimension_location);
          let arena = arena_data != null ? arena_data[resolved_dim] : null;
          if (arena == null || arena["x"] == null) {
            $Arena$RequestPlacement(ctx.getSource(), player, team, resolved_dim);
            return 0;
          }

          if ($Arena$Utils.isPasting(arena)) {
            $Arena$TellPasteWait(player, arena);
            ctx.getSource().sendSystemMessage("Arena in " + resolved_dim + " is still pasting");
            return 0;
          }

          let arena_position = new BlockPos(arena.x, arena.y, arena.z).getCenter();
          player.teleportTo(
            target_dimension_location,
            arena_position.x() + 0.5 + Math.random(),
            arena_position.y() + 0.5 + Math.random(),
            arena_position.z() + 0.5 + Math.random(),
            player.getYaw(),
            player.getPitch()
          );
          ctx.getSource().sendSystemMessage("Teleported " + player.getName().getString() + " to arena in " + resolved_dim);
          return 1;
        })
      )
  );
  // #endregion

  // #region Reset All Hel (admin utility)
  let reset_all_hel_command = Commands.literal("reset_all_hel").executes((ctx) => {
    let all_teams = FTBTeamsKJS.getManager().getTeams().filter((team) => team.isPartyTeam());
    let count = 0;

    for (const team of all_teams) {
      let arena_data = $Arena$Utils.getOrCreateArenaData(team);
      if (arena_data["ftb:hel"] == null) {
        arena_data["ftb:hel"] = {};
      }

      let arena_position = new BlockPos(-656, 200, 304);
      arena_data["ftb:hel"]["x"] = arena_position.getX();
      arena_data["ftb:hel"]["y"] = arena_position.getY();
      arena_data["ftb:hel"]["z"] = arena_position.getZ();
      team.markDirty();
      count++;
    }

    ctx.getSource().sendSystemMessage("Reset Hel arena position for " + count + " teams");
    $Arena$Console.flush(false);
    return 1;
  });
  // #endregion

  // #region Root Command
  let root = Commands.literal("ftb_arena");
  root = root.requires((ctx) => ctx.hasPermission(Commands.LEVEL_GAMEMASTERS));
  root = root
    .then(status_command)
    .then(place_command)
    .then(place_all_command)
    .then(regen_command)
    .then(reset_command)
    .then(tp_command)
    .then(reset_all_hel_command);
  // #endregion

  event.register(root);
});

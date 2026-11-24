ServerEvents.recipes((event) => {
  event
    .shaped("summoningrituals:altar", ["CBC", "GSG", "RRR"], {
      C: "occultism:candle_white",
      B: "minecraft:book",
      G: "malum:cthonic_gold_fragment",
      S: "minecraft:skeleton_skull",
      R: "malum:runewood_planks",
    })
    .id("ftb:summoningrituals/altar");
});

SummoningRituals.start((event) => {
  const { level, recipe, player, pos } = event;
  let recipeId = recipe.id.toString();

  if ((recipeId.contains("boss/") || recipeId.contains("elite/")) && (player == null || player.isFake())) {
    console.warn("[FTB Summoning] Cancelling '" + recipeId + "' - no real player triggered it");
    event.cancel();
    return;
  }

  if (recipeId.contains("elite/yeti") && level.getDimension() != "ftb:jotunheim") {
    player.tell(Text.translate("ftb.summoning.arena.error.altar_dimension.jotunheim"));
    player.sendSystemMessage(Text.translate("ftb.summoning.arena.error.altar_dimension.jotunheim"), true);
    event.cancel();
    return;
  };

  if (recipeId.contains("elite/frostmaw") && level.getDimension() != "ftb:niflheim") {
    player.tell(Text.translate("ftb.summoning.arena.error.altar_dimension.niflheim"));
    player.sendSystemMessage(Text.translate("ftb.summoning.arena.error.altar_dimension.niflheim"), true);
    event.cancel();
    return;
  };

  if (recipeId.contains("elite/helvar") && level.getDimension() != "minecraft:overworld") {
    player.tell(Text.translate("ftb.summoning.arena.error.altar_dimension.midgard"));
    player.sendSystemMessage(Text.translate("ftb.summoning.arena.error.altar_dimension.midgard"), true);
    event.cancel();
    return;
  };

  if (recipeId.contains("boss/twins")) {
    if ($Arena$isArena(level, pos)) {
      player.tell(Text.translate("ftb.summoning.arena.error.altar_dimension.midgard"));
      player.sendSystemMessage(Text.translate("ftb.summoning.arena.error.altar_dimension.midgard"), true);
    } else {
      runCommandSilent(`/ftbragnarok summontwins ${pos.x} ${pos.y + 2} ${pos.z}`);
    }
    event.cancel();
    return;
  };

  if (recipeId.contains("boss/nidhoggr")) {
    console.info("[FTB Summoning] Nidhoggr ritual started: pos=" + pos
      + " dim=" + level.getDimension()
      + " player=" + (player == null ? "null" : player.username));

    if (level.getDimension() != "ftb:asgard") {
      console.warn("[FTB Summoning] Nidhoggr ritual rejected: wrong dimension '" + level.getDimension() + "'");
      player.tell(Text.translate("ftb.summoning.arena.error.altar_dimension.asgard"));
      player.sendSystemMessage(Text.translate("ftb.summoning.arena.error.altar_dimension.asgard"), true);
    } else {
      let missing = $Ritual$CheckPedestals(level, pos, $Ritual$NidhoggrItems);
      console.info("[FTB Summoning] Nidhoggr pedestal check: " + missing.length
        + " missing of " + $Ritual$NidhoggrItems.length + " -> " + missing.join(", "));

      if (missing.length > 0) {
        console.warn("[FTB Summoning] Nidhoggr ritual rejected: incomplete pedestals");
        player.tell(Text.translate("ftb.summoning.nidhoggr.missing_pedestals"));
        for (let i = 0; i < missing.length; i++) {
          player.tell(Text.of(" - ").append(Item.of(missing[i]).getDisplayName()));
        }
        event.cancel();
        return;
      }

      let team = FTBTeamsKJS.getTeamForPlayer(player);

      if (team == null) {
        console.error("[FTB Summoning] Nidhoggr ritual rejected: null team for '" + player.username + "'");
        player.tell(Text.translate("ftb.summoning.arena.error.invalid_team"));
        player.sendSystemMessage(Text.translate("ftb.summoning.arena.error.invalid_team"), true);
        event.cancel();
        return;
      }

      let nearbyPlayers = level.players.filter(function(p) {
        let dx = p.x - pos.x;
        let dy = p.y - pos.y;
        let dz = p.z - pos.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz) <= 64;
      });

      console.info("[FTB Summoning] Nidhoggr swallow: team=" + team.getShortName()
        + " nearby=" + nearbyPlayers.length);

      $AsgardRestoration$NidhoggSwallow(
        nearbyPlayers.length > 0 ? nearbyPlayers : [player],
        team,
        level,
        pos
      );

      event.cancel();
    }
    return;
  };
});
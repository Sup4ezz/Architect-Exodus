const $Forsaken$ClearRadius = 4;
const $Forsaken$ClearHeight = 8;
const $Forsaken$MaxObstruction = 32;
const $Forsaken$NotifyRange = 24;

function $Forsaken$hasOpenSpace(level, origin) {
  let solid = 0;
  let ox = origin.getX();
  let oy = origin.getY();
  let oz = origin.getZ();
  for (let dx = -$Forsaken$ClearRadius; dx <= $Forsaken$ClearRadius; dx++) {
    for (let dz = -$Forsaken$ClearRadius; dz <= $Forsaken$ClearRadius; dz++) {
      for (let dy = 1; dy <= $Forsaken$ClearHeight; dy++) {
        let pos = new Minecraft$BlockPos(ox + dx, oy + dy, oz + dz);
        if (!level.getBlockState(pos).isAir()) {
          solid++;
          if (solid > $Forsaken$MaxObstruction) return false;
        }
      }
    }
  }
  return true;
}

SummoningRituals.start((event) => {
  let recipe = event.recipe;
  if (recipe == null || recipe.id.toString() !== "ftb:summoning/elite/forsaken") return;

  let level = event.level;
  if (level == null || level.isClientSide()) return;

  if ($Forsaken$hasOpenSpace(level, event.pos)) return;

  event.cancel();

  let player = event.player;
  if (player != null) {
    player.tell(Text.translate("ftb.forsaken.needs_open_space").red());
  }
});

EntityEvents.spawned("alexscaves:forsaken", (event) => {
  let entity = event.getEntity();
  let level = entity.level;
  if ($Forsaken$hasOpenSpace(level, entity.blockPosition())) return;

  event.cancel();

  let ex = entity.getX();
  let ey = entity.getY();
  let ez = entity.getZ();
  let rangeSq = $Forsaken$NotifyRange * $Forsaken$NotifyRange;
  level.getPlayers().forEach((player) => {
    let dx = player.getX() - ex;
    let dy = player.getY() - ey;
    let dz = player.getZ() - ez;
    if (dx * dx + dy * dy + dz * dz <= rangeSq) {
      player.tell(Text.translate("ftb.forsaken.needs_open_space").red());
    }
  });
});

// Right-click a lodestone compass to see distance and direction to its target

const COMPASS_COOLDOWN_TICKS = 10; // half second between checks

function getCardinalDirection(dx, dz) {
  // MC: +X = East, +Z = South
  let angle = Math.atan2(dz, dx) * (180 / Math.PI);
  if (angle < 0) angle += 360;

  if (angle < 22.5 || angle >= 337.5) return 'E';
  if (angle < 67.5) return 'SE';
  if (angle < 112.5) return 'S';
  if (angle < 157.5) return 'SW';
  if (angle < 202.5) return 'W';
  if (angle < 247.5) return 'NW';
  if (angle < 292.5) return 'N';
  return 'NE';
}

// Read NBT number as double regardless of stored type (int or double)
function getNbtNumber(compound, key) {
  if (!compound.contains(key)) return 0;
  // getDouble handles both TAG_Int and TAG_Double
  return compound.getDouble(key);
}

ItemEvents.firstRightClicked('minecraft:compass', (event) => {
  let player = event.player;
  if (player.isFake()) return;
  if (event.hand !== 'main_hand') return;

  let item = event.item;
  let nbt = item.nbt;
  if (!nbt || !nbt.contains('LodestonePos')) return;

  // Cooldown check
  let pData = player.persistentData;
  let now = Utils.server.tickCount;
  let lastCheck = pData.getInt('compass_last_check');
  if (now - lastCheck < COMPASS_COOLDOWN_TICKS) return;
  pData.putInt('compass_last_check', now);

  let lodestonePos = nbt.getCompound('LodestonePos');
  let lodestoneDim = nbt.getString('LodestoneDimension');
  let targetX = getNbtNumber(lodestonePos, 'X');
  let targetY = getNbtNumber(lodestonePos, 'Y');
  let targetZ = getNbtNumber(lodestonePos, 'Z');

  // Dimension check
  let playerDim = player.level.dimension.toString();
  if (playerDim !== lodestoneDim) {
    player.displayClientMessage(
      Text.translate('ftb.compass.another_realm').gold(),
      true
    );
    return;
  }

  let dx = targetX - player.x;
  let dz = targetZ - player.z;
  let horizDist = Math.floor(Math.sqrt(dx * dx + dz * dz));
  let direction = getCardinalDirection(dx, dz);

  // Use compass custom name if present, otherwise just "Lodestone"
  let label = item.hasCustomHoverName()
    ? item.getHoverName().getString()
    : Text.translate('ftb.compass.default_label').getString();

  player.displayClientMessage(
    Text.translate('ftb.compass.label', label).gold()
      .append(Text.translate('ftb.compass.distance', String(horizDist), direction).white()),
    true
  );
});

let scrollGuardTick = 0;
let scrollGuardSnapshot = [];

EntityEvents.hurt("minecraft:player", (event) => {
  if (event.entity.persistentData.contains("activeScrollId")) {
    event.cancel();
  }
});

EntityEvents.spawned((event) => {
  if (scrollGuardSnapshot.length === 0) return;

  let entity = event.getEntity();
  if (!entity.isMonster()) return;

  let dim = entity.level.dimension.toString();
  let ex = entity.getX();
  let ey = entity.getY();
  let ez = entity.getZ();

  for (let i = 0; i < scrollGuardSnapshot.length; i++) {
    let watcher = scrollGuardSnapshot[i];
    if (watcher.dim !== dim) continue;
    let dx = watcher.x - ex;
    let dy = watcher.y - ey;
    let dz = watcher.z - ez;
    if (dx * dx + dy * dy + dz * dz <= 4096) {
      event.cancel();
      return;
    }
  }
});

ServerEvents.tick((event) => {
  scrollGuardTick++;
  if (scrollGuardTick < 10) return;
  scrollGuardTick = 0;

  let snapshot = [];
  let players = event.getServer().getPlayerList().getPlayers();

  players.forEach((player) => {
    if (!player.persistentData.contains("activeScrollId")) return;

    let level = player.level;
    let px = player.getX();
    let py = player.getY();
    let pz = player.getZ();
    snapshot.push({ dim: level.dimension.toString(), x: px, y: py, z: pz });

    let radius = 48;
    let bb = new Minecraft$AABB(
      px - radius, py - 32, pz - radius,
      px + radius, py + 32, pz + radius
    );
    let puuid = player.getUuid().toString();
    let monsters = level.getEntitiesOfClass(Minecraft$Monster, bb, (e) => e.isAlive());

    monsters.forEach((monster) => {
      let target = monster.getTarget();
      if (target != null && target.getUuid().toString() === puuid) {
        monster.setTarget(null);
        monster.setLastHurtByMob(null);
      }
    });
  });

  scrollGuardSnapshot = snapshot;
});

// Retrogen script for placing geore clusters in already-generated ftb:hel chunks
// Usage: /retrogen_geores - starts the process
// Usage: /retrogen_geores stop - cancels a running retrogen
// DISABLED - commented out until needed

/*
let retrogenQueue = [];
let retrogenActive = false;
let retrogenPlaced = 0;
let retrogenFailed = 0;
let retrogenTotal = 0;

const ORES_HEL = [
  'ftb:hel/geore_clusters/coal',
  'ftb:hel/geore_clusters/copper',
  'ftb:hel/geore_clusters/iron',
  'ftb:hel/geore_clusters/quartz',
  'ftb:hel/geore_clusters/redstone'
];

ServerEvents.commandRegistry((event) => {
  const Commands = event.commands;

  let root = Commands.literal('retrogen_geores')
    .requires((s) => s.hasPermission(2));

  // Main command - start retrogen
  root = root.executes((ctx) => {
    if (retrogenActive) {
      ctx.getSource().getServer().runCommandSilent(
        'say [Retrogen] Already in progress! Use /retrogen_geores stop to cancel.'
      );
      return 0;
    }

    const radius = 5000;
    const spacing = 512; // 32 chunks, matching structure_set
    retrogenQueue = [];

    let minGrid = Math.floor(-radius / spacing);
    let maxGrid = Math.floor(radius / spacing);

    for (let gx = minGrid; gx <= maxGrid; gx++) {
      for (let gz = minGrid; gz <= maxGrid; gz++) {
        let baseX = gx * spacing;
        let baseZ = gz * spacing;

        // Skip positions outside circular radius
        if (baseX * baseX + baseZ * baseZ > radius * radius) continue;

        // Random offset within the grid cell (0 to spacing/2)
        let offsetX = Math.floor(Math.random() * (spacing / 2));
        let offsetZ = Math.floor(Math.random() * (spacing / 2));
        let ore = ORES_HEL[Math.floor(Math.random() * ORES_HEL.length)];

        retrogenQueue.push({
          x: baseX + offsetX,
          z: baseZ + offsetZ,
          ore: ore
        });
      }
    }

    retrogenTotal = retrogenQueue.length;
    retrogenPlaced = 0;
    retrogenFailed = 0;
    retrogenActive = true;

    ctx.getSource().getServer().runCommandSilent(
      `say [Retrogen] Starting placement of ${retrogenTotal} geore clusters in ftb:hel (5k radius)...`
    );
    return 1;
  });

  // Stop subcommand
  root = root.then(
    Commands.literal('stop').executes((ctx) => {
      if (!retrogenActive) {
        ctx.getSource().getServer().runCommandSilent('say [Retrogen] No retrogen in progress.');
        return 0;
      }
      retrogenActive = false;
      retrogenQueue = [];
      ctx.getSource().getServer().runCommandSilent(
        `say [Retrogen] Cancelled. Placed ${retrogenPlaced} clusters before stopping.`
      );
      return 1;
    })
  );

  event.register(root);
});

ServerEvents.tick((event) => {
  if (!retrogenActive) return;

  if (retrogenQueue.length === 0) {
    retrogenActive = false;
    event.server.runCommandSilent(
      `say [Retrogen] Complete! Placed ${retrogenPlaced}/${retrogenTotal} geore clusters. (${retrogenFailed} positions skipped)`
    );
    return;
  }

  // Process 3 per tick to keep server responsive
  let batchSize = Math.min(3, retrogenQueue.length);
  for (let i = 0; i < batchSize; i++) {
    let entry = retrogenQueue.shift();

    // /place structure will project to the surface heightmap automatically
    let result = event.server.runCommandSilent(
      `execute in ftb:hel run place structure ${entry.ore} ${entry.x} 64 ${entry.z}`
    );

    if (result > 0) {
      retrogenPlaced++;
    } else {
      retrogenFailed++;
    }
  }

  // Progress update every 25 placements
  let total = retrogenPlaced + retrogenFailed;
  if (total > 0 && total % 25 === 0) {
    let pct = Math.floor((total / retrogenTotal) * 100);
    event.server.runCommandSilent(
      `say [Retrogen] Progress: ${total}/${retrogenTotal} (${pct}%) - ${retrogenPlaced} placed, ${retrogenFailed} skipped`
    );
  }
});
*/

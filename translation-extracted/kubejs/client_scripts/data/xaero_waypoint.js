// Receives waypoint-add packets from the server and silently inserts them into
// the player's current Xaero minimap waypoint set via reflection.
//
// Paired with server_scripts/commands/xaero_waypoint.js.
//
// The waypoint is added to the player's CURRENTLY ACTIVE waypoint world (i.e.,
// their current dimension). If Xaero is not installed or no session is active,
// the packet is silently ignored.

const Xaero$BuiltInHudModules = Java.loadClass("xaero.hud.minimap.BuiltInHudModules");
const Xaero$Waypoint = Java.loadClass("xaero.common.minimap.waypoints.Waypoint");
const Xaero$Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

NetworkEvents.dataReceived("ftb:xaero_add_waypoint", (event) => {
  const data = event.getData();
  Xaero$Minecraft.getInstance().execute(() => {
  try {
    const name = String(data.get("name"));
    const initials = String(data.get("initials"));
    const x = data.get("x") | 0;
    const y = data.get("y") | 0;
    const z = data.get("z") | 0;
    const color = data.get("color") | 0;

    const minimapModule = Xaero$BuiltInHudModules.MINIMAP;
    if (minimapModule === null) {
      console.warn("[xaero_waypoint] BuiltInHudModules.MINIMAP not available");
      return;
    }

    const session = minimapModule.getCurrentSession();
    if (session === null) {
      console.warn("[xaero_waypoint] No active minimap session; skipping waypoint add");
      return;
    }

    const world = session.getWorldManager().getCurrentWorld();
    if (world === null) {
      console.warn("[xaero_waypoint] No current minimap world; skipping waypoint add");
      return;
    }

    const waypointSet = world.getCurrentWaypointSet();
    if (waypointSet === null) {
      console.warn("[xaero_waypoint] No current waypoint set; skipping waypoint add");
      return;
    }

    // Skip if a waypoint with the same name already exists at the same coords
    const existing = waypointSet.getList();
    for (let i = 0; i < existing.size(); i++) {
      const wp = existing.get(i);
      if (wp.getName() === name && wp.getX() === x && wp.getY() === y && wp.getZ() === z) {
        console.log("[xaero_waypoint] Waypoint already exists: " + name);
        return;
      }
    }

    // Waypoint(int x, int y, int z, String name, String initials, int colorIndex)
    const waypoint = new Xaero$Waypoint(x, y, z, name, initials, color);
    existing.add(waypoint);
    console.log("[xaero_waypoint] Added waypoint '" + name + "' at " + x + "," + y + "," + z);
  } catch (e) {
    console.error("[xaero_waypoint] Failed to add waypoint: " + e);
  }
  });
});

// priority: 999

let $Arena$TrackedPlayers = Utils.newMap();

/** @type {Internal.Map<string, Internal.Map<ResourceLocation_, Internal.AABB>>} */
let $Arena$CachedAABBs = Utils.newMap();

var $Arena$ChunkPos = Java.loadClass('net.minecraft.world.level.ChunkPos');
var $Arena$AsyncChunkLoader = Java.loadClass('dev.ftb.packcompanion.core.AsyncChunkLoader');
const $Arena$SchematicPasteManager = Java.loadClass('dev.ftb.packcompanion.features.schematic.SchematicPasteManager');
const $Arena$ArrayList = Java.loadClass('java.util.ArrayList');

function $Arena$isArena(level, pos) {
  return level.getBiome(pos).is("ftb:is_arena");
}

const $Arena$Utils = {
  getArenaData: function(team) {
    return team.getExtraData()["ftbarenas"];
  },

  getOrCreateArenaData: function(team) {
    var data = team.getExtraData()["ftbarenas"];
    if (data == null) {
      data = {};
      team.getExtraData()["ftbarenas"] = data;
      team.markDirty();
    }
    return data;
  },

  resolveDimension: function(dimension_location) {
    var dim = String(dimension_location);
    if (FTBTeamBases$DimensionUtils.isPrivateTeamDimension(dim)) {
      return "ftb:hel";
    }
    return dim;
  },

  despawnAbandonedArenaBosses: function(server, team, dimension) {
    if (team == null) return;
    var arena_data = this.getArenaData(team);
    if (arena_data == null) return;
    var dim_data = arena_data[dimension];
    if (dim_data == null || dim_data["state"] != "ACTIVE") return;

    var members = team.getMembers().toArray();
    for (var i = 0; i < members.length; i++) {
      var member_uuid = members[i].toString();
      if ($Arena$TrackedPlayers.containsKey(member_uuid)
          && $Arena$TrackedPlayers.get(member_uuid) == dimension) {
        return;
      }
    }

    var target_dim = dimension;
    if (dimension == "ftb:hel") {
      var base = FTBTeamBasesKJS.getBaseForTeam(server, team);
      if (base != null) target_dim = base.dimension().location();
    }
    var arena_level = server.getLevel(target_dim);
    if (arena_level == null) return;

    var boss_uuids = dim_data["boss_uuids"];
    if (boss_uuids != null) {
      for (var bi = 0; bi < boss_uuids.size(); bi++) {
        try {
          var boss_uuid = String(boss_uuids.get(bi)).replace(/"/g, "");
          var entity = arena_level.getEntity(UUID.fromString(boss_uuid));
          if (entity != null && entity.isAlive()) entity.discard();
        } catch (e) {}
      }
    }

    dim_data["state"] = "FINISHED";
    dim_data["last_visited"] = Utils.getSystemTime();
    dim_data["boss_uuids"] = Utils.newList();
    delete dim_data["active_since"];
    if (dim_data["x"] != null) {
      this.releaseArenaChunks(arena_level,
          new BlockPos(dim_data["x"], dim_data["y"], dim_data["z"]));
    }
    team.markDirty();
    $Arena$Console.info("[" + $Arena$ConsoleName + "] " + team.getShortName()
        + " left " + dimension + " mid-fight; despawned arena bosses and reset to FINISHED");
  },

  getRealmConfig: function(dimension_location) {
    var specific = $Arena$RealmConfig[dimension_location];
    var defaults = $Arena$RealmConfig["DEFAULT"];
    return {
      min: (specific && specific.min != null) ? specific.min : defaults.min,
      max: (specific && specific.max != null) ? specific.max : defaults.max,
      atY: (specific && specific.atY != null) ? specific.atY : defaults.atY,
    };
  },

  buildPasteCommand: function(dimension, position, definition) {
    return "execute in " + dimension + " positioned "
        + position.getX() + " " + position.getY() + " " + position.getZ()
        + " run ftbpc schematic paste " + definition.schematic
        + " ~" + definition.offset.x + " ~" + definition.offset.y + " ~" + definition.offset.z
        + " " + $Arena$Config.speed + " " + $Arena$Config.speed_type;
  },

  resolveTeamFromBoss: function(entity) {
    var bossData = entity.getPersistentData();
    var teamId = bossData["teamId"];
    var arenaDim = bossData["arenaDim"];
    if (teamId == null || arenaDim == null) return null;
    var team = FTBTeamsKJS.getManager().getTeamById(UUID.fromString(teamId));
    if (team == null) return null;
    var arena_data = this.getArenaData(team);
    if (arena_data == null) return null;
    var dim_data = arena_data[arenaDim];
    if (dim_data == null) return null;
    return { team: team, dim_data: dim_data, arenaDim: arenaDim };
  },

  releaseArenaChunks: function(level, pos) {
    var centerCX = pos.getX() >> 4;
    var centerCZ = pos.getZ() >> 4;
    var radius = 4;
    var forced = level.getForcedChunks();
    var released = 0;
    for (var cx = centerCX - radius; cx <= centerCX + radius; cx++) {
      for (var cz = centerCZ - radius; cz <= centerCZ + radius; cz++) {
        if (forced.contains($Arena$ChunkPos.asLong(cx, cz))) {
          level.setChunkForced(cx, cz, false);
          released++;
        }
      }
    }
    if (released > 0) {
      $Arena$Console.info("Released " + released + " force-loaded chunk(s) around "
          + pos.getX() + ", " + pos.getZ());
    }
  },

  forceArenaChunks: function(level, pos) {
    const centerCX = pos.getX() >> 4;
    const centerCZ = pos.getZ() >> 4;
    const logX = pos.getX();
    const logZ = pos.getZ();
    $Arena$AsyncChunkLoader.whenReady(level, centerCX, centerCZ, 4, function() {
      $Arena$Console.info("Force-loaded arena chunks around " + logX + ", " + logZ);
    });
  },

  estimatePasteDurationMs: function(definition) {
    let size = definition.size;
    let volume = size.x * size.y * size.z;
    let blocksPerTick = $Arena$Config.speed;
    let durationSec = Math.ceil(volume / blocksPerTick / 20);
    return Math.min(
      Math.ceil(durationSec * 1000 * $Arena$PasteDurationSafetyFactor),
      $Arena$PasteDurationMaxMs
    );
  },

  pasteKeyFor: function(position, definition) {
    let offset = definition.offset;
    return definition.schematic
        + "_" + (position.getX() + offset.x)
        + "_" + (position.getY() + offset.y)
        + "_" + (position.getZ() + offset.z);
  },

  queryPasteRunning: function(dimension_id, paste_key) {
    if (dimension_id == null) return null;
    let server = Utils.getServer();
    if (server == null) return null;
    let workers, worker, i;
    try {
      let manager = $Arena$SchematicPasteManager.getInstance(server);
      if (manager == null) return null;
      workers = new $Arena$ArrayList(manager.list().toList());
    } catch (err) {
      return null;
    }
    for (i = 0; i < workers.size(); i++) {
      worker = workers.get(i).getSecond();
      if (String(worker.getDimensionId()) != String(dimension_id)) continue;
      if (paste_key != null && String(worker.makeKey()) != String(paste_key)) continue;
      if (worker.isRunning()) return true;
    }
    return false;
  },

  isPasting: function(dim_data, dimension_id) {
    if (dim_data == null || dim_data["pasting_until"] == null) return false;
    let dim = dimension_id != null ? dimension_id : dim_data["paste_dim"];
    let running = this.queryPasteRunning(dim, dim_data["paste_key"]);
    if (running != null) return running;
    return Utils.getSystemTime() < dim_data["pasting_until"];
  },

  clearPasteState: function(dim_data) {
    delete dim_data["pasting_until"];
    delete dim_data["paste_key"];
    delete dim_data["paste_dim"];
  },

  runPaste: function(team, dim_data, dimension_id, position, definition, level) {
    if (this.isPasting(dim_data, dimension_id)) return false;

    dim_data["pasting_until"] = Utils.getSystemTime() + this.estimatePasteDurationMs(definition);
    dim_data["paste_key"] = this.pasteKeyFor(position, definition);
    dim_data["paste_dim"] = String(dimension_id);
    if (team != null) team.markDirty();

    if (level != null) this.forceArenaChunks(level, position);

    var command = this.buildPasteCommand(dimension_id, position, definition);
    Utils.getServer().runCommand(command);
    return true;
  },
};

const $AutoClaim$LobbyServerID = UUID.fromString("ddc10a3e-b566-4e84-af66-8c315272ab02")
const $AutoClaim$ReclaimNeeded = false;
const $AutoClaim$Regions = {
  "ftb:bifrost": [
    {
      ChunkCenter: { x: 6250, y: 6250 },
      ChunkRadius: { x: 9, y: 9 },
      ShapeRadius: { x: 9, y: 9 },
      SDF: function ({ Px, Py }, { Rx, Ry }, { Cx, Cy }) {
        let R = JavaMath.min(Rx, Ry);
        let X = JavaMath.pow(Px - Cx, 2)
        let Y = JavaMath.pow(Py - Cy, 2)
        let Distance = JavaMath.sqrt(X + Y) - R
        return Distance <= 0
      },
    },
    {
      ChunkCenter: { x: 0, y: -5 },
      ChunkRadius: { x: 11, y: 11 },
      ShapeRadius: { x: 11, y: 11 },
      SDF: function ({ Px, Py }, { Rx, Ry }, { Cx, Cy }) {
        let R = JavaMath.min(Rx, Ry);
        let X = JavaMath.pow(Px - Cx, 2)
        let Y = JavaMath.pow(Py - Cy, 2)
        let Distance = JavaMath.sqrt(X + Y) - R
        return Distance <= 0
      },
    }
  ],
  "ftb:asgard": [
    {
      ChunkCenter: { x: 0, y: -2 },
      ChunkRadius: { x: 14, y: 16 },
      ShapeRadius: { x: 14, y: 16 },
      SDF: function ({ Px, Py }, { Rx, Ry }, { Cx, Cy }) {
        return true
      },
    }
  ],
  "ftb:nidhogg": [
    {
      ChunkCenter: { x: -2, y: -5 },
      ChunkRadius: { x: 7, y: 32 },
      ShapeRadius: { x: 7, y: 32 },
      SDF: function ({ Px, Py }, { Rx, Ry }, { Cx, Cy }) {
        return true
      },
    }
  ],
}
/**
 * Signed Distance Function (SDF) Info:
 * 
 * https://iquilezles.org/articles/distfunctions2d/
 * 
 * Vec2 Length Equivalent: new Vec3d(X, 0, Z).subtract(C).horizontalDistance()
 * 
 * Negative value == Inside Shape
 * Zero value == Boundry
 * Positive == Outside Shape
 * 
 * X/Z/R/C are multiplied by 16 for block pos, C offset by -8
 * This centers the algorithm to be based on North-West corner of chunk
 * 
 * This means X/Z/R/C are Chunk Position based not Block Position
 */

/**
 * Signed Distance Function for Square:
 * SDF: function (X,Z,R,C) {
 * 	return true;
 * },
 * Note: Algorithm will automatically create a square based on R and C
 */

/**
 * Signed Distance Function for Rect:
 * SDF: function ({Px, Py}, {Rx, Ry}, {Cx, Cy}) {
 * let X = (JavaMath.abs(Px) - Cx) - Rx;
 * let Y = (JavaMath.abs(Py) - Cy) - Ry;
 * let Dx = JavaMath.pow(JavaMath.max(X, 0), 2)
 * let Dy = JavaMath.pow(JavaMath.max(Y, 0), 2)
 * let Clamp = JavaMath.min(JavaMath.max(Dx, Dy), 0.0);
 * let Distance = JavaMath.sqrt(Dx + Dy) + Clamp;
 * return Distance <= 0
 * }
 */

/**
 * Signed Distance Function for Circle:
 * SDF: function (X,Z,R,C) {
 * 	let temp = new Vec3d(X, 0, Z).subtract(C).horizontalDistance() - R;
 * 	return temp <= 0
 * },
 */

function $AutoClaim$RunForDimension(server, dimension) {
  let chunkManager = FTBChunks$FTBChunksAPI.api().getManager();
  let serverCmdSrc = server.createCommandSourceStack();
  let lobbyTeam = FTBTeamsKJS.getTeamByUuid($AutoClaim$LobbyServerID);

  if (lobbyTeam == null) return;

  let chunkTeamData = chunkManager.getOrCreateData(lobbyTeam);

  let hasExistingClaims = chunkTeamData.getClaimedChunks().map((chunk) => chunk.getPos()).some((pos) => pos.dimension() == dimension);

  if (hasExistingClaims && $AutoClaim$ReclaimNeeded) {
    chunkTeamData.getClaimedChunks().forEach((chunk) => {
      if (chunk.getPos().dimension() == dimension) {
        chunk.unclaim(serverCmdSrc, false);
      }
    });
  }

  if (hasExistingClaims && !$AutoClaim$ReclaimNeeded) return;

  $AutoClaim$Regions[dimension.location().toString()].forEach((region) => {
    let { ChunkCenter, ChunkRadius, ShapeRadius, SDF } = region;
    if (ChunkRadius.x == 0 && ChunkRadius.y == 0) return;
    if (ChunkRadius.x == 1 && ChunkRadius.y == 1) {
      let result = chunkTeamData.claim(
        serverCmdSrc,
        new FTBLibrary$ChunkDimPos(dimension, ChunkCenter.x, ChunkCenter.y),
        false
      );
      if (!result.isSuccess()) {
        console.errorf("Couldn't autoclaim lobby chunkpos %s, %s: %s", ChunkCenter.x, ChunkCenter.y, result.getMessage().getString());
      }
    } else {
      let Claimed = 0;
      let Rx = ShapeRadius.x * 16;
      let Ry = ShapeRadius.y * 16;
      let Cx = (ChunkCenter.x * 16) - 8
      let Cy = (ChunkCenter.y * 16) - 8
      for (let iX = ChunkCenter.x - ChunkRadius.x; iX <= ChunkCenter.x + ChunkRadius.x; iX++) {
        for (let iY = ChunkCenter.y - ChunkRadius.y; iY <= ChunkCenter.y + ChunkRadius.y; iY++) {
          let Px = iX * 16;
          let Py = iY * 16;
          if (SDF({ Px: Px, Py: Py }, { Rx: Rx, Ry: Ry }, { Cx: Cx, Cy: Cy })) {
            let result = chunkTeamData.claim(serverCmdSrc, new FTBLibrary$ChunkDimPos(dimension, iX, iY), false);
            if (!result.isSuccess()) {
              console.errorf("Couldn't autoclaim lobby chunkpos %s, %s: %s", iX, iY, result.getMessage().getString());
            } else {
              Claimed++;
            }
          }
        }
      }
      console.infof(
        "AutoClaimed %s Chunks around %s positions %s for Team %s",
        Claimed,
        dimension.location().toString(),
        ChunkCenter,
        lobbyTeam.getShortName()
      );
    }
    chunkTeamData.saveNow()
    chunkTeamData.syncChunksToAll(server)
  });
}

LevelEvents.loaded((event) => {
  if (event.getLevel().isClientSide()) return;
  let dimension = event.getLevel().getDimensionKey();

  if (!Object.keys($AutoClaim$Regions).includes(dimension.location().toString())) return;

  let server = event.getServer();
  let lobbyTeam = FTBTeamsKJS.getTeamByUuid($AutoClaim$LobbyServerID);

  if (lobbyTeam == null) {
    // Fresh world: FTBTeamBases hasn't created the lobby team yet — retry after startup
    server.scheduleInTicks(200, () => {
      $AutoClaim$RunForDimension(server, dimension);
    });
    return;
  }

  $AutoClaim$RunForDimension(server, dimension);
});

// ItemEvents.rightClicked("book",(event)=>{
//   // event.getPlayer().give(Item.of("deus_ex_machina:ambrosia"))
//   event.getPlayer().addEffect(new Minecraft$MobEffectInstance("ftb:maze_debuff", 1, 0))
// })
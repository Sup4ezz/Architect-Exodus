// var FDLib$CutsceneData = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CutsceneData");
// var FDLib$CameraPos = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CameraPos");
// var FDLib$CurveType = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CurveType");
// var FDLib$EasingType = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.EasingType");
// var FDLib$StopMode = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CutsceneData$StopMode");
// var FDLib$FDLibCalls = Java.loadClass("com.finderfeed.fdlib.FDLibCalls");
// var Minecraft$Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");


/**
 * @type {$CutsceneData_}
 */
// let CutsceneBifrost = FDLib$CutsceneData.create()
//  60 60
// new Vec3d(32.5, 128.5, -240.5)
// new Vec3d(0.5, 112.5, -225.5)
// new Vec3d(0.5, 80.5, -80.5)
// new Vec3d(0.5, 65.5, -64.5)



// CutsceneBifrostBridge.getPath()
//   .addPoint(32.5, 128.5, -240.5, 60, 60, 0)
//   .addPoint(0.5, 112.5, -225.5, 0, 45, 0)
//   .addPoint(0.5, 80.5, -80.5, 0, 30, 0)
//   .addPoint(0.5, 65.5, -64.5, 180, 0, 0)

/**
 * Alpha and Tension not working as intended :sadge:
 * Only Alpha = 1|0 and Tension = 0 work, anything inbetween don't
 * 0, 0, is the one that FDLib uses by default
 */
let CameraPositions = [
  {
    path: new Vec3d(32.5, 128.5, -240.5),
    look: new Vec3d(60, 60, 0),
    alpha: 0,
    tension: 0
  },
  {
    path: new Vec3d(0.5, 112.5, -225.5),
    look: new Vec3d( 0, 45, 0),
    alpha: 0,
    tension: 0
  },
  {
    path: new Vec3d(0.5, 85.5, -85.5),
    look: new Vec3d(0, 30, 0),
    alpha: 0,
    tension: 0
  },
  {
    path: new Vec3d(0.5, 65.5, -64.5),
    look: new Vec3d(-180, 0, 0),
    alpha: 0,
    tension: 0
  }
]




// function renderCMR(cutscene, nodes, index) {
//   let subdivisions = 20;

//   let previous = (index - 1) < 0 ? null : (index - 1)
//   let current = index
//   let next = (index + 1) >= nodes.length ? index : (index + 1)
//   let after = (index + 2) >= nodes.length ? null : (index + 2)

//   let p1 = nodes[current].path
//   let p2 = nodes[next].path

//   let p0 = previous == null ? p1.add(p1.subtract(p2)) : nodes[previous].path
//   let p3 = after == null ? p2.add(p2.subtract(p1)) : nodes[after].path

//   let l1 = nodes[current].look
//   let l2 = nodes[next].look

//   let l0 = previous == null ? l1.add(l1.subtract(l2)) : nodes[previous].look
//   let l3 = after == null ? l2.add(l2.subtract(l1)) : nodes[after].look
  

//   let alpha = nodes[current].alpha
//   let tension = nodes[current].alpha
//   let CMRx = CatMullRom1D(alpha, tension, p0.x(), p1.x(), p2.x(), p3.x())
//   let CMRy = CatMullRom1D(alpha, tension, p0.y(), p1.y(), p2.y(), p3.y())
//   let CMRz = CatMullRom1D(alpha, tension, p0.z(), p1.z(), p2.z(), p3.z())

//   let currentLook = new Vec3d(l1.x(), l1.y(), l1.z())
//   let nextLook = new Vec3d(l2.x(), l2.y(), l2.z())

//   let lastPos = {x: CMRx(0), y: CMRy(0), z: CMRz(0)};

  
//   for (let step = 1; step <= subdivisions; step++) {
//     let localTime = step / subdivisions;
//     let currentPos = {x: CMRx(localTime), y: CMRy(localTime), z: CMRz(localTime)};

//     let position = new Vec3d(lastPos.x, lastPos.y, lastPos.z)
//     let lerpLook = currentLook.lerp(nextLook, localTime)
//     cutscene.addCameraPos(new FDLib$CameraPos(position, lerpLook.x(), lerpLook.y(), lerpLook.z()))
//     lastPos = currentPos
//   }
// }


// let CameraPositions = [
//   {
//     path: new Vec3d(36.5, 128.5, -240.5),
//     look: new Vec3d(60, 60, 0),
//     alpha: 0,
//     tension: 0
//   },
//   {
//     path: new Vec3d(8.5, 120.5, -236.5),
//     look: new Vec3d( 0, 45, 0),
//     alpha: 0,
//     tension: 0
//   },
//   {
//     path: new Vec3d(0.5, 100.5, -200.5),
//     look: new Vec3d( 0, 30, 0),
//     alpha: 0,
//     tension: 0
//   },
//   {
//     path: new Vec3d(0.5, 85.5, -85.5),
//     look: new Vec3d(0, 30, 0),
//     alpha: 0.0,
//     tension: 0.0
//   },
//   {
//     path: new Vec3d(0.5, 65.5, -64.5),
//     look: new Vec3d(-180, 0, 0),
//     alpha: 0,
//     tension: 0
//   }
// ]

let CutsceneBifrostBridge = FDLib$CutsceneData.create()
  .addCameraPos(new FDLib$CameraPos(new Vec3d(36.5, 128.5, -240.5), 60, 60, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(8.5, 120.5, -236.5),  0, 45, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(0.5, 100.5, -200.5),  0, 30, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(0.5, 85.5, -85.5), 0, 30, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(0.5, 67.5, -67.5), -180, 0, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(0.5, 65.5, -64.5), -180, 0, 0))
  .time(200)
  // .moveCurveType("linear")
// for (let index = 0; index < CameraPositions.length - 1; index++) {
  
// }


// let CutsceneBifrostBridge = new CutsceneDataJS()
//     CutsceneBifrostBridge
//       .generatePointsBetweenVec3(
//         new Vec3d(32.5, 128.5, -240.5),
//         new Vec3d(0.5, 112.5, -225.5),
//         50,
//         20,
//         CutsceneBifrostBridge.cameraPositions,
//         Easing$Dictionary.easeOutQuint
//       )
// 			.generatePointsBetweenVec3(
//         new Vec3d(0.5, 112.5, -225.5),
//         new Vec3d(0.5, 80.5, -80.5),
//         100,
//         40,
//         CutsceneBifrostBridge.cameraPositions,
//         Easing$Dictionary.easeInOutQuint
//       )
// 			.generatePointsBetweenVec3(
//         new Vec3d(0.5, 80.5, -80.5),
//         new Vec3d(0.5, 65.5, -64.5),
//         50,
//         20,
//         CutsceneBifrostBridge.cameraPositions,
//         Easing$Dictionary.easeInOutSine
//       )
//       .generatePointsBetweenVec3(
//         new Vec3d(60, 60, 0),
//         new Vec3d(0, 45, 0),
//         50,
//         20,
//         CutsceneBifrostBridge.facingPositions,
//         Easing$Dictionary.easeOutQuint
//       )
// 			.generatePointsBetweenVec3(
//         new Vec3d(0, 45, 0),
//         new Vec3d(0, 30, 0),
//         100,
//         40,
//         CutsceneBifrostBridge.facingPositions,
//         Easing$Dictionary.easeInOutQuint
//       )
// 			.generatePointsBetweenVec3(
//         new Vec3d(0, 30, 0),
//         new Vec3d(180, 0, 0),
//         50,
//         20,
//         CutsceneBifrostBridge.facingPositions,
//         Easing$Dictionary.easeInOutSine
//       )
//   CutsceneBifrostBridge = CutsceneBifrostBridge.apply(FDLib$CutsceneData.create())
//   CutsceneBifrostBridge
//     .time(200)
//     .moveCurveType("linear")

			// float t, 
			// float p0, 
			// float p1, 
			// float p2, 
			// float p3
      //   0.5 * (2.0 * p1 + 
			// 		(p2 - p0) * t + 
			// 		(2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t * t + 
			// 		(3.0 * p1 - p0 - 3.0 * p2 + p3) * t * t * t
			// 	);
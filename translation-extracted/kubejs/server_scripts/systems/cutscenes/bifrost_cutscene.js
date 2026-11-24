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

let CutsceneBifrost = new CutsceneDataJS()
    CutsceneBifrost
      .generatePointsBetweenVec3(
        new Vec3d(0.5, 500.5, 0.5),
        new Vec3d(0.5, 100.5, 0.5),
        100,
        20,
        CutsceneBifrost.cameraPositions,
        Easing$Dictionary.linear
      )
      .generatePointsBetweenVec3(
        new Vec3d(0.5, 100.5, 0.5),
        new Vec3d(0.5, 73.5, 0.5),
        100,
        20,
        CutsceneBifrost.cameraPositions,
        Easing$Dictionary.easeOutQuint
      )
      .generatePointsBetweenVec3(
        new Vec3d(180, 90, 0),
        new Vec3d(180, 90, 0),
        100,
        20,
        CutsceneBifrost.facingPositions,
        Easing$Dictionary.linear
      )
      .generatePointsBetweenVec3(
        new Vec3d(180, 90, 0),
        new Vec3d(180, 0, 0),
        100,
        20,
        CutsceneBifrost.facingPositions,
        Easing$Dictionary.easeOutQuint
      )
  CutsceneBifrost = CutsceneBifrost.apply(FDLib$CutsceneData.create())
  CutsceneBifrost
    .time(180)
    .moveCurveType("linear")
    .addScreenEffect(0, FDLib$FDScreenEffects.SCREEN_COLOR.get(), new FDLib$ScreenColorData(0/255, 0/255, 0/255, 255/255), 0, 20, 80)
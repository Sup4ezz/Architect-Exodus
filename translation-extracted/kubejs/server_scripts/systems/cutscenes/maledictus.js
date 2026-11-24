let MaledictusCutscene = new FDLib$CutsceneData();
MaledictusCutscene
  // .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 141, 99866.5), 0, 0, 0))

  .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 141, 99866.5), 0, 0, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 137, 99907.5), 0, -15, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 147, 99940.5), 0, -8, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 161, 99951.5), 0, 15, 0))
  .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 161, 99981.5), 0, 25, 0))
  .time(100)
  .addScreenEffect(
    0,
    FDLib$FDScreenEffects.SCREEN_COLOR.get(),
    new FDLib$ScreenColorData(0 / 255, 0 / 255, 0 / 255, 255 / 255),
    0,
    20,
    10
  )
  .nextCutscene(
    new FDLib$CutsceneData()
      .addCameraPos(new FDLib$CameraPos(new Vec3d(100000.5, 161, 99979.55), 0, 25, 0))
      .time(50)
      .addScreenEffect(
        40,
        FDLib$FDScreenEffects.SCREEN_COLOR.get(),
        new FDLib$ScreenColorData(0 / 255, 0 / 255, 0 / 255, 255 / 255),
        10,
        5,
        0
      )
  );

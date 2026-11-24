const Shatter$Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

NetworkEvents.dataReceived("ftb:asgard_screen_shatter", (event) => {
  Shatter$Minecraft.getInstance().execute(() => {
    FDLib$ShatteredScreenEffectHandler.setCurrentEffect(
      new FDLib$ShatteredScreenSettings(
        Utils.id("fdlib", "textures/gui/effects/broken_screen_1_data_2.png"),
        Utils.id("fdlib", "null"),
        10,
        10,
        5,
        2.0,
        0.1,
        true
      )
    );
  });
});

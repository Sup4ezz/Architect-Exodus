const ScrollSound$Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

NetworkEvents.dataReceived("play_scroll_sound", (event) => {
  let sound_id = String(event.getData()["sound_id"])
  ScrollSound$Minecraft.getInstance().execute(() => {
    let sound = new Minecraft$SimpleSoundInstance(
      sound_id,
      "voice",
      1,
      1,
      Minecraft$SoundInstance.createUnseededRandom(),
      false,
      0,
      "NONE",
      0,
      0,
      0,
      true,
    )
    Client.getSoundManager().play(sound)
  })
})

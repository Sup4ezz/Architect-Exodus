// This ensures the server never even attempts to load the client-side class
if (Platform.isClientEnvironment()) {
  ForgeEvents.onEvent("net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", (event) => {
    let player = Client.player;
    if (!player || !player.isCrouching()) return;

    if (player.getMainHandItem().id === "ftb:skill_catalyst") {
      let scrollDirection = event.getScrollDelta() > 0 ? "up" : "down";
      console.log(`Sending skill scroll packet with direction: ${scrollDirection}`);
      player.sendData("lh_skill_scroll", { direction: scrollDirection });

      event.setCanceled(true);
    }
  });
}

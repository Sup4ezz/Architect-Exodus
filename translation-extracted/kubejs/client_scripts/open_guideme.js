const OpenGuideMe$Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
const OpenGuideMe$ClientCommandHandler = Java.loadClass("net.minecraftforge.client.ClientCommandHandler");

NetworkEvents.dataReceived("ftb:open_guideme", (event) => {
  const guide = event.data.guide;
  const page = event.data.page;
  OpenGuideMe$Minecraft.getInstance().execute(() => {
    OpenGuideMe$ClientCommandHandler.runCommand("guidemec " + guide + " open " + page);
  });
});

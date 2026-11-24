NativeEvents.onEvent("dev.ftb.packcompanion.features.triggerblock.TriggerBlockEvent", (event)=>{
	// if (event.getPlayer().getTags().contains("ftb:bifrost_bridge_triggered")) return
	// event.getPlayer().addTag("ftb:bifrost_bridge_triggered")
	// if (event.getIdentifier() == "ftb:bifrost_bridge") {
	// 	FDLib$FDLibCalls.startCutsceneForPlayer(event.getPlayer(), CutsceneBifrostBridge);
	// }
  if (event.getPlayer().getLevel().isClientSide()) return;
  event.getPlayer().addTag("ftb:bifrost_bridge_triggered")
  
  if (event.getIdentifier() == "ftb:bifrost_bridge") {
    FDLib$FDLibCalls.startCutsceneForPlayer(event.getPlayer(), CutsceneBifrostBridge);
  } 
})
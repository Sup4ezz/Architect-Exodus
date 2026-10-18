ServerEvents.loaded((event) => {
  const server = event.server;
  const overworld = server.overworld();

  // Example: Set keepInventory to true
  overworld.getGameRules().getRule(Minecraft$GameRules.RULE_KEEPINVENTORY).set(true, server);

  console.log("[KubeJS] Gamerule keepInventory set to true on world load.");
});

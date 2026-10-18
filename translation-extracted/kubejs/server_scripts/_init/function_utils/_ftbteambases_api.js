// priority: 99951



const FTBTeamBasesKJS = {
  getBaseInstanceManager: function (server) {
    return FTBTeamBases$BaseInstanceManager.get(server)
  },
  getBaseForPlayer: function(player) {
    return FTBTeamBases$BaseInstanceManager.get(player.getServer()).getBaseForPlayer(player).orElse(null);
  },
  getTeamLevelForPlayer: function (player) {
    let server = player.getServer()
    let teamLevel = FTBTeamBases$BaseInstanceManager.get(server)
      .getBaseForPlayer(player)
      .map(
        (base) => server.getLevel(base.dimension().location())
      ).orElse(null);
    return teamLevel;
  },
  getBaseForTeam: function (server, team) {
    return FTBTeamBases$BaseInstanceManager.get(server).getBaseForTeam(team).orElse(null)
  }
}
// priority: 99951

const FTBTeamsKJS = {

    /**
     * 
     * @returns {Internal.TeamManager_}
     */
    getManager: function () {
        return FTBTeams$FTBTeamsAPI.api().getManager();
    },

    /**
     * @param {Internal.UUID_} playerId 
     * @returns {Internal.UUID_} Uuid of Team, default to Player UUID
     */
    getPlayerTeamId: function (playerId) {
      return FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayerID(playerId).map((team) => team.getTeamId()).orElse(playerId)
    },

    /**
     * 
     * @param {Internal.ServerPlayer_} player 
     * @returns {dev.ftb.mods.ftbteams.api.Team_}
     */
    getTeamForPlayer: function (player) {
      return FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(player).orElse(null);
    },

    /**
     * Use like a JSON map, ex. {"key":["some","value"]}, getPersistantData()["key"][0] returns "some"
     * 
     * To set data, you need to use it like json map ex. getPersistantData()["key"] = value
     * Then run markSaveData(player)
     * 
     * @param {Internal.ServerPlayer_} player 
     * @returns {Internal.CompoundTag_ | null} null if no team found
     */
    getPersistantData: function (player) {
      return FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(player).map((team) => team.getExtraData()).orElse(null);
    },

    /**
     * 
     * @param {Internal.ServerPlayer_} player 
     * @param {string} key 
     * @param {Internal.JsonObject_} nbt 
     * @returns {Internal.CompoundTag_ | null} Success: Newly set data, null if no team found
     */
    setPlayerTeamData: function (player, key, nbt) {
      let team = FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(player).orElse(null)
      if (team == null) {
        return null;
      }

      team.getExtraData()[key] = nbt
      team.markDirty()
      return team.getExtraData()[key]
    },

    /**
     * 
     * @param {Internal.ServerPlayer_} player 
     * @returns {boolean} True: data saved, False: Team not found
     */
    markSaveData: function(player) {
      let team = FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(player).orElse(null)
      if (team == null) {
        return false;
      }
      team.markDirty()
      return true
    },

    /**
     * Use @link FTBTeamsKJS.getPersistantData(player)["someKey"]
     * 
     * As PersistantData is a CompoundTag, it can be nested and as such won't be an exhaustive search
     * 
     * @deprecated
     */
    // getDataValue: (player, key) => {
    //     let data = Teams.getData(player);
    //     return data ? data[key] : null;
    // },

    /**
     * Use @link FTBTeamsKJS.getPersistantData(player)["someKey"] == value
     * 
     * As PersistantData is a CompoundTag, it can be nested and as such won't be an exhaustive search
     * 
     * @deprecated
     */
    // hasData: (player, key) => {
    //     let data = Teams.getData(player);
    //     return data ? data.hasOwnProperty(key) : false;
    // },

    /**
     * Use @link FTBTeamsKJS.getPersistantData(player)["someKey"] = null
     * 
     * As PersistantData is a CompoundTag, it can be nested and as such won't be an exhaustive search
     * 
     * @deprecated
     */
    // removeData: (player, key) => {
    //     let data = Teams.getData(player);
    //     if (data && data.hasOwnProperty(key)) {
    //         delete data[key];
    //     }
    // },

    /**
     * 
     * @param {Internal.ServerPlayer_} player 
     * @returns {string | null} Success: SomeTeam#a1b2c3, null: if no team found
     */
    getShortTeamName: function (player) {
      return FTBTeams$FTBTeamsAPI.api().getManager().getTeamForPlayer(player).map((team) => team.getShortName()).orElse(null);
    },
    
    // hasStage: function (player, teamstage) {
    //     let team = Teams.getTeam(player);
    //     return team ? $TeamStagesHelper.hasTeamStage(player, teamstage) : null;
    // },
    // getTeamStages: function (player) {
    //     let team = Teams.getTeam(player);
    //     return team ? $TeamStagesHelper.getStages(team) : null;
    // }
    getTeamByName: function(name) {
      return FTBTeams$FTBTeamsAPI.api().getManager().getTeamByName(name).orElse(null)
    },

    getTeamByUuid: function(uuid) {
      return FTBTeams$FTBTeamsAPI.api().getManager().getTeamByID(uuid).orElse(null)
    }
};



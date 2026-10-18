// priority: 50

const LHEngine = {
  conditions: {},
  actions: {},
  behaviors: [],

  registerCondition: (name, handler) => {
    LHEngine.conditions[name] = handler;
  },

  registerAction: (name, handler) => {
    LHEngine.actions[name] = handler;
  },

  registerBehaviors: (behaviorArray) => {
    behaviorArray.forEach((behavior) => {
      LHEngine.behaviors.push(behavior);
    });
  },

  getSkillAttributeIds: () => {
    let ids = [];
    LHEngine.behaviors.forEach((behavior) => {
      let skill = behavior.conditions ? behavior.conditions.skill : null;
      if (skill != null && !ids.includes(skill)) {
        ids.push(skill);
      }
    });
    return ids;
  },

  getBehaviorIds: () => {
    let ids = [];
    LHEngine.behaviors.forEach((behavior) => {
      if (!ids.includes(behavior.id)) {
        ids.push(behavior.id);
      }
    });
    return ids;
  },

  resolveValue: (amount, context) => {
    if (typeof amount === "number") return amount;
    if (amount != null && amount.perRank != null) {
      return amount.perRank * (context.skillRank ?? 1);
    }
    return amount;
  },

  isOnCooldown: (player, id) => {
    let cooldownData = player.getPersistentData()["ftblh_cooldown"];
    if (cooldownData == null) return false;
    let cooldown = cooldownData[id];
    if (cooldown == null) return false;

    return Utils.getSystemTime() < cooldown;
  },

  // Helper is "active" only when the entity exists and /lh hide hasn't been issued.
  // Returning false here suppresses all behavior processing so hostile actions
  // (e.g. random_debuff_nearby) don't fire while the Vaettir is dismissed.
  isHelperActive: (player) => {
    let opt = FTBLittleHelper.getHelperEntity(player);
    if (opt == null || !opt.isPresent()) return false;
    return opt.get().shouldStayShown();
  },

  isDisabled: (player, id) => {
    let disabled = player.getPersistentData()["ftblh_disabled"];
    if (disabled == null) return false;
    return disabled[id] == true;
  },

  toggleBehavior: (player, id) => {
    let pd = player.getPersistentData();
    if (pd["ftblh_disabled"] == null) {
      pd["ftblh_disabled"] = {};
    }
    let wasDisabled = pd["ftblh_disabled"][id] == true;
    pd["ftblh_disabled"][id] = !wasDisabled;
    return !wasDisabled; // returns true if now disabled
  },

  setCooldown: (player, id, ticks) => {
    let pd = player.getPersistentData();
    if (pd["ftblh_cooldown"] == null) {
      pd["ftblh_cooldown"] = {};
    }
    pd["ftblh_cooldown"][id] = Utils.getSystemTime() + ticks * 50; // 1 tick = 50ms
  },

  processTrigger: (player, trigger, event, eventContext) => {
    if (player == null || player.isSpectator()) return false;
    if (!LHEngine.isHelperActive(player)) return false;

    let matching = LHEngine.findMatchingBehaviors(trigger);

    for (let i = 0; i < matching.length; i++) {
      let behavior = matching[i];
      if (LHEngine.isOnCooldown(player, behavior.id)) continue;
      if (LHEngine.isDisabled(player, behavior.id)) continue;

      let context = { id: behavior.id };
      if (eventContext) {
        Object.entries(eventContext).forEach(([key, value]) => {
          context[key] = value;
        });
      }
      if (!LHEngine.checkConditions(player, behavior.conditions, context, event)) continue;

      LHEngine.processActions(player, behavior.actions, context, event);
      LHEngine.setCooldown(player, behavior.id, behavior.cooldown);
      return true;
    }
    return false;
  },

  findMatchingBehaviors: (trigger) => {
    let matching = [];
    LHEngine.behaviors.forEach((behavior) => {
      if (behavior.trigger == trigger) {
        matching.push(behavior);
      }
    });
    matching.sort((a, b) => {
      return (b.priority || 0) - (a.priority || 0);
    });
    return matching;
  },

checkConditions: (player, conditions, context, event) => {
    if (!conditions) return true; 
    return Object.entries(conditions).every(([key, value]) => {
      let handler = LHEngine.conditions[key];
      if (!handler) return true; 
      return handler.test(player, conditions, context, event);
    });
  },

  processActions: (player, actions, context, event) => {
    let currentDelay = 0;
    actions.forEach((action) => {
      if (action.type === "delay") {
        let ticks = LHEngine.resolveValue(action.ticks, context);
        let seconds = LHEngine.resolveValue(action.seconds, context);
        currentDelay += ticks || (seconds ? seconds * 20 : 0) || 20;
        return;
      }

      let handler = LHEngine.actions[action.type];
      if (handler) {
        LHEngine.scheduleAction(player, handler, action, context, event, currentDelay);
      }
    });
  },

  scheduleAction: (player, handler, action, context, event, delay) => {
    if (delay <= 0) {
      handler.execute(player, action, context, event);
      return;
    }

    player.server.scheduleInTicks(delay, (callback) => {
      if (player && player.isAlive()) {
        handler.execute(player, action, context, event);
      }
    });
  },
};


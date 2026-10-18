// priority: 5
// Helper function to get skill dialogue text (dynamic content — sent as textLiterals)
var getSkillDialogueText = function(player) {
    var pData = player.persistentData;
    var selectedSkillId = pData.getString("lh_selected_skill_id");
    var selectedSkillName = pData.getString("lh_selected_skill_name");
    if (!selectedSkillId) return [Text.translatable("ftblh.npc.no_selected_skill").red()];

    var disabled = LHEngine.isDisabled(player, selectedSkillId);

    var representativeDef = definitions.find(function(def) {
        return def.conditions.skill === "ftb:" + selectedSkillId;
    });
    var trigger = representativeDef ? representativeDef.trigger : "Unknown Trigger";
    var cooldown = representativeDef ? representativeDef.cooldown : 0;

    var formatTrigger = function(t) {
        return t.split('_').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    };
    var displayTrigger = formatTrigger(trigger);

    var attribute = player.getAttribute("ftb:" + selectedSkillId);
    var skillLevel = attribute ? attribute.getValue() : 0;

    return [
      "Skill: " + selectedSkillName,
      "Trigger: " + displayTrigger,
      "Level: " + skillLevel,
      "Cooldown: " + Math.ceil(cooldown / 20) + "s",
      "Status: " + (disabled ? "\u00A7cDisabled" : "\u00A7aEnabled")
    ];
};

var sendSkillDialogue = function(player) {
    Dialogue.begin(player, {
        npc: "allay_speaker",
        titleKey: "ftblh.npc.vaett",
        textLiterals: getSkillDialogueText(player),
        duration: 1,
        isPersistent: true
    });
};

NetworkEvents.dataReceived('lh_skill_scroll', function(event) {
  var player = event.player;
  var data = event.data;

  // Anti-cheat/Safety check: Ensure they are actually holding the item on the server
  if (player.getMainHandItem().id !== 'ftb:skill_catalyst') return;

  // Filter unlocked skills and group them by base skill ID
  var seenSkills = {};
  definitions.forEach(function(def) {
    var skillAttr = def.conditions.skill;
    if (!skillAttr) return;
    var skillId = skillAttr.replace("ftb:", "");
    if (seenSkills[skillId]) return;

    var attribute = player.getAttribute(skillAttr);
    if (attribute != null && attribute.getValue() > 0) {
        var displayName = def.displayName.split(' (')[0];
        seenSkills[skillId] = { id: skillId, displayName: displayName };
    }
  });

  var unlockedSkills = Object.values(seenSkills);

  if (unlockedSkills.length === 0) {
    player.setStatusMessage(Text.translatable("ftblh.npc.no_skills").red());
    return;
  }

  var pData = player.persistentData;
  var currentIndex = pData.getInt("lh_selected_skill_index") || 0;

  if (data.direction === "up") {
    currentIndex--;
    if (currentIndex < 0) currentIndex = unlockedSkills.length - 1;
  } else {
    currentIndex++;
    if (currentIndex >= unlockedSkills.length) currentIndex = 0;
  }

  var selectedSkill = unlockedSkills[currentIndex];
  pData.putInt("lh_selected_skill_index", currentIndex);
  pData.putString("lh_selected_skill_id", selectedSkill.id);
  pData.putString("lh_selected_skill_name", selectedSkill.displayName);

  // Update dialogue instantly if catalyst is held
  if (player.getMainHandItem().id === 'ftb:skill_catalyst' || player.getOffHandItem().id === 'ftb:skill_catalyst') {
    sendSkillDialogue(player);
  }

  // Visual and audio feedback
  player.playSound("minecraft:ui.button.click", 1.0, 1.2);
});

ItemEvents.rightClicked('ftb:skill_catalyst', function(event) {
  var player = event.player;
  var pData = player.persistentData;
  var selectedSkillId = pData.getString("lh_selected_skill_id");

  if (player.isCrouching() && selectedSkillId) {
    var nowDisabled = LHEngine.toggleBehavior(player, selectedSkillId);
    player.playSound(nowDisabled ? "minecraft:block.note_block.bass" : "minecraft:block.note_block.pling", 1.0, 1.2);
  }

  // Force open/refresh the persistent dialogue
  sendSkillDialogue(player);
});

PlayerEvents.tick(function(event) {
  var player = event.player;
  if (player == null || player.isFake()) return;
  if (event.getServer().getTickCount() % 10 !== 0) return;

  var hasCatalyst = player.getMainHandItem().id === 'ftb:skill_catalyst'
      || player.getOffHandItem().id === 'ftb:skill_catalyst';

  if (hasCatalyst) {
    // Open dialogue if not already showing a persistent one
    if (!player.persistentData.getBoolean('DialoguePersistent')) {
      sendSkillDialogue(player);
    }
  } else if (player.persistentData.getBoolean('DialoguePersistent')) {
    // Catalyst removed from hand — clear the persistent dialogue
    Dialogue.clear(player);
  }
});

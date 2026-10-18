// priority: 10
// Server-side dialogue — thin wrapper that sends packets to the client.
// All rendering, animation, and text resolution happens in client_scripts/systems/dialogue.js.

var Dialogue = {
    /**
     * Send a dialogue packet to the client.
     * @param {Internal.ServerPlayer} player
     * @param {Object} opts
     * @param {string} opts.npc - NPC item icon ID (e.g., "allay_speaker")
     * @param {string} [opts.titleKey] - Lang key for NPC name (default: "ftblh.npc.vaett")
     * @param {string[]} [opts.textKeys] - Array of lang keys (resolved client-side)
     * @param {string[]} [opts.textLiterals] - Array of pre-resolved strings (for dynamic content)
     * @param {number} [opts.duration] - Wait duration in ticks after text finishes typing
     * @param {boolean} [opts.isPersistent] - Whether this dialogue blocks non-persistent ones
     */
    begin: function(player, opts) {
        // Block non-persistent dialogues if a persistent one is active
        var isPersistentActive = player.persistentData.getBoolean('DialoguePersistent');
        if (isPersistentActive && !opts.isPersistent) return;

        if (opts.isPersistent) {
            player.persistentData.putBoolean('DialoguePersistent', true);
        }

        player.sendData("ftb:dialogue_begin", {
            npc: opts.npc || "allay_speaker",
            titleKey: opts.titleKey || "ftblh.npc.vaett",
            textKeys: opts.textKeys || [],
            textLiterals: opts.textLiterals || [],
            duration: opts.duration || 0,
            isPersistent: !!opts.isPersistent
        });
    },

    /**
     * Send a clear packet to the client and remove server-side tracking flag.
     * @param {Internal.ServerPlayer} player
     */
    clear: function(player) {
        player.persistentData.remove('DialoguePersistent');
        player.sendData("ftb:dialogue_clear", {});
    }
};

// Migration cleanup: remove old DialogueState NBT from players who still have it
PlayerEvents.tick(function(event) {
    var player = event.player;
    if (player == null || player.isFake()) return;

    if (player.persistentData.contains('DialogueState')) {
        player.persistentData.remove('DialogueState');
        player.paint({ '*': { remove: true } });
    }
    if (player.persistentData.contains('DialogueSpeaker')) {
        player.persistentData.remove('DialogueSpeaker');
        player.persistentData.remove('DialogueAnimation');
        player.paint({ '*': { remove: true } });
    }
});

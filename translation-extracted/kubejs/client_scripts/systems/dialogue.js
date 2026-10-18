// priority: 10
// Client-side dialogue renderer.
// Receives packets from server, resolves translations locally, drives Paint API.

var DialogueClient = {
    CONFIG: {
        SCALE: 1.5,
        MAX_X: 5,
        MIN_X: -150,
        Y_OFFSET: 5,
        ANIM_SPEED: 12,
        TEXT_SPEED: 2,
        TEXT_WRAP_LIMIT: 34,
        TICKS_PER_CHAR: 2.0,
        MIN_DURATION: 100,
        BORDER: 4,
        BOX_WIDTH: 96,
        LINE_HEIGHT: 6,
        BOX_BASE_HEIGHT: 10,
        BOX_X_OFFSET: 50,
        BOX_Y_OFFSET: 18,
        TEXT_X_OFFSET: 55,
        TEXT_Y_OFFSET: 22
    },

    IDS: {
        BG: 'dialogue_bg',
        NAMEPLATE: 'dialogue_nameplate',
        TITLE: 'dialogue_title',
        TEXT: 'dialogue_text',
        ICON: 'dialogue_icon',
        SLICE_TL: 'dialogue_s_tl',
        SLICE_TM: 'dialogue_s_tm',
        SLICE_TR: 'dialogue_s_tr',
        SLICE_ML: 'dialogue_s_ml',
        SLICE_MC: 'dialogue_s_mc',
        SLICE_MR: 'dialogue_s_mr',
        SLICE_BL: 'dialogue_s_bl',
        SLICE_BM: 'dialogue_s_bm',
        SLICE_BR: 'dialogue_s_br'
    },

    // Local animation state — not persisted, transient per session
    state: null,

    /**
     * Handle incoming dialogue begin packet from server.
     * Resolves lang keys client-side, then starts the animation.
     */
    onBegin: function(data) {
        var npc = String(data.npc || "allay_speaker");
        var isPersistent = !!data.isPersistent;

        // Block non-persistent if persistent is active
        if (this.state != null && this.state.isPersistent && !isPersistent) {
            return;
        }

        // Resolve title
        var titleKey = String(data.titleKey || "ftblh.npc.vaett");
        var title = Text.translate(titleKey).getString();

        // Resolve text: prefer textKeys (client-resolved), fall back to textLiterals (pre-resolved)
        var fullText = "";
        var textKeys = data.textKeys;
        var textLiterals = data.textLiterals;

        if (textKeys && textKeys.length > 0) {
            var resolved = [];
            for (var i = 0; i < textKeys.length; i++) {
                resolved.push(Text.translate(String(textKeys[i])).getString());
            }
            fullText = resolved.join("\n");
        } else if (textLiterals && textLiterals.length > 0) {
            var literals = [];
            for (var i = 0; i < textLiterals.length; i++) {
                literals.push(String(textLiterals[i]));
            }
            fullText = literals.join("\n");
        }

        // Calculate duration
        var duration = Number(data.duration) || 0;
        if (duration <= 0) {
            duration = Math.floor(Math.max(this.CONFIG.MIN_DURATION, fullText.length * this.CONFIG.TICKS_PER_CHAR));
        }

        // Preserve animation position if updating a persistent dialogue in-place
        var currentState = this.state;
        var keepPosition = isPersistent && currentState != null;

        this.state = {
            npc: npc,
            title: title,
            fullText: fullText,
            duration: duration,
            x: keepPosition ? currentState.x : this.CONFIG.MIN_X,
            chars: keepPosition ? fullText.length : 0,
            wait: 0,
            phase: keepPosition ? (currentState.phase === 'out' ? 'in' : currentState.phase) : 'in',
            isPersistent: isPersistent
        };
    },

    /**
     * Handle incoming clear packet from server.
     * Triggers the out animation.
     */
    onClear: function() {
        if (this.state == null) return;
        this.state.phase = 'out';
        this.state.isPersistent = false;
    },

    /**
     * Tick handler — drives the animation state machine.
     */
    update: function() {
        if (this.state == null) return;

        var state = this.state;
        var player = Client.player;
        if (!player) return;

        switch (state.phase) {
            case 'in':
                state.x += this.CONFIG.ANIM_SPEED;
                if (state.x >= this.CONFIG.MAX_X) {
                    state.x = this.CONFIG.MAX_X;
                    state.phase = 'write';
                }
                break;
            case 'write':
                if (state.chars < state.fullText.length) {
                    state.chars += this.CONFIG.TEXT_SPEED;
                    if (state.chars > state.fullText.length) state.chars = state.fullText.length;
                } else {
                    state.phase = 'wait';
                }
                break;
            case 'wait':
                if (state.isPersistent) {
                    // Keep open as long as catalyst is held
                    if (player.getMainHandItem().id === 'ftb:skill_catalyst' || player.getOffHandItem().id === 'ftb:skill_catalyst') {
                        state.wait = 0;
                    } else {
                        state.wait++;
                    }
                } else {
                    state.wait++;
                }

                if (state.wait >= state.duration) {
                    state.phase = 'out';
                }
                break;
            case 'out':
                state.x -= this.CONFIG.ANIM_SPEED;
                if (state.x <= this.CONFIG.MIN_X) {
                    this.clear();
                    return;
                }
                break;
        }

        this.render(state);
    },

    /**
     * Remove all paint elements and reset state.
     */
    clear: function() {
        this.state = null;
        var player = Client.player;
        if (!player) return;

        var removals = {};
        var ids = this.IDS;
        for (var key in ids) {
            removals[ids[key]] = { remove: true };
        }
        player.paint(removals);
    },

    /**
     * Render the current dialogue state via Paint API.
     */
    render: function(state) {
        var player = Client.player;
        if (!player) return;

        var s = this.CONFIG.SCALE;
        var x = state.x;
        var chars = state.chars;
        var fullText = state.fullText;
        var npc = state.npc;
        var title = state.title;
        var y = this.CONFIG.Y_OFFSET;
        var iconPath = "ftb:" + npc;
        var displayedText = fullText.substring(0, Math.floor(chars));
        var lines = this.wrapText(displayedText, this.CONFIG.TEXT_WRAP_LIMIT);

        // Calculate dynamic text box height based on line count
        var lineCount = Math.max(lines.length, 1);
        var boxH = this.CONFIG.BOX_BASE_HEIGHT + (lineCount * this.CONFIG.LINE_HEIGHT);
        var boxW = this.CONFIG.BOX_WIDTH;
        var boxX = x + this.CONFIG.BOX_X_OFFSET * s;
        var boxY = y + this.CONFIG.BOX_Y_OFFSET * s;

        // 9-slice dimensions
        var b = this.CONFIG.BORDER * s;
        var innerW = boxW * s - 2 * b;
        var innerH = boxH * s - 2 * b;

        var TEX = 'ftb:textures/gui/';

        var paintData = {};

        // NPC icon background
        paintData[this.IDS.BG] = {
            type: 'rectangle',
            x: x, y: y, w: 48 * s, h: 48 * s,
            texture: TEX + 'dialogue_overlay.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };

        // Nameplate
        paintData[this.IDS.NAMEPLATE] = {
            type: 'rectangle',
            x: x + 50 * s, y: y, w: 34 * s, h: 16 * s,
            texture: TEX + 'dialogue_nameplate.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };

        // === 9-slice text box ===
        // Top row
        paintData[this.IDS.SLICE_TL] = {
            type: 'rectangle',
            x: boxX, y: boxY, w: b, h: b,
            texture: TEX + 'slice_tl.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        paintData[this.IDS.SLICE_TM] = {
            type: 'rectangle',
            x: boxX + b, y: boxY, w: innerW, h: b,
            texture: TEX + 'slice_tm.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        paintData[this.IDS.SLICE_TR] = {
            type: 'rectangle',
            x: boxX + b + innerW, y: boxY, w: b, h: b,
            texture: TEX + 'slice_tr.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        // Middle row
        paintData[this.IDS.SLICE_ML] = {
            type: 'rectangle',
            x: boxX, y: boxY + b, w: b, h: innerH,
            texture: TEX + 'slice_ml.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        paintData[this.IDS.SLICE_MC] = {
            type: 'rectangle',
            x: boxX + b, y: boxY + b, w: innerW, h: innerH,
            texture: TEX + 'slice_mc.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        paintData[this.IDS.SLICE_MR] = {
            type: 'rectangle',
            x: boxX + b + innerW, y: boxY + b, w: b, h: innerH,
            texture: TEX + 'slice_mr.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        // Bottom row
        paintData[this.IDS.SLICE_BL] = {
            type: 'rectangle',
            x: boxX, y: boxY + b + innerH, w: b, h: b,
            texture: TEX + 'slice_bl.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        paintData[this.IDS.SLICE_BM] = {
            type: 'rectangle',
            x: boxX + b, y: boxY + b + innerH, w: innerW, h: b,
            texture: TEX + 'slice_bm.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };
        paintData[this.IDS.SLICE_BR] = {
            type: 'rectangle',
            x: boxX + b + innerW, y: boxY + b + innerH, w: b, h: b,
            texture: TEX + 'slice_br.png',
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };

        // Title text
        paintData[this.IDS.TITLE] = {
            type: 'text',
            text: title,
            scale: 0.5 * s,
            x: x + 55 * s, y: y + 4 * s,
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };

        // Dialogue text
        paintData[this.IDS.TEXT] = {
            type: 'text',
            textLines: lines,
            scale: 0.5 * s,
            x: x + this.CONFIG.TEXT_X_OFFSET * s, y: y + this.CONFIG.TEXT_Y_OFFSET * s,
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };

        // NPC item icon
        paintData[this.IDS.ICON] = {
            type: 'item',
            item: iconPath,
            w: 42 * s, h: 42 * s,
            x: x + 24 * s, y: y + 24 * s,
            alignX: 'left', alignY: 'top', draw: 'ingame'
        };

        player.paint(paintData);
    },

    wrapText: function(str, limit) {
        var paragraphs = str.split('\n');
        var allLines = [];

        paragraphs.forEach(function(paragraph) {
            var words = paragraph.split(' ');
            var currentLine = '';

            words.forEach(function(word) {
                var nextLine = currentLine ? (currentLine + ' ' + word) : word;
                if (nextLine.length <= limit) {
                    currentLine = nextLine;
                } else {
                    allLines.push(currentLine);
                    currentLine = word;
                }
            });
            if (currentLine) allLines.push(currentLine);
        });

        return allLines;
    }
};

// --- Network Handlers ---
var Dialogue$Minecraft = Java.loadClass("net.minecraft.client.Minecraft");

NetworkEvents.dataReceived("ftb:dialogue_begin", function(event) {
    var data = event.getData();
    Dialogue$Minecraft.getInstance().execute(function() {
        DialogueClient.onBegin(data);
    });
});

NetworkEvents.dataReceived("ftb:dialogue_clear", function(event) {
    Dialogue$Minecraft.getInstance().execute(function() {
        DialogueClient.onClear();
    });
});

// --- Tick Handler ---
ClientEvents.tick(function(event) {
    DialogueClient.update();
});

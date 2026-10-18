global.__pendingDelays = global.__pendingDelays || {};

const $$DELAY_STORE_KEY = "ftb:delay_store";
const $$DELAY_COUNTER_KEY = "ftb:delay_counter";
const $$MAX_DELAY_TICKS = 20 * 60 * 60 * 24;
const $$RELOGIN_BUFFER_TICKS = 40;

function $$loadStore(server) {
  const raw = server.persistentData.getString($$DELAY_STORE_KEY);
  if (!raw) return {};
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    console.warn("[delay] corrupt store, resetting");
    server.persistentData.putString($$DELAY_STORE_KEY, "{}");
    return {};
  }
  if (parsed && typeof parsed === "object") return parsed;
  console.warn("[delay] non-object store, resetting");
  server.persistentData.putString($$DELAY_STORE_KEY, "{}");
  return {};
}

function $$saveStore(server, store) {
  server.persistentData.putString($$DELAY_STORE_KEY, JSON.stringify(store));
}

function $$nextDelayId(server) {
  let counter = server.persistentData.getInt($$DELAY_COUNTER_KEY);
  counter++;
  server.persistentData.putInt($$DELAY_COUNTER_KEY, counter);
  return counter;
}

function $$stripSlash(commandStr) {
  return commandStr.charAt(0) === "/" ? commandStr.slice(1) : commandStr;
}

function $$runAsPlayer(server, player, commandStr) {
  const cmd = $$stripSlash(commandStr);
  const source = player.createCommandSourceStack().withPermission(4).withSuppressedOutput();
  server.getCommands().performPrefixedCommand(source, cmd);
}

function $$dropStored(server, id) {
  const store = $$loadStore(server);
  if (store[id]) {
    delete store[id];
    $$saveStore(server, store);
  }
}

function $$fireDelay(server, id, commandStr, playerUuid) {
  const entry = global.__pendingDelays[id];
  const targetPlayer = playerUuid ? server.getPlayer(playerUuid) : null;
  delete global.__pendingDelays[id];

  if (entry && entry.cancelled) {
    $$dropStored(server, id);
    return;
  }

  if (playerUuid) {
    if (!targetPlayer) {
      return;
    }
    try {
      $$runAsPlayer(server, targetPlayer, commandStr);
    } catch (e) {
      console.error("[delay #" + id + "] command failed: " + commandStr + " — " + e);
    }
  } else {
    try {
      server.runCommandSilent($$stripSlash(commandStr));
    } catch (e) {
      console.error("[delay #" + id + "] command failed: " + commandStr + " — " + e);
    }
  }

  $$dropStored(server, id);
}

function $$armSchedule(server, id, commandStr, delayTick, playerUuid) {
  if (global.__pendingDelays[id]) return;
  global.__pendingDelays[id] = { cancelled: false };

  server.scheduleInTicks(delayTick, function () {
    $$fireDelay(server, id, commandStr, playerUuid);
  });
}

function $$cancelDelay(server, id) {
  const entry = global.__pendingDelays[id];
  const store = $$loadStore(server);
  const onDisk = !!store[id];

  if (!entry && !onDisk) return false;

  if (entry && typeof entry === "object") entry.cancelled = true;

  if (onDisk) {
    delete store[id];
    $$saveStore(server, store);
  }
  return true;
}

function $$scheduleNew(server, displayName, commandStr, delayTick, playerUuid) {
  const id = $$nextDelayId(server);

  const entry = {
    displayName: displayName,
    commandStr: commandStr,
    fireAtMs: Date.now() + delayTick * 50,
  };
  if (playerUuid) entry.playerUuid = playerUuid;

  const store = $$loadStore(server);
  store[id] = entry;
  $$saveStore(server, store);

  $$armSchedule(server, id, commandStr, delayTick, playerUuid);
  return id;
}

ServerEvents.commandRegistry((event) => {
  const Commands = event.getCommands();
  const Arguments = event.getArguments();

  function executeDelay(ctx, unit) {
    const source = ctx.getSource();
    const player = source.getPlayerOrException();
    const server = source.getServer();

    const amount = Arguments.INTEGER.getResult(ctx, "amount");
    const commandStr = Arguments.GREEDY_STRING.getResult(ctx, "command");

    if (amount <= 0) {
      source.sendFailure(Text.of("Amount must be greater than 0.").red());
      return 0;
    }

    const trimmed = commandStr.trim();
    if (trimmed.length === 0) {
      source.sendFailure(Text.of("Command cannot be empty.").red());
      return 0;
    }

    const delayTick = unit === "sec" ? amount * 20 : amount;
    if (delayTick > $$MAX_DELAY_TICKS) {
      source.sendFailure(Text.of("Delay capped at 24h.").red());
      return 0;
    }

    const displayName = player.getName().getString();
    const playerUuid = player.getUuid().toString();
    const id = $$scheduleNew(server, displayName, trimmed, delayTick, playerUuid);
    const displaySec = Math.round((delayTick / 20) * 10) / 10;

    source.sendSystemMessage(
      Text.of("[Delay #" + id + '] "' + trimmed + '" will run in ' + displaySec + "s (" + delayTick + "t).").gray()
    );
    return 1;
  }

  function executeCancel(ctx) {
    const source = ctx.getSource();
    const server = source.getServer();
    const id = Arguments.INTEGER.getResult(ctx, "id");

    if ($$cancelDelay(server, id)) {
      source.sendSystemMessage(Text.of("[Delay #" + id + "] cancelled.").gray());
      return 1;
    }
    source.sendFailure(Text.of("[Delay #" + id + "] not found.").red());
    return 0;
  }

  const cmdArg = Commands.argument("command", Arguments.GREEDY_STRING.create(event));

  const root = Commands.literal("delay")
    .requires((src) => src.hasPermission(2))
    .then(
      Commands.argument("amount", Arguments.INTEGER.create(event))
        .then(Commands.literal("tick").then(cmdArg.executes((ctx) => executeDelay(ctx, "tick"))))
        .then(Commands.literal("sec").then(cmdArg.executes((ctx) => executeDelay(ctx, "sec"))))
    )
    .then(
      Commands.literal("cancel").then(
        Commands.argument("id", Arguments.INTEGER.create(event)).executes((ctx) => executeCancel(ctx))
      )
    );

  event.register(root);
});

ServerEvents.loaded((event) => {
  const server = event.server;
  const store = $$loadStore(server);
  const now = Date.now();
  const cleaned = {};
  let restored = 0;

  for (const id in store) {
    const entry = store[id];
    if (!entry || typeof entry.commandStr !== "string" || typeof entry.fireAtMs !== "number" || isNaN(entry.fireAtMs)) {
      console.warn("[delay] dropping corrupt entry " + id);
      continue;
    }

    cleaned[id] = entry;

    if (global.__pendingDelays[id]) continue;

    const remaining = entry.fireAtMs - now;
    const delayTick = remaining <= 0 ? 1 : Math.ceil(remaining / 50);
    $$armSchedule(server, id, entry.commandStr, delayTick, entry.playerUuid);
    restored++;
  }

  if (Object.keys(cleaned).length !== Object.keys(store).length) {
    $$saveStore(server, cleaned);
  }

  if (restored > 0) {
    console.log("[delay] restored " + restored + " pending delay(s)");
  }
});

PlayerEvents.loggedIn((event) => {
  const player = event.player;
  if (player == null || player.isFake()) return;

  const server = player.server;
  const uuid = player.getUuid().toString();
  const store = $$loadStore(server);

  for (const id in store) {
    const entry = store[id];
    if (entry && entry.playerUuid === uuid && !global.__pendingDelays[id]) {
      $$armSchedule(server, id, entry.commandStr, $$RELOGIN_BUFFER_TICKS, uuid);
    }
  }
});

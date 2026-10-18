// priority: 800
const playerJoin = {
  name: "ftb:playerjoin",
  displayName: "Player Join",
  description: "",
  chance: 0.1,
  stage: null,
  disableStage: null,

  size: -1,
  minDistance: 1,
  maxDistance: 24,

  checkBlocks: ["minecraft:air"],
  requireBlockBelow: false,

  /**
   * Executes the event.
   * In here you can do almost everything you want.
   *
   * @param {Event} event - The event object. limited use when triggering the event with the force command
   * @param {Player} player - The player object.
   * @param {Location} location - The location object.
   */
  execute(event, player, location) {
    let server = Utils.server;

    let randomName = randomNames[Math.floor(Math.random() * randomNames.length)];

    let randomLine;
    switch (randomName) {
      case "Herobrine":
        randomLine = "I'm watching you...";
        break;
      case "Dinnerbone":
        randomLine = "I'm upside down!";
        break;
      case "Slowpoke":
        randomLine = "Uhhh...";
        break;
      case "Spiderman":
        randomLine = "I'm your friendly neighborhood Spiderman!";
        break;
      case "BuzzLightyear":
        randomLine = "To infinity and beyond!";
        break;
      default:
        randomLine = randomLines[Math.floor(Math.random() * randomLines.length)];
    }

    server.tell(Text.of(`${randomName} joined the game`).yellow());
    Utils.server.scheduleInTicks(60, (_) => {
      server.tell(`<${randomName}> ${randomLine}`);
    });

    Utils.server.scheduleInTicks(120, (_) => {
      server.tell(Text.of(`${randomName} left the game`).yellow());
    });
    player.persistentData.timer = 11000; //lower their event timer instead of a full reset
  },
};

const randomLines = [
  "Wait... This isn't the right server",
  "Woops! Wrong server!",
  "I'm lost, can someone help me?",
  "I'm not supposed to be here",
];

const randomNames = [
  "TheonlyTazz",
  "Saereth",
  "Aaronhowser1",
  "Pikminman",
  "Slowpoke",
  "ErrorMikey",
  "Dinnerbone",
  "Herobrine",
  "Spiderman",
  "BuzzLightyear",
];

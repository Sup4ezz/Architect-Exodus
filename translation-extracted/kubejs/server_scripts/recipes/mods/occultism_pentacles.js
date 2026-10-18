const OccultismRitualTypes = {
  // --- Crafting ---
  "craft": "occultism:craft",
  "craft with spirit name": "occultism:craft_with_spirit_name",
  "craft spirit name": "occultism:craft_with_spirit_name",
  "craft miner spirit": "occultism:craft_miner_spirit",

  // --- Summoning ---
  "summon": "occultism:summon",
  "summon spirit with job": "occultism:summon_spirit_with_job",
  "summon spirit job": "occultism:summon_spirit_with_job",
  "summon tamed spirit": "occultism:summon_tamed",
  "possess entity": "occultism:summon",

  // --- Wild / Special Summoning ---
  "summon wild hunt": "occultism:summon_wild_hunt",
};

const OccultismPentacles = {
  // --- Eziveus (Crafting Pentacles) ---
  "eziveus spectral compulsion": "occultism:craft_foliot",
  "eziveus' spectral compulsion": "occultism:craft_foliot",
  "spectral compulsion": "occultism:craft_foliot",

  "strigeor": "occultism:craft_djinni",
  "eziveus' inverted purification": "occultism:craft_djinni",
  "inverted purification": "occultism:craft_djinni",

  "eziveus intervention": "occultism:craft_afrit",
  "eziveus' intervention": "occultism:craft_afrit",
  "intervention": "occultism:craft_afrit",

  "eziveus interdimensional extraction": "occultism:craft_marid",
  "eziveus' interdimensional extraction": "occultism:craft_marid",
  "interdimensional extraction": "occultism:craft_marid",

  // --- Abras (Summoning Pentacles) ---
  "abras conjure glyph": "occultism:summon_foliot",
  "abras' conjure glyph": "occultism:summon_foliot",
  "conjure glyph": "occultism:summon_foliot",
  "aviars circle": "occultism:summon_foliot",

  "abras ascension glyph": "occultism:summon_djinni",
  "abras' ascension glyph": "occultism:summon_djinni",
  "ascension glyph": "occultism:summon_djinni",

  "abras infernal reclamation": "occultism:summon_afrit",
  "abras' infernal reclamation": "occultism:summon_afrit",
  "infernal reclamation": "occultism:summon_afrit",

  "abras great binding": "occultism:summon_marid",
  "abras' great binding": "occultism:summon_marid",
  "great binding": "occultism:summon_marid",

  // --- Mafit (Possession Pentacles) ---
  "mafit lesser possession": "occultism:possess_foliot",
  "mafit's lesser possession": "occultism:possess_foliot",
  "lesser possession": "occultism:possess_foliot",

  "mafit greater possession": "occultism:possess_djinni",
  "mafit's greater possession": "occultism:possess_djinni",
  "greater possession": "occultism:possess_djinni",

  "mafit infernal possession": "occultism:possess_afrit",
  "mafit's infernal possession": "occultism:possess_afrit",
  "infernal possession": "occultism:possess_afrit",

  "mafit perfected possession": "occultism:possess_marid",
  "mafit's perfected possession": "occultism:possess_marid",
  "perfected possession": "occultism:possess_marid",

  // --- Additional Pentacles ---
  "eziveus restored purification": "occultism:purify",
  "eziveus' restored purification": "occultism:purify",
  "restored purification": "occultism:purify",

  "abras hunt call": "occultism:summon_wild_afrit",
  "abras' hunt call": "occultism:summon_wild_afrit",
  "hunt call": "occultism:summon_wild_afrit",

  "abras wild choir": "occultism:summon_wild_greater_spirit",
  "abras' wild choir": "occultism:summon_wild_greater_spirit",
  "wild choir": "occultism:summon_wild_greater_spirit",

  // custom pentacles
  "helheim summon": "occultism:summon_helheim_foliot",
  "helheim": "occultism:summon_helheim_foliot",
  "niflheim summon": "occultism:summon_niflheim_djinni",
  "niflheim": "occultism:summon_niflheim_djinni",
  "muspelheim summon": "occultism:summon_muspelheim_afrit",
  "muspelheim": "occultism:summon_muspelheim_afrit",
  "alfheim summon": "occultism:summon_alfheim_marid",
  "alfheim": "occultism:summon_alfheim_marid",
};

const default_mapping = {
  0: { type: "modonomicon:block", block: "occultism:golden_sacrificial_bowl" },
  W: { type: "modonomicon:block", block: "occultism:chalk_glyph_white" },
  G: { type: "modonomicon:block", block: "occultism:chalk_glyph_gold" },
  R: { type: "modonomicon:block", block: "occultism:chalk_glyph_red" },
  P: { type: "modonomicon:block", block: "occultism:chalk_glyph_purple" },
};

const customPentacles = [
  {
    name: "summon_helheim_foliot",

    description: "pentacles.summon_helheim_foliot.description",
    mapping: Object.assign({}, default_mapping),
    x_coordinate: -6,
    y_coordinate: 4,
    parent: "pentacles_overview",
    pattern: [
      [
        "_________W_",
        "_W_______W_",
        "_W______WW_",
        "_W_____W_W_",
        "_W____W__W_",
        "_W___0___W_",
        "_W__W____W_",
        "_W_W_____W_",
        "_WW______W_",
        "_W_______W_",
        "_W_________",
      ],
    ],
  },
  {
    name: "summon_niflheim_djinni",

    description: "pentacles.summon_niflheim_djinni.description",
    mapping: Object.assign({}, default_mapping),
    x_coordinate: -4,
    y_coordinate: 4,
    parent_name: "summon_helheim_foliot",
    parent: "summon_helheim_foliot",
    pattern: [
      [
        "_____G_____",
        "_____G_____",
        "_____G_____",
        "_____G_____",
        "____GG__G__",
        "___G_0_G___",
        "__G__GG____",
        "_____G_____",
        "_____G_____",
        "_____G_____",
        "_____G_____",
      ],
    ],
  },
  {
    name: "summon_muspelheim_afrit",

    description: "pentacles.summon_muspelheim_afrit.description",
    mapping: Object.assign({}, default_mapping),
    x_coordinate: -2,
    y_coordinate: 4,
    parent: "summon_niflheim_djinni",
    pattern: [
      [
        "___________",
        "__P_____P__",
        "__PP___PP__",
        "__P_P_P_P__",
        "__P__0__P__",
        "__P_P_P_P__",
        "__PP___PP__",
        "__P_____P__",
        "__P_____P__",
        "__P_____P__",
        "__P_____P__",
      ],
    ],
  },
  {
    name: "summon_alfheim_marid",

    description: "pentacles.summon_alfheim_marid.description",
    mapping: Object.assign({}, default_mapping),
    x_coordinate: 0,
    y_coordinate: 4,
    parent: "summon_muspelheim_afrit",
    pattern: [
      [
        "___________",
        "___R_____W_",
        "__R ____W__",
        "_R_P___G___",
        "__R_P_0_G__",
        "___R_P___G_",
        "____P___G__",
        "___P___G___",
        "________W__",
        "_________W_",
        "___________",
      ],
    ],
  },
];

function createPentacleEntry(ritual_name, ritual_description, x_coord, y_coord, parent_id) {
  let entry = {
    category: "occultism:pentacles",
    description: ritual_description,
    icon: "occultism:pentacle",
    hide_while_locked: false,
    x: x_coord,
    y: y_coord,
    name: `pentacles.${ritual_name}.name`,
    pages: [
      {
        type: "modonomicon:text",
        show_title_separator: true,
        title: `pentacles.${ritual_name}.pgTitle`,
        text: `pentacles.${ritual_name}.desc`,
      },
      {
        type: "modonomicon:multiblock",
        multiblock_id: `occultism:${ritual_name}`,
        show_visualize_button: true,
        visualize_label: "pentacles.multiblock.visualize_label",
        text: "pentacles.multiblock.text",
      },
    ],
  };

  if (parent_id) {
    entry.parents = [
      {
        entry: `occultism:pentacles/${parent_id}`,
      },
    ];
  }


  return entry;
}

ServerEvents.highPriorityData((event) => {
  customPentacles.forEach((entry) => {
    let ground = [];

    entry.type = "modonomicon:dense";

    let glyphLayer = entry.pattern[0];

    for (let i = 0; i < glyphLayer.length; i++) {
      let row = "";
      for (let j = 0; j < glyphLayer[i].length; j++) {
        row += (i + j) % 2 === 0 ? "*" : "+";
      }
      ground.push(row);
    }

    entry.pattern.push(ground);
    entry.mapping["*"] = { type: "modonomicon:display", display: "occultism:otherstone" };
    entry.mapping["+"] = { type: "modonomicon:display", display: "minecraft:stone" };

    let entryName = `occultism:modonomicon/multiblocks/${entry.name}`;
    event.addJson(entryName, entry);

    let modonomiconEntry = createPentacleEntry(entry.name, entry.description, entry.x_coordinate, entry.y_coordinate, entry.parent);
    event.addJson(
      `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${entry.name}`,
      modonomiconEntry
    );
  });

  console.info("+++++++Done Creating Pentacle ++++++++++++");
});

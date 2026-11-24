const addBlocks = [
  {blockID: "wrought_iron_block", hardness: 5.0, resistance: 6.0, soundType: "metal"},
  {blockID: "rotten_flesh_block", hardness: 0.5, resistance: 0.5, soundType: "mud"},
  // Trading Hall Workstations
  {blockID: "armorer_station", unbreakable: true, noDrops: true, soundType: "metal"},
  {blockID: "butcher_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "cartographer_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "cleric_station", unbreakable: true, noDrops: true, soundType: "metal", cutout: true},
  {blockID: "farmer_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "fisherman_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "fletcher_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "leatherworker_station", unbreakable: true, noDrops: true, soundType: "metal", cutout: true},
  {blockID: "librarian_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "mason_station", unbreakable: true, noDrops: true, soundType: "stone", cutout: true},
  {blockID: "shepherd_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "toolsmith_station", unbreakable: true, noDrops: true, soundType: "wood"},
  {blockID: "weaponsmith_station", unbreakable: true, noDrops: true, soundType: "stone",cutout: true},
  {blockID: "fluix_researcher_station", unbreakable: true, noDrops: true, soundType: "stone", cutout: true},
  {blockID: "scribe_station", unbreakable: true, noDrops: true, soundType: "stone", cutout: true},
  {blockID: "shady_wizard_station", unbreakable: true, noDrops: true, soundType: "stone", cutout: true},
]



StartupEvents.registry("block", (event) => {
  addBlocks.forEach((block) => {
    let newBlock = event.create(`ftb:${block.blockID}`)

    if (block.hardness !== undefined) newBlock = newBlock.hardness(block.hardness)
    if (block.resistance !== undefined) newBlock = newBlock.resistance(block.resistance)
    if (block.lightLevel !== undefined) newBlock = newBlock.lightLevel(block.lightLevel)
    if (block.mapColor !== undefined) newBlock = newBlock.mapColor(block.mapColor)
    if (block.renderType !== undefined) newBlock = newBlock.renderType(block.renderType)
    if (block.noDrops !== undefined) newBlock = newBlock.noDrops()
    if (block.color !== undefined) newBlock = newBlock.color(0, block.color)
    if (block.soundType !== undefined) newBlock = newBlock.soundType(block.soundType)
    if (block.unbreakable) newBlock = newBlock.unbreakable()
    if(block.cutout) newBlock = newBlock.defaultCutout()
  });
});
StartupEvents.registry("fluid", (event) => {
  event
    .create("ftb:molten_cthonic_gold")
    .thickTexture(0xfbbc2b)
    .bucketColor(0xfbbc2b)
    .stillTexture("tconstruct:fluid/molten/ore/gold/still")
    .flowingTexture("tconstruct:fluid/molten/ore/gold/flowing");

  event
    .create("ftb:molten_black_steel")
    .thickTexture(0x222021)
    .bucketColor(0x222021)
    .stillTexture("tconstruct:fluid/molten/alloy/netherite/still")
    .flowingTexture("tconstruct:fluid/molten/alloy/netherite/flowing");

  event
    .create("ftb:molten_sky_steel")
    .thickTexture(0x989898)
    .bucketColor(0x989898)
    .stillTexture("tconstruct:fluid/molten/alloy/netherite/still")
    .flowingTexture("tconstruct:fluid/molten/alloy/netherite/flowing");

  event
    .create("ftb:molten_iesnium")
    .thickTexture(0x55a5b7)
    .bucketColor(0x55a5b7)
    .stillTexture("tconstruct:fluid/molten/ore/diamond/still")
    .flowingTexture("tconstruct:fluid/molten/ore/diamond/flowing");

  event
    .create("ftb:molten_wrought_iron")
    .thickTexture(0xa1a1a1)
    .bucketColor(0xa1a1a1)
    .stillTexture("tconstruct:fluid/molten/ore/quartz/still")
    .flowingTexture("tconstruct:fluid/molten/ore/quartz/flowing");

  event
    .create("ftb:molten_dark_steel")
    .thickTexture(0x585858)
    .bucketColor(0x585858)
    .stillTexture("tconstruct:fluid/molten/ore/quartz/still")
    .flowingTexture("tconstruct:fluid/molten/ore/quartz/flowing");

  event
    .create("ftb:molten_muspelloy")
    .thickTexture(0xD63A11)
    .bucketColor(0xD63A11)
    .stillTexture("tconstruct:fluid/molten/ore/gold/still")
    .flowingTexture("tconstruct:fluid/molten/ore/gold/flowing");

  event
    .create("ftb:cryotheum")
    .thickTexture(0xA1F6FF)
    .bucketColor(0xA1F6FF)
    .stillTexture(`ftb:block/fluid/cryotheum_still`)
    .flowingTexture(`ftb:block/fluid/cryotheum_flowing`);

  event
    .create("ftb:pyrotheum")
    .thickTexture(0xFFAE30)
    .bucketColor(0xFFAE30)
    .stillTexture(`ftb:block/fluid/pyrotheum_still`)
    .flowingTexture(`ftb:block/fluid/pyrotheum_flowing`);

  event
    .create("ftb:arcane_resin")
    .thickTexture(0x821A00)
    .bucketColor(0x821A00)
    .stillTexture(`ftb:block/fluid/arcane_resin_still`)
    .flowingTexture(`ftb:block/fluid/arcane_resin_flowing`);

  event
    .create("ftb:fire_dragonblood")
    .thinTexture(0xF55727)
    .bucketColor(0xF55727)

  event
    .create("ftb:ice_dragonblood")
    .thinTexture(0x27F2F5)
    .bucketColor(0x27F2F5)

  event
    .create("ftb:lightning_dragonblood")
    .thinTexture(0xBB27F5)
    .bucketColor(0xBB27F5)

  event
    .create("ftb:crimson_pyrotheum")
    .thickTexture(0xFF4C30)
    .bucketColor(0xFF4C30)

  event
    .create("ftb:warped_cryotheum")
    .thinTexture(0x00EBBC)
    .bucketColor(0x00EBBC)
    
    event
    .create("ftb:nether_sap")
    .thickTexture(0xBD4C00)
    .bucketColor(0xBD4C00)
    .stillTexture(`ftb:block/fluid/nether_sap_still`)
    .flowingTexture(`ftb:block/fluid/nether_sap_flowing`)
    
    event
    .create("ftb:underworld_solution")
    .thinTexture(0xFFC882)
    .bucketColor(0xFFC882)
    
    event
    .create("ftb:ghastlycerin")
    .thinTexture(0xA5FF96)
    .bucketColor(0xA5FF96)
    
    event
    .create("ftb:unstable_solution")
    .thinTexture(0xFF3867)
    .bucketColor(0xFF3867)
    .stillTexture(`ftb:block/fluid/unstable_solution_still`)
    .flowingTexture(`ftb:block/fluid/unstable_solution_flowing`)
    
    event
    .create("ftb:abyssal_dew")
    .thickTexture(0x5E009E)
    .bucketColor(0x5E009E)
    .stillTexture(`ftb:block/fluid/abyssal_dew_still`)
    .flowingTexture(`ftb:block/fluid/abyssal_dew_flowing`)

  event
    .create("ftb:molten_gaia_essence")
    .thickTexture(0xFFFFFF)
    .bucketColor(0xD87DF5)
    .stillTexture(`ftb:block/fluid/molten_gaia_essence_still`)
    .flowingTexture(`ftb:block/fluid/molten_gaia_essence_flowing`);
});

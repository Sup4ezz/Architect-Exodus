ServerEvents.tags("fluid", (event) => {
  // Non-FTB fluid tag corrections
  event.add("forge:molten_cinderslime", "tconstruct:molten_cinderslime");

  // FTB custom fluid tags
  event.add("forge:molten_black_steel", "ftb:molten_black_steel");
  event.add("forge:molten_dark_steel", "ftb:molten_dark_steel");
  event.add("forge:molten_sky_steel", "ftb:molten_sky_steel");
  event.add("forge:molten_iesnium", "ftb:molten_iesnium");
  event.add("forge:molten_wrought_iron", "ftb:molten_wrought_iron");
  event.add("forge:molten_muspelloy", "ftb:molten_muspelloy");
  event.add("forge:molten_gaia_essence", "ftb:molten_gaia_essence");
  event.add("forge:menril", "integrateddynamics:menril_resin");
  event.add("forge:powdered_snow", "tconstruct:powdered_snow");
  event.add("forge:cryotheum", "ftb:cryotheum");
  event.add("forge:pyrotheum", "ftb:pyrotheum");
  event.add("forge:crimson_pyrotheum", "ftb:crimson_pyrotheum");
  event.add("forge:dragonblood/fire", "ftb:fire_dragonblood");
  event.add("forge:dragonblood/ice", "ftb:ice_dragonblood");
  event.add("forge:dragonblood/lightning", "ftb:lightning_dragonblood");

  event.add("tconstruct:tooltips/metal", [
    "#forge:molten_dark_steel",
    "#forge:molten_black_steel",
    "#forge:molten_sky_steel",
    "#forge:molten_iesnium",
    "#forge:molten_wrought_iron",
    "#forge:molten_muspelloy",
    "#forge:molten_gaia_essence",
  ]);
});

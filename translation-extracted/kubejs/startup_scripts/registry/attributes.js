const ATTRIBUTE_IDS = [
  "lh_spirit_shield",
  "lh_soul_heal",
  "lh_spectral_phase",
  "lh_spirit_release",
  "lh_frost_aura",
  "lh_frost_hex",
  "lh_shockwave",
  "lh_serpents_gift",
  "lh_tidal_pull",
  "lh_inferno_armor",
  "lh_heat_surge",
  "lh_fire_ward",
  "lh_shadow_step",
  "lh_eclipse_strike",
  "lh_blood_needles",
  "lh_soul_devour",
  "lh_spirit_attack",
  "lh_death_defiance",
];

StartupEvents.registry("attribute", (event) => {
  ATTRIBUTE_IDS.forEach((id) => {
    event.createCustom(`ftb:${id}`, () =>
      new Minecraft$RangedAttribute(`attribute.name.ftb.${id}`, 0.0, 0.0, 1024.0).setSyncable(true)
    );
  });
});

EntityJSEvents.attributes((event) => {
  event.modify("minecraft:player", (attribute) => {
    ATTRIBUTE_IDS.forEach((id) => {
      attribute.add(`ftb:${id}`, 0);
    });
  });
});

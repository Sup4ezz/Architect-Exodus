const hideItems = [
  "cataclysm:cursed_eye",
  "cataclysm:mech_eye",
  "cataclysm:void_eye",
  "sophisticatedbackpacks:pickup_upgrade",
  "sophisticatedbackpacks:advanced_pickup_upgrade",
  "sophisticatedbackpacks:magnet_upgrade",
  "sophisticatedbackpacks:advanced_magnet_upgrade",
  "sophisticatedstorage:pickup_upgrade",
  "sophisticatedstorage:advanced_pickup_upgrade",
  "sophisticatedstorage:magnet_upgrade",
  "sophisticatedstorage:advanced_magnet_upgrade",
  "apotheosis:seashelf",
  "apotheosis:infused_seashelf",
  "apotheosis:crystal_seashelf",
  "apotheosis:heart_seashelf",
  "ars_nouveau:glyph_break",
  "ars_nouveau:rewind",
  "rftoolsbase:dimensionalshard_overworld",
  "rftoolsbase:dimensionalshard_nether",
  "rftoolsbase:dimensionalshard_end",
  "create:copper_backtank_placeable",
  "create:netherite_backtank_placeable",
];

const georeBuds = {
  resources: [
  "coal", "copper", "diamond", "emerald", "lead", "aluminum", 
  "monazite", "black_quartz", "uraninite", "zinc", "topaz",
  "sapphire", "ruby", "ancient_debris", "redstone", "quartz",
  "lapis", "iron", "gold", "nickel", "osmium", "platinum", 
  "silver", "tin", "tungsten", "uranium",
  "allthemodium", "unobtainium", "vibranium"
  ],
  size: ["small", "medium", "large"]
}
georeBuds.resources.forEach((resource) => {
  georeBuds.size.forEach((size) => {
    hideItems.push(`geore:${size}_${resource}_bud`)
  })
});

JEIEvents.hideItems((event) => {
  hideItems.forEach((item) => {
    event.hide(item);
  });
});

JEIEvents.removeCategories((event) => {
  event.remove("create:automatic_brewing");
  event.remove("create:automatic_packing");
  event.remove("create:automatic_shaped");
  event.remove("create:automatic_shapeless");
  event.remove("alexscaves:nuclear_furnace");
});



ServerEvents.tags("entity_type", (event) => {
  event.add("ftb:arena_boss", [
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
  ]);

  event.add("shrink:no_shrink", [
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
    "minecraft:villager",
  ]);

  event.add("ftbchunks:entity_interact_whitelist", ["minecraft:villager"]);

  event.add("minecraft:powder_snow_walkable_mobs", ["minecraft:stray", "irons_spellbooks:necromancer"]);

  event.add("apothic_spawners:blacklisted_from_spawners", [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
    "minecraft:villager",
  ]);
});

ServerEvents.tags("entity_type", (event) => {
  event.add("enderio:soul_vial_blacklist", [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
    "minecraft:villager",
  ]);

  event.add("enderio:spawner_blacklist", [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
    "minecraft:villager",
  ]);

  event.add("occultism:soul_gem_deny_list", [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
  ]);

  event.add("animus:disallow_capturing", [
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir"
  ]);

  event.add("sophisticatedbackpacks:mob_catcher_blacklist", [
    "#apothic_spawners:blacklisted_from_spawners",
    "#enderio:spawner_blacklist",
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
    "minecraft:villager"
  ]);

  event.add("tconstruct:piggybackpack_blacklist", [
    "#apothic_spawners:blacklisted_from_spawners",
    "#enderio:spawner_blacklist",
    "iceandfire:fire_dragon",
    "iceandfire:ice_dragon",
    "iceandfire:lightning_dragon",
    "ftbragnarok:hel",
    "ftbragnarok:hati",
    "ftbragnarok:skoll",
    "ftbragnarok:jormungandr",
    "ftbragnarok:nidhogg",
    "ftbragnarok:surtr",
    "ftbragnarok:ymir",
    "minecraft:villager"
  ]);
});

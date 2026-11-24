EntityJSEvents.attributes((event) => {
  event.modify("minecraft:enderman", (attribute) => {
    attribute.add("minecraft:generic.attack_damage", 3.0);
  });
});

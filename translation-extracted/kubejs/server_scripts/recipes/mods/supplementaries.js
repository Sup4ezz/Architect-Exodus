ServerEvents.recipes((event) => {
  event
    .shaped("supplementaries:sconce", ["   ", " N ", "NTN"], {
      N: "minecraft:iron_nugget",
      T: "minecraft:torch",
    })
    .id("ftb:supplementaries/sconce");

  event
    .shaped("supplementaries:sconce_soul", [" N ", "NSN", "   "], {
      N: "minecraft:iron_nugget",
      S: "minecraft:soul_torch",
    })
    .id("ftb:supplementaries/sconce_soul");

  event.campfireCooking("supplementaries:ash", "minecraft:charcoal").id("ftb:supplementaries/ash");
});

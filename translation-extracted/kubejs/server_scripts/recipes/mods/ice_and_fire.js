function bottleToFluid (event, bottle, blood_type) {

  let fluidTag = `forge:dragonblood/${blood_type}`
  let fluid = `ftb:${blood_type}_dragonblood`

  event.custom({
    type: "embers:melting",
    input: {
      item: bottle
    },
    output: {
      amount: 250,
      tag: fluidTag
    }
  }).id(`ftb:embers/melting/dragonblood/${fluidTag.split(":")[1].split("/")[1]}`);

  event.custom({
    type: "create:emptying",
    ingredients: [
      {
        item: bottle
      }
    ],
    results: [
      {
        item: "minecraft:glass_bottle"
      },
      {
        amount: 250,
        fluid: fluid
      }
    ]
  }).id(`ftb:create/emptying/dragonblood/${fluidTag.split(":")[1].split("/")[1]}`);

  event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: bottle
    },
    result: [
      {
        item: "minecraft:glass_bottle"
      },
      {
        fluid: fluid,
        amount: 250
      }
    ],
    energy: 400
  }).id(`ftb:thermal/centrifuge/dragonblood/${fluidTag.split(":")[1].split("/")[1]}`);

};

ServerEvents.recipes((event) => {

  event
    .custom({
      type: "lychee:item_inside",
      item_in: [
        {
          tag: "minecraft:flowers",
        },
      ],
      block_in: {
        blocks: ["minecraft:powder_snow"],
      },
      post: [
        {
          type: "drop_item",
          item: "iceandfire:frost_lily",
        },
        {
          type: "place",
          block: "*",
        },
      ],
    })
    .id("ftb:lychee/item_inside/iceandfire/frost_lily");
    
    //Converting Dragonblood Bottles into actual Fluids.

    const dragon_types = [
      "fire",
      "ice",
      "lightning"
    ];

    dragon_types.forEach(blood_type => {
      bottleToFluid(event, `iceandfire:${blood_type}_dragon_blood`, blood_type);
    });

});

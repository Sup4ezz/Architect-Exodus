// priority: 50

ServerEvents.recipes((event) => {
  global.fluids.forEach((fluid) => {
    if (fluid.startsWith("thermal_extra")) {
      let parts = fluid.split(":");
      let fluidName = parts[1].split("_")[1];
      event.remove(`thermal_extra:machine/crucible/raw_${fluidName}`);
      event.remove(`thermal_extra:machine/crucible/raw_${fluidName}_from_chunk`);
    }
  });
});

ServerEvents.recipes((event) => {
  global.fluid_amounts.forEach((recipe) => {
    global.resources_ores_ingot.forEach((mod) => {
      mod.materials.forEach((material) => {
        if (material === "steel") {
          return;
        }

        if (material === "tin") {
          return
        }
        event
          .custom({
            type: "thermal:crucible",
            energy: 8000,
            ingredients: [
              {
                count: 1,
                tag: `${global.tag_prefix}:${recipe[0]}/${material}`,
              },
            ],
            result: [
              {
                amount: recipe[1],
                fluid: getFluidType(material),
              },
            ],
          })
          .id(`ftb:thermal/crucible/${recipe[0]}/${material}`);
      });
    });
  });

  global.gears.forEach((material) => {

    let input = `forge:ingots/${material}`
    if (material === "diamond") {
      input = `forge:gems/${material}`
    }

    event
      .custom({
        type: "thermal:press",
        energy: 4000,
        ingredients: [
          {
            count: 4,
            tag: input,
          },
          {
            item: "thermal:press_gear_die",
          },
        ],
        result: [
          {
            item: `ftbmaterials:${material}_gear`,
          },
        ],
      })
      .id(`ftb:thermal/press/gear/${material}`);
  });
  
  global.plates.forEach((material) => {
    event
      .custom({
        type: "thermal:press",
        energy: 3000,
        ingredients: [
          {
            tag: `forge:ingots/${material}`,
          },
        ],
        result: [
          {
            item: `ftbmaterials:${material}_plate`,
          },
        ],
      })
      .id(`ftb:thermal_extra/press/${material}_plate`);
  });
});

// priority: 50

// Removes Fluid Recipes
ServerEvents.recipes((event) => {
  const items = ["nuggets", "plates", "storage_blocks", "gears", "ingots"];
  const specialItems = ["ores", "raw_materials"];

  global.fluids.forEach((fluid) => {
    if (fluid.startsWith("embers")) {
      let parts = fluid.split(":");
      let fluidName = parts[1].split("_")[1];
      let convertedMaterial = convertMaterial(fluidName);
      let specialPath = `${fluidName}_${convertedMaterial}`;

      items.forEach((type) => {
        event.remove({ id: `embers:melting/${type}/${fluidName}` });
      });

      specialItems.forEach((type) => {
        event.remove({ id: `embers:melting/${type}/${specialPath}` });
      });

      event.remove({ id: `embers:melting/storage_blocks/raw_${specialPath}` });
    }
  });
});

// Adds Fluid Recipes using (global.fluid_mod)
ServerEvents.recipes((event) => {
  global.fluid_amounts.forEach((recipe) => {
    global.resources_ores_ingot.forEach((mod) => {
      mod.materials.forEach((material) => {

        if (material === "steel") {
          return
        }

        if (material === "tin") {
          return;
        }

        let data = {
          type: "embers:melting",
          input: {
            tag: `${global.tag_prefix}:${recipe[0]}/${material}`,
          },
          output: {
            amount: recipe[1],
            fluid: getFluidType(material),
          },
        };

        if (recipe[2] === true) {
          let convertedMaterial = convertMaterial(material);
          if (convertedMaterial) {
            data.bonus = {
              amount: recipe[3],
              fluid: getFluidType(convertedMaterial),
            };
          }
        }

        event.custom(data).id(`ftb:embers/mixer/${recipe[0]}/${material}`);
      });
    });
    event.remove("ftb:embers/mixer/plates/tin")
  });

  event.custom({
    type: "embers:stamping",
    fluid: {
      amount: 90,
      tag: "forge:molten_lumium",
    },
    output: {
      tag: "forge:plates/lumium",
    },
    stamp: {
      item: "embers:plate_stamp",
    },
  });
});

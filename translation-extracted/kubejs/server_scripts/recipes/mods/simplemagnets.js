ServerEvents.recipes( (event) => {
  event
    .shaped("simplemagnets:basic_demagnetization_coil", [" A ", "BCB", "CCC"], {
      A: "projecte:medium_covalence_dust",
      B: "#forge:dusts/redstone",
      C: "#forge:ingots/iron"
    }).id("ftb:simplemagnets/basic_demagnetization_coil")

  event
    .shaped("simplemagnets:basicmagnet", ["AAB", "AC ", "AAD"], {
      A: "#forge:ingots/iron",
      B: "projecte:medium_covalence_dust",
      C: "#forge:ender_pearls",
      D: "#forge:dusts/redstone"
    }).id("ftb:simplemagnets/basicmagnet")
})
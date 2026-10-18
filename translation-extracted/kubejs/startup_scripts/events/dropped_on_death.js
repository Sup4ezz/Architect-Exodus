(function () {
  if (!Platform.isLoaded("curios") || !Platform.isLoaded("draconicevolution")) return;

  const $DropRule = Java.loadClass("top.theillusivec4.curios.api.type.capability.ICurio$DropRule");
  const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");

  const keptIds = [
    "draconicevolution:wyvern_chestpiece",
    "draconicevolution:draconic_chestpiece",
    "draconicevolution:chaotic_chestpiece",
  ];

  ForgeEvents.onEvent("top.theillusivec4.curios.api.event.DropRulesEvent", (event) => {
    event.addOverride((stack) => {
      const key = $ForgeRegistries.ITEMS.getKey(stack.getItem());
      return key !== null && keptIds.indexOf(key.toString()) !== -1;
    }, $DropRule.ALWAYS_KEEP);
  });
})();

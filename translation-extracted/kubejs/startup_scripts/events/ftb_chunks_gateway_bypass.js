// priority: 1000

const $$RightClickBlockEvent = Java.loadClass(
  "net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock"
);
const $$ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");
const $$ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $$EventResult = Java.loadClass("net.minecraftforge.eventbus.api.Event$Result");

const $$GatePearlItemId = new $$ResourceLocation("gateways", "gate_pearl");
const $$PreludeGatewayNbtValue = "gateways:prelude_to_ragnarok";
const $$AsgardDimensionId = "ftb:asgard";
const $$MinDistanceFromOrigin = 100;

Forge$MinecraftForge.EVENT_BUS.addListener(Forge$EventPriority.LOWEST, true, $$RightClickBlockEvent, function (event) {
  if (event.getLevel().isClientSide()) return;
  const player = event.getEntity();

  const stack = player.getItemInHand(event.getHand());
  if (stack.isEmpty()) return;

  const itemId = $$ForgeRegistries.ITEMS.getKey(stack.getItem());
  if (itemId == null || !itemId.equals($$GatePearlItemId)) return;

  const nbt = stack.nbt;
  if (nbt == null) return;
  if (String(nbt.getString("gateway")) !== $$PreludeGatewayNbtValue) return;

  if (String(player.getLevel().getDimension()) !== $$AsgardDimensionId) {
    player.tell(Text.translate("ftb.prelude_gateway.wrong_dim").red());
    event.setCanceled(true);
    event.setUseBlock($$EventResult.DENY);
    event.setUseItem($$EventResult.DENY);
    return;
  }

  const distFromOrigin = Math.sqrt(player.getX() * player.getX() + player.getZ() * player.getZ());
  if (distFromOrigin < $$MinDistanceFromOrigin) {
    player.tell(Text.translate("ftb.prelude_gateway.too_close").red());
    event.setCanceled(true);
    event.setUseBlock($$EventResult.DENY);
    event.setUseItem($$EventResult.DENY);
    return;
  }

  if (event.isCanceled()) event.setCanceled(false);
  event.setUseBlock($$EventResult.DEFAULT);
  event.setUseItem($$EventResult.DEFAULT);
  player.tell(Text.translate("ftb.prelude_gateway.ragnarok").green());
});

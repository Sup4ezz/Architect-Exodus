// priority: 100000

const Minecraft$GameRules = Java.loadClass("net.minecraft.world.level.GameRules");
const Minecraft$Player = Java.loadClass("net.minecraft.world.entity.player.Player")
const Minecraft$Mth = Java.loadClass("net.minecraft.util.Mth")
const Minecraft$BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
const Minecraft$ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const Minecraft$Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const Minecraft$ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos");
const Minecraft$TicketType = Java.loadClass("net.minecraft.server.level.TicketType");
const Minecraft$RangedAttribute = Java.loadClass('net.minecraft.world.entity.ai.attributes.RangedAttribute')
const Minecraft$MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
const Minecraft$AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier");
const Minecraft$AABB = Java.loadClass("net.minecraft.world.phys.AABB");

// const Minecraft$Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");
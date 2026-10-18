// priority: 100000

const Minecraft$GameRules = Java.loadClass("net.minecraft.world.level.GameRules");
const Minecraft$Player = Java.loadClass("net.minecraft.world.entity.player.Player")
const Minecraft$Mth = Java.loadClass("net.minecraft.util.Mth")
const Minecraft$BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
const Minecraft$ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const Minecraft$ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos");
const Minecraft$TicketType = Java.loadClass("net.minecraft.server.level.TicketType");
const Minecraft$LightningBolt = Java.loadClass("net.minecraft.world.entity.LightningBolt");
const Minecraft$EntityType = Java.loadClass("net.minecraft.world.entity.EntityType");
const Minecraft$PoiTypes = Java.loadClass("net.minecraft.world.entity.ai.village.poi.PoiTypes");
const Minecraft$BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
const Minecraft$AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier");
const Minecraft$Mob = Java.loadClass("net.minecraft.world.entity.Mob");
const Minecraft$BoundingBox = Java.loadClass("net.minecraft.world.level.levelgen.structure.BoundingBox");
const Minecraft$QuartPos = Java.loadClass("net.minecraft.core.QuartPos");
const Minecraft$SectionPos = Java.loadClass("net.minecraft.core.SectionPos");
const Minecraft$MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
const Minecraft$Monster = Java.loadClass("net.minecraft.world.entity.monster.Monster");
const Minecraft$Difficulty = Java.loadClass("net.minecraft.world.Difficulty");
const Minecraft$ParticleTypes = Java.loadClass("net.minecraft.core.particles.ParticleTypes")
const Minecraft$StonecutterRecipe = Java.loadClass("net.minecraft.world.item.crafting.StonecutterRecipe")
const Minecraft$BlockInput = Java.loadClass("net.minecraft.commands.arguments.blocks.BlockInput")
const Minecraft$Clearable = Java.loadClass("net.minecraft.world.Clearable")
const Minecraft$ColumnPos = Java.loadClass("net.minecraft.server.level.ColumnPos")
const Minecraft$ServerPlayer = Java.loadClass("net.minecraft.server.level.ServerPlayer")
const Minecraft$AABB = Java.loadClass("net.minecraft.world.phys.AABB");
const Minecraft$StringTag = Java.loadClass("net.minecraft.nbt.StringTag");

// const Minecraft$Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3");
// priority: 100000

const FDLib$CutsceneData = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CutsceneData");
const FDLib$CameraPos = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CameraPos");
const FDLib$CurveType = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CurveType");
const FDLib$EasingType = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.EasingType");
const FDLib$FDColor = Java.loadClass("com.finderfeed.fdlib.util.FDColor");
const FDLib$StopMode = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CutsceneData$StopMode");
const FDLib$FDLibCalls = Java.loadClass("com.finderfeed.fdlib.FDLibCalls");
// Client-only FDLib classes — loaded with try/catch to avoid errors on dedicated servers
var FDLib$FDScreenEffects = null;
var FDLib$ScreenColorData = null;
var FDLib$ChromaticAbberationData = null;
var FDLib$ScreenColorEffect = null;
var FDLib$ParticleEmitterData = null;
var FDLib$ParticleEmitterData$Builder = null;
var FDLib$FDEmitterProcessorTypes = null;
var FDLib$CircleSpawnProcessor = null;
var FDLib$EmptyEmitterProcessor = null;
var FDLib$EmitterProcessor = null;
var FDLib$FDRenderUtil = null;
try {
  FDLib$FDScreenEffects = Java.loadClass("com.finderfeed.fdlib.init.FDScreenEffects");
  FDLib$ScreenColorData = Java.loadClass("com.finderfeed.fdlib.systems.screen.screen_effect.instances.datas.ScreenColorData");
  FDLib$ChromaticAbberationData = Java.loadClass("com.finderfeed.fdlib.systems.screen.screen_effect.instances.chromatic_abberation.ChromaticAbberationData");
  FDLib$ScreenColorEffect = Java.loadClass("com.finderfeed.fdlib.systems.screen.screen_effect.instances.ScreenColorEffect");
  FDLib$ParticleEmitterData = Java.loadClass("com.finderfeed.fdlib.systems.particle.particle_emitter.ParticleEmitterData");
  FDLib$ParticleEmitterData$Builder = Java.loadClass("com.finderfeed.fdlib.systems.particle.particle_emitter.ParticleEmitterData$Builder");
  FDLib$FDEmitterProcessorTypes = Java.loadClass("com.finderfeed.fdlib.systems.particle.particle_emitter.FDEmitterProcessorTypes");
  FDLib$CircleSpawnProcessor = Java.loadClass("com.finderfeed.fdlib.systems.particle.particle_emitter.processors.CircleSpawnProcessor");
  FDLib$EmptyEmitterProcessor = Java.loadClass("com.finderfeed.fdlib.systems.particle.particle_emitter.EmptyEmitterProcessor");
  FDLib$EmitterProcessor = Java.loadClass("com.finderfeed.fdlib.systems.particle.particle_emitter.EmitterProcessor");
  FDLib$FDRenderUtil = Java.loadClass("com.finderfeed.fdlib.util.rendering.FDRenderUtil");
} catch (e) {
  // Expected on dedicated server — these are client-only rendering classes
}


// const FDLib$CutsceneCameraHandler = Java.loadClass("com.finderfeed.fdlib.systems.cutscenes.CutsceneCameraHandler");

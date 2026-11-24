//Currently Disabled in favor of using the Summoning Altar... for JEI Display Reasons =)

// ItemEvents.entityInteracted("alexscaves:darkened_apple", event => {
//     const { target, player, server, level, hand } = event;

//     // Ensure we only trigger on the main hand
//     if (hand != "MAIN_HAND") return;

//     // Check the entity type directly
//     if (target.type === "quark:foxhound") {

//         player.addItemCooldown(event.item, 20);

//         // Check if the foxhound is tamed
//         if (target.ownerUUID == player.uuid) {            

//             // 1. Play a Sound Effect
//             level.playSound(null, target.x, target.y, target.z, "entity.fox.eat", "players", 1.0, 0.5);
//             level.playSound(null, target.x, target.y, target.z, "entity.fox.screech", "players", 1.0, 0.5);
//             level.playSound(null, target.x, target.y, target.z, "minecraft:block.enchantment_table.use", "players", 1.0, 1.2);
            
//             // 2. Spawn Particle Effects
//             // We'll spawn a burst of flame and soul particles at the entity's position
//             level.spawnParticles('minecraft:soul_fire_flame', true, target.x, target.y + 0.5, target.z, 0.5, 0.5, 0.5, 20, 0.1);
//             level.spawnParticles('minecraft:large_smoke', true, target.x, target.y + 0.5, target.z, 0.2, 0.2, 0.2, 10, 0.05);

//             // 3. The "Wiggle" effect (Slowness + Particles)
//             // We apply slowness so it stays put during the sacrifice
//             target.potionEffects.add('minecraft:slowness', 60, 10, false, false);

//             for (let i = 0; i < 4; i++) {
//                 server.scheduleInTicks(i * 10, callback => {
//                     if (target.alive) {
//                         // Visual "Jitter" Values
//                         target.setMotion(
//                             (Math.random() - 0.5) * 0.2, 
//                             0.1, 
//                             (Math.random() - 0.5) * 0.2
//                         );
                        
//                         // Emiting particles during the struggle
//                         level.spawnParticles('minecraft:smoke', true, target.x, target.y + 0.5, target.z, 0.3, 0.3, 0.3, 5, 0.05);
//                         level.playSound(null, target.x, target.y, target.z, 'minecraft:entity.fox.hurt', 'players', 0.6, 1.5);
//                     }
//                 });
//             }

//             server.scheduleInTicks(60, callback => {
//                 if (target.alive) {

//                     //Final FX
//                     level.playSound(null, target.x, target.y, target.z, "entity.fox.death", 'players', 1.0, 0.5);
//                     level.spawnParticles('minecraft:soul_fire_flame', true, target.x, target.y + 0.5, target.z, 0.6, 0.6, 0.6, 30, 0.1);
                    
//                     //Rewarding the Player
//                     server.runCommandSilent(`execute at ${target.uuid} run summon item ~ ~ ~ {Item:{id:"ftb:fiery_remains",Count:4b}}`);

//                     //Wrapping the Sacrifice
//                     target.kill();
//                     player.tell(Text.translate("ftb.events.items.foxhound_sacrifice.complete"));
//                 }
//             });
            
//             // Stop default right-click action
//             event.cancel();

//         } else {
//             player.tell(Text.translate("ftb.events.items.foxhound_sacrifice.wild"));
//         }
//     }
// });
StartupEvents.registry("minecraft:custom_stat", (event) => {
  $$BossRealmMap.keySet().forEach((boss) => {
    event.create(`${boss}_deaths`)
  })
})
// priority: 9000

const geores2 = [
  'tungsten',
  'tin',
  'silver',
  'platinum',
  'osmium',
  'nickel',
  'lead',
  'aluminum',
  'iron',
  'copper',
  'gold',
  'zinc'
]

ServerEvents.recipes((event) => {
  geores2.forEach(geore => {
    event.custom({
      type: "tconstruct:melting",
      ingredient: {
        count: 1,
        item: `geore:${geore}_shard`
      },
      result: {
        amount: 90,
        tag: `forge:molten_${geore}`
      },
      temperature: 425,
      time: 45
    }).id(`ftb:tinkers/melting/geore/${geore}_shard`)
  
    event.custom({
      type: "tconstruct:melting",
      ingredient: {
        count: 1,
        item: `geore:${geore}_block`
      },
      result: {
        amount: 360,
        tag: `forge:molten_${geore}`
      },
      temperature: 425,
      time: 90
    }).id(`ftb:tinkers/melting/geore/${geore}_block`)
  })
})
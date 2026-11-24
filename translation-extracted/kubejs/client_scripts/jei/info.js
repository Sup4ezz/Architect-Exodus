// priority: 99
const infoPages = [
  {
    items: [
      "draconicevolution:wyvern_chestpiece",
      "draconicevolution:draconic_chestpiece",
      "draconicevolution:chaotic_chestpiece"
    ],
    lines: [Text.translate("ftb.tooltip.gated.item.draconicevolution.chestpiece")]
  },
  {
    items: ["alexscaves:vesper_wing"],
    lines: [Text.translate("ftb.forsaken.space_requirement")]
  }
];

JEIEvents.information((event) => {
  infoPages.forEach((page) => {
    page.items.forEach((item) => {
      const args = [item].concat(page.lines);
      event.addItem.apply(event, args);
    });
  });
});

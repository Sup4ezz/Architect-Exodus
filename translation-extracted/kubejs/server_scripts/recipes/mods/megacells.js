ServerEvents.recipes((event) => {
  event
    .custom({
      type: "create:deploying",
      ingredients: [
        {
          item: "xycraft_machines:incomplete_processor",
        },
        {
          item: "megacells:printed_accumulation_processor",
        },
      ],
      results: [
        {
          item: "megacells:accumulation_processor",
        },
      ],
    }).id(`ftb:deploying/accumulation_processor`);
});

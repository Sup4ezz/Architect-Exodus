const projecteBlocks = [
  "projecte:red_matter_block",
  "projecte:dm_pedestal",
  "projecte:dark_matter_block",
  "projectexpansion:magenta_matter_block",
  "projectexpansion:pink_matter_block",
  "projectexpansion:purple_matter_block",
  "projectexpansion:violet_matter_block",
  "projectexpansion:blue_matter_block",
  "projectexpansion:cyan_matter_block",
  "projectexpansion:green_matter_block",
  "projectexpansion:lime_matter_block",
  "projectexpansion:yellow_matter_block",
  "projectexpansion:orange_matter_block",
  "projectexpansion:white_matter_block",
  "projectexpansion:fading_matter_block",
  "projectexpansion:compact_sun"
];

BlockEvents.modification((event) => {
  projecteBlocks.forEach((blockId) => {
    event.modify(blockId, (block) => {
      block.destroySpeed = 5.0;
      block.explosionResistance = 10.0;
    });
  });
});

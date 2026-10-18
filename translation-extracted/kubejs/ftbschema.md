```
server_scripts/
├── _init/
│   ├── classes/
│   │   ├── minecraft.js
│   │   ├── forge.js
│   │   ├── kubejs.js
│   │   ├── example.js
│   │   │
│   │   └── readme_classes.md
│   │
│   ├── function_utils/
│   │   ├── _math.js
│   │   ├── _kjs_utils.js
│   │   │
│   │   └── readme_function_utils.md
│   │
│   ├── server_globals/
│   │   ├── _constants.js
│   │   ├── _native_events_impl.js
│   │   │
│   │   └── readme_server_globals.md
│   │
│   └── readme_init.md
│
├── commands/
│   ├── bifrost/
│   │   └── bifrost_commands.js
│   │
│   ├── cutscene/
│   │   └── cutscene_commands.js
│   │
│   └── readme_commands.md
│
├── event_handlers/
│   ├── mods/
│   │   ├── forge/
│   │   │   ├── player_event/
│   │   │   │   ├── advancement_event/
│   │   │   │   │   ├──advancement_earn.js
│   │   │   │   │   │
│   │   │   │   │   └──
│   │   │   │   │   
│   │   │   │   └──
│   │   │   │   
│   │   │   └──
│   │   │
│   │   └──
│   │
│   └── readme_event_handlers.md
│
├── recipes/
│    ├── mods/
│    │   ├── _some_mod_id_definitions.js
│    │   ├── some_mod_id.js
│    │   │
│    │   └──
│    │
│    ├── recipe_removals.js
│    │
│    └── readme_recipes.md
│     
├── systems/
│   ├── cutscene/
│   │   ├── scenes/
│   │   │   ├── all_scenes.js
│   │   │   ├── bifrost_scenes.js
│   │   │   │
│   │   │   └── readme_scenes.js
│   │   │
│   │   ├── cutscene_framework.js
│   │   │
│   │   └── readme_cutscene.md
│   │
│   ├── multiblock_tools/
│   │   ├── multiblock_builder.js
│   │   ├── multiblock_validator.js
│   │   │
│   │   └── readme_multiblock_tools.js
│   │
│   └── readme_systems.md
│
├── tags/
│   ├── block.js
│   ├── fluid.js
│   ├── item.js
│   │
│   └── readme_tags.md
│
├── unification/
│   ├── 
│   │   ├──
│   │   │
│   │   └── 
│   └── readme_unification.md
│
└── 
```



# server_scripts

### [/server_scripts/_init/](server_scripts/_init/readme_init.md)

This folder contains all the bootstrap logic that must load before any other script

### [/_init/classes/](server_scripts/_init/classes/readme_classes.md)

Contains any `Java.loadClass()` required by the project

Default Priority:
```js
// priority: 100000
```

Examples:
```js
const Mod$Classname = Java.loadClass("dev.mod.xyz.Classname");
const Source$InnerClass = Java.loadClass("source.xyz.Class$InnerClass");

const Java$Consumer = Java.loadClass("java.util.function.Consumer");
const Forge$AdvancementEarnEvent = Java.loadClass("net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent");
```

### [/_init/function_utils/](server_scripts/_init/function_utils/readme_function_utils.md)

This folder contains utility functions that are used throughout the scripts.

### [/_init/server_globals/](server_scripts/_init/server_globals/readme_server_globals.md)

This folder contains global variables and implementations for native KubeJS events.

### [/server_scripts/commands](server_scripts/commands/readme_commands.md)

This folder contains custom command definitions.

### [/server_scripts/event_handlers](server_scripts/event_handlers/readme_event_handlers.md)

This folder contains handlers for various game events.

### [/server_scripts/recipes](server_scripts/recipes/recipe_removals.js)

This folder contains recipe definitions and modifications.

### [/server_scripts/systems](server_scripts/systems/readme_systems.md)

This folder contains larger, more complex game systems.

### [/server_scripts/tags](server_scripts/tags/readme_tags.md)

This folder contains definitions for item, block, and fluid tags.
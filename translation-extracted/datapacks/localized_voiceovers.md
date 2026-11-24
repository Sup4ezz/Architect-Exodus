# Localized Voiceover Audio (FTB Scroll)

The credit-scroll narrations (Odin, boss intros, etc.) play a client-side sound during each FTB Scroll sequence. Each scroll references a base sound event, e.g. `ftb:narration.allfather_intro`.

The client picks a localized variant automatically: when it is about to play `ftb:narration.<name>`, it looks for a sound event named `ftb:narration.<name>.<languageCode>` (the player's selected Minecraft language, e.g. `fr_fr`). If that event is registered it plays it; otherwise it falls back to the base (default English) audio. Matching is per-sound, so partial translations are fine.

## Adding a language (ship a resource pack)

Localized audio is added with a **resource pack**, not by editing the modpack's `kubejs` files. This keeps translations self-contained and distributable, and it survives modpack updates. Minecraft merges every pack's `sounds.json` per namespace, so your pack only needs to declare its own new entries.

Resource pack layout, for language `<lang>` (a full Minecraft locale like `fr_fr`, `es_es`, `de_de`):

```
YourVoicePack/
  pack.mcmeta
  assets/
    ftb/
      sounds.json
      sounds/
        narration/
          <lang>/
            allfather_intro.ogg
            helheim_arrival.ogg
            ...
```

In `assets/ftb/sounds.json`, declare only your localized events, each named `<base event>.<lang>`:

```json
{
  "narration.allfather_intro.fr_fr": {
    "sounds": [{ "name": "ftb:narration/fr_fr/allfather_intro", "stream": true }]
  },
  "narration.helheim_arrival.fr_fr": {
    "sounds": [{ "name": "ftb:narration/fr_fr/helheim_arrival", "stream": true }]
  }
}
```

Enable the pack in Options > Resource Packs. A player whose client language is set to `fr_fr` then hears the French file for each localized narration; every other language keeps the base audio.

## Notes

- No change to the modpack's scroll definitions or scripts is needed - only the resource pack's `.ogg` files and its `sounds.json` entries.
- The base (English) events already ship with the modpack; do not redeclare them in your pack.
- Matching is exact-locale only. A `fr_ca` player will not pick up `fr_fr` audio; provide `fr_ca` entries if that audience is needed.
- Subtitles localize through the normal lang-key system (the `subtitle` field on each base event), independent of the audio.

// priority: 11

/**
 * Credit Scroll Definitions
 * Each scroll defines a single lang key whose text is split on \n into lines at runtime.
 * Blank lines in the lang value become spacer lines in the scroll.
 *
 * Fields:
 *   id              - unique string
 *   textKey         - lang key for the body text (\n-delimited)
 *   titleKey        - (optional) lang key for a title line shown before body
 *   titleColor      - color for the title line (default: gold 0xC8AA6E)
 *   textColor       - color for body text lines (default: 0xD4D4D4)
 *   sound           - sound resource ID to play
 *   durationSeconds - target scroll duration in seconds. Preferred — the engine computes
 *                     pixels/tick at runtime so timing stays consistent across GUI scales.
 *                     Set to the audio duration plus a small buffer (~1-2 seconds).
 *   speed           - legacy fallback: scroll speed in pixels/tick (default: 0.6). Only used
 *                     when durationSeconds is missing or 0. Screen-scale dependent — avoid.
 *   textScale       - text scale multiplier (default: 1.0)
 *   lineSpacing     - pixels between lines (default: 14)
 *   overlayColor    - ARGB overlay color (default: 0xCC000000, written as decimal -872415232)
 *   padLines        - number of blank spacer lines above and below content (default: 3)
 */
let ScrollDefinitions = [
  {
    id: "allfather_intro",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.allfather_intro.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.allfather_intro",
    durationSeconds: 49,
    speed: 0.75,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "helheim_arrival",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.helheim_arrival.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.helheim_arrival",
    durationSeconds: 92,
    speed: 0.55,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "helheim_departure",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.helheim_departure.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.helheim_departure",
    durationSeconds: 56,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "jotunheim_arrival",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.jotunheim_arrival.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.jotunheim_arrival",
    durationSeconds: 82,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "jotunheim_departure",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.jotunheim_departure.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.jotunheim_departure",
    durationSeconds: 42,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "niflheim_arrival",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.niflheim_arrival.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.niflheim_arrival",
    durationSeconds: 82,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "niflheim_departure",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.niflheim_departure.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.niflheim_departure",
    durationSeconds: 46,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "muspelheim_arrival",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.muspelheim_arrival.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.muspelheim_arrival",
    durationSeconds: 61,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "muspelheim_nidhoggr",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.muspelheim_nidhoggr.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.muspelheim_nidhoggr",
    durationSeconds: 70,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "midgard_arrival",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.midgard_arrival.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.midgard_arrival",
    durationSeconds: 88,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "midgard_nidhoggr",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.midgard_nidhoggr.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.midgard_nidhoggr",
    durationSeconds: 94,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
    id: "asgard_arrival",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.asgard_arrival.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.asgard_arrival",
    durationSeconds: 145,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
  {
      id: 'restore_progress1',
      titleKey: 'ftb.scroll.allfather.title',
      textKey: 'ftb.scroll.restore_progress1.text',
      titleColor: 0xC8AA6E,
      textColor: 0xFFFFFF,
      sound: 'ftb:narration.restore_progress1',
      durationSeconds: 17,
      speed: 0.65,
      textScale: 1.0,
      lineSpacing: 14,
      overlayColor: -872415232,
      padLines: 3
  },
  {
      id: 'restore_progress2',
      titleKey: 'ftb.scroll.allfather.title',
      textKey: 'ftb.scroll.restore_progress2.text',
      titleColor: 0xC8AA6E,
      textColor: 0xFFFFFF,
      sound: 'ftb:narration.restore_progress2',
      durationSeconds: 18,
      speed: 0.65,
      textScale: 1.0,
      lineSpacing: 14,
      overlayColor: -872415232,
      padLines: 3
  },
  {
      id: 'restore_progress3',
      titleKey: 'ftb.scroll.allfather.title',
      textKey: 'ftb.scroll.restore_progress3.text',
      titleColor: 0xC8AA6E,
      textColor: 0xFFFFFF,
      sound: 'ftb:narration.restore_progress3',
      durationSeconds: 23,
      speed: 0.65,
      textScale: 1.0,
      lineSpacing: 14,
      overlayColor: -872415232,
      padLines: 3
  },
  {
      id: 'restore_progress4',
      titleKey: 'ftb.scroll.allfather.title',
      textKey: 'ftb.scroll.restore_progress4.text',
      titleColor: 0xC8AA6E,
      textColor: 0xFFFFFF,
      sound: 'ftb:narration.restore_progress4',
      durationSeconds: 26,
      speed: 0.65,
      textScale: 1.0,
      lineSpacing: 14,
      overlayColor: -872415232,
      padLines: 3
  },
  {
    id: "asgard_restored",
    titleKey: "ftb.scroll.allfather.title",
    textKey: "ftb.scroll.asgard_restored.text",
    titleColor: 0xc8aa6e,
    textColor: 0xffffff,
    sound: "ftb:narration.asgard_restored",
    durationSeconds: 120,
    speed: 0.65,
    textScale: 1.0,
    lineSpacing: 14,
    overlayColor: -872415232,
    padLines: 3,
  },
];

/**
 * Find a scroll definition by ID.
 * @param {string} id
 * @returns {object|null}
 */
function getScrollDefinition(id) {
  for (let i = 0; i < ScrollDefinitions.length; i++) {
    if (ScrollDefinitions[i].id === id) return ScrollDefinitions[i];
  }
  return null;
}

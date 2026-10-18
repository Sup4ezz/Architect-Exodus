//priority: 99949

// Server-side translation resolver for dedicated server compatibility.
// Paint API requires pre-resolved strings (no translatable component support),
// so the server must resolve translations before sending paint data.
// Uses Minecraft's built-in ServerPlayer.language field for locale detection.

var $$FTB_LANG_CACHE = {};

var $$FTB_LANG_NAMESPACES = ["ftb", "ftblh", "ftbpc", "tconstruct"];

/**
 * Load all kubejs lang files for a given locale into the cache.
 * Lazy-loaded on first request per locale.
 * @param {string} locale - e.g. "en_us", "zh_cn", "de_de"
 * @returns {Object} Map of translation key -> resolved text
 */
function $$loadLocale(locale) {
  if ($$FTB_LANG_CACHE[locale]) return $$FTB_LANG_CACHE[locale];

  var data = {};
  var count = 0;
  for (var i = 0; i < $$FTB_LANG_NAMESPACES.length; i++) {
    try {
      var langData = JsonIO.read("kubejs/assets/" + $$FTB_LANG_NAMESPACES[i] + "/lang/" + locale + ".json");
      if (langData != null) {
        for (var key in langData) {
          data[String(key)] = String(langData[key]);
          count++;
        }
      }
    } catch (e) {
      // Lang file doesn't exist for this locale/namespace — expected
    }
  }

  $$FTB_LANG_CACHE[locale] = data;
  if (count > 0) {
    console.info("[ftb_lang] Loaded " + count + " keys for locale '" + locale + "'");
  }
  return data;
}

// Pre-load en_us at startup
$$loadLocale("en_us");

/**
 * Resolve a translation key server-side.
 * Checks the player's client language first, falls back to en_us.
 * @param {string} key - Translation key
 * @param {Internal.ServerPlayer} [player] - Player for locale-aware resolution
 * @returns {string} Resolved text, or the raw key if not found in any locale
 */
function ftbLang(key, player) {
  if (player) {
    try {
      var locale = String(player.language);
      if (locale && locale !== "en_us") {
        var localized = $$loadLocale(locale);
        if (localized[key]) return localized[key];
      }
    } catch (e) {
      // player.language not accessible — fall through to en_us
    }
  }
  return $$FTB_LANG_CACHE["en_us"][key] || key;
}

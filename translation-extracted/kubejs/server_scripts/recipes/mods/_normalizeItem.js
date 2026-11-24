// priority: 100002

function normalizeItem(item, propertyName) {
  function resolveKey(id) {
    if (id.startsWith("#")) return { tag: id.substring(1) };
    if (propertyName === "type") return { type: id };
    return { item: id };
  }

  if (typeof item === "string") return Object.assign(resolveKey(item), { count: 1 });
  if (Array.isArray(item)) return Object.assign(resolveKey(item[0]), { count: item[1] || 1 });
  return item;
}

// Normalizes individualOutputs array, expanding [itemId, count] tuples into `count` repeated item objects.
// Returns a flat array: [{item: "item1"}, {item: "item2"}, ...]
function normalizeIndividualOutputs(items) {
  const result = [];
  (items || []).forEach(function(item) {
    if (Array.isArray(item) && typeof item[1] === "number") {
      const normalized = normalizeItem(item[0], "item");
      for (let i = 0; i < item[1]; i++) {
        result.push(normalized);
      }
    } else {
      result.push(normalizeItem(item, "item"));
    }
  });
  return result;
}
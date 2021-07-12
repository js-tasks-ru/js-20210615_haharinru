/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj === undefined) {
    return;
  }

  let pairs = Object.entries(obj);

  return pairs.reduce((obj, [key, value]) => {
    return {...obj,
      [value]: (obj[value] = key), };
  }, {});
}

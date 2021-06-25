/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj === undefined) {
    return undefined;
  }
  let pairs = Object.entries(obj);
  console.log(pairs);
  return pairs.reduce((obj, pair) => ({
    ...obj,
    [pair[1]]: (obj[pair[1]] = pair[0]),
  }), {});
}

/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }
  let arrOfSymbols = Array.from(string);
  let initCounter = {prevSymbol: ``, count: 0, result: ``, prevAdded: false};
  return arrOfSymbols.reduce((counter, curSymbol) => {
    let sameSymbol = counter.prevSymbol === curSymbol;
    if (sameSymbol) {
      if (!counter.prevAdded) {
        return {...counter};
      }
      let shouldAdd = counter.count + 1 <= size;
      return {...counter,
        count: counter.count + 1,
        result: shouldAdd ? counter.result + curSymbol : counter.result,
        prevAdded: shouldAdd,
      };
    } else {
      let shouldAdd = 1 <= size;
      return {...counter,
        prevSymbol: curSymbol,
        count: 1,
        result: shouldAdd ? counter.result + curSymbol : counter.result,
        prevAdded: shouldAdd
      };
    }
  }, initCounter).result;
}

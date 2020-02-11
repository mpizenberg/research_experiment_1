// @ts-check
// Using in place movement to move, using push to copy

/**
 * Re-arranges the input array by moving an item from from, to to.
 * Mutates the input array.
 *
 * @template T
 *
 * @param {T[]} array the input array
 * @param {number|array} from the position to move from, or an array of from/to pairs
 * @param {number=} to the position to move to, only used when from is a number
 *
 * @returns {T[]}
 */
export function rearrange(array, from, to) {
  if (from === to) {
    return array;
  }

  if (from < 0) {
    from = array.length + from;
  }

  if (to < 0) {
    to = array.length + to;
  }

  const item = array[from];
  const direction = to < from ? -1 : 1;

  for (let i = from; i !== to; i += direction) {
    array[i] = array[i + direction];
  }

  array[to] = item;
  return array;
}

/**
 * Re-arranges the input array by moving an item from from, to to.
 * Does not mutate the input array.
 *
 * @template T
 *
 * @param {T[]} array the input array
 * @param {number|array} from the position to move from, or an array of from/to pairs
 * @param {number=} to the position to move to, only used when from is a number
 *
 * @returns {T[]}
 */
export function arrange(array, from, to) {
  const copy = [];
  array.forEach(item => copy.push(item));

  return rearrange(copy, from, to);
}

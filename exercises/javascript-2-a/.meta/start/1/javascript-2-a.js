// @ts-check
// Using splice to move, slice to copy

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
  const destination = to < 0 ? array.length + to : to;

  const item = array.splice(from, 1).pop();
  array.splice(destination, 0, item);
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
  return rearrange(array.slice(), from, to);
}

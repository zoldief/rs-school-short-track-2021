/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = array[mid];
    if (result === value) {
      return mid;
    }
    if (result > value) {
      high = mid - 1;
    }
    if (result < value) {
      low = mid + 1;
    }
  }
  return -1;
}

module.exports = findIndex;

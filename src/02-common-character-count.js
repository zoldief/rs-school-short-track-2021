/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let mainStr = s1;
  let subArr = s2.split('');
  if (s2.length > s1.length) {
    mainStr = s2;
    subArr = s1.split('');
  }
  for (let i = 0; i < mainStr.length; i++) {
    if (subArr.indexOf(mainStr[i]) !== -1) {
      result++;
      subArr.splice(subArr.indexOf(mainStr[i]), 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;

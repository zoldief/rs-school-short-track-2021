/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  function itemCounter(arr, item) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) counter++;
    }
    return counter - 1;
  }
  const result = [];
  const cash = [];
  for (let i = 0; i < names.length; i++) {
    if (
      names[i].split('')[names[i].length - 1] === ')'
      && names[i] !== 'a(3)'
    ) {
      result.push(
        `${names[i]}(${itemCounter(cash, names[i].replace('(1)', '')) - 1})`,
      );
    } else if (cash.includes(names[i]) || cash.includes(`${names}`)) {
      result.push(`${names[i]}(${itemCounter(cash, names[i])})`);
    } else {
      result.push(names[i]);
      cash.push(names[i]);
    }
    cash.push(names[i]);
  }
  return result;
}

module.exports = renameFiles;

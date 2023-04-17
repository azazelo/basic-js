const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  const oper = matrix .map((a) => a.filter((a) => a =='^^'));
  const oren = oper.filter((a) => a =='^^');
  return oren
}

module.exports = {
  countCats
};

/**
 * Helper that generates hints
 * @param {String} randomNumber The random Number
 * @returns {String[]} The hints
 */
const generateHints = randomNumber => {
  return ['Each digit is smaller than 8', randomNumber[1], randomNumber[3]];
};

module.exports = generateHints;

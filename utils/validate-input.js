/**
 * Helper that validates correct type of random numbers and length
 * @param {String} randomNumber The random Number
 * @returns true or false
 */
const validateInput = randomNumber => {
  const validInput = /^([0-9]{1,4})$/;
  const isInputValid = validInput.test(randomNumber);
  return isInputValid;
};

module.exports = validateInput;

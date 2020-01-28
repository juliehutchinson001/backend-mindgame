const getTimeLeft = require('./get-time-left');
const { CORRECT, INCORRECT, PARTIAL } = require('./constants').feedback;
const { ACTIVE, WON, LOST } = require('./constants').gameStatus;

/**
 * Computes the guess of the user to determine the game status
 * @param {String} guess The number the user guessed
 * @param {String} randomNumber The number the user has to guess correctly
 * @param {Number} attemptsLeft The number of attempts the user has to play
 * @returns {String{}} The new game status and feedback of the guess
 */
const getGameStatus = (
  guess,
  randomNumber,
  attemptsLeft,
  createdAt,
  difficulty
) => {
  let isGuessPartial = false;
  let feedback;
  let newGameStatus;

  const timeLeft = getTimeLeft(createdAt, difficulty);
  if (timeLeft) {
    if (guess === randomNumber) {
      feedback = CORRECT;
      newGameStatus = WON;
    } else {
      // check if one of the digits were correct
      for (let i = 0; i < guess.length; i++) {
        if (randomNumber[i] === guess[i]) {
          isGuessPartial = true;
          break;
        }
      }

      feedback = isGuessPartial ? PARTIAL : INCORRECT;
      newGameStatus = attemptsLeft - 1 ? ACTIVE : LOST;
    }
  } else {
    newGameStatus = LOST;
    feedback = INCORRECT;
  }

  return { newGameStatus, feedback };
};

module.exports = getGameStatus;

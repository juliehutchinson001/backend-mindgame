const { difficulty } = require('./constants');

/**
 * Computes whether or not there is time left in the game based on the difficulty setting
 * @param {Date} createdAt The date when the game started
 * @param {String} difficulty The current difficulty level which changes the time
 * @returns {Boolean} Whether or not there is time left in the game
 */
const getTimeLeft = (createdAt, currentDifficulty) => {
  const timeAllowed = createdAt.getTime() + difficulty[currentDifficulty].TIME;
  return timeAllowed >= new Date().getTime();
};

module.exports = getTimeLeft;

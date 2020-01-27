/**
 * Difficulty levels of the game and time allowed in milliseconds
 */
const difficulty = {
  EASY: {
    NAME: 'EASY',
    TIME: 300000,
  },
  NORMAL: {
    NAME: 'NORMAL',
    TIME: 180000,
  },
  HARD: {
    NAME: 'HARD',
    TIME: 60000,
  },
};

/**
 * The feedback after each guess
 */
const feedback = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
  PARTIAL: 'partial',
};

/**
 * The current game status
 */
const gameStatus = {
  ACTIVE: 'active',
  WON: 'won',
  LOST: 'lost',
};

module.exports = { difficulty, feedback, gameStatus };

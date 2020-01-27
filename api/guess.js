const express = require('express');
const router = express.Router();
const User = require('../models/User');
const getGameStatus = require('../utils/get-game-status');
const { ACTIVE } = require('../utils/constants').gameStatus;

/**
 * Checks if the guess is correct or incorrect
 * `@route` POST api/guess
 * @global Public
 */
router.post('/', async (req, res) => {
  const { userName, guess } = req.body;

  User.findOne({ userName }, 'games', async (error, data) => {
    // a request is done but there is no data of an anonymous user
    if (error) {
      res.status(404).json({ error });
    } else {
      const LAST_GAME = data.games.length - 1;
      const {
        attempts,
        randomNumber,
        gameStatus,
        difficulty,
        createdAt,
      } = data.games[LAST_GAME];

      if (gameStatus === ACTIVE) {
        const { newGameStatus, feedback } = getGameStatus(
          guess,
          randomNumber,
          attempts,
          createdAt,
          difficulty
        );

        // Update game
        data.games[LAST_GAME].attempts = attempts - 1;
        data.games[LAST_GAME].gameStatus = newGameStatus;
        data.games[LAST_GAME].guesses.push({ guess, feedback });
        await data.save();

        res.json({ newGameStatus, feedback });
      } else {
        // Time has run out
        res.status(403).json({ error: 'Game is not active' });
      }
    }
  });
});

module.exports = router;

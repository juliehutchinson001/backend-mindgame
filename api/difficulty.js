const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { ACTIVE } = require('../utils/constants').gameStatus;

/**
 * Sets the difficulty level of the game
 * `@route` POST api/difficulty
 * @global Public
 */
router.post('/', async (req, res) => {
  const { userName, difficulty } = req.body;

  User.findOne({ userName }, 'games', async (error, data) => {
    // There is no user
    if (error) {
      res.status(404).json({ error });
    } else {
      const LAST_GAME = data.games.length - 1;
      const { gameStatus } = data.games[LAST_GAME];

      if (gameStatus === ACTIVE) {
        // Set the difficulty game
        data.games[LAST_GAME].difficulty = difficulty;
        await data.save();

        res.json({ difficulty });
      } else {
        res.status(403).json({ error: 'Game is not active' });
      }
    }
  });
});

module.exports = router;

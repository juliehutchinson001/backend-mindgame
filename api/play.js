const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const User = require('../models/User');
const generateHints = require('../utils/generate-hints');
const { ACTIVE } = require('../utils/constants').gameStatus;

/**
 * Starts the game
 * `@route` POST api/play
 * @global Public
 */
router.post('/', async (req, res) => {
  const URL =
    'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  const data = await fetch(URL);
  const textData = await data.text();
  const randomNumber = textData
    .trim()
    .split('\n')
    .join('');

  const { userName, difficulty, gameStarted } = req.body;

  // Initialize the new game
  const newGame = {
    randomNumber,
    attempts: 10,
    gameStatus: ACTIVE,
    hints: generateHints(randomNumber),
    hintsCount: 0,
    difficulty,
    gameStarted,
    guesses: [],
  };

  // Add a game to the user from the current session or create a new user
  User.findOneAndUpdate(
    { userName },
    { $push: { games: newGame } },
    { new: true, upsert: true, runValidators: true },
    (error, user) => {
      if (error) {
        res.json({ error });
      }

      const latestGame = user.games[user.games.length - 1];
      res.json(latestGame);
    }
  );
});

module.exports = router;

const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const User = require('../models/User');
const generateHints = require('../utils/generate-hints');

/**
 * @description Starts the game
 * @route GET api/play
 * @global Public
 */
router.post('/', async (req, res) => {
  const URL =
    'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  const data = await fetch(URL);
  const randomNumber = await data.text();

  const { userName } = req.body;
  const newGame = {
    randomNumber,
    attempts: 10,
    isGameWon: false,
    hints: generateHints(randomNumber),
    hintsCount: 0,
    difficulty: 'normal',
    guesses: [],
  };

  User.findOneAndUpdate(
    { userName },
    { $push: { games: newGame } },
    { upsert: true },
    error => {
      if (error) {
        res.json({ error });
      }
      res.json({ success: 'it worked' });
    }
  );
});

module.exports = router;

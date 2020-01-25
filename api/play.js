const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

/**
 * @description Starts the game
 * @route GET api/play
 * @global Public
 */
router.route('/', (_, res) => {
  const url =
    'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new';
  fetch(url)
    .then(data => data.text())
    .then(query => res.send(query.trim()));
});

module.exports = Router;

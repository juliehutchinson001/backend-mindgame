const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { ACTIVE } = require('../utils/constants').gameStatus;

/**
 * Retrieves a hint to the client
 * `@route` GET api/hints
 * @global Public
 */
router.get('/', async (req, res) => {
  const { userName } = req.body;

  User.findOne({ userName }, 'games', async (error, data) => {
    // There is no user
    if (error) {
      res.status(404).json({ error });
    } else {
      const LAST_GAME = data.games.length - 1;
      const LAST_ATTEMPT = 1;
      const TOTAL_HINTS = 3;
      const { attempts, gameStatus, hints, hintsCount } = data.games[LAST_GAME];
      const hintsAreEnabled =
        attempts > LAST_ATTEMPT &&
        hintsCount < TOTAL_HINTS &&
        gameStatus === ACTIVE;

      if (hintsAreEnabled) {
        const hint = hints[hintsCount];
        // Update hint counter
        data.games[LAST_GAME].attempts -= 1;
        data.games[LAST_GAME].hintsCount += 1;
        await data.save();

        res.json({ hint });
      } else {
        // Hints are disabled
        res.status(404).json({ error: 'You cant get a hint' });
      }
    }
  });
});

module.exports = router;

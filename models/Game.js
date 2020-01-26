const mongoose = require('mongoose');
const Guess = require('./Guess');

// Sub-document
const Game = new mongoose.Schema(
  {
    randomNumber: {
      type: String,
      required: true,
    },
    attempts: {
      type: Number,
      required: true,
    },
    isGameWon: {
      type: Boolean,
      required: true,
    },
    hints: {
      type: [String],
      required: true,
    },
    hintsCount: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'normal', 'hard'],
      required: true,
    },
    guesses: [Guess],
  },
  {
    timestamps: true,
  }
);

module.exports = Game;
// module.exports = { Game: mongoose.model('games', GameSchema) };

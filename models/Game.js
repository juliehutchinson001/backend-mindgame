const mongoose = require('mongoose');
const Guess = require('./Guess');
const { EASY, NORMAL, HARD } = require('../utils/constants').difficulty;
const { ACTIVE, WON, LOST } = require('../utils/constants').gameStatus;

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
    gameStatus: {
      type: String,
      enum: [ACTIVE, WON, LOST],
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
      enum: [EASY.NAME, NORMAL.NAME, HARD.NAME],
      required: true,
    },
    gameStarted: {
      type: Date,
      required: true,
    },
    guesses: [Guess],
  },
  {
    timestamps: true,
  }
);

module.exports = Game;

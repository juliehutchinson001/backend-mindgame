const mongoose = require('mongoose');
const { CORRECT, INCORRECT, PARTIAL } = require('../utils/constants').feedback;

// Sub-document
const Guess = new mongoose.Schema({
  guess: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    enum: [CORRECT, INCORRECT, PARTIAL],
    required: true,
  },
});

module.exports = Guess;

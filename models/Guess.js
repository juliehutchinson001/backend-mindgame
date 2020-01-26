const mongoose = require('mongoose');

// Sub-document
const Guess = new mongoose.Schema({
  guess: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    enum: ['correct', 'incorrect', 'partial'],
    required: true,
  },
});

module.exports = Guess;

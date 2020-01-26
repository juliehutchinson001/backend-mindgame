const mongoose = require('mongoose');
const Game = require('./Game');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  games: [Game],
});

module.exports = mongoose.model('guests', UserSchema);

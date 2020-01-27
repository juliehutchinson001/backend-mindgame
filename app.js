const express = require('express');
const cors = require('cors');
const enviromentalVars = require('./config/environment');
const play = require('./api/play');
const guess = require('./api/guess');
const hint = require('./api/hint');
const difficulty = require('./api/difficulty');

// Setup configuration
enviromentalVars();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/play', play);
app.use('/api/guess', guess);
app.use('/api/hint', hint);
app.use('/api/difficulty', difficulty);

module.exports = app;

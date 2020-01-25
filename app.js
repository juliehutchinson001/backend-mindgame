const express = require('express');
const cors = require('cors');
const enviromentalVars = require('./config/environment');
const play = require('./api/play');

// Setup configuration
enviromentalVars();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/play', play);

module.exports = app;

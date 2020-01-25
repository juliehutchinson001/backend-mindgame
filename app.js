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
// app.get("/", (req, res) => {
//   const url =
//     "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
//   fetch(url)
//     .then(data => data.text())
//     .then(query => res.send(query.trim()));
// });
app.use('/api/play', play);

module.exports = app;

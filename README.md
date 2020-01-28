# backend-mindgame
This is a deployed configuration for the mastermind-game challenge's backend

<h2 align="center">
Sever for the Mastermind Game
</h2>
<p align="left">
By Julie Hutchinson
</p>

Hosted server for the web application Mastermind Game built with:

- `MongoDB Atlas` - A document-oriented, No-SQL database used to store the application data.
- `Mongoose` - Middleware to query data easily to mongodb.
- `ExpressJS` - fast node.js network app framework.
- `nodeJS` - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- `Heroku` - Platform to deploy your app.

## Features
- Creates an anonymous user
- Keeps tracks of the current game's level
- Keeps tracks of the remaining time per game
- Keeps tracks of the current game's guesses
- Keeps tracks of the game status `[WON, ACTIVE, LOST]`
- Keeps tracks of the guesses feedback in the game `[CORRECT, PARTIAL, INCORRECT]`

## Important Info

- Breakdown of challenge while planning the approach on [how to create the server.](https://docs.google.com/document/d/10Q8mYm2J6QRK3HxkxIMF93k35UUxlQJi0dHBa1vhA3Y/edit?usp=sharing)
- This server is hosted on [heroku.](https://jshutchinson-mastermind-game.herokuapp.com/)

## Application Structure

```
app
├── utils
│   └── constants.js ── makes constant variables available througout this app
│   └── generate-hints.js ── sends a new hint
│   └── get-game-statusjs ── computes the new game status and returns the new feedback and game status
│   └── get-time-left.js ── computes the remaining time left
├── database
│   └── mongoose-config.js ── configures mongoose
├── config
│   └── environment.js ── sets the env vars if on development
│   └── keys.js ── env keys to connect to the db
├── models
│   └── User.js ── Collection defining the anonymous users
│   └── Game.js ── Sub-document of User
│   └── Guess.js ── Sub-document of Game
├── api
│   └── difficulty.js ── sends any new difficulty level to the db
│   └── guess.js ── sends any new guess for the current game to the db
│   └── hint.js ── sends any new hint from the db and reduces the hint count
│   └── play.js ── sends a new game to the db / client
└── app.js
└── server.js
```

- <b>server.js</b> - The application entry point. This file defines the express server and connects it to MongoDB Atlas using mongoose.
- <b>app.js</b> - This file defines the api routes.
- <b>config/ </b> - It contains configuration of the development environment.
- <b>database/ </b> - It contains configuration for mongoose.
- <b>models/</b> - It contains the Schema definitions of the Mongoose Models.
- <b>api/ </b> - It contains the route definitions of the API.


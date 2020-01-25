// dependencies to create the backend server
const express = require("express");
const cors = require("cors");
const enviromentalVars = require("./config/environment");
const { connectMongoose } = require("./database/mongoose-config");

// initialize mongoose
enviromentalVars();
connectMongoose();

const port = process.env.PORT || 5000;

// setup middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const url =
    "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
  fetch(url)
    .then(data => data.text())
    .then(query => res.send(query.trim()));
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));

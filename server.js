const express = require("express");

const Food = require("./models/foodModel");

const db = require("./db.js");

const app = express();

app.use(express.json());

const foodRoute = require('./routes/foodRoute')

app.use('/api/food/', foodRoute)

app.get("/", (req, res) => {
  res.send("Server working" + port);
});




const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port');


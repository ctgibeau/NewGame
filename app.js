// index.js
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require('cors');

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})
 
database.once('connected', () => {
  console.log('Database Connected');
})

const PORT = process.env.PORT || 3001;

const app = express();

require("./src/startup/routes")(app);
app.use(cookieParser());
app.use(express.json());
app.use(cors());

/*
app.get("/api", (req, res) => {
  res.json({message: cards.cards});
  console.log(cards.cards[0]);
}); 
*/

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
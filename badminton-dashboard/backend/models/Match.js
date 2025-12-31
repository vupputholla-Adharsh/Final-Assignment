// backend/models/Match.js
const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  round: String,
  player1: String,
  player1Image: String,
  player2: String,
  player2Image: String,
  score: String,
  winner: String,
});

module.exports = mongoose.model("Match", matchSchema);
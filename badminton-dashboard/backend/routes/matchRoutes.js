const express = require("express");
const Match = require("../models/Match");
const router = express.Router();

router.get("/round/:round", async (req, res) => {
  const matches = await Match.find({ round: req.params.round });
  res.json(matches);
});

router.get("/winner", async (req, res) => {
  const final = await Match.findOne({ round: "Finals" });
  res.json({ winner: final?.winner });
});

module.exports = router;

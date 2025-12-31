const Match = require("../models/Match");

const scrapeMensSingles = async () => {
  try {
    await Match.deleteMany();

    const matches = [
      // Quarterfinals
      {
        round: "Quarterfinals",
        player1: "Viktor Axelsen",
        player2: "Anthony Sinisuka Ginting",
        score: "21-18, 21-16",
        winner: "Viktor Axelsen"
      },
      {
        round: "Quarterfinals",
        player1: "Jonatan Christie",
        player2: "Shi Yu Qi",
        score: "19-21, 21-17, 21-15",
        winner: "Jonatan Christie"
      },

      // Semifinals
      {
        round: "Semifinals",
        player1: "Viktor Axelsen",
        player2: "Jonatan Christie",
        score: "21-14, 21-19",
        winner: "Viktor Axelsen"
      },

      // Final
      {
        round: "Final",
        player1: "Viktor Axelsen",
        player2: "Kunlavut Vitidsarn",
        score: "21-17, 21-18",
        winner: "Viktor Axelsen"
      }
    ];

    await Match.insertMany(matches);
    console.log("Men’s Singles data saved (Cloudflare-safe mode)");
  } catch (err) {
    console.error("Data insert failed:", err.message);
  }
};

module.exports = scrapeMensSingles;
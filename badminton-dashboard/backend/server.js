const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const scrapeMensSingles = require("./scraper/scrapeMensSingles");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/matches", require("./routes/matchRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Backend running on port ${PORT}`);
  await scrapeMensSingles();
});

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const scrapeMensSingles = require("./scraper/scrapeMensSingles");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/matches", require("./routes/matchRoutes"));

app.listen(5000, async () => {
  console.log("Backend running on port 5000");
  await scrapeMensSingles();
});

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || "   mongodb+srv://vupputhollaadarsh_db_user:kSmEnmi5MDhOxLoi@cluster0.wsrfpr1.mongodb.net/badminton?retryWrites=true&w=majority";
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

module.exports = connectDB;

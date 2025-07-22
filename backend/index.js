const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;
const mongoDb = process.env.MONGO_DB;

const mongoURI = `mongodb://${mongoUser}:${mongoPass}@mongodb:27017/${mongoDb}?authSource=admin`;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello from Express backend!!!! 🚀");
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

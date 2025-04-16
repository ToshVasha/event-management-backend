const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Explicitly load .env from root folder
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function testConnection() {
  console.log("MONGODB_URI loaded:", process.env.MONGODB_URI); // clearly log this to verify
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected successfully!");
    await mongoose.disconnect();
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

testConnection();
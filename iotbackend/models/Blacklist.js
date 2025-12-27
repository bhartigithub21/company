const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "30d", // Automatically delete after 30 days (matches JWT expiry)
  },
});

module.exports = mongoose.model("Blacklist", blacklistSchema);

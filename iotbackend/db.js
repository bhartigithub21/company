const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit app if DB fails
  }
};

module.exports = connectDB;

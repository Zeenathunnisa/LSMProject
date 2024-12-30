const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/artisians"; 
const connectDB = async (cb) => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");

    if (cb) cb(); 
  } catch (error) {
    console.error("MongoDB connect error: " + error);
    process.exit(1);
  }
};

module.exports = connectDB;
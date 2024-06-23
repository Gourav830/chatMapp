const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URL = "mongodb+srv://bollywood1323:pSIICdzbEASH9o0T@chat-matrix.rdqhupn.mongodb.net/?retryWrites=true&w=majority&appName=Chat-Matrix"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;


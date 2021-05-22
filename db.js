const mongoose = require("mongoose");

const db =
  "mongodb+srv://mongodb:mongodb@cluster0.9vz9q.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected..: ${con.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const db =
  "mongodb+srv://farmer:farmer@cluster0.rwpdb.mongodb.net/farmerdb?retryWrites=true&w=majority";

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

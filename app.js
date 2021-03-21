const express = require("express");
const connectDB = require("./db");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json({ extended: false }));

connectDB();

var ur = require("./routes/user");

app.use("/user", ur);

app.listen(process.env.PORT, () => {
  console.log("running on port:" + process.env.PORT);
});

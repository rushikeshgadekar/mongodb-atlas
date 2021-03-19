const express = require("express");
const connectDB = require("./db");
const app = express();

app.use(express.json({ extended: false }));

connectDB();
const port = 5000;

var ur = require("./routes/user");

app.use("/user", ur);

app.listen(port, () => {
  console.log("running on port:" + port);
});

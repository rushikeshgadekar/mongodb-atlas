const User = require("../models/user");
exports.register = async function (req, res) {
  const { email, name, password } = req.body;
  const newUser = new User({ email, name, password });
  await newUser.save();
  return res.send({
    msg: "success",
  });
};

exports.getAll = async function (req, res) {
  const users = await User.find({});

  return res.send(users);
};

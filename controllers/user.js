const User = require("../models/user");

exports.register = async function (req, res) {
  try {
    const { email, name, phone } = req.body;
    const newUser = new User({ email, name, phone });
    await newUser.save();
    return res.send({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAll = async function (req, res) {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    console.log(err);
  }
};

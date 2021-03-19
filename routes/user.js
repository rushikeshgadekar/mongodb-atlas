const express = require("express");
const router = express.Router();
const dbobj = require("../db");
const userController = require("../controllers/user");
router.get("/insert", (req, res) => {
  res.send("user insert");
});

router.post("/register", userController.register);
router.get("/", userController.getAll);

module.exports = router;

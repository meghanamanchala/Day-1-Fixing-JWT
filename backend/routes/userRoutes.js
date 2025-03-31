const express = require("express");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt"); // Not used correctly
const User = require("../models/User");

const router = express.Router();
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  
 

  const user = new User({ username, password }); 
  await user.save();
  res.json({ message: "User registered successfully" });
});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "User not found" }); 
  }

  if (user.password !== password) { 
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, "insecuresecret", { expiresIn: "1h" }); 
  res.json({ token });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const authMiddleware = require("../middlewares/authMiddleware");
const bcrypt = require("bcryptjs");

router.post("/login", jsonParser, async (req, res) => {

  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) return res.status(401).json({ msg: "utilisateur introuvable" });
    
   
    if (req.body.password !== user.password) return res.status(401).json({ msg: "Invalid password" });

 
    const payload = {
      userId: user._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "token created successfully",
      token: token
  });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
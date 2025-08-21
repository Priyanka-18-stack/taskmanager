const express = require("express")
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken")
const User=require("../models/user")
require("dotenv").config()
const router=express.Router();
  router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // Validate request
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already in use" });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({ email, password: hashed });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err); // Logs real error
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({
      message: "Login successful",  // <- add this
      token,                        // keep token for frontend
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({error:"User not found"})
    const resetToken = jwt.sign(
      {id:user._id},
      process.env.JWT_SECRET,
      {expiresIn:"15m"}
    )
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;`
    const nodemailer = require("nodemailer")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
      }
    })
    await transporter.sendMail({
      to: email,
      subject: "Password Reset",
      text: `Click the link to reset your password: ${resetLink}`,
    });



    res.json({ message: `Password reset link sent to ${email}` });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
router.post("/reset-password/:token", async (req, res) => {
  const {token}=req.params
  const {password} = req.body
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ error: "User not found" });
    const bcrypt = require("bcryptjs");
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    await user.save()
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
});
module.exports = router;

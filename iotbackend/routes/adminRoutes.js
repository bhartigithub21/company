const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const Enquiry = require("../models/Enquiry");
const { protect } = require("../middleware/authMiddleware");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @route   POST /api/admin/login
// @desc    Auth admin & get token
// @access  Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET /api/admin/enquiries
// @desc    Get all enquiries
// @access  Private
router.get("/enquiries", protect, async (req, res) => {
  try {
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST /api/admin/seed
// @desc    Create initial admin (Run once)
// @access  Public (Should be removed/protected in production)
router.post("/seed", async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      username,
      password: hashedPassword,
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/admin/logout
// @desc    Logout admin
// @access  Private
// @route   POST /api/admin/logout
// @desc    Logout admin
// @access  Private
router.post("/logout", protect, async (req, res) => {
  try {
    const Blacklist = require("../models/Blacklist");
    await Blacklist.create({ token: req.token });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

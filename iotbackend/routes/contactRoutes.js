const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// @route   POST /api/contact
// @desc    Submit a new enquiry
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newEnquiry = new Enquiry({
      name,
      email,
      subject,
      message
    });

    const savedEnquiry = await newEnquiry.save();
    res.status(201).json(savedEnquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

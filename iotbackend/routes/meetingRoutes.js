const express = require("express");
const router = express.Router();
const Meeting = require("../models/Meeting");

// @route   GET /api/meetings/slots
// @desc    Get available slots for a date
// @access  Public
router.get("/slots", async (req, res) => {
  try {
    const { date } = req.query; // Format: YYYY-MM-DD
    if (!date) return res.status(400).json({ message: "Date is required" });

    // Define working hours (e.g., 9 AM to 5 PM UTC)
    // Ideally this should be configurable or based on timezone
    // For simplicity, assuming local time 9-17 for now, but handling dates can be tricky.
    // Let's assume slots are fixed 9:00, 9:30 ... 16:30.

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Fetch existing meetings for the date
    const meetings = await Meeting.find({
      startTime: { $gte: startOfDay, $lte: endOfDay },
      status: "scheduled",
    });

    // Generate all possible slots
    const slots = [];
    const workStartHour = 9;
    const workEndHour = 17; // 5 PM

    for (let h = workStartHour; h < workEndHour; h++) {
      // :00 slot
      slots.push({ hours: h, minutes: 0 });
      // :30 slot
      slots.push({ hours: h, minutes: 30 });
    }

    // Filter out booked slots
    // We compare ISO timestamps or simplified time checks

    const availableSlots = slots
      .filter((slot) => {
        const slotTime = new Date(date);
        slotTime.setHours(slot.hours, slot.minutes, 0, 0);

        // Check if any meeting starts at this time
        const isBooked = meetings.some((meeting) => {
          return new Date(meeting.startTime).getTime() === slotTime.getTime();
        });

        return !isBooked;
      })
      .map((slot) => {
        // Return formatted time or ISO string
        const slotTime = new Date(date);
        slotTime.setHours(slot.hours, slot.minutes, 0, 0);
        return {
          time: `${slot.hours.toString().padStart(2, "0")}:${slot.minutes
            .toString()
            .padStart(2, "0")}`,
          iso: slotTime.toISOString(),
        };
      });

    res.json(availableSlots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

const { protect } = require("../middleware/authMiddleware");

// ... (existing GET /slots code)

// @route   POST /api/meetings/book
// @desc    Book a meeting (Internal or via Cal.com sync)
// @access  Public
router.post("/book", async (req, res) => {
  const {
    name,
    email,
    purpose,
    slotIso,
    startTime: reqStartTime,
    endTime: reqEndTime,
  } = req.body;

  try {
    // Determine start/end times
    // If coming from Cal.com, might have explicit startTime/endTime
    // If internal, use slotIso
    let startTime, endTime;

    if (slotIso) {
      startTime = new Date(slotIso);
      endTime = new Date(startTime.getTime() + 30 * 60000);
    } else if (reqStartTime) {
      startTime = new Date(reqStartTime);
      endTime = reqEndTime
        ? new Date(reqEndTime)
        : new Date(startTime.getTime() + 30 * 60000);
    } else {
      return res.status(400).json({ message: "Start time is required" });
    }

    // Check if duplicate (optional, but good for data integrity)
    // For Cal.com sync, we might just want to log it even if it overlaps (unlikely if Cal.com handles it)
    const existingMeeting = await Meeting.findOne({
      startTime,
      status: "scheduled",
    });

    if (existingMeeting) {
      // If it's a sync, maybe we just return success?
      // For now, let's error to be safe, or just return the existing one.
      return res.status(409).json({ message: "Slot already booked" });
    }

    const meeting = await Meeting.create({
      name: name || "Cal.com User", // Fallbacks
      email: email || "no-email@provided.com",
      purpose: purpose || "Scheduled via Cal.com",
      startTime,
      endTime,
    });

    res.status(201).json(meeting);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Slot already booked" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET /api/meetings/all
// @desc    Get all meetings for admin
// @access  Private
router.get("/all", protect, async (req, res) => {
  try {
    const meetings = await Meeting.find({}).sort({ startTime: -1 });
    res.json(meetings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

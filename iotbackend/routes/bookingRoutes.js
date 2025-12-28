const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Webhook handler for Cal.com
router.post('/webhook', async (req, res) => {
  try {
    const { triggerEvent, payload } = req.body;

    console.log('Received Cal.com Webhook:', triggerEvent);

    if (triggerEvent === 'BOOKING_CREATED') {
      const bookingData = {
        bookingId: payload.uid,
        title: payload.title,
        startTime: new Date(payload.startTime),
        endTime: new Date(payload.endTime),
        attendeeName: payload.attendees[0]?.name || 'Unknown',
        attendeeEmail: payload.attendees[0]?.email || 'Unknown',
        hostName: payload.organizer?.name,
        hostEmail: payload.organizer?.email,
        payload: payload
      };

      const newBooking = new Booking(bookingData);
      await newBooking.save();
      
      console.log('Booking saved to database:', payload.uid);
    }

    res.status(200).json({ message: 'Webhook received' });
  } catch (error) {
    console.error('Webhook Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

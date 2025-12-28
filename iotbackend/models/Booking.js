const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  attendeeName: {
    type: String,
    required: true
  },
  attendeeEmail: {
    type: String,
    required: true
  },
  hostName: {
    type: String,
  },
  hostEmail: {
    type: String,
  },
  status: {
    type: String,
    default: 'confirmed'
  },
  payload: {
    type: Object // Store the raw payload for future reference if needed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', BookingSchema);

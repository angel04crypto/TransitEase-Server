const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: String, // Firebase UID
    required: true
  },
  transport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transport',
    required: true
  },
  travelDate: {
    type: String,
    required: true
  },
  bookedPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'pending_redirect'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
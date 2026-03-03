const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['train', 'bus', 'flight', 'car'],
    },
    provider: {
        type: String,
        required: true,
    },
    vehicleNumber: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String, // You could also use Date
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seatsAvailable: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    amenities: {
        type: [String],
        default: [],
    },
    redirectUrl: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Transport', transportSchema);

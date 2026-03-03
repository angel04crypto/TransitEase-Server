const Booking = require('../models/Booking');

const bookingController = {

  createBooking: async (req, res) => {
    try {
      const { transportId, travelDate, price } = req.body;

      const booking = new Booking({
        user: req.user.uid,
        transport: transportId,
        travelDate,
        bookedPrice: price
      });

      await booking.save();
      res.status(201).json(booking);

    } catch (err) {
      console.error("Create Booking Error:", err.message);
      res.status(500).json({ message: "Error creating booking" });
    }
  },

  getUserBookings: async (req, res) => {
    try {
      const bookings = await Booking.find({ user: req.user.uid })
        .populate('transport')
        .sort({ createdAt: -1 });

      res.status(200).json(bookings);

    } catch (err) {
      console.error("Get Bookings Error:", err.message);
      res.status(500).json({ message: "Error fetching bookings" });
    }
  }

};

module.exports = bookingController;
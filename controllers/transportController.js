const Transport = require('../models/Transport');

const transportController = {
    // PUBLIC
    getTransports: async (req, res) => {
    try {
        const { type, source, destination, minPrice, maxPrice, minRating, sortBy } = req.query;

        const filter = {};
        if (type) filter.type = type;
        if (source) filter.source = new RegExp(source, 'i');
        if (destination) filter.destination = new RegExp(destination, 'i');

        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        if (minRating) {
            filter.rating = { $gte: Number(minRating) };
        }

        let sort = {};
        if (sortBy === 'price_asc') sort.price = 1;
        else if (sortBy === 'price_desc') sort.price = -1;
        else if (sortBy === 'rating_desc') sort.rating = -1;
        else if (sortBy === 'duration_asc') sort.duration = 1;
        else sort.createdAt = -1;

        const transports = await Transport.find(filter).sort(sort);
        res.status(200).json(transports);
    } catch (err) {
        console.error('Get Transports Error:', err.message);
        res.status(500).json({ message: 'Error fetching transports' });
    }
},

    getTransportById: async (req, res) => {
        try {
            const transport = await Transport.findById(req.params.id);
            if (!transport) {
                return res.status(404).json({ message: 'Transport not found' });
            }
            res.status(200).json(transport);
        } catch (err) {
            console.error('Get Transport By Id Error:', err.message);
            res.status(500).json({ message: 'Error fetching transport details' });
        }
    },

    // ADMIN ONLY
    createTransport: async (req, res) => {
        try {
            const transport = new Transport(req.body);
            await transport.save();
            res.status(201).json(transport);
        } catch (err) {
            console.error('Create Transport Error:', err.message);
            res.status(400).json({ message: 'Error creating transport entry' });
        }
    },

    updateTransport: async (req, res) => {
        try {
            const transport = await Transport.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!transport) {
                return res.status(404).json({ message: 'Transport not found' });
            }
            res.status(200).json(transport);
        } catch (err) {
            console.error('Update Transport Error:', err.message);
            res.status(400).json({ message: 'Error updating transport entry' });
        }
    },

    deleteTransport: async (req, res) => {
        try {
            const transport = await Transport.findByIdAndDelete(req.params.id);
            if (!transport) {
                return res.status(404).json({ message: 'Transport not found' });
            }
            res.status(200).json({ message: 'Transport entry deleted successfully' });
        } catch (err) {
            console.error('Delete Transport Error:', err.message);
            res.status(500).json({ message: 'Error deleting transport entry' });
        }
    }
};

module.exports = transportController;

const admin = require('../config/firebase');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Missing or invalid token' });
    }

    const token = authHeader.split('Bearer ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (err) {
        console.error('Verify Token Error:', err.message);
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const adminOnly = async (req, res, next) => {
    try {
        const user = await User.findOne({ firebaseUid: req.user.uid });

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Admin access only' });
        }

        next();
    } catch (err) {
        console.error('Admin Check Error:', err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { verifyToken, adminOnly };

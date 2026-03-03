const User = require('../models/User');

const userController = {
    syncUser: async (req, res) => {
        try {
            const { uid, name, email } = req.user;

            let user = await User.findOne({ firebaseUid: uid });

            if (!user) {
                // If it's the first login, create the user in MongoDB
                user = new User({
                    firebaseUid: uid,
                    name: name || email.split('@')[0], // Fallback if name is missing from Firebase
                    email,
                    role: 'user', // Default role
                });
                await user.save();
                console.log('New user synced to MongoDB:', user.email);
            }

            res.status(200).json(user);
        } catch (err) {
            console.error('Sync User Error:', err.message);
            res.status(500).json({ message: 'Error syncing user information' });
        }
    },

    getProfile: async (req, res) => {
        try {
            const user = await User.findOne({ firebaseUid: req.user.uid });
            if (!user) {
                return res.status(404).json({ message: 'User not found in database' });
            }
            res.status(200).json(user);
        } catch (err) {
            console.error('Get Profile Error:', err.message);
            res.status(500).json({ message: 'Error fetching user profile' });
        }
    }
};

module.exports = userController;

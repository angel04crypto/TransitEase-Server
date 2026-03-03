const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

// Protected: Sync user from Firebase to MongoDB
router.post('/sync', verifyToken, userController.syncUser);
router.get('/profile', verifyToken, userController.getProfile);

module.exports = router;

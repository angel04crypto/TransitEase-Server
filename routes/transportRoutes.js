const express = require('express');
const router = express.Router();
const transportController = require('../controllers/transportController');
const { verifyToken, adminOnly } = require('../middleware/authMiddleware');

// Public
router.get('/', transportController.getTransports);
router.get('/:id', transportController.getTransportById);

// Admin Only
router.post('/', verifyToken, adminOnly, transportController.createTransport);
router.put('/:id', verifyToken, adminOnly, transportController.updateTransport);
router.delete('/:id', verifyToken, adminOnly, transportController.deleteTransport);

module.exports = router;

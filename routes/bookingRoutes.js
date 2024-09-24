const express = require('express');
const router = express.Router();
const { createRoom, bookRoom, listRooms, listBookings } = require('../controllers/bookingController');

// POST: Create a new room
router.post('/rooms', createRoom);

// POST: Book a room
router.post('/book', bookRoom);

// GET: List all rooms
router.get('/rooms', listRooms);

// GET: List all bookings
router.get('/bookings', listBookings);

module.exports = router;

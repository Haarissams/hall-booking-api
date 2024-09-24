const { rooms } = require('../data/rooms');
const { bookings } = require('../data/bookings');
const { isRoomAvailable } = require('../utils/validation');

/**
 * Create a new room
 */
const createRoom = (req, res) => {
    const { roomName, seats, amenities, pricePerHour } = req.body;

    // Validate request input
    if (!roomName || !seats || !pricePerHour) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new room
    const newRoom = {
        id: rooms.length + 1,
        roomName,
        seats,
        amenities,
        pricePerHour
    };
    
    rooms.push(newRoom); // Save the new room
    res.status(201).json({ message: 'Room created successfully', room: newRoom });
};

/**
 * Book a room ensuring no time/date conflicts
 */
const bookRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    // Validate request input
    if (!customerName || !date || !startTime || !endTime || !roomId) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the room is available for the given date and time
    if (!isRoomAvailable(roomId, date, startTime, endTime)) {
        return res.status(400).json({ message: 'Room is already booked for the selected time' });
    }

    // Create new booking
    const newBooking = {
        id: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId
    };

    bookings.push(newBooking); // Save the booking
    res.status(201).json({ message: 'Booking successful', booking: newBooking });
};

/**
 * List all available rooms
 */
const listRooms = (req, res) => {
    res.status(200).json(rooms);
};

/**
 * List all bookings made
 */
const listBookings = (req, res) => {
    res.status(200).json(bookings);
};

module.exports = { createRoom, bookRoom, listRooms, listBookings };

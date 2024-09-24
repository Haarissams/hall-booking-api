const { bookings } = require('../data/bookings');

/**
 * Check if the room is available for the selected time and date
 * @param {Number} roomId - ID of the room to be booked
 * @param {String} date - Date of the booking
 * @param {String} startTime - Start time of the booking
 * @param {String} endTime - End time of the booking
 * @returns {Boolean} - Returns true if the room is available, false if already booked
 */
const isRoomAvailable = (roomId, date, startTime, endTime) => {
    return !bookings.some(booking => 
        booking.roomId === roomId &&
        booking.date === date &&
        (
            (startTime >= booking.startTime && startTime < booking.endTime) ||
            (endTime > booking.startTime && endTime <= booking.endTime)
        )
    );
};

module.exports = { isRoomAvailable };

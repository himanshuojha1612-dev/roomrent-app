// roomrent-app/src/routes/bookings.js
const express = require('express');
const router = express.Router();

let bookings = [];

router.post('/', (req, res) => {
    const booking = { id: bookings.length+1, ...req.body };
    bookings.push(booking);
    res.json({ message: "Booking successful", booking });
});

router.get('/', (req, res) => {
    res.json(bookings);
});

module.exports = router;

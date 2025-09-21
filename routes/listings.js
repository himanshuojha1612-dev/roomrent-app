// roomrent-app/src/routes/listings.js
const express = require('express');
const router = express.Router();

let listings = [
    { id: 1, title: "Single Room", price: 5000 },
    { id: 2, title: "Double Room", price: 8000 }
];

router.get('/', (req, res) => {
    res.json(listings);
});

module.exports = router;

// roomrent-app/src/routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Sample users (for testing)
const users = [
    { id: 1, email: "sita@local", password: "$2a$10$examplehashed", role: "tenant" },
    { id: 2, email: "ramesh@local", password: "$2a$10$examplehashed", role: "landlord" },
    { id: 3, email: "admin@local", password: "$2a$10$examplehashed", role: "admin" }
];

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if(!user) return res.status(401).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if(!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, role: user.role });
});

module.exports = router;

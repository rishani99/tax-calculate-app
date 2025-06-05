const express = require('express');
const router = express.Router();
const Individual = require('../models/Individual');

router.post('/', async (req, res) => {
    try {
        const individual = new Individual(req.body);
        await individual.save();
        res.status(201).json({ message: 'Individual registered successfully' });
    } catch (err) {
        console.error('Register Error:', err);
        res.status(500).json({ message: 'Failed to register individual' });
    }
    }
);

module.exports = router;
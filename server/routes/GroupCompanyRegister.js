const express = require('express');
const router = express.Router();
const Company = require('../models/ForeignCompanyRegister');

router.post('/', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Foreign company registered successfully' });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ message: 'Failed to register foreign company' });
  }
});


module.exports = router;
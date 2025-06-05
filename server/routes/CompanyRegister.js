const express = require('express');
const router = express.Router();
const Company = require('../models/CompanyRegister');

router.post('/', async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company registered successfully' });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ message: 'Failed to register company' });
  }
});

module.exports = router;

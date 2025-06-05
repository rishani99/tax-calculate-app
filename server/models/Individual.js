const mongoose = require('mongoose');

const individualSchema = new mongoose.Schema({
  registrationNumber: String,
  fullName: String,
  address: String,
  mobile: String,
  email: String,
  nic: String,
  dob: String
});

module.exports = mongoose.model('Individual', individualSchema);

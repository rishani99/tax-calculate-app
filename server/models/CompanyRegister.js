const mongoose = require('mongoose');

const companyRegisterSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  nameEnglish: { type: String, required: true },
  nameSinhala: String,
  nameTamil: String,
  companyType: String,
  dateOfIncorporation: { type: Date },
  country: String,
  address: String,
  mobile: String,
  email: String,
  directorName: String,
  directorID: String,
  authorizedPersonName: String,
  authorizedPersonID: String
}, { collection: 'CompanyRegister' });

module.exports = mongoose.model('CompanyRegister', companyRegisterSchema);

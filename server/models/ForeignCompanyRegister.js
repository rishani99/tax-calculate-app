const mongoose = require('mongoose');

const foreignCompanyRegisterSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  nameEnglish: { type: String, reqired: true },
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
}, { collection: 'ForeignCompanyRegister' });

// ✅ Use this to avoid OverwriteModelError
module.exports = mongoose.models.ForeignCompanyRegister || mongoose.model('ForeignCompanyRegister', foreignCompanyRegisterSchema);

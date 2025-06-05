const mongoose = require('mongoose');

const GroupCompanyRegisterSchema = new mongoose.Schema({
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
}, { collection: 'GroupCompanyRegister' });

// ✅ Use this to avoid OverwriteModelError
module.exports = mongoose.models.GroupCompanyRegister || mongoose.model('GroupCompanyRegister', GroupCompanyRegisterSchema);

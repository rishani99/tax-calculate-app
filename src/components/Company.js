import React, { useState } from 'react';
import './Company.css';

const Company = () => {
  const [formData, setFormData] = useState({
    companyRegNo: '',
    companyNameEn: '',
    companyNameSi: '',
    companyNameTa: '',
    companyType: '',
    incorpDate: '',
    countryIncorporation: '',
    commencementDate: '',
    principalActivity: '',
    preferredLanguage: '',
    preferredAlert: '',
    website: '',
    boiRegistered: false,
    boiStartDate: '',
    boiExpiryDate: '',
    bankCode: '',
    registeredAddress: '',
    contactMobile: '',
    contactEmail: '',
    directorName: '',
    directorId: '',
    authorizedPersonName: '',
    authorizedPersonId: '',
  });

  const [generatedPin, setGeneratedPin] = useState("");

  const generatePin = () => {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedPin(pin);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePin(); // Just generate PIN without submitting to Firebase
    alert('Form processed locally. (Firebase removed)');
    setFormData({
      companyRegNo: '',
      companyNameEn: '',
      companyNameSi: '',
      companyNameTa: '',
      companyType: '',
      incorpDate: '',
      countryIncorporation: '',
      commencementDate: '',
      principalActivity: '',
      preferredLanguage: '',
      preferredAlert: '',
      website: '',
      boiRegistered: false,
      boiStartDate: '',
      boiExpiryDate: '',
      bankCode: '',
      registeredAddress: '',
      contactMobile: '',
      contactEmail: '',
      directorName: '',
      directorId: '',
      authorizedPersonName: '',
      authorizedPersonId: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Company Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Company Information</legend>
          <label>Company Registration Number *:</label>
          <input type="text" name="companyRegNo" value={formData.companyRegNo} onChange={handleChange} required />
          <label>Name of Company (English) *:</label>
          <input type="text" name="companyNameEn" value={formData.companyNameEn} onChange={handleChange} required />
          <label>Name of Company (Sinhala):</label>
          <input type="text" name="companyNameSi" value={formData.companyNameSi} onChange={handleChange} />
          <label>Name of Company (Tamil):</label>
          <input type="text" name="companyNameTa" value={formData.companyNameTa} onChange={handleChange} />
          <label>Company Type:</label>
          <input type="text" name="companyType" value={formData.companyType} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Date Information</legend>
          <label>Date of Incorporation:</label>
          <input type="date" name="incorpDate" value={formData.incorpDate} onChange={handleChange} />
          <label>Country of Incorporation:</label>
          <input type="text" name="countryIncorporation" value={formData.countryIncorporation} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          <label>Registered Address:</label>
          <textarea name="registeredAddress" value={formData.registeredAddress} onChange={handleChange} required />
          <label>Mobile:</label>
          <input type="text" name="contactMobile" value={formData.contactMobile} onChange={handleChange} required />
          <label>Email:</label>
          <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>Director Information</legend>
          <label>Director Name:</label>
          <input type="text" name="directorName" value={formData.directorName} onChange={handleChange} required />
          <label>Director ID:</label>
          <input type="text" name="directorId" value={formData.directorId} onChange={handleChange} required />
        </fieldset>

        <fieldset>
          <legend>Authorization</legend>
          <label>Authorized Person Name:</label>
          <input type="text" name="authorizedPersonName" value={formData.authorizedPersonName} onChange={handleChange} />
          <label>Authorized Person ID:</label>
          <input type="text" name="authorizedPersonId" value={formData.authorizedPersonId} onChange={handleChange} />
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {generatedPin && (
        <div className="pin-display">
          <p>Your generated PIN: {generatedPin}</p>
        </div>
      )}

      <footer className="footer">
        © 2025 Sri Lankan Tax Calculator
      </footer>
    </div>
  );
};

export default Company;

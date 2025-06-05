import React, { useState } from "react";
import "./ForeginCompany.css";

const ForeginCompany = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [formData, setFormData] = useState({
    incorporationDate: "",
    countryOfOrigin: "",
    commencementDate: "",
    registeredAddress: '',
    contactMobile: '',
    contactEmail: '',
    directorName: '',
    directorId: '',
    authorizedPersonName: '',
    authorizedPersonId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Foreign Company Form Submitted!");
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
      setPdfFile(null);
    }
  };

  return (
    <div className="foreign-form-container">
      <h2>Foreign Company Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Date of Incorporation:</label>
        <input
          type="date"
          name="incorporationDate"
          value={formData.incorporationDate}
          onChange={handleChange}
          required
        />

        <label>Country of Origin:</label>
        <input
          type="text"
          name="countryOfOrigin"
          value={formData.countryOfOrigin}
          onChange={handleChange}
          required
        />

        <label>Date of Commencement:</label>
        <input
          type="date"
          name="commencementDate"
          value={formData.commencementDate}
          onChange={handleChange}
          required
        />

<fieldset>
          <legend>Registered / Official Address</legend>
          <label>Address:</label>
          <textarea
            name="registeredAddress"
            value={formData.registeredAddress}
            onChange={handleChange}
            required
          ></textarea>

          <label>Mobile:</label>
          <input
            type="text"
            name="contactMobile"
            value={formData.contactMobile}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Director Information */}
        <fieldset>
          <legend>Director Information</legend>
          <label>Director Name:</label>
          <input
            type="text"
            name="directorName"
            value={formData.directorName}
            onChange={handleChange}
            required
          />

          <label>National Identity Card / Passport No. *:</label>
          <input
            type="text"
            name="directorId"
            value={formData.directorId}
            onChange={handleChange}
            required
          />
        </fieldset>

        {/* Authorization Information */}
        <fieldset>
          <legend>Authorization</legend>
          <label>Name of Authorized Person:</label>
          <input
            type="text"
            name="authorizedPersonName"
            value={formData.authorizedPersonName}
            onChange={handleChange}
          />

          <label>National Identity Card / Passport No. of Authorized Person:</label>
          <input
            type="text"
            name="authorizedPersonId"
            value={formData.authorizedPersonId}
            onChange={handleChange}
          />

<label className="pdf-label">signature (Need Company Seal)</label>
      <input type="file" accept="application/pdf" onChange={handlePdfUpload} />
      {pdfFile && <p>Uploaded: {pdfFile.name}</p>}

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default ForeginCompany;

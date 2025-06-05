import React, { useState, useEffect } from "react";
import "./GroupCompany.css";

const GroupCompany = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [formData, setFormData] = useState({
    parentRegNo: "",
    parentCompanyName: "",
    parentAddress: "",
    parentCountry: "",
    parentIncorpDate: "",
    registeredAddress: '',
    contactMobile: '',
    contactEmail: '',
    directorName: '',
    directorId: '',
    authorizedPersonName: '',
    authorizedPersonId: '',
    signature: '',
    date: '',
    pin: '' // Include pin in form data
  });

  const [generatedPin, setGeneratedPin] = useState("");

  // Generate Pin function
  const generatePin = () => {
    const pin = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit pin
    setGeneratedPin(pin); // Set the generated pin to state
    return pin;
  };

  // Set the generated pin when the component mounts
  useEffect(() => {
    const pin = generatePin();
    setFormData(prevFormData => ({
      ...prevFormData,
      pin: pin // Ensure the pin is part of the form data
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
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
    <div className="group-form-container">
      <h2>Group Company Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Parent Company Registration No.:</label>
        <input
          type="text"
          name="parentRegNo"
          value={formData.parentRegNo}
          onChange={handleChange}
        />

        <label>Name of Parent Company:</label>
        <input
          type="text"
          name="parentCompanyName"
          value={formData.parentCompanyName}
          onChange={handleChange}
        />

        <label>Address of Parent Company:</label>
        <textarea
          name="parentAddress"
          value={formData.parentAddress}
          onChange={handleChange}
        />

        <label>Country of Incorporation:</label>
        <input
          type="text"
          name="parentCountry"
          value={formData.parentCountry}
          onChange={handleChange}
        />

        <label>Date of Incorporation:</label>
        <input
          type="date"
          name="parentIncorpDate"
          value={formData.parentIncorpDate}
          onChange={handleChange}
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

          <label>National Identity Card / Passport No.:</label>
          <input
            type="text"
            name="directorId"
            value={formData.directorId}
            onChange={handleChange}
            required
          />
        </fieldset>

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

          {/* PDF Upload */}
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
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {/* Display the generated PIN to the user */}
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

export default GroupCompany;

import React, { useState } from "react";
import "./Individual.css";

const Individual = () => {
  const [formData, setFormData] = useState({
    nic: "",
    passportNo: "",
    passportExpiry: "",
    arrivalDate: "",
    passportCountry: "",
    salutation: "",
    initials: "",
    fullName: "",
    dob: "",
    birthCountry: "",
    gender: "",
    nationality: "",
    language: "",
    incomeSource: "",
    incomeOther: "",
    profession: "",
    residentStatus: "",
    citizenship: "",
    dualCitizen: "",
    dualCitizenCountry: "",
    website: "",
    contactMode: "",
    mobile: "",
    office: "",
    home: "",
    email: "",
    bank: "",
    account: "",
    civilStatus: "",
    spouseName: "",
    spouseNIC: "",
    spouseTIN: "",
    businessName: "",
    businessRegNo: "",
    businessActivity: "",
    businessStartDate: "",
    boiRegistered: "",
    boiStartDate: "",
    boiExpiryDate: "",
    primaryBusiness: "",
    addressEng: "",
    addressPostal: "",
    authName: "",
    authNIC: "",
    authDesignation: "",
    confirmName: "",
    confirmDesignation: "",
    confirmNIC: "",
    confirmSignature: "",
    confirmDate: "",
    number: "",
  });

  const [generatedPin, setGeneratedPin] = useState("");

  const generatePin = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example:
    if (formData.nic.trim() === "" && 
       (formData.passportNo.trim() === "" || 
        formData.passportExpiry.trim() === "" || 
        formData.arrivalDate.trim() === "" || 
        formData.passportCountry.trim() === "")) {
      alert("Please fill either NIC or full Passport details.");
      return;
    }

    if (
      formData.fullName.trim() === "" ||
      formData.dob.trim() === "" ||
      formData.birthCountry.trim() === "" ||
      formData.gender.trim() === "" ||
      formData.email.trim() === ""
    ) {
      alert("Please fill all required personal information fields.");
      return;
    }

    const pin = generatePin();
    setGeneratedPin(pin);

    alert("Form submitted successfully! Your PIN: " + pin);

    // Clear form after submission
    setFormData({
      nic: "",
      passportNo: "",
      passportExpiry: "",
      arrivalDate: "",
      passportCountry: "",
      salutation: "",
      initials: "",
      fullName: "",
      dob: "",
      birthCountry: "",
      gender: "",
      nationality: "",
      language: "",
      incomeSource: "",
      incomeOther: "",
      profession: "",
      residentStatus: "",
      citizenship: "",
      dualCitizen: "",
      dualCitizenCountry: "",
      website: "",
      contactMode: "",
      mobile: "",
      office: "",
      home: "",
      email: "",
      bank: "",
      account: "",
      civilStatus: "",
      spouseName: "",
      spouseNIC: "",
      spouseTIN: "",
      businessName: "",
      businessRegNo: "",
      businessActivity: "",
      businessStartDate: "",
      boiRegistered: "",
      boiStartDate: "",
      boiExpiryDate: "",
      primaryBusiness: "",
      addressEng: "",
      addressPostal: "",
      authName: "",
      authNIC: "",
      authDesignation: "",
      confirmName: "",
      confirmDesignation: "",
      confirmNIC: "",
      confirmSignature: "",
      confirmDate: "",
      number: "",
    });
  };

  return (
    <div className="individual-form">
      <h2>Individual Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* SECTION A */}
        <fieldset>
          <legend>SECTION A - Sri Lankan Citizens</legend>
          <label htmlFor="nic">NIC Number *</label>
          <input type="text" name="nic" value={formData.nic} onChange={handleChange} />
        </fieldset>

        {/* SECTION B */}
        <fieldset>
          <legend>SECTION B - Foreign Nationals</legend>
          <label htmlFor="passportNo">Passport No *</label>
          <input type="text" name="passportNo" value={formData.passportNo} onChange={handleChange} />

          <label htmlFor="passportExpiry">Passport Expiry *</label>
          <input type="date" name="passportExpiry" value={formData.passportExpiry} onChange={handleChange} />

          <label htmlFor="arrivalDate">Arrival Date *</label>
          <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} />

          <label htmlFor="passportCountry">Country of Issuance *</label>
          <input type="text" name="passportCountry" value={formData.passportCountry} onChange={handleChange} />
        </fieldset>

        {/* SECTION C */}
        <fieldset>
          <legend>SECTION C - Personal Information</legend>
          <label htmlFor="salutation">Salutation *</label>
          <select name="salutation" value={formData.salutation} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Rev.">Rev.</option>
            <option value="Prof.">Prof.</option>
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
          </select>

          <label htmlFor="initials">Name with Initials</label>
          <input type="text" name="initials" value={formData.initials} onChange={handleChange} />

          <label htmlFor="fullName">Full Name (English) *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label htmlFor="dob">Date of Birth *</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <label htmlFor="birthCountry">Country of Birth *</label>
          <input type="text" name="birthCountry" value={formData.birthCountry} onChange={handleChange} required />

          <label htmlFor="gender">Gender *</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="email">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="number">Phone Number *</label>
          <input type="number" name="number" value={formData.number} onChange={handleChange} required />
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {generatedPin && (
        <div className="pin-display">
          <p><strong>Your generated PIN:</strong> {generatedPin}</p>
        </div>
      )}

      <footer className="footer">
        © 2025 Sri Lankan Tax Calculator
      </footer>
    </div>
  );
};

export default Individual;

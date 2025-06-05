import React, { useState } from "react";
import "./SSCL.css";

const SSCL = () => {
  const [saleAmount, setSaleAmount] = useState('');
  const [tax, setTax] = useState(null);
  const [uploadedPDFs, setUploadedPDFs] = useState({
    Q1: null,
    Q2: null,
    Q3: null,
    Q4: null,
  });

  const calculateTax = () => {
    const ssclRate = 0.025; // 2.5%
    const calculatedTax = parseFloat(saleAmount) * ssclRate;
    setTax(calculatedTax.toFixed(2));
  };

  const quarters = [
    { quarter: "Q1", period: "2420", submissionDate: "2024-07-31" },
    { quarter: "Q2", period: "2430", submissionDate: "2024-10-31" },
    { quarter: "Q3", period: "2440", submissionDate: "2024-01-31" },
    { quarter: "Q4", period: "2510", submissionDate: "2025-04-31" },
  ];

  const handleFileUpload = (quarter, file) => {
    if (file && file.type === "application/pdf") {
      setUploadedPDFs((prev) => ({
        ...prev,
        [quarter]: file,
      }));
      alert(`${quarter} PDF uploaded: ${file.name}`);
    } else {
      alert(`Please upload a valid PDF file for ${quarter}.`);
    }
  };

  const handleSubmit = (quarter) => {
    if (uploadedPDFs[quarter]) {
      alert(`${quarter} PDF submitted successfully.`);
    } else {
      alert(`Please upload a PDF for ${quarter} before submitting.`);
    }
  };

  return (
    <div className="sscl-container">
      <h2>Social Security Contribution Levy (SSCL) Calculator</h2>

      <div className="form-section">
        <label>Enter Your Sale Amount (Rs.):</label>
        <input
          type="number"
          value={saleAmount}
          onChange={(e) => setSaleAmount(e.target.value)}
          placeholder="Eg: 1000000"
        />
        <button onClick={calculateTax}>Calculate SSCL</button>
      </div>

      {tax !== null && (
        <div className="result-section">
          <h3>Your SSCL:</h3>
          <p>Rs. {tax}</p>
        </div>
      )}

      <div className="schedule-section">
        <h3>Quarterly Sales Schedule</h3>
        <br></br>
        
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Period</th>
              <th>Last Sub:Date</th>
              <th>Upload PDF</th>
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            {quarters.map((q, index) => (
              <tr key={index}>
                <td>{q.quarter}</td>
                <td>{q.period}</td>
                <td>{q.submissionDate}</td>
                <td>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => handleFileUpload(q.quarter, e.target.files[0])}
                  />
                  {uploadedPDFs[q.quarter] && (
                    <p style={{ fontSize: "12px" }}>
                      Uploaded: {uploadedPDFs[q.quarter].name}
                    </p>
                  )}
                </td>
                <td>
                  <button onClick={() => handleSubmit(q.quarter)}>
                    Submit {q.quarter} Schedule / Payments Slip PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default SSCL;

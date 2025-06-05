import React, { useState } from "react";
import "./BGL.css";

const BGL = () => {
  const [grossProfit, setGrossProfit] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [tax, setTax] = useState(null);
  const [note, setNote] = useState('');
  const [uploadedPDFs, setUploadedPDFs] = useState({
    Q1: null,
    Q2: null,
    Q3: null,
    Q4: null,
  });

  const quarters = [
    { quarter: "Q1", period: "24/20", submissionDate: "2024-04-30" },
    { quarter: "Q2", period: "24/30", submissionDate: "2024-07-31" },
    { quarter: "Q3", period: "24/40", submissionDate: "2024-10-31" },
    { quarter: "Q4", period: "25/10", submissionDate: "2025-01-31" },
  ];

  const calculateTax = () => {
    const gross = parseFloat(grossProfit) || 0;
    const monthly = parseFloat(monthlyPayment) || 0;

    if (gross < 1000000) {
      setTax(0);
      setNote("Gross profit is less than LKR 1,000,000. Tax Free.");
    } else {
      const grossTax = gross * 0.15;
      const reducedTax = grossTax - monthly;
      const finalTax = reducedTax < 0 ? 0 : reducedTax;
      setTax(finalTax.toFixed(2));
      setNote("");
    }
  };

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
    alert(`${quarter} submitted successfully!`);
    // You can add further logic here (API call, saving to db, etc.)
  };

  return (
    <div className="sscl-container">
      <h2>Betting & Gaming Levy(BGL) Calculator</h2>

      <div className="form-section">
        <label>Gross Profit (Rs.):</label>
        <input
          type="number"
          value={grossProfit}
          onChange={(e) => setGrossProfit(e.target.value)}
          placeholder="Eg: 1000000"
        />

        <label>Monthly Payments (3 months total):</label>
        <input
          type="number"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
          placeholder="Eg: 15000"
        />

        <button onClick={calculateTax}>Calculate Tax</button>
      </div>

      {tax !== null && (
        <div className="result-section">
          <h3>Calculated BGL Tax:</h3>
          <p>Rs. {tax}</p>
          {note && <p style={{ color: "green" }}>{note}</p>}
        </div>
      )}

      <div className="schedule-section">
        <h3>Quarterly Submission & Upload</h3>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Period</th>
              <th>Submission Deadline</th>
              <th>Upload PDF + Submit</th>
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
                    onChange={(e) =>
                      handleFileUpload(q.quarter, e.target.files[0])
                    }
                  />
                  {uploadedPDFs[q.quarter] && (
                    <p style={{ fontSize: "12px" }}>
                      Uploaded: {uploadedPDFs[q.quarter].name}
                    </p>
                  )}
                  <button
                    style={{ marginTop: "5px" }}
                    onClick={() => handleSubmit(q.quarter)}
                  >
                    Submit {q.quarter}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

      </div>
    </div>
  );
};

export default BGL;

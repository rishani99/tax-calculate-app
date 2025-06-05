import React, { useState } from "react";
import "./VAT.css";

const VAT = () => {
  const [salesAmount, setSalesAmount] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [vatAmount, setVatAmount] = useState(null);

  // File states for each Quarter
  const [inputScheduleQ1, setInputScheduleQ1] = useState(null);
  const [outputScheduleQ1, setOutputScheduleQ1] = useState(null);

  const [inputScheduleQ2, setInputScheduleQ2] = useState(null);
  const [outputScheduleQ2, setOutputScheduleQ2] = useState(null);

  const [inputScheduleQ3, setInputScheduleQ3] = useState(null);
  const [outputScheduleQ3, setOutputScheduleQ3] = useState(null);

  const [inputScheduleQ4, setInputScheduleQ4] = useState(null);
  const [outputScheduleQ4, setOutputScheduleQ4] = useState(null);

  const calculateTax = () => {
    const vatRate = 0.18;
    const salesVAT = parseFloat(salesAmount) * vatRate || 0;
    const purchaseVAT = parseFloat(purchaseAmount) * vatRate || 0;
    const monthly = parseFloat(monthlyPayment) || 0;

    const finalVAT = salesVAT - purchaseVAT - monthly;
    setVatAmount(finalVAT.toFixed(2));
  };

  const handleFileUpload = (type, quarter, file) => {
    if (file && file.type === "application/pdf") {
      if (quarter === "Q1") {
        if (type === "input") setInputScheduleQ1(file);
        else setOutputScheduleQ1(file);
      } else if (quarter === "Q2") {
        if (type === "input") setInputScheduleQ2(file);
        else setOutputScheduleQ2(file);
      } else if (quarter === "Q3") {
        if (type === "input") setInputScheduleQ3(file);
        else setOutputScheduleQ3(file);
      } else if (quarter === "Q4") {
        if (type === "input") setInputScheduleQ4(file);
        else setOutputScheduleQ4(file);
      }
      alert(`${type === "input" ? "Input Schedule" : "Output Schedule"} uploaded for ${quarter}: ${file.name}`);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleSubmitQuarter = (quarter) => {
    let inputFile, outputFile;
    if (quarter === "Q1") {
      inputFile = inputScheduleQ1;
      outputFile = outputScheduleQ1;
    } else if (quarter === "Q2") {
      inputFile = inputScheduleQ2;
      outputFile = outputScheduleQ2;
    } else if (quarter === "Q3") {
      inputFile = inputScheduleQ3;
      outputFile = outputScheduleQ3;
    } else if (quarter === "Q4") {
      inputFile = inputScheduleQ4;
      outputFile = outputScheduleQ4;
    }

    if (inputFile && outputFile) {
      alert(`${quarter} submitted successfully!`);
      // Backend submit logic can be added here
    } else {
      alert(`Please upload both Input and Output files for ${quarter}.`);
    }
  };

  return (
    <div className="vat-container">
      <h2>Value Added Tax (VAT) Calculator</h2>

      <div className="form-section">
        <label>VAT Sales Amount (Rs.):</label>
        <input
          type="number"
          value={salesAmount}
          onChange={(e) => setSalesAmount(e.target.value)}
          placeholder="Eg: 50000"
        />

        <label>VAT Purchase Amount (Rs.):</label>
        <input
          type="number"
          value={purchaseAmount}
          onChange={(e) => setPurchaseAmount(e.target.value)}
          placeholder="Eg: 30000"
        />

        <label>Total Monthly Payments (Rs.):</label>
        <input
          type="number"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
          placeholder="Eg: 5000"
        />

        <button onClick={calculateTax}>Calculate VAT</button>
      </div>

      {vatAmount !== null && (
        <div className="result-section">
          <h3>Final VAT Payable:</h3>
          <p>Rs. {vatAmount}</p>
        </div>
      )}

      {/* File Submissions Section */}
      <div className="submission-section">
        <h3>Quarterly File Submission</h3>

        {/* Q1 */}
        <div className="quarter-block">
          <h4>Q1</h4>
          <label>Input Schedule / Credit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("input", "Q1", e.target.files[0])}
          />
          {inputScheduleQ1 && <p style={{ fontSize: "12px" }}>Uploaded: {inputScheduleQ1.name}</p>}

          <label>Output Schedule / Debit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("output", "Q1", e.target.files[0])}
          />
          {outputScheduleQ1 && <p style={{ fontSize: "12px" }}>Uploaded: {outputScheduleQ1.name}</p>}

          <button onClick={() => handleSubmitQuarter("Q1")}>Submit Q1</button>
        </div>

        {/* Q2 */}
        <div className="quarter-block">
          <h4>Q2</h4>
          <label>Input Schedule / Credit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("input", "Q2", e.target.files[0])}
          />
          {inputScheduleQ2 && <p style={{ fontSize: "12px" }}>Uploaded: {inputScheduleQ2.name}</p>}

          <label>Output Schedule / Debit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("output", "Q2", e.target.files[0])}
          />
          {outputScheduleQ2 && <p style={{ fontSize: "12px" }}>Uploaded: {outputScheduleQ2.name}</p>}

          <button onClick={() => handleSubmitQuarter("Q2")}>Submit Q2</button>
        </div>

        {/* Q3 */}
        <div className="quarter-block">
          <h4>Q3</h4>
          <label>Input Schedule / Credit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("input", "Q3", e.target.files[0])}
          />
          {inputScheduleQ3 && <p style={{ fontSize: "12px" }}>Uploaded: {inputScheduleQ3.name}</p>}

          <label>Output Schedule / Debit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("output", "Q3", e.target.files[0])}
          />
          {outputScheduleQ3 && <p style={{ fontSize: "12px" }}>Uploaded: {outputScheduleQ3.name}</p>}

          <button onClick={() => handleSubmitQuarter("Q3")}>Submit Q3</button>
        </div>

        {/* Q4 */}
        <div className="quarter-block">
          <h4>Q4</h4>
          <label>Input Schedule / Credit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("input", "Q4", e.target.files[0])}
          />
          {inputScheduleQ4 && <p style={{ fontSize: "12px" }}>Uploaded: {inputScheduleQ4.name}</p>}

          <label>Output Schedule / Debit Note:</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => handleFileUpload("output", "Q4", e.target.files[0])}
          />
          {outputScheduleQ4 && <p style={{ fontSize: "12px" }}>Uploaded: {outputScheduleQ4.name}</p>}

          <button onClick={() => handleSubmitQuarter("Q4")}>Submit Q4</button>
        </div>
      </div>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default VAT;

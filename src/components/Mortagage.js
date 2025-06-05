import React, { useState } from "react";
import "./Mortagage.css";

const Mortgage = () => {
  const [amount, setAmount] = useState("");
  const [duty, setDuty] = useState(null);

  const calculateDuty = () => {
    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    let dutyAmount = 0;

    if (val <= 300000) {
      dutyAmount = 0;
    } else {
      dutyAmount = (val - 300000) * 0.001;
    }

    setDuty(dutyAmount.toFixed(2));
  };

  return (
    <div className="mortgage-container">
      <h2>Mortgage Deed Stamp Duty Calculator</h2>
      <div className="form-section">
        <label>Enter Mortgage Value (Rs.):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Eg: 500000"
        />
        <button onClick={calculateDuty}>Calculate Stamp Duty</button>
      </div>

      {duty !== null && (
        <div className="result-section">
          <h3>Stamp Duty Payable:</h3>
          <p>Rs. {duty}</p>
        </div>
      )}
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default Mortgage;

import React, { useState } from "react";
import "./DTP.css";

const DTP = () => {
  const [saleAmount, setSaleAmount] = useState("");
  const [duty, setDuty] = useState(null);

  const calculateDuty = () => {
    const amount = parseFloat(saleAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    let dutyAmount = 0;

    if (amount <= 100000) {
      dutyAmount = amount * 0.03;
    } else {
      dutyAmount = 100000 * 0.03 + (amount - 100000) * 0.04;
    }

    setDuty(dutyAmount.toFixed(2));
  };

  return (
    <div className="dtp-container">
      <h2>Deed of Transfer of Property (DTP)</h2>
      <div className="form-section">
        <label>Enter Sale Amount (Rs.):</label>
        <input
          type="number"
          value={saleAmount}
          onChange={(e) => setSaleAmount(e.target.value)}
          placeholder="Eg: 250000"
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

export default DTP;

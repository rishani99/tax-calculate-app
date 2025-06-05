import React, { useState } from "react";
import "./GTP.css";

const GTP = () => {
  const [giftAmount, setGiftAmount] = useState("");
  const [duty, setDuty] = useState(null);

  const calculateDuty = () => {
    const amount = parseFloat(giftAmount);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    let dutyAmount = 0;

    if (amount <= 50000) {
      dutyAmount = amount * 0.03;
    } else {
      dutyAmount = 50000 * 0.03 + (amount - 50000) * 0.02;
    }

    setDuty(dutyAmount.toFixed(2));
  };

  return (
    <div className="gtp-container">
      <h2>Gift Deed Transfer of Property (GTP)</h2>
      <div className="form-section">
        <label>Enter Gift Value (Rs.):</label>
        <input
          type="number"
          value={giftAmount}
          onChange={(e) => setGiftAmount(e.target.value)}
          placeholder="Eg: 100000"
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

export default GTP;

import React, { useState } from "react";
import "./LeaseAgreement.css";

const LeaseAgreement = () => {
  const [rental, setRental] = useState("");
  const [months, setMonths] = useState("");
  const [duty, setDuty] = useState(null);

  const calculateStampDuty = () => {
    const rent = parseFloat(rental);
    const duration = parseInt(months);

    if (isNaN(rent) || isNaN(duration) || rent <= 0 || duration <= 0) {
      alert("Please enter valid rental amount and months.");
      return;
    }

    if (rent <= 5000) {
      setDuty("0.00 (Exempted)");
    } else {
      const stampDuty = rent * duration * 0.01;
      setDuty(stampDuty.toFixed(2));
    }
  };

  return (
    <div className="lease-container">
      <h2>Lease Agreement </h2>

      <div className="form-section">
        <label>Monthly Rental Amount (Rs.):</label>
        <input
          type="number"
          value={rental}
          onChange={(e) => setRental(e.target.value)}
          placeholder="Eg: 10000"
        />

        <label>Agreement Period (Months):</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          placeholder="Eg: 12"
        />

        <button onClick={calculateStampDuty}>Calculate Stamp Duty</button>
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

export default LeaseAgreement;

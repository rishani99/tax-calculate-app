import React, { useState } from "react";
import "./STL.css";

const STL = () => {
  const [shareSellValue, setShareSellValue] = useState(""); // State for Share Sell Value
  const [shareBuyValue, setShareBuyValue] = useState("");   // State for Share Buy Value
  const [stampDuty, setStampDuty] = useState(null);         // State for Stamp Duty result

  const calculateStampDuty = () => {
    // Parse the share values as floating point numbers
    const sellValue = parseFloat(shareSellValue);
    const buyValue = parseFloat(shareBuyValue);

    // Check if both values are numbers and if Sell Value is greater than Buy Value
    if (!isNaN(sellValue) && !isNaN(buyValue) && sellValue > buyValue) {
      // Calculate the difference between Sell and Buy Values
      const difference = sellValue - buyValue;

      // Calculate Stamp Duty (0.3% of the difference)
      const duty = difference * 0.003;

      // Update the state with the calculated stamp duty
      setStampDuty(duty.toFixed(2)); // Set the result rounded to two decimal places
    } else {
      // If inputs are invalid or Sell Value is not greater than Buy Value, reset stamp duty
      setStampDuty(null);
    }
  };

  return (
    <div className="stl-container">
      <h2>Share Transfer Calculator</h2>
      <div className="input-section">
        <label>Share Sell Value (Rs.):</label>
        <input
          type="number"
          placeholder="Eg: 500000"
          value={shareSellValue}
          onChange={(e) => setShareSellValue(e.target.value)} // Handle Share Sell Value input
        />
        <label>Share Buy Value (Rs.):</label>
        <input
          type="number"
          placeholder="Eg: 400000"
          value={shareBuyValue}
          onChange={(e) => setShareBuyValue(e.target.value)} // Handle Share Buy Value input
        />
        <button onClick={calculateStampDuty}>Calculate</button>
      </div>

      {/* Show the calculated Stamp Duty */}
      {stampDuty !== null && (
        <div className="result-section">
          <h3>Stamp Duty (0.3%):</h3>
          <p>Rs. {stampDuty}</p>
        </div>
      )}

      {/* If the values are invalid, show an error message */}
      {stampDuty === null && (shareSellValue || shareBuyValue) && (
        <div className="error-message">
          <p>Please enter valid values where Sell Value is greater than Buy Value.</p>
        </div>
      )}
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default STL;

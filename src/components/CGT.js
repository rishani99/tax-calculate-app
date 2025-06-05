import React, { useState } from "react";
import "./cgt.css";

const CGT = () => {
  const [sellingPrice, setSellingPrice] = useState("");
  const [cost, setCost] = useState("");
  const [additionalExpense, setAdditionalExpense] = useState("");
  const [capitalGain, setCapitalGain] = useState(null);
  const [cgtPayable, setCgtPayable] = useState(null);

  const calculateCGT = () => {
    const sell = parseFloat(sellingPrice);
    const costVal = parseFloat(cost);
    const additional = parseFloat(additionalExpense);

    if (isNaN(sell) || isNaN(costVal) || isNaN(additional)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    const gain = sell - (costVal + additional);
    const tax = gain * 0.10;

    setCapitalGain(gain.toFixed(2));
    setCgtPayable(tax.toFixed(2));
  };

  return (
    <div className="cgt-container">
      <h2>Capital Gains Tax (CGT) Calculator</h2>

      <div className="form-section">
        <label>Selling Price (Rs.):</label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          placeholder="Eg: 1000000"
        />

        <label>Purchase Cost (Rs.):</label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Eg: 800000"
        />

        <label>Additional Expense (Rs.):</label>
        <input
          type="number"
          value={additionalExpense}
          onChange={(e) => setAdditionalExpense(e.target.value)}
          placeholder="Eg: 50000"
        />

        <button onClick={calculateCGT}>Calculate CGT</button>
      </div>

      {capitalGain !== null && cgtPayable !== null && (
        <div className="result-section">
          <h3>Capital Gain: Rs. {capitalGain}</h3>
          <h3>CGT Payable (10% of Gain): Rs. {cgtPayable}</h3>
        </div>
      )}
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default CGT;

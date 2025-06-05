import React from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.css";

const taxTypes = [
  { name: "Income Tax (IT)", path: "IncomeTax" },
  { name: "Value Added Tax (VAT)", path: "vat" },
  { name: "Pay As You Earn (PAYE)", path: "paye" },
  { name: "Social Security Contribution Levy (SSCL)", path: "SSCL" },
  { name: "Capital Gain Tax", path: "CGT" },
  { name: "Stamp Duty", path: "StampDuty" },
  { name: "Betting and Gaming Levy (B&GL)", path: "BGL" },
  { name: "Share Transaction Levy", path: "STL" },
];

const Calculator = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/Calculator/${path}`);
  };

  return (
    <div className="calculator-container">
      <h2>Tax Calculator</h2>
      <div className="tax-button-grid">
        {taxTypes.map((tax, index) => (
          <button
            key={index}
            className="tax-button"
            onClick={() => handleClick(tax.path)}
          >
            {tax.name}
          </button>
        ))}
        <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

      </div>
    </div>
  );
};

export default Calculator;

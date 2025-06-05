import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const taxTypes = [
  { name: "Company", path: "Company" },
  { name: "Foreign Company", path: "ForeginCompany" },
  { name: "Group Company ", path: "GroupCompany" },
  {name: "Individual",path:"Individual"},
  // Add more as needed
];

const Calculator = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/Register/${path}`);
  };

  return (
    <div className="register-container">
      <h2>APPLICATION FORM FOR TAXPAYER REGISTRATION</h2>
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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IncomeTax.css';

const IncomeTax = () => {
  const navigate = useNavigate();

  return (
    <div className="income-tax-container">
      <h2>Income Tax Options</h2>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={() => navigate('/Register/CompanyCal')}>Company</button>
        <button onClick={() => navigate('/Register/IndividualCal')}>Individual</button>
      </div>

      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default IncomeTax;

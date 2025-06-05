import React, { useState } from 'react';
import './Account.css';

function Account() {
  const [accountType, setAccountType] = useState('');
  const [taxType, setTaxType] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleTaxChange = (e) => {
    setTaxType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const renderSummary = () => {
    let accountSummary = '';
    let taxSummary = '';

    switch (accountType) {
      case 'group':
        accountSummary = 'Group company selected. Please ensure all relevant details are provided.';
        break;
      case 'foreign':
        accountSummary = 'Foreign company selected. Make sure to include international registration info.';
        break;
      case 'individual':
        accountSummary = 'Individual selected. Ensure personal details and identification are accurate.';
        break;
      case 'company':
        accountSummary = 'Company selected. Verify all necessary corporate documents are attached.';
        break;
      default:
        accountSummary = 'Please select a valid account type.';
    }

    switch (taxType) {
      case 'income':
        taxSummary = 'Income Tax selected.';
        break;
      case 'vat':
        taxSummary = 'VAT (Value Added Tax) selected.';
        break;
      case 'sst':
        taxSummary = 'Social Security Contribution Levy (SSCL) selected.';
        break;
      case 'cgt':
        taxSummary = 'Capital Gains Tax (CGT) selected.';
        break;
      case 'stamp':
        taxSummary = 'Stamp Duty selected.';
        break;
      case 'bgl':
        taxSummary = 'Betting and Gaming Levy selected.';
        break;
      default:
        taxSummary = 'No tax type selected.';
    }

    return `${accountSummary} ${taxSummary}`;
  };

  return (
    <div className="account-container">
      <h2>Account Registration</h2>
      <form>
        <label htmlFor="accountType">Select Account Type:</label>
        <select id="accountType" value={accountType} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="group">Group Company</option>
          <option value="foreign">Foreign Company</option>
          <option value="individual">Individual</option>
          <option value="company">Company</option>
        </select>

        <label htmlFor="taxType">Select Tax Type:</label>
        <select id="taxType" value={taxType} onChange={handleTaxChange}>
          <option value="">Select...</option>
          <option value="income">Income Tax</option>
          <option value="vat">VAT</option>
          <option value="sst">SSCL</option>
          <option value="cgt">Capital Gains Tax (CGT)</option>
          <option value="stamp">Stamp Duty</option>
          <option value="BGL">Betting and Gaming Levy (BGL)</option>
          <option value="STL">Share Transaction Levy (STL)</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
        />

        <div className="summary">
          <h3>Summary:</h3>
          <p>{renderSummary()}</p>
        </div>
      </form>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
}

export default Account;

import React, { useState } from "react";
import "./CompanyCal.css";

const CompanyCal = () => {
  const [auditorName, setAuditorName] = useState("");
  const [firm, setFirm] = useState("");
  const [CARegistrationNumber, setCARegistrationNumber] = useState("");

  const [income, setIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [costOfSales, setCostOfSales] = useState("");
  const [totalExpenses, setTotalExpenses] = useState("");

  const [aggregateDisallowed, setAggregateDisallowed] = useState("");
  const [aggregateAllowable, setAggregateAllowable] = useState("");
  const [tradeLosses, setTradeLosses] = useState("");

  const [results, setResults] = useState({});

  const calculateTax = () => {
    const inc = parseFloat(income) || 0;
    const otherInc = parseFloat(otherIncome) || 0;
    const cost = parseFloat(costOfSales) || 0;
    const expenses = parseFloat(totalExpenses) || 0;
    const disallowed = parseFloat(aggregateDisallowed) || 0;
    const allowable = parseFloat(aggregateAllowable) || 0;
    const tradeLoss = parseFloat(tradeLosses) || 0;

    const totalIncome = inc + otherInc;
    const grossProfit = totalIncome - cost;
    const netProfit = grossProfit - expenses;

    const businessProfit = netProfit + disallowed - allowable;
    const taxableProfit = businessProfit + otherInc;
    const taxableIncome = businessProfit - tradeLoss;

    const taxOnInterestIncome = otherInc * 0.3;
    const taxOnTaxableIncome = taxableIncome * 0.3;

    const totalNetTaxPayable = taxOnInterestIncome + taxOnTaxableIncome;

    setResults({
      totalIncome: totalIncome.toFixed(2),
      grossProfit: grossProfit.toFixed(2),
      netProfit: netProfit.toFixed(2),
      businessProfit: businessProfit.toFixed(2),
      taxableProfit: taxableProfit.toFixed(2),
      taxableIncome: taxableIncome.toFixed(2),
      taxOnInterestIncome: taxOnInterestIncome.toFixed(2),
      taxOnTaxableIncome: taxOnTaxableIncome.toFixed(2),
      totalNetTaxPayable: totalNetTaxPayable.toFixed(2),
    });
  };

  return (
    <div className="company-cal-container">
      <h2>Company Tax Calculator</h2>

      {/* Auditor Details */}
      <input
        placeholder="Auditor Name"
        value={auditorName}
        onChange={(e) => setAuditorName(e.target.value)}
      />
      <input
        placeholder="Firm"
        value={firm}
        onChange={(e) => setFirm(e.target.value)}
      />
      <input
        placeholder="CA Registration Number"
        value={CARegistrationNumber}
        onChange={(e) => setCARegistrationNumber(e.target.value)}
      />

      <h3>Income Details</h3>
      <input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Other Income"
        value={otherIncome}
        onChange={(e) => setOtherIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cost of Sales"
        value={costOfSales}
        onChange={(e) => setCostOfSales(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Expenses"
        value={totalExpenses}
        onChange={(e) => setTotalExpenses(e.target.value)}
      />

      <h3>Adjustments</h3>
      <input
        type="number"
        placeholder="Aggregate Disallowed Items"
        value={aggregateDisallowed}
        onChange={(e) => setAggregateDisallowed(e.target.value)}
      />
      <input
        type="number"
        placeholder="Aggregate Allowable Expenses"
        value={aggregateAllowable}
        onChange={(e) => setAggregateAllowable(e.target.value)}
      />
      <input
        type="number"
        placeholder="Trade Losses Set Off"
        value={tradeLosses}
        onChange={(e) => setTradeLosses(e.target.value)}
      />

      <button onClick={calculateTax}>Calculate Tax</button>

      {results.totalIncome && (
        <div className="results">
          <h3>Calculation Results</h3>
          <p><strong>Total Income:</strong> Rs. {results.totalIncome}</p>
          <p><strong>Gross Profit:</strong> Rs. {results.grossProfit}</p>
          <p><strong>Net Profit:</strong> Rs. {results.netProfit}</p>
          <p><strong>Business Profit / (Loss):</strong> Rs. {results.businessProfit}</p>
          <p><strong>Taxable Profit / (Loss):</strong> Rs. {results.taxableProfit}</p>
          <p><strong>Taxable Income:</strong> Rs. {results.taxableIncome}</p>
          <p><strong>Tax on Interest Income (30% of Other Income):</strong> Rs. {results.taxOnInterestIncome}</p>
          <p><strong>Tax on Taxable Income (30%):</strong> Rs. {results.taxOnTaxableIncome}</p>

          {parseFloat(results.totalNetTaxPayable) >= 0 ? (
            <p><strong>Total Net Tax Payable:</strong> Rs. {results.totalNetTaxPayable}</p>
          ) : (
            <p><strong>Refund:</strong> Rs. ({Math.abs(results.totalNetTaxPayable)})</p>
          )}
        </div>
      )}
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default CompanyCal;

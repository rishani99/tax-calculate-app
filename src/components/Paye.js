import React, { useState } from "react";
import "./Paye.css";

const Paye = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [annualTax, setAnnualTax] = useState(null);
  const [breakdown, setBreakdown] = useState([]);

  const calculateTax = () => {
    const annualIncome = parseFloat(monthlyIncome) * 12;
    let tax = 0;
    const brackets = [
      { limit: 1800000, rate: 0 },
      { limit: 2800000, rate: 0.06 },
      { limit: 3300000, rate: 0.18 },
      { limit: 3800000, rate: 0.24 },
      { limit: 4300000, rate: 0.30 },
      { limit: Infinity, rate: 0.36 },
    ];

    let prevLimit = 0;
    const breakdownList = [];

    for (let i = 0; i < brackets.length; i++) {
      const { limit, rate } = brackets[i];
      if (annualIncome > limit) {
        const taxableAmount = limit - prevLimit;
        const taxForBracket = taxableAmount * rate;
        tax += taxForBracket;
        breakdownList.push({
          range: `Rs. ${prevLimit.toLocaleString()} - Rs. ${limit.toLocaleString()}`,
          rate: rate * 100,
          amount: taxForBracket.toFixed(2),
        });
        prevLimit = limit;
      } else {
        const taxableAmount = annualIncome - prevLimit;
        const taxForBracket = taxableAmount * rate;
        tax += taxForBracket;
        breakdownList.push({
          range: `Rs. ${prevLimit.toLocaleString()} - Rs. ${annualIncome.toLocaleString()}`,
          rate: rate * 100,
          amount: taxForBracket.toFixed(2),
        });
        break;
      }
    }

    setAnnualTax(tax.toFixed(2));
    setBreakdown(breakdownList);
  };

  return (
    <div className="paye-container">
      <h2>Pay As You Earn (PAYE) Tax Calculator</h2>
      <div className="form-section">
        <label>Enter Your Monthly Income (Rs.):</label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          placeholder="Eg: 100000"
        />
        <button onClick={calculateTax}>Calculate PAYE</button>
      </div>

      {annualTax !== null && (
        <div className="result-section">
          <h3>Your Annual PAYE Tax:</h3>
          <p>Rs. {annualTax}</p>

          <h4>Tax Breakdown:</h4>
          <table>
            <thead>
              <tr>
                <th>Income Range</th>
                <th>Tax Rate (%)</th>
                <th>Tax Amount (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((item, index) => (
                <tr key={index}>
                  <td>{item.range}</td>
                  <td>{item.rate}%</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default Paye;

import React, { useState } from "react";
import "./TaxChart.css";

const TaxChart = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const taxData = [
    {
      title: "Tax Rates for ​​Resident and Non-Resident Individuals​",
      table: [
        ["First Rs. 500,000/-", "6%"],
        ["Next Rs. 500,000/-", "12%"],
        ["Next Rs. 500,000/-", "18%"],
        ["Next Rs. 500,000/-", "24%"],
        ["Next Rs. 500,000/-", "30%"],
        ["On the Balance", "36%"],
        ["Gains from realization of investment assets", "10%"],
        ["Betting, liquor, tobacco income", "40%"],
      ],
    },
    {
      title: "Tax Rates for Companies",
      sections: [
        {
          heading: "Standard Rates",
          table: [
            ["Taxable income of a company (Other than companies taxed at special rates)", "30%"],
          ],
        },
        {
          heading: "Special Rates",
          table: [
            ["Gains and profits from conducting betting and gaming", "40%"],
            ["Gains and profits from manufacture and sale or import and sale of any liquor or tobacco products", "40%"],
            ["Gains from the realization of Investment Assets", "30%"],
          ],
        },
      ],
    },
    {
      title: "Remittance Tax",
      table: [
        ["Remittance tax on non-resident person", "14%"],
        ["Non-resident taxed ,if income retained 3 years and reinvested in Sri Lanka's economy.", "0%"],
      ],
    },
    {
      title: "Tax Rate for Partnerships",
      table: [
        ["Taxable income is not exceeding Rs. 1,000,000", "0%"],
        ["If balance taxable income is exceeding Rs. 1,000,000/-, on the excess of Rs. 1,000,000/-", "6%"],
        ["Gains from realization of Investment Asset", "10%"],
      ],
    },
    {
      title: "Tax Rates for Trusts",
      table: [
        ["Taxable income of a trust", "30%"],
        ["Gains from realization of Investment Asset", "10%"],
      ],
    },
    {
      title: "Tax Rates for Unit Trusts or Mutual Funds",
      table: [
        ["Taxable income of unit trusts or mutual funds", "30%"],
        ["Gains from realization of Investment Asset", "10%"],
      ],
    },
    {
      title: "Tax Rates for Non-Governmental Organization",
      table: [
        ["Taxable income of a Non-Governmental Organization", "30%"],
        ["Gains from realization of Investment Asset", "10%"],
        ["on grants, donations, or contributions received annually", "30%"],
      ],
    },
    {
      title: "Tax rates for Charitable Tnstitutions",
      table: [
        ["Taxable income of charitable institutions", "14%"],
        ["Gains from realization of Investment Asset", "10%"],
      ],
    },
    {
      title: "Tax rates for Employees Trust Funds, Provident or Pension funds and Termination Funds",
      table: [
        ["Employee funds’ taxable income includes interest, dividends, rent, and profits.", "14%"],
      ],
    },
    {
      title: "Withholding Tax (WHT)/ Advanced Income Tax (AIT)",
      table: [
        ["Payments to non-residents for transport or telecommunication services subject to tax.", "2%"],
        ["From the Sale price of any gem sold at an auction conducted by the National Gem & Jewellery Authority.", "2.5%"],
        ["Service fee payments over Rs. 100,000/month to residents subject to tax.", "5%"],
        ["Interest or discount paid", "5%"],
        ["Rent payments to a resident person (if aggregate payment exceeds Rs. 100,000 per calendar month)", "10%"],
        ["Amount pays as winning from a lottery, reward, betting or gambling", "14%"],
        ["Charge, natural resource payment or premium", "14%"],
        ["Royalty", "14%"],
        ["Rent payment to a non-resident person", "14%"],
        ["Service fee or an insurance premium payments to a non-resident person", "14%"],
        ["Dividend", "15%"],
      ],
    },
    {
      title: "Advanced Personal Income Tax (APIT)",
      details: "Tax deducted by employers from employee salaries",
    },
    {
      title: "VAT (Value Added Tax)",
      sections: [
        {
          heading: "Standard Rate",
          table: [
            ["From 01.12.2019 to 31.05.2022", "8%"],
            ["From 01.06.2022 to 31.08.2022", "12%"],
            ["From 01.09.2022 to 31.12.2023", "15%"],
            ["From 01.01.2024", "18%"],
          ],
        },
        {
          heading: "Zero Rated Supplies",
          table: [
            ["Direct export of goods & certain services", "0%"],
            ["Import of goods (fabrics) per Gazette 2095/20", "0%"],
          ],
        },
        {
          heading: "Tourism Related Services (Registered with SLTDA)",
          table: [
            ["From 01.12.2019 to 31.05.2022", "8%"],
            ["From 01.06.2022 to 31.08.2022", "12%"],
            ["From 01.09.2022 to 31.12.2023", "15%"],
            ["From 01.01.2024", "18%"],
          ],
        },
        {
          heading: "VAT on Financial Services",
          table: [
            ["Up to 31.12.2021", "15%"],
            ["With effect from 01.01.2022", "18%"],
          ],
        },
      ],
    },
    {
      title: "Social Security Contribution Levy (SSCL)",
      sections: [
        {
          heading: "SSCL Applicable Categories",
          table: [
            ["Importation of any article", "100% of the turnover", "2.5%"],
            ["Manufacture of any article", "85% of the turnover", "2.5%"],
            ["Providing a service", "", ""],
            ["Supply of Financial Service", "100% of value addition", ""],
            ["Land and improvements", "100% of the liable turnover", ""],
            ["Service other than above", "100% of the turnover", ""],
            ["Wholesale and retail sale", "", ""],
            ["Sale by a registered distributor", "25% of the turnover", ""],
            ["Wholesale/retail including importation", "50% of the turnover", ""],
          ],
        },
      ],
    },
    {
      title: "Stamp Duty",
      table: [
        ["Any Affidavit", "Rs.50"],
        ["Insurance policies per Rs.1,000", "Rs.1"],
        ["Warrant to act as a notary public", "Rs.2,000"],
        ["License to trade/work", "Rs.2,000 or 10%"],
        ["Liquor trade licenses", "Rs.20,000"],
        ["Arrack and bottled toddy licenses", "Rs.2,000 or 10%"],
        ["Credit card transactions", "Rs.25"],
        ["Share transfer/issue", "Rs.5"],
        ["Bond/mortgage value", "Rs.1"],
        ["Promissory note", "Rs.1"],
        ["Lease/hire amount", "Rs.10"],
        ["Hire purchase agreements", "Rs.10"],
        ["Above Rs.25,000", "Rs.25"],
      ],
    },
    {
      title: "Share Transaction Levy",
      table: [
        ["On the turnover (of the buyer and the seller)", "0.3%"],
      ],
    },
    {
      title: "Betting and Gaming Levy",
      sections: [
        {
          heading: "Betting Business",
          table: [
            ["Through Agents", "Rs.40,000"],
            ["With live telecast", "Rs.600,000"],
            ["Without live telecast", "Rs.50,000"],
          ],
        },
        {
          heading: "Business of Gaming",
          table: [
            ["Casino license or renewal (5 years)", "Rs. 500,000,000"],
            ["Annual casino fee", "Rs.200,000,000"],
          ],
        },
        {
          heading: "Casino Entrance Levy",
          table: [
            ["Fee from entrants", "USD 100"],
          ],
        },
        {
          heading: "Business of Bookmaker",
          table: [
            ["Tax after exceeding one million", "10%"],
          ],
        },
      ],
    },
  ];

  return (
    <div className="tax-chart-container">
      <h2>Tax Chart</h2>
      {taxData.map((item, index) => (
        <div key={index} className={`tax-item ${expanded === index ? "expanded" : ""}`}>
          <div className="tax-header" onClick={() => toggleExpand(index)}>
            <span className="plus-icon">{expanded === index ? "−" : "+"}</span>
            <span className="tax-title">{item.title}</span>
          </div>
          {expanded === index && (
            <div className="tax-details">
              {item.details && <p>{item.details}</p>}

              {/* Single Table */}
              {item.table && (
                <table className="tax-rates-table">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.table.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Sections */}
              {item.sections &&
                item.sections.map((section, secIdx) => (
                  <div key={secIdx}>
                    <h4>{section.heading}</h4>
                    <table className="tax-rates-table">
                      <thead>
                        <tr>
                          <th>Description</th>
                          <th>Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default TaxChart;

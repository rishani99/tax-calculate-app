import React from "react";
import { useNavigate } from "react-router-dom";
import "./StampDuty.css";

const StampDuty = () => {
  const navigate = useNavigate();

  return (
    <div className="stamp-duty-container">
      <h2>Stamp Duty Types</h2>
      <div className="button-grid">
        <button onClick={() => navigate("/Calculator/StampDuty/DTP")}>
          Deed of Transfer of Property
        </button>
        <button onClick={() => navigate("/Calculator/StampDuty/GPT")}>
          Gift Deed Transfer of Property
        </button>
        <button onClick={() => navigate("/Calculator/StampDuty/LeaseAgreement")}>
          Lease Agreement
        </button>
        <button onClick={() => navigate("/Calculator/StampDuty/Mortagage")}>
          Mortgage Deed
        </button>
      </div>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default StampDuty;

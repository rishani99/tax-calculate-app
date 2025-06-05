import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import TaxChart from "./components/TaxChart";
import Update from "./components/Update";
import Account from "./components/Account";
import Company from "./components/Company";
import ForeginCompany from "./components/ForeginCompany";
import GroupCompany from "./components/GroupCompany";
import Individual from "./components/Individual";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import IncomeTax from "./components/IncomeTax";
import VAT from "./components/VAT";
import Paye from "./components/Paye";
import CompanyCal from "./components/CompanyCal";
import SSCL from "./components/SSCL";
import IndividualCal from "./components/IndividualCal";
import CGT from "./components/CGT";
import BGL from "./components/BGL";
import StampDuty from "./components/StampDuty";
import DTP from "./components/DTP";
import GTP from "./components/GTP";
import LeaseAgreement from "./components/LeaseAgreement";
import Mortagage from "./components/Mortagage";
import STL from "./components/STL";  // Correct relative import path

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Calculator Pages */}
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Calculator/IncomeTax" element={<IncomeTax />} />
        <Route path="/Calculator/VAT" element={<VAT />} />
        <Route path="/Calculator/PAYE" element={<Paye />} />
        <Route path="/Calculator/SSCL" element={<SSCL />} />
        <Route path="/Calculator/CGT" element={<CGT />} />
        <Route path="/Calculator/BGL" element={<BGL />} />
        <Route path="/Calculator/StampDuty" element={<StampDuty />} />
        <Route path="/Calculator/StampDuty/DTP" element={<DTP />} />
        <Route path="/Calculator/StampDuty/GTP" element={<GTP />} />
        <Route path="/Calculator/StampDuty/LeaseAgreement" element={<LeaseAgreement />} />
        <Route path="/Calculator/StampDuty/Mortagage" element={<Mortagage />} />
        <Route path="/Calculator/STL" element={<STL />} /> {/* Correct route */}

        {/* Registration Routes */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Register/Company" element={<Company />} />
        <Route path="/Register/ForeginCompany" element={<ForeginCompany />} />
        <Route path="/Register/GroupCompany" element={<GroupCompany />} />
        <Route path="/Register/Individual" element={<Individual />} />
        <Route path="/Register/CompanyCal" element={<CompanyCal />} />
        <Route path="/Register/IndividualCal" element={<IndividualCal />} />

        {/* Other Pages */}
        <Route path="/TaxChart" element={<TaxChart />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

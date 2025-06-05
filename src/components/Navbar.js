import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tax Calculator</h1>
      <ul className="nav-buttons">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li><Link to="/update">Update</Link></li>
        <li><Link to="/TaxChart">Tax Chart</Link></li> {/* <-- fixed here */}
        <li><Link to="/Account">Account Details</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const isRegistered = localStorage.getItem("isRegistered");

    if (isRegistered === "true") {
      navigate("/login");
    } else {
      alert("You need to register before logging in.");
    }
  };

  const handleRegister = () => {
    // Just redirect to register page
    navigate("/register");
  };

  return (
    <div className="home-container">
      <h2>Welcome to the Sri Lankan Tax Calculator</h2>
      <p>
        This tool helps you easily calculate your income tax based on current tax regulations.
        Enter your annual income and find out how much you need to pay.
      </p>
      <div className="buttons">
        <button className="btn login" onClick={handleLogin}>Login</button>
        <button className="btn register" onClick={handleRegister}>Register</button>
      </div>
      <footer className="footer">
  © 2025 Sri Lankan Tax Calculator
</footer>

    </div>
  );
};

export default Home;

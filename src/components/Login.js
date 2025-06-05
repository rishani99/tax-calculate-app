import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !pin) {
      setMessage("❌ All fields are required.");
      return;
    }

    // MOCK login check (replace with real backend/auth later)
    // For example, accept any email and pin === "1234"
    if (pin === "1234") {
      setMessage("✅ Login successful!");

      setTimeout(() => {
        navigate("/calculator");
      }, 2000);
    } else {
      setMessage("❌ Invalid email or PIN.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your 4-digit PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}

      <footer className="footer">© 2025 Sri Lankan Tax Calculator</footer>
    </div>
  );
};

export default Login;

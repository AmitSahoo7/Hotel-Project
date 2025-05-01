import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../register/Register"; // 👈 New import
import "./navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // 👈 New state

  const handleLogin = () => {
    alert("Logged in successfully!");
    setShowLogin(false);
  };

  const handleRegister = () => {
    alert("Registered successfully!");
    setShowRegister(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" className="logo">Bookify</Link>
          <div className="navItems">
            <button className="navButton" onClick={() => setShowRegister(true)}>Register</button>
            <button className="navButton" onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} onRegister={handleRegister} />}
    </>
  );
};

export default Navbar;

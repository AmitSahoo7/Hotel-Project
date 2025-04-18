import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login"; // ✅ Make sure this path is correct!
import "./navbar.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    alert("Logged in successfully!");
    setShowLogin(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" className="logo">Bookify</Link>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={() => setShowLogin(true)}>
              Login
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Login Modal renders when showLogin is true */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </>
  );
};

export default Navbar;

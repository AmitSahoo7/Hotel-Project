import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login"; // ✅ Make sure this path is correct!
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Import user icon

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
    setShowLogin(false); // Close the login modal
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    setShowProfileMenu(false); // Close the profile menu
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
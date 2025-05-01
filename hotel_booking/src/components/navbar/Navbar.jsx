import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Import user icon

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Track profile menu visibility

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
    setShowLogin(false); // Close the login modal
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    setShowProfileMenu(false); // Close the profile menu
  };

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" className="logo">Bookify</Link>
          <div className="navItems">
            {!isLoggedIn ? ( // Show buttons only if not logged in
              <>
                <button className="navButton">Register</button>
                <button className="navButton" onClick={() => setShowLogin(true)}>
                  Login
                </button>
              </>
            ) : (
              <div className="profileMenu">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="profileIcon"
                  onClick={() => setShowProfileMenu(!showProfileMenu)} // Toggle profile menu
                />
                {showProfileMenu && (
                  <div className="profileDropdown">
                    <button onClick={handleLogout} className="logoutButton">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {showLogin && (
        <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </>
  );
};

export default Navbar;
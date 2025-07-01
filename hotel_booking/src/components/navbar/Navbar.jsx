import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../register/Register"; // Import the Register component
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // State for Register modal
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleRegister = () => {
    setIsLoggedIn(true); // Optionally log in the user after registration
    setShowRegister(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" className="logo">Bookify</Link>
          <div className="navItems">
            {!isLoggedIn ? (
              <>
                <button className="navButton" onClick={() => setShowRegister(true)}>
                  Register
                </button>
                <button className="navButton" onClick={() => setShowLogin(true)}>
                  Login
                </button>
              </>
            ) : (
              <div className="profileMenu">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="profileIcon"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
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

      {/* Render Login Modal */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}

      {/* Render Register Modal */}
      {showRegister && (
        <Register onClose={() => setShowRegister(false)} onRegister={handleRegister} />
      )}
    </>
  );
};

export default Navbar;
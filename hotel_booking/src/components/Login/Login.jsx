import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    onLogin();
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <>
      <div className="overlay active" onClick={onClose}></div>
      <div className="login-container">
        <div className="login-left">
          <div className="login-logo"> <span>Bookify</span></div>
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="mail@website.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Min. 8 character"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">LOGIN</button>
            <p className="register-text">
              Not registered yet? <a href="/register">Create an Account</a>
            </p>
            <div className="divider">or sign up with</div>
            <div className="social-login">
              <button onClick={() => handleSocialLogin("Google")}>
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
              <button onClick={() => handleSocialLogin("Facebook")}>
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </button>
            </div>
          </form>
        </div>

        <div className="login-right">
          <div className="login-graphic">
            <h3>Start your journey by one click, explore beautiful world!</h3>
            <img
              src="https://www.theindia.co.in/blog/wp-content/uploads/2024/07/praveg-ghoghla-beach-resort-diu-1024x577.jpg"
              alt="Travel"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

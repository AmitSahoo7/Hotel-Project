import React, { useState } from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Register = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
    onRegister(); // You can use this to trigger parent-level login
  };

  const handleSocialLogin = (provider) => {
    console.log(`Signing up with ${provider}`);
  };

  return (
    <>
      <div className="overlay active" onClick={onClose}></div>
      <div className="login-container">
        <div className="login-left">
          <div className="login-logo"><span>Bookify</span></div>
          <form className="login-form" onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              value={formData.age}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">REGISTER</button>
            <p className="register-text">
              Already have an account? <a href="#" onClick={onClose}>Login</a>
            </p>
            <div className="divider">or sign up with</div>
            <div className="social-login">
              <button
                type="button"
                className="google-btn"
                onClick={() => handleSocialLogin("Google")}
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button
                type="button"
                className="facebook-btn"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
          </form>
        </div>

        <div className="login-right">
          <div className="login-graphic">
            <h3>Join us and explore amazing destinations!</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63VC-Exws1tqnrA1aGXhzcAQ2Kp9FWWIQlg&s"
              alt="Travel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

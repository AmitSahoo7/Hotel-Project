import React, { useState } from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

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
    alert("Registration successful!"); 
    onRegister(); 
    onClose(); 
  };

  const handleSocialLogin = (provider) => {
    console.log(`Signing up with ${provider}`);
    alert(`Signing up with ${provider}`);
  };

  return (
    <>
      <div className="overlay active" onClick={onClose}></div>
      <div className="register-container">
        <div className="register-left">
          <div className="register-logo">
            <span>Bookify</span>
          </div>
          <form className="register-form" onSubmit={handleRegister}>
            <h2>Create Your Account</h2>
            <p>Join us and start your journey today!</p>
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
              placeholder="Password (Min. 8 characters)"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="register-btn">
              Register
            </button>
            <p className="register-text">
              Already have an account?{" "}
              <a href="#" onClick={onClose}>
                Login here
              </a>
            </p>
            <div className="divider">or sign up with</div>
            <div className="social-login">
              <button
                type="button"
                className="google-btn"
                onClick={() => handleSocialLogin("Google")}
              >
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
              <button
                type="button"
                className="facebook-btn"
                onClick={() => handleSocialLogin("Facebook")}
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </button>
            </div>
          </form>
        </div>

        <div className="register-right">
          <div className="register-graphic">
            <h3>Discover new destinations and adventures!</h3>
            <img
              src="https://www.theindia.co.in/blog/wp-content/uploads/2024/07/praveg-ghoghla-beach-resort-diu-1024x577.jpg"
              alt="Travel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

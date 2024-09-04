import React, { useState } from "react";
import './login.css';

export default function Register({ handleNavigation }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [array, setArray] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArray((prev) => [...prev, formData])
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputdiv">
          <input
            type="text"
            className="input"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="inputdiv">
          <input
            className="input"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div >
        <div className="register">
          <button type="submit">Register</button>
          <button type="button" onClick={() => handleNavigation("login")}>
            Click to Login
          </button></div>
      </form>
    </div>
  );
}

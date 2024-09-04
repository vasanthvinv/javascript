import React, { useState } from "react";
import Register from "./register";
import './login.css';
import Password from "./Password";

export default function LoginPage() {
  const [data, setData] = useState({ username: "", password: "" });
  const [view, setView] = useState("login");
  const [array, setArray] = useState([]);

  const handleNavigation = (viewPage) => {
    setView(viewPage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setArray((prev) => [...prev, data])
    console.log(array);
    setData({ username: "", password: "" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const renderView = () => {
    switch (view) {
      case "register":
        return (
          <Register
            handleNavigation={handleNavigation}
          />
        );
      case "forgot-password":
        return (
          <Password handleNavigation={handleNavigation} />
        )
      case "login":
      default:
        return (
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="inputdiv">
                <input
                  className="input"
                  type="text"
                  id="username"
                  value={data.username}
                  onChange={handleChange}
                  required
                  placeholder="Username"
                />
                <span>👤</span>
              </div>
              <div className="inputdiv">
                <input
                  className="input"
                  type="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                />
                <span>🔒</span>
              </div>
              <div>
                <div className="remember">
                  <span>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                  </span>
                  <div onClick={() => handleNavigation("forgot-password")}> Forgot password?</div>
                </div>
                <div className="login">
                  <button className="button" type="submit">
                    Login
                  </button>
                </div>
              </div>
              <div className="register">
                <label>Don't have an account?</label>
                <button type="button" onClick={() => handleNavigation("register")}>
                  Register
                </button>
              </div>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <div className="loginpage">
        {renderView()}
      </div>
    </div>
  );
}

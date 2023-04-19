import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Validation from "./validation";
const Login = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [errors, setError] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(values));
  };

  return (
    <div className="main">
    <div className="sub-main">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Login</h1>
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            value={values.email}
            className="name"
            name="name"
            onChange={handleChange}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
          )}
          <p>Password</p>
          <input
            type="password"
            placeholder="Paswword"
            value={values.password}
            className="name"
            name="password"
            onChange={handleChange}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
          )}
        </div>
        <div className="login-button">
        <Link to="/home">
        <button>Login</button>
        </Link>
          
        </div>
        <Link to="/signup"  className="name">Signup Page</Link>
      </form>
    </div>
    </div>
  );
};
export default Login;

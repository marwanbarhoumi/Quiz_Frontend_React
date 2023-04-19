import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Validation from "./validation";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    telephone: "",
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
    <form onSubmit={handleSubmit}>
      <div className="cover">
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Email"
          value={values.email}
          className="name"
          name="name"
          onChange={handleChange}
        />{" "}
        <br />
        {errors.name && (
          <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
        )}
        <input
          type="password"
          placeholder="password"
          className="name"
          name="password"
          value={values.password}
          onChange={handleChange}
        />{" "}
        <br />
        {errors.password && (
          <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
        )}
        <input
          type="number"
          placeholder="numero telephone"
          className="name"
          value={values.telephone}
          name="telephone"
          onChange={handleChange}
        />
        <br />
        {errors.telephone && (
          <p style={{ color: "red", fontSize: "13px" }}>{errors.telephone}</p>
        )}
        <input type="date" placeholder="date de naissance" className="name" />
        <br />
        <div className="login-button">
          <button>confirme</button>
        </div>
        <Link to="/">Login Page</Link>
        <form />
      </div>
    </form>
  );
};

export default Signup;

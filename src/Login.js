// Login.js
import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submission here
    setPhone(phone);
    navigate("/otp");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone number*
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              required
            />
          </div>
          <div class="d-grid gap-2 cust">
            <button
              onClick={handleSubmit}
              class="btn btn-primary"
              type="button"
            >
              Get started
            </button>
            <div className="d-flex justify-content-center">
              <p className="">
                Already have an account?{" "}
                <NavLink style={{ textDecoration: "none" }} to="/">
                  Sign up
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

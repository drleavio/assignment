// Signup.js
import { react, useState } from "react";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { React } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submission here
    navigate("/otp");
  };
  return (
    <div className="container mt-2">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone number*
            </label>
            <input
              type="number"
              placeholder="Enter your Phone number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
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
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

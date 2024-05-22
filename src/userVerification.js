import React, { useState, useRef } from "react";
import "./userVerification.css";
import { FiAlertCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import { FaArrowLeft } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const userVerification = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [storeotp, setStoreotp] = useState(["1", "1", "4", "3"]);
  const inputRefs = useRef([]);
  // const snotify = () => toast("OTP is verified");
  // const enotify = () => toast("OTP is invalid");

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(otp);
    console.log(storeotp);
    if (JSON.stringify(storeotp) === JSON.stringify(otp)) {
      toast.success("OTP verified");
    } else {
      toast.error("OTP do not match");
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };
  // const sendotp = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-center">
          <span class="border border-secondary-subtle d-flex justify-content-center customi h5 w5">
            <FiAlertCircle />
          </span>
        </div>
        <div>
          <h1 className="text-center">Check your SMS</h1>
          <p className="text-center">
            We sent a verification OTP to +91-9xxxxxxxx5
          </p>
        </div>

        <div className="otp-boxes d-flex justify-content-center">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="otp-box"
            />
          ))}
        </div>

        <div class="d-grid gap-2 pt-4 cust">
          {otp[3] != "" ? (
            <button
              onClick={handleSubmit}
              class="btn btn-primary"
              type="button"
            >
              Verify Phone number
            </button>
          ) : (
            <button
              style={{ backgroundColor: "gray" }}
              class="btn btn-primary"
              type="button"
            >
              Verify Phone number
            </button>
          )}

          <div className="d-flex justify-content-center mt-3">
            <div className="d-flex">
              <p>Didn't recieve the SMS ?&nbsp;</p>
              <Counter />
            </div>
          </div>
          <span className="d-flex justify-content-center">
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              <FaArrowLeft /> back to signup
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default userVerification;

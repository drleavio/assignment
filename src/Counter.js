import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Counter = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      {seconds != 0 ? (
        <span style={{ color: "blue" }}>
          Resend in &nbsp; {seconds <= 9 ? `00:0${seconds}` : `00:${seconds} `}
        </span>
      ) : (
        <a style={{ textDecoration: "none" }} href="/otp">
          Click to Resend OTP
        </a>
      )}
    </div>
  );
};

export default Counter;

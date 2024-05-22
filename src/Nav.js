import React from "react";
import logo from "./logo.png";

const Nav = () => {
  return (
    <nav className="navbar bg-body-white ">
      <div className="container-fluid ">
        <a className="navbar-brand fw-semibold p-2" href="#">
          <img
            src={logo}
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />
          Cashout
        </a>
      </div>
    </nav>
  );
};

export default Nav;

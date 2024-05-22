import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Nav from "./Nav";
import userVerification from "./userVerification";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Signup} />
        <Route path="/otp" Component={userVerification} />
      </Routes>
    </Router>
  );
};

export default App;

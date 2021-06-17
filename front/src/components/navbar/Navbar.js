import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/randomstudents">Random Student</Link>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";

function NavBar(props) {
  const navStyle = {
    backgroundColor: "#0033a1",
  };

  const logoStyle = {
    width: "100px", // Adjust the width as needed
    height: "100px", // Maintain the aspect ratio
    objectFit: "cover",
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark shadow mb-3"
      style={navStyle}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/main">
          <img src="../cuny-sphere-preview.png" style={logoStyle}></img>

        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/course">
              {/* PostFormPage */}
              Course
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/job">
              Job
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/news">
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
          <AuthButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

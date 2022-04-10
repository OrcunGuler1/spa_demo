import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <NavLink className="logo-link" to="/">
        <img src={require("../../images/logos/logo.svg")} alt="logo" />
      </NavLink>
      <nav className="btn">
        <input type="text" className="nav-searchbar"></input>
        <NavLink className="btn-link" to="/">
          <img src={require("../../images/pictures/BW-m.png")} alt="profile"></img>
        </NavLink>
      </nav>
    </nav>
  );
};

export default Navbar;

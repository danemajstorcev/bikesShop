import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="../img/logo.png" alt="logo" />
      <ul className="nav-links">
        <li>HOME</li>
        <li>BIKES</li>
        <li>GEAR</li>
        <li>PARTS</li>
        <li>TIRES</li>
        <li>SEVICE-INFO</li>
        <li>CATALOGUES</li>
        <li>CONTACT</li>
      </ul>
      <div className="search-and-shop">
      <i className="fas fa-search"></i>
      <i className="fas fa-lock"></i>
      </div>
    </div>
  );
};

export default Navbar;

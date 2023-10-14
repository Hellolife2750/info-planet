import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="centered">
        <NavLink to="/">
          <img className="logo" src="./logo.png" alt="logo infoplanet" />
        </NavLink>
        <ul className="navbar">
          <NavLink to="/search">
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
          </NavLink>

          <NavLink to="/">
            <li>Système solaire</li>
          </NavLink>

          <li>Exoplanètes</li>
          <li>Lunes</li>

          <NavLink to="/simulation">
            <li>Simulation</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;

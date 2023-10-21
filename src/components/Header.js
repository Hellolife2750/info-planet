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
          <NavLink className="no-style" to="/search">
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
          </NavLink>

          <NavLink className="no-style" to="/solar-system">
            <li>Système solaire</li>
          </NavLink>

          <NavLink className="no-style" to="/comparison">
            <li>Comparer</li>
          </NavLink>

          {/* <li>Exoplanètes</li>
          <li>Lunes</li>

          <NavLink className="no-style" to="/simulation">
            <li>Simulation</li>
          </NavLink> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
const NavMain = () => {
  return (
    <nav className="nav-main">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/friends">
            Friends
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pokemons">
            Pokemons
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" className="index-link">
            Index
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/home" activeClassName="active" className="home-link">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-collapse navbar-expand-lg myNavbar">
        <NavLink className="navbar-brand text-success " to="/">
          Gecko-Mood
        </NavLink>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link myLink" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link myLink float-left" to="/test">
              Test
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navigation;

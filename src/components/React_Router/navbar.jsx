import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar navbar-expand-lg navbar-light bg-light p-4">
      <div className="container-fluid">
        <ul className="navbar-nav gap-4 mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="n-link fw-bold">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="n-link fw-bold">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" className="n-link fw-bold">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="n-link fw-bold">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

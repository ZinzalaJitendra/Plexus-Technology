import React from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white p-3">
      <div className="container">
        <NavLink className={({isActive}) => isActive ? "navbar-brand active" : "navbar-brand"} to="/">
          <img src={logo} className="img-fluid" style={{width : "180px"}} alt="Plexus Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2 ms-3">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/about">
                About us
              </NavLink>
            </li>
            <li className="nav-item px-2 ms-3">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item px-2 ms-3">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/culture">
                Culture
              </NavLink>
            </li>
            <li className="nav-item px-2 ms-3">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/hiring">
                Hiring
              </NavLink>
            </li>
            <li className="nav-item px-2 ms-3">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/contact">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

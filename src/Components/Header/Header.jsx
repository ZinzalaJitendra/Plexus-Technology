import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white p-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="img-fluid" style={{width : "180px"}} alt="Plexus Logo" />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item px-2 ms-3">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item px-2 ms-3">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item px-2 ms-3">
              <a className="nav-link" href="#">
                Culture
              </a>
            </li>
            <li className="nav-item px-2 ms-3">
              <a className="nav-link" href="#">
                Hiring
              </a>
            </li>
            <li className="nav-item px-2 ms-3">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

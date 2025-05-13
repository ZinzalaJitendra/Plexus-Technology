import React from "react";
import logo from "../../assets/logo-sm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss"
import { NavLink } from "react-router";

function Footer() {
  return (
    <section className="bg-white" style={{marginTop : "100px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-12 mb-5 p-0">
            <h4 className="text-center fw-semibold">Plexus Technology</h4>
            <p className="text-center">
              345, A.R Mall, opp. panvel point, mota varachha, 394101
            </p>
            <p className="text-center">
              <span className="fw-bold">Phone:</span>+91 90238 38674
            </p>
            <p className="text-center">
              <span className="fw-bold">Phone:</span>
              hr.plexustechnology@gmail.com
            </p>
          </div>
          <div className="col-md-12 col-lg-4 col-12 mb-5 p-0 d-flex flex-column justify-content-between">
            <h4 className="text-center fw-semibold">Quick Links</h4>
            <NavLink to="/" className="text-center link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" style={{fontWeight : "400"}}>Quick Links</NavLink>
            <NavLink to="/about" className="text-center link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" style={{fontWeight : "400"}}>About us</NavLink>
            <NavLink to="/culture" className="text-center link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" style={{fontWeight : "400"}}>Company Culture</NavLink>
            <NavLink to="/contact" className="text-center link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" style={{fontWeight : "400"}}>Contact us</NavLink>
          </div>
          <div className="col-md-12 col-lg-4 col-12 d-flex flex-column align-items-center">
            <img
              src={logo}
              style={{ width: "150px" }}
              className="img-fluid"
              alt=""
            />
            <p className="text-center mt-3">Follow Us</p>
            <div className="d-flex justify-content-between">
              <div className="rounded-circle footer-icon1 me-3 d-flex justify-content-center align-items-center">
                {/* <img width="50" height="50" style={{backgroundColor : "white"}} src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin"/> */}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="icon1"
                />
              </div>
              <div className="rounded-circle footer-icon2 me-3 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="icon2"
                />
              </div>
              <div className="rounded-circle footer-icon3 bg-info d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon3"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="divider border mt-3 w-100"></p>
        <div className="d-flex justify-content-center text-center justify-content-sm-end">
            <p className="">All rights Reserved. © Plexus Technology</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

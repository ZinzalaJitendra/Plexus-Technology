import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="mx-3 bg-blue py-4 my-3 rounded-5">
      <h2 className="fw-bold text-white text-center">Let's Get in Touch</h2>
      <div className="container">
        <div className="row d-flex justify-content-cente
        r py-4">
          <div className="col-xl-4 col-md-6 col-12">
            <div class="mb-3">
              <p className="fw-light text-white fs-4 m-0 lh-base">HR Deparment</p>
              <div className="d-flex align-items-center py-1 bg-white rounded-3">
              <img width="26" height="26" className="img-fluid mx-3" src="https://img.icons8.com/metro/26/0777ab/phone.png" alt="phone"/>
                <p className="pt-3">+91 90238 38674</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div class="mb-3">
              <p className="fw-light text-white fs-4 m-0 lh-base">Help</p>
              <div className="d-flex align-items-center py-1 bg-white rounded-3">
              <img width="26" height="26" className="img-fluid mx-3" src="https://img.icons8.com/ios-glyphs/30/0777ab/new-post.png" alt="new-post"/>
                <p className="pt-3 text-truncate">hr.plexustechnology@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div class="mb-3">
              <p className="fw-light text-white fs-4 m-0 lh-base">Linkedin</p>
              <div className="d-flex align-items-center py-1 bg-white rounded-3">
                <img width="26" height="26" className="img-fluid mx-3" src="https://img.icons8.com/glyph-neue/64/0777ab/linkedin.png" alt="linkedin"/>
                <p className="pt-3">Plexus Technology</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;

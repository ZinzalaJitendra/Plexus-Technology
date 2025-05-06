import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="mx-3 bg-blue py-4 my-3">
      <h2 className="fw-bold text-white text-center">Let's Get in Touch</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                HR Contact
              </label>
              <a
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
              ></a>
            </div>
          </div>
          <div className="col-md-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <a
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
              ></a>
            </div>
          </div>
          <div className="col-md-4">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <a
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

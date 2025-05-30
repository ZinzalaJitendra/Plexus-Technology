import React, { useState } from "react";
import "./ContactModal.scss";

function ContactModal() {
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value) => {
    let formatted = value.replace(/\D/g, "");

    if (!formatted.startsWith("91")) {
      formatted = "91" + formatted;
    }

    formatted = formatted.substring(0, 12);

    setPhone(`+${formatted}`);
  };

  return (
    <>
      <div className="container">
        <div className="contact-modal bg-white shadow my-5 py-5 px-4 rounded-5">
          <div className="p-2">
            <h3 style={{ color: "rgb(7, 119, 171)" }}>Send us a message</h3>
            <p>
              Reach out to us and let’s discuss how. <br />
              We’re here to listen and help you achieve your goals.
            </p>
            <form className="row g-3">
              <div className="row g-3">
                <div className="col">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="inputPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  placeholder="+91 00000-00000"
                  value={phone}
                  onChange={(e) => formatPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="you@company.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn w-100 py-3 text-white rounded-pill text-white"
                  style={{ backgroundColor: "rgb(7, 119, 171)" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="blue-box shadow rounded-5">
          <div className="container h-100 py-4 px-4">
            <p className="text-white fs-5">
              Hi! We are always here to help you.
            </p>
            <div className="row my-3">
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telephone-fill text-white img-fluid"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </div>
              <div className="col-10">
                <p className="m-0">HR</p>
                <p className="m-0">+91 90238 38674</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </div>
              <div className="col-10">
                <p className="m-0">Help</p>
                <p className="m-0 text-truncate">
                  hr.plexustechnology@gmail.com
                </p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </div>
              <div className="col-10">
                <p className="m-0">Linkedin:</p>
                <p className="m-0">Plexus Technology</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </div>
              <div className="col-10">
                <p className="m-0">Address:</p>
                <p className="m-0">
                  305, A.R Mall, opp. panvel point, mota varachha, 394101
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactModal;

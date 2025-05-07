import React, { useState } from "react";

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
    <section className="container bg-white shadow py-5 px-4 rounded-5">
      <div className="">
        <div style={{width : "60%"}}>
          <h4 style={{ color: "rgb(7, 119, 171)" }}>Send us a message</h4>
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
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn w-100 py-3 text-white rounded-pill text-white" style={{ backgroundColor: "rgb(7, 119, 171)" }}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-info">
        <h4>Hi! We are always here to help you.</h4>
        <div className="row">
            <div className="col-12">
                
            </div>
        </div>
      </div>
    </section>
  );
}

export default ContactModal;

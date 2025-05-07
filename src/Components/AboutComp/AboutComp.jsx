import React from "react";
import "./AboutComp.scss";
import aboutImg from "../../assets/about-us.svg";

function AboutComp() {
  return (
    <section style={{ margin: "120px 0px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={aboutImg} className="img-fluid" alt="" srcset="" />
          </div>
          <div className="col-md-6 mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="">
              <h3
                className="text-uppercase d-inline-block px-4 py-2 fw-semibold rounded-pill"
                style={{ border: "1px dotted rgb(7, 119, 171)" }}
              >
                About Us
              </h3>
              <p className="about-design mt-4" style={{width : "90%"}}>
                At Plexus Technology, we transform visionary ideas into
                innovative products that meet the ever-changing needs of
                businesses worldwide. Since our founding in 2023, we've been
                pushing the limits of technology, blending expertise with a
                commitment to excellence
              </p>
              <p className="about-design mt-4" style={{width : "90%"}}>
                Our team creates solutions that not only address today's
                challenges but also anticipate future needs, ensuring our
                products stay ahead of industry trends and empower businesses to
                succeed in a fast-paced digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComp;

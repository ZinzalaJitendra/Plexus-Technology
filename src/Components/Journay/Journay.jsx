import React from "react";
import { journeyDetails } from "./JournayDetails";

function Journay() {
  return (
    <section style={{margin : "120px 0px"}}>
      <div className="container">
        <h1 className="text-center fw-semibold" style={{ margin: "80px 0px" }}>
          We ease the{" "}
          <span className="fw-bold" style={{ color: "rgb(7, 119, 171)" }}>
            software
          </span>{" "}
          development journey.
        </h1>
        <div className="row">
          {journeyDetails.map((items, index) => {
            return (
              <div
                className="col-md-3 d-flex flex-column align-items-center my-3 p-0"
                key={index}
              >
                <img src={items.image} className="img-fluid mb-5" alt="" />
                <p className="text-center">{items.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journay;

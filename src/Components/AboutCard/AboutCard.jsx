import React from "react";
import { companyValues } from "./CardDetails";

function AboutCard() {
  return (
    <div className="container">
      <h1 className="text-center">
        "Making our mission a reality <br />
        one step at a time”
      </h1>
      <div className="row" style={{paddingTop : "60px"}}>
        {companyValues.map((items, index) => {
          return (
            <div className="col-lg-4" style={{marginTop : "55px"}} key={index}>
              <div className="card shadow border border-none position-relative h-100">
                <div className=" d-flex justify-content-center rounded-3 align-items-center position-absolute" style={{width : "80px",height : "80px",top : "-40px",left : "15px",border : "1px dotted rgb(7, 119, 171)"}}>
                    <img src={items.image} style={{width : "45px"}} className="img-fluid" alt="Images" />
                </div>
                <div className="card-body pt-5">
                  <div className="card-title fw-bold" style={{fontSize : "22px"}}>{items.title}</div>
                  <p>{items.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCard;

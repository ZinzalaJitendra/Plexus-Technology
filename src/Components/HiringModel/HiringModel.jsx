import React, { useState } from "react";
import "./HiringModel.scss";

function HiringModel() {
  const [activeButton, setActiveButton] = useState("All");
  const [selectedJob, setselectedJob] = useState("AllType"); 

  return (
    <div className="container my-5">
      <div className="my-5">
        <p className="text-center">Hiring</p>
        <h1 className="text-center fw-bold">"Spark Your Passion"</h1>
      </div>
      <div className="bg-light shadow-sm border rounded-4 py-5 px-5">
        <h2 className="text-center pt-5">Open Position</h2>
        <div className="row py-5">
          <div className="col-lg-5 col-12">
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control border border-2 me-2 py-2 rounded-pill"
                type="search"
                placeholder="Search for a job or department"
                aria-label="Search"
              />
              <a className="img-setup bg-white" type="submit">
                <img
                  width="22"
                  height="22"
                  className="img-fluid"
                  src="https://img.icons8.com/ios-filled/50/search--v1.png"
                  alt="search--v1"
                />
              </a>
            </form>
            <div className="">
              <div className="">
                <p className="fs-5 lh-base mt-4 mb-0">Department</p>
                <button
                  type="button"
                  className={`btn rounded-3 mt-2 fw-medium ${
                    activeButton === "All" ? "text-white" : "text-dark"
                  }`}
                  style={{
                    backgroundColor:
                      activeButton === "All" ? "rgb(7, 119, 171)" : "#f0f0f0",
                  }}
                  onClick={() => setActiveButton("All")}
                >
                  All
                </button>

                <button
                  type="button"
                  className={`btn rounded-3 ms-3 mt-2 fw-medium ${
                    activeButton === "IOS Department"
                      ? "text-white"
                      : "text-dark"
                  }`}
                  style={{
                    backgroundColor:
                      activeButton === "IOS Department"
                        ? "rgb(7, 119, 171)"
                        : "#f0f0f0",
                  }}
                  onClick={() => setActiveButton("IOS Department")}
                >
                  IOS Department
                </button>
              </div>
              <div className="">
                <p className="fs-5 lh-base mt-4 mb-0">Job Type</p>
                <button
                  type="button"
                  className={`btn rounded-3 mt-2 fw-medium ${
                    selectedJob === "AllType" ? "text-white" : "text-dark"
                  }`}
                  style={{
                    backgroundColor:
                    selectedJob === "AllType" ? "rgb(7, 119, 171)" : "#f0f0f0",
                  }}
                  onClick={() => setselectedJob("AllType")}
                >
                  All
                </button>

                <button
                  type="button"
                  className={`btn rounded-3 ms-3 mt-2 fw-medium ${
                    selectedJob === "Office Work"
                      ? "text-white"
                      : "text-dark"
                  }`}
                  style={{
                    backgroundColor:
                    selectedJob === "Office Work"
                        ? "rgb(7, 119, 171)"
                        : "#f0f0f0",
                  }}
                  onClick={() => setselectedJob("Office Work")}
                >
                  Office Work
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-5 col-12">
            <p className="fs-4 fw-semibold">IOS Department</p>
            <div className="bg-white rounded-3 py-4 px-3">
              <p>IOS Department</p>
              <div className="bg-white d-flex flex-wrap align-items-center">
                <div className="d-inline-flex align-ites-center border p-2 rounded-3  pointer-cursor">
                  <img
                    width="20"
                    height="20"
                    className="img-fluid"
                    src="https://img.icons8.com/ios-glyphs/30/marker--v1.png"
                    alt="marker--v1"
                  />
                  <span className="ms-2" style={{fontSize : "14px"}}>Surat</span>
                </div>
                <div className="d-inline-flex align-ites-center border p-2 rounded-3 mx-0 mx-sm-3 my-3 pointer-cursor">
                  <img
                    width="20"
                    height="20"
                    className="img-fluid bg-light"
                    src="https://img.icons8.com/fluency-systems-filled/48/name-tag-woman-horizontal.png"
                    alt="name-tag-woman-horizontal"
                  />
                  <span className="ms-2" style={{fontSize : "14px"}}>Office work</span>
                </div>
                <div className="d-inline-flex align-ites-center border p-2 rounded-3  pointer-cursor">
                  <img
                    width="20"
                    height="20"
                    className="img-fluid"
                    src="https://img.icons8.com/fluency-systems-filled/48/user-tag.png"
                    alt="user-tag"
                  />
                  <span className="ms-2" style={{fontSize : "14px"}}>1 year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringModel;

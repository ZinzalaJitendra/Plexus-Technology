import React from "react";
import "./HiringModel.scss";

function HiringModel() {
  return (
    <div className="container my-5">
      <div className="my-5">
        <p className="text-center">Hiring</p>
        <h1 className="text-center fw-bold">"Spark Your Passion"</h1>
      </div>
      <div className="bg-light">
        <h4 className="text-center">Open Position</h4>
        <div className="col-md-4 col-12">
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
            <p className="fs-5 lh-base m-0">Department</p>
            <button type="button" class="btn btn-primary">All</button>
            <button type="button" class="btn btn-primary ms-3">IOS Department</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringModel;

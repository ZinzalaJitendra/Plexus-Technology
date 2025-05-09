import React from "react";
import prnacsterLogo from "../../assets/unnamedPranc.jpg";
import lol_Logo from "../../assets/lol.svg";
import googlePlay from "../../assets/googleplay.webp";
import appPlay from "../../assets/appstore.webp";
import porfolio_img1 from "../../assets/unnamed.jpg";
import porfolio_img2 from "../../assets/unnamed1.jpg";
import porfolio_img3 from "../../assets/unnamed2.jpg";
import porfolio_img4 from "../../assets/unnamed3.jpg";
import porfolio_img5 from "../../assets/unnamed4.jpg";
import porfolio_img6 from "../../assets/unnamed5.jpg";
import porfolio_img7 from "../../assets/unnamed6.jpg";
import porfolio_img8 from "../../assets/unnamed7.jpg";
import "./Product.scss";

function Product() {
    const portfolioImages = [
        porfolio_img1, porfolio_img2, porfolio_img3, porfolio_img4,
        porfolio_img5, porfolio_img6, porfolio_img7, porfolio_img8
      ];
  return (
    <>
      <div className="container my-5">
        <div className="row bg-light overflow-hidden mx-2 rounded-3">
          <div className="col-md-6  order-md-1 py-5 px-3 px-sm-5">
            <div className="d-flex align-items-center">
              <img
                src={prnacsterLogo}
                className="img-fluid rounded-2"
                alt="prancster"
                style={{ width: "65px" }}
              />
              <h3 className="ms-3 fw-bold">Prankster-Digital Funny Pranks</h3>
            </div>
            <p className="mt-4 mb-5">
              Prankster - Digital Funny Pranks is your ultimate app for
              light-hearted fun and mischievous entertainment! Packed with a
              variety of digital pranks, sound effects, and interactive tricks,
              this app is perfect for pulling off harmless pranks on friends,
              family, or coworkers.
            </p>
            <div className="d-flex flex-wrap">
              <div className="border-end border-2 d-flex flex-column justify-content-center">
                <h5 className="fw-bold text-center">5000+</h5>
                <p className="fs-light text-center px-4">
                  playstore <br /> Downloads
                </p>
              </div>
              <div className="border-end  border-2 d-flex flex-column justify-content-center">
                <h5 className="fw-bold text-center">1000+</h5>
                <p className="fs-light text-center px-4">
                  Appstore <br /> Downloads
                </p>
              </div>
              <div className="d-flex flex-column flex-wrap  justify-content-center">
                <h5 className="fw-bold text-center">170 +</h5>
                <p className="fs-light text-center px-4">Country</p>
              </div>
            </div>
            <div className="my-3">
              <img
                src={googlePlay}
                className="img-fluid"
                width="28%"
                alt="portfolio images"
              />
              <img
                src={appPlay}
                className="img-fluid ms-3"
                width="28%"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 order-first order-md-2">
            <div className="portfolio-container1">
              <div className="row">
                <div className="col-4 animation-column h-100">
                  <div className="slider-container">
                    <div className="slider-content">
                      <img
                        src={porfolio_img2}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img3}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img1}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img4}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img5}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img6}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img2}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img7}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img8}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4 animation-column h-100">
                  <div className="slider-container">
                    <div className="slider-content">
                      <img
                        src={porfolio_img1}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img2}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img3}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img4}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img5}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img6}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img2}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img7}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img8}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4 animation-column h-100">
                  <div className="slider-container">
                    <div className="slider-content">
                      <img
                        src={porfolio_img2}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img3}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img4}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img1}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img5}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img6}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img2}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img7}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                      <img
                        src={porfolio_img8}
                        className="img-fluid mt-3 rounded-4"
                        alt="portfolio-images"
                        width="500px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
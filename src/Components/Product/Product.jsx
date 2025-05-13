import React from "react";
import googlePlay from "../../assets/googleplay.webp";
import appPlay from "../../assets/appstore.webp";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const isLOL = product.title.includes("LOL");

  return (
    <div className="container my-5">
      <div className="row bg-light overflow-hidden mx-2 rounded-3">
        {/* Images Section */}
        <div
          className={`${
            isLOL ? "order-1 order-lg-1" : "order-first order-lg-2"
          } col-12 col-lg-6 product-container`}
        >
          <div className={`${isLOL ? "lol-rotate" : "portfolio-container1"}`}>
            <div className="row h-100">
              {[0, 2, 4].map((startIndex, colIndex) => (
                <div className={`${isLOL ? "col-4 animation-column lol-setup h-100" : "col-4 animation-column column-setup h-100"}`} key={colIndex}>
                  <div className="slider-container">
                    <div
                      className={`slider-content ${
                        colIndex === 1
                          ? "slider-content2"
                          : colIndex === 2
                          ? "slider-content3"
                          : ""
                      }`}
                    >
                      {[...Array(2)].map((_, repeatIndex) =>
                        product.images.slice(startIndex).map((img, imgIndex) => (
                          <img
                            key={`${repeatIndex}-${imgIndex}`}
                            src={img}
                            className="img-fluid mt-3 rounded-4"
                            alt={`portfolio-${imgIndex}`}
                            width="95%"
                          />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div
          className={`${
            isLOL ? "order-2 order-lg-2" : "order-lg-1"
          } col-12 col-lg-6 py-5 px-3 px-sm-5 overflow-hidden overflow-lg-visible`}
        >
          <div className="d-flex align-items-center">
            <img
              src={product.logo}
              className="img-fluid rounded-2"
              alt={product.title}
              style={{ width: "65px" }}
            />
            <h3 className="ms-3 fw-bold">{product.title}</h3>
          </div>
          <p className="mt-4 mb-5">{product.description}</p>

          <div className="d-flex flex-wrap">
            <div className="border-end border-2 d-flex flex-column justify-content-center">
              <h5 className="fw-bold text-center">
                {product.playstoreDownloads}+
              </h5>
              <p className="fs-light text-center px-4">
                Playstore <br /> Downloads
              </p>
            </div>
            <div className="border-end border-2 d-flex flex-column justify-content-center">
              <h5 className="fw-bold text-center">
                {product.appstoreDownloads}+
              </h5>
              <p className="fs-light text-center px-4">
                Appstore <br /> Downloads
              </p>
            </div>
            <div className="d-flex flex-column flex-wrap justify-content-center">
              <h5 className="fw-bold text-center">{product.countries}+</h5>
              <p className="fs-light text-center px-4">Countries</p>
            </div>
          </div>

          <div className="my-3">
            <a
              href={product.playstoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlay}
                className="img-fluid"
                width="28%"
                alt="Google Play Store"
              />
            </a>
            <a
              href={product.appstoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appPlay}
                className="img-fluid ms-3"
                width="28%"
                alt="Apple App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

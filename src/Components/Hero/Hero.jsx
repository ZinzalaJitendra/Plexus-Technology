import React from "react";
import hero_img from "../../assets/hero-ss.png";
import prankster from "../../assets/prankster.svg";
import lol from "../../assets/lol.svg";
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.jpeg";
import hero from "../../assets/hero.png";
import designer from "../../assets/designer.svg";
import developer from "../../assets/developer.svg";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="bg-hero rounded-5 mx-3">
        <div className="d-flex justify-content-between flex-column h-100">
          <div className="row d-flex justify-content-center px-5 py-4 h-100">
            {/* Text Section*/}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center order-last order-lg-1">
              {/*  */}
              <p className="hero-title fw-bold">
                Creating{" "}
                <span className="fw-bold" style={{ color: "rgb(7, 119, 171)" }}>
                  Entertainment Apps & Games
                </span>{" "}
                That Inspire
              </p>
              <p className="w-75">
                We transform bold ideas into dynamic mobile apps and games,
                designed to enrich lives and meet unique needs.
              </p>

              <img
                src={developer}
                alt="developer"
                className="developer img-fluid"
              />
              <div className="designer">
                <img src={designer} alt="designer" className="img-fluid" />
              </div>
            </div>

            {/* Image Section - Appears second */}

            {/* <div className="col-lg-6 col-12 order-first order-lg-2 d-flex justify-content-center align-items-center overflow-hidden">
              <div className="hero-circle rounded-circle  bg-white mx-sm-1 d-flex justify-content-center align-items-center position-relative">
                <div className="hero-size  d-flex justify-content-center align-items-center rounded-circle">
                  <div className="rounded-circle d-flex align-items-center justify-content-center h-100">
                    <div className="group1 position-absolute h-100">
                      <img src={hero_img} className="img-fluid" alt="Hero" />
                      <img
                        src={lol}
                        className="lol_setup position-absolute img-fluid"
                        alt="lol"
                      />
                      <img
                        src={prankster}
                        className="prankster-setup position-absolute img-fluid"
                        alt="prankster"
                      />
                    </div>
                    <div className="group2 h-100">
                      <img src={hero} className="img-fluid" alt="Hero" />
                      <img
                        src={game1}
                        className="game1_setup position-absolute img-fluid"
                        alt="Game1"
                      />
                      <img
                        src={game2}
                        className="game2-setup position-absolute img-fluid"
                        alt="Game2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-lg-6 col-12 order-first order-lg-2 d-flex justify-content-center align-items-center">
              <div className="hero-circle rounded-circle bg-white mx-sm-1 d-flex justify-content-center align-items-center position-relative">
                <div className="hero-size d-flex justify-content-center align-items-center rounded-circle">
                  <div className="rounded-circle d-flex align-items-center justify-content-center h-100">
                    <div className="group1 position-absolute h-100">
                      <img src={hero_img} className="img-fluid" alt="Hero" />
                      <img
                        src={lol}
                        className="lol_setup position-absolute img-fluid"
                        alt="lol"
                      />
                      <img
                        src={prankster}
                        className="prankster-setup position-absolute img-fluid"
                        alt="prankster"
                      />
                    </div>
                    <div className="group2 h-100">
                      <img src={hero} className="img-fluid" alt="Hero" />
                      <img
                        src={game1}
                        className="game1_setup position-absolute img-fluid"
                        alt="Game1"
                      />
                      <img
                        src={game2}
                        className="game2-setup position-absolute img-fluid"
                        alt="Game2"
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

export default Hero;

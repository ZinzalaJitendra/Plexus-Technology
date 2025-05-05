import React from "react";
import hero_img from "../../assets/hero-ss.png";
import prankster from "../../assets/prankster.svg";
import lol from "../../assets/lol.svg";
import game1 from "../../assets/game1.png";
import game2 from "../../assets/game2.jpeg";
import hero from "../../assets/hero.png";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="bg-hero rounded-5 mx-3">
        <div className="d-flex justify-content-between flex-column h-100">
          <div className="row d-flex justify-content-center px-4 py-4 px-lg-0 h-100">
            {/* Text Section - Appears first*/}
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center order-last order-lg-1">
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
            </div>

            {/* Image Section - Appears second */}
            <div className="col-lg-6 hero-size col-12 order-first order-lg-2 d-flex justify-content-center align-items-center position-relative">
              <div className="rounded-circle hero-size bg-white mx-sm-1 position-relative overflow-hidden">
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
    </>
  );
}

export default Hero;

import React from "react";
import hero_img from "../../assets/hero-ss.png";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <div className="bg-hero rounded-5 mx-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="row py-4 px-4 px-lg-0">
            <div className="col-lg-6 col-12 d-flex flex-column justify-content-center order-2 order-lg-1">
              <p className="hero-title fw-bold">
                Creating{" "}
                <span className="fw-bold" style={{ color: "rgb(7, 119, 171)" }}>
                  Entertainment Apps & Games
                </span>{" "}
                That Inspire
              </p>
              <p className="">
                We transform bold ideas into dynamic mobile apps and games,
                designed to enrich lives and meet unique needs.
              </p>
            </div>
            <div className="col-lg-6 col-12 order-lg-1 d-flex justify-content-center position-relative">
              <div className="bg-white rounded-circle position-absolute">
                <div className="">
                  <img
                    src={hero_img}
                    className="img-fluid hero-size"
                    alt="Images"
                  />
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
{/* <div class="d-flex align-items-center justify-content-center pt-3 col-12 col-lg-6">
    <div class="border-circle d-flex align-items-center justify-content-center position-relative">
    <div class="white-circle position-absolute">
    <div class="white-circle overflow-hidden d-flex align-items-end justify-content-center sec-div">
    <img src="/static/media/hero.4555bd3faabcb922d765.png" alt="hero-section" class="img-fluid w-75 h-100">
    <img src="/static/media/game1.666593c59a4f8d46eabb.png" alt="game" class="game1 img-fluid animation">
    <img src="/static/media/game2.7f8fc905a299e5904c2f.jpeg" alt="game" class="game2 img-fluid animation"></div></div>
    <div class="white-circle bg-transparent position-absolute">
    <div class="white-circle d-flex align-items-end justify-content-center first-div">
    <img src="/static/media/hero-ss.496d68418cdfea9451ef.png" alt="hero-section" class="img-fluid">
    <img src="/static/media/lol.85ac7240c9a771fc57b8329f5917b0a4.svg" alt="lol" class="lol img-fluid animation">
    <img src="/static/media/prankster.0effdf6603243b152dac3f8b0c3c6a78.svg" alt="prankster" class="prankster img-fluid animation">
    </div></div></div></div> */}

import React from "react";
import innovation from "../../assets/innovation.svg";
import quality from "../../assets/quality.svg";
import satisfaction from "../../assets/satisfaction.svg";

function Card() {
  let aboutData = [
    {
      vision: "Quality",
      description:
        "We know the value of quality. We never compromise with the quality of our work and design.",
      image: quality,
    },
    {
      vision: "Innovation",
      description:
        "Innovation drives everything at Plexus Technology as we explore new ideas to create groundbreaking apps that set industry standards.",
      image: innovation,
    },
    {
      vision: "Satisfaction",
      description:
        "We focus on user satisfaction by delivering high-quality apps that exceed expectations.",
      image: satisfaction,
    },
  ];

  return (
    <section className="container">
      <h2 className="text-center fw-bold my-5">Why Plexus Technology?</h2>
      <p className="text-center">
        An innovative company specializing in creating cutting-edge
        entertainment apps, focused on enhancing user experiences across
        multiple platforms with engaging and intuitive applications.
      </p>
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-stretch">
          {aboutData.map((items, index) => (
            <div className="col-12 col-md-6 col-xl-4 mb-4" key={index}>
              <div className="card py-4 px-3 h-100 d-flex flex-column text-bg-light border rounded-3 position-relative">
                <div className="card-body flex-grow-1 text-center">
                  <img
                    src={items.image}
                    alt={items.vision}
                    className="mb-3"
                    width="80"
                  />
                  <h3 className="card-title fw-bold h4">{items.vision}</h3>
                  <p className="card-text" style={{lineHeight : "25px",letterSpacing : "1px"}}>{items.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
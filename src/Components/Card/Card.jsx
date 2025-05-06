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

{/* <div class="pb-5 d-flex align-items-stretch justify-content-center row">
  <div class="mt-3 d-flex col-12 col-md-6 col-xl-4">
    <div
      class="px-3 py-4 rounded-3 border mt-5 text-center flex-grow-1 position-relative"
      style="background: rgb(250, 250, 250);"
    >
      <img
        src="/static/media/quality.7b5c03e0ca231ae843c3c9be9958076a.svg"
        alt="vision"
        width="70"
        class="img-fluid"
      />
      <p class="h4 fw-bold mb-3 mt-4">Quality</p>
      <p style="line-height: 25px; letter-spacing: 1px;">
        We know that what is value of quality.We never compromise with quality
        of our work and design.
      </p>
    </div>
  </div>
  <div class="mt-3 d-flex col-12 col-md-6 col-xl-4">
    <div
      class="px-3 py-4 rounded-3 border mt-5 text-center flex-grow-1 position-relative"
      style="background: rgb(250, 250, 250);"
    >
      <img
        src="/static/media/innovation.dbf78630f8a4edd2353fcf17a5c4c6dd.svg"
        alt="vision"
        width="70"
        class="img-fluid"
      />
      <p class="h4 fw-bold mb-3 mt-4">Innovation</p>
      <p style="line-height: 25px; letter-spacing: 1px;">
        Innovation drives everything at Plexus Technology as we explore new
        ideas to create groundbreaking apps that set industry standards.
      </p>
    </div>
  </div>
  <div class="mt-3 d-flex col-12 col-md-6 col-xl-4">
    <div
      class="px-3 py-4 rounded-3 border mt-5 text-center flex-grow-1 position-relative"
      style="background: rgb(250, 250, 250);"
    >
      <img
        src="/static/media/satisfaction.80342e289674473c31d5adb3099ba900.svg"
        alt="vision"
        width="70"
        class="img-fluid"
      />
      <p class="h4 fw-bold mb-3 mt-4">Developing</p>
      <p style="line-height: 25px; letter-spacing: 1px;">
        We develop a user-friendly best app and set new benchmarks in the
        industry.
      </p>
    </div>
  </div>
</div>; */}

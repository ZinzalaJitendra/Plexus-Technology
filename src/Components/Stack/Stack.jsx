import React from "react";
import "./Stack.scss";
import stack1 from "../../assets/stack1.png";
import stack2 from "../../assets/stack2.png";
import android from "../../assets/android.webp";
import figma from "../../assets/figma.svg";
import ios from "../../assets/ios.webp";
import java from "../../assets/java.svg";
import objective from "../../assets/objective.webp";
import swift from "../../assets/swift.webp";
import kotlin from "../../assets/kotlin.webp";

function Stack() {
  return (
    <section className="container">
      <h2 className="text-center fw-bold">Our Technology Stack</h2>
      <p className="text-center mb-5">Scale up your business growth with highly robust solutions.</p>
      
      <div className="row" style={{marginTop : "100px"}}>
        {/* Image Section */}
        <div className="col-md-12 col-lg-6 col-12 d-flex justify-content-center align-items-center mb-md-5">
          <div className="stack-container overflow-hidden position-relative">
            <div className="group1 position-absolute">
              <img src={stack1} className="img-fluid" alt="Stack1" />
            </div>
            <div className="group2 position-absolute">
              <img src={stack2} className="img-fluid" alt="Stack2" />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-md-12 col-lg-6 col-12 d-flex flex-column align-items-center">
          <p className="text-start">
          Our mobile app is developed using Swift for iOS and Kotlin for Android, ensuring native performance and seamless user experiences across both platforms. These technologies offer efficient, fast, and reliable solutions. Explore our app with the provided screenshots to see its capabilities in action.
          </p>

          {/* Icons Row 1 */}
          <div className="d-flex flex-wrap justify-content-center mt-4">
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={figma} className="img-fluid" alt="figma" style={{width : "35px"}} />
            </div>
            <p className="border m-0 align-self-center" style={{ width: "40px", height: "1px" }}></p>
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={swift} className="img-fluid" alt="swift" style={{width : "35px"}} />
            </div>
            <p className="border m-0 align-self-center" style={{ width: "40px", height: "1px" }}></p>
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={objective} className="img-fluid" alt="objective" style={{width : "35px"}}/>
            </div>
            <p className="border m-0 align-self-center" style={{ width: "40px", height: "1px" }}></p>
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={ios} className="img-fluid" alt="ios" style={{width : "35px"}} />
            </div>
          </div>

          {/* Icons Row 2 */}
          <div className="d-flex flex-wrap justify-content-center mt-4">
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={figma} className="img-fluid" alt="figma" style={{width : "35px"}} />
            </div>
            <p className="border m-0 align-self-center" style={{ width: "40px", height: "1px" }}></p>
            <div className="stack-box d-flex justify-content-center align-items-center shadow rounded-circle p-3">
              <img src={kotlin} className="img-fluid" alt="kotlin" style={{width : "35px"}}/>
            </div>
            <p className="border m-0 align-self-center" style={{ width: "40px", height: "1px" }}></p>
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={java} className="img-fluid" alt="java" style={{width : "35px"}} />
            </div>
            <p className="border m-0 align-self-center" style={{ width: "40px", height: "1px" }}></p>
            <div className="stack-box shadow d-flex justify-content-center align-items-center rounded-circle p-3">
              <img src={android} className="img-fluid" alt="android" style={{width : "35px"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;

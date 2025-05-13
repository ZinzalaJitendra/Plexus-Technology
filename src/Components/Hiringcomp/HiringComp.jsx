import designer from "../../assets/designer.svg";
import developer from "../../assets/developer.svg";

function HiringComp() {
  return (
    <>
      <div className={`hiring-bg  text-white position-relative`}>
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <h1 className="text-center fw-semibold">
            Join a Team That Fuels Your <br />
            Growth and Success
          </h1>
          <p className="text-center">
            Be part of a team that values your potential, encourages your
            growth, and inspires you to achieve greatness. <br />
            Together, we create a culture of success, innovation, and support.
          </p>
        </div>
        <img
            src={developer}
            alt="developer"
            className="developer img-fluid"
          />
          <div className="designer">
            <img src={designer} alt="designer" className="img-fluid" />
          </div>
      </div>
    </>
  );
}

export default HiringComp;

import { members } from './Culturedata';
import './CultureComp.scss';

function CultureComp() {
  const col1 = members;
  const col2 = [...members.slice(4), ...members.slice(0, 4)];
  const col3 = [...members].reverse();

  const renderImageColumn = (images, animationClass) => (
    <div className={`image-column ${animationClass} `}>
      <div className="image-track w-100 row">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="col-4 w-100">
            <img
              src={img}
              alt="culture"
              className="img-fluid mb-3 rounded-2"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container gallery-container mt-5">
      <div className="row rounded-4">
        <div className="col-md-6 d-flex py-5 px-5 flex-column justify-content-center ">
          <h1 className="fw-semibold">
            Life at{' '}
            <span className="fw-semibold" style={{ color: 'rgb(7, 119, 171)' }}>
              Plexus :
            </span>{' '}
            <br />
            Innovation, Growth, and <br /> Collaboration
          </h1>
          <p>
            At Plexus Technology, we foster a joyful, supportive workplace where
            employees feel valued. We celebrate festivals like Holi, Diwali, and
            Navratri, enjoy yearly trips, and host fun activities, making work a
            fulfilling journey.
          </p>
        </div>
        <div className="col-md-6">
          <div className="d-flex gap-2 culture-slider">
            {renderImageColumn(col1, 'scroll-up')}
            {renderImageColumn(col2, 'scroll-down')}
            {renderImageColumn(col3, 'scroll-up')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CultureComp;

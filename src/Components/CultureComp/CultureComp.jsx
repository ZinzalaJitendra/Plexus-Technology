import React from 'react'
import { members } from './CultureComp'
import './CultureComp.scss'

function CultureComp() {
  const col1 = members.slice(0, 3);
  const col2 = members.slice(3, 6);
  const col3 = members.slice(6, 9);

  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-md-6">
          <h1 className='fw-semibold'>
            Life at <span className='fw-semibold' style={{ color: "rgb(7, 119, 171)" }}>Plexus :</span> <br />
            Innovation, Growth, and <br /> Collaboration
          </h1>
          <p>At Plexus Technology, we foster a joyful, supportive workplace where employees feel valued. We celebrate festivals like Holi, Diwali, and Navratri, enjoy yearly trips, and host fun activities, making work a fulfilling journey.</p>
        </div>
        <div className="col-md-6">
          <div className="d-flex gap-2 culture-slider">
            <div className="image-column scroll-up">
              {col1.map((img, index) => (
                <img key={index} height="150px" width="100px" src={img} alt="culture" className="img-fluid mb-3 rounded" />
              ))}
            </div>
            <div className="image-column scroll-down">
              {col2.map((img, index) => (
                <img key={index} height="150px" width="100px" src={img} alt="culture" className="img-fluid mb-3 rounded" />
              ))}
            </div>
            <div className="image-column scroll-up">
              {col3.map((img, index) => (
                <img key={index} height="150px" width="100px" src={img} alt="culture" className="img-fluid mb-3 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CultureComp

import React, { Component } from 'react';

import campus_placement from './campus-placement.png';
import Competitive from './Competitive.png';

class Downloads extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-row">
        <div className='card-container'>
          <div className='course-card' style={{ width: '18rem' }}>
            <img src={campus_placement} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Campus Preparation</h5>
              <p className='card-text'>
                Complete Course to crack Campus Placement.Join Now!
              </p>
              <a href='./Campus' className='btn btn-success'>
                Explore now
              </a>
            </div>
          </div>

          <div className='course-card' style={{ width: '18rem' }}>
            <img src={Competitive} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Competitive Exams</h5>
              <p className='card-text'>
                Complete Course to crack Competitve Exams.Now
              </p>
              <a href='./Competitve' className='btn btn-success'>
                Explore now
              </a>
            </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Downloads;

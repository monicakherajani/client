import React, { Component } from 'react';

import campus_placement from './campus-placement.png';
import Competitive from './Competitive.png';
import Sidemenu from './sidemenu';
import Sidebar1 from './Sidebar1';

class Downloads extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Sidemenu/>
        <Sidebar1/>
        <div className='container'>
          <div className='row'>
       
        <div className="card-row">
        <div className='card-container'>
          <div className='course-card' style={{ width: '18rem' }}>
            <img src={campus_placement} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Campus Preparation</h5>
              <p className='card-text'>
                Download all the resources to crack Campus Placement.
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
              Download all the resources to crack Campus Placement.
              </p>
              <a href='./Competitve' className='btn btn-success'>
                Explore now
              </a>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        </div>
        
    
      </React.Fragment>
    );
  }
}
export default Downloads;

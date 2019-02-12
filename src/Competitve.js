import './studentlogin.css';

import React, { Component } from 'react';
class Competitive extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>MPSC</h5>
                  <p className='card-text'>
                    Complete preparation to crack MPSC.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card' style={{ display: 'inline-block' }}>
                <div className='card-body'>
                  <h5 className='card-title'>MPSC</h5>
                  <p className='card-text'>
                    Complete preparation to crack MPSC.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card' style={{ display: 'inline-block' }}>
                <div className='card-body'>
                  <h5 className='card-title'>Gate</h5>
                  <p className='card-text'>
                    Complete preparation to crack Gate.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            {/* <div className='dropdown'>
              <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown button
              </button>
              <div
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'
              >
                <a className='dropdown-item' href='#'>
                  Home
                </a>
                <a className='dropdown-item' href='#'>
                  Courses
                </a>
                <a className='dropdown-item' href='#'>
                  Videos
                </a>
                <a className='dropdown-item' href='#'>
                  Discuss
                </a>
                <a className='dropdown-item' href='#'>
                  Profile
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Competitive;

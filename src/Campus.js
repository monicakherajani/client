import React, { Component } from 'react';
class Campus extends Component {
  render() {
    return (
      <React.Fragment>
          <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Infosys</h5>
                  <p className='card-text'>
                    Complete preparation to crack Infosys.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card' style={{ display: 'inline-block' }}>
                <div className='card-body'>
                  <h5 className='card-title'>Wipro</h5>
                  <p className='card-text'>
                    Complete preparation to crack Wipro.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>TCS</h5>
                  <p className='card-text'>
                    Complete preparation to crack TCS.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            </div>
            </div>
          
          
          
          
          </React.Fragment>);
          }
          }
export  default Campus;
import React, { Component } from 'react';
import Sidebar2 from './Sidebar2';
import Sidemenu from './sidemenu';
class Campus extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidemenu/>
          <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Infosys</h5>
                  <p className='card-text'>
                    Complete preparation to crack Infosys.Join now!
                  </p>
                  <a href='./Sidebar2' className='btn btn-success'>
                Explore now
              </a>
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
                  <h5 className='card-title'>Tata Consulantancy Systems</h5>
                  <p className='card-text'>
                    Complete preparation to crack TCS.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Larsen and Turbo Infotech</h5>
                  <p className='card-text'>
                    Complete preparation to crack LTI.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Tata Technologies</h5>
                  <p className='card-text'>
                    Complete preparation to crack Tata Technologies.Join now!
                  </p>
                  <button className='btn btn-success'>Explore Course</button>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Mphasis</h5>
                  <p className='card-text'>
                    Complete preparation to crack Mphasis.Join now!
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
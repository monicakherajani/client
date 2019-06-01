import React, { Component } from 'react';
import Sidebar2 from './Sidebar2';
import Sidemenu from './sidemenu';
import Sidebar1 from './Sidebar1';
import TCS from './Tcs';
import infy from './infy.jpg';
import Epic from './Epic.jpg';
import Lti from './Lti.jpg';
import Tcs from './tcs.jpg';
import Ttl from './TTL.jpg';
import Wipro from './wipro.jpg';
import Mphasis from './Mphasis.jpg';
import Persi from './PersiImg.jpg';
import Syntel from './Syntel.jpg';
import CapImg from './Capgemini.jpg';
import Tcs2 from './Tcs2.png';
import jio1 from './jio1.jpeg';

import { Link } from 'react-router-dom';


class Campus extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidemenu />
        <Sidebar1 />
        <div className=' container' style={{marginLeft: '200px'}}>
          <div className='row'>
            <div className='col-4'>
              <div className='course-card'>
                <img src={infy} className='card-img-top' alt='...' />
                <div
                  className='card-body'
                  style={{
                    height: '200px'
                  }}
                >
                  <h5 className='card-title'>Infosys</h5>
                  <p className='card-text'>
                    Complete preparation to crack Infosys.Join now!
                  </p>
                  <Link to='./Sidebar2' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={Wipro} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Wipro</h5>
                  <p className='card-text'>
                    Complete preparation to crack Wipro.Join now!
                  </p>
                  <Link to='./Wipro' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={Tcs} className='card-img-top' alt='...' />
                
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Tata Consulantancy Services</h5>
                  <p className='card-text'>
                    Complete preparation to crack TCS.Join now!
                  </p>
                  <Link to='./Tcs' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={Lti} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Larsen and Tubro Infotech</h5>
                  <p className='card-text'>
                    Complete preparation to crack LTI.Join now!
                  </p>
                  <Link to='./LTI' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={Ttl} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Tata Technologies LTD</h5>
                  <p className='card-text'>
                    Complete preparation to crack Tata Technologies.Join now!
                  </p>
                  <Link to='./TTL' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={Mphasis} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Mphasis</h5>
                  <p className='card-text'>
                    Complete preparation to crack Mphasis.Join now!
                  </p>
                  <Link to='./Mphasis' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={Epic} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Epic Research</h5>
                  <p className='card-text'>
                    Complete preparation to crack Epic Research.Join now!
                  </p>
                  <Link to='./Epic' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-4'>
              <div className='course-card'>
                <img src={Syntel} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Syntel</h5>
                  <p className='card-text'>
                    Complete preparation to crack Syntel.Join now!
                  </p>
                  <Link to='./Syntel' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-4'>
              <div className='course-card'>
                <img src={Persi} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Persistent</h5>
                  <p className='card-text'>
                    Complete preparation to crack Persistent.Join now!
                  </p>
                  <Link to='./Persistent' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <img src={CapImg} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Capgemini</h5>
                  <p className='card-text'>
                    Complete preparation to crack Capgemini.Join now!
                  </p>
                  <Link to='./Capgemini' className='btn btn-success'>
                    View Course
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
              <img src={jio1} className='card-img-top' alt='...' />
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Reliance Jio</h5>
                  <p className='card-text'>
                    Complete preparation to crack Reliance Jio.Join now!
                  </p>
                  <Link to="./Reliance" className='btn btn-success'>View Course</Link>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body' style={{ height: '200px' }}>
                  <h5 className='card-title'>Iasys</h5>
                  <p className='card-text'>
                    Complete preparation to crack Demand Farm.Join now!
                  </p>
                  <Link to="./Iasys" className='btn btn-success'>View Course</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Campus;

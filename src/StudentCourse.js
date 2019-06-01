import './studentlogin.css';

import { Link } from 'react-router-dom';


import React, { Component } from 'react';
import Sidebar1 from './Sidebar1';
import Sidemenu from './sidemenu';
class StudentCourse extends Component {
  render() {
    return (
      <React.Fragment>
        
        
        
        <div className='topmenu'>
          <div id='brand'>Learning Platform</div>
          <div className='sidebar'>
          <Link to='./StudentLogin'>Student Login</Link>
            <Link to='./StudentLogin'>Tutor Login</Link>
          </div>
          </div>
          <div id="list-example" className="list-group">
  <Link className="list-group-item list-group-item-action" to="/">Home</Link>
  <Link className="list-group-item list-group-item-action" to="./StudentCourse">Courses</Link>
  <Link className="list-group-item list-group-item-action" to="./VideoList">Videos</Link>
  <Link className="list-group-item list-group-item-action" to="./">Resources</Link>
  <Link className="list-group-item list-group-item-action" to="./Downloads">Downloads</Link>
  <Link className="list-group-item list-group-item-action" to="./Register">Register</Link>
  <Link className="list-group-item list-group-item-action" to="./">Contact</Link>
  <Link className="list-group-item list-group-item-action" to="./VideoList">About us</Link>



  <Link className="list-group-item list-group-item-action" to="./Exams">Exams</Link>
</div>


          <div className='container'>
        <h1 style={{textAlign:'center', color:'green',fontSize:'100px', padding:'20px'}}>Courses</h1>
          <div className='row'>
            <div className='col-4'>
              <div className='course-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Information about Campus Preparation</h5>
                  <p className='card-text'>
                    Complete Information to crack Aptitude.Join now!
                  </p>
                  <Link to='./Campus' className='btn btn-success'>
                Explore now
              </Link>
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
                <a className='dropdown-itemLink='#'>
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
export default StudentCourse;

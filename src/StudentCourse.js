import './studentlogin.css';


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
          <a href='./StudentLogin'>Student Login</a>
            <a href='./StudentLogin'>Tutor Login</a>
          </div>
          </div>
          <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="/">Home</a>
  <a className="list-group-item list-group-item-action" href="./StudentCourse">Courses</a>
  <a className="list-group-item list-group-item-action" href="./VideoList">Videos</a>
  <a className="list-group-item list-group-item-action" href="./">Resources</a>
  <a className="list-group-item list-group-item-action" href="./Downloads">Downloads</a>
  <a className="list-group-item list-group-item-action" href="./Register">Register</a>
  <a className="list-group-item list-group-item-action" href="./">Contact</a>
  <a className="list-group-item list-group-item-action" href="./VideoList">About us</a>



  <a className="list-group-item list-group-item-action" href="./Exams">Exams</a>
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
                  <a href='./Campus' className='btn btn-success'>
                Explore now
              </a>
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
export default StudentCourse;

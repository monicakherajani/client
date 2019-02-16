import React, { Component, ReactDOM } from 'react';
import Footer from './Footer';
import PropTypes from 'prop-types';
import StudentCourse from './StudentCourse';
import Sidebar1 from './Sidebar1';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-responsive-carousel';
import campus_placement from './campus-placement.png';
import slider1 from './slider1.jpg';
import slider2 from './slider2.jpg';
import slider3 from './slider3.png';
import Sidemenu from './sidemenu';

class FirstPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onTutorLogin = () => {
    this.context.router.history.push(`/tutorlogin`);
  };
  onStudentCourse = () => {
    this.context.router.history.push(`StudentCourse`);
  };
  onStudentLogin = () => {
    this.context.router.history.push(`/studentlogin`);
  };
  onAdminLogin = () => {
    this.context.router.history.push(`/adminlogin`);
  };
  onStudentRegister = () => {
    this.context.router.history.push(`/register`);
  };

  render() {
    console.log(this.onTutorLogin);
    return (
      <React.Fragment>
      <Sidemenu/>
      <div className='FirstPage-background'>
        <div className='container'>
          <br />
          <Sidebar1 />

          <div className='carousel'>
            <div className='slide slide2'>
              <img src={slider1} alt='' />
            </div>
            <div className='slide slide1'>
              <img src={slider2} alt='' />
            </div>
            <div className='slide slide3'>
              <img src={slider3} alt='' />
            </div>
          </div>

          <StudentCourse />

          <br />
          <button
            className='btn btn-success fp-btn'
            onClick={this.onStudentLogin}
          >
            Tutor Login
          </button>
          {/* <br /> */}
          <button
            className='btn btn-success fp-btn'
            onClick={this.onStudentLogin}
          >
            Student Login
          </button>
          {/* <br /> */}
          <button
            className='btn btn-success fp-btn'
            onClick={this.onAdminLogin}
          >
            Admin Login
          </button>
          {/* <br /> */}
          <button
            className='btn btn-success fp-btn'
            onClick={this.onStudentRegister}
          >
            New Student Registration
          </button>
          {/* <br /> */}
        </div>

        {/* <Carousel>
          <div>
            <img src={campus_placement} alt=''/>
          </div>
        </Carousel> */}
      </div>
      </React.Fragment>
    );
  }
}
export default FirstPage;

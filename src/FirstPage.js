import React, { Component } from 'react';
import Footer from './Footer';
import PropTypes from 'prop-types';
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
     
      <div className='FirstPage-background'>
      <div className='container'>
        <button className='btn btn-success' onClick={this.onTutorLogin}>
          Tutor Login
        </button>
        <br />
        <button className='btn btn-success'onClick={this.onStudentLogin}>Student Login</button>
        <br />
        <button className='btn btn-success'onClick={this.onAdminLogin}>Admin Login</button>
        <br />
        <button className='btn btn-success' onClick={this.onStudentRegister}>
          New Student Registration
        </button>
        <br />
        </div>
      </div>
    );
  }
}
export default FirstPage;

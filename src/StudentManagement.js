import React, { Component } from 'react';
import TutSidemenu from './TutSidemenu';
import axios from 'axios';
import Constants from './Constants';


class StudentManagement extends Component {
    state = {
        Name: '',
        Email: '',
        Mobile: '',
        RegisteredCourse: ''
      };
      onChangeName = event => {
        this.setState({ Name: event.target.value });
      };
    
      onChangeEmail = event => {
        this.setState({ Email: event.target.value });
      };
      onChangeMobile = event => {
        this.setState({ Mobile: event.target.value });
      };
      onAddStudent = () => {
        axios
          .post(Constants.BASE_URL + 'student/addstudent', this.state)
          .then(res => {
            console.log(res);
          });
      };
    
    render()  {

return (
    <React.Fragment>
        <TutSidemenu/>
    <div id="list-example" className="list-group">
    <a className="list-group-item list-group-item-action" href="./TutLogin">Home</a>
  <a className="list-group-item list-group-item-action" href="">Add Student</a>
  <a className="list-group-item list-group-item-action" href="./FindStudent">List Student</a>
</div>

<table className="table container">
<h1>Add Student</h1>

<div className='form-container' style={{ width: '60%' }}>
  <tr>
    <td>          <label>Student Name</label></td>
    <td>          <input
    type='text'
    onChange={this.onChangeName}
    className='form-control'
  /></td>
  </tr>
  <tr>
    <td><label>Email</label></td>
    <td> <input
    type='text'
    onChange={this.onChangeEmail}
    className='form-control'
  />
 </td>
  </tr>
  <tr>
    <td> <label>Registered Course</label></td>
    <td> <input
    type='text'
    onChange={this.onChangeCourse}
    className='form-control'
  /></td>
  </tr>
  <tr>
  
    <td> <label>Mobile</label></td>
    <td> <input
    type='text'
    onChange={this.onChangeMobile}
    className='form-control'
  /></td>
  </tr>
  <tr>
                <td colSpan='2'>
                  <button className='btn btn-success' onClick={this.onAddStudent}>
                    Add Student
                  </button>
                </td>
              </tr>
              </div>
 </table> 
        
        </React.Fragment>

);
    }
}
export default StudentManagement;
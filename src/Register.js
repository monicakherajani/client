import React, { Component } from 'react';
import Sidemenu from './sidemenu';
import axios from 'axios';
import Constants from './Constants';

class Register extends Component {
  state = {
    Name: '',
    Email_id: '',
    Username: '',
    Password: '',
    ConfirmPassword: '',
    State: '',
    City: '',
    PhoneNo: '',
    Age: '',
    Qualification: '',
    Address: '',
    College: '',
    Branch: ''
  };
  onChangeName = event => {
    this.setState({ Name: event.target.value });
  };
  onChangeEmail_id = event => {
    this.setState({ Email: event.target.value });
  };
  onChangeUsername = event => {
    this.setState({ Username: event.target.value });
  };
  onChangePassword = event => {
    this.setState({ Password: event.target.value });
  };
  onChangeConfirmPassword = event => {
    this.setState({ ConfirmPassword: event.target.value });
  };
  onChangeCity = event => {
    this.setState({ City: event.target.value });
  };
  onChangeState = event => {
    this.setState({ State: event.target.value });
  };
  onChangeAge = event => {
    this.setState({ Age: event.target.value });
  };

  onChangeQualification = event => {
    this.setState({ Qualification: event.target.value });
  };
  onChangeAddress = event => {
    this.setState({ Address: event.target.value });
  };
  onChangeCollege = event => {
    this.setState({ College: event.target.value });
  };

  onRegister=()=>{
    axios.post(Constants.BASE_URL+'student/addstudent',this.state)
    .then(res=>{
      console.log(res);
    });
  };

  render() {
    return (
      <div class='register-background'>
      <h1>Register</h1>
        <div className='Register'>
          <Sidemenu />
          <table className='table'>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    onChange={this.onChangeName}
                    className='form-control'
                  />
                </td>
              </tr>
              
              <tr>
                <td>Username</td>
                <td>
                  <input onChange={this.onChangeUsername} />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input onChange={this.onChangePassword} />
                </td>
              </tr>
              <tr>
                <td>Confirm Password</td>
                <td>
                  <input onChange={this.onChangeConfirmPassword} />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <input type='Age' onChange={this.onChangeAge} />
                </td>
              </tr>
              <tr />
              <tr>
                <td>Qualification</td>
                <td>
                  <input
                    type='Qualification'
                    onChange={this.onChangeQualification}
                  />
                </td>
              </tr>
              <tr />
              <tr>
                <td>Address</td>
                <td>
                  <input type='Address' onChange={this.onChangeAddress} />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input onChange={this.onChangeCity} />
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>
                  <input onChange={this.onChangeState} />
                </td>
              </tr>
              <tr />
              <tr>
                <td>College</td>
                <td>
                  <input type='College' onChange={this.onChangeCollege} />
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <button className='btn btn-success' onClick={this.onRegister}>Register</button>{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> //no need to write from table tag
    );
  }
}

export default Register;

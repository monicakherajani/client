import React, { Component } from 'react';
import Sidemenu from './sidemenu';
import axios from 'axios';
import Constants from './Constants';
import Sidebar1 from './Sidebar1';


class Register_tutor extends Component {
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
  onChangeBranch = event => {
    this.setState({ Address: event.target.value });
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

  onRegister = () => {
    axios
      .post(Constants.BASE_URL + 'tutor/addtutor', this.state)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <React.Fragment>
      <Sidemenu/>
      <Sidebar1/>
      <div class='register-background'>
        <h1>Register As Tutor</h1>
        <div className='Register'>
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
                  <input
                    onChange={this.onChangeUsername}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type='Password'
                    onChange={this.onChangePassword}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>Confirm Password</td>
                <td>
                  <input
                    type='Password'
                    onChange={this.onChangeConfirmPassword}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td style={{ textAlign: 'left' }}>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    id='exampleRadios1'
                    value='male'
                    checked='true'
                    style={{ marginLeft: '10px' }}
                  />
                  <label
                    class='form-check-label'
                    for='exampleRadios1'
                    style={{ marginLeft: '30px' }}
                  >
                    Male
                  </label>
                  <br />
                  <input
                    class='form-check-input'
                    type='radio'
                    name='gender'
                    id='exampleRadios1'
                    value='female'
                    style={{ marginLeft: '10px' }}
                  />
                  <label
                    class='form-check-label'
                    for='exampleRadios1'
                    style={{ marginLeft: '30px' }}
                  >
                    Female
                  </label>
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <input
                    type='Age'
                    onChange={this.onChangeAge}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>
                  <input
                    type='Qualification'
                    onChange={this.onChangeQualification}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input
                    type='Address'
                    onChange={this.onChangeAddress}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                    onChange={this.onChangeCity}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>
                  <input
                    onChange={this.onChangeState}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>Branch</td>
                <td>
                  <input
                    type='College'
                    onChange={this.onChangeCollege}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td>College</td>
                <td>
                  <input
                    type='College'
                    onChange={this.onChangeCollege}
                    className='form-control'
                  />
                </td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <button className='btn btn-success' onClick={this.onRegister}>
                    Register
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       </React.Fragment>
    );
  }
}

export default Register_tutor;

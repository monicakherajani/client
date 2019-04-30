import React, { Component } from 'react';
import Footer from './Footer';
import SocialButton from './SocialButton';
import Axios from 'axios';
import Constants from './Constants';
import Session from './Session';
import { Redirect } from 'react-router-dom';
class Tut_Login extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    s: 'none',
    loginstatus: false
  };

  constructor() {
    super();
    this.session = Session.getInstance();
  }

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onLogin = () => {
    Axios.get(
      Constants.BASE_URL +
        'tutor/login?' +
        'username=' +
        this.state.username +
        '&password=' +
        this.state.password
    ).then(response => {
      let res = response.data;
      if (res.status === 'success') {
        this.session.tutor = res.tutor;
        this.session.usertype = 'tutor';
        this.setState({
          message: 'Login Successful',
          s: 'block',
          loginstatus: true
        });
      } else {
        this.setState({ message: 'Login failed' });
      }
      console.log(res);
    });
  };

  render() {
    if (this.state.loginstatus) {
      return <Redirect push='true' to='/TutLogin' />;
    }
    return (
      <React.Fragment>
        <div className='container'>
          <div className='omb_login'>
            <h3 className='omb_authTitle'>Login</h3>
            {/* <div className='row omb_row-sm-offset-3 omb_socialButtons'>
              <div className='col-xs-4 col-sm-2'> */}
            {/* <SocialButton
                  className='btn btn-lg btn-block omb_btn-facebook'
                  style={{ color: 'white' }}
                  provider='facebook'
                  appId='396218067847855'
                  onLoginSuccess={this.handleSocialLogin}
                  onLoginFailure={this.handleSocialLoginFailure}
                >
                  <i className='fab fa-facebook visible-xs' />
                  &nbsp;
                  <br />
                  <span className='hidden-xs'>Facebook</span>
                </SocialButton>
              </div>
              <div className='col-xs-4 col-sm-2'>
                <button
                  className='btn btn-lg btn-block omb_btn-twitter'
                  style={{ color: 'white' }}
                >
                  <i className='fab fa-twitter visible-xs' />
                  &nbsp;
                  <br />
                  <span className='hidden-xs'>Twitter</span>
                </button>
              </div>
              <div className='col-xs-4 col-sm-2'>
                <button
                  className='btn btn-lg btn-block omb_btn-google'
                  style={{ color: 'white' }}
                >
                  <i className='fab fa-google-plus visible-xs' />
                  &nbsp;
                  <br />
                  <span className='hidden-xs'>Google</span>
                </button>
              </div>
            </div> */}

            <div className='row omb_row-sm-offset-3 omb_loginOr'>
              <div className='col-xs-12 col-sm-6'>
                <hr className='omb_hrOr' />
                {/* <span className='omb_spanOr'>or</span> */}
              </div>
            </div>

            <div className='row omb_row-sm-offset-3'>
              <div className='col-xs-12 col-sm-6'>
                <form
                  className='omb_loginForm'
                  autocomplete='off'
                  method='POST'
                >
                  <div class='input-group flex-nowrap'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='addon-wrapping'>
                        <i class='far fa-user' />
                      </span>
                    </div>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Username'
                      aria-label='Username'
                      aria-describedby='addon-wrapping'
                      onChange={this.onChangeUsername}
                    />
                  </div>

                  <div class='input-group flex-nowrap'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='addon-wrapping'>
                        <i class='fa fa-lock' />
                      </span>
                    </div>
                    <input
                      type='password'
                      class='form-control'
                      placeholder='Password'
                      aria-label='password'
                      aria-describedby='addon-wrapping'
                      onChange={this.onChangePassword}
                    />
                  </div>

                  {/* <span className='help-block'>Password error</span> */}

                  <button
                    className='btn btn-lg btn-primary btn-block'
                    type='button'
                    onClick={this.onLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className='row omb_row-sm-offset-3'>
              <div className='col-xs-12 col-sm-3'>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    value='remember-me'
                    className='form-control-md'
                  />
                  Remember Me
                </label>
              </div>
              <div className='col-xs-12 col-sm-3'>
                <p className='omb_forgotPwd'>
                  <button style={{ border: 0 }}>Forgot password?</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        {this.state.message}
        {/* <div className='container'>
        <h3>Login</h3>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            classNameName='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
          <small id='emailHelp' classNameName='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>

          <div classNameName='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              classNameName='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div classNameName='form-group form-check'>
            <input
              type='checkbox'
              classNameName='form-check-input'
              id='exampleCheck1'
            />
            <label classNameName='form-check-label' for='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' classNameName='btn btn-primary'>
            Submit
          </button>
        </div>
        {/* <div>
        <table>
          <tr>
            <td>Username</td>
            <td>
              <input onChange={this.onChangeUsername} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type='password' onChange={this.onChangePassword} />
            </td>
          </tr>
          <tr>
            <td colspan='2'>
              <button onClick={this.onLogin}>Login</button>{' '}
            </td>
          </tr>
        </table>
        Username : {this.state.username}
        <br />
        Password : {this.state.password}
        <br />
        {this.state.message}
        <div style={{ display: this.state.s }}>
          Welcome to Learning Platform
        </div>
        <Footer></Footer>
       
      </div> */}
      </React.Fragment>
    );
  }
}

export default Tut_Login;

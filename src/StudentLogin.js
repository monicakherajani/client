import React, { Component } from 'react';
import Footer from './Footer';


class StudentLogin extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    s: 'none'
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onLogin = () => {
    if (this.state.username === 'abcd' && this.state.password === 'efgh') {
      this.setState({ message: 'Login Successful', s: 'block' });
    } else {
      this.setState({ message: 'Login failed' });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='omb_login'>
            <h3 className='omb_authTitle'>
              Login or <button className="btn btn-primary">Sign up</button>
            </h3>
            <div className='row omb_row-sm-offset-3 omb_socialButtons'>
              <div className='col-xs-4 col-sm-2'>
                <button className='btn btn-lg btn-block omb_btn-facebook' style={{color:'white'}}>
                  <i className='fab fa-facebook visible-xs' />&nbsp;<br/>
                  <span className='hidden-xs'>Facebook</span>
                </button>
              </div>
              <div className='col-xs-4 col-sm-2'>
                <button className='btn btn-lg btn-block omb_btn-twitter' style={{color:'white'}}>
                  <i className='fab fa-twitter visible-xs' />&nbsp;<br/>
                  <span className='hidden-xs'>Twitter</span>
                </button>
              </div>
              <div className='col-xs-4 col-sm-2'>
                <button className='btn btn-lg btn-block omb_btn-google' style={{color:'white'}}>
                  <i className='fab fa-google-plus visible-xs' />&nbsp;<br/>
                  <span className='hidden-xs'>Google+</span>
                </button>
              </div>
            </div>

            <div className='row omb_row-sm-offset-3 omb_loginOr'>
              <div className='col-xs-12 col-sm-6'>
                <hr className='omb_hrOr' />
                <span className='omb_spanOr'>or</span>
              </div>
            </div>

            <div className='row omb_row-sm-offset-3'>
              <div className='col-xs-12 col-sm-6'>
                <form
                  className='omb_loginForm'
                  action=''
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
                    />
                  </div>

                  <span className='help-block'>Password error</span>

                  <button
                    className='btn btn-lg btn-primary btn-block'
                    type='submit'
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className='row omb_row-sm-offset-3'>
              <div className='col-xs-12 col-sm-3'>
                <label className='checkbox'>
                  <input type='checkbox' value='remember-me' className='form-control-md' />
                  Remember Me
                </label>
              </div>
              <div className='col-xs-12 col-sm-3'>
                <p className='omb_forgotPwd'>
                  <button style={{border: 0}}>Forgot password?</button>
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default StudentLogin;

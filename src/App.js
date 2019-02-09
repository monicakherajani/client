import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
import './App.css';
import StudentLogin from './StudentLogin';
import FirstPage from './FirstPage';
import Register from './Register';
import Course from './Course';
import sidemenu from './sidemenu';
import StudentRegister from './StudentRegister'
// import loginScreen from './loginScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TutorLogin from './TutorLogin';
import StudentCourse from './StudentCourse';
import './studentlogin.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }
  componentWillMount() {
    // var loginPage =[];
    // loginPage.push(<loginScreen parentContext={this}/>);
    // this.setState({
    //               loginPage:loginPage
    //                 })
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props => <FirstPage {...props} />} />
            <Route path='/studentlogin' render={props => <StudentLogin {...props} />} />
            {/* <Route path='/adminlogin' render={props => <Login {...props} />} /> */}
            <Route path='/tutorlogin' render={props => <TutorLogin {...props} />} />
            <Route path='/register' render={props => <Register {...props} />} />
            <Route path='/course' render={props => <Course {...props} />} />
            <Route path='/studentcourse' render={props => <StudentCourse {...props} />} />
            <Route path='./StudentRegister.js' render={props => <StudentRegister {...props} />} />
            <Route path='/sidemenu.js' render={props => <sidemenu {...props} />} />

          </Switch>
        </BrowserRouter>
        {/* <div className='container'>
          <div className='form-group'>
            <div>
              {' '}
              <button type='button' class='btn btn-primary'>
                Tutor Login
              </button>
            </div>
            <div>
              {' '}
              <button type='button' class='btn btn-primary'>
                Student Login
              </button>
            </div>
            <div>
              {' '}
              <button type='button' class='btn btn-primary'>
                Administrator Login
              </button>
            </div>

            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' for='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>

        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for='inputEmail4'>Email</label>
            <input
              type='email'
              className='form-control'
              id='inputEmail4'
              placeholder='Email'
            />
          </div>
          <div className='form-group col-md-6'>
            <label for='inputPassword4'>Password</label>
            <input
              type='password'
              className='form-control'
              id='inputPassword4'
              placeholder='Password'
            />
            >
          </div>
        </div>
        <div className='form-group'>
          <label for='inputAddress'>Address</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
          />
        </div>
        <div className='form-group'>
          <label for='inputAddress2'>Address 2</label>
          <input
            type='text'
            className='form-control'
            id='inputAddress2'
            placeholder='Apartment, studio, or floor'
          />
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for='inputCity'>City</label>
            <input type='text' className='form-control' id='inputCity' />
          </div>
          <div className='form-group col-md-4'>
            <label for='inputState'>State</label>
            <select id='inputState' className='form-control'>
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className='form-group col-md-2'>
            <label for='inputZip'>Zip</label>
            <input type='text' className='form-control' id='inputZip' />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='gridCheck'
            />
            <label className='form-check-label' for='gridCheck'>
              Check me out
            </label>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Sign in
        </button>

        <ul className='list-group'>
          <li className='list-group-item'>1.TCS</li>
          <li className='list-group-item'>2.Wipro</li>
          <li className='list-group-item'>3.LTI</li>
          <li className='list-group-item'>4.Infosys</li>
          <li className='list-group-item'>5.Raja Software</li>
        </ul>

        <div
          id='carouselExampleSlidesOnly'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='...' className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='...' className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='...' className='d-block w-100' alt='...' />
            </div>
          </div>
        </div>
        <div className='progress'>
          <div
            className='progress-bar progress-bar-striped progress-bar-animated'
            role='progressbar'
            aria-valuenow='75'
            aria-valuemin='0'
            aria-valuemax='100'
            stylesheet='width: 75%'
          />
        </div> */}
      </React.Fragment>
    );
  }

  render2() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 alert-danger'>Hello</div>
            <div className='col-3 alert-success'>Hello</div>
            <div className='col-5 alert-primary'>Hello</div>
          </div>
          <StudentLogin />
          <FirstPage />
          <Register />
          <Course />
          <sidemenu/>
          
        </div>
      </div>
    );
  }
}
// const style = {
//   margin: 15,
// };
export default App;
// if(response.data.code == 200){
//   console.log("Login successfull");
//   var uploadScreen=[];
//   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//   }

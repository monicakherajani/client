import React, { Component } from 'react';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
import './App.css';
import TestList from './TestList';
import StudentLogin from './StudentLogin';
import FirstPage from './FirstPage';
import Register from './Register';
import Course from './Course';
import StudentRegister from './StudentRegister';
// import loginScreen from './loginScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TutorLogin from './TutorLogin';
import TutLogin from './TutLogin';
import TutSidemenu from './TutSidemenu';
import TutorRegistration from './TutorRegistration';
import StudentCourse from './StudentCourse';
import Sidebar2 from './Sidebar2';
import './studentlogin.css';
import Test from './Test';
import Questions from './Questions';
import VideoList from './VideoList';
import Downloads from './Downloads';
import Campus from './Campus';
import AddVideo from './AddVideo';
import Resorces from './Resources';
import EditStudent from './EditStudent';
import FindStudent from './FindStudent';
import InfyLearn from './InfyLearn';
import Tcs from './Tcs';
import LTI from './LTI';
import Wipro from './Wipro';
import TTL from './TTL';
import Persistent from './Persistent';
import Epic from './Epic';
import Mphasis from './Mphasis';
import Syntel from './Syntel';
import Capgemini from './Capgemini'
import Reliance from './Reliance';
import Iasys from './Iasys';
import Cometitive from './Competitve';  

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Exams from './Exams';
import CourseDetails from './CourseDetails';
import TutSidebar from './TutSidebar';
import StudentManagement from './StudentManagement';
import BatchManagement from './BatchManagement';
import CategoryList from './CategoryList';


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
            <Route
              path='/studentlogin'
              render={props => <StudentLogin {...props} />}
            />
            
            {/* <Route path='/adminlogin' render={props => <Login {...props} />} /> */}
            <Route
              path='/tutorlogin'
              render={props => <TutorLogin {...props} />}
            />
            <Route path='/register' render={props => <Register {...props} />} />
            <Route path='/downloads' render={props => <Downloads {...props} />} />
            <Route path='/campus' render={props => <Campus {...props} />} />
            <Route path='/TutorRegistration' render={props => <TutorRegistration {...props} />} />
            <Route path='/TutLogin' render={props => <TutLogin {...props} />} />
            <Route path='/TutSidemenu' render={props => <TutSidemenu {...props} />} />
            <Route path='/course/:id/:name' render={props => <Course {...props} />} />
              <Route path='/Sidebar2' render={props => <Sidebar2 {...props} />} />
              <Route path='/Test' render={props => <Test {...props} />} />
              <Route path='/Questions' render={props => <Questions {...props} />} />
              <Route path='/TestList' render={props => <TestList {...props} />} />
              <Route path='/VideoList' render={props => <VideoList {...props} />} />
              <Route path='/AddVideo' render={props => <AddVideo {...props} />} />
              <Route path='/Resources' render={props => <Resorces {...props} />} />
              <Route path='/CourseDetails/:id/:name' render={props => <CourseDetails {...props} />} />
              <Route path='/EditStudent' render={props => <EditStudent {...props} />} />
              <Route path='/FindStudent' render={props => <FindStudent {...props} />} />
              <Route path='/InfyLearn' render={props => <InfyLearn {...props} />} />
              <Route path='/Tcs' render={props => <Tcs {...props} />} />
              <Route path='/LTI' render={props => <LTI {...props} />} />
              <Route path='/Wipro' render={props => <Wipro {...props} />} />
              <Route path='/TTL' render={props => <TTL {...props} />} />
              <Route path='/TutSidebar' render={props => <TutSidebar{...props} />} />
              <Route path='/StudentManagement' render={props => <StudentManagement{...props} />} />
              <Route path='/BatchManagement' render={props => <BatchManagement {...props} />} />

              <Route path='/Persistent' render={props => <Persistent {...props} />} />
              <Route path='/Epic' render={props => <Epic {...props} />} />
              <Route path='/Mphasis' render={props => <Mphasis {...props} />} />

              <Route path='/Syntel' render={props => <Syntel {...props} />} />

              <Route path='/Capgemini' render={props => <Capgemini {...props} />} />
              <Route path='/Reliance' render={props => <Reliance {...props} />} />
              <Route path='/Iasys' render={props => <Iasys {...props} />} />
              <Route path='/CategoryList/:id?' render={props => <CategoryList {...props} />} />

              <Route path='/Competitve' render={props => <Cometitive {...props} />} />





            <Route path='/studentcourse'
              render={props => <StudentCourse {...props} />}
            />
            <Route
              path='./StudentRegister.js'
              render={props => <StudentRegister {...props} />}
            />
            <Route
              path='/sidemenu.js'
              render={props => <sidemenu {...props} />}
            />
            <Route
              path='/Exams'
              render={props => <Exams {...props} />}
            />
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
          <sidemenu />
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

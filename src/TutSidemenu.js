import React, { Component } from 'react';
class TutSidemenu extends Component {
  render() {
    console.log('sidemenu render');
    return (
     
      <React.Fragment>
        <div className='topmenu'>
          <div id='brand'>Learning Platform</div>
          <div className='sidebar'>
            <a className='active' href='/'>
              Home
            </a>
            <a href='./StudentCourse'>Courses</a>
            <a href='#Resources'>Total Views</a>
            <a href='#profile'>Profile</a>
            <a href='./Fllowers'>Followers</a>
            <a href='#contact'>Create Video</a>
            <a href='./Test'>Create Test</a>
            <a href='#contact'>Video List</a>
            
          </div>
        </div>
      </React.Fragment>
    );

   
  }
}
export default TutSidemenu;

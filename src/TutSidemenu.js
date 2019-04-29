import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class TutSidemenu extends Component {
  render() {
    console.log('sidemenu render');
    return (
     
      <React.Fragment>
        <div className='topmenu'>
          <div id='brand'>Learning Platform</div>
          <div className='sidebar'>
            
            <Link to='./Test'>Quiz Management</Link>
            <Link to='./StudentManagement'>Student Management</Link>
            <Link to='./BatchManagement'>Batch Management</Link>
            <Link to='./'>Logout</Link>
            
          </div>
        </div>
      </React.Fragment>
    );

   
  }
}
export default TutSidemenu;

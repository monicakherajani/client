import React, { Component } from 'react';
class TutSidemenu extends Component {
  render() {
    console.log('sidemenu render');
    return (
     
      <React.Fragment>
        <div className='topmenu'>
          <div id='brand'>Learning Platform</div>
          <div className='sidebar'>
            
            <a href='./Test'>Quiz Management</a>
            <a href='./StudentManagement'>Student Management</a>
            <a href='./BatchManagement'>Batch Management</a>
            <a href=''>Logout</a>
            
          </div>
        </div>
      </React.Fragment>
    );

   
  }
}
export default TutSidemenu;

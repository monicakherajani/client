import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import campus_placement from './campus-placement.png';
import Competitive from './Competitive.png';
import TutSidemenu from './TutSidemenu';
import TutSidebar from './TutSidebar';


class TutLogin extends Component {
  render() {
    return (
               
      <React.Fragment>
        
        <TutSidemenu/>
        <TutSidebar/>
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Add Activity/Resources
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">URL</a>
    <a className="dropdown-item" href="#">File</a>
    <a className="dropdown-item" href="#">Folder</a>
  </div>
</div>
        <div className="card-row" style={{marginLeft:'250px'}}>
        <div className='card-container'>
          <div className='course-card' style={{ width: '18rem' }}>
            <img src={campus_placement} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Campus Preparation</h5>
              <p className='card-text'>
                Upload contents for Campus Preparation.
              </p>
              <Link to='./CategoryList' className='btn btn-success'>
                Add to Course.
              </Link>
            </div>
          </div>

          <div className='course-card' style={{ width: '18rem' }}>
            <img src={Competitive} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Competitive Exams</h5>
              <p className='card-text'>
              Upload contents for Competitive Exams.

              </p>
              <Link to='./CategoryList' className='btn btn-success'>
                 Add to Course.
              </Link>
            </div>
          </div>
        </div>
        </div>
       

   
  

      </React.Fragment>
    );
  }
}
export default TutLogin ;

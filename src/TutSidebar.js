import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class TutSidebar extends Component {
    render()  {

return (
    
    <div id="list-example" className="list-group">
  <Link className="list-group-item list-group-item-action" to="./TutLogin">Home</Link>
  {/* {/* <a className="list-group-item list-group-item-action" to="./CategoryList">My Courses</a> */}
  <Link className="list-group-item list-group-item-action" to="./CategoryList">Create Course</Link>
  <Link className="list-group-item list-group-item-action" to="./Test">Add Test</Link>
  <Link className="list-group-item list-group-item-action" to="./AddVideo">Add Video</Link>
  <Link className="list-group-item list-group-item-action" to="./Questions">Add Question</Link>
   
</div>
 );

}


}
export default TutSidebar;
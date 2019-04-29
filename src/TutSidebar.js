import React, { Component } from 'react';


class TutSidebar extends Component {
    render()  {

return (
    
    <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="./TutLogin">Home</a>
  <a className="list-group-item list-group-item-action" href="./CategoryList">My Courses</a>
  <a className="list-group-item list-group-item-action" href="./Course">Create Course</a>
  <a className="list-group-item list-group-item-action" href="./Test">Add Test</a>
  <a className="list-group-item list-group-item-action" href="./AddVideo">Add Video</a>
  <a className="list-group-item list-group-item-action" href="./Question">Add Question</a>
   
</div>
 );

}


}
export default TutSidebar;
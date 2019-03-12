import React, { Component } from 'react';


class TutSidebar extends Component {
    render()  {

return (
    
    <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="./TutLogin">Home</a>
  <a className="list-group-item list-group-item-action" href="./StudentCourse">My Courses</a>
  <a className="list-group-item list-group-item-action" href="./Course">Create Course</a>
  <a className="list-group-item list-group-item-action" href="./">Participants</a>
  <a className="list-group-item list-group-item-action" href="">Results</a>
  <a className="list-group-item list-group-item-action" href="">Batches</a>
   
</div>
 );

}


}
export default TutSidebar;
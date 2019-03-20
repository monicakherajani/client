import React, { Component } from 'react';


class CourseSidebar extends Component {
    render()  {

return (
    
    <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="/">Home</a>
  <a className="list-group-item list-group-item-action" href="./Downloads">Information about Course</a>
  <a className="list-group-item list-group-item-action" href="./VideoList">Videos</a>
  <a className="list-group-item list-group-item-action" href="./TestList">Test</a>
  <a className="list-group-item list-group-item-action" href="./Downloads">Assignment</a>
  <a className="list-group-item list-group-item-action" href="./Register">Download Study material</a>
  <a className="list-group-item list-group-item-action" href="./">Contact</a>
  <a className="list-group-item list-group-item-action" href="./VideoList">About us</a>



  <a className="list-group-item list-group-item-action" href="./Exams">Exams</a>
</div>
 );

}


}
export default CourseSidebar;
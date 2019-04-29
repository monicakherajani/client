import React, { Component } from 'react';


class Sidebar1 extends Component {
    render()  {

return (
    
    <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="/">Home</a>
  <a className="list-group-item list-group-item-action" href="./CategoryList">Courses</a>
  {/* <a className="list-group-item list-group-item-action" href="./VideoPlayer">Videos</a>
  <a className="list-group-item list-group-item-action" href="./">Resources</a> */}
  <a className="list-group-item list-group-item-action" href="./Downloads">Downloads</a>
  <a className="list-group-item list-group-item-action" href="./Register">Register</a>
  <a className="list-group-item list-group-item-action" href="./">Contact</a>
  <a className="list-group-item list-group-item-action" href="./">About us</a>



  <a className="list-group-item list-group-item-action" href="./Exams">Exams</a>
</div>
 );

}


}
export default Sidebar1;
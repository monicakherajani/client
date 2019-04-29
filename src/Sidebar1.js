import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class Sidebar1 extends Component {
    render()  {

return (
    
    <div id="list-example" className="list-group">
  <Link className="list-group-item list-group-item-action" to="/">Home</Link>
  <Link className="list-group-item list-group-item-action" to="./CategoryList">Courses</Link>
  {/* <a className="list-group-item list-group-item-action" href="./VideoPlayer">Videos</a>
  <a className="list-group-item list-group-item-action" href="./">Resources</a> */}
  <Link className="list-group-item list-group-item-action" to="/Downloads">Downloads</Link>
  <Link className="list-group-item list-group-item-action" to="./Register">Register</Link>
  <Link className="list-group-item list-group-item-action" to="./">Contact</Link>
  <Link className="list-group-item list-group-item-action" to="./">About us</Link>



  {/* <a className="list-group-item list-group-item-action" href="./Exams">Exams</a> */}
</div>
 );

}


}
export default Sidebar1;
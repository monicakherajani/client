import React,{Component} from 'react';
import axios from 'axios';
import Constants from './Constants';
import EditStudent from './EditStudent';
import TutSidemenu from './TutSidemenu';
import TutSidebar from './TutSidebar';

class FindStudent extends Component {
    onRegister = () => {
        axios
          .post(Constants.BASE_URL + 'FindStudent/FindStudent', this.state)
          .then(res => {
            console.log(res);
          });
      };
    
    render() {
        return(
            <React.Fragment>
              <TutSidemenu/>
              <TutSidebar/>
<ul class="container">
  <li class="list-group-item">Monica</li><a href="./EditStudent" className='btn btn-success' >Edit Details</a>
  <li class="list-group-item">Priyanka</li><a href="./EditStudent" className='btn btn-success' >Edit Details</a>
  <li class="list-group-item">Pooja</li><a href="./EditStudent" className='btn btn-success' >Edit Details</a>
  <li class="list-group-item">Lakshmi</li><a href="./EditStudent" className='btn btn-success' >Edit Details</a>
  <li class="list-group-item">Bhakti</li><a href="./EditStudent" className='btn btn-success' >Edit Details</a>
</ul>
<a href="./StudentManagement" style={{marginLeft:'800px'}}className='btn btn-success' onClick={this.onAdd}>
          Add Student
        </a>
      
      </React.Fragment>
        );
    }
}
export default FindStudent;
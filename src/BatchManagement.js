import React, { Component } from 'react';
import TutSidemenu from './TutSidemenu';
import axios from 'axios';
import Constants from './Constants';


class BatchManagement extends Component {
    state = {
        Name: '',
        Start: '',
        End: '',
        
      };
      onChangeName = event => {
        this.setState({ Name: event.target.value });
      };
    
      onChangeStart = event => {
        this.setState({ Email: event.target.value });
      };
      onChangeEnd = event => {
        this.setState({ Mobile: event.target.value });
      };
      onAddBatch = () => {
        axios
          .post(Constants.BASE_URL + 'student/addstudent', this.state)
          .then(res => {
            console.log(res);
          });
      };
    
    render()  {

return (
    <React.Fragment>
        <TutSidemenu/>
        <table style={{width: '100%'}}>
          <tr>
            <td valign="top" width="20%">
            <div id="list-example" className="list-group">
    <a className="list-group-item list-group-item-action" href="./TutLogin">Home</a>
  <a className="list-group-item list-group-item-action" href="/">Create Batch</a>
  <a className="list-group-item list-group-item-action" href="./FindStudent">List Batch</a>
</div>
            </td>
            <td valign="top" width="80%">
              {' '} 
   

<table className="table container">
<h1>Create Batch</h1>
<div className='form-container' style={{ width: '40%' }}>

  <tr>
    <td>          <label>Batch Name</label></td>
    <td>          <input
    type='text'
    onChange={this.onChangeName}
    className='form-control'
  /></td>
  </tr>
  <tr>
    <td><label>Batch start on</label></td>
    <td> <input
    type='datetime-local'
    onChange={this.onChangeStart}
    className='form-control'
  />
 </td>
  </tr>
  <tr>
    <td> <label>Batch end on</label></td>
    <td> <input
    type='datetime-local'
    onChange={this.onChangeEnd}
    className='form-control'
  /></td>
  </tr>
  <tr>
  
   
  
                <td colSpan='2'>
                  <button className='btn btn-success' onClick={this.onAddBatch}>
                    Create Batch
                  </button>
                </td>
              </tr>
              </div>
 </table> 
 </td>
          </tr>
        </table>{' '}
        


           
 



        
        </React.Fragment>

);
    }
}
export default BatchManagement;
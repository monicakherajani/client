import React, { Component } from 'react';
import TutSidemenu from './TutSidemenu';
import Axios from 'axios';
import Constants from './Constants';
import TutSidebar from './TutSidebar';


class Course extends Component {
  state = {
    CourseName: '',
    ShortName:'',
    Description: '',
    Subtopics: '',
    Availability:'',
    TagArray: []
  };
  onChangeCourseName = event => {
    this.setState({ CourseName: event.target.value });
  };
  onChangeShortName = event => {
    this.setState({ ShortName: event.target.value });
  };

  onChangeDescription = event => {
    this.setState({ Description: event.target.value });
  };
  onChangeSubtopics = event => {
    this.setState({ Subtopics: event.target.value });
  };
  onChangeAvailability = event => {
    this.setState({ Availability: event.target.value });
  };

  onCreateCourse=event=>{
    Axios.post(Constants.BASE_URL+'')
  };
  onAdd = () => {

    Axios.post(Constants.BASE_URL+'video/addvideo',this.state).then(res=>{
      console.log(res);
    });

  };

  onAddTag = event => {
    let tagarray = this.state.TagArray;
    let val = event.target.value.toLowerCase().trim();
    if (val.length > 0 && tagarray.indexOf(val) === -1) {
      tagarray.push(val);
      this.setState({ TagArray: tagarray });
      event.target.value = '';
    }
  };
  onChangeTags = event => {
    let tagstr = event.target.value.toLowerCase();
    let tags = tagstr.split(' ');
    if (tags.length > 1) {
      let tagarray = this.state.TagArray;
      tags.forEach(element => {
        if (element.length > 0 && tagarray.indexOf(element) === -1) {
          tagarray.push(element);
        }
      });
      event.target.value = '';
      this.setState({ TagArray: tagarray });
    }
    // this.setState({ Tags:  });
  };

  removeTag(tag) {
    // console.log('removing tag',tag);
    let tagarray = this.state.TagArray;
    for (let i = tagarray.length - 1; i >= 0; i--) {
      if (tagarray[i] === tag) {
        tagarray.splice(i, 1);
      }
    }
    this.setState({ TagArray: tagarray });
  }


  render() {
    return (
      <React.Fragment>
        <TutSidemenu />
        <TutSidebar/>
        <table className="table container">
        <h1>Create Course</h1>
        <div className='form-container' style={{ width: '60%' }}>
        <br/>
        <tr>
       
       
        <td><label>Category</label></td>
        <input type="checkbox" name="cat1" value="Competitive"/> Competitive Exam  &nbsp;&nbsp; 

  <input type="checkbox" name="cat2" value="Campus"/> Campus Placement &nbsp;&nbsp; 
  <input type="checkbox" name="cat3" value="General" /> General Category<br/>
  
  </tr>
        <tr>
       
        <td><label>Course Full Name</label></td>
        <td> <input
            type='text'
            onChange={this.onChangeCourseName}
            className='form-control'
          /></td>
          </tr>
          <tr>
       
        <td><label>Course Short Name</label></td>
        <td> <input
            type='text'
            onChange={this.onChangeCourseShortName}
            className='form-control'
          /></td>
          </tr>
        
          <tr>
          <td><label>Description</label></td>
          <td> <input
            type='text'
            onChange={this.onChangeDescription}
            className='form-control'
          /></td>
          </tr>
          <tr>
          <td> <label>Subtopics</label></td>
          <td><input
            type='text'
            onChange={this.onChangeSubtopics}
            className='form-control'
          /></td>
          </tr>
          <tr>
          <td> <label>Availability</label></td>
          <td><input
            type='datetime-local'
            onChange={this.onAvailability}
            className='form-control'
          /></td>
          </tr>
          
          <tr>
          
          <td> <label>Visibility</label></td>
          <input type="radio" name="all" value="all"/> To all students<br/>
<input type="radio" name="batch" value="batch"/> To my batch<br/>

          </tr>
        
<tr>
<td><label>Tags</label></td>
<td> <input
          type='text'
          onChange={this.onChangeTags}
          onBlur={this.onAddTag}
          className='form-control'
        />
        </td>
        </tr>
        {this.state.TagArray.length === 0 ? (
          <span>No Tags selected</span>
        ) : (
          this.state.TagArray.map(t => {
            return (
              <>
                <button
                  style={{ minWidth: '30%', marginBottom: '2px' }}
                  onClick={() => {
                    this.removeTag(t);
                  }}
                  className='btn btn-primary'
                >
                  {t}&nbsp;&nbsp;&nbsp;
                  <i className='fas fa-trash' />
                </button>
                <br />
                

              </>
            );
          })
        )}

        <button className='btn btn-success' onClick={this.onAdd}>
          Create Course
        </button>
        </div>
        </table>
      </React.Fragment>
    
    );
  }
}

export default Course;

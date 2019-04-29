import React, { Component } from 'react';
import Questions from './Questions';
import TutSidemenu from './TutSidemenu';
import TutSidebar from './TutSidebar';
import Constants from './Constants';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
class Test extends Component {
  state = {
    Name: '',
    Description: '',
    No_questions: '',
    Duration: '',
    TagArray: []
  };
  onChangeName = event => {
    this.setState({ Name: event.target.value });
  };
  onChangeDescription = event => {
    this.setState({ Description: event.target.value });
  };
  onChangeNo_questions = event => {
    this.setState({ No_questions: event.target.value });
  };
  onChangeDuration = event => {
    this.setState({ Duration: event.target.value });
  };
  onAddTest = () => {
    Axios.post(Constants.BASE_URL+'test/addtest',this.state).then(res=>{
  console.log(res);
  this.setState({redirect:true});
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
    if(this.state.redirect)
    {

            return <Redirect push="true" to='/Questions/'/>;
    }
    return (
      <React.Fragment>
        <TutSidemenu/>
        <table style={{width: '100%'}}>
          <tr>
            <td valign="top" width="20%">
              <TutSidebar />
            </td>
            <td valign="top" width="80%">
              {' '}  

        <table className="table container">
        <h1>Create New Test</h1>
        <div className='form-container' style={{ width: '60%' }}>
        <tr>
         <td> <label>Test Name</label></td>
         <td> <input
            type='text'
            onChange={this.onChangeName}
            className='form-control'
          /></td>
          </tr>
          <tr>
         <td> <label>Test Description</label></td>
         <td> <input
            type='text'
            onChange={this.onChangeDescription}
            className='form-control'
          /></td>
          </tr>
          <tr>
          <td><label>Number of questions</label></td>
          <td> <input
            type='text'
            onChange={this.onChangeNo_questions}
            className='form-control'
          /></td>
          </tr>
          <tr>
          <td><label>Test duration</label></td>
          <td> <input
            type='text'
            onChange={this.onChangeDuration}
            className='form-control'
          /></td>
          </tr>
          <tr>
         <td> <label>Tags</label></td>
         <td> <input
            type='text'
            onChange={this.onChangeTags}
            onBlur={this.onAddTag}
            className='form-control'
          /></td>
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
        </div>
        <button style={{maginLeft:'1020px'}} className='btn btn-success' onClick={this.onAddTest}>
          Create Test
        </button>
        </table>
        </td>
          </tr>
        </table>{' '}
      </React.Fragment>
    );
  }
}
export default Test;

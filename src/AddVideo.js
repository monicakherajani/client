import React, { Component } from 'react';

import TutSidemenu from './TutSidemenu';
import Axios from 'axios';
import Constants from './Constants';
import TutSidebar from './TutSidebar';

class AddVideo extends Component {
  state = {
    VName: '',
    VDescription: '',
    url: '',
    TagArray: []
  };
  onChangeVName = event => {
    this.setState({ VName: event.target.value });
  };
  onChangeVDescription = event => {
    this.setState({ VDescription: event.target.value });
  };
  onChangeurl = event => {
    this.setState({ url: event.target.value });
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
        
        <h1>Add Video</h1>
        <div className='form-container' style={{ width: '60%' }}>

        
          <tr>
            <td>          <label>Video Name</label></td>
            <td>          <input
            type='text'
            onChange={this.onChangeVName}
            className='form-control'
          /></td>
          </tr>
          <tr>
            <td><label>Description</label></td>
            <td> <input
            type='text'
            onChange={this.onChangeVDescription}
            className='form-control'
          />
         </td>
          </tr>
          <tr>
            <td> <label>Embed url</label></td>
            <td> <input
            type='text'
            onChange={this.onChangeurl}
            className='form-control'
          /></td>
          </tr>
          <tr>
            <td><label>Tags</label></td>
            <td><input
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
         

       
                   
         
        

        
                
                
               
            

        <button 
        className='btn btn-success' onClick={this.onAdd}>
          Add Video
        </button>
        </div>
        </table>
                
                <br />
                
              </React.Fragment>
    );
  }
}
export default AddVideo;

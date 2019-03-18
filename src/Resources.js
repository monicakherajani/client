import React, { Component } from 'react';
import TutSidemenu from './TutSidemenu';
import axios from 'axios';
import Constants from './Constants';
import TutSidebar from './TutSidebar';


class Resources extends Component {
  state = {
    TagArray:[]

  };

  onChangeTags = event => {
    this.setState({ Tags: event.target.value });
  };
  onChangeName = event => {
    this.setState({ Name: event.target.value });
  };
  onChangeDescription = event => {
    this.setState({ Description: event.target.value });
  };
  
  
  
  onChangeUpload = event => {
    this.setState({Upload: event.target.files[0] });
     console.log(event.target.files[0]);
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

 
  onSubmitResource = () => {
    console.log('state', this.state);
    let form = new FormData();
    form.set('question', JSON.stringify(this.state));

    
    if (this.state.Upload) {
      form.append(
        'Upload',
        this.state.Upload,
        this.state.Upload.name
      );
    }

    console.log(form);

    axios.post(Constants.BASE_URL + 'addresource', form).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <React.Fragment>
        
        <TutSidemenu />
        <TutSidebar/>
        <div className='container' style={{ width: '40%' }}>
        <h1>Add Resource</h1>
          <label>Resource Name/URL</label>
          <input
            type='text'
            onChange={this.onChangeName}
            className='form-control'
          />
          <label>Resource Description</label>
          <input
            type='text'
            onChange={this.onChangeDescription}
            className='form-control'
          />
         
           Upload{' '}
          <input
            type='file'
            onChange={this.onChangeUpload}
            name='upload'
          />
          <br/>
           <label>Tags</label>
          <input
            type='text'
            onChange={this.onChangeTags}
            onBlur={this.onAddTag}
            className='form-control'
          />
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
         
        
        <button className='btn btn-success' onClick={this.onChangeUpload}>
          Upload Resource
        </button>
        </div>
        
              </React.Fragment>
    );
  }
}
export default Resources;

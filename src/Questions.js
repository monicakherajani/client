import React, { Component } from 'react';
import TutSidemenu from './TutSidemenu';
import axios from 'axios';
import Constants from './Constants';

class Questions extends Component {
  state = {
    TagArray:[]

  };

  onChangeTags = event => {
    this.setState({ Tags: event.target.value });
  };
  onChangeName = event => {
    this.setState({ Name: event.target.value });
  };
  onChangeQtype = event => {
    this.setState({ QType: event.target.value });
  };
  onChangeOption1 = event => {
    this.setState({ Option1: event.target.value });
  };
  onChangeOption2 = event => {
    this.setState({ Option2: event.target.value });
  };
  onChangeOption3 = event => {
    this.setState({ Option3: event.target.value });
  };
  onChangeOption4 = event => {
    this.setState({ Option4: event.target.value });
  };
  onChangeCorrectAns = event => {
    this.setState({ CorrectAns: event.target.value });
  };

  onChangeOption1Image = event => {
    this.setState({ Option1Image: event.target.files[0] });
    // console.log(event.target.files[0]);
  };
  onChangeOption2Image = event => {
    this.setState({ Option2Image: event.target.files[0] });
    // console.log(event.target.files[0]);
  };
  onChangeOption3Image = event => {
    this.setState({ Option3Image: event.target.files[0] });
    // console.log(event.target.files[0]);
  };
  onChangeOption4Image = event => {
    this.setState({ Option4Image: event.target.files[0] });
    // console.log(event.target.files[0]);
  };
  onChangeQuestionImage = event => {
    this.setState({ QuestionImage: event.target.files[0] });
    // console.log(event.target.files[0]);
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

 
  onSubmitQuestion = () => {
    console.log('state', this.state);
    let form = new FormData();
    form.set('question', JSON.stringify(this.state));

    if (this.state.QuestionImage) {
      form.append(
        'questionimage',
        this.state.QuestionImage,
        this.state.QuestionImage.name
      );
    }

    if (this.state.Option1Image) {
      form.append(
        'option1image',
        this.state.Option1Image,
        this.state.Option1Image.name
      );
    }

    if (this.state.Option2Image) {
      form.append(
        'option2image',
        this.state.Option2Image,
        this.state.Option2Image.name
      );
    }

    if (this.state.Option3Image) {
      form.append(
        'option3image',
        this.state.Option3Image,
        this.state.Option3Image.name
      );
    }

    if (this.state.Option4Image) {
      form.append(
        'option4image',
        this.state.Option4Image,
        this.state.Option4Image.name
      );
    }

    console.log(form);

    axios.post(Constants.BASE_URL + 'addquestion', form).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <React.Fragment>
        <TutSidemenu />
        <div className='container' style={{ width: '40%' }}>
        <h1>Add Questions</h1>
          <label>Question Type</label>
          <input
            type='text'
            onChange={this.onChangeQtype}
            className='form-control'
          />
          <label>Enter Question</label>
          <input
            type='text'
            onChange={this.onChangeName}
            className='form-control'
          />
          Image{' '}
          <input
            type='file'
            onChange={this.onChangeQuestionImage}
            name='option1image'
          />
          <hr />
          <label>Option 1</label>
          <input
            type='text'
            onChange={this.onChangeOption1}
            className='form-control'
          />
          Image{' '}
          <input
            type='file'
            onChange={this.onChangeOption1Image}
            name='option1image'
          />
          <hr />
          <label>Option 2</label>
          <input
            type='text'
            onChange={this.onChangeOption2}
            className='form-control'
          />
          Image{' '}
          <input
            type='file'
            onChange={this.onChangeOption2Image}
            name='option1image'
          />
          <hr />
          <label>Option 3</label>
          <input
            type='text'
            onChange={this.onChangeOption3}
            className='form-control'
          />
          Image{' '}
          <input
            type='file'
            onChange={this.onChangeOption3Image}
            name='option1image'
          />
          <hr />
          <label>Option 4</label>
          <input
            type='text'
            onChange={this.onChangeOption4}
            className='form-control'
          />
          Image{' '}
          <input
            type='file'
            onChange={this.onChangeOption4Image}
            name='option1image'
          />
          <hr />
          <label>Correct Answer</label>
          <input
            type='text'
            onChange={this.onChangeCorrectAns}
            className='form-control'
          />
          <hr />
          
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
         
        </div>
        <button className='btn btn-success' onClick={this.onSubmitQuestion}>
          Submit Question
        </button>

        <a href='./Questions' className='btn btn-success'>
          Add next Question
        </a>
      </React.Fragment>
    );
  }
}
export default Questions;

import React, { Component } from 'react';

import TutSidemenu from './TutSidemenu';
import Axios from 'axios';
import Constants from './Constants';
import TutSidebar from './TutSidebar';
import Session from './Session';

class QuestionList extends Component {
  TagArray = ['apti', 'infy'];

  state = {
    questionList: [],
    counter: 0,
    currentQuestion: {}
  };
  session = Session.getInstance();
  onNext = () => {
    if (this.state.counter < this.state.questionList.length - 1) {
      const counter = this.state.counter + 1;
      //   const questionID = this.state.questionID + 1;

      this.setState({
        counter: counter,
        currentQuestion: this.state.questionList[counter]
      });
    }
  };

  onPrev = () => {
    let counter = 1;
    counter--;
  };

  componentDidMount() {
    //   this.TagArray=this.session.testtags;
    // console.log('this', this.props.tags);
    Axios.get(
      Constants.BASE_URL +
        `question/getquestionbytags?tags=${this.TagArray.join(',')}`
    ).then(res => {
      console.log('res', res.data);
      let questionList=res.data;
      
      this.setState({ questionList: questionList, currentQuestion:questionList[0] });      
    });
  }

  render() {
    console.log('cq',this.state.currentQuestion);
    //   console.log(this.state.question);
    //   this.state.question.map(q => {
    //   return  console.log(q.url);

    //   });

    return (
      <React.Fragment>
          {(this.state.questionList.length===0)?"No Questions found":
        <div className='Questions'>
          <p>
            <span style={{}}>{this.state.currentQuestion.Name}</span>
          </p>
          <input type='radio' name='batch' value='1' /> Option1 :{' '}
          {this.state.currentQuestion.Option1}
          <br />
          <input type='radio' name='batch' value='2' /> Option2 :
          {this.state.currentQuestion.Option2}
          <br />
          <input type='radio' name='batch' value='3' /> Option3 :
          {this.state.currentQuestion.Option3}
          <br />
          <input type='radio' name='batch' value='4' /> Option4 :
          {this.state.currentQuestion.Option4}
          <br />
          {this.state.counter < this.state.questionList.length - 1 ? (
            <button className='btn btn-success' onClick={this.onNext}>
              Next
            </button>
          ) : (
            <button className='btn btn-success' onClick={this.onNext}>
              Finish
            </button>
          )}
          {this.state.counter === 0 ? (
            ''
          ) : (
            <button className='btn btn-success' onClick={this.onPrev}>
              Previous
            </button>
          )}
        </div>}
      </React.Fragment>
    );
  }
}
export default QuestionList;

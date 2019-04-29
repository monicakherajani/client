import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TutSidemenu from './TutSidemenu';
import Axios from 'axios';
import Constants from './Constants';
import TutSidebar from './TutSidebar';
import Session from './Session';
import { red100 } from 'material-ui/styles/colors';

class QuestionList extends Component {
  state = {
    questionList: [],
    counter: 0,
    currentQuestion: {},
    finish: false,
    started: false,
    minutes: 0,
    seconds: 0,
    lowtime:false
  };
  session = Session.getInstance();
  TagArray = this.session.test.TagArray;

  onNext = () => {
    if (this.state.counter < this.state.questionList.length - 1) {
      const counter = this.state.counter + 1;
      //const questionID = this.state.questionID + 1;

      this.setState({
        counter: counter,
        currentQuestion: this.state.questionList[counter]
      });
    }
  };

  onPrev = () => {
    if (this.state.counter < this.state.questionList.length) {
      const counter = this.state.counter - 1;
      //   const questionID = this.state.questionID + 1;

      this.setState({
        counter: counter,
        currentQuestion: this.state.questionList[counter]
      });
    }
  };

  componentDidMount() {
    //  this.TagArray=this.session.testtags;
    //console.log('this', this.props.tags);
    Axios.get(
      Constants.BASE_URL +
        `question/getquestionbytags?tags=${this.TagArray.join(',')}&n=${
          this.session.test.No_questions
        }`
    ).then(res => {
      console.log('res', res.data);
      let questionList = res.data;

      this.setState({
        questionList: questionList,
        currentQuestion: questionList[0]
      });
    });
  }

  onClearAnswer=()=>{
    let cq = this.state.currentQuestion;
    cq.answer = null;

    this.setState({ currentQuestion: cq });
  }

  onChangeAnswer = answer => {
    let cq = this.state.currentQuestion;
    cq.answer = answer;

    this.setState({ currentQuestion: cq });
  };

  onFinish = () => {
    this.session.TestQuestions = this.state.questionList;
    this.setState({ finish: true });
  };

  onTick() {
    let currenttime = new Date();
    let seconds = (currenttime - this.starttime) / 1000;
    let total = this.session.test.Duration * 60;
    // let total = 10;
    total -= seconds;

    let lowtime=false;
    if(total<120)
    {
      lowtime=true;
    }
    if(total<=0)
    {
      this.session.TestQuestions = this.state.questionList;
      this.setState({finish:true});
    }

    let minutes = Math.floor(total / 60);
    let sec = Math.floor(total - minutes * 60);

    this.setState({ minutes: minutes, seconds: sec, lowtime:lowtime });
  }

  onStartTest = () => {
    console.log(this.session);
    this.starttime = new Date();
    window.setInterval(this.onTick.bind(this), 1000);
    this.setState({ started: true });
  };

  render() {
    if (this.state.finish) {
      return <Redirect to='/Result' push='true' />;
    }
    console.log('cq', this.state.currentQuestion);
    //   console.log(this.state.question);
    //   this.state.question.map(q => {
    //   return  console.log(q.url);

    //   });
    
    return (
      <React.Fragment>
        {!this.state.started ? (
          <>
            <h1>Instructions</h1>
            {this.session.test.instructions}
            <br />
            <button onClick={this.onStartTest} className='btn btn-success'>
              Start Test
            </button>
            
          </>
        ) : (
          <>
            {this.state.questionList.length === 0 ? (
              'No Questions found'
            ) : (
              <><b>
                Remaining Time :
                {!this.state.lowtime?<>
                 {this.state.minutes}:{this.state.seconds}
                 </>:<>
                 <span style={{ marginLeft:'10px',backgroundColor:'red', color:'white' }}>{this.state.minutes}:{this.state.seconds}</span>
                 </>}
                 </b>

                <br />
                <table>    
                  <tr valign='top  '> 
                    <td width="20%">   
                            <div style={{display: 'inline-block'}}>
                  {this.state.questionList.map((q,i)=>{
                    return (<React.Fragment key={i}>
                     <div style={{maxHeight: '100px', overflow:'hidden', border:'1px solid black', background:(this.state.counter===i)?'yellow':'white'}}
                      onClick={()=>{this.setState({counter:i, currentQuestion: this.state.questionList[i]})}}
                     >
                     {i+1}. {q.Name}
                     </div>
                    </React.Fragment>);
                  })}
                  </div>
                  </td>
  <td width="80%">
                <div style={{ width:'100%', paddingTop:'50px', paddingBottom:'100px',paddingLeft:'10px',paddingRight:'10px',
                borderStyle:'solid',marginLeft: '10px', display: 'inline-block' }} className='Questions'>
                  <p>
                    <span style={{}}>{this.state.currentQuestion.Name}</span>
                  </p>
                  <input
                    type='radio'
                    name='batch'
                    value='1'
                    onChange={this.onChangeAnswer.bind(this, '1')}
                    checked={this.state.currentQuestion.answer === '1'}
                  />{' '}
                  Option1 : {this.state.currentQuestion.Option1}
                  <br />
                  <input
                    type='radio'
                    name='batch'
                    value='2'
                    onChange={this.onChangeAnswer.bind(this, '2')}
                    checked={this.state.currentQuestion.answer === '2'}
                  />{' '}
                  Option2 :{this.state.currentQuestion.Option2}
                  <br />
                  <input
                    type='radio'
                    name='batch'
                    value='3'
                    onChange={this.onChangeAnswer.bind(this, '3')}
                    checked={this.state.currentQuestion.answer === '3'}
                  />{' '}
                  Option3 :{this.state.currentQuestion.Option3}
                  <br />
                  <input
                    type='radio'
                    name='batch'
                    value='4'
                    onChange={this.onChangeAnswer.bind(this, '4')}
                    checked={this.state.currentQuestion.answer === '4'}
                  />{' '}
                  Option4 :{this.state.currentQuestion.Option4}
               <br/>   <button className="btn btn-danger" onClick={this.onClearAnswer}>Clear Answer</button>
                  {/* Chosen Answer : {this.state.currentQuestion.answer} {(''+this.state.currentQuestion.CorrectAns)===(''+this.state.currentQuestion.answer)?"TRUE":"FALSE"} */}
                  <br />
                  
                  {this.state.counter === 0 ? (
                    ''
                  ) : (
                    <button className='btn btn-success' onClick={this.onPrev}>
                      Previous
                    </button>
                  )}
                  
                  {this.state.counter < this.state.questionList.length - 1 ? (
                    <button className='btn btn-success' onClick={this.onNext}>
                      Next
                    </button>
                  ) : (
                    <button className='btn btn-success' onClick={this.onFinish}>
                      Finish
                    </button>
                  )}
                  
                </div>
                </td>
                </tr>
                

                </table>

              </>
            )}
          </>
        )}
      </React.Fragment>
    );
  }
}
export default QuestionList;

import React, { Component } from 'react';
import Axios from 'axios';
import Constants from './Constants';
import Session from './Session';

class Result extends Component {
  state = {
    Result: [],
    correct: 0,
    total: 0
  };
  // session = Session.getInstance();
  // componentDidMount() {
  //            Axios.get(
  //       Constants.BASE_URL +
  //         `result/getresultbytags?tags=${this.Result.join(',')}`
  //     ).then(res => {
  //       console.log('res', res.data);
  //       let result=res.data;

  //       this.setState({result: result });
  //     });
  //   }
  session = Session.getInstance();

  componentDidMount() {
    let total = 0;
    let correct = 0;
    let una=0;
    for (let question of this.session.TestQuestions) {
      if(!question.answer)
      {
        una++;
      }
      if (question.answer === question.CorrectAns) {
        correct++;
      }
      total++;
    }
    this.setState({ correct: correct, total: total, una:una });
  }

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th scope='col'>Test no.</th>
                <th scope='col'>Test Name</th>
                <th scope='col'>Total marks</th>
                <th scope='col'>Marks obtained</th>
                <th scope='col'>Unattempted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>{this.state.total}</td>
                <td>{this.state.correct}</td>
                <td>{this.state.una}</td>
              </tr>
                         </tbody>
          </table>
        </div>

        {this.state.total === this.state.correct ? (
          'All Answers were correct'
        ) : (
          <>
            {this.session.TestQuestions.map(q => {
              return <div  style={{  background:(q.CorrectAns===q.answer)?'#ddffdd':'#ffdddd'}}>
              <b>
              Question : {q.Name }<br/>
              1.{q.Option1}<br/>
              2.{q.Option2}<br/>
              3.{q.Option3}<br/>
              4.{q.Option4}<br/>
              Given Answer : {q.answer}<br/>
              Correct Answer : {q.CorrectAns}<br/>
              <br/>
              </b>
              </div>;
            })}
          </>
        )}
      </React.Fragment>
    );
  }
}
export default Result;

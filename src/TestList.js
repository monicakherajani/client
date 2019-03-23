import React, { Component } from 'react';
import Test from './Test';
import Axios from 'axios';
import Constants from './Constants';
import TutSidemenu from './TutSidemenu';
import Session from './Session';
class TestList extends Component {
  state = {
    tests: []
  };
  init = false;
  tags = null;

  session = Session.getInstance();

  render() {
    if (this.tags !== this.props.tags) {
      console.log('this', this.props.tags);
      Axios.get(
        Constants.BASE_URL + `test/gettestlist?tags=${this.props.tags}`
      ).then(res => {
        this.setState({ tests: res.data });
      });
      this.tags = this.props.tags;
    }

    console.log(this.state.test);
    this.state.tests.map(t => {
      return console.log(t.url);
    });
    return (
      <React.Fragment>
        <h1>Tests</h1>
        {/* Test List */}
        {this.state.tests.map(t => {
          return (
            <React.Fragment>
              
              <div className='container'>
                <div className='col-4'>
                  <div className='course-card'>
                    <div className='card-body' style={{ height: '200px' }}>
                      <h5 className='card-title'>{t.Name}</h5>
                      <p className='card-text'>
                        {t.Description}
                        <br />
                        {t.No_questions}
                        <br />
                        {t.Duration}
                      </p>
                      <a href='' className='btn btn-success'>
                        Give Test
                      </a>
                    </div>
                  </div>
                </div>
                {/* <a href="" className="testlist testlisttitle">Campus Placement Test</a> 
    <a href="./Test" className="testlist">Infosys</a>
    <a href="./Test" className="testlist">Tata Consultancy Services</a>
    <a href="./Test" className="testlist">Wipro</a>
    <a href="./Test" className="testlist">Larson and Turbo Infotech</a>
    <a href="./Test" className="testlist">Tata Technologies</a>
    <a href="./Test" className="testlist">Mpasis</a>
    <a  href=""className="testlist testlisttitle">State Service Main Examination</a>
    <a href="./Test" className="testlist">History and Geography</a>
    <a href="./Test" className="testlist">Indian Constitution and Indian Politics</a>
    <a href="./Test" className="testlist">Human Resource Development (HRD) and Human Rights</a>
    <a href="./Test" className="testlist">Economy and Planning, Economics of Development and Agriculture ,Science and Technology Development</a> */}
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
export default TestList;

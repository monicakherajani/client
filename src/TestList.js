import React, { Component } from 'react';
import Test from './Test';
import TutSidemenu from './TutSidemenu';
class TestList extends Component {
  render() {
    return (
        <React.Fragment>
          <TutSidemenu/>
        <div className='container'>
        
    <a href="" className="testlist testlisttitle">Campus Placement Test</a> 
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
    <a href="./Test" className="testlist">Economy and Planning, Economics of Development and Agriculture ,Science and Technology Development</a>

</div>
</React.Fragment>
    );
  }
}
export default TestList;
import React, { Component } from 'react';
import TcsImg from './tcs.jpg';
import Tcs2 from './Tcs2.png';
import Tcs3 from './Tcs3.jpg'
class Iasys extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='list-example' className='list-group'>
          <a className='list-group-item list-group-item-action' href='#about'>
            About{' '}
          </a>

          <a
            className='list-group-item list-group-item-action'
            href='#syllabus'
          >
            Syllabus
          </a>
          <a
            className='list-group-item list-group-item-action'
            href='#criteria'
          >
            Eligibility criteria
          </a>
          <a
            className='list-group-item list-group-item-action'
            href='./InfyLearn'
          >
            What will I learn?
          </a>
          <a className='list-group-item list-group-item-action' href=''>
            Course schedule
          </a>
        </div>
        <div style={{ marginLeft: '250px' }}>
          <div className='row'>
            <div className='column'>
              <img
                src={TcsImg}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={Tcs2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={Tcs3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

          <h3 style={{ color: 'blue' }}>
            <a name='about'>About Tata Consultancy Services</a>
          </h3>
          <p style={{ fontSize: '20px' }}>
          iASYS is a group of professionals, having years of experience in imparting enriched solutions to automobile industry.
          <br/> We work in close cooperation with our customers and all our solutions are completely tailored as per customer’s need.
          <br/>A dedicated software development, function analyst, system integration and project execution team is always working on delivering you the world class quality & reliable solutions. 
          <br/>We have broadened our horizon by providing more value added products and services along with Automation system. 
         <br/> Iasys is one of the customer trusted system integrator in the field of Automotive Testing & Data Management Solutions for R&D as well as for EOL. 
         <br/>Iasys have installed 300+ Engine / Vehicle / Brake / Transmission test automation and data management systems, including turnkey transient projects. 


            </p>
          <h3 style={{ color: 'blue' }}>
            <a name='syllabus'>Syllabus</a>
          </h3>
          <p style={{ fontSize: '20px' }}>
            The format of National Qualifier Test Exam Sections: <br />
            1.English
            <br />
            2. Quantitative Aptitude
            <br />
            3.Programming Concepts & Coding Test <br />
            Negative marking
            <br />
            Duration: 90 minutes
            <br />
          </p>
          <h3 style={{ color: 'blue' }}>
            <a name='criteria'>Eligibility Criteria</a>
          </h3>
          <p style={{ fontSize: '20px' }}>
         <br/> 1. 60% aggregate throughout (10th, 12th, diploma, B.E.)  the academic years. Students with 59% can also register. (received this communication regarding 59% over telephone from HR at 7 pm today)

<br/>2. Not carrying back lock of past semester/s  i.e. No Live/ active  back logs

<br/>3. No career gap i.e. No year gap  after 10th, after or between 12th, diploma  or  B.E.
 <br />
          </p>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
export default Iasys;

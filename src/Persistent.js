import React ,{Component } from 'react';
import PersiImg from './PersiImg.jpg';
import Persi2 from './Persi2.jpg';
import Persi3 from './Persi3.jpg';
class Persistent extends Component {
    render()
    {
        return(
            <React.Fragment>
  <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="#about">About </a>

  <a className="list-group-item list-group-item-action" href="#syllabus">Syllabus</a>
  <a className="list-group-item list-group-item-action" href="#criteria">Eligibility criteria</a>
  <a className="list-group-item list-group-item-action" href="./InfyLearn">What will I learn?</a>
  <a className="list-group-item list-group-item-action" href="">Course schedule</a>
  </div>
  <div style={{marginLeft: '250px'} }>
  <div className='row'>
            <div className='column'>
              <img
                src={PersiImg}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={Persi2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={Persi3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

                
                
               <h3 style={{color:'blue'}}><a name="about">About Persistent Private Ltd</a></h3>
               <p style={{fontSize:'20px'}}>Persistent Systems Limited is engaged in the business of building software products. The Company offers complete product life cycle services. The Company's segments include Infrastructure and Systems, Telecom and Wireless, Life science and Healthcare, and Financial Services. 
               <br/>The Company's products include Connected Healthcare, which is an integrated healthcare ecosystem; ShareInsights Platform, which allows organizations to analyze an overlay of enterprise data with public or cloud sources to derive insights; Digital Banking, and Accelerite, which provides cloud solutions, endpoint management and mobility. 
               <br/>The Company provides product engineering services, platform-based solutions and Internet protocol (IP)-based software products to its global customers. It has presence in North America, Europe and Rest of the World. Its subsidiaries include Persistent Systems France S.A.S.
               <br/>Persistent Systems Malaysia Sdn. Bhd. and Persistent Systems Ptv. Ltd.</p>
          
             <h3 style={{color:'blue'}}><a name="syllabus">Syllabus</a></h3>
             <p style={{fontSize:'20px'}}>To select the candidate the Persistent Systems will conduct various sections. They are available at the below. So take a look.
•	Written test.<br/>
•	Technical interview.<br/>
•	HR interview.<br/>
There are three rounds in this process.<br/>
 In the first sections questions like Verbal, quants, reasoning can be given. And next technical and HR interview can be conducted. Therefore each round has the separate cutoff. And every aspirant should meet the cutoff. So, candidates who have cleared all the series can be placed through Persistent Systems Recruitment 2018-2019. And also as a member of Persistent Systems.<br/>
 <br/>
 •	The written round consists of two written tests: The first test features 60 questions of which 5 are aptitude questions, and other 55 questions based on technical subjects like Data Structures, C/C++, Microprocessor, Java, DBMS, Operating Systems, Networking, and Communication Systems.<br/>
•	In the second test, the aspirant needs to write a program in C language.<br/>
•	The test is not adaptive type. You can also skip any question and come back to it later.<br/>

</p>  

<h3 style={{color:'blue'}}><a name ="criteria">Criteria</a></h3>
<p style={{fontSize:'20px'}}>
The eligibility criteria for Persistent Systems Recruitment 2018-2019 are available in the below. They are as follows<br/>
•	Candidates should be sound in the technical knowledge.<br/>
•	Aspirants must know basic computer knowledge.<br/>
•	People should have at least two certified courses like Java, Oracle, Html, and CSS, etc<br/>
•	Should have 65% minimum of their education.<br/>
•	Passion for working on the project.<br/>
•	Must be good in communication skills.<br/>
•	Time management should be there during their project work.<br/>
•	Self-learning should be there for the people.<br/>
•	Able to do their work as well as their work.<br/>

</p>
<br/>
               </div>
                </React.Fragment>



        );
    }
}
    export default Persistent;

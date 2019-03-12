import React ,{Component } from 'react';
import LTIimg from './Lti.jpg';
import LTI2 from './LTI2.png';
import LTI3 from './LTI3.jpg';
class LTI extends Component {
    render()
    {
        return(
            <React.Fragment>
  <div id="list-example" className="list-group">

  <a className="list-group-item list-group-item-action" href="/">Home </a>
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
                src={LTIimg}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={LTI2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={LTI3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

                
               <h3 style={{color:'blue'}}><a name="about">About Larson and Toubro Infotech</a></h3>
               <p style={{fontSize:'20px'}}>LTI is a global technology consulting and digital solutions company helping more than 300 clients succeed in a converging world. 
                   <br/>With operations in 30 countries, we go the extra mile for our clients and accelerate their digital transformation with LTI’s Mosaic platform enabling their mobile, social, analytics, IoT and cloud journeys.<br/>
                 <br/>  Founded 20 years ago as the information technology arm of the Larsen & Toubro group, the unique heritage gives unrivaled real-world expertise to solve the most complex challenges of enterprises across all industries.

</p>
             <h3 style={{color:'blue'}}><a name="syllabus">Syllabus</a></h3>
             <p style={{fontSize:'20px'}}>1.Online test<br/>
2. Group Discussion<br/>
3. Personal Interview <br/>
The Online test will consist of the following rounds (120 mins):<br/>
1.	Aptitude sections: Quantitative, Logical & Verbal questions<br/>
2.	Technical MCQs (Please refer to test topics in the Interview with LTI document sent below)<br/>
3.	Writing skills<br/>
4.	Coding skills (Programming & Query writing)<br/>
5.	Psychometric test<br/>
</p>  

<h3 style={{color:'blue'}}><a name ="criteria">Criteria</a></h3>
<p style={{fontSize:'20px'}}>Graduation Criteria:<br/>
Only full-time courses will be considered (Part Time/Correspondence courses will not be considered).<br/>
1) B.E / B-Tech in any discipline (CSE/ECE/IT/EEE/TELECOM/M.E/EIE/IE/IS  etc).<br/>
2) M.E/M.Tech Candidates are eligible to apply.<br/>
3) Engineering candidates who have passed out in the year 2018 & 2017 are eligible to apply.<br/>
4) The graduation should be a full-time course recognized by Central/State Government of India.<br/>
Please note that a candidate is expected to have good communication & interpersonal skills, along with a good command of technical subjects.<br/>
Academic Criteria:<br/>
1) A candidate must have more than 60% marks in 10th and 12th (or diploma).<br/>
2) A candidate must have a minimum of 60% marks in graduation.<br/>
3) The candidate should not have any gap after HSC (12th) and SSC(10th) or in between semesters of graduation.<br/>
4) A candidate should not have any pending backlogs at the time of appearing for L&T selection process.<br/>
</p>
<br/>
               </div>
                </React.Fragment>



        );
    }
}
    export default LTI;

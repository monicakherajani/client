import React, { Component } from 'react';
import infy2 from './Infy2.jpg';
import infy from './infy.jpg';
import infy3 from './infy3.jpg';
import { Link } from 'react-router-dom'

class Sidebar2 extends Component {
    render()  {

return (
  <React.Fragment>
    
    <div id="list-example" className="list-group">
    <Link className="list-group-item list-group-item-action" to="/">Home</Link>
  <Link className="list-group-item list-group-item-action" to="#about">About</Link>

  <Link className="list-group-item list-group-item-action" to="#syllabus">Syllabus</Link>
  {/* <Link className="list-group-item list-group-item-action" to="./InfyLearn">What will I learn?</Link> */}
  <Link className="list-group-item list-group-item-action" to="">Course schedule</Link>
 
</div>
<div style={{marginLeft:'250px'} }>
<div className='row'>
            <div className='column'>
              <img
                src={infy}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={infy2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={infy3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

{/* <img src={infy2} className="infy2-img"/> */}


<h3 style={{color:'blue'}}><a name="about" >About Infosys</a></h3>
<p style={{fontSize:'20px'}}>Infosys Limited (formerly Infosys Technologies Limited) is an Indian multinational corporation that provides business consulting, information technology and outsourcing services. <br/>
  It has its headquarters in Bengaluru, Karnataka, India.<br/>

Infosys is the second-largest Indian IT company by 2017 revenues and 596th largest public company in the world in terms of revenue. On September 28, 2018, its market capitalisation was $44.32 billion. The credit rating of the company is A− (rating by Standard & Poor's).</p><br/>

<h3 style={{color:'blue'}}>History</h3>
<p style={{fontSize:'20px'}}>Infosys was established by seven engineers in Pune, India, with an initial capital of $250 in 1981.
  <br/> It was registered as Infosys Consultants Private Limited on 2 July 1981.In 1983, it relocated its office to Bengaluru, Karnataka, India.</p>
<h3 style={{color:'blue'}}>Revenue</h3>
<p style={{fontSize:'20px'}}>Revenue growth: Its annual revenue touched US$100 million in 1999, US$1 billion in 2004 and US$10 billion in 2017.</p><br/>
<h3><a name="syllabus" style={{color:'blue'}}>Syllabus</a></h3>

<p style={{fontSize:'20px'}}>1.Logical Reasoning     15<br/>
2.Aptitude	               10<br/>
3.General English          40<br/>
Total	                   65<br/>
The written test consists of 65 questions.
And the time allocated for this online test is 1 hour, 30 minutes.
</p>
<h3><a name="criteria" style={{color:'blue'}}>Graduation Criteria</a></h3>
<p style={{fontSize:'20px'}}>1) B.E / B.Tech  in any discipline (CSE/ECE/IT/CIVIL/ME/EEE/Automobile/Aeronautical etc.)<br/>
2) Engineering candidates who have passed out in the year 2018 & 2017 are eligible to apply.<br/>
3) M.Sc graduates in Computer Science/ Information technology can apply.<br/>
4) MCA graduates are also eligible to apply.<br/>
</p>
<h3 style={{color:'blue'}}>Eligibility Criteria</h3><br/>
<p style={{fontSize:'20px'}}>

1) A candidate must have more than 60% marks in 10th and 12th (or diploma).<br/>
2) A candidate must have a minimum of 65% marks or CGPA 6.5 in graduation.<br/>
3) A maximum of 2 years of gap is permissible in the entire education.<br/>
4) A candidate should not have any pending backlogs at the time of appearing for Infosys selection process.<br/>
</p>
</div>
</React.Fragment>
 );

}


}
export default Sidebar2;
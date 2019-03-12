import React ,{Component } from 'react';
import wiproImg from './wipro.jpg';
import wipro2 from './wipro2.png';
import wipro3 from './wipro3.jpg';
class Wipro extends Component {
    render()
    {
        return(
            <React.Fragment>
  <div id="list-example" className="list-group">
  <a className="list-group-item list-group-item-action" href="/">Home</a>

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
                src={wiproImg}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={wipro2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={wipro3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

                
                
               <h3 style={{color:'blue'}}><a name="about">About Wipro</a></h3>
               <p style={{fontSize:'20px'}}>Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. It is headquartered in Bengaluru, India.[3]

In 2013, Wipro demerged its non-IT businesses into separate companies.<br/>
<h3 style={{color:'blue'}}>History</h3>
The company was incorporated on 29 December 1945 in Amalner, Maharashtra by Mohamed Premji as "Western India Vegetable Products Limited", later abbreviated to "Wipro". It was initially set up as a manufacturer of vegetable and refined oils in Amalner, Maharashtra, British India, under the trade names of Kisan, Sunflower, and Camel.<br/>
In 1966, after Mohamed Premji's death, his son Azim Premji returned from Stanford University and took over Wipro as its chairman at the age of 21.
<br/>During the 1970s and 1980s, the company shifted its focus to new business opportunities in the IT and computing industry, which was at a nascent stage in India at the time. 
<br/>On 7 June 1977, the name of the company changed from Western India Vegetable Products Limited, to Wipro Products Limited.<br/>
The year 1980 marked the arrival of Wipro in the IT domain. In 1982, the name was changed from Wipro Products Limited to Wipro Limited. Meanwhile, Wipro continued to expand in the consumer products domain with the launch of "Ralak" a Tulsi based family soap and "Wipro Jasmine", a toilet soap. In 1988 Premji took a loan of 1 million dollars from Sonkar and Sons to set up the project. 
<br/>Later the entire loan amount was waived.
<br/>Wipro Limited is a global provider of comprehensive IT solutionsand services, including Systems Integration, Consulting, Information Systems outsourcing, IT-enabled services, R&D services.

<br/>Wipro entered into the technology business in 1981 and has over 160,000 employees and clients across 54 countries. IT revenues were at $7.1 billion for the year ended 31 March 2015, with a repeat business ratio of over 95%.



</p>
             <h3 style={{color:'blue'}}><a name="syllabus">Syllabus</a></h3>
             <p style={{fontSize:'20px'}}>	There are 5 sections in Wipro Online Test Paper –
1.Quantitative Aptitude<br/>
2.Logical Reasoning<br/>
3.Verbal English<br/>
4.Computer Coding<br/>
5.Essay Writing<br/>
Wipro Written Test Paper Syllabus<br/>
If applying via On Campus then –<br/>
Three AMCAT sections Quants, English and Logical are conducted together which has the following division of  questions and time given is variable. Other than that there are 2 coding questions and 1 Essay Writing Section –
Written Test<br/>
1.Logical<br/>
2.English<br/>
3.Quants<br/>
4.Coding Test<br/>
5.Essay Writing Test<br/>
6.Technical Interview<br/>
7.HR Interview	<br/>
<p/>
<h3 style={{color:'blue'}}><a name ="criteria">Criteria</a></h3>
<p style={{fontSize:'20px'}}><h5>Graduation Criteria</h5><br/>
Only full time courses will be considered (Part Time/Correspondence courses will not be considered).

<br/>1.B.E / B.Tech  in any discipline (CSE/ECE/IT/CIVIL/ME/EEE/Automobile/Aeronautical etc.)<br/>

Academic Criteria<br/>
1.A candidate must have more than 60% marks in 10th and 12th (or diploma).<br/>
2.A candidate must have a minimum of 60% marks in graduation and Post Graduation ( if applicable).<br/>
3.A candidate should not have any pending backlogs at the time of appearing for Wipro selection process.<br/>
4.The graduation should be a Full-Time course recognized by Central/State government of India.<br/>
5.A candidate must have completed all the exit formalities in the previous organization before joining Wipro.<br/>
<br/>
<br/>
</p>
</p>
               </div>
                </React.Fragment>



        );
    }
}
    export default Wipro;

import React , {Component}from 'react';
import TtlImg from './TTL.jpg';
import TTL2 from './TTL2.png';
import TTL3 from './TTL3.jpg';

class TTL extends Component {
    render(){
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
                src={TtlImg}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={TTL2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={TTL3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

   
   <h3 style={{color:'blue'}}><a name="about">About Tata Technologies Ltd</a></h3>
   <p style={{fontSize:'20px'}}>Tata Technologies Limited is a company in the Tata Group that provides services in engineering and design, product lifecycle management, manufacturing, product development, and IT service management to automotive and aerospace original equipment manufacturers and their suppliers. <br/>
   It is a subsidiary of Tata Motors. The company is active in North America, Europe, the Middle East and the Asia Pacific region.

<br/>The company was founded in 1989 and acquired INCAT, a European-based company, in 2005. Tata Technologies is internationally headquartered in Singapore, with regional headquarters in the United States (Novi, Michigan), India (Rajiv Gandhi Infotech Park in Hinjawadi - outside Pune), ThaneOne Corporate Business IT Park, Thane and the UK (Coventry). The company operates in 25 countries, and has a combined global work force of more than 8,000 employees, including around 4,000 professionals worldwide.
<br/>15th Largest IT company in the Fortune India Infotech Industry ranking.

<br/>

</p>
<h3 style={{color:'blue'}}>< a name="syllabus">Syllabus</a></h3>
<p style={{fontSize:'20px'}}>Tata Technologies Selection Process<br/>
1.	Aptitude written test online<br/>
2.	Technical interview<br/>
3.	HR interview<br/>
No negative marking.<br/>
4 Test - 1 hr, 60 marks, domain 30 marks 30 general aptitude ( 8- English,8 GK, 7 logical, 7 quantitative - this is as per previous pattern)

</p>
<h3 style={{color:'blue'}}><a name="criteria">Eligibility Criteria</a></h3>
<p style={{fontSize:'20px'}}>

1.	Min 60% / 6.40 CGPA through X, XII, and till 3rd year.<br/>
2.	No gaps between academics .<br/>
3.	1 year gap will be allowed after XII for entrance exam.<br/>
4.	No Backlog<br/>
</p>
<br/>
            </div>
            </React.Fragment>
            
        );
    }
}
    export default TTL;

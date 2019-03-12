import React , {Component}from 'react';
import EpicImg from './Epic.jpg';
import Epic2 from './Epic2.jpg';
import Epic3 from './Epic3.jpg';

class Epic extends Component {
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
                src={Epic2}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={EpicImg}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={Epic3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>
<br/>

   
   <h3 style={{color:'blue'}}><a name="about">About Epic Research </a></h3>
   <p style={{fontSize:'20px'}}>Epic Research is a leading financial services provider with presence in Indian and other global capital markets. With its full fledged research operations, Epic Research - Investment Adviser has proven itself as company that produces and delivers high accuracy tips and recommendations for "
Equities " For stocks listed on BSE and NSE.1st Rank - In Indore.<br/>

Listed in Top 5 companies in domain of Share advisory all over India.<br/>

In Global Markets we stand with our presence in Top 25 organization across the globe in domain of Share advisory.
<br/>

Derivatives " BSE, NSE and Nifty Futures and Options<br/>
Commodity - MCX, NCDEX and COMEX<br/>
Forex - Domestic and International Currencies<br/>
In addition to the retail services above, Epic also caters to institutional clients like brokers, mutual funds and banks and fulfils their custom research needs. To learn more about the institutional business of Epic please visit -www.epicresearch.co/institutional-services
Epic also believes that an educated customer is an empowered customer. To help our customers and non customers understand the financial markets better, we conduct regular webinars and seminars. 
<br/>A team of professionals is dedicated to this cause which is 100% free for all

</p>
<h3 style={{color:'blue'}}>< a name="syllabus">Syllabus</a></h3>
<p style={{fontSize:'20px'}}>Selection procedure: <br/>


1.Written Aptitude test<br/>
2.Group discussion<br/>
3.Personal interview<br/>

</p>
<h3><a name="criteria">Eligibility Criteria</a></h3>
<p style={{fontSize:'20px'}}>
Plain Graduates for AFC Domestic/Global & MBA for Management Trainee with 55% through academics (10th, 12th, UG, PG)<br/>
For 2018:The joining would be immediate, hence all the necessary leaves should be discussed before selection.<br/>

For 2019 : The joining will be as per the examination schedule.<br/>

</p>
<br/>
            </div>
            </React.Fragment>
            
        );
    }
}
    export default Epic;

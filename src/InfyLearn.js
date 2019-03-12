import React ,{Component} from 'react';
import Sidebar2 from './Sidebar2';
import Sidebar1 from './Sidebar1';
class InfyLearn extends Component{
    render()
    {
        return(
            <React.Fragment>
              
              <Sidebar1/>

          <div className='container'>
          
      <a href="" className="testlist testlisttitle">Verbal</a> 
      <a href="./Test" className="testlist">1.Reading Comprehension</a>
      <a href="./Test" className="testlist">2.Sentence Completion</a>
      <a href="./Test" className="testlist">3.Sentence Improvement</a>
      <a href="./Test" className="testlist">4.Error Spotting</a>
      <a href="./Test" className="testlist">5.Vocabulary</a>
      
      <a  href=""className="testlist testlisttitle">Quantitative</a>
      <a href="./Test" className="testlist">1.Percentage</a>
      <a href="./Test" className="testlist">2.Cryptarithmetic</a>
      <a href="./Test" className="testlist">3.Mixtures and Alligation</a>
      <a href="./Test" className="testlist">4.Time and Distance</a>
      <a href="./Test" className="testlist">5.Time and Work</a>
      <a href="./Test" className="testlist">6.Probability</a>
      <a href="./Test" className="testlist">7.Profit and Loss</a>
      <a href="./Test" className="testlist">8.Permutation and Combinations</a>
      <a href="./Test" className="testlist">9.Mensuration.</a>
     
      <a  href=""className="testlist testlisttitle">Logical Reasoning</a>
      <a href="./Test" className="testlist">1.	Seating Arrangements.</a>
      <a href="./Test" className="testlist">2.Number Series.</a>
      <a href="./Test" className="testlist">3.Data Sufficiency</a>
      <a href="./Test" className="testlist">4.Syllogism.</a>
      <a href="./Test" className="testlist">5.Data Interpretation.</a>
      
 

  </div>
  </React.Fragment>
  
        );

    }
}














export default InfyLearn;
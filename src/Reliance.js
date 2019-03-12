import React, { Component } from 'react';
import jio1 from './jio1.jpeg';
import jio2 from './jio2.jpg';
import jio3 from './jio3.jpg'
class Reliance extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='list-example' className='list-group'>
        <a className='list-group-item list-group-item-action' href='/'>
            Home{' '}
          </a>
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
                src={jio1}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={jio2}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
            <div className='column'>
              <img
                src={jio3}
                style={{  height: '300px', width: '100%' }}
              />
            </div>
          </div>

          <h3 style={{ color: 'blue' }}>
            <a name='about'>Reliance Jio</a>
          </h3>
          <p style={{ fontSize: '20px' }}>
          Reliance Jio Infocomm Limited, d/b/a Jio, is an Indian mobile network operator. 
          <br/>Owned by Reliance Industries and headquartered in Navi Mumbai, Maharashtra, it operates a national LTE network with coverage across all 22 telecom circles. 
          <br/>Jio does not offer 2G or 3G service, and instead uses voice over LTE to provide voice service on its network.[3][4]

Jio soft launched on 27 December 2015 (the eve of what would have been the 83rd birthday of Reliance Industries founder Dhirubhai Ambani), with a beta for partners and employees,
and became publicly available on 5 September 2016. 
<br/>As of 31 December 2018, it is the third largest mobile network operator in India and the nineth largest mobile network operator in the world with over 280.
<br/>117 million subscribers.

On 5 July 2018, fixed line broadband service named Gigafiber, was launched by the Reliance Industries Limited's chairman Mukesh Ambani, during the company's Annual General Meeting.
            </p>
          <h3 style={{ color: 'blue' }}>
            <a name='syllabus'>Syllabus</a>
          </h3>
          <p style={{ fontSize: '20px' }}>
          <br/>1.Group Discussion
            <br/>2.Aptitude & Coding test
            TECHNICAL:
            <br/>Data Structures, SQL, DBMS, Operating System Concepts, C, C++,
<br/>Java, Data structure, PL SQL, OS concepts, DBMS & CODD fundamentals, 
<br/>graphs, linked list, arrays, etc.
 <br/>GENERAL APTITUDE:
 <br/>Probability, Permutations & Combinations, Algebra, Averages, Time Speed & Distance, 
 <br/>Time & Work, Profit & Loss, Ratio & Proportion, Simple & Compound Interest, Percentage, 
 <br/>Number Series, Mixtures & Allegations, Simplification, Number System, Heights and Distances,
<br/>Geometry & Mensuration, Data Sufficiency, Logarithms, Progressions
 <br/>LOGICAL Reasoning
 <br/>Puzzles, Syllogisms, Binary Logic, Clocks & Calendars, Cubes & Dice, Series, 
 <br/>Analogies, Classification, Blood Relations, Directions & Distances, Ordering & Ranking, 
 <br/>Coding-Decoding, Non-Verbal Reasoning, Data Sufficiency, Seating Arrangement, Venn Diagrams,
 <br/>Arrangements & Patterns, Problem Solving, Coded Inequalities, Double Lineup, Logical Deductions, Routes & Networks, Scheduling, Grouping & Selections Verbal Reasoning
 <br/>VERBAL
<br/>Reading Comprehension, Synonyms & Antonyms, Fill in the Blanks, Analogy,
<br/>Theme Detection, Direct & Indirect Speech, Active & Passive Voice, Para jumbles, 
<br/>Sentence Jumbles, Error Spotting, Phrase Replacement, One Word Substitution, Spellings
 


          </p>
          <h3 style={{ color: 'blue' }}>
            <a name='criteria'>Eligibility Criteria</a>
          </h3>
          <p style={{ fontSize: '20px' }}>
          The candidate must have a Bachelor’s Degree in any discipline from recognized university/institution with 60% marks in aggregate.
<br/>The candidate must not have education gap of more than 1 year.
<br/>The candidate must have good communication skills.
<br/>The candidate must have the knowledge about his/her concerned field.
<br />
</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Reliance;

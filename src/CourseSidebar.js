import React, { Component } from 'react';


class CourseSidebar extends Component {
  state = {
  
    currentBlock:'videos'
  };
  onCurrentBlock=(blockname)=>{
    this.setState({currentBlock:blockname});
  }
  render() {
    console.log('this.props.onCurrentBlock'+this.props.onCurrentBlock);
    return (
      <div id='list-example' className='list-group'>
        <a className='list-group-item list-group-item-action' href='/'>
          Home
        </a>
        <a
          className='list-group-item list-group-item-action'
          href='./Downloads'
        >
          Information about Course
        </a>
        <button
          className='list-group-item list-group-item-action'
          onClick={this.props.onCurrentBlock.bind(this, 'videos')}
        >
          Videos
        </button>
        <button
          className='list-group-item list-group-item-action'
          onClick={this.props.onCurrentBlock.bind(this, 'tests')}
        >
          Test
        </button>
        {/* <a
          className='list-group-item list-group-item-action'
          href='./Downloads'
        >
          Assignment
        </a> */}
        {/* <a className='list-group-item list-group-item-action' href='./Register'>
          Download Study material
        </a> */}
        <a className='list-group-item list-group-item-action' href='./'>
          Contact
        </a>
        <a
          className='list-group-item list-group-item-action'
          href='./VideoList'
        >
          About us
        </a>

        <a className='list-group-item list-group-item-action' href='./Exams'>
          Exams
        </a>
      </div>
    );
  }
}
export default CourseSidebar;

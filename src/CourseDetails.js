import React, { Component } from 'react';
import Session from './Session';
import VideoList from './VideoList';

class CourseDetails extends Component {
  state = {};
  session = Session.getInstance();

  render() {
    return( <>
        <VideoList tags='swing'></VideoList>
    </>);
  }
}

export default CourseDetails;

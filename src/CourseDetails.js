import React, { Component } from 'react';
import Session from './Session';
import VideoList from './VideoList';
import Axios from 'axios';
import Constants from './Constants';
import TestList from './TestList';

class CourseDetails extends Component {
  state = {
    course:null
  };
  session = Session.getInstance();

  getTags()
  {
    if(this.state.course)
    {
      let tags=this.state.course.TagArray.join(',');
      console.log('tags',tags);
      return tags;
    }
    return '';
  }

  render() {

    if(this.state.course===null)
    {
      Axios.get(Constants.BASE_URL+'coursecontent/getcoursebyid?id='+this.props.match.params.id).then(res=>{
        console.log('res.data',res.data);
        this.setState({course:res.data});
      });
    }

    return( <>
    <h1>Course : {this.props.match.params.name}</h1>
        <VideoList tags={this.getTags()}></VideoList>
        <TestList tags={this.getTags()}></TestList>
-    </>);
  }
}

export default CourseDetails;

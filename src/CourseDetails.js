import React, { Component } from 'react';
import Session from './Session';
import VideoList from './VideoList';
import Axios from 'axios';
import Constants from './Constants';
import TestList from './TestList';
import CourseSidebar from './CourseSidebar';

class CourseDetails extends Component {
  state = {
    course:{}
  };
  session = Session.getInstance();

  componentDidMount()
  {
    let id=this.props.match.params.id;
    var promise1 = Axios.get(Constants.BASE_URL+'coursecontent/getcoursebyid?id='+this.props.match.params.id);
    var promise2 = Axios.get(
        Constants.BASE_URL +
          'coursecontent/getallcoursecontent?categoryid=' +
          id
      );
    
            
      Promise.all([promise1, promise2]).then((values)=> {
        console.log('values',values);
        let course=values[0].data||[];
        let coursecontent=values[1].data||[];

        this.setState({course:course});

      }).catch((e)=>
      {
        console.log('error',e);
      });
  }

  getTags()
  {
    console.log('getTags()',this.state.course);
    if(this.state.course && this.state.course.TagArray)
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
    {/* <iframe src={this.state.course.url} title='info'></iframe> */}
    <div></div>
        CourseDetailsTags : {this.getTags()}
        <CourseSidebar/>
        <VideoList tags={this.getTags()}></VideoList>
       
        
        <TestList tags={this.getTags()}></TestList>
    </>);
  }
}

export default CourseDetails;

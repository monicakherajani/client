import React, { Component } from 'react';
import Session from './Session';
import VideoList from './VideoList';
import Axios from 'axios';
import Constants from './Constants';
import TestList from './TestList';
import CourseSidebar from './CourseSidebar';

class CourseDetails extends Component {
  state = {
    course: {},
    currentBlock: 'videos'
  };
  session = Session.getInstance();

  componentDidMount() {
    let id = this.props.match.params.id;
    var promise1 = Axios.get(
      Constants.BASE_URL +
        'coursecontent/getcoursebyid?id=' +
        this.props.match.params.id
    );
    var promise2 = Axios.get(
      Constants.BASE_URL + 'coursecontent/getallcoursecontent?categoryid=' + id
    );

    Promise.all([promise1, promise2])
      .then(values => {
        console.log('values', values);
        let course = values[0].data || [];
        let coursecontent = values[1].data || [];

        this.setState({ course: course });
      })
      .catch(e => {
        console.log('error', e);
      });
  }

  getTags() {
    console.log('getTags()', this.state.course);
    if (this.state.course && this.state.course.TagArray) {
      let tags = this.state.course.TagArray.join(',');
      console.log('tags', tags);
      return tags;
    }
    return '';
  }

  onCurrentBlock = blockname => {
    this.setState({ currentBlock: blockname });
  };

  render() {
    if (this.state.course === null) {
      Axios.get(
        Constants.BASE_URL +
          'coursecontent/getcoursebyid?id=' +
          this.props.match.params.id
      ).then(res => {
        console.log('res.data', res.data);
        this.setState({ course: res.data });
      });
    }

    return (
      <>
        <h1>Course : {this.props.match.params.name}</h1>
        {/* <iframe src={this.state.course.url} title='info'></iframe> */}
        <div />
        {/* <button onClick={this.onCurrentBlock.bind(this,'videos')}>Videos</button>
    <button onClick={this.onCurrentBlock.bind(this,'tests')}>Tests</button>
        CourseDetailsTags : {this.getTags()} */}
        <table>
          <tr>
            <td valign='top'>
              <CourseSidebar onCurrentBlock={this.onCurrentBlock} />
            </td>
            <td>
              {this.state.currentBlock === 'videos' ? (
                <VideoList tags={this.getTags()} />
              ) : (
                ''
              )}
              </td>
              <td>

              {this.state.currentBlock === 'tests' ? (
                <TestList
                  // style={{ display: 'inline-block' }}
                  tags={this.getTags()}
                />
              ) : (
                ''
              )}
            </td>
            
          </tr>
        </table>
      </>
    );
  }
}

export default CourseDetails;

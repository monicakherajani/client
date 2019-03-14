import React, { Component } from 'react';
// import frame from 'react-frame-component';
import Axios from 'axios';
import Constants from './Constants';
import Session from './Session';

class VideoList extends Component {
  state = {
    videos: []
  };

  init = false;
  tags = null;

  session = Session.getInstance();
// copy this code in test ques resorces n ad 1 line in coursedetails

  render() {
    if (this.tags !== this.props.tags) {
      console.log('this', this.props.tags);
      Axios.get(
        Constants.BASE_URL + `video/getvideolist?tags=${this.props.tags}`
      ).then(res => {
        this.setState({ videos: res.data });
      });
      this.tags = this.props.tags;
    }

    console.log(this.state.videos);
    this.state.videos.map(v => {
      return console.log(v.url);
    });
    return (
      <React.Fragment>
        {/* Video List */}
        {this.state.videos.map(v => {
          return (
            <>
              <div className='video-card'>
                <h1>{v.VName}</h1>
                <iframe
                  title={v.VName}
                  width='560'
                  height='315'
                  src={'https://www.youtube.com/embed/' + v.url}
                  frameborder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                />
                <p>{v.VDescription}</p>
              </div>
            </>
          );
        })}
      </React.Fragment>
    );
  }
}
export default VideoList;

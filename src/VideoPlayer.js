import React, { Component } from 'react';
import Session from './Session';

class VideoPlayer extends Component {
  state = {
    video: {}
  };

  session=Session.getInstance();

  render() {
      this.state.video=this.session.currentvideo;
    return (
      <>
      
        <div style={{marginLeft:'250px'}}className='video-card'>
          <h1>{this.state.video.VName}</h1>
          <iframe
            title={this.state.video.VName}
            width='560'
            height='315'
            src={'https://www.youtube.com/embed/' + this.state.video.url}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true}
          />
          <p>{this.state.video.VDescription}</p>
        </div>
      </>
    );
  }
}

export default VideoPlayer;
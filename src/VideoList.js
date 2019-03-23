import React, { Component } from 'react';
// import frame from 'react-frame-component';
import Axios from 'axios';
import Constants from './Constants';
import Session from './Session';
import { Redirect, Link } from 'react-router-dom';

class VideoList extends Component {
  state = {
    videos: []
  };

  init = false;
  tags = null;

  session = Session.getInstance();

  onVideoClick=(v)=>{
    this.session.currentvideo=v;
    console.log('props',this.props);
    this.setState({gotoplayer:true});
  };

  render() {
    if(this.state.gotoplayer)
    {
      this.state.gotoplayer=false;
      return <Redirect to={'/VideoPlayer'} />;
    }
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
        Tags : {this.tags} PropsTags: {this.props.tags}<br/>
        {/* Video List */}
        {this.state.videos.map((v,i) => {
          return (
            <React.Fragment key={i}>
            
              <div style={{marginLeft:'250px'}} className='video-card' onClick={this.onVideoClick.bind(this,v)}>
                <h1>{v.VName}</h1>
                {/* <iframe
                  
                  title={v.VName}
                  width='560'
                  height='315'
                  src={'https://www.youtube.com/embed/' + v.url}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen={true}
                /> */}
                <p>{v.VDescription}</p>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
export default VideoList;

import React, { Component } from 'react';

class Message extends Component {
  render() {
    let name = this.props['message'];
    return <span>{name}</span>;
  }
}

export default Message;
